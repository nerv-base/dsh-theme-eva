// Brand marks, settings row, sidebar replay action, sync meter, overlays.
import React from "react";
import { DEFAULT_UNIT } from "../shared/units.js";
import { runtime, useStore, requestPlay } from "./store.js";
import { attachRunningStatus, turnStartTime } from "./running-status.js";

const unit = DEFAULT_UNIT;

export function prefersReducedMotion() {
  return typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function fmt(t, key, vars) {
  let text = t(key);
  if (vars) for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, String(v));
  return text;
}

/* ───────────── brand ───────────── */

/** Own Unit-02 mark: a pentagon-cut red plate with the unit number. No third-party logos. */
export function UnitMark({ size = 24, number = unit.id, title }) {
  return (
    <svg
      className="eva-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
    >
      <path d="M6 4h36l2 2v26L28 44H6l-2-2V6z" fill="#b62026" />
      <path d="M8 8h32v22.5L26.5 40H8z" fill="none" stroke="#ff8a3d" strokeWidth="1.2" opacity=".55" />
      <path d="M4 34h8M36 4v6" stroke="#f06a22" strokeWidth="2" />
      <text
        x="24"
        y="29.5"
        textAnchor="middle"
        fontFamily='"EVA Condensed","Barlow Condensed","Arial Narrow",sans-serif'
        fontWeight="700"
        fontSize="21"
        letterSpacing="-0.5"
        fill="#fff3e6"
      >
        {number}
      </text>
    </svg>
  );
}

export function BrandMark({ size }) {
  return <UnitMark size={size ?? 24} />;
}

export function BrandName() {
  return (
    <span className="eva-brand-name">
      <span className="eva-brand-kanji">{unit.kanji}</span>
      <span className="eva-brand-sub">UNIT-{unit.id} · DSH</span>
    </span>
  );
}

export function HeroMark() {
  return (
    <div className="eva-hero" aria-hidden="true">
      <div className="eva-hero-rule">
        <span>EVANGELION</span>
        <i />
        <span>{unit.designation}</span>
      </div>
      <div className="eva-hero-title">
        <span className="eva-hero-kanji">{unit.kanji}</span>
        <span className="eva-hero-num">{unit.id}</span>
      </div>
      <div className="eva-hero-rule eva-hero-rule-bottom">
        <span>PILOT: {unit.pilotRole}</span>
        <i />
        <span>STANDBY</span>
      </div>
    </div>
  );
}

/* ───────────── settings ───────────── */

function Switch({ checked, onChange, label, disabled }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      className={`eva-switch${checked ? " is-on" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <span className="eva-switch-thumb" />
    </button>
  );
}

const TOGGLES = ["enabled", "cinematic", "voice", "scanBeam", "syncMeter"];

export function makeSettingsRow(prefs) {
  return function EvaSettingsRow({ t }) {
    const state = useStore(prefs.store);
    const reduced = prefersReducedMotion();
    return (
      <div className="eva-settings">
        <div className="eva-settings-head">
          <UnitMark size={28} />
          <div className="eva-settings-text">
            <div className="eva-settings-title">{t("settings.title")}</div>
            <div className="eva-settings-desc">{t("settings.desc")}</div>
          </div>
          <button
            type="button"
            className="eva-btn"
            disabled={!state.enabled}
            onClick={() => requestPlay()}
          >
            {t("settings.replay")}
          </button>
        </div>
        <div className="eva-settings-list">
          {TOGGLES.map((key) => (
            <div key={key} className={`eva-settings-item${key !== "enabled" && !state.enabled ? " is-dim" : ""}`}>
              <div className="eva-settings-text">
                <div className="eva-settings-label">{t(`settings.${key}`)}</div>
                <div className="eva-settings-desc">{t(`settings.${key}.desc`)}</div>
              </div>
              <Switch
                checked={state[key]}
                label={t(`settings.${key}`)}
                disabled={key !== "enabled" && !state.enabled}
                onChange={(value) => prefs.set(key, value)}
              />
            </div>
          ))}
          {reduced ? <div className="eva-settings-note">{t("settings.reducedMotion")}</div> : null}
        </div>
      </div>
    );
  };
}

/* ───────────── sidebar foot ───────────── */

export function makeFooterReplay(prefs) {
  return function EvaFooterReplay({ t, wide }) {
    const enabled = useStore(prefs.store, (s) => s.enabled);
    if (!enabled) return null;
    const label = t("footer.replay");
    return (
      <button
        type="button"
        className={`eva-foot-btn${wide ? " is-wide" : ""}`}
        title={label}
        aria-label={label}
        onClick={() => requestPlay()}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5 1.5h6v3.2l-1.2 1.2v7.6L8 15l-1.8-1.5V5.9L5 4.7z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="miter" />
          <path d="M6.6 8h2.8M6.6 10.4h2.8" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      </button>
    );
  };
}

/* ───────────── sync meter ───────────── */

function syncState(pressure) {
  const used = pressure?.projectedTokens ?? pressure?.pressureTokens;
  const windowTokens = pressure?.contextWindow;
  const known = typeof used === "number" && typeof windowTokens === "number" && windowTokens > 0;
  const sync = known ? Math.max(0, Math.min(100, 100 - (used / windowTokens) * 100)) : undefined;
  const level = sync === undefined ? "unknown" : sync < 10 ? "critical" : sync < 30 ? "warn" : "ok";
  return { used, windowTokens, known, sync, level };
}

const LEVEL_TEXT = {
  unknown: { ja: "接続待機", en: "STANDBY" },
  ok: { ja: "ハーモニクス正常", en: "HARMONICS NORMAL" },
  warn: { ja: "精神汚染", en: "MENTAL CONTAMINATION" },
  critical: { ja: "シンクロ率低下", en: "SYNC RATIO FALLING" },
};

/** Session-header utility plate: SYNC = 100% − context occupancy. */
export function makeSyncMeter(prefs) {
  return function EvaSyncMeter({ t, useProjection }) {
    const show = useStore(prefs.store, (s) => s.enabled && s.syncMeter);
    const pressure = useProjection ? useProjection("contextPressure") : undefined;
    if (!show) return null;
    const { used, windowTokens, known, sync, level } = syncState(pressure);
    const status = LEVEL_TEXT[level];
    const tooltip = known
      ? `${status.ja} · ${fmt(t, "meter.tooltip", { used: used.toLocaleString(), window: windowTokens.toLocaleString() })}`
      : t("meter.unknown");
    const segments = 10;
    const lit = sync === undefined ? 0 : Math.ceil((sync / 100) * segments - 0.001);
    return (
      <div className={`eva-sync is-${level}`} role="status" title={tooltip} aria-label={`SYNC ${sync === undefined ? "--" : sync.toFixed(1)}%`}>
        <span className="eva-sync-tag">SYNC</span>
        <span className="eva-sync-bar" aria-hidden="true">
          {Array.from({ length: segments }, (_, i) => (
            <i key={i} className={i < lit ? "on" : undefined} />
          ))}
        </span>
        <span className="eva-sync-value">
          {sync === undefined ? "--.-" : sync.toFixed(1)}
          <small>%</small>
        </span>
        {level === "warn" || level === "critical" ? <span className="eva-sync-alert">{status.ja}</span> : null}
      </div>
    );
  };
}

/* ───────────── native running status (at the transcript tail) ───────────── */

export function makeRunningIndicator(prefs) {
  return function EvaRunningIndicator({ t, useSession, useChat }) {
    const allowed = useStore(prefs.store, (s) => s.enabled && s.scanBeam);
    const running = useSession ? useSession((s) => s?.running === true) : false;
    const startTime = useChat ? useChat(turnStartTime) : undefined;
    const playing = useStore(runtime, (s) => s.playing);
    const anchor = React.useRef(null);
    const adapter = React.useRef(null);
    const title = t("meter.internal");
    React.useEffect(() => {
      if (!allowed || !running || playing) return undefined;
      // A hidden dock occupant supplies Session hooks and the owning occurrence;
      // it does not add an indicator or spacing above the composer anymore.
      const root = anchor.current?.closest("[data-conversation-content]");
      if (!root) return undefined; // unknown host layout: leave native UI intact
      const current = attachRunningStatus(root, { startTime, title });
      adapter.current = current;
      return () => { current.dispose(); adapter.current = null; };
    }, [allowed, running, playing]);
    React.useEffect(() => { adapter.current?.update({ startTime, title }); }, [startTime, title]);
    return <span ref={anchor} hidden data-eva-running-bridge="" />;
  };
}
