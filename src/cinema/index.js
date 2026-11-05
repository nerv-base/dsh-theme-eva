// Boot cinematic chunk: start gate → entry-plug insertion → LCL → neural link →
// sync climb to 99.2% → pilot confirmation → 100% → title card → workbench.
import hudCss from "./hud.css";
import { AudioEngine, Announcer } from "./audio.js";
import { createScene, T } from "./scene.js";

const FINAL_AT = T.syncStop; // timeline resumes here after confirmation
const TITLE_AT = FINAL_AT + 1.6;
const TITLE_DUR = 2.9;
const END_AT = TITLE_AT + TITLE_DUR;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

function el(tag, cls, html) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function fmtClock(t) {
  const cs = Math.floor(t * 100);
  const m = Math.floor(cs / 6000);
  const s = Math.floor(cs / 100) % 60;
  const c = cs % 100;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
}

function syncAt(t, confirmedAt) {
  if (t < T.syncStart) return 0;
  if (confirmedAt == null || t < FINAL_AT) {
    const x = clamp((t - T.syncStart) / (T.syncStop - T.syncStart));
    const eased = 1 - Math.pow(1 - x, 2.4);
    const jitter = x < 1 ? Math.sin(t * 37) * 0.6 * (1 - x) : 0;
    return clamp(eased * 99.2 + jitter, 0, 99.2);
  }
  return 99.2 + 0.8 * clamp((t - FINAL_AT) / 0.9);
}

export function mount(container, { unit, voice = true, strings = {}, onDone }) {
  const style = document.createElement("style");
  style.dataset.evaCinema = "";
  style.textContent = hudCss;
  document.head.appendChild(style);

  const root = el("div", "evc-root");
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-label", unit.title.en);
  const canvas = el("canvas", "evc-canvas");
  root.appendChild(canvas);

  // Gate
  const gate = el(
    "div",
    "evc-gate",
    `<div class="evc-gate-inner">
      <div class="evc-gate-frame">
        <div class="evc-gate-ja evc-mincho">${esc(unit.gate.ja)}</div>
        <div class="evc-gate-en">${esc(unit.gate.en)}</div>
      </div>
      <div class="evc-gate-hint">${esc(strings.gateHint || "CLICK / ANY KEY")}</div>
      <div class="evc-gate-meta"><span>EVA-<b>${esc(unit.id)}</b></span><span>${esc(unit.pilotRole)}</span><span>LCL ▸ STANDBY</span></div>
    </div>`,
  );
  root.appendChild(gate);

  // HUD
  const hud = el("div", "evc-hud");
  const caution = el("div", "evc-caution");
  hud.appendChild(caution);
  const top = el(
    "div",
    "evc-hud-top",
    `<div class="evc-tag"><div class="evc-tag-title">${esc(unit.nameEn)}</div><div class="evc-tag-sub">ENTRY SEQUENCE · ${esc(unit.pilotRole)}</div></div>
     <div class="evc-clock"><span data-k="clock">00:00:00</span><small data-k="power">EXTERNAL POWER · UMBILICAL</small></div>`,
  );
  hud.appendChild(top);
  hud.appendChild(el("div", "evc-rule"));
  const steps = el("div", "evc-steps");
  const stepEls = unit.script.map((line, i) => {
    const row = el(
      "div",
      "evc-step",
      `<span class="evc-step-n">${String(i + 1).padStart(2, "0")}</span><span>${esc(line.en)}</span><span class="evc-step-st">—</span>`,
    );
    steps.appendChild(row);
    return row;
  });
  hud.appendChild(steps);
  const read = el(
    "div",
    "evc-read",
    `<div class="evc-read-row" data-r="depth"><span>PLUG DEPTH</span><b>0.00 m</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="lcl"><span>LCL LEVEL</span><b>0 %</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="press"><span>LCL PRESSURE</span><b>0.00 MPa</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="a10"><span>A10 NERVE</span><b>OFFLINE</b><div class="evc-read-bar"><i></i></div></div>`,
  );
  hud.appendChild(read);
  const sub = el("div", "evc-sub", `<div class="evc-sub-ja evc-mincho"></div><div class="evc-sub-en"></div>`);
  hud.appendChild(sub);
  const sync = el(
    "div",
    "evc-sync",
    `<div class="evc-sync-head"><span>SYNCHRONIZATION RATIO</span><span data-k="harm">HARMONICS ±0.0</span></div>
     <div class="evc-sync-num"><span data-k="sync">0.0</span><small>%</small></div>
     <canvas width="880" height="184"></canvas>
     <div class="evc-sync-legend"><span><i style="background:#f06a22"></i>PILOT</span><span><i style="background:#e8e2d7"></i>UNIT-${esc(unit.id)}</span><span><i style="background:#58c46a"></i>HARMONICS</span></div>`,
  );
  hud.appendChild(sync);
  root.appendChild(hud);

  const confirm = el(
    "div",
    "evc-confirm",
    `<div class="evc-confirm-panel">
      <div class="evc-confirm-label">PILOT AUTHENTICATION · SYNC ${unit.syncStop.toFixed(1)}%</div>
      <div class="evc-confirm-ja evc-mincho">${esc(unit.confirm.ja)}</div>
      <div class="evc-confirm-en">${esc(unit.confirm.en)}</div>
      <button type="button" class="evc-confirm-btn">${esc(strings.confirm || "CONFIRM")}</button>
    </div>`,
  );
  root.appendChild(confirm);

  const titleHtml = esc(unit.title.ja).replace(esc(unit.kanjiNumber), `<span>${esc(unit.kanjiNumber)}</span>`);
  const title = el(
    "div",
    "evc-title",
    `<div class="evc-title-inner">
      <div class="evc-title-ja evc-mincho">${titleHtml}</div>
      <div class="evc-title-rule"></div>
      <div class="evc-title-en">${esc(unit.title.en)}</div>
    </div>`,
  );
  root.appendChild(title);

  const skip = el("button", "evc-skip", `<span>${esc(strings.skip || "SKIP")}</span><kbd>Esc</kbd>`);
  skip.type = "button";
  skip.title = strings.skipHint || "";
  root.appendChild(skip);
  container.appendChild(root);

  const q = (k) => root.querySelector(`[data-k="${k}"]`);
  const clockEl = q("clock");
  const powerEl = q("power");
  const syncEl = q("sync");
  const harmEl = q("harm");
  const subJa = sub.firstElementChild;
  const subEn = sub.lastElementChild;
  const waves = sync.querySelector("canvas");
  const wctx = waves.getContext("2d");
  const reads = Object.fromEntries([...read.querySelectorAll("[data-r]")].map((n) => [n.dataset.r, n]));

  let scene;
  try {
    scene = createScene(canvas, unit);
  } catch (error) {
    console.warn("[dsh-theme-eva] WebGL unavailable, HUD-only cinematic", error);
  }
  const resize = () => scene?.resize(root.clientWidth, root.clientHeight);
  const ro = new ResizeObserver(resize);
  ro.observe(root);
  resize();

  let audio;
  let announcer;
  let started = false;
  let startWall = 0;
  let confirmedAt = null; // wall-clock ms when the pilot confirmed
  let frozenWall = 0;
  let raf = 0;
  let finished = false;
  let lastSub = -1;
  const fired = new Set();

  const say = (text, opts) => {
    if (!announcer || !text) return;
    audio?.squelch(audio.now);
    setTimeout(() => announcer?.speak(text, opts), 120);
  };

  // Cue sheet: [time, id, fn]. Fired once when the timeline passes them.
  const cues = [
    [0, "hum", () => { audio?.hum(); audio?.whoosh(audio.now, 3.3, 180, 1500, 0.3); }],
    [T.insertEnd - 0.05, "clank1", () => audio?.clank(audio.now, 1.2)],
    [T.lockStart, "servo", () => audio?.servo(audio.now, T.lockEnd - T.lockStart)],
    [T.lockEnd - 0.08, "clank2", () => { audio?.clank(audio.now, 1); audio?.hiss(audio.now + 0.1, 1.3); }],
    [T.cut - 0.1, "cut", () => audio?.whoosh(audio.now, 0.5, 2400, 300, 0.25)],
    [T.lights, "lights", () => [0, 0.14, 0.28].forEach((d, i) => audio?.beep(audio.now + d, 880 + i * 220, 0.08, 0.06))],
    [T.lclStart, "lcl", () => audio?.liquid(audio.now, T.lclEnd - T.lclStart + 0.6)],
    [T.electric, "zap", () => audio?.zap(audio.now, T.electricEnd - T.electric)],
    [T.power, "power", () => { audio?.powerUp(audio.now); audio?.humPower(audio.now); }],
    [T.syncStart, "sync", () => audio?.syncTone(audio.now, T.syncStop - T.syncStart)],
    [T.syncStop, "confirm", () => {
      audio?.beep(audio.now, 1568, 0.14, 0.07);
      audio?.beep(audio.now + 0.2, 1568, 0.14, 0.07);
      if (voice) say(unit.confirm.voice);
    }],
  ];
  unit.script.forEach((line, i) => {
    cues.push([line.t, `line${i}`, () => { if (line.voice && voice) say(line.ja); }]);
    const next = unit.script[i + 1]?.t ?? T.syncStop;
    cues.push([Math.min(next - 0.3, line.t + 2.2), `ok${i}`, () => audio?.chirp(audio.now)]);
  });
  const postCues = [
    [FINAL_AT + 0.02, "final", () => { audio?.chirp(audio.now); if (voice) say(unit.final.voice); }],
    [TITLE_AT, "title", () => { audio?.boom(audio.now); audio?.humFade(audio.now + 2, 1.2); if (voice) setTimeout(() => announcer?.speak(unit.title.voice, { rate: 0.95, pitch: 0.78 }), 450); }],
  ];

  function timeline(now) {
    if (!started) return 0;
    const raw = (now - startWall) / 1000;
    if (confirmedAt == null) return Math.min(raw, T.syncStop);
    return FINAL_AT + (now - confirmedAt) / 1000;
  }

  function drawWaves(t, s) {
    const w = waves.width;
    const h = waves.height;
    wctx.clearRect(0, 0, w, h);
    wctx.strokeStyle = "#ffffff12";
    wctx.lineWidth = 1;
    for (let x = 0; x <= w; x += w / 16) {
      wctx.beginPath();
      wctx.moveTo(x, 0);
      wctx.lineTo(x, h);
      wctx.stroke();
    }
    wctx.beginPath();
    wctx.moveTo(0, h / 2);
    wctx.lineTo(w, h / 2);
    wctx.stroke();
    const k = s / 100;
    const diff = 1 - k;
    const line = (color, phase, amp, freq, width) => {
      wctx.strokeStyle = color;
      wctx.lineWidth = width;
      wctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const u = x / w;
        const y = h / 2 + Math.sin(u * Math.PI * 2 * freq + phase) * amp * h * 0.36 + Math.sin(u * 40 + t * 9 + phase) * diff * 6;
        if (x === 0) wctx.moveTo(x, y);
        else wctx.lineTo(x, y);
      }
      wctx.stroke();
    };
    line("#e8e2d7", t * 2.1, 0.9, 3, 2);
    line("#f06a22", t * 2.1 + diff * 2.6, 0.9 - diff * 0.4, 3 + diff * 1.4, 2.4);
    line("#58c46a", t * 3 + 1, 0.15 + diff * 0.5, 7, 1.4);
  }

  function setRead(key, text, frac, alert = false) {
    const row = reads[key];
    row.children[1].textContent = text;
    row.children[2].firstElementChild.style.width = `${clamp(frac) * 100}%`;
    row.classList.toggle("is-alert", alert);
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const t = timeline(now);
    if (!started) {
      // Idle gate: keep the canvas dark.
      return;
    }
    for (const [at, id, fn] of cues) {
      if (t >= at && !fired.has(id)) {
        fired.add(id);
        fn();
      }
    }
    if (confirmedAt != null) {
      for (const [at, id, fn] of postCues) {
        if (t >= at && !fired.has(id)) {
          fired.add(id);
          fn();
        }
      }
    }

    // Scene
    const titleOn = confirmedAt != null && t >= TITLE_AT;
    if (scene && !titleOn) {
      const fade = confirmedAt != null ? 1 - clamp((t - (TITLE_AT - 0.4)) / 0.4) : 1;
      const flash = confirmedAt != null ? Math.exp(-(t - FINAL_AT) * 5) * 0.5 : 0;
      scene.update(t, { fade, flash });
    }

    // HUD
    hud.classList.toggle("is-on", t > 0.3 && !titleOn);
    clockEl.textContent = fmtClock(t);
    powerEl.textContent = t >= T.power ? "INTERNAL POWER · MAIN CIRCUIT LIVE" : "EXTERNAL POWER · UMBILICAL";
    caution.classList.toggle("is-on", t >= T.electric && t < T.electricEnd && Math.sin(t * 30) > 0);
    let current = -1;
    unit.script.forEach((line, i) => {
      if (t >= line.t) current = i;
    });
    stepEls.forEach((row, i) => {
      const next = unit.script[i + 1]?.t ?? T.syncStop;
      const done = t >= Math.min(next - 0.3, unit.script[i].t + 2.2) || (i === unit.script.length - 1 && confirmedAt != null);
      row.classList.toggle("is-done", done);
      row.classList.toggle("is-active", i === current && !done);
      row.lastElementChild.textContent = done ? "OK" : i === current ? "RUN" : "—";
    });

    // Subtitles: script lines, then confirmation and final.
    let line = current >= 0 ? unit.script[current] : null;
    let lineKey = current;
    if (confirmedAt != null) {
      line = unit.final;
      lineKey = 100;
    } else if (t >= T.syncStop) {
      line = null;
      lineKey = 99;
    }
    if (lineKey !== lastSub) {
      lastSub = lineKey;
      subJa.textContent = line?.ja ?? "";
      subEn.textContent = line?.en ?? "";
      sub.classList.remove("is-in");
      void sub.offsetWidth;
      sub.classList.add("is-in");
    }

    const depth = Math.min(1, t / T.lockEnd);
    setRead("depth", `${(depth * 4.8).toFixed(2)} m`, depth);
    const lcl = clamp((t - T.lclStart) / (T.lclEnd - T.lclStart));
    setRead("lcl", `${Math.round(lcl * 100)} %`, lcl);
    const press = lcl * 0.42 + (t >= T.electric ? 0.08 : 0);
    setRead("press", `${press.toFixed(2)} MPa`, press / 0.5, t >= T.electric && t < T.electricEnd);
    const a10 = clamp((t - (T.power + 3)) / 2.4);
    setRead("a10", t < T.power + 3 ? "OFFLINE" : a10 < 1 ? `LINKING ${Math.round(a10 * 100)}%` : "NOMINAL", a10);

    const s = syncAt(t, confirmedAt);
    sync.classList.toggle("is-on", t >= T.syncStart - 0.2);
    syncEl.textContent = s.toFixed(1);
    harmEl.textContent = `HARMONICS ±${((100 - s) * 0.12).toFixed(1)}`;
    if (t >= T.syncStart - 0.2) drawWaves(t, s);

    const waiting = t >= T.syncStop && confirmedAt == null;
    if (waiting !== confirm.classList.contains("is-on")) {
      confirm.classList.toggle("is-on", waiting);
      if (waiting) setTimeout(() => confirm.querySelector("button")?.focus({ preventScroll: true }), 50);
    }
    if (waiting && now - frozenWall > 2400) {
      frozenWall = now;
      if (fired.has("confirm")) audio?.beep(audio.now, 1568, 0.1, 0.04);
    }

    title.classList.toggle("is-on", titleOn);
    if (confirmedAt != null && t >= END_AT) finish();
  }

  function start() {
    if (started || finished) return;
    started = true;
    audio = new AudioEngine();
    audio.resume();
    announcer = new Announcer(voice);
    startWall = performance.now();
    gate.classList.add("is-gone");
  }

  function doConfirm() {
    if (confirmedAt != null || !started) return;
    if (timeline(performance.now()) < T.syncStop) return;
    confirmedAt = performance.now();
  }

  function finish() {
    if (finished) return;
    finished = true;
    root.classList.add("is-leaving");
    announcer?.dispose();
    audio?.humFade(audio.now, 0.5);
    setTimeout(() => onDone?.(), 600);
  }

  const onKey = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      finish();
      return;
    }
    if (!started) {
      e.preventDefault();
      start();
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && confirm.classList.contains("is-on")) {
      e.preventDefault();
      doConfirm();
    }
  };
  window.addEventListener("keydown", onKey, true);
  gate.addEventListener("click", start);
  confirm.querySelector("button").addEventListener("click", doConfirm);
  skip.addEventListener("click", (e) => {
    e.stopPropagation();
    finish();
  });
  gate.focus?.();
  raf = requestAnimationFrame(frame);

  return {
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey, true);
      ro.disconnect();
      announcer?.dispose();
      audio?.close();
      scene?.dispose();
      root.remove();
      style.remove();
    },
  };
}
