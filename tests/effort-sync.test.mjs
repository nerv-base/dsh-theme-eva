import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { build } from "esbuild";
import React, { act } from "react";
import { Window } from "happy-dom";

// react-dom decides at import time whether `input` events exist (range inputs rely on them),
// so the DOM globals must be in place before it loads.
const window = new Window();
// Reduced motion keeps the live readouts still, so the asserted text is deterministic.
window.matchMedia = (query) => ({ matches: query.includes("reduce"), media: query, addEventListener() {}, removeEventListener() {} });
for (const [key, value] of Object.entries({ window, document: window.document, matchMedia: window.matchMedia, IS_REACT_ACT_ENVIRONMENT: true })) {
  Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
}
const { createRoot } = await import("react-dom/client");

const bundle = await build({
  stdin: { contents: 'export { makeEffortSync, effortScale, liveRate, waveFor } from "./src/client/effort-sync.jsx"; export { createStore } from "./src/client/store.js";', resolveDir: process.cwd() },
  bundle: true, write: false, format: "cjs", platform: "node", external: ["react", "react-dom"],
});
const module = { exports: {} };
new Function("require", "module", "exports", bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { makeEffortSync, effortScale, liveRate, waveFor, createStore } = module.exports;

const efforts = (...ids) => ids.map((id) => ({ id, name: id }));
function directoryState({ current = { provider: "p", model: "m" }, reasoning, pending = null, status = "ready" } = {}) {
  return { current, groups: [{ id: "p", name: "P", models: [{ id: "m", name: "M", reasoning }, { id: "plain", name: "Plain" }] }], failures: [], status, pending, error: null };
}

test("effortScale climbs linearly and puts a top-of-scale effort at 400 %", () => {
  const scale = effortScale(directoryState({ current: { provider: "p", model: "m", reasoningEffort: "medium" }, reasoning: { defaultEffort: "high", efforts: efforts("low", "medium", "high", "max") } }));
  assert.deepEqual(scale.stops.map((s) => s.rate), [33.3, 66.7, 100, 400]);
  assert.equal(scale.stops[3].berserk, true);
  assert.equal(scale.index, 1);
});

test("effortScale follows the model seat's choices: provider default first, default effort when unset", () => {
  const auto = effortScale(directoryState({ reasoning: { efforts: efforts("low", "high") } }));
  assert.deepEqual(auto.stops.map((s) => s.key), ["provider-default", "effort:low", "effort:high"]);
  assert.equal(auto.index, 0);
  assert.deepEqual(auto.stops.map((s) => s.rate), [undefined, 50, 100]);
  const byDefault = effortScale(directoryState({ reasoning: { defaultEffort: "high", efforts: efforts("high", "max") } }));
  assert.equal(byDefault.index, 0);
  assert.deepEqual(byDefault.stops.map((s) => s.rate), [100, 400]);
  const pending = effortScale(directoryState({ reasoning: { defaultEffort: "high", efforts: efforts("high", "max") }, pending: { provider: "p", model: "m", reasoningEffort: "max" }, status: "selecting" }));
  assert.equal(pending.index, 0);
  assert.equal(pending.shown, 1);
  assert.equal(pending.busy, true);
});

test("effortScale has nothing to slide without a known reasoning model", () => {
  assert.equal(effortScale(null), undefined);
  assert.equal(effortScale(directoryState({ current: null, reasoning: { efforts: efforts("low") } })), undefined);
  assert.equal(effortScale(directoryState({ current: { provider: "p", model: "plain" } })), undefined);
  assert.equal(effortScale({ ...directoryState({ reasoning: { efforts: efforts("low") } }), groups: [] }), undefined);
});

const T = {
  "effort.tooltip": "sync {effort}",
  "effort.auto": "Default",
  "effort.label": "Thinking",
  "effort.failed": "failed",
  "effort.panelTitle": "SYNC · {effort}",
  "effort.link": "LINK",
};

function fixture(initial) {
  let state = initial;
  const listeners = new Set();
  const directory = { getSnapshot: () => state, subscribe: (fn) => (listeners.add(fn), () => listeners.delete(fn)) };
  const selections = [];
  const harness = {
    selections,
    loads: 0,
    prefs: { store: createStore({ enabled: true, effortSync: true }) },
    get state() { return state; },
    setState(next) { state = next; for (const fn of [...listeners]) fn(); },
  };
  harness.props = {
    t: (key) => T[key] ?? key,
    available: true,
    directory,
    load: () => { harness.loads += 1; },
    select: async (selection) => { selections.push(selection); return { ok: true, value: undefined }; },
  };
  return harness;
}

function slide(range, value) {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  setter.call(range, String(value));
  range.dispatchEvent(new window.Event("input", { bubbles: true }));
  range.dispatchEvent(new window.Event("change", { bubbles: true }));
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 5));

test("slider renders the sync ratio and commits the effort through the shared directory", async () => {
  const f = fixture(directoryState({ current: { provider: "p", model: "m", reasoningEffort: "high" }, reasoning: { defaultEffort: "high", efforts: efforts("low", "high", "max") } }));
  const Slider = makeEffortSync(f.prefs);
  const host = window.document.createElement("div");
  window.document.body.appendChild(host);
  const root = createRoot(host);
  try {
    await act(async () => root.render(React.createElement(Slider, f.props)));
    const plate = host.querySelector(".eva-effort");
    assert.ok(plate, "slider mounted");
    assert.equal(f.loads, 1, "catalog load requested on mount");
    assert.match(plate.className, /is-full/);
    assert.equal(host.querySelector(".eva-effort-value").textContent, "100.0%");
    assert.equal(host.querySelectorAll(".eva-effort-cells i.on").length, 2);
    const range = host.querySelector("input[type=range]");
    assert.equal(range.getAttribute("max"), "2");
    assert.equal(range.getAttribute("aria-valuetext"), "high · 100.0%");

    // Drag to the top stop: the plate previews at once, the write waits for the pointer to settle.
    await act(async () => slide(range, 2));
    assert.match(host.querySelector(".eva-effort").className, /is-berserk/);
    assert.equal(host.querySelector(".eva-effort-name").textContent, "暴走");
    assert.deepEqual(f.selections, []);
    await act(async () => range.dispatchEvent(new window.Event("pointerup", { bubbles: true })));
    assert.deepEqual(f.selections, [{ provider: "p", model: "m", reasoningEffort: "max" }]);
    await act(async () => f.setState({ ...f.state, current: { provider: "p", model: "m", reasoningEffort: "max" } }));
    assert.equal(host.querySelector(".eva-effort-value").textContent, "400%");

    // A model without efforts, or the preference off, offers no slider.
    await act(async () => f.prefs.store.set({ effortSync: false }));
    assert.equal(host.querySelector(".eva-effort"), null);
    await act(async () => f.prefs.store.set({ effortSync: true }));
    await act(async () => f.setState({ ...f.state, current: { provider: "p", model: "plain" } }));
    assert.equal(host.querySelector(".eva-effort"), null);
  } finally {
    await act(async () => root.unmount());
    host.remove();
  }
});

test("the sync panel takes the reasoning row's place while the model menu is open", async () => {
  const doc = window.document;
  const f = fixture(directoryState({ current: { provider: "p", model: "m", reasoningEffort: "high" }, reasoning: { defaultEffort: "high", efforts: efforts("low", "high", "max") } }));
  const Slider = makeEffortSync(f.prefs);
  // The composer's trailing controls: our slot, then the model seat's trigger.
  const bar = doc.createElement("div");
  bar.className = "Ab3_standardControls";
  const slot = doc.createElement("span");
  const trigger = doc.createElement("button");
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = '<span data-provider-id="p" data-model-id="m">M</span>';
  let triggerClicks = 0;
  trigger.addEventListener("click", () => (triggerClicks += 1));
  bar.append(slot, trigger);
  doc.body.appendChild(bar);
  let outsideDowns = 0;
  const countDown = (event) => { if (event.target === doc) outsideDowns += 1; };
  doc.addEventListener("mousedown", countDown);
  const root = createRoot(slot);
  const menu = doc.createElement("div");
  const openMenu = async () => {
    // As the seat does: portal the surface into <body>, then flag the trigger.
    menu.id = "seat-menu";
    menu.setAttribute("role", "menu");
    menu.innerHTML =
      '<div aria-hidden="true"></div>' +
      '<button role="menuitem" class="cell"><span>Model</span><span><span data-model-id="m">M</span></span></button>' +
      '<button role="menuitem" class="cell"><span>Reasoning</span><span>high</span></button>';
    doc.body.appendChild(menu);
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-controls", "seat-menu");
    await settle();
  };
  try {
    await act(async () => root.render(React.createElement(Slider, f.props)));
    assert.equal(doc.querySelector(".eva-effort-dock"), null, "no dock while the menu is closed");

    await act(openMenu);
    const dock = menu.querySelector(".eva-effort-dock");
    assert.ok(dock, "dock inserted into the open menu");
    assert.match(dock.nextElementSibling.textContent, /Reasoning/, "dock sits right before the reasoning row");
    assert.ok(dock.querySelector(".eva-sp-scope canvas"), "waveform scope rendered");
    assert.match(dock.querySelector(".eva-sp").className, /is-full/);
    assert.equal(dock.querySelector(".eva-sp-title").textContent, "SYNC · high");
    assert.equal(dock.querySelector(".eva-sp-value").textContent, "100.0%");

    // The panel slides the same control as the plate.
    const range = dock.querySelector("input[type=range]");
    await act(async () => slide(range, 2));
    assert.match(dock.querySelector(".eva-sp").className, /is-berserk/);
    assert.match(bar.querySelector(".eva-effort").className, /is-berserk/, "the plate previews too");
    await act(async () => range.dispatchEvent(new window.Event("pointerup", { bubbles: true })));
    assert.deepEqual(f.selections, [{ provider: "p", model: "m", reasoningEffort: "max" }]);
    await act(async () => f.setState({ ...f.state, current: { provider: "p", model: "m", reasoningEffort: "max" } }));

    // A stop label commits at once.
    await act(async () => dock.querySelectorAll(".eva-sp-stops span")[0].click());
    assert.deepEqual(f.selections.at(-1), { provider: "p", model: "m", reasoningEffort: "low" });

    // Escape hands focus back through the seat's own toggle.
    await act(async () => range.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true })));
    assert.equal(triggerClicks, 1);
    // Tabbing out of the panel closes the menu without stealing focus.
    const elsewhere = doc.createElement("button");
    doc.body.appendChild(elsewhere);
    await act(async () => range.dispatchEvent(new window.FocusEvent("focusout", { bubbles: true, relatedTarget: elsewhere })));
    assert.equal(outsideDowns, 1);
    elsewhere.remove();

    // Another pane replaces the root rows: the dock leaves with them.
    await act(async () => {
      menu.replaceChildren(doc.createElement("input"));
      await settle();
    });
    assert.equal(menu.querySelector(".eva-effort-dock"), null);

    // Closing unmounts the surface; reopening docks again.
    await act(async () => {
      menu.remove();
      trigger.setAttribute("aria-expanded", "false");
      trigger.removeAttribute("aria-controls");
      await settle();
    });
    assert.equal(doc.querySelector(".eva-sp"), null);
    await act(openMenu);
    assert.ok(menu.querySelector(".eva-effort-dock .eva-sp"), "docked again after reopening");
  } finally {
    await act(async () => root.unmount());
    assert.equal(doc.querySelector(".eva-effort-dock"), null, "dock removed on unmount");
    doc.removeEventListener("mousedown", countDown);
    menu.remove();
    bar.remove();
  }
});

test("the live readout breathes around the rate and the wave tightens with sync", () => {
  const ok = { rate: 50 };
  const full = { rate: 100 };
  const berserk = { rate: 400, berserk: true };
  for (let t = 0; t < 20; t += 0.37) {
    assert.ok(Math.abs(liveRate(ok, t) - 50) <= 0.4 + 1e-9);
    const f = liveRate(full, t);
    assert.ok(f <= 100 && f >= 99.5, `full sync never exceeds 100 (${f})`);
    assert.ok(Math.abs(liveRate(berserk, t) - 400) <= 16);
  }
  assert.equal(liveRate({ auto: true }, 1), undefined);
  // As in the cinematic: the pilot's traces lag the unit's by a phase gap that closes with sync.
  const low = waveFor({ rate: 33.3 });
  const high = waveFor({ rate: 100 });
  assert.ok(high.gap < low.gap && high.speed > low.speed && high.amp > low.amp);
  assert.equal(high.gap, 0, "full sync locks every trace into one braid");
  assert.equal(waveFor(berserk).chaos, 1);
  assert.equal(waveFor(berserk).gap, 0);
  assert.ok(waveFor({ auto: true }).hunt > 0, "the provider default keeps hunting for its sync point");
  assert.ok(waveFor(full, true).speed > high.speed, "a pending switch speeds the link up");
});

test("opening the seat's menu reserves the panel's box before the seat lays it out", async () => {
  const doc = window.document;
  const html = doc.documentElement;
  const css = (await import("node:fs")).readFileSync(new URL("../src/client/ui.css", import.meta.url), "utf8");
  const reserve = css.match(/^(html\[data-eva-effort-menu\] \[role[^{,]*)[,{]/m)[1];
  const errors = [];
  const consoleError = console.error;
  console.error = (...args) => errors.push(args.join(" "));
  const f = fixture(directoryState({ current: { provider: "p", model: "m", reasoningEffort: "high" }, reasoning: { defaultEffort: "high", efforts: efforts("low", "high") } }));
  const Slider = makeEffortSync(f.prefs);
  const bar = doc.createElement("div");
  bar.className = "Ab3_standardControls";
  const slot = doc.createElement("span");
  const trigger = doc.createElement("button");
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = '<span data-provider-id="p" data-model-id="m">M</span>';
  bar.append(slot, trigger);
  doc.body.appendChild(bar);
  const menu = doc.createElement("div");
  let opens = true;
  const seen = [];
  // The seat: on a click it renders the menu and lays it out in the same turn.
  trigger.addEventListener("click", () => {
    if (trigger.getAttribute("aria-expanded") === "true") {
      menu.remove();
      trigger.setAttribute("aria-expanded", "false");
      trigger.removeAttribute("aria-controls");
      return;
    }
    if (!opens) return seen.push({ gate: html.hasAttribute("data-eva-effort-menu") });
    menu.id = "seat-menu-2";
    menu.setAttribute("role", "menu");
    menu.innerHTML =
      '<div aria-hidden="true"></div>' +
      '<button role="menuitem"><span>Model</span><span><span data-model-id="m">M</span></span></button>' +
      '<button role="menuitem" id="reasoning-row"><span>Reasoning</span><span>high</span></button>';
    doc.body.appendChild(menu);
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-controls", "seat-menu-2");
    // What the seat measures: is the reasoning row already the panel's box?
    seen.push({ gate: html.hasAttribute("data-eva-effort-menu"), reserved: doc.querySelector(reserve)?.id });
  });
  const root = createRoot(slot);
  try {
    await act(async () => root.render(React.createElement(Slider, f.props)));
    assert.equal(html.hasAttribute("data-eva-effort-menu"), false, "nothing reserved while the menu is closed");

    await act(async () => {
      trigger.click();
      await settle();
    });
    assert.deepEqual(seen.at(-1), { gate: true, reserved: "reasoning-row" }, "the row is the panel's box at the seat's first layout");
    const dock = menu.querySelector(".eva-effort-dock");
    assert.ok(dock?.querySelector(".eva-sp-scope canvas"), "the panel is docked in the same turn");
    assert.equal(dock.nextElementSibling.id, "reasoning-row");
    assert.equal(doc.querySelector(reserve), null, "once docked, the dock holds the box and the row is hidden");

    // The seat's model pane: no reasoning row, nothing to reserve, no dock.
    await act(async () => {
      menu.setAttribute("role", "group");
      menu.replaceChildren(doc.createElement("input"));
      await settle();
    });
    assert.equal(menu.querySelector(".eva-effort-dock"), null);

    await act(async () => {
      trigger.click();
      await settle();
    });
    assert.equal(html.hasAttribute("data-eva-effort-menu"), false, "closing takes the reservation down");

    // A click that does not open the menu (a locked seat) does not leave it behind.
    opens = false;
    await act(async () => {
      trigger.click();
      await new Promise((resolve) => setTimeout(resolve, 5));
    });
    assert.equal(seen.at(-1).gate, true);
    assert.equal(html.hasAttribute("data-eva-effort-menu"), false);
    assert.deepEqual(errors.filter((line) => /flushSync|Warning/.test(line)), [], "no React warnings from docking");
  } finally {
    console.error = consoleError;
    await act(async () => root.unmount());
    assert.equal(html.hasAttribute("data-eva-effort-menu"), false);
    menu.remove();
    bar.remove();
  }
});
