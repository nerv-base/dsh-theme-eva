// Composer control: the reasoning effort ("thinking level") as an EVA sync ratio.
//
// It does not own any model state. The shipped model-selection plugin publishes a
// per-session ModelDirectory (`ctx.modelDirectories.directoryFor(sessionId)`); this
// control reads the same snapshot the model seat renders from and writes through the
// same `select({ provider, model, reasoningEffort })` call, so the dropdown and the
// slider can never disagree.
//
// Two faces share one state:
// - the plate beside the model seat (compact slider, live readout);
// - the sync panel, docked into the model seat's own menu in place of its
//   "reasoning level" row: a full-width slider over a live waveform scope.
import React from "react";
import { createPortal, flushSync } from "react-dom";
import { useStore } from "./store.js";

/** Efforts whose name marks the top of an adapter's scale: shown as the 400 % berserk stop. */
const BERSERK_EFFORT = /^(max|maximum|xhigh|ultra)$/i;
const COMMIT_DELAY_MS = 260;
const READOUT_MS = 120;

const EMPTY_STORE = {
  getSnapshot: () => null,
  subscribe: () => () => {},
};

function findModel(state, current) {
  for (const group of state?.groups ?? []) {
    if (group.id !== current.provider) continue;
    const model = group.models?.find((m) => m.id === current.model);
    if (model) return model;
  }
  return undefined;
}

/**
 * Map the selected model's reasoning catalog onto sync-ratio stops.
 *
 * - The provider-default stop (only when the adapter declares no default effort)
 *   comes first, as the model seat orders it, and reads "AUTO".
 * - Named efforts climb linearly to 100 %.
 * - A top-of-scale effort (max / xhigh / ultra) above at least one other effort is the
 *   400 % stop: Unit-01's berserk sync, beyond the scale.
 *
 * @returns `undefined` when there is nothing to slide (no current model, catalog not
 *   loaded yet, model without reasoning efforts).
 */
export function effortScale(state) {
  const current = state?.current;
  if (!current) return undefined;
  const reasoning = findModel(state, current)?.reasoning;
  if (!reasoning || !Array.isArray(reasoning.efforts) || reasoning.efforts.length === 0) return undefined;
  const stops = [];
  if (reasoning.defaultEffort === undefined) stops.push({ key: "provider-default", effort: undefined, name: undefined, auto: true });
  for (const level of reasoning.efforts) stops.push({ key: `effort:${level.id}`, effort: level.id, name: level.name ?? level.id });
  const ranked = stops.filter((stop) => !stop.auto);
  const top = ranked[ranked.length - 1];
  const berserk = ranked.length >= 2 && BERSERK_EFFORT.test(String(top.effort));
  const linear = berserk ? ranked.slice(0, -1) : ranked;
  linear.forEach((stop, i) => (stop.rate = Math.round((1000 * (i + 1)) / linear.length) / 10));
  if (berserk) {
    top.rate = 400;
    top.berserk = true;
  }
  const effective = current.reasoningEffort ?? reasoning.defaultEffort;
  const pending = state.pending;
  const pendingHere = pending && pending.provider === current.provider && pending.model === current.model;
  const shownEffort = pendingHere ? pending.reasoningEffort ?? reasoning.defaultEffort : effective;
  const indexOf = (effort) => stops.findIndex((stop) => stop.effort === effort);
  return {
    provider: current.provider,
    model: current.model,
    stops,
    index: Math.max(0, indexOf(effective)),
    shown: Math.max(0, indexOf(shownEffort)),
    busy: state.status === "selecting",
  };
}

export function stopLevel(stop) {
  if (!stop || stop.auto) return "auto";
  if (stop.berserk) return "berserk";
  return stop.rate >= 100 ? "full" : "ok";
}

function rateText(stop) {
  if (!stop || stop.auto) return "AUTO";
  return stop.berserk ? "400" : stop.rate.toFixed(1);
}

/**
 * The readout a live link would show at time `t` (seconds): the rate never sits still.
 * Partial sync wanders around its value, a full link only ever dips below 100, and
 * berserk overshoots with the occasional spike.
 */
export function liveRate(stop, t) {
  if (!stop || stop.auto) return undefined;
  const n = Math.sin(t * 2.1) * 0.6 + Math.sin(t * 5.3 + 1.3) * 0.3 + Math.sin(t * 11.7 + 0.4) * 0.1;
  if (stop.berserk) return 400 + n * 4.5 + (Math.sin(t * 23) > 0.96 ? 11 : 0);
  if (stop.rate >= 100) return 100 - Math.abs(n) * 0.45;
  return stop.rate + n * 0.4;
}

function fmt(t, key, vars) {
  let text = t(key);
  for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, String(v));
  return text;
}

function prefersMotion() {
  try {
    return !globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return true;
  }
}

/** Rewrite a readout in place: a text-node edit, so DOM watchers see no child churn. */
function setText(el, text) {
  const node = el.firstChild;
  if (node && node.nodeType === 3 && !node.nextSibling) {
    if (node.nodeValue !== text) node.nodeValue = text;
  } else el.textContent = text;
}

/** Keep a readout ticking with `liveRate` without re-rendering React. */
function useLiveReadout(ref, stop, active) {
  const latest = React.useRef(stop);
  latest.current = stop;
  const live = active && stop && !stop.auto;
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !live || !prefersMotion()) return undefined;
    const tick = () => {
      if (globalThis.document?.hidden || !latest.current) return;
      setText(el, liveRate(latest.current, performance.now() / 1000).toFixed(1));
    };
    const id = setInterval(tick, READOUT_MS);
    return () => {
      clearInterval(id);
      if (latest.current) setText(el, rateText(latest.current));
    };
  }, [ref, live, stop?.key, stop?.rate]);
}

/* ───────────── shared slider state ───────────── */

function useEffortControl({ show, available, directory, load, select }) {
  const source = directory ?? EMPTY_STORE;
  const state = React.useSyncExternalStore(source.subscribe, source.getSnapshot, source.getSnapshot);
  const scale = effortScale(state);
  const [draft, setDraft] = React.useState(null); // stop key while the pointer/keys are still moving
  const [failed, setFailed] = React.useState(false);
  const timer = React.useRef(undefined);
  const latest = React.useRef(scale);
  latest.current = scale;

  React.useEffect(() => {
    if (show && available !== false) load?.();
  }, [show, available, load]);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  React.useEffect(() => {
    if (!failed) return undefined;
    const off = setTimeout(() => setFailed(false), 2400);
    return () => clearTimeout(off);
  }, [failed]);

  const commit = React.useCallback(
    (key) => {
      clearTimeout(timer.current);
      timer.current = undefined;
      const now = latest.current;
      const stop = now?.stops.find((s) => s.key === key);
      if (!now || !stop || now.stops[now.index]?.key === key) {
        setDraft(null);
        return;
      }
      const selection = { provider: now.provider, model: now.model, ...(stop.effort === undefined ? {} : { reasoningEffort: stop.effort }) };
      Promise.resolve(select?.(selection))
        .then((result) => {
          if (result && result.ok === false) setFailed(true);
        })
        .catch(() => setFailed(true))
        .finally(() => setDraft((d) => (d === key ? null : d)));
    },
    [select],
  );

  const draftRef = React.useRef(draft);
  draftRef.current = draft;
  const move = React.useCallback(
    (index, immediate = false) => {
      const next = latest.current?.stops[index];
      if (!next) return;
      setDraft(next.key);
      clearTimeout(timer.current);
      if (immediate) commit(next.key);
      else timer.current = setTimeout(() => commit(next.key), COMMIT_DELAY_MS);
    },
    [commit],
  );
  const flush = React.useCallback(() => {
    if (timer.current !== undefined && draftRef.current !== null) commit(draftRef.current);
  }, [commit]);

  if (!show || available === false || !scale || scale.stops.length < 2) return undefined;
  const { stops } = scale;
  const draftIndex = draft === null ? -1 : stops.findIndex((s) => s.key === draft);
  const shown = draftIndex >= 0 ? draftIndex : scale.shown;
  return { stops, shown, stop: stops[shown], busy: scale.busy || draftIndex >= 0, failed, move, flush };
}

/* ───────────── docking into the model seat's menu ───────────── */

const MODEL_TRIGGER = 'button[aria-haspopup="menu"]';

function modelTriggerIn(root) {
  for (const button of root?.querySelectorAll(MODEL_TRIGGER) ?? []) {
    if (button.querySelector("[data-model-id]")) return button;
  }
  return null;
}

function controlsBar(anchor) {
  const bar = anchor.closest('[class*="_standardControls"]');
  if (bar) return bar;
  for (let el = anchor.parentElement; el && el !== anchor.ownerDocument.body; el = el.parentElement) {
    if (modelTriggerIn(el)) return el;
  }
  return anchor.parentElement;
}

/**
 * The model row and the reasoning row of the menu's root pane, when it is showing. Mirrors
 * the selectors in ui.css that hide the reasoning row and reserve the panel's box.
 */
function rootPaneCells(menu) {
  if (menu.getAttribute("role") !== "menu") return null;
  const model = [...menu.children].find((el) => el.getAttribute("role") === "menuitem");
  if (!model?.querySelector("[data-model-id]")) return null;
  let effort = model.nextElementSibling;
  if (effort?.classList.contains("eva-effort-dock")) effort = effort.nextElementSibling;
  return effort?.getAttribute("role") === "menuitem" ? { model, effort } : null;
}

/**
 * The document flag that makes ui.css swap the seat's reasoning row for a box the panel's
 * size while its menu opens: the seat measures and anchors the menu in its first layout,
 * so the menu has to be at its final size before the panel is docked. Raised just before
 * our seat opens and held while its menu is open, so other menus are never touched.
 */
const GATE_ATTR = "data-eva-effort-menu";
const gates = new WeakMap();

function setGate(doc, holder, on) {
  let holders = gates.get(doc);
  if (!holders) gates.set(doc, (holders = new Set()));
  if (on) holders.add(holder);
  else holders.delete(holder);
  if (holders.size > 0) doc.documentElement.setAttribute(GATE_ATTR, "");
  else doc.documentElement.removeAttribute(GATE_ATTR);
}

/**
 * While the model seat beside `anchor` has its menu open on the root pane, keep a dock
 * element in that menu right before the "reasoning level" row (which CSS hides), and hand
 * it back for a portal. The host only ever sees one foreign sibling; its own rows keep
 * their nodes, refs and keyboard handling.
 */
function useModelMenuDock(anchorRef, enabled) {
  const [dock, setDock] = React.useState(null);
  const handles = React.useRef({ trigger: null, menu: null });

  React.useEffect(() => {
    const anchor = anchorRef.current;
    if (!enabled || !anchor) return undefined;
    const doc = anchor.ownerDocument;
    const Observer = doc.defaultView.MutationObserver;
    const bar = controlsBar(anchor);
    if (!bar) return undefined;
    let menu = null;
    let menuWatch = null;
    let own = null;
    let shown = null;
    const holder = {};
    // Observer callbacks run before the browser paints the freshly opened menu: render
    // the panel synchronously there so its first frame already carries it.
    const show = (el, urgent) => {
      if (shown === el) return;
      shown = el;
      if (urgent) flushSync(() => setDock(el));
      else setDock(el);
    };
    const place = (urgent) => {
      const cells = menu?.isConnected ? rootPaneCells(menu) : null;
      if (!cells) {
        own?.remove();
        return show(null, false);
      }
      if (!own) {
        own = doc.createElement("div");
        own.className = "eva-effort-dock";
      }
      if (own.nextElementSibling !== cells.effort) cells.effort.before(own);
      show(own, urgent);
    };
    const sync = (urgent) => {
      const trigger = modelTriggerIn(bar);
      const id = trigger?.getAttribute("aria-expanded") === "true" ? trigger.getAttribute("aria-controls") : null;
      const next = id ? doc.getElementById(id) : null;
      handles.current = { trigger, menu: next };
      if (next !== menu) {
        menuWatch?.disconnect();
        menu = next;
        menuWatch = null;
        if (menu) {
          menuWatch = new Observer(() => place(true));
          menuWatch.observe(menu, { childList: true });
        }
      }
      setGate(doc, holder, menu !== null);
      place(urgent);
    };
    // The seat opens on a click of its trigger; this capture listener runs before the
    // seat's own handler renders the menu.
    const arm = (event) => {
      const trigger = modelTriggerIn(bar);
      if (!trigger?.contains(event.target) || trigger.getAttribute("aria-expanded") === "true") return;
      setGate(doc, holder, true);
      // Take it back down if the seat did not open after all.
      doc.defaultView.setTimeout(() => sync(false), 0);
    };

    const barWatch = new Observer(() => sync(true));
    barWatch.observe(bar, { subtree: true, childList: true, attributes: true, attributeFilter: ["aria-expanded", "aria-controls"] });
    bar.addEventListener("click", arm, true);
    sync(false);
    return () => {
      bar.removeEventListener("click", arm, true);
      barWatch.disconnect();
      menuWatch?.disconnect();
      own?.remove();
      setDock(null);
      setGate(doc, holder, false);
      handles.current = { trigger: null, menu: null };
    };
  }, [anchorRef, enabled]);

  const close = React.useCallback((restoreFocus) => {
    const { trigger, menu } = handles.current;
    if (!menu?.isConnected) return;
    // The seat toggles closed (and refocuses itself) on a trigger click; an outside
    // mousedown closes it without moving focus.
    if (restoreFocus) trigger?.click();
    else {
      const doc = menu.ownerDocument;
      doc.dispatchEvent(new doc.defaultView.MouseEvent("mousedown", { bubbles: true }));
    }
  }, []);

  return { dock, close, menu: () => handles.current.menu };
}

/* ───────────── the waveform scope ───────────── */

// The sync-ratio monitor from the show: on a black scope between two white rails, a sheet of
// wireframe tubes (longitudinal lines plus cross-section rings) rides a clipped sine. Every
// tube is the same sine shifted along the wave: out of sync the sheet holds many of them,
// and as the sync ratio climbs it sheds them until, at 100 %, a single sine is left. Behind
// it the pilot's sheet glows red and lags by a gap that closes the same way.
const SIDE = 9; // tubes on each side of the lead tube at 0 % sync
const TUBE_GAP = 1.5; // spacing between neighbouring tubes, in tube diameters
const CYCLES = 1.4; // full waves across the scope (the show's slope, on this aspect)
const PHASE_GAP = 2.6; // the cinematic's gap at 0 % sync, in radians
const PILOT_LAG = 1.5; // the pilot's lag at 0 % sync, in radians
const CLIP = 1.35; // how hard the sine flattens at its crests
// Tube lines across the tube (−1 … 1 of its radius) and their colours: unit, pilot, berserk.
const LINES = [-1, -0.4, 0.4, 1];
const UNIT_INK = [
  [90, 120, 255],
  [255, 100, 52],
  [236, 64, 124],
  [236, 84, 236],
];
const PILOT_INK = [
  [196, 18, 24],
  [150, 12, 18],
  [196, 18, 24],
  [150, 12, 18],
];
const HOT_INK = [
  [255, 84, 40],
  [255, 150, 64],
  [255, 40, 70],
  [255, 40, 70],
];
const DIM_INK = [150, 140, 160];

const LEVEL_WAVE = {
  // Provider default: dim and slow, the link still hunting for its sync point.
  auto: { gap: 1.4, hunt: 1, amp: 0.7, speed: 0.35, flow: 0.25, chaos: 0, heat: 0, dim: 1, glow: 0.55 },
  // Past the scale: locked, overdriven, racing and tearing.
  berserk: { gap: 0, hunt: 0, amp: 0.82, speed: 1.9, flow: 1.6, chaos: 1, heat: 1, dim: 0, glow: 1.15 },
};

/** Sheet shape for a stop: the tubes close up and the flow speeds up as sync climbs. */
export function waveFor(stop, busy) {
  let wave = LEVEL_WAVE[stopLevel(stop)];
  if (!wave) {
    const r = Math.min(1, Math.max(0, stop.rate / 100));
    wave = { gap: PHASE_GAP * (1 - r), hunt: 0, amp: 0.7 + 0.08 * r, speed: 0.45 + 0.55 * r, flow: 0.35 + 0.45 * r, chaos: 0, heat: 0, dim: 0, glow: 0.7 + 0.3 * r };
  }
  return busy ? { ...wave, speed: wave.speed * 1.6, flow: wave.flow * 1.6, chaos: Math.max(wave.chaos, 0.3) } : wave;
}

function ink(rgb, hot, wave, alpha) {
  const mix = (i) => {
    const v = rgb[i] + (hot[i] - rgb[i]) * wave.heat;
    return Math.round(v + (DIM_INK[i] - v) * wave.dim * 0.7);
  };
  return `rgba(${mix(0)},${mix(1)},${mix(2)},${alpha})`;
}

/** Scope geometry shared by the canvas and its captions. */
function frameOf(w, h) {
  const top = 21;
  const bottom = h - 25;
  return { top, bottom, left: 6, right: w - 6 };
}

function drawFrame(g, w, h, f) {
  const plotW = f.right - f.left;
  // Reticles.
  g.strokeStyle = "rgba(255,238,232,0.85)";
  g.lineWidth = 1;
  g.beginPath();
  for (const fx of [0.163, 0.394, 0.625, 0.856]) {
    for (const fy of [0.07, 0.47, 0.87]) {
      const x = Math.round(f.left + fx * plotW) + 0.5;
      const y = Math.round(f.top + fy * (f.bottom - f.top)) + 0.5;
      g.moveTo(x - 4, y);
      g.lineTo(x + 5, y);
      g.moveTo(x, y - 4);
      g.lineTo(x, y + 5);
    }
  }
  g.stroke();
  // Left ruler (dense) and right scale (sparse).
  g.strokeStyle = "rgba(255,238,232,0.7)";
  g.beginPath();
  const ruler = Math.round(f.left + 0.097 * plotW) + 0.5;
  for (let y = f.top + 4; y < f.bottom - 2; y += 2.5) {
    const yy = Math.round(y) + 0.5;
    g.moveTo(ruler - 2.5, yy);
    g.lineTo(ruler + 2.5, yy);
  }
  const scale = Math.round(f.left + 0.91 * plotW) + 0.5;
  for (let y = f.top + 5; y < f.bottom - 2; y += 7.5) {
    const yy = Math.round(y) + 0.5;
    g.moveTo(scale, yy);
    g.lineTo(scale + 4, yy);
  }
  g.stroke();
}

function drawRails(g, w, h, f) {
  for (const y of [f.top, f.bottom]) {
    g.fillStyle = "rgba(255,120,120,0.22)";
    g.fillRect(f.left - 1, y - 2.5, f.right - f.left + 2, 5);
    g.fillStyle = "#fff4f0";
    g.fillRect(f.left, y - 1.25, f.right - f.left, 2.5);
  }
  // Axis under the bottom rail: −5 … +5.
  const plotW = f.right - f.left;
  const axisY = f.bottom + 6;
  g.strokeStyle = "rgba(255,244,240,0.9)";
  g.lineWidth = 1;
  g.beginPath();
  for (let i = 0; i <= 50; i++) {
    const x = Math.round(f.left + 0.024 * plotW + (i / 50) * 0.925 * plotW) + 0.5;
    const major = i % 5 === 0;
    g.moveTo(x, axisY);
    g.lineTo(x, axisY + (major ? 5 : 1.5));
  }
  g.stroke();
  g.fillStyle = "#fff4f0";
  g.font = '700 7.5px "SF Pro Text",ui-sans-serif,system-ui,sans-serif';
  g.textAlign = "center";
  g.textBaseline = "alphabetic";
  for (let n = -5; n <= 5; n++) {
    const x = f.left + 0.024 * plotW + ((n + 5) / 10) * 0.925 * plotW;
    g.fillText(n > 0 ? `+${n}` : String(n), x, h - 2.5);
  }
}

// One sheet: the lead tube plus copies of it, each the same sine shifted a little further
// along the wave. The lower the sync ratio, the more copies fan out on either side (the
// outermost pair fading in), so a low ratio shows many sines and a full one a single sine.
// A copy is exactly the lead tube moved sideways, so the lead tube is traced once per frame
// and every copy reuses its paths.
const BASE = 480; // points in the lead tube's centre line
const cx = new Float32Array(BASE);
const cy = new Float32Array(BASE);
const nx = new Float32Array(BASE);
const ny = new Float32Array(BASE);
const RINGS = 10; // cross-section rings per wavelength

function drawSheet(g, f, t, wave, sheet) {
  const { phase, spread, palette } = sheet;
  const height = f.bottom - f.top;
  const mid = f.top + height / 2;
  const amp = (height / 2) * wave.amp;
  const width = f.right - f.left;
  const k = (2 * Math.PI * CYCLES) / width;
  const lambda = (2 * Math.PI) / k;
  const locked = spread < 0.01;
  const r = Math.max(2.4, Math.min(4.4, width * 0.0135)) * (locked ? 1.25 : 1);
  // Copies: pairs on either side of the lead tube, the outermost pair fading in.
  const side = locked ? 0 : SIDE * sheet.sides * Math.min(1, spread);
  let pairs = Math.ceil(side);
  let edge = side - (pairs - 1); // the outermost pair's opacity
  if (pairs && edge < 0.02) {
    pairs -= 1;
    edge = 1;
  }
  const gap = 2 * r * TUBE_GAP;
  const reach = pairs * gap;

  // The lead tube, long enough to cover the scope from every copy's offset.
  const step = 3;
  const x0 = f.left - r - reach;
  const count = Math.min(BASE, Math.ceil((width + 2 * (r + reach)) / step) + 1);
  const norm = Math.tanh(CLIP);
  const jolt = wave.chaos * (0.5 + 3 * Math.max(0, Math.sin(t * 1.3)) ** 14);
  for (let i = 0; i < count; i++) {
    const x = x0 + i * step;
    cx[i] = x;
    cy[i] = mid - amp * (Math.tanh(CLIP * Math.sin(k * x + phase)) / norm) + (jolt ? jolt * Math.sin(x * 0.5 + t * 29) : 0);
  }
  for (let i = 0; i < count; i++) {
    const a = i ? i - 1 : 0;
    const b = i < count - 1 ? i + 1 : i;
    const dx = cx[b] - cx[a];
    const dy = cy[b] - cy[a];
    const len = Math.hypot(dx, dy) || 1;
    nx[i] = -dy / len;
    ny[i] = dx / len;
  }
  const lines = LINES.map((off) => {
    const d = off * r;
    const p = new Path2D();
    p.moveTo(cx[0] + nx[0] * d, cy[0] + ny[0] * d);
    for (let i = 1; i < count; i++) p.lineTo(cx[i] + nx[i] * d, cy[i] + ny[i] * d);
    return p;
  });
  // Cross-section rings at fixed phases of the wave, drifting down the tube. Every copy
  // carries them at the same phases, so they line up in rows across the sheet.
  const rings = new Path2D();
  const drift = (t * wave.flow) % 1;
  const first = x0 + step;
  const last = x0 + (count - 2) * step;
  for (let m = 0; m < RINGS; m++) {
    const at = (((m + drift) / RINGS) * 2 * Math.PI - phase) / k;
    for (let x = first + ((((at - first) % lambda) + lambda) % lambda); x <= last; x += lambda) {
      const i = Math.round((x - x0) / step);
      const angle = Math.atan2(ny[i], nx[i]);
      rings.moveTo(cx[i] + Math.cos(angle) * r, cy[i] + Math.sin(angle) * r);
      rings.ellipse(cx[i], cy[i], r, r * 0.45, angle, 0, 2 * Math.PI);
    }
  }

  // Lay the copies down: the full ones in one pass, the fading pair in another.
  const lineA = Math.min(1, 0.55 + 0.3 * wave.glow) * sheet.alpha;
  const passes = edge < 1 ? [[0, pairs - 1, 1], [pairs, pairs, edge]] : [[0, pairs, 1]];
  for (const [from, to, weight] of passes) {
    const shifts = [];
    for (let m = from; m <= to; m++) {
      if (m === 0) shifts.push(0);
      else shifts.push(-m * gap, m * gap);
    }
    if (!shifts.length) continue;
    const gather = (path) => {
      if (shifts.length === 1 && shifts[0] === 0) return path;
      const all = new Path2D();
      for (const e of shifts) all.addPath(path, { a: 1, b: 0, c: 0, d: 1, e, f: 0 });
      return all;
    };
    const alpha = lineA * weight;
    g.lineWidth = sheet.width * (locked ? 1.25 : 1);
    lines.forEach((p, l) => {
      // Edge lines carry the tube; the inner pair stays fainter.
      const strong = l === 0 || l === LINES.length - 1 ? 1 : 0.6;
      g.strokeStyle = ink(palette[l], HOT_INK[l], wave, alpha * strong);
      g.stroke(gather(p));
    });
    g.strokeStyle = ink(palette[3], HOT_INK[3], wave, Math.min(1, alpha * 0.9));
    g.lineWidth = 0.9 * sheet.width;
    g.stroke(gather(rings));
  }
}

// The scale (reticles, ruler, rails, axis) only changes with the scope's size: paint it once
// into a layer and lay that over the bands each frame.
const overlays = new WeakMap();

function overlayFor(g, w, h, dpr) {
  const key = `${w}x${h}@${dpr}`;
  const cached = overlays.get(g);
  if (cached?.key === key) return cached.layer;
  const layer = g.canvas.ownerDocument.createElement("canvas");
  layer.width = Math.max(1, Math.round(w * dpr));
  layer.height = Math.max(1, Math.round(h * dpr));
  const lg = layer.getContext("2d");
  if (!lg) return null;
  lg.setTransform(dpr, 0, 0, dpr, 0, 0);
  const f = frameOf(w, h);
  drawFrame(lg, w, h, f);
  drawRails(lg, w, h, f);
  overlays.set(g, { key, layer });
  return layer;
}

function drawScope(g, w, h, t, wave, dpr = 1) {
  g.globalAlpha = 1;
  g.globalCompositeOperation = "source-over";
  g.clearRect(0, 0, w, h);
  const f = frameOf(w, h);
  g.save();
  g.beginPath();
  g.rect(f.left, f.top + 1, f.right - f.left, f.bottom - f.top - 2);
  g.clip();
  g.globalCompositeOperation = "lighter";
  g.lineJoin = "round";
  g.lineCap = "round";
  // How far out of sync the link is: 1 at 0 %, 0 locked.
  const spread = Math.min(1.2, Math.max(0, (wave.gap + wave.hunt * 0.45 * Math.sin(t * 0.55)) / PHASE_GAP));
  const phase = -t * wave.speed;
  // The pilot's sheet trails behind, then the unit's sheet over it.
  drawSheet(g, f, t, wave, { phase: phase - spread * (PILOT_LAG + 0.12 * Math.sin(t * 0.9)), spread, palette: PILOT_INK, alpha: 0.34, width: 1.8, sides: 0.7 });
  drawSheet(g, f, t, wave, { phase, spread, palette: UNIT_INK, alpha: 1, width: 1.15, sides: 1 });
  g.restore();
  const layer = overlayFor(g, w, h, dpr);
  if (layer) g.drawImage(layer, 0, 0, w, h);
  else {
    drawFrame(g, w, h, f);
    drawRails(g, w, h, f);
  }
}

function timecode(t) {
  const s = Math.max(0, t);
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  const tail = Math.floor((s % 1) * 100000);
  return `±${m}:${String(sec).padStart(2, "0")}: ${String(tail).padStart(5, "0")}`;
}

function useScope(canvasRef, readoutRef, timeRef, stop, busy) {
  const live = React.useRef(null);
  const target = waveFor(stop, busy);
  if (live.current) {
    live.current.stop = stop;
    live.current.target = target;
  } else live.current = { stop, target, wave: { ...target } };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas?.getContext?.("2d");
    const view = canvas?.ownerDocument.defaultView;
    const Resize = view?.ResizeObserver;
    if (!g || !Resize) return undefined;
    const state = live.current;
    const motion = prefersMotion();
    const born = view.performance.now();
    let w = 0;
    let h = 0;
    let dpr = 1;
    let frame = 0;
    let lastText = -Infinity;
    const paint = (now) => {
      if (!w || !h) return;
      const t = now / 1000;
      if (motion) for (const key in state.target) state.wave[key] += (state.target[key] - state.wave[key]) * 0.08;
      else Object.assign(state.wave, state.target);
      drawScope(g, w, h, motion ? t : 1.2, state.wave, dpr);
      if (motion && now - lastText > READOUT_MS) {
        lastText = now;
        const value = liveRate(state.stop, t);
        if (readoutRef.current) setText(readoutRef.current, value === undefined ? "AUTO" : value.toFixed(1));
        if (timeRef.current) setText(timeRef.current, timecode((now - born) / 1000));
      }
    };
    // Size from the layout the browser has just done (no forced reflow while the menu
    // opens) and paint the first frame in that same rendering step.
    const resize = new Resize(([entry]) => {
      dpr = Math.min(2, view.devicePixelRatio || 1);
      w = entry.contentRect.width;
      h = entry.contentRect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(view.performance.now());
    });
    resize.observe(canvas);
    if (motion) {
      const loop = (now) => {
        paint(now);
        frame = view.requestAnimationFrame(loop);
      };
      frame = view.requestAnimationFrame(loop);
    } else state.redraw = () => paint(view.performance.now());
    return () => {
      view.cancelAnimationFrame(frame);
      resize.disconnect();
      state.redraw = undefined;
    };
  }, [canvasRef, readoutRef, timeRef]);

  // Reduced motion: repaint the still frame when the stop changes.
  React.useEffect(() => {
    live.current.redraw?.();
  }, [stop, busy]);
}

/* ───────────── faces ───────────── */

function levelClass(prefix, level, control) {
  return `${prefix} is-${level}${control.busy ? " is-busy" : ""}${control.failed ? " is-failed" : ""}`;
}

function stopName(t, stop) {
  return stop.auto ? t("effort.auto") : stop.name;
}

function SyncPanel({ t, control, level, onEscape, onLeave }) {
  const { stops, shown, stop } = control;
  const rangeRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const readoutRef = React.useRef(null);
  const timeRef = React.useRef(null);
  useScope(canvasRef, readoutRef, timeRef, stop, control.busy);
  const name = stopName(t, stop);
  const pos = stops.length > 1 ? shown / (stops.length - 1) : 1;

  return (
    <div
      className={levelClass("eva-sp", level, control)}
      style={{ "--eva-pos": pos, "--eva-stops": stops.length }}
      // Keep focus where it is (the seat closes on a blur it does not recognise),
      // except on the slider itself.
      onMouseDown={(event) => {
        if (event.target !== rangeRef.current) event.preventDefault();
      }}
      // The panel sits in the composer's React tree: keep its keys away from composer shortcuts.
      onKeyDown={(event) => event.stopPropagation()}
    >
      <div className="eva-sp-slider">
        <span className="eva-sp-rail" aria-hidden="true">
          <span className="eva-sp-fill" />
          {stops.map((s, i) => (
            <i key={s.key} className={`${i <= shown ? "on" : ""}${s.berserk ? " berserk" : ""}`.trim() || undefined} style={{ "--i": i }} />
          ))}
        </span>
        <span className="eva-sp-thumb" aria-hidden="true" />
        <input
          ref={rangeRef}
          className="eva-sp-range"
          type="range"
          min={0}
          max={stops.length - 1}
          step={1}
          value={shown}
          aria-label={t("effort.label")}
          aria-valuetext={stop.auto ? name : `${name} · ${rateText(stop)}%`}
          onChange={(event) => control.move(Number(event.target.value))}
          onPointerUp={control.flush}
          onKeyUp={control.flush}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              control.flush();
              onEscape();
            }
          }}
          onBlur={(event) => {
            control.flush();
            onLeave(event.relatedTarget);
          }}
        />
      </div>
      <div className="eva-sp-stops" aria-hidden="true">
        {stops.map((s, i) => (
          <span key={s.key} className={i === shown ? "is-current" : undefined} style={{ "--i": i }} onClick={() => control.move(i, true)}>
            {s.berserk ? "暴走" : stopName(t, s)}
          </span>
        ))}
      </div>
      <div className="eva-sp-scope">
        <canvas ref={canvasRef} aria-hidden="true" />
        <div className="eva-sp-head">
          <span className="eva-sp-title">{fmt(t, "effort.panelTitle", { effort: name })}</span>
          <span className="eva-sp-mode">{control.failed ? t("effort.mode.failed") : t(`effort.mode.${level}`)}</span>
          <span className="eva-sp-time" ref={timeRef}>
            {timecode(0)}
          </span>
        </div>
        <div className="eva-sp-sub">
          <span className="eva-sp-label">{t("effort.ratio")}</span>
          <span className="eva-sp-value">
            <span ref={readoutRef}>{rateText(stop)}</span>
            {stop.auto ? null : "%"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function makeEffortSync(prefs) {
  return function EvaEffortSync({ t, available, directory, load, select }) {
    const show = useStore(prefs.store, (s) => s.enabled && s.effortSync);
    const control = useEffortControl({ show, available, directory, load, select });
    const plateRef = React.useRef(null);
    const valueRef = React.useRef(null);
    const visible = control !== undefined;
    const { dock, close, menu } = useModelMenuDock(plateRef, visible);
    useLiveReadout(valueRef, control?.stop, visible);

    if (!control) return null;

    const { stops, shown, stop } = control;
    const level = control.failed ? "failed" : stopLevel(stop);
    const name = stopName(t, stop);
    const valueText = stop.auto ? name : `${name} · ${rateText(stop)}%`;
    const tooltip = control.failed ? t("effort.failed") : fmt(t, "effort.tooltip", { effort: valueText });
    const leave = (next) => {
      if (next && !menu()?.contains(next)) close(false);
    };

    return (
      <div
        ref={plateRef}
        className={levelClass("eva-effort", stopLevel(stop), control)}
        title={tooltip}
        style={{ "--eva-effort-stops": stops.length }}
      >
        <span className="eva-effort-tag" aria-hidden="true">SYNC</span>
        <span className="eva-effort-track">
          <span className="eva-effort-cells" aria-hidden="true">
            {stops.map((s, i) => (
              <i
                key={s.key}
                style={{ "--i": i }}
                className={`${i <= shown ? "on" : ""}${s.berserk ? " berserk" : ""}${s.auto ? " auto" : ""}`.trim() || undefined}
              />
            ))}
          </span>
          <input
            className="eva-effort-range"
            type="range"
            min={0}
            max={stops.length - 1}
            step={1}
            value={shown}
            aria-label={t("effort.label")}
            aria-valuetext={valueText}
            onChange={(event) => control.move(Number(event.target.value))}
            onPointerUp={control.flush}
            onKeyUp={control.flush}
            onBlur={control.flush}
          />
        </span>
        <span className="eva-effort-value" aria-hidden="true">
          <span ref={valueRef}>{rateText(stop)}</span>
          {stop.auto ? null : <small>%</small>}
        </span>
        <span className="eva-effort-name" aria-hidden="true">{stop.berserk ? "暴走" : name}</span>
        {dock
          ? createPortal(<SyncPanel t={t} control={control} level={level} onEscape={() => close(true)} onLeave={leave} />, dock)
          : null}
      </div>
    );
  };
}
