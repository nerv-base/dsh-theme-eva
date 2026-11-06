import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { build } from "esbuild";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { Window } from "happy-dom";

const bundle = await build({
  stdin: {
    contents:
      'export { installTheme } from "./src/client/theme.js"; export { createPrefs } from "./src/client/prefs.js"; export { makeSettingsRow, makeBrandName } from "./src/client/components.jsx";',
    resolveDir: process.cwd(),
  },
  bundle: true, write: false, format: "cjs", platform: "node", external: ["react"], loader: { ".svg": "text" },
});
const module = { exports: {} };
new Function("require", "module", "exports", bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { installTheme, createPrefs, makeSettingsRow, makeBrandName } = module.exports;

function useDom() {
  const window = new Window();
  const previous = new Map();
  const globals = { window, document: window.document, localStorage: window.localStorage, CustomEvent: window.CustomEvent, addEventListener: window.addEventListener.bind(window), IS_REACT_ACT_ENVIRONMENT: true };
  for (const [key, value] of Object.entries(globals)) {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  }
  return {
    window,
    restore() {
      for (const [key, descriptor] of previous) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else delete globalThis[key];
      }
      window.close();
    },
  };
}

/** Minimal Client ctx: configForms (theme-eva + ui-theme), a theme registry and effects. */
function fakeCtx(initial) {
  const disposers = [];
  const listeners = new Map();
  const log = [];
  const themes = new Map();
  let preference = "dark";
  const emit = (name, payload) => (listeners.get(name) ?? []).forEach((fn) => fn(payload));
  const snapshot = () => ({ preference, themes: [...themes.keys()].map((id) => ({ id })) });
  const form = (value) => {
    const subs = new Set();
    let state = { status: "ready", writable: true, value };
    return {
      getSnapshot: () => state,
      subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
      async set(field, v) { state = { ...state, value: { ...state.value, [field]: v } }; subs.forEach((fn) => fn()); return true; },
      push(value) { state = { ...state, value }; subs.forEach((fn) => fn()); },
    };
  };
  const forms = { "theme-eva": form({ ...initial }), "ui-theme": form({ preference: "dark" }) };
  const ctx = {
    log, themes, forms,
    effect(fn) { const d = fn(); if (typeof d === "function") disposers.push(d); },
    on(name, fn) { listeners.set(name, [...(listeners.get(name) ?? []), fn]); },
    configForms: { get: (ns) => forms[ns] },
    theme: {
      register({ id, tokens }) {
        if (themes.has(id)) throw new Error(`duplicate theme ${id}`);
        themes.set(id, tokens);
        log.push(`register ${id}`);
        return () => {
          themes.delete(id);
          log.push(`retract ${id}`);
          if (preference === id) { preference = "system"; log.push("fallback"); }
        };
      },
      setTheme(id) { preference = id; log.push(`set ${id}`); emit("theme/change", snapshot()); },
      getTheme: snapshot,
    },
    dispose() { while (disposers.length) disposers.pop()(); },
  };
  return ctx;
}

test("switch handle moves between units without a stock-palette gap and persists the choice", async () => {
  const dom = useDom();
  const ctx = fakeCtx({ enabled: true, cinematic: true, voice: true, scanBeam: true, syncMeter: true });
  try {
    const prefs = createPrefs(ctx);
    const handle = installTheme(ctx, prefs);
    const events = [];
    dom.window.addEventListener("dsh-theme-eva:change", (e) => events.push(e.detail));

    assert.equal(handle.getUnit().id, "02", "Unit-02 is the default");
    assert.deepEqual(handle.units.map((u) => u.id).sort(), ["01", "02"]);
    assert.equal(ctx.theme.getTheme().preference, "eva-02");
    assert.equal(dom.window.document.body.dataset.evaTheme, "02");
    assert.equal(ctx.themes.get("eva-02")["--eva-accent"], "#d8262e");

    ctx.log.length = 0;
    assert.equal(await handle.setUnit("01"), true);
    assert.equal(ctx.forms["theme-eva"].getSnapshot().value.unit, "01", "written to the Host settings section");
    assert.deepEqual(ctx.log, ["register eva-01", "set eva-01", "retract eva-02"], "new theme is active before the old one leaves");
    assert.equal(handle.getUnit().id, "01");
    assert.equal(ctx.themes.get("eva-01")["--eva-accent"], "#8d4dde");
    assert.equal(ctx.themes.get("eva-01")["--eva-orange"], ctx.themes.get("eva-01")["--eva-marking"]);
    const skins = [...dom.window.document.querySelectorAll('style[data-plugin-css="dsh-theme-eva/skin"]')];
    assert.deepEqual(skins.map((s) => s.dataset.evaUnit), ["01"], "exactly one skin tag, for the new unit");
    assert.match(skins[0].textContent, /初号機/);
    assert.equal(dom.window.document.body.dataset.evaTheme, "01");
    assert.deepEqual(events.at(-1), { unit: "01", themeId: "eva-01" });

    await assert.rejects(handle.setUnit("03"), RangeError);
    assert.equal(handle.getUnit().id, "01");

    // A Host-side change (another window, settings document) is followed too.
    ctx.forms["theme-eva"].push({ ...ctx.forms["theme-eva"].getSnapshot().value, unit: "02" });
    assert.equal(handle.getUnit().id, "02");
    assert.equal(ctx.theme.getTheme().preference, "eva-02");

    ctx.log.length = 0;
    await handle.setEnabled(false);
    assert.equal(handle.getUnit(), undefined);
    assert.deepEqual(ctx.log, ["set dark", "retract eva-02"], "the user's own appearance comes back");
    assert.equal(dom.window.document.body.dataset.evaTheme, undefined);
    assert.deepEqual(events.at(-1), { unit: null, themeId: null });

    // Switching units while the theme is off only records the choice.
    await handle.setUnit("01");
    assert.equal(ctx.themes.size, 0);
    await handle.setEnabled(true);
    assert.equal(handle.getUnit().id, "01");
  } finally {
    ctx.dispose();
    dom.restore();
  }
});

test("a stored Unit-01 choice survives as the first-paint hint and invalid values fall back", async () => {
  const dom = useDom();
  const ctx = fakeCtx({ enabled: true, unit: "01" });
  try {
    const prefs = createPrefs(ctx);
    assert.equal(prefs.get().unit, "01");
    assert.match(dom.window.localStorage.getItem("dsh-theme-eva:prefs-hint"), /"unit":"01"/);
    ctx.forms["theme-eva"].push({ enabled: true, unit: "99" });
    assert.equal(prefs.get().unit, "02");
    ctx.forms["theme-eva"].push({ enabled: true, unit: true });
    assert.equal(prefs.get().unit, "02");
  } finally {
    ctx.dispose();
    dom.restore();
  }
});

test("settings picker and brand seat follow the selected unit", async () => {
  const dom = useDom();
  const ctx = fakeCtx({ enabled: true });
  try {
    const prefs = createPrefs(ctx);
    const Row = makeSettingsRow(prefs);
    const Name = makeBrandName(prefs);
    dom.window.document.body.innerHTML = '<div id="row"></div><div id="name"></div>';
    const row = createRoot(dom.window.document.querySelector("#row"));
    const name = createRoot(dom.window.document.querySelector("#name"));
    const t = (key) => key;
    await act(async () => {
      row.render(React.createElement(Row, { t }));
      name.render(React.createElement(Name));
    });
    const options = () => [...dom.window.document.querySelectorAll(".eva-unit-option")];
    assert.equal(options().length, 2);
    const checked = () => options().find((o) => o.getAttribute("aria-checked") === "true").textContent;
    assert.match(checked(), /unit\.02/);
    assert.match(dom.window.document.querySelector("#name").textContent, /弐号機/);
    const unit01 = options().find((o) => o.textContent.includes("unit.01"));
    await act(async () => unit01.click());
    assert.match(checked(), /unit\.01/);
    assert.equal(ctx.forms["theme-eva"].getSnapshot().value.unit, "01");
    assert.match(dom.window.document.querySelector("#name").textContent, /初号機.*UNIT-01/);
    await act(async () => { row.unmount(); name.unmount(); });
  } finally {
    ctx.dispose();
    dom.restore();
  }
});
