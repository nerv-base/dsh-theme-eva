import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { build } from "esbuild";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { Window } from "happy-dom";

const bundle = await build({
  stdin: { contents: 'export { makeRunningIndicator } from "./src/client/components.jsx"; export { createStore, runtime } from "./src/client/store.js";', resolveDir: process.cwd() },
  bundle: true, write: false, format: "cjs", platform: "node", external: ["react"],
});
const module = { exports: {} };
new Function("require", "module", "exports", bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { makeRunningIndicator, createStore, runtime } = module.exports;

test("mounted bridge follows session, preferences, cinematic and turn timestamps", async () => {
  const window = new Window();
  const previous = new Map();
  for (const [key, value] of Object.entries({ window, document: window.document, IS_REACT_ACT_ENVIRONMENT: true })) {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  }
  window.document.body.innerHTML = '<div data-conversation-content><div data-chat-running><span role="status">深度求索中</span><span>native visual</span></div><div id="dock"></div></div>';
  const status = window.document.querySelector("[data-chat-running]");
  const store = createStore({ enabled: true, scanBeam: true });
  const Indicator = makeRunningIndicator({ store });
  const root = createRoot(window.document.querySelector("#dock"));
  let running = true;
  let start = Date.now() - 65_000;
  const props = {
    t: () => "内部电源 · 本轮运行时间",
    useSession: (select) => select({ running }),
    useChat: (select) => select({ navigation: { items: () => [{ anchorKey: "latest" }] }, nodes: new Map([["latest", { location: { kind: "turn", turn: { status: "open", start: { time: start } } } }]]) }),
  };
  try {
    await act(async () => root.render(React.createElement(Indicator, props)));
    assert.match(status.querySelector(".eva-power-clock").textContent, /01:05:/, "mount mid-turn must not restart the clock");
    assert.equal(window.document.querySelector(".eva-edge"), null);
    assert.equal(window.document.querySelector("[data-eva-running-bridge]").hidden, true);
    await act(async () => store.set({ scanBeam: false }));
    assert.equal(status.hasAttribute("data-eva-running"), false);
    assert.equal(status.querySelector('[role="status"]').textContent, "深度求索中");
    await act(async () => store.set({ scanBeam: true }));
    assert.ok(status.querySelector(".eva-running-power"));
    start = Date.now() - 2000;
    await act(async () => root.render(React.createElement(Indicator, { ...props })));
    assert.match(status.querySelector(".eva-power-clock").textContent, /00:02:/, "a new turn resets by its timestamp");
    await act(async () => runtime.set({ playing: true }));
    assert.equal(status.hasAttribute("data-eva-running"), false);
    await act(async () => runtime.set({ playing: false }));
    assert.ok(status.querySelector(".eva-running-power"));
    running = false;
    await act(async () => root.render(React.createElement(Indicator, { ...props })));
    assert.equal(status.hasAttribute("data-eva-running"), false);
    running = true;
    await act(async () => root.render(React.createElement(Indicator, { ...props })));
    await act(async () => store.set({ enabled: false }));
    assert.equal(status.hasAttribute("data-eva-running"), false);
  } finally {
    await act(async () => root.unmount());
    window.happyDOM.abort();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
});
