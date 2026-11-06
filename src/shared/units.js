// Per-unit configuration — the theme-switching seam.
//
// Every unit-specific value (palette, DSH token overrides, numbering, pilot
// callsign, cinematic copy, voice clips, backdrop art) lives in one entry here,
// so another unit is one more entry, not a code change elsewhere. The active
// unit is the durable `unit` preference (Settings → General → EVA); the client
// switches themes live when it changes.
//
// Colour roles shared by every unit (skin, cinematic and backdrop all read them):
//   accent / accentHot / accentDeep  identity armour: primary actions, rails, selection
//   marking / markingHot / markingDim  HUD markings: active state, links, sync, running power
//   armor / armorShade               the cel-shaded armour plates in the 3D cinematic
//   green* / warn / red*             semantic success / warning / error (+ PHASE bars)
//   lcl                              LCL fluid (orange for every unit)
//   tint                             light hue for hairline borders and hover washes

// Template colours: generated SVG art (scripts/gen-backdrop.py) is drawn in
// these exact Unit-02 hex values and recoloured per unit at runtime.
export const TEMPLATE_COLORS = Object.freeze({
  accent: "#d8262e",
  marking: "#f06a22",
  green: "#3fe08a",
  markText: "#fff3e6",
});

// The entry sequence is the same for every unit, so its announcer clips are
// shared (assets/voice/shared-<line id>.mp3); only lines naming the unit or
// its pilot are recorded per unit (assets/voice/<unit id>-<line id>.mp3).
const SCRIPT = Object.freeze([
  { id: "insert", t: 0.6, ja: "エントリープラグ、挿入", en: "ENTRY PLUG INSERTION", voice: "エントリープラグ、挿入。", shared: true },
  { id: "lock", t: 4.4, ja: "プラグ固定、第一次接続開始", en: "PLUG LOCKED — PRIMARY CONTACT", voice: "プラグ固定、第一次接続、開始。", shared: true },
  { id: "lcl", t: 8.4, ja: "LCL 注水", en: "LCL INJECTION", voice: "エルシーエル、注水。", shared: true },
  { id: "electric", t: 11.6, ja: "LCL 電化", en: "ELECTRIFYING LCL", voice: "エルシーエル、電化。", shared: true },
  { id: "power", t: 13.1, ja: "主電源接続、全回路動力伝達", en: "MAIN POWER CONNECTED — ALL CIRCUITS LIVE", voice: "主電源、接続。", shared: true },
  { id: "contact2", t: 15.6, ja: "第二次接続開始", en: "SECONDARY CONTACT", voice: "第二次接続、開始。", shared: true },
  { id: "a10", t: 17.4, ja: "A10 神経接続、異常なし", en: "A10 NERVE CONNECTION — NOMINAL", voice: "エーテン神経接続、異常なし。", shared: true },
  { id: "bidir", t: 19.3, ja: "双方向回線、開きます", en: "OPENING BIDIRECTIONAL CIRCUIT", voice: "双方向回線、開きます。", shared: true },
  { id: "sync", t: 20.6, ja: "シンクロ開始", en: "SYNCHRONIZATION START", voice: "シンクロ、開始。", shared: true },
]);
const FINAL = Object.freeze({ id: "final", ja: "シンクロ率 100%、ハーモニクス正常", en: "SYNC RATIO 100% — HARMONICS NORMAL", voice: "シンクロ率、百パーセント。", shared: true });
const GATE = Object.freeze({ ja: "接続待機", en: "ENTRY PLUG — STANDBY" });

/* ───────────────────────── Unit-02 ───────────────────────── */

const UNIT_02 = {
  id: "02",
  themeId: "eva-02",
  label: { zh: "弐号机", en: "Unit-02" },
  kanji: "弐号機",
  kanjiNumber: "弐",
  nameEn: "EVANGELION UNIT-02",
  designation: "PRODUCTION MODEL",
  pilotRole: "SECOND CHILDREN",
  // Crimson armour (identity, primary actions) + orange HUD markings (active
  // state, links, sync, running power). Green is kept for semantic success and
  // the PHASE bars in the backdrop only.
  palette: {
    bg: "#0b090a",
    panel: "#131012",
    raised: "#1b1618",
    raised2: "#241d1f",
    border: "#3a2a2c",
    borderStrong: "#55383b",
    text: "#ece4da",
    textDim: "#cbbfb4",
    muted: "#a59a93",
    faint: "#6f6462",
    hudText: "#e8e2d7",
    accent: "#d8262e",
    accentHot: "#f0413c",
    accentDeep: "#4e1218",
    armor: "#b62026",
    armorShade: "#5a1020",
    marking: "#f06a22",
    markingHot: "#ff8a3d",
    markingDim: "#5a2a0c",
    onMarking: "#140a06",
    markText: "#fff3e6",
    tint: "#ff6a6a",
    red: "#b62026",
    redHot: "#e0373a",
    green: "#3fe08a",
    greenHot: "#86f7bb",
    greenDim: "#23a463",
    greenDeep: "#0d2e1f",
    warn: "#f0b53a",
    ok: "#3fe08a",
    lcl: "#ff7a1a",
    sidebar: "#0f0a0c",
  },
  // Literal surfaces of the everyday skin that do not follow from the palette.
  surfaces: {
    layer1: "#151113",
    layer3: "#251c1e",
    overlay: "#3b2e30",
    platform: "#221a1c",
    labelSecondary: "#c2b6ad",
    labelOnAccent: "#fff4ee",
    strong: "#fff2ea",
    inlineCode: "#ffa063",
    warnSoft: "#f5c96a",
    warnDeep: "#2e2310",
    deepDiving: "#e8823f",
    deepDivingShimmer: "#ffd3ad",
    codeBlock: "#0e0b0c",
    codeBanner: "#171214",
    toast: "#2a1c1f",
    menuSurface: "#2a1c1fcc",
    groupHeader: "#241a1cf0",
    selector: "#2b2123",
    bubbleHighlight: "#4a1a20",
    navHover: "#24141a",
    inputMajor: "#141012",
    menu: "#1a1315f5",
    bubble: "#2a1216",
    maskDrop: "#2a1015b3",
    sidebarGlow: "#6a141c",
    sidebarGlow2: "#331015",
    sidebarEdge: "#3a1418",
    plate: "#3a1219",
  },
  // DSH static ramps the shipped aliases and plugins reference directly:
  // DeepSeek blue → marking orange, generic blue → armour red, neutrals →
  // crimson-tinted; semantic green/amber/red move onto the EVA phosphor values.
  ramps: {
    "--dsw-static-neutral-bluish-00": "#fff7f2",
    "--dsw-static-neutral-bluish-50": "#ece4da",
    "--dsw-static-neutral-bluish-60": "#e5dcd2",
    "--dsw-static-neutral-bluish-75": "#ddd3c9",
    "--dsw-static-neutral-bluish-100": "#d4c9bf",
    "--dsw-static-neutral-bluish-150": "#c9bdb3",
    "--dsw-static-neutral-bluish-200": "#bdb1a8",
    "--dsw-static-neutral-bluish-300": "#bcaea6",
    "--dsw-static-neutral-bluish-400": "#a59a93",
    "--dsw-static-neutral-bluish-500": "#8b7f7a",
    "--dsw-static-neutral-bluish-600": "#6f6462",
    "--dsw-static-neutral-bluish-700": "#4b3c3d",
    "--dsw-static-neutral-bluish-750": "#3b2e30",
    "--dsw-static-neutral-bluish-800": "#2b2123",
    "--dsw-static-neutral-bluish-850": "#1e1719",
    "--dsw-static-neutral-bluish-875": "#171214",
    "--dsw-static-neutral-bluish-900": "#131012",
    "--dsw-static-neutral-bluish-950": "#0b090a",
    "--dsw-static-neutral-bluish-1000": "#060405",
    "--dsw-static-deepseek-50": "#2a170e",
    "--dsw-static-deepseek-100": "#3a1f12",
    "--dsw-static-deepseek-200": "#5a2e17",
    "--dsw-static-deepseek-300": "#ffc7a3",
    "--dsw-static-deepseek-400": "#ff8a3d",
    "--dsw-static-deepseek-450": "#f6762d",
    "--dsw-static-deepseek-500": "#f06a22",
    "--dsw-static-deepseek-600": "#c9541a",
    "--dsw-static-deepseek-700-delete": "#9a3f14",
    "--dsw-static-deepseek-800": "#4a2412",
    "--dsw-static-deepseek-900": "#2a170e",
    "--dsw-static-blue-50": "#2a0c0f",
    "--dsw-static-blue-50p": "#2a0c0f",
    "--dsw-static-blue-75": "#33101a",
    "--dsw-static-blue-100": "#3d1418",
    "--dsw-static-blue-300": "#ffa58f",
    "--dsw-static-blue-400": "#ff6a52",
    "--dsw-static-blue-450": "#f0413c",
    "--dsw-static-blue-500": "#d8262e",
    "--dsw-static-blue-600": "#b62026",
    "--dsw-static-blue-800": "#7d1a18",
    "--dsw-static-blue-900": "#4e1218",
    "--dsw-static-blue-950": "#2a0c0f",
    "--dsw-static-neutral-50": "#ece4da",
    "--dsw-static-neutral-100": "#d4c9bf",
    "--dsw-static-neutral-150": "#c9bdb3",
    "--dsw-static-neutral-200": "#bdb1a8",
    "--dsw-static-neutral-250": "#b0a49c",
    "--dsw-static-neutral-300": "#a59a93",
    "--dsw-static-neutral-400": "#8b7f7a",
    "--dsw-static-neutral-500": "#776b67",
    "--dsw-static-neutral-550": "#655957",
    "--dsw-static-neutral-600": "#54484a",
    "--dsw-static-neutral-700": "#3b2e30",
    "--dsw-static-neutral-800": "#2b2123",
    "--dsw-static-neutral-850": "#1e1719",
    "--dsw-static-neutral-900": "#0e0b0c",
  },
  // Syntax colours: orange constants, red keywords, soft phosphor strings.
  code: {
    "--shiki-token-constant": "#ff9a52",
    "--shiki-token-string": "#7fdca4",
    "--shiki-token-comment": "#7d706b",
    "--shiki-token-keyword": "#ff5a52",
    "--shiki-token-parameter": "#f5c96a",
    "--shiki-token-function": "#ffc08f",
    "--shiki-token-string-expression": "#a8ecc4",
    "--shiki-token-punctuation": "#bdb1a8",
    "--shiki-token-link": "#ff8a3d",
  },
  script: SCRIPT,
  confirm: { id: "confirm", ja: "セカンドチルドレン、搭乗確認", en: "SECOND CHILDREN — CONFIRM BOARDING", voice: "セカンドチルドレン、搭乗を確認してください。" },
  final: FINAL,
  title: { id: "title", ja: "弐号機 起動", en: "EVANGELION UNIT-02 · ACTIVATED", voice: "エヴァンゲリオン二号機、起動。" },
  gate: GATE,
  // New-session hero headline (replaces the stock "探索未至之境 / Into the Unknown").
  hero: { ja: "弐号機、発進", en: "EVANGELION UNIT-02 · LAUNCH" },
  syncStop: 99.2,
  voiceName: "ja-JP-NanamiNeural",
};

/* ───────────────────────── Unit-01 ───────────────────────── */

const UNIT_01 = {
  id: "01",
  themeId: "eva-01",
  label: { zh: "初号机", en: "Unit-01" },
  kanji: "初号機",
  kanjiNumber: "初",
  nameEn: "EVANGELION UNIT-01",
  designation: "TEST TYPE",
  pilotRole: "THIRD CHILDREN",
  // Violet armour (identity, primary actions) + lime-green HUD markings (active
  // state, links, sync, running power). Every ramp below is the Unit-02 ramp
  // re-hued in OKLCH (same lightness), so contrast stays identical.
  palette: {
    bg: "#0a090c",
    panel: "#111014",
    raised: "#18171c",
    raised2: "#201d26",
    border: "#312c3c",
    borderStrong: "#453b58",
    text: "#e7e3f1",
    textDim: "#c4bed0",
    muted: "#9e9aa8",
    faint: "#686570",
    hudText: "#e4e0ef",
    accent: "#8d4dde",
    accentHot: "#a162f5",
    accentDeep: "#321d50",
    armor: "#6b3fa0",
    armorShade: "#2e1a4f",
    marking: "#a0da3b",
    markingHot: "#b9f068",
    markingDim: "#2b3b12",
    onMarking: "#0a0e05",
    markText: "#f7f3ff",
    tint: "#b384fc",
    red: "#b62026",
    redHot: "#e0373a",
    green: "#3fe08a",
    greenHot: "#86f7bb",
    greenDim: "#23a463",
    greenDeep: "#0d2e1f",
    warn: "#f0b53a",
    ok: "#3fe08a",
    lcl: "#ff7a1a",
    sidebar: "#0c0b10",
  },
  surfaces: {
    layer1: "#131116",
    layer3: "#201d26",
    overlay: "#342f3d",
    platform: "#1e1b23",
    labelSecondary: "#bab5c6",
    labelOnAccent: "#f8f4ff",
    strong: "#f6f2ff",
    inlineCode: "#ccfa8f",
    warnSoft: "#f5c96a",
    warnDeep: "#2e2310",
    deepDiving: "#afe06a",
    deepDivingShimmer: "#e7ffcc",
    codeBlock: "#0c0b0f",
    codeBanner: "#141318",
    toast: "#221d2c",
    menuSurface: "#221d2ccc",
    groupHeader: "#1e1b25f0",
    selector: "#25222c",
    bubbleHighlight: "#32224b",
    navHover: "#1c1627",
    inputMajor: "#121015",
    menu: "#16141bf5",
    bubble: "#1d162a",
    maskDrop: "#1d142ab3",
    sidebarGlow: "#44266d",
    sidebarGlow2: "#221634",
    sidebarEdge: "#271a3a",
    plate: "#26193b",
  },
  ramps: {
    "--dsw-static-neutral-bluish-00": "#faf7ff",
    "--dsw-static-neutral-bluish-50": "#e7e3f1",
    "--dsw-static-neutral-bluish-60": "#dfdbea",
    "--dsw-static-neutral-bluish-75": "#d7d2e2",
    "--dsw-static-neutral-bluish-100": "#cdc8d8",
    "--dsw-static-neutral-bluish-150": "#c2bccd",
    "--dsw-static-neutral-bluish-200": "#b6b0c1",
    "--dsw-static-neutral-bluish-300": "#b3aebf",
    "--dsw-static-neutral-bluish-400": "#9e9aa8",
    "--dsw-static-neutral-bluish-500": "#847f8d",
    "--dsw-static-neutral-bluish-600": "#686570",
    "--dsw-static-neutral-bluish-700": "#423d4d",
    "--dsw-static-neutral-bluish-750": "#342f3d",
    "--dsw-static-neutral-bluish-800": "#25222c",
    "--dsw-static-neutral-bluish-850": "#1a181f",
    "--dsw-static-neutral-bluish-875": "#141318",
    "--dsw-static-neutral-bluish-900": "#111014",
    "--dsw-static-neutral-bluish-950": "#0a090c",
    "--dsw-static-neutral-bluish-1000": "#050407",
    "--dsw-static-deepseek-50": "#17200c",
    "--dsw-static-deepseek-100": "#222d11",
    "--dsw-static-deepseek-200": "#394d1c",
    "--dsw-static-deepseek-300": "#e7ffcb",
    "--dsw-static-deepseek-400": "#b9f068",
    "--dsw-static-deepseek-450": "#a9e24d",
    "--dsw-static-deepseek-500": "#a0da3b",
    "--dsw-static-deepseek-600": "#82b427",
    "--dsw-static-deepseek-700-delete": "#5e8516",
    "--dsw-static-deepseek-800": "#2b3b12",
    "--dsw-static-deepseek-900": "#17200c",
    "--dsw-static-blue-50": "#1b112a",
    "--dsw-static-blue-50p": "#1b112a",
    "--dsw-static-blue-75": "#221634",
    "--dsw-static-blue-100": "#291b3e",
    "--dsw-static-blue-300": "#cbaffd",
    "--dsw-static-blue-400": "#b282fd",
    "--dsw-static-blue-450": "#a162f5",
    "--dsw-static-blue-500": "#8d4dde",
    "--dsw-static-blue-600": "#7741bb",
    "--dsw-static-blue-800": "#512d80",
    "--dsw-static-blue-900": "#321d50",
    "--dsw-static-blue-950": "#1b112a",
    "--dsw-static-neutral-50": "#e7e3f1",
    "--dsw-static-neutral-100": "#cdc8d8",
    "--dsw-static-neutral-150": "#c2bccd",
    "--dsw-static-neutral-200": "#b6b0c1",
    "--dsw-static-neutral-250": "#a8a4b3",
    "--dsw-static-neutral-300": "#9e9aa8",
    "--dsw-static-neutral-400": "#847f8d",
    "--dsw-static-neutral-500": "#706c78",
    "--dsw-static-neutral-550": "#5e5a66",
    "--dsw-static-neutral-600": "#4d4955",
    "--dsw-static-neutral-700": "#342f3d",
    "--dsw-static-neutral-800": "#25222c",
    "--dsw-static-neutral-850": "#1a181f",
    "--dsw-static-neutral-900": "#0c0b0f",
  },
  // Syntax colours: lime constants, violet keywords, soft phosphor strings.
  code: {
    "--shiki-token-constant": "#c6f881",
    "--shiki-token-string": "#7fdca4",
    "--shiki-token-comment": "#75707f",
    "--shiki-token-keyword": "#ae79fe",
    "--shiki-token-parameter": "#f5c96a",
    "--shiki-token-function": "#d4bcff",
    "--shiki-token-string-expression": "#a8ecc4",
    "--shiki-token-punctuation": "#b6b0c1",
    "--shiki-token-link": "#b9f068",
  },
  script: SCRIPT,
  confirm: { id: "confirm", ja: "サードチルドレン、搭乗確認", en: "THIRD CHILDREN — CONFIRM BOARDING", voice: "サードチルドレン、搭乗を確認してください。" },
  final: FINAL,
  title: { id: "title", ja: "初号機 起動", en: "EVANGELION UNIT-01 · ACTIVATED", voice: "エヴァンゲリオン初号機、起動。" },
  gate: GATE,
  hero: { ja: "初号機、発進", en: "EVANGELION UNIT-01 · LAUNCH" },
  syncStop: 99.6,
  voiceName: "ja-JP-NanamiNeural",
};

/** Every shipped unit, keyed by its id, in display order. */
export const UNITS = Object.freeze({ "01": UNIT_01, "02": UNIT_02 });
export const UNIT_IDS = Object.freeze(Object.keys(UNITS));
export const DEFAULT_UNIT_ID = "02";
export const DEFAULT_UNIT = UNITS[DEFAULT_UNIT_ID];

/** Resolve a (possibly unknown) unit id to a shipped unit, falling back to the default. */
export function getUnit(id) {
  return Object.prototype.hasOwnProperty.call(UNITS, id) ? UNITS[id] : DEFAULT_UNIT;
}

// Every line the announcer speaks, in a stable order.
export function voiceLines(unit) {
  return [...unit.script, unit.confirm, unit.final, unit.title].filter((l) => typeof l.voice === "string");
}

export function voiceFile(unit, line) {
  return `${line.shared ? "shared" : unit.id}-${line.id}.mp3`;
}

/** Recolour generated template art (drawn in TEMPLATE_COLORS) into a unit's palette. */
export function recolor(svg, unit) {
  const p = unit.palette;
  const map = {
    [TEMPLATE_COLORS.accent]: p.accent,
    [TEMPLATE_COLORS.marking]: p.marking,
    [TEMPLATE_COLORS.green]: p.green,
    [TEMPLATE_COLORS.markText]: p.markText,
  };
  return svg.replace(/#(?:d8262e|f06a22|3fe08a|fff3e6)\b/gi, (hex) => map[hex.toLowerCase()] ?? hex);
}
