// Tiny snapshot stores shared between slot components living in different
// trees (settings row, sidebar foot, composer dock, frame overlay).
import React from "react";

export function createStore(initial) {
  let state = initial;
  const listeners = new Set();
  return {
    get: () => state,
    set(patch) {
      const next = typeof patch === "function" ? patch(state) : { ...state, ...patch };
      if (next === state) return;
      state = next;
      for (const fn of [...listeners]) fn(state);
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

export function useStore(store, select = (s) => s) {
  return React.useSyncExternalStore(
    store.subscribe,
    () => select(store.get()),
    () => select(store.get()),
  );
}

/** Ephemeral runtime state of this page. */
export const runtime = createStore({
  /** Increments whenever the cinematic should (re)start. */
  playRequest: 0,
  /** True while the cinematic overlay owns the screen. */
  playing: false,
  /** Session keys whose turn is currently running (drives the scan beam). */
  running: [],
});

export function setRunning(key, isRunning) {
  runtime.set((s) => {
    const has = s.running.includes(key);
    if (isRunning === has) return s;
    return { ...s, running: isRunning ? [...s.running, key] : s.running.filter((k) => k !== key) };
  });
}

export function requestPlay() {
  runtime.set((s) => ({ ...s, playRequest: s.playRequest + 1 }));
}
