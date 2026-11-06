// 2D command-room monitor cuts drawn on a canvas: intertitle cards, the power
// panel, the neural-connection schematic, brain-region vital traces and the
// tri-computer vote. All graphics are original; only the vocabulary (CRT
// phosphor on black, PHASE lists, Mincho captions) follows the anime look.
import { toner } from "./tone.js";

const VW = 1600;
const VH = 1000;

const MINCHO = '"EVA Mincho","Noto Serif CJK JP","Hiragino Mincho ProN","Yu Mincho",serif';
const COND = '"EVA Condensed","Barlow Condensed","Arial Narrow",sans-serif';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (x) => 1 - Math.pow(1 - clamp(x), 3);

/**
 * Cut list (seconds on the cinematic timeline). `kind` picks the painter;
 * gaps between cuts show the 3D cabin underneath.
 */
export const CUTS = [
  { at: 6.25, end: 6.95, kind: "title", ja: "第一次接続", en: "PRIMARY CONTACT" },
  { at: 12.9, end: 13.45, kind: "title", ja: "主電源接続", en: "MAIN POWER" },
  { at: 13.45, end: 14.3, kind: "power" },
  { at: 14.3, end: 15.55, kind: "lines" },
  { at: 15.55, end: 16.1, kind: "title", ja: "第二次接続", en: "SECONDARY CONTACT" },
  { at: 16.1, end: 17.4, kind: "neural" },
  { at: 17.4, end: 18.7, kind: "brain" },
  { at: 19.25, end: 19.85, kind: "title", ja: "双方向回線", en: "BIDIRECTIONAL CIRCUIT", vertical: "開放" },
  { at: 19.85, end: 20.6, kind: "magi" },
];

export function cutAt(t) {
  for (const cut of CUTS) if (t >= cut.at && t < cut.end) return cut;
  return null;
}

/**
 * Transparent overlays drawn over the 3D scope shots (the scene renders the
 * x-ray plug and the harmonics helix; these add the captions and scales).
 */
export const SCOPES = [
  { at: 4.5, end: 5.8, kind: "xray" },
  { at: 20.6, end: Infinity, kind: "helix" },
];

export function scopeAt(t) {
  for (const s of SCOPES) if (t >= s.at && t < s.end) return s;
  return null;
}

export function createMonitor(canvas, unit) {
  // Phosphor colours: the "orange" family is the unit's HUD marking (Unit-02
  // orange, Unit-01 lime), re-hued from the Unit-02 shades; green (linked / OK),
  // red (hold / danger), white and the black screen are semantic and shared.
  const tone = toner(unit);
  const C = {
    bg: "#040405",
    green: "#5cf2a0",
    greenDim: "#1d5a3c",
    orange: tone("#ff7a1a"),
    orangeDim: unit.palette.markingDim,
    hot: unit.palette.markingHot,
    amber: tone("#f2a65a"), // scope captions
    pointer: tone("#ff5a1a"),
    well: tone("#2a1206"), // unlit segment
    wellDeep: tone("#1a0d05"), // unlit vertebra
    wellMagi: tone("#1a0b05"), // undecided MAGI cell
    red: "#e8261c",
    scope: tone("#e8261c", "accent"), // harmonics-scope frame and scales (armour hue)
    white: "#f4efe6",
  };
  C.grid = `${C.orange}18`;
  const g = canvas.getContext("2d");
  let W = 1;
  let H = 1;
  let dpr = 1;
  let shown = null;

  // Stable pseudo-random numbers per cut so the screens do not shimmer.
  const rand = (seed) => {
    const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  function resize(w, h) {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, w);
    H = Math.max(1, h);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  /* ───────── primitives (virtual 1600×1000 space) ───────── */

  function text(str, x, y, { font = COND, size = 20, color = C.orange, align = "left", weight = 600, sx = 1, spacing = 0, glow = 0, base = "alphabetic" } = {}) {
    g.save();
    g.translate(x, y);
    g.scale(sx, 1);
    g.font = `${weight} ${size}px ${font}`;
    g.fillStyle = color;
    g.textAlign = align;
    g.textBaseline = base;
    if ("letterSpacing" in g) g.letterSpacing = `${spacing}px`;
    if (glow) {
      g.shadowColor = color;
      g.shadowBlur = glow;
    }
    g.fillText(str, 0, 0);
    g.restore();
  }

  function box(x, y, w, h, color = C.orange, width = 1.5) {
    g.strokeStyle = color;
    g.lineWidth = width;
    g.strokeRect(x + 0.5, y + 0.5, w, h);
  }

  function fill(x, y, w, h, color) {
    g.fillStyle = color;
    g.fillRect(x, y, w, h);
  }

  function brackets(x, y, w, h, s = 18, color = C.orange) {
    g.strokeStyle = color;
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(x, y + s); g.lineTo(x, y); g.lineTo(x + s, y);
    g.moveTo(x + w - s, y); g.lineTo(x + w, y); g.lineTo(x + w, y + s);
    g.moveTo(x + w, y + h - s); g.lineTo(x + w, y + h); g.lineTo(x + w - s, y + h);
    g.moveTo(x + s, y + h); g.lineTo(x, y + h); g.lineTo(x, y + h - s);
    g.stroke();
  }

  function plate(x, y, w, h, label, { color = C.orange, sub, lit = false } = {}) {
    if (lit) fill(x, y, w, h, color);
    box(x, y, w, h, color, 1.5);
    text(label, x + 12, y + h / 2 + (sub ? -2 : 7), { size: 20, color: lit ? C.bg : color, spacing: 1.5 });
    if (sub) text(sub, x + 12, y + h / 2 + 18, { size: 13, color: lit ? C.bg : color, spacing: 1.2, weight: 500 });
  }

  function chrome(cut, u, label) {
    // grid + frame common to every monitor screen
    g.strokeStyle = C.grid;
    g.lineWidth = 1;
    g.beginPath();
    for (let x = 0; x <= VW; x += 50) { g.moveTo(x, 0); g.lineTo(x, VH); }
    for (let y = 0; y <= VH; y += 50) { g.moveTo(0, y); g.lineTo(VW, y); }
    g.stroke();
    brackets(28, 28, VW - 56, VH - 56, 30);
    text(label, 48, 66, { size: 18, spacing: 3 });
    text(`EVA-${unit.id}  ·  ${unit.pilotRole}`, VW - 48, 66, { size: 18, spacing: 3, align: "right" });
    const clock = (cut.at + u).toFixed(2).padStart(6, "0");
    text(`T+${clock}`, VW - 48, VH - 44, { size: 16, spacing: 2, align: "right", color: C.orange });
    text("LIVE", 48, VH - 44, { size: 16, spacing: 3, color: Math.sin(u * 14) > 0 ? C.red : C.orangeDim });
  }

  /* ───────── painters ───────── */

  function paintTitle(cut, u) {
    // Mincho intertitle: white on black, squashed, hard cut.
    const big = cut.ja.length > 4 ? 170 : 190;
    text(cut.ja, VW / 2, VH / 2 + 40, { font: MINCHO, size: big, weight: 900, color: C.white, align: "center", sx: 0.78, spacing: 6 });
    if (cut.vertical) {
      // a vertical kicker in the classic L layout
      const x = VW / 2 + (cut.ja.length * big * 0.78) / 2 + 40;
      [...cut.vertical].forEach((ch, i) => text(ch, x, VH / 2 - 60 + i * 110, { font: MINCHO, size: 96, weight: 900, color: C.white, sx: 0.84 }));
    }
    text(cut.en, VW / 2, VH / 2 + 120, { size: 26, color: "#bdb6aa", align: "center", spacing: 10, weight: 500 });
    if (u < 0.08) fill(0, 0, VW, VH, "#ffffff10");
  }

  function paintPower(cut, u) {
    chrome(cut, u, "MONITOR 07 · POWER DISTRIBUTION");
    // left: supply system plate
    text("主電源供給システム", 80, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("MAIN POWER SUPPLY SYSTEM", 82, 204, { size: 18, spacing: 4 });
    const extOn = u > 0.25;
    plate(80, 240, 230, 74, "外部 EXTERNAL", { lit: extOn && Math.sin(u * 30) > -0.6, color: C.green, sub: "UMBILICAL CABLE" });
    plate(330, 240, 230, 74, "内部 INTERNAL", { sub: "STANDBY · 5:00" });
    // voltage bars
    const bars = 18;
    for (let i = 0; i < bars; i++) {
      const k = ease((u - 0.15 - i * 0.03) / 0.5);
      const hgt = 220 * k * (0.55 + 0.45 * rand(i + 3));
      const col = i > 14 ? C.red : i > 11 ? C.orange : C.green;
      fill(84 + i * 26, 600 - hgt, 18, hgt, col);
    }
    box(76, 370, 484, 236);
    text("VOLTAGE", 84, 630, { size: 16, spacing: 3 });
    text(`${(ease(u / 1.2) * 1.21).toFixed(2)} GV`, 556, 630, { size: 16, spacing: 2, align: "right", color: C.green });

    // right: circuit matrix lighting up
    text("全回路動力伝達", 660, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("POWER TRANSFER TO ALL CIRCUITS", 662, 204, { size: 18, spacing: 4 });
    const cols = 8;
    const rows = 5;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const x = 660 + c * 108;
        const y = 240 + r * 70;
        const on = u > 0.2 + i * 0.028;
        if (on) fill(x, y, 96, 56, C.greenDim);
        box(x, y, 96, 56, on ? C.green : C.orangeDim);
        text(`${String.fromCharCode(65 + r)}-${String(c + 1).padStart(2, "0")}`, x + 10, y + 24, { size: 16, color: on ? C.green : C.orangeDim, spacing: 1 });
        text(on ? "LIVE" : "----", x + 10, y + 46, { size: 14, color: on ? C.green : C.orangeDim, spacing: 2, weight: 500 });
      }
    }
    const p = clamp((u - 0.2) / 1.15);
    box(660, 620, 852, 34);
    fill(664, 624, 844 * p, 26, p >= 1 ? C.green : C.orange);
    text(`TRANSFER ${Math.round(p * 100)}%`, 660, 690, { size: 20, spacing: 3, color: p >= 1 ? C.green : C.orange });
    text("UNIT-" + unit.id + " · PRIMARY CIRCUIT", 1512, 690, { size: 16, spacing: 3, align: "right" });
  }

  // Circuit matrix: herringbone columns of phosphor bars that switch on row by
  // row while the feed pans up, orange trace lines and register labels between
  // them, a red bank on the right flipping across the border line.
  function slab(x, y, w, h, rise, color, { tab = C.orange, label, labelColor = "#052a1c", alpha = 1 } = {}) {
    // parallelogram whose top edge climbs `rise` px over its width
    g.globalAlpha = alpha;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + w, y - rise);
    g.lineTo(x + w, y - rise + h);
    g.lineTo(x, y + h);
    g.closePath();
    g.fillStyle = color;
    g.fill();
    if (tab) {
      const tw = w * 0.13;
      const r2 = rise * (tw / w);
      const sx = rise > 0 ? x : x + w - tw;
      const sy = rise > 0 ? y : y - rise + r2;
      g.beginPath();
      g.moveTo(sx, sy);
      g.lineTo(sx + tw, sy - r2);
      g.lineTo(sx + tw, sy - r2 + h * 0.32);
      g.lineTo(sx, sy + h * 0.32);
      g.closePath();
      g.fillStyle = tab;
      g.fill();
    }
    if (label) {
      g.save();
      g.translate(x + w / 2, y - rise / 2 + h / 2);
      g.rotate(-Math.atan2(rise, w));
      text(label, 0, 9, { size: 30, weight: 800, color: labelColor, align: "center", spacing: 2 });
      g.restore();
    }
    g.globalAlpha = 1;
  }

  function paintLines(cut, u) {
    const pan = -u * 150;
    const rowH = 150;
    const rows = 9;
    const lit = (col, row) => u > 0.08 + row * 0.07 + col * 0.035;
    g.save();
    g.translate(-40, pan + 40);
    g.shadowBlur = 0;
    // trace lines first (behind the bars)
    g.strokeStyle = C.orange;
    g.lineWidth = 3;
    g.beginPath();
    for (const x of [300, 590, 1010, 1325]) { g.moveTo(x, -200); g.lineTo(x, rows * rowH + 300); }
    for (let r = 0; r < rows; r++) {
      const y = r * rowH + 40;
      g.moveTo(300, y); g.lineTo(360, y);
      g.moveTo(590, y); g.lineTo(650, y);
      g.moveTo(870, y + 10); g.lineTo(960, y + 10);
      g.moveTo(1240, y - 30); g.lineTo(1325, y - 30);
    }
    g.stroke();
    g.shadowColor = C.green;
    g.shadowBlur = 16;
    for (let r = 0; r < rows; r++) {
      const y = r * rowH;
      // column A: long rising bars
      slab(40, y + 110, 250, 70, 115, lit(0, r) ? C.green : C.greenDim);
      // column B: rising
      slab(370, y + 110, 210, 66, 95, lit(1, r) ? C.green : C.greenDim);
      // chevron pair C/D
      slab(660, y + 110, 200, 66, 95, lit(2, r) ? C.green : C.greenDim, { label: r === 1 || r === 2 ? "SYNC" : undefined });
      slab(1030, y + 15, 200, 66, -95, lit(3, r) ? C.green : C.greenDim, { label: r === 1 || r === 2 ? "SYNC" : undefined });
      // red bank E: flips green as the border line passes
      const flip = u > 0.55 + r * 0.06;
      g.shadowColor = flip ? C.green : C.red;
      slab(1345, y + 15, 230, 66, -105, flip ? C.green : C.red, { label: r > 5 ? "SYNC" : undefined, labelColor: flip ? "#052a1c" : "#3a0503" });
      g.shadowColor = C.green;
    }
    g.shadowBlur = 0;
    // register labels
    for (let r = 0; r < rows; r++) {
      const y = r * rowH + 50;
      const n = 133 + r;
      text(`A0${n}`, 300 + 14, y - 16, { size: 34, weight: 600, sx: 0.8 });
      text((r + 11).toString(2).padStart(5, "0"), 594 + 10, y - 16, { size: 34, weight: 600, sx: 0.8 });
      text(`MT-0${1353 + r}`, 876, y + 2, { size: 34, weight: 600, sx: 0.8 });
      text(`B${24 + r}`, 1250, y - 40, { size: 30, weight: 600, sx: 0.8 });
      text(`MT-${2353 + r}`, 1590, y - 40, { size: 30, weight: 600, sx: 0.8, align: "right" });
    }
    // border line marker crossing the red bank
    const by = clamp((u - 0.55) / 0.06, -0.5, rows) * rowH + 40;
    g.save();
    g.translate(1300, by);
    g.rotate(-0.42);
    fill(-150, -26, 300, 52, "#1a5a40");
    box(-150, -26, 300, 52, C.green, 2);
    text("BORDER-LINE", 0, 12, { size: 30, weight: 800, color: C.orange, align: "center", spacing: 3 });
    g.restore();
    text("ABSOLUTE-L", 1180, by - 60, { size: 22, spacing: 2 });
    text(`GTGC0100${(11010 + Math.floor(u * 9)).toString()}`, 880, rows * rowH - 30, { size: 34, sx: 0.8 });
    g.restore();
    // fixed readout (not panning)
    fill(40, 40, 520, 104, "#000000d0");
    box(40, 40, 520, 104);
    text("CIRCUIT 0001 — 1405", 60, 84, { size: 30, spacing: 4, weight: 700 });
    const open = Math.min(1405, Math.round(ease(u / (cut.end - cut.at - 0.15)) * 1405));
    text(`OPEN ${String(open).padStart(4, "0")} / 1405`, 60, 126, { size: 26, spacing: 3, color: open >= 1405 ? C.green : C.orange });
    text(open >= 1405 ? "回線 全開" : "回線 開放中", 540, 126, { font: MINCHO, size: 40, weight: 900, sx: 0.86, align: "right", color: open >= 1405 ? C.green : C.orange });
  }

  // Scope overlays (transparent; the 3D scene is underneath).
  function caption(x, y, str, size = 30) {
    fill(x, y - size + 2, 4, size + 6, C.orange);
    text(str, x + 18, y, { size, weight: 700, color: C.amber, spacing: 0.5, glow: 10 });
  }

  function paintXray(scope, u) {
    caption(90, 110, `Monitored Subject : EVA-${unit.id} Entry Plug`, 36);
    const depth = clamp((u + 0.1) / 1.3);
    caption(860, 900, `Status : Verifying Link-up System`, 30);
    caption(860, 944, `Plug Depth ${(3.2 + depth * 1.6).toFixed(2)} m  ·  Insertion Angle ${(depth * 90).toFixed(1)}°`, 26);
    // depth scale on the left
    g.strokeStyle = C.amber;
    g.lineWidth = 2;
    g.beginPath();
    for (let i = 0; i <= 40; i++) {
      const y = 200 + i * 16;
      g.moveTo(60, y);
      g.lineTo(i % 5 === 0 ? 92 : 76, y);
    }
    g.stroke();
    const my = 200 + depth * 640;
    g.fillStyle = C.red;
    g.beginPath();
    g.moveTo(100, my); g.lineTo(122, my - 10); g.lineTo(122, my + 10); g.closePath();
    g.fill();
  }

  function paintHelix(scope, u, { sync = 0, confirmed = false } = {}) {
    const red = C.scope;
    // top tick strip
    for (let i = 0; i < 96; i++) {
      const x = 12 + i * 16.5;
      const col = ["#e8261c", "#36d45a", "#2f5bff", "#e8261c"][i % 4];
      g.fillStyle = col;
      g.globalAlpha = 0.7;
      g.fillRect(x, 48, 3, i % 3 === 0 ? 40 : 26);
    }
    g.globalAlpha = 1;
    // frame lines + axes
    g.strokeStyle = red;
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(0, 112); g.lineTo(VW, 112);
    g.moveTo(0, 880); g.lineTo(VW, 880);
    g.moveTo(150, 100); g.lineTo(150, 905);
    g.moveTo(175, 100); g.lineTo(175, 905);
    g.stroke();
    for (let i = -6; i <= 6; i++) {
      const y = 490 - i * 60;
      g.beginPath();
      g.moveTo(140, y); g.lineTo(186, y);
      g.stroke();
      text(`${i >= 0 ? "+" : ""}${i.toFixed(1)}`, 196, y + 8, { size: 20, color: red, weight: 600 });
      const x = 800 + i * 118;
      g.beginPath();
      g.moveTo(x, 880); g.lineTo(x, 900);
      g.stroke();
      text(`${i >= 0 ? "+" : ""}${i.toFixed(1)}`, x, 930, { size: 22, color: red, weight: 600, align: "center" });
    }
    // marker box with the pointer riding the harmonics error
    const err = (100 - sync) / 100;
    const my = 490 - err * 300 + Math.sin(u * 3) * 6;
    box(70, my - 60, 120, 120, red, 3);
    g.fillStyle = C.pointer;
    g.beginPath();
    g.moveTo(84, my - 12); g.lineTo(104, my); g.lineTo(84, my + 12); g.closePath();
    g.fill();
    g.fillRect(104, my - 1.5, 70, 3);
    // captions
    caption(230, 166, `Monitored Subject : EVA-${unit.id} Assigned Pilot`, 30);
    caption(230, 208, confirmed ? "Neurological Link-up : Synchronization Complete" : "Verifying Neurological Link-up : Calculating Synchronization Rate", 26);
    // big sync readout
    fill(1160, 140, 380, 200, "#000000c0");
    box(1160, 140, 380, 200, `${C.scope}80`, 1.5);
    text("SYNCHRONIZATION RATIO", 1520, 180, { size: 22, spacing: 4, align: "right", color: C.amber });
    text(`${sync.toFixed(1)}%`, 1520, 280, { size: 110, weight: 700, align: "right", color: sync >= 99 ? C.green : C.hot, glow: 18 });
    text(`HARMONICS ±${((100 - sync) * 0.12).toFixed(2)}`, 1520, 320, { size: 22, spacing: 3, align: "right", color: C.amber });
  }

  // Anatomical nerve schematic (front view). Everything is precomputed once:
  // a smooth body contour, bone hints, vertebra shapes and a nerve graph whose
  // edges carry the time window (in cut progress p) during which a signal runs
  // along them, travelling from the sacrum up the cord and out to the limbs.
  const BODY = (() => {
    const cx = 800;
    // Catmull-Rom sampled into a polyline
    const cr = (pts, n = 5) => {
      const out = [pts[0]];
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[Math.max(0, i - 1)];
        const b = pts[i];
        const c = pts[i + 1];
        const d = pts[Math.min(pts.length - 1, i + 2)];
        for (let k = 1; k <= n; k++) {
          const t = k / n;
          const t2 = t * t;
          const t3 = t2 * t;
          const f = (j) => 0.5 * (2 * b[j] + (c[j] - a[j]) * t + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * t2 + (3 * b[j] - a[j] - 3 * c[j] + d[j]) * t3);
          out.push([f(0), f(1)]);
        }
      }
      return out;
    };
    const trace = (path, pts, move = true) => pts.forEach(([x, y], i) => (i === 0 && move ? path.moveTo(x, y) : path.lineTo(x, y)));
    const mirror = (pts) => pts.map(([x, y]) => [2 * cx - x, y]);
    const both = (path, pts, n = 5) => {
      const s = cr(pts, n);
      trace(path, s);
      trace(path, mirror(s));
    };

    // right arm skeleton: x, y, half-width (A-pose, palms forward)
    const ARM = [[890, 300, 17], [911, 356, 15], [933, 412, 12], [955, 458, 13], [978, 504, 9.5]];
    const nrm = (i) => {
      const a = ARM[Math.max(0, i - 1)];
      const b = ARM[Math.min(ARM.length - 1, i + 1)];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      return [(b[1] - a[1]) / l, -(b[0] - a[0]) / l];
    };
    const arm = (s, o) => {
      const i = Math.min(ARM.length - 2, Math.floor(s));
      const f = s - i;
      const n0 = nrm(i);
      const n1 = nrm(i + 1);
      const x = ARM[i][0] + (ARM[i + 1][0] - ARM[i][0]) * f;
      const y = ARM[i][1] + (ARM[i + 1][1] - ARM[i][1]) * f;
      return [x + o * (n0[0] + (n1[0] - n0[0]) * f), y + o * (n0[1] + (n1[1] - n0[1]) * f)];
    };
    const armEdge = (i, side) => arm(i, side * ARM[i][2]);
    // hand frame: along the forearm axis, across = lateral (thumb side)
    const hand = (al, ac) => [978 + 0.439 * al + 0.898 * ac, 504 + 0.898 * al - 0.439 * ac];
    const HAND = [
      [0, 9.5], [10, 13], [20, 18], [28, 22], [31, 21], [30, 17.5], [24, 13],
      [40, 11], [57, 10], [61, 7.5], [58, 5], [45, 4.5],
      [62, 4], [65, 1.5], [62, -1], [45, -1.5],
      [60, -2.5], [62, -4.8], [59, -7], [43, -7.5],
      [51, -8.5], [53, -10.8], [50, -13], [36, -14], [16, -12], [0, -9.5],
    ];

    // ── contour (right half, head top → crotch), smoothed per run; joints are corners
    const runs = [
      [[800, 155], [818, 158], [832, 170], [838, 192], [836, 214], [829, 230]],
      [[829, 230], [819, 244], [819, 262], [842, 274], [868, 281], [887, 287], [903, 298], [912, 320], armEdge(1, 1), armEdge(2, 1), armEdge(3, 1), armEdge(4, 1)],
      HAND.map(([a, b]) => hand(a, b)),
      [armEdge(4, -1), armEdge(3, -1), armEdge(2, -1), armEdge(1, -1), [884, 340], [873, 331]],
      [[873, 331], [868, 352], [862, 385], [853, 415], [857, 437], [869, 458], [879, 482], [883, 505], [880, 560], [869, 628], [866, 660], [870, 700], [869, 735], [862, 772], [861, 800]],
      [[861, 800], [866, 816], [875, 829], [879, 837], [866, 841], [846, 841], [832, 838], [835, 824], [839, 800]],
      [[839, 800], [834, 772], [828, 722], [830, 690], [832, 662], [828, 628], [818, 575], [809, 535], [801, 508]],
    ];
    const right = [];
    for (const r of runs) {
      const s = cr(r, 6);
      if (right.length) s.shift();
      right.push(...s);
    }
    const outline = new Path2D();
    trace(outline, right);
    trace(outline, mirror(right).reverse(), false);
    outline.closePath();

    // horizontal hatch, clipped to the body at paint time
    const hatch = new Path2D();
    for (let y = 152; y <= 846; y += 4) { hatch.moveTo(600, y); hatch.lineTo(1000, y); }

    // bone hints: jaw, clavicles, ribs, costal arch, pelvis, knee caps
    const bones = new Path2D();
    both(bones, [[829, 230], [818, 241], [806, 246], [800, 247]]);
    both(bones, [[806, 285], [828, 287], [856, 283], [882, 290]]);
    both(bones, [[806, 328], [828, 338], [852, 337], [866, 326]]);
    for (let k = 0; k < 10; k++) {
      const v = 299 + k * 9.55;
      both(bones, [[806, v - 3], [828, v - 1], [848, v + 8], [858 - k * 0.7, v + 22]]);
    }
    both(bones, [[801, 372], [818, 385], [838, 398], [852, 404]]);
    both(bones, [[808, 436], [832, 434], [854, 442], [866, 460], [862, 476]]);
    both(bones, [[826, 480], [816, 494], [803, 498]]);
    trace(bones, [[800, 288], [800, 372]]);
    for (const s of [1, -1]) {
      bones.moveTo(cx + s * 49 + 8, 652);
      bones.ellipse(cx + s * 49, 652, 8, 10, 0, 0, Math.PI * 2);
      bones.moveTo(cx + s * 42 + 9, 488);
      bones.arc(cx + s * 42, 488, 9, 0, Math.PI * 2);
    }

    // brain contour with fissure + a few gyri
    const brain = new Path2D();
    brain.ellipse(800, 186, 31, 27, 0, 0, Math.PI * 2);
    trace(brain, [[800, 160], [800, 211]]);
    both(brain, [[804, 168], [814, 166], [822, 174], [818, 182]], 4);
    both(brain, [[806, 192], [818, 188], [828, 194], [824, 204]], 4);
    both(brain, [[806, 178], [812, 182], [810, 190]], 4);

    // ── nerve graph
    const nodes = [];
    const edges = [];
    const N = (x, y, kind = "j", side = 0) => (nodes.push({ x, y, kind, side, t: Infinity }), nodes.length - 1);
    const E = (a, b, via = [], w = 1, brainEdge = false) => {
      const pts = cr([[nodes[a].x, nodes[a].y], ...via, [nodes[b].x, nodes[b].y]], 4);
      const path = new Path2D();
      trace(path, pts);
      const cum = [0];
      for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      edges.push({ a, b, pts, cum, len: cum[cum.length - 1], path, w, brain: brainEdge, t0: 0, t1: 0 });
    };

    // spine: sacrum segments, lumbar, thoracic, cervical (bottom → top)
    const V = {};
    const VY = {};
    const verts = [];
    const sac = N(800, 494, "s");
    let prev = sac;
    const vert = (name, y, w, h, pw) => {
      VY[name] = y;
      V[name] = N(cx, y, "v");
      E(prev, V[name], [], 2.4);
      prev = V[name];
      if (!w) return;
      const path = new Path2D();
      const x0 = cx - w / 2;
      path.moveTo(x0 + 1.5, y - h / 2);
      path.lineTo(x0 + w - 1.5, y - h / 2);
      path.lineTo(x0 + w, y - h / 2 + 1.5);
      path.lineTo(x0 + w, y + h / 2 - 1.5);
      path.lineTo(x0 + w - 1.5, y + h / 2);
      path.lineTo(x0 + 1.5, y + h / 2);
      path.lineTo(x0, y + h / 2 - 1.5);
      path.lineTo(x0, y - h / 2 + 1.5);
      path.closePath();
      path.rect(cx - pw, y - 1.4, pw - w / 2, 2.8);
      path.rect(cx + w / 2, y - 1.4, pw - w / 2, 2.8);
      verts.push({ path, node: V[name], name });
    };
    vert("S2", 480);
    vert("S1", 466);
    for (let i = 5; i >= 1; i--) vert(`L${i}`, 404 + (i - 1) * 12, 22 + (i - 1), 9, 18 + (i - 1) * 0.6);
    for (let i = 12; i >= 1; i--) vert(`T${i}`, 289 + (i - 1) * 9.545, 13 + (i - 1) * 0.6, 6.4, 13 + (i - 1) * 0.3);
    for (let i = 7; i >= 1; i--) vert(`C${i}`, 240 + (i - 1) * 7, 11, 4.6, 9.5);
    const sacrum = new Path2D();
    trace(sacrum, [[784, 459], [816, 459], [808, 492], [792, 492]]);
    sacrum.closePath();
    for (const y of [468, 478, 486]) {
      for (const s of [1, -1]) { sacrum.moveTo(cx + s * 7 + 1.6, y); sacrum.arc(cx + s * 7, y, 1.6, 0, Math.PI * 2); }
    }

    const bs = N(800, 228, "b");
    E(V.C1, bs, [], 2.1);
    const a10 = N(800, 214, "b");
    E(bs, a10, [], 1.7, true);
    const th = N(800, 200, "b");
    E(a10, th, [], 1.6, true);

    const ids = { a10, th };
    for (const s of [1, -1]) {
      const R = s > 0 ? "R" : "L";
      const X = (x) => cx + s * (x - cx);
      const P = ([x, y]) => [X(x), y];
      const n = (pt, kind = "j") => N(X(pt[0]), pt[1], kind, s);
      const e = (a, b, via = [], w = 1, br = false) => E(a, b, via.map(P), w, br);
      const fan = (from, list, w = 0.8, br = false) => list.forEach(([tip, via]) => e(from, n(tip, "t"), via ? [via] : [], w, br));

      // cerebrum: thalamus → hemisphere → cortical regions; trigeminal from the stem
      const hemi = n([815, 186], "b");
      e(th, hemi, [[808, 196]], 1.3, true);
      fan(hemi, [[[809, 166], [813, 175]], [[825, 170], [822, 178]], [[828, 200], [824, 193]], [[812, 206], [814, 197]]], 1, true);
      fan(bs, [[[828, 222], [813, 225]]], 0.9);

      // cervical plexus + phrenic
      e(V.C2, n([824, 240], "t"), [[812, 246]], 0.9);
      e(V.C3, n([826, 256], "t"), [[814, 255]], 0.9);
      e(V.C4, n([830, 380], "t"), [[810, 270], [818, 322]], 0.8);

      // brachial plexus C5–T1 → axilla → radial / median / ulnar / musculocutaneous
      const bp = n([834, 289]);
      for (const k of ["C5", "C6", "C7", "T1"]) e(V[k], bp, [[816, VY[k] + 3]], 1.2);
      const ax = n([880, 306]);
      e(bp, ax, [[858, 295]], 1.8);
      fan(ax, [[[908, 312], [897, 302]], [arm(1.5, 11), arm(0.7, 10)]], 0.9);
      const re = n(arm(2, 7));
      e(ax, re, [arm(0.6, 6), arm(1.3, 8)], 1.2);
      const rw = n(hand(4, 9));
      e(re, rw, [arm(2.8, 7.5), arm(3.5, 7)], 1);
      fan(rw, [[hand(30, 19.5), hand(15, 14)]], 0.8);
      const me = n(arm(2, -1));
      e(ax, me, [arm(0.8, -1), arm(1.4, -1)], 1.5);
      const mw = n(hand(2, 1));
      e(me, mw, [arm(2.8, -1), arm(3.5, 0)], 1.3);
      const mp = n(hand(24, 3));
      e(mw, mp, [], 1.1);
      fan(mp, [[hand(29, 19), hand(22, 12)], [hand(59, 7.5), hand(42, 7)], [hand(63, 1.5), hand(44, 2)]]);
      const ue = n(arm(2, -8));
      e(ax, ue, [arm(0.9, -9), arm(1.5, -8.5)], 1.2);
      const uw = n(hand(3, -6));
      e(ue, uw, [arm(2.8, -7.5), arm(3.5, -6.5)], 1.1);
      const up = n(hand(24, -7));
      e(uw, up, [], 1);
      fan(up, [[hand(60, -4.8), hand(43, -5)], [hand(51, -10.8), hand(36, -10)]]);

      // intercostal T2–T11, subcostal T12
      let ic = 0;
      for (let i = 0; i < 10; i++) {
        const v = VY[`T${i + 2}`];
        const tip = n([848 - i * 0.5, v + 15 + i * 0.6], "t");
        if (i === 4) ic = tip;
        e(V[`T${i + 2}`], tip, [[812, v + 1], [832, v + 5]], 0.85);
      }
      e(V.T12, n([846, 430], "t"), [[816, 398], [836, 412]], 0.85);

      // lumbar plexus → femoral / saphenous / obturator
      const lp = n([824, 448]);
      for (const k of ["L1", "L2", "L3", "L4"]) e(V[k], lp, [[812, VY[k] + 4]], 1.1);
      fan(lp, [[[858, 470], [842, 454]], [[818, 545], [812, 490]]], 0.85);
      const fem = n([842, 502]);
      e(lp, fem, [[833, 474]], 1.4);
      fan(fem, [[[866, 578], [857, 537]], [[852, 604], [847, 548]]], 0.9);
      const sk = n([838, 662]);
      e(fem, sk, [[834, 545], [832, 605]], 1);
      fan(sk, [[[840, 798], [834, 722]]], 0.9);

      // sacral plexus → sciatic → tibial / peroneal → foot
      const sp = n([822, 484]);
      for (const k of ["L5", "S1", "S2"]) e(V[k], sp, [[812, VY[k] + 5]], 1.3);
      fan(sp, [[[862, 474], [842, 478]]], 0.85);
      const pop = n([848, 628]);
      e(sp, pop, [[832, 508], [840, 552], [845, 596]], 2);
      const ank = n([845, 794]);
      e(pop, ank, [[846, 680], [842, 740]], 1.4);
      const ft = n([843, 816]);
      e(ank, ft, [], 1.1);
      fan(ft, [[[834, 837]], [[845, 839]], [[856, 838]]]);
      const per = n([858, 790]);
      e(pop, per, [[858, 650], [865, 692], [863, 742]], 1.2);
      fan(per, [[[874, 834], [867, 816]]]);

      Object.assign(ids, { [`hemi${R}`]: hemi, [`ax${R}`]: ax, [`me${R}`]: me, [`mw${R}`]: mw, [`lp${R}`]: lp, [`fem${R}`]: fem, [`pop${R}`]: pop, [`ank${R}`]: ank, [`per${R}`]: per, [`ic${R}`]: ic });
    }

    // ── timing: distance from the sacrum → progress; the brain waits for the body
    const LIMB_END = 0.72;
    const HOLD = 0.64;
    const dist = nodes.map(() => Infinity);
    dist[sac] = 0;
    let far = 0;
    for (const ed of edges) {
      if (ed.brain) continue;
      const t = dist[ed.a] + ed.len;
      dist[ed.b] = Math.min(dist[ed.b], t);
      far = Math.max(far, t);
    }
    const k = LIMB_END / far;
    nodes[sac].t = 0;
    let tEnd = 0;
    let total = 0;
    for (const ed of edges) {
      ed.t0 = ed.brain ? Math.max(HOLD, nodes[ed.a].t) : nodes[ed.a].t;
      ed.t1 = ed.t0 + ed.len * k * (ed.brain ? 2.4 : 1);
      nodes[ed.b].t = Math.min(nodes[ed.b].t, ed.t1);
      tEnd = Math.max(tEnd, ed.t1);
      total += ed.len;
    }
    const nerves = new Path2D();
    for (const ed of edges) nerves.addPath(ed.path);

    // node tags
    const tag = (node, label, dx) => ({ node, label, x: nodes[node].x + dx, y: nodes[node].y + 3.5, align: dx < 0 ? "right" : "left" });
    const tags = [
      ...["C3", "C7", "T3", "T7", "T11", "L2", "L4", "S1"].map((v, i) => tag(V[v], v, i % 2 ? 26 : -26)),
      tag(ids.axR, "N-011", 8), tag(ids.axL, "N-012", -8),
      tag(ids.meR, "N-014", 9), tag(ids.meL, "N-015", -9),
      tag(ids.lpR, "N-021", 10), tag(ids.lpL, "N-022", -10),
      tag(ids.popR, "N-041", 10), tag(ids.popL, "N-042", -10),
    ];

    // callouts: anchor node → label block outside the frame
    const frame = { x: 585, y: 132, w: 430, h: 716 };
    const call = (node, ly, title, sub, side = 0) => {
      const { x, y } = nodes[node];
      const s = side || (x >= cx ? 1 : -1);
      const lx = s > 0 ? 1040 : 560;
      const run = Math.min(Math.abs(ly - y), Math.abs(lx - x) - 30);
      const path = new Path2D();
      path.moveTo(x, y);
      path.lineTo(x + s * run, y + Math.sign(ly - y) * run);
      path.lineTo(lx - s * 6, ly);
      return { node, lx, ly, s, title, sub, path, ax: x, ay: y };
    };
    const callouts = [
      call(ids.hemiR, 168, "CEREBRUM", "CORTEX · N-003"),
      call(ids.a10, 226, "A10 NERVE", "LIMBIC · 中枢"),
      call(ids.axR, 300, "BRACHIAL PLEXUS", "C5–T1 · N-011"),
      call(ids.mwR, 448, "MEDIAN N.", "CARPAL · N-017"),
      call(ids.popR, 612, "SCIATIC N.", "L4–S3 · N-041"),
      call(ids.ankR, 762, "TIBIAL N.", "PLANTAR · N-044"),
      call(V.C4, 236, "CERVICAL", "C1–C7 · 脊髄", -1),
      call(ids.icL, 352, "INTERCOSTAL", "T2–T12 · 末梢"),
      call(ids.lpL, 448, "LUMBAR PLEXUS", "L1–L4 · N-022"),
      call(ids.femL, 552, "FEMORAL N.", "L2–L4 · N-032"),
      call(ids.perL, 742, "PERONEAL N.", "FIBULAR · N-045"),
    ];

    // rulers: left in centimetres from the sole, right/top/bottom plain ticks
    const ticks = new Path2D();
    const tickText = [];
    const { x: fx, y: fy, w: fw, h: fh } = frame;
    for (let c = 0; c <= 180; c += 5) {
      const y = 838 - c * 3.88;
      if (y < fy) break;
      const L = c % 25 === 0 ? 12 : 5;
      ticks.moveTo(fx, y); ticks.lineTo(fx + L, y);
      if (c % 25 === 0) tickText.push([String(c), fx + 16, y + 4, "left"]);
    }
    for (let y = fy; y <= fy + fh; y += 10) {
      const L = (y - fy) % 50 === 0 ? 10 : 4;
      ticks.moveTo(fx + fw, y); ticks.lineTo(fx + fw - L, y);
    }
    for (let d = -210; d <= 210; d += 10) {
      const L = d % 50 === 0 ? 10 : 4;
      ticks.moveTo(cx + d, fy); ticks.lineTo(cx + d, fy + L);
      ticks.moveTo(cx + d, fy + fh); ticks.lineTo(cx + d, fy + fh - L * 0.6);
      if (Math.abs(d) === 100) tickText.push([String(Math.abs(d)), cx + d, fy + 24, "center"]);
    }

    // the reticle visits these targets in order
    const reticle = [[0, 800, 480], [0.2, 800, 420], [0.34, 800, 300], [0.48, 978, 520], [0.6, 622, 520], [0.72, 846, 800], [0.86, 800, 190], [1.2, 800, 190]];

    // spinal index order for the strip readout (top → bottom)
    const index = [];
    for (let i = 1; i <= 7; i++) index.push(V[`C${i}`]);
    for (let i = 1; i <= 12; i++) index.push(V[`T${i}`]);
    for (let i = 1; i <= 5; i++) index.push(V[`L${i}`]);
    index.push(V.S1, V.S2);

    return { outline, hatch, bones, brain, sacrum, verts, nodes, edges, nerves, tags, callouts, frame, ticks, tickText, reticle, index, tEnd, total, LIMB_END, cord: V.C1 };
  })();

  const DASH = [0, 0];
  const FLOW = [3, 26];
  const NODASH = [];
  const HEADS = new Float32Array(BODY.edges.length * 2);
  const SCAN = Array.from({ length: 10 }, (_, i) => `#5cf2a0${Math.round(30 - i * 3).toString(16).padStart(2, "0")}`);

  function paintNeural(cut, u) {
    chrome(cut, u, "MONITOR 12 · NERVE CONNECTION");
    const p = u / (cut.end - cut.at - 0.15);
    const B = BODY;
    const F = B.frame;
    const nodes = B.nodes;
    const complete = p >= B.tEnd;
    const wait = `${C.orange}80`;

    // frame + rulers
    g.lineWidth = 1;
    g.strokeStyle = `${C.orange}40`;
    g.strokeRect(F.x + 0.5, F.y + 0.5, F.w, F.h);
    g.strokeStyle = `${C.orange}90`;
    g.stroke(B.ticks);
    for (const [str, x, y, al] of B.tickText) text(str, x, y, { size: 11, color: `${C.orange}99`, align: al, weight: 500 });
    brackets(F.x - 6, F.y - 6, F.w + 12, F.h + 12, 14, C.orange);
    text("ANTERIOR · FRONT VIEW", F.x + 40, F.y + 46, { size: 12, spacing: 2, weight: 500, color: `${C.orange}b0` });
    text("SCALE 1:9.6", F.x + F.w - 18, F.y + 46, { size: 12, spacing: 2, weight: 500, align: "right", color: `${C.orange}b0` });
    text("cm", F.x + 16, F.y + F.h - 8, { size: 11, color: `${C.orange}99`, weight: 500 });

    // body: faint fill, clipped hatch, bones, contour
    g.fillStyle = `${C.orange}0e`;
    g.fill(B.outline);
    g.save();
    g.clip(B.outline);
    g.strokeStyle = `${C.orange}16`;
    g.stroke(B.hatch);
    g.restore();
    g.lineCap = "round";
    g.lineJoin = "round";
    g.strokeStyle = `${C.orange}2a`;
    g.lineWidth = 2;
    g.stroke(B.bones);
    const brainOn = p >= nodes[B.callouts[0].node].t;
    g.strokeStyle = brainOn ? "#5cf2a050" : `${C.orange}30`;
    g.lineWidth = 1;
    g.stroke(B.brain);
    if (complete) {
      g.save();
      g.strokeStyle = "#5cf2a0c0";
      g.shadowColor = C.green;
      g.shadowBlur = 10;
      g.lineWidth = 1.6;
      g.stroke(B.outline);
      g.restore();
    } else {
      g.strokeStyle = `${C.orange}88`;
      g.lineWidth = 1.4;
      g.stroke(B.outline);
    }

    // vertebrae
    const sacOn = p > 0.005;
    g.fillStyle = sacOn ? "#12402a" : C.wellDeep;
    g.fill(B.sacrum);
    g.strokeStyle = sacOn ? C.green : wait;
    g.stroke(B.sacrum);
    for (const v of B.verts) {
      const on = p >= nodes[v.node].t;
      g.fillStyle = on ? "#17503a" : C.wellDeep;
      g.fill(v.path);
      g.strokeStyle = on ? C.green : wait;
      g.stroke(v.path);
    }

    // nerves: dim network, then the lit part of each edge
    g.strokeStyle = `${C.orange}48`;
    g.lineWidth = 1;
    g.stroke(B.nerves);
    let lit = 0;
    let heads = 0;
    for (const e of B.edges) {
      const f = (p - e.t0) / (e.t1 - e.t0);
      if (f <= 0) continue;
      const full = f >= 1;
      if (!full) {
        DASH[0] = e.len * f;
        DASH[1] = e.len + 8;
        g.setLineDash(DASH);
        // pulse head position
        const at = e.len * f;
        let i = 1;
        while (i < e.cum.length - 1 && e.cum[i] < at) i++;
        const q = (at - e.cum[i - 1]) / (e.cum[i] - e.cum[i - 1] || 1);
        HEADS[heads * 2] = e.pts[i - 1][0] + (e.pts[i][0] - e.pts[i - 1][0]) * q;
        HEADS[heads * 2 + 1] = e.pts[i - 1][1] + (e.pts[i][1] - e.pts[i - 1][1]) * q;
        heads++;
      }
      lit += e.len * (full ? 1 : f);
      g.strokeStyle = "#5cf2a02c";
      g.lineWidth = e.w * 2 + 3;
      g.stroke(e.path);
      g.strokeStyle = full && p - e.t1 > 0.06 ? C.green : "#d4ffe6";
      g.lineWidth = e.w;
      g.stroke(e.path);
      if (!full) g.setLineDash(NODASH);
    }
    // continuous traffic on connected nerves
    g.setLineDash(FLOW);
    g.lineDashOffset = -u * 120;
    g.strokeStyle = "#f2fff8c0";
    for (const e of B.edges) {
      if (p < e.t1 || e.w < 1.05) continue;
      g.lineWidth = e.w + 0.4;
      g.stroke(e.path);
    }
    g.setLineDash(NODASH);
    g.lineDashOffset = 0;
    if (heads) {
      g.save();
      g.fillStyle = "#ffffff";
      g.shadowColor = C.green;
      g.shadowBlur = 12;
      g.beginPath();
      for (let i = 0; i < heads; i++) {
        g.moveTo(HEADS[i * 2] + 2.6, HEADS[i * 2 + 1]);
        g.arc(HEADS[i * 2], HEADS[i * 2 + 1], 2.6, 0, Math.PI * 2);
      }
      g.fill();
      g.restore();
    }

    // junction nodes flip orange → green with a flash ring
    for (const n of nodes) {
      if (n.kind === "v") continue;
      const dt = p - n.t;
      const on = dt >= 0;
      if (n.kind === "t") {
        fill(n.x - 1.6, n.y - 1.6, 3.2, 3.2, on ? C.green : wait);
        continue;
      }
      const r = n.kind === "b" ? 3.4 : n.kind === "s" ? 5 : 2.8;
      fill(n.x - r, n.y - r, r * 2, r * 2, on ? C.green : C.bg);
      g.strokeStyle = on ? C.green : C.orange;
      g.lineWidth = 1;
      if (n.kind === "b") {
        g.beginPath();
        g.arc(n.x, n.y, r + 2.5, 0, Math.PI * 2);
        g.stroke();
      } else g.strokeRect(n.x - r - 2, n.y - r - 2, r * 2 + 4, r * 2 + 4);
      if (on && dt < 0.08) {
        const k = dt / 0.08;
        g.globalAlpha = 1 - k;
        g.strokeStyle = "#ffffff";
        const rr = r + 3 + k * 14;
        g.strokeRect(n.x - rr, n.y - rr, rr * 2, rr * 2);
        g.globalAlpha = 1;
      }
    }
    for (const t of B.tags) {
      const on = p >= nodes[t.node].t;
      const w = t.label.length * 6.4 + 6;
      const x0 = t.align === "right" ? t.x - w + 3 : t.align === "center" ? t.x - w / 2 : t.x - 3;
      fill(x0, t.y - 10, w, 13, "#040405d0");
      text(t.label, t.x, t.y, { size: 11, color: on ? C.green : C.orange, align: t.align, spacing: 0.5, weight: 600 });
    }

    // callouts
    for (const c of B.callouts) {
      const on = p >= nodes[c.node].t;
      const col = on ? C.green : C.orange;
      g.strokeStyle = on ? "#5cf2a0b0" : `${C.orange}70`;
      g.lineWidth = 1;
      g.stroke(c.path);
      fill(c.ax - 2, c.ay - 2, 4, 4, col);
      const al = c.s > 0 ? "left" : "right";
      fill(c.s > 0 ? c.lx - 4 : c.lx - 4, c.ly - 4, 8, 8, col);
      text(c.title, c.lx + c.s * 10, c.ly + 5, { size: 16, color: col, align: al, spacing: 1.5 });
      text(`${c.sub} · ${on ? "LINK" : "WAIT"}`, c.lx + c.s * 10, c.ly + 22, { size: 11, color: on ? "#5cf2a0b0" : `${C.orange}a0`, align: al, spacing: 1.2, weight: 500 });
    }

    // scan band + target reticle
    const sy = F.y + ((u * 0.85) % 1) * F.h;
    for (let i = 0; i < SCAN.length; i++) {
      const y = sy - (i + 1) * 4;
      if (y > F.y) fill(F.x + 1, y, F.w - 1, 4, SCAN[i]);
    }
    fill(F.x + 1, sy, F.w - 1, 1.5, "#9dffd0b0");
    text(`SCAN ${String(Math.round(((sy - F.y) / F.h) * 999)).padStart(3, "0")}`, F.x + F.w - 8, sy - 4, { size: 10, color: "#9dffd0", align: "right", weight: 500 });
    const RT = B.reticle;
    let ri = 0;
    while (ri < RT.length - 2 && p > RT[ri + 1][0]) ri++;
    const rk = ease(clamp(((p - RT[ri][0]) / (RT[ri + 1][0] - RT[ri][0])) * 2.2));
    const rx = RT[ri][1] + (RT[ri + 1][1] - RT[ri][1]) * rk;
    const ry = RT[ri][2] + (RT[ri + 1][2] - RT[ri][2]) * rk;
    const lock = rk >= 1;
    g.strokeStyle = lock ? C.green : C.orange;
    g.lineWidth = 1.2;
    g.beginPath();
    g.arc(rx, ry, 22, u * 3, u * 3 + 1.1);
    g.moveTo(rx + 22 * Math.cos(u * 3 + Math.PI), ry + 22 * Math.sin(u * 3 + Math.PI));
    g.arc(rx, ry, 22, u * 3 + Math.PI, u * 3 + Math.PI + 1.1);
    g.moveTo(rx - 34, ry); g.lineTo(rx - 12, ry);
    g.moveTo(rx + 12, ry); g.lineTo(rx + 34, ry);
    g.moveTo(rx, ry - 34); g.lineTo(rx, ry - 12);
    g.moveTo(rx, ry + 12); g.lineTo(rx, ry + 34);
    g.stroke();
    g.strokeRect(rx - 30, ry - 30, 60, 60);
    text(`X${String(Math.round(rx)).padStart(4, "0")} Y${String(Math.round(ry)).padStart(4, "0")}`, rx + 34, ry - 34, { size: 10, color: lock ? C.green : C.orange, weight: 500, spacing: 1 });

    // left: connection list
    text("第二次接続", 80, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("SECONDARY CONTACT · NERVE LINK", 82, 204, { size: 18, spacing: 4 });
    for (let i = 0; i < 14; i++) {
      const y = 254 + i * 42;
      const k = (p - 0.05 - i * 0.06) / 0.08;
      const on = k > 0;
      const col = on ? C.green : wait;
      text(`NERVE ${String(i + 1).padStart(3, "0")}`, 84, y, { size: 19, color: col, spacing: 2 });
      const segs = on ? Math.ceil(12 * clamp(k)) : 0;
      for (let j = 0; j < 12; j++) fill(196 + j * 12, y - 15, 10, 15, j < segs ? C.green : on ? C.greenDim : C.well);
      text(on ? "接続" : "待機", 352, y, { font: MINCHO, size: 19, weight: 900, color: on ? C.green : C.orangeDim });
      text((0.31 + rand(i + 40) * 0.6).toFixed(2), 438, y, { size: 12, color: on ? "#5cf2a0a0" : `${C.orange}60`, align: "right", weight: 500 });
    }

    // right: spinal index strip
    text("SPINAL INDEX · 脊髄", 1250, 146, { size: 14, spacing: 2 });
    text("C1—S2", 1520, 146, { size: 14, spacing: 2, align: "right" });
    B.index.forEach((id, i) => {
      const on = p >= nodes[id].t;
      fill(1250 + i * 10.4, 156, 9, 20, on ? C.green : C.well);
    });
    [["C", 0], ["T", 7], ["L", 19], ["S", 24]].forEach(([s, i]) => {
      fill(1250 + i * 10.4, 180, 1, 8, C.orange);
      text(s, 1254 + i * 10.4, 192, { size: 12, color: C.orange, weight: 500 });
    });
    // PHASE list, red → green
    for (let i = 0; i < 10; i++) {
      const y = 214 + i * 42;
      const on = p > 0.1 + i * 0.075;
      const col = on ? C.green : C.red;
      text(`PHASE ${String(i + 8).padStart(2, "0")}`, 1250, y + 26, { size: 20, color: col, spacing: 2 });
      fill(1370, y + 7, 150, 26, on ? C.green : "#3a0806");
      box(1370, y + 7, 150, 26, col);
      text(on ? "CLEAR" : "HOLD", 1378, y + 26, { size: 14, color: on ? C.bg : C.red, spacing: 2 });
    }
    // link-rate counter
    const rate = (lit / B.total) * 100;
    text("NEURAL LINK RATE", 1250, 660, { size: 14, spacing: 2 });
    text(`${rate.toFixed(1).padStart(5, "0")}%`, 1520, 712, { size: 50, color: rate >= 100 ? C.green : C.orange, align: "right", spacing: 1, glow: rate >= 100 ? 12 : 0 });
    box(1250, 724, 270, 8, C.orangeDim, 1);
    fill(1252, 726, 266 * clamp(rate / 100), 4, rate >= 100 ? C.green : C.orange);
    const central = p >= nodes[B.cord].t;
    const periph = p >= B.LIMB_END;
    text("中枢 CENTRAL", 1250, 762, { size: 15, spacing: 1.5, color: central ? C.green : C.orange });
    text(central ? "正常" : "待機", 1520, 762, { font: MINCHO, size: 18, weight: 900, align: "right", color: central ? C.green : C.orange });
    text("末梢 PERIPHERAL", 1250, 788, { size: 15, spacing: 1.5, color: periph ? C.green : C.orange });
    text(periph ? "正常" : "待機", 1520, 788, { font: MINCHO, size: 18, weight: 900, align: "right", color: periph ? C.green : C.orange });
    text(`LINKED ${Math.min(14, Math.max(0, Math.floor((p - 0.05) / 0.06) + 1))} / 14`, 1520, 826, { size: 22, spacing: 3, align: "right", color: C.green });
  }

  const REGIONS = ["AMYGDALA", "HIPPOCAMPUS", "PARIETAL LOBE", "MOTOR CORTEX", "SENSORY CORTEX"];

  function paintBrain(cut, u) {
    chrome(cut, u, "MONITOR 03 · A10 NERVE / VITAL");
    text("A10 神経接続", 80, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("A10 NERVE CONNECTION", 82, 204, { size: 18, spacing: 4 });
    const lane = 104;
    REGIONS.forEach((name, i) => {
      const y = 250 + i * lane;
      box(80, y, 1060, lane - 16, C.orangeDim);
      text(name, 96, y + 28, { size: 18, spacing: 3 });
      const reveal = ease((u - i * 0.08) / 0.5);
      g.save();
      g.beginPath();
      g.rect(80, y, 1060 * reveal, lane - 16);
      g.clip();
      g.strokeStyle = C.green;
      g.lineWidth = 2;
      g.shadowColor = C.green;
      g.shadowBlur = 8;
      g.beginPath();
      const mid = y + (lane - 16) / 2 + 10;
      for (let x = 0; x <= 1040; x += 4) {
        const ph = (x / 1040) * 6 + u * 4 + i * 1.3;
        const beat = ph % 1;
        let v = Math.sin(ph * 9 + i) * 3;
        if (beat > 0.42 && beat < 0.5) v -= (beat - 0.42) * 380;
        else if (beat >= 0.5 && beat < 0.56) v += (0.56 - beat) * 300 - 4;
        const px = 90 + x;
        if (x === 0) g.moveTo(px, mid + v);
        else g.lineTo(px, mid + v);
      }
      g.stroke();
      g.restore();
      const ok = u > 0.35 + i * 0.12;
      text(ok ? "NORMAL" : "SCAN", 1124, y + 28, { size: 18, spacing: 3, align: "right", color: ok ? C.green : C.orange });
    });
    // right column: verdict
    box(1180, 250, 340, 260, C.green);
    text("異常なし", 1350, 410, { font: MINCHO, size: 84, weight: 900, color: C.green, align: "center", sx: 0.82, glow: u > 0.9 ? 18 : 0 });
    text("NOMINAL", 1350, 470, { size: 24, spacing: 8, align: "center", color: C.green });
    // mental contamination bar (low)
    text("MENTAL CONTAMINATION", 1180, 560, { size: 18, spacing: 3 });
    for (let i = 0; i < 20; i++) {
      const col = i < 12 ? C.green : i < 16 ? C.orange : C.red;
      fill(1180 + i * 17, 576, 13, 34, i < 3 ? col : col + "33");
    }
    text("CAUTION", 1180 + 12 * 17, 636, { size: 14, spacing: 2, color: C.orange });
    text("DANGER", 1180 + 16 * 17, 656, { size: 14, spacing: 2, color: C.red });
    text("L.C.L. PURITY  99.9999989%", 1180, 712, { size: 20, spacing: 2, color: C.green });
  }

  function hexagon(cx, cy, r) {
    g.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.closePath();
  }

  function paintMagi(cut, u) {
    chrome(cut, u, "MONITOR 01 · TRI-COMPUTER CONSENSUS");
    text("双方向回線 開放", 80, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("BIDIRECTIONAL CIRCUIT · OPEN", 82, 204, { size: 18, spacing: 4 });
    const nodes = [
      ["CASPER · 3", 560, 560],
      ["BALTHASAR · 2", 800, 400],
      ["MELCHIOR · 1", 1040, 560],
    ];
    nodes.forEach(([name, x, y], i) => {
      const on = u > 0.12 + i * 0.14;
      hexagon(x, y, 140);
      g.fillStyle = on ? "#0f3a26" : C.wellMagi;
      g.fill();
      g.strokeStyle = on ? C.green : C.orange;
      g.lineWidth = 3;
      g.stroke();
      text(name, x, y - 24, { size: 26, spacing: 3, align: "center", color: on ? C.green : C.orange });
      text(on ? "承認" : "審議中", x, y + 46, { font: MINCHO, size: 52, weight: 900, align: "center", color: on ? C.green : C.orange, sx: 0.86 });
    });
    g.strokeStyle = C.orangeDim;
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(560, 560); g.lineTo(800, 400); g.lineTo(1040, 560); g.closePath();
    g.stroke();
    if (u > 0.55) text("全会一致 · UNANIMOUS", 800, 820, { size: 30, spacing: 6, align: "center", color: C.green, glow: 12 });
  }

  const PAINT = { title: paintTitle, power: paintPower, lines: paintLines, neural: paintNeural, brain: paintBrain, magi: paintMagi };
  const SCOPE_PAINT = { xray: paintXray, helix: paintHelix };

  function frameTransform() {
    const s = Math.min((W * dpr) / VW, (H * dpr) / VH);
    return [s, (W * dpr - VW * s) / 2, (H * dpr - VH * s) / 2];
  }

  /**
   * Paint whatever covers `t`. Returns "cut" for an opaque monitor cut,
   * "scope" for a transparent overlay over the 3D scope shots, or null.
   */
  function update(t, extra = {}) {
    const cut = extra.hidden ? null : cutAt(t);
    const scope = cut || extra.hidden ? null : scopeAt(t);
    if (!cut && !scope) {
      if (shown) {
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, canvas.width, canvas.height);
        shown = null;
      }
      return null;
    }
    if (scope) {
      shown = scope;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, canvas.width, canvas.height);
      const [s, ox, oy] = frameTransform();
      g.setTransform(s, 0, 0, s, ox, oy);
      SCOPE_PAINT[scope.kind](scope, t - scope.at, extra);
      return "scope";
    }
    shown = cut;
    const u = t - cut.at;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = cut.kind === "title" ? "#000" : C.bg;
    g.fillRect(0, 0, canvas.width, canvas.height);
    const [s, ox, oy] = frameTransform();
    // hard-cut jolt: the first frames slip sideways like a switched feed
    const jolt = u < 0.07 ? (rand(cut.at) - 0.5) * 40 * s : 0;
    g.setTransform(s, 0, 0, s, ox + jolt, oy);
    PAINT[cut.kind](cut, u);
    // CRT scanlines + vignette in device space
    g.setTransform(1, 0, 0, 1, 0, 0);
    if (cut.kind !== "title") {
      g.fillStyle = "#00000038";
      const step = Math.max(2, Math.round(3 * dpr));
      for (let y = 0; y < canvas.height; y += step) g.fillRect(0, y, canvas.width, 1);
    }
    const vg = g.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.height * 0.3, canvas.width / 2, canvas.height / 2, canvas.height * 0.85);
    vg.addColorStop(0, "#00000000");
    vg.addColorStop(1, "#000000a0");
    g.fillStyle = vg;
    g.fillRect(0, 0, canvas.width, canvas.height);
    if (u < 0.05) {
      g.fillStyle = "#ffffff22";
      g.fillRect(0, 0, canvas.width, canvas.height);
    }
    return "cut";
  }

  return {
    resize,
    update,
    dispose() {
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
}
