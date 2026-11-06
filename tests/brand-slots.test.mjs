// The three brand seats are `single` slots: a registration only shadows an existing
// occupant when its priority is strictly lower, otherwise the slot core throws
//   single slot "sidebar.brand.mark" already has a registration at priority 0 ...
// The shipped @deepseek-ai/dsh-client-ui-brand-official occupies the sidebar seats at
// priority 0 in official builds, so these tests pin the theme below it.
import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { build } from "esbuild";
import { Window } from "happy-dom";

const bundle = await build({
  stdin: {
    contents: 'export { apply, inject, BRAND_PRIORITY } from "./src/client/index.js";',
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "cjs",
  platform: "node",
  external: ["react"],
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  loader: { ".svg": "text", ".css": "text", ".jsx": "jsx" },
});
const module = { exports: {} };
new Function("require", "module", "exports", bundle.outputFiles[0].text)(
  createRequire(import.meta.url),
  module,
  module.exports,
);
const { apply, BRAND_PRIORITY } = module.exports;

const SINGLE = ["sidebar.brand.mark", "sidebar.brand.name", "conversation.hero.brand.mark"];
const LIST = [
  "settings.general.item",
  "sidebar.footer.action",
  "conversation.session.header.utilities",
  "conversation.input.dock",
  "shell.overlay",
];

function useDom() {
  const window = new Window();
  const previous = new Map();
  const globals = {
    window,
    document: window.document,
    localStorage: window.localStorage,
    CustomEvent: window.CustomEvent,
    addEventListener: window.addEventListener.bind(window),
  };
  for (const [key, value] of Object.entries(globals)) {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  }
  return {
    restore() {
      for (const [key, descriptor] of previous) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else delete globalThis[key];
      }
      window.close();
    },
  };
}

/**
 * Minimal stand-in for `ctx.slots` that keeps the real `single` semantics: same
 * priority is a hard error, and the lowest active priority wins the seat.
 * `occupants` seeds entries that are already there when the theme loads.
 */
function fakeSlots(occupants = []) {
  const records = new Map();
  for (const name of SINGLE) records.set(name, { kind: "single", entries: [] });
  for (const name of LIST) records.set(name, { kind: "list", entries: [] });
  const disposers = [];

  for (const { name, priority = 0, registrant = "shipped" } of occupants) {
    records.get(name).entries.push({ options: { name, priority, registrant }, Component: "shipped" });
  }

  const slots = {
    inject(name, factory) {
      if (!records.has(name)) throw new Error(`slot "${name}" is not declared`);
      const result = factory();
      if (typeof result === "function") disposers.push(result);
      return typeof result === "function" ? result : () => {};
    },
    register(options, Component) {
      const record = records.get(options && options.name);
      if (!record) throw new Error(`slot "${options?.name}" is not declared`);
      const priority = options.priority ?? 0;
      if (record.kind === "single") {
        const taken = record.entries.find((entry) => (entry.options.priority ?? 0) === priority);
        if (taken) {
          const by = taken.options.registrant === undefined ? "" : ` (registered by ${taken.options.registrant})`;
          throw new Error(
            `single slot "${options.name}" already has a registration at priority ${priority}${by} — register at a different priority to shadow it (lowest renders)`,
          );
        }
      }
      const entry = { options: { ...options, priority }, Component };
      record.entries.push(entry);
      record.entries.sort((a, b) => (a.options.priority ?? 0) - (b.options.priority ?? 0));
      const dispose = () => {
        record.entries = record.entries.filter((candidate) => candidate !== entry);
      };
      disposers.push(dispose);
      return dispose;
    },
    entries: (name) => records.get(name).entries.filter((entry) => entry.Component !== undefined),
    winner(name) {
      const entry = records.get(name).entries[0];
      return entry && entry.Component !== "shipped" ? entry : undefined;
    },
  };
  return slots;
}

function fakeCtx(slots, initial) {
  const disposers = [];
  const form = (value) => {
    const subs = new Set();
    let state = { status: "ready", writable: true, value };
    return {
      getSnapshot: () => state,
      subscribe(fn) {
        subs.add(fn);
        return () => subs.delete(fn);
      },
      async set(field, next) {
        state = { ...state, value: { ...state.value, [field]: next } };
        subs.forEach((fn) => fn());
        return true;
      },
      push(next) {
        state = { ...state, value: next };
        subs.forEach((fn) => fn());
      },
    };
  };
  let preference = "dark";
  const themes = new Map();
  return {
    slots,
    disposers,
    forms: { "theme-eva": form({ ...initial }), "ui-theme": form({ preference: "dark" }) },
    effect(fn) {
      const disposer = fn();
      if (typeof disposer === "function") disposers.push(disposer);
      return disposer;
    },
    locale: { register: () => () => {} },
    on: () => () => {},
    configForms: { get: () => undefined },
    theme: {
      register({ id }) {
        themes.set(id, { id });
        return () => themes.delete(id);
      },
      getTheme: () => ({ preference, themes: [...themes.keys()].map((themeId) => ({ id: themeId })) }),
      setTheme(next) {
        preference = next;
      },
    },
    dispose() {
      while (disposers.length) disposers.pop()();
    },
  };
}

function ctxWithForms(slots, initial) {
  const ctx = fakeCtx(slots, initial);
  const { "theme-eva": eva, "ui-theme": ui } = ctx.forms;
  ctx.configForms = {
    get: (namespace) => ({ "theme-eva": eva, "ui-theme": ui })[namespace],
  };
  return ctx;
}

test("brand seats shadow the shipped official brand instead of colliding with it", () => {
  const dom = useDom();
  const slots = fakeSlots([
    { name: "sidebar.brand.mark", priority: 0, registrant: "tk" },
    { name: "sidebar.brand.name", priority: 0, registrant: "tk" },
  ]);
  const ctx = ctxWithForms(slots, { enabled: true, unit: "01" });
  try {
    assert.doesNotThrow(() => apply(ctx));
    for (const name of SINGLE) {
      const winner = slots.winner(name);
      assert.ok(winner, `${name} should be occupied by the theme`);
      assert.equal(winner.options.priority, BRAND_PRIORITY);
      assert.ok(winner.options.priority < 0, `${name} must register below the shipped priority 0`);
      assert.ok(winner.options.priority < -10, `${name} must also clear the liveshare viewer brand at -10`);
      assert.equal(winner.options.registrant, "dsh-theme-eva");
      assert.equal(winner.options.name, name);
    }
  } finally {
    ctx.dispose();
    dom.restore();
  }
});

test("brand seats are empty while the theme is off and return with it", async () => {
  const dom = useDom();
  const slots = fakeSlots([{ name: "sidebar.brand.mark", priority: 0, registrant: "tk" }]);
  const ctx = ctxWithForms(slots, { enabled: false, unit: "01" });
  try {
    apply(ctx);
    for (const name of SINGLE) assert.equal(slots.winner(name), undefined, `${name} should be free while off`);

    const form = ctx.forms["theme-eva"];
    await form.set("enabled", true);
    form.push({ enabled: true, unit: "01" });
    for (const name of SINGLE) assert.equal(slots.winner(name)?.options.priority, BRAND_PRIORITY);

    form.push({ enabled: false, unit: "01" });
    for (const name of SINGLE) assert.equal(slots.winner(name), undefined, `${name} should be released when off`);
  } finally {
    ctx.dispose();
    dom.restore();
  }
});

test("a foreign occupant already at the theme priority costs the seat, not the plugin", () => {
  const dom = useDom();
  const slots = fakeSlots([{ name: "sidebar.brand.mark", priority: BRAND_PRIORITY, registrant: "another-theme" }]);
  const ctx = ctxWithForms(slots, { enabled: true, unit: "01" });
  const warnings = [];
  const original = console.warn;
  console.warn = (...args) => warnings.push(args.join(" "));
  try {
    assert.doesNotThrow(() => apply(ctx));
    assert.equal(
      slots.entries("sidebar.brand.name").some((entry) => entry.options.registrant === "dsh-theme-eva"),
      true,
      "the other brand seats still register",
    );
    assert.equal(
      slots.entries("settings.general.item").some((entry) => entry.options.id === "theme-eva"),
      true,
      "the rest of the theme still mounts",
    );
    assert.match(warnings.join("\n"), /brand seat "sidebar\.brand\.mark" not occupied/);
  } finally {
    console.warn = original;
    ctx.dispose();
    dom.restore();
  }
});
