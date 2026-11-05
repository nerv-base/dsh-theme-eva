// 2D command-room monitor cuts drawn on a canvas: intertitle cards, the power
// panel, the neural-connection schematic, brain-region vital traces and the
// tri-computer vote. All graphics are original; only the vocabulary (CRT
// phosphor on black, PHASE lists, Mincho captions) follows the anime look.

const VW = 1600;
const VH = 1000;

const C = {
  bg: "#040405",
  green: "#5cf2a0",
  greenDim: "#1d5a3c",
  orange: "#ff7a1a",
  orangeDim: "#5a2a0c",
  red: "#e8261c",
  white: "#f4efe6",
  grid: "#ff7a1a18",
};

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
  { at: 13.45, end: 15.0, kind: "power" },
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

export function createMonitor(canvas, unit) {
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

  // Abstract body schematic: a spine chain plus limb nerves. Each path is a
  // polyline; light runs along them in order.
  const BODY = (() => {
    const cx = 800;
    const spine = [];
    for (let i = 0; i <= 22; i++) spine.push([cx, 760 - i * 22]);
    const top = spine[spine.length - 1];
    const sh = [cx, 330];
    const hip = [cx, 700];
    return {
      spine,
      head: { c: [cx, 214], r: 58 },
      paths: [
        { pts: spine, delay: 0 },
        { pts: [sh, [cx - 120, 350], [cx - 190, 480], [cx - 236, 610], [cx - 250, 660]], delay: 0.42 },
        { pts: [sh, [cx + 120, 350], [cx + 190, 480], [cx + 236, 610], [cx + 250, 660]], delay: 0.46 },
        { pts: [hip, [cx - 70, 740], [cx - 96, 860], [cx - 108, 950]], delay: 0.5 },
        { pts: [hip, [cx + 70, 740], [cx + 96, 860], [cx + 108, 950]], delay: 0.54 },
        { pts: [top, [cx, 272]], delay: 0.6 },
        // rib arcs
        ...[0, 1, 2, 3].map((k) => ({ pts: [[cx, 380 + k * 52], [cx - 70 - k * 4, 392 + k * 52], [cx - 104, 420 + k * 52]], delay: 0.2 + k * 0.05 })),
        ...[0, 1, 2, 3].map((k) => ({ pts: [[cx, 380 + k * 52], [cx + 70 + k * 4, 392 + k * 52], [cx + 104, 420 + k * 52]], delay: 0.22 + k * 0.05 })),
      ],
    };
  })();

  function polyline(pts, frac, color, width, glow = 0) {
    if (frac <= 0) return;
    let total = 0;
    const seg = [];
    for (let i = 1; i < pts.length; i++) {
      const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      seg.push(d);
      total += d;
    }
    let left = total * clamp(frac);
    g.save();
    g.strokeStyle = color;
    g.lineWidth = width;
    g.lineCap = "round";
    if (glow) {
      g.shadowColor = color;
      g.shadowBlur = glow;
    }
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length && left > 0; i++) {
      const k = Math.min(1, left / seg[i - 1]);
      g.lineTo(pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k);
      left -= seg[i - 1];
    }
    g.stroke();
    g.restore();
  }

  function paintNeural(cut, u) {
    chrome(cut, u, "MONITOR 12 · NERVE CONNECTION");
    const p = u / (cut.end - cut.at - 0.15);
    // silhouette (dim) + lit nerves
    g.strokeStyle = C.orangeDim;
    g.lineWidth = 2;
    g.beginPath();
    g.arc(BODY.head.c[0], BODY.head.c[1], BODY.head.r, 0, Math.PI * 2);
    g.stroke();
    for (const path of BODY.paths) polyline(path.pts, 1, C.orangeDim, 3);
    for (const path of BODY.paths) polyline(path.pts, (p - path.delay) / 0.4, C.green, 3.5, 14);
    // vertebra nodes
    BODY.spine.forEach(([x, y], i) => {
      const on = p > (i / BODY.spine.length) * 0.4;
      fill(x - 7, y - 3, 14, 6, on ? C.green : C.orangeDim);
    });
    // head ring once nerves arrive
    if (p > 0.85) {
      g.save();
      g.strokeStyle = C.green;
      g.shadowColor = C.green;
      g.shadowBlur = 16;
      g.lineWidth = 3;
      g.beginPath();
      g.arc(BODY.head.c[0], BODY.head.c[1], BODY.head.r, 0, Math.PI * 2 * ease((p - 0.85) / 0.2));
      g.stroke();
      g.restore();
    }
    // left: connection list
    text("第二次接続", 80, 170, { font: MINCHO, size: 54, weight: 900, color: C.orange, sx: 0.86 });
    text("SECONDARY CONTACT · NERVE LINK", 82, 204, { size: 18, spacing: 4 });
    for (let i = 0; i < 14; i++) {
      const y = 250 + i * 46;
      const on = p > 0.05 + i * 0.06;
      text(`NERVE ${String(i + 1).padStart(3, "0")}`, 84, y, { size: 20, color: on ? C.green : C.orangeDim, spacing: 2 });
      fill(214, y - 16, 170, 16, on ? C.greenDim : "#1a0d05");
      if (on) fill(214, y - 16, 170 * clamp((p - 0.05 - i * 0.06) / 0.08), 16, C.green);
      text(on ? "接続" : "待機", 400, y, { font: MINCHO, size: 20, weight: 900, color: on ? C.green : C.orangeDim });
    }
    // right: PHASE list, red → green
    for (let i = 0; i < 10; i++) {
      const y = 170 + i * 56;
      const on = p > 0.1 + i * 0.075;
      const col = on ? C.green : C.red;
      text(`PHASE ${String(i + 8).padStart(2, "0")}`, 1130, y + 30, { size: 22, color: col, spacing: 2 });
      fill(1270, y + 8, 250, 30, on ? C.green : "#3a0806");
      box(1270, y + 8, 250, 30, col);
    }
    text(`LINKED ${Math.min(14, Math.max(0, Math.floor((p - 0.05) / 0.06) + 1))} / 14`, 1520, 780, { size: 22, spacing: 3, align: "right", color: C.green });
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
      g.fillStyle = on ? "#0f3a26" : "#1a0b05";
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

  const PAINT = { title: paintTitle, power: paintPower, neural: paintNeural, brain: paintBrain, magi: paintMagi };

  /** Paint the cut that covers `t`. Returns true when a monitor cut is on screen. */
  function update(t) {
    const cut = cutAt(t);
    if (!cut) {
      if (shown) {
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, canvas.width, canvas.height);
        shown = null;
      }
      return false;
    }
    shown = cut;
    const u = t - cut.at;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = cut.kind === "title" ? "#000" : C.bg;
    g.fillRect(0, 0, canvas.width, canvas.height);
    const s = Math.min((W * dpr) / VW, (H * dpr) / VH);
    const ox = (W * dpr - VW * s) / 2;
    const oy = (H * dpr - VH * s) / 2;
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
    return true;
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
