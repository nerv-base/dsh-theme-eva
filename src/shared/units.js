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
    palette: {
      bg: "#0b0b0c",
      panel: "#121315",
      raised: "#1b1b1c",
      raised2: "#232122",
      border: "#33312e",
      borderStrong: "#4a4440",
      text: "#e8e2d7",
      textDim: "#c9c2b6",
      muted: "#a29e97",
      faint: "#6f6b66",
      accent: "#f06a22",
      accentHot: "#ff8a3d",
      red: "#b62026",
      redHot: "#d34634",
      redDeep: "#51161c",
      warn: "#e7bc35",
      ok: "#58c46a",
      lcl: "#ff7a1a",
      sidebar: "#101113",
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
