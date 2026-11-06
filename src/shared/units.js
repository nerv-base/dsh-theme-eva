// Per-unit configuration. Only Unit-02 ships today; every unit-specific value
// (palette, numbering, pilot callsign, cinematic copy) lives here so a new unit
// is one more entry, not a code change.

export const UNITS = {
  "02": {
    id: "02",
    themeId: "eva-02",
    kanji: "弐号機",
    kanjiNumber: "弐",
    nameEn: "EVANGELION UNIT-02",
    designation: "PRODUCTION MODEL",
    pilotRole: "SECOND CHILDREN",
    // Unit-02: crimson armour (identity, primary actions) + orange HUD
    // markings (active state, links, sync, running power). Green is kept for
    // semantic success and the PHASE bars in the backdrop only.
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
      accent: "#d8262e",
      accentHot: "#f0413c",
      red: "#b62026",
      redHot: "#e0373a",
      redDeep: "#4e1218",
      green: "#3fe08a",
      greenHot: "#86f7bb",
      greenDim: "#23a463",
      greenDeep: "#0d2e1f",
      orange: "#f06a22",
      warn: "#f0b53a",
      ok: "#3fe08a",
      lcl: "#ff7a1a",
      sidebar: "#0f0a0c",
    },
    // Cinematic script: t = seconds from the moment the pilot passes the start gate.
    script: [
      { id: "insert", t: 0.6, ja: "エントリープラグ、挿入", en: "ENTRY PLUG INSERTION", voice: "エントリープラグ、挿入。" },
      { id: "lock", t: 4.4, ja: "プラグ固定、第一次接続開始", en: "PLUG LOCKED — PRIMARY CONTACT", voice: "プラグ固定、第一次接続、開始。" },
      { id: "lcl", t: 8.4, ja: "LCL 注水", en: "LCL INJECTION", voice: "エルシーエル、注水。" },
      { id: "electric", t: 11.6, ja: "LCL 電化", en: "ELECTRIFYING LCL", voice: "エルシーエル、電化。" },
      { id: "power", t: 13.1, ja: "主電源接続、全回路動力伝達", en: "MAIN POWER CONNECTED — ALL CIRCUITS LIVE", voice: "主電源、接続。" },
      { id: "contact2", t: 15.6, ja: "第二次接続開始", en: "SECONDARY CONTACT", voice: "第二次接続、開始。" },
      { id: "a10", t: 17.4, ja: "A10 神経接続、異常なし", en: "A10 NERVE CONNECTION — NOMINAL", voice: "エーテン神経接続、異常なし。" },
      { id: "bidir", t: 19.3, ja: "双方向回線、開きます", en: "OPENING BIDIRECTIONAL CIRCUIT", voice: "双方向回線、開きます。" },
      { id: "sync", t: 20.6, ja: "シンクロ開始", en: "SYNCHRONIZATION START", voice: "シンクロ、開始。" },
    ],
    confirm: { id: "confirm", ja: "セカンドチルドレン、搭乗確認", en: "SECOND CHILDREN — CONFIRM BOARDING", voice: "セカンドチルドレン、搭乗を確認してください。" },
    final: { id: "final", ja: "シンクロ率 100%、ハーモニクス正常", en: "SYNC RATIO 100% — HARMONICS NORMAL", voice: "シンクロ率、百パーセント。" },
    title: { id: "title", ja: "弐号機 起動", en: "EVANGELION UNIT-02 · ACTIVATED", voice: "エヴァンゲリオン二号機、起動。" },
    gate: { ja: "接続待機", en: "ENTRY PLUG — STANDBY" },
    // New-session hero headline (replaces the stock "探索未至之境 / Into the Unknown").
    hero: { ja: "弐号機、発進", en: "EVANGELION UNIT-02 · LAUNCH" },
    syncStop: 99.2,
    // Pre-rendered announcer clips: assets/voice/<unit id>-<line id>.mp3 (see scripts/gen-voice.mjs).
    voiceName: "ja-JP-NanamiNeural",
  },
};

export const DEFAULT_UNIT = UNITS["02"];

// Every line the announcer speaks, in a stable order.
export function voiceLines(unit) {
  return [...unit.script, unit.confirm, unit.final, unit.title].filter((l) => typeof l.voice === "string");
}

export function voiceFile(unit, line) {
  return `${unit.id}-${line.id}.mp3`;
}
