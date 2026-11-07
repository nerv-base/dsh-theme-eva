// User preferences: durable in the Host settings document (namespace = the
// patch row id), mirrored through ctx.configForms. A localStorage hint only
// removes the first-paint flash; the Host value always wins once it loads.
import { createStore } from "./store.js";
import { DEFAULT_UNIT_ID, UNIT_IDS } from "../shared/units.js";

export const NAMESPACE = "theme-eva";
export const DEFAULTS = Object.freeze({
  enabled: true,
  unit: DEFAULT_UNIT_ID,
  cinematic: true,
  voice: true,
  scanBeam: true,
  syncMeter: true,
  effortSync: true,
});
const HINT_KEY = "dsh-theme-eva:prefs-hint";

function readHint() {
  try {
    const raw = localStorage.getItem(HINT_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function writeHint(values) {
  try {
    localStorage.setItem(HINT_KEY, JSON.stringify(values));
  } catch {
    /* storage unavailable: the Host value still applies after load */
  }
}

function pick(source) {
  const out = { ...DEFAULTS };
  if (source && typeof source === "object") {
    for (const key of Object.keys(DEFAULTS)) {
      if (typeof DEFAULTS[key] === "boolean" && typeof source[key] === "boolean") out[key] = source[key];
    }
    if (UNIT_IDS.includes(source.unit)) out.unit = source.unit;
  }
  return out;
}

export function createPrefs(ctx) {
  const hint = readHint();
  const store = createStore({ ...pick(hint), loaded: false, writable: false });
  let form;
  try {
    form = ctx.configForms?.get(NAMESPACE);
  } catch (error) {
    console.warn("[dsh-theme-eva] settings form unavailable, using defaults", error);
  }

  const sync = () => {
    if (!form) return;
    const snap = form.getSnapshot();
    if (snap.status === "loading") return;
    const values = pick(snap.value);
    writeHint(values);
    store.set({ ...values, loaded: true, writable: snap.writable === true });
  };

  if (form) {
    ctx.effect(() => form.subscribe(sync), "dsh-theme-eva: prefs mirror");
    sync();
  } else {
    store.set({ loaded: true });
  }

  return {
    store,
    get: () => store.get(),
    subscribe: store.subscribe,
    async set(field, value) {
      const previous = store.get()[field];
      store.set({ [field]: value }); // optimistic
      if (!form) return true;
      try {
        const ok = await form.set(field, value);
        if (!ok) store.set({ [field]: previous });
        return ok;
      } catch (error) {
        console.warn("[dsh-theme-eva] preference write failed", error);
        store.set({ [field]: previous });
        return false;
      }
    },
  };
}
