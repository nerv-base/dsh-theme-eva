// Frame-wide overlay that owns the boot cinematic. The heavy three.js scene
// lives in the lazily loaded chunk lib/client.cinema.js.
/* global __dshRequire */
import React from "react";
import { DEFAULT_UNIT } from "../shared/units.js";
import { runtime, useStore } from "./store.js";
import { prefersReducedMotion } from "./components.jsx";

let chunkPromise;
function loadCinema() {
  if (!chunkPromise) {
    chunkPromise = __dshRequire.async("./client.cinema.js").catch((error) => {
      chunkPromise = undefined;
      throw error;
    });
  }
  return chunkPromise;
}

/** Reduced-motion stand-in: a still title card that fades out after ~2 s. */
function StaticCard({ onDone }) {
  const [leaving, setLeaving] = React.useState(false);
  React.useEffect(() => {
    const a = setTimeout(() => setLeaving(true), 1500);
    const b = setTimeout(onDone, 2100);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [onDone]);
  const u = DEFAULT_UNIT;
  return (
    <div className={`eva-static${leaving ? " is-leaving" : ""}`} onClick={onDone} role="presentation">
      <div className="eva-static-card">
        <div className="eva-static-kanji">{u.title.ja}</div>
        <div className="eva-static-en">{u.title.en}</div>
      </div>
    </div>
  );
}

function Cinematic({ t, voice, onDone }) {
  const host = React.useRef(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let disposed = false;
    let instance;
    loadCinema()
      .then((mod) => {
        if (disposed || !host.current) return;
        instance = mod.mount(host.current, {
          unit: DEFAULT_UNIT,
          voice,
          strings: {
            gateHint: t("cinema.gateHint"),
            skip: t("cinema.skip"),
            skipHint: t("cinema.skipHint"),
            confirm: t("cinema.confirm"),
          },
          onDone,
        });
      })
      .catch((error) => {
        console.warn("[dsh-theme-eva] cinematic failed to load", error);
        if (!disposed) setFailed(true);
      });
    return () => {
      disposed = true;
      instance?.dispose();
    };
  }, []);
  if (failed) return <StaticCard onDone={onDone} />;
  return (
    <div className="eva-cinema-host" ref={host}>
      <div className="eva-cinema-boot">{t("cinema.loading")}</div>
    </div>
  );
}

export function makeCinemaOverlay(prefs) {
  return function EvaCinemaOverlay({ t }) {
    const prefsState = useStore(prefs.store);
    const playRequest = useStore(runtime, (s) => s.playRequest);
    // Decide the page-open play once, from the first preferences we see (the
    // localStorage hint makes this instant; Host load may still cancel it).
    const [session, setSession] = React.useState(() =>
      prefsState.enabled && prefsState.cinematic ? { id: 0, auto: true } : null,
    );
    const seen = React.useRef(playRequest);

    React.useEffect(() => {
      if (playRequest === seen.current) return;
      seen.current = playRequest;
      setSession({ id: playRequest, auto: false });
    }, [playRequest]);

    // The Host value won: cancel an automatic play the user had turned off.
    React.useEffect(() => {
      if (!prefsState.loaded || !session?.auto) return;
      if (!(prefsState.enabled && prefsState.cinematic)) setSession(null);
    }, [prefsState.loaded, prefsState.enabled, prefsState.cinematic, session]);

    // Disabling the whole theme mid-play stops it.
    React.useEffect(() => {
      if (!prefsState.enabled && session) setSession(null);
    }, [prefsState.enabled, session]);

    React.useEffect(() => {
      runtime.set({ playing: Boolean(session) });
    }, [session]);

    const done = React.useCallback(() => setSession(null), []);
    if (!session) return null;
    if (prefersReducedMotion()) return <StaticCard key={session.id} onDone={done} />;
    return <Cinematic key={session.id} t={t} voice={prefsState.voice} onDone={done} />;
  };
}
