// Brand marks, settings row, sidebar replay action, sync meter, overlays.
import React from "react";
import { DEFAULT_UNIT } from "../shared/units.js";
import { runtime, useStore, setRunning, requestPlay } from "./store.js";

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

function useTurnClock(running) {
  const [elapsed, setElapsed] = React.useState(0);
  const startRef = React.useRef(0);
  React.useEffect(() => {
    if (!running) return undefined;
    startRef.current = performance.now();
    setElapsed(0);
    let raf = 0;
    let last = 0;
    const tick = (now) => {
      if (now - last > 40) {
        last = now;
        setElapsed(now - startRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);
  return elapsed;
}

function clock(ms) {
  const total = Math.max(0, Math.floor(ms / 10));
  const cs = total % 100;
  const s = Math.floor(total / 100) % 60;
  const m = Math.floor(total / 6000);
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  return { main: `${pad(m)}:${pad(s)}`, cs: pad(cs) };
}

export function makeSyncMeter(prefs) {
  return function EvaSyncMeter({ t, useSession, useProjection }) {
    const show = useStore(prefs.store, (s) => s.enabled && s.syncMeter);
    const scan = useStore(prefs.store, (s) => s.enabled && s.scanBeam);
    const running = useSession ? useSession((s) => s?.running === true) : false;
    const pressure = useProjection ? useProjection("contextPressure") : undefined;
    const key = React.useId();

    React.useEffect(() => {
      setRunning(key, Boolean(running && scan));
      return () => setRunning(key, false);
    }, [key, running, scan]);

    const elapsed = useTurnClock(Boolean(running && show));
    if (!show) return null;

    const used = pressure?.projectedTokens ?? pressure?.pressureTokens;
    const windowTokens = pressure?.contextWindow;
    const known = typeof used === "number" && typeof windowTokens === "number" && windowTokens > 0;
    const sync = known ? Math.max(0, Math.min(100, 100 - (used / windowTokens) * 100)) : undefined;
    const level = sync === undefined ? "unknown" : sync < 10 ? "critical" : sync < 30 ? "warn" : "ok";
    const status = {
      unknown: { ja: "接続待機", en: "STANDBY" },
      ok: { ja: "ハーモニクス正常", en: "HARMONICS NORMAL" },
      warn: { ja: "精神汚染", en: "MENTAL CONTAMINATION" },
      critical: { ja: "シンクロ率低下", en: "SYNC RATIO FALLING" },
    }[level];
    const tooltip = known
      ? fmt(t, "meter.tooltip", { used: used.toLocaleString(), window: windowTokens.toLocaleString() })
      : t("meter.unknown");
    const c = clock(elapsed);
    const segments = 24;
    const lit = sync === undefined ? 0 : Math.round((sync / 100) * segments);

    return (
      <div className={`eva-meter is-${level}`} role="status" title={tooltip}>
        <div className="eva-meter-sync">
          <span className="eva-meter-label">SYNC</span>
          <span className="eva-meter-value">
            {sync === undefined ? "--.-" : sync.toFixed(1)}
            <small>%</small>
          </span>
          <span className="eva-meter-bar" aria-hidden="true">
            {Array.from({ length: segments }, (_, i) => (
              <i key={i} className={i < lit ? "on" : undefined} />
            ))}
          </span>
          <span className="eva-meter-status">
            <b>{status.ja}</b>
            <em>{status.en}</em>
          </span>
        </div>
        <div className={`eva-meter-power${running ? " is-internal" : ""}`} title={running ? t("meter.internal") : t("meter.external")}>
          {running ? (
            <>
              <span className="eva-meter-label">内部電源</span>
              <span className="eva-meter-clock">
                {c.main}
                <small>:{c.cs}</small>
              </span>
              <span className="eva-meter-tag">ACTIVE</span>
            </>
          ) : (
            <>
              <span className="eva-meter-label">外部電源</span>
              <span className="eva-meter-tag">UMBILICAL</span>
            </>
          )}
        </div>
      </div>
    );
  };
}

/* ───────────── scan beam ───────────── */

export function makeScanBeam(prefs) {
  return function EvaScanBeam() {
    const allowed = useStore(prefs.store, (s) => s.enabled && s.scanBeam);
    const active = useStore(runtime, (s) => s.running.length > 0 && !s.playing);
    if (!allowed || !active || prefersReducedMotion()) return null;
    return (
      <div className="eva-scan" aria-hidden="true">
        <div className="eva-scan-beam" />
        <div className="eva-scan-edge" />
      </div>
    );
  };
}
