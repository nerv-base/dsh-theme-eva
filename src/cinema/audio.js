// Synthesized sound design (WebAudio) + Japanese announcer.
// Sound effects are generated at runtime. The announcer plays pre-rendered
// clips (assets/voice, see scripts/gen-voice.mjs) through an intercom chain,
// falling back to the Web Speech API when the clips cannot be loaded.

export class AudioEngine {
  constructor() {
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = AC ? new AC() : undefined;
    this.nodes = new Set();
    if (!this.ctx) return;
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = 0.0001;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(c.destination);
    this.master.gain.exponentialRampToValueAtTime(0.85, c.currentTime + 0.4);
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const data = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }

  get now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  resume() {
    return this.ctx?.state === "suspended" ? this.ctx.resume() : Promise.resolve();
  }

  track(node) {
    this.nodes.add(node);
    node.onended = () => this.nodes.delete(node);
    return node;
  }

  env(gainNode, at, attack, peak, decay, sustain = 0.0001) {
    const g = gainNode.gain;
    g.setValueAtTime(0.0001, at);
    g.exponentialRampToValueAtTime(Math.max(peak, 0.0002), at + attack);
    g.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), at + attack + decay);
  }

  noiseSource(at, dur) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    src.start(at, Math.random() * 1.5);
    src.stop(at + dur + 0.05);
    return this.track(src);
  }

  osc(type, freq, at, dur) {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, at);
    o.start(at);
    o.stop(at + dur + 0.05);
    return this.track(o);
  }

  /** Low reactor hum that runs under the whole sequence. */
  hum(at = this.now) {
    if (!this.ctx) return;
    const c = this.ctx;
    const out = c.createGain();
    out.gain.setValueAtTime(0.0001, at);
    out.gain.exponentialRampToValueAtTime(0.22, at + 2.5);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 150;
    lp.Q.value = 0.8;
    lp.connect(out).connect(this.master);
    const a = c.createOscillator();
    a.type = "sawtooth";
    a.frequency.value = 46;
    const b = c.createOscillator();
    b.type = "triangle";
    b.frequency.value = 69.3;
    const lfo = c.createOscillator();
    lfo.frequency.value = 0.18;
    const lfoGain = c.createGain();
    lfoGain.gain.value = 40;
    lfo.connect(lfoGain).connect(lp.frequency);
    for (const o of [a, b, lfo]) {
      if (o !== lfo) o.connect(lp);
      o.start(at);
      this.nodes.add(o);
    }
    this.humNodes = { out, lp, a, b, lfo };
  }

  /** Raise the hum into the "main power" register. */
  humPower(at = this.now) {
    const h = this.humNodes;
    if (!h) return;
    h.a.frequency.linearRampToValueAtTime(55, at + 1.6);
    h.b.frequency.linearRampToValueAtTime(110, at + 1.6);
    h.lp.frequency.linearRampToValueAtTime(420, at + 1.6);
    h.out.gain.linearRampToValueAtTime(0.28, at + 1.6);
  }

  humFade(at = this.now, dur = 1) {
    const h = this.humNodes;
    if (!h) return;
    h.out.gain.cancelScheduledValues(at);
    h.out.gain.setValueAtTime(h.out.gain.value, at);
    h.out.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  }

  whoosh(at, dur, from = 300, to = 2400, peak = 0.35) {
    if (!this.ctx) return;
    const c = this.ctx;
    const src = this.noiseSource(at, dur);
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(from, at);
    bp.frequency.exponentialRampToValueAtTime(to, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(peak, at + dur * 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    src.connect(bp).connect(g).connect(this.master);
  }

  /** Heavy metallic latch: inharmonic partials + noise burst + sub thump. */
  clank(at, weight = 1) {
    if (!this.ctx) return;
    const c = this.ctx;
    const partials = [187, 431, 677, 1093, 1631, 2410];
    partials.forEach((f, i) => {
      const o = this.osc(i % 2 ? "square" : "sine", f * (0.97 + Math.random() * 0.06), at, 1.4);
      const g = c.createGain();
      this.env(g, at, 0.003, (0.16 / (i + 1)) * weight, 0.25 + 0.9 / (i + 1));
      const lp = c.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 3200;
      o.connect(lp).connect(g).connect(this.master);
    });
    const n = this.noiseSource(at, 0.25);
    const hp = c.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 1800;
    const ng = c.createGain();
    this.env(ng, at, 0.002, 0.3 * weight, 0.12);
    n.connect(hp).connect(ng).connect(this.master);
    const thump = this.osc("sine", 90, at, 0.6);
    thump.frequency.exponentialRampToValueAtTime(32, at + 0.4);
    const tg = c.createGain();
    this.env(tg, at, 0.004, 0.9 * weight, 0.45);
    thump.connect(tg).connect(this.master);
  }

  hiss(at, dur, peak = 0.12) {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSource(at, dur);
    const hp = c.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 2600;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(peak, at + 0.08);
    g.gain.setValueAtTime(peak, at + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    n.connect(hp).connect(g).connect(this.master);
  }

  servo(at, dur, from = 110, to = 190) {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = this.osc("sawtooth", from, at, dur);
    o.frequency.linearRampToValueAtTime(to, at + dur * 0.8);
    o.frequency.linearRampToValueAtTime(from * 0.8, at + dur);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 900;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.07, at + 0.1);
    g.gain.setValueAtTime(0.07, at + dur - 0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(lp).connect(g).connect(this.master);
  }

  beep(at, freq = 1320, dur = 0.09, peak = 0.08) {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = this.osc("sine", freq, at, dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(peak, at + 0.006);
    g.gain.setValueAtTime(peak, at + dur * 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(this.master);
  }

  /** Two-tone console chirp used for HUD check-offs. */
  chirp(at) {
    this.beep(at, 1760, 0.06, 0.05);
    this.beep(at + 0.07, 2349, 0.08, 0.05);
  }

  /** Radio squelch before an announcement. */
  squelch(at) {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSource(at, 0.22);
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1900;
    bp.Q.value = 2.2;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.09, at + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, at + 0.2);
    n.connect(bp).connect(g).connect(this.master);
    this.beep(at + 0.02, 2600, 0.03, 0.03);
  }

  /** Liquid rush + random bubble blips. */
  liquid(at, dur) {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSource(at, dur);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(260, at);
    lp.frequency.linearRampToValueAtTime(700, at + dur * 0.5);
    lp.frequency.linearRampToValueAtTime(320, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.42, at + 0.6);
    g.gain.setValueAtTime(0.42, at + dur * 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    n.connect(lp).connect(g).connect(this.master);
    const count = Math.floor(dur * 22);
    for (let i = 0; i < count; i++) {
      const t = at + Math.random() * dur;
      const f = 260 + Math.random() * 520;
      const o = this.osc("sine", f, t, 0.08);
      o.frequency.exponentialRampToValueAtTime(f * (1.8 + Math.random()), t + 0.05);
      const bg = c.createGain();
      this.env(bg, t, 0.004, 0.035 + Math.random() * 0.04, 0.06);
      o.connect(bg).connect(this.master);
    }
  }

  /** Electrification: mains buzz through a waveshaper plus crackles. */
  zap(at, dur = 1.2) {
    if (!this.ctx) return;
    const c = this.ctx;
    const shaper = c.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const x = (i / 1023) * 2 - 1;
      curve[i] = Math.tanh(x * 6);
    }
    shaper.curve = curve;
    const o = this.osc("square", 55, at, dur);
    const o2 = this.osc("sawtooth", 110.6, at, dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.16, at + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    const hp = c.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 80;
    o.connect(shaper);
    o2.connect(shaper);
    shaper.connect(hp).connect(g).connect(this.master);
    for (let i = 0; i < 26; i++) {
      const t = at + Math.random() * dur;
      const n = this.noiseSource(t, 0.03);
      const ng = c.createGain();
      this.env(ng, t, 0.001, 0.15 + Math.random() * 0.2, 0.02);
      const bp = c.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 2000 + Math.random() * 5000;
      n.connect(bp).connect(ng).connect(this.master);
    }
  }

  /** Power-up sweep. */
  powerUp(at, dur = 1.8) {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = this.osc("sawtooth", 38, at, dur + 0.3);
    o.frequency.exponentialRampToValueAtTime(220, at + dur);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(120, at);
    lp.frequency.exponentialRampToValueAtTime(2600, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.18, at + dur * 0.8);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur + 0.3);
    o.connect(lp).connect(g).connect(this.master);
  }

  /** Sync climb tone; follows the percentage. */
  syncTone(at, dur) {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = this.osc("sine", 220, at, dur);
    o.frequency.exponentialRampToValueAtTime(880, at + dur);
    const o2 = this.osc("sine", 223, at, dur);
    o2.frequency.exponentialRampToValueAtTime(882.5, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.06, at + 0.4);
    g.gain.setValueAtTime(0.06, at + dur - 0.2);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g);
    o2.connect(g);
    g.connect(this.master);
  }

  /** Final hit for the title card: sub drop, noise burst, open-fifth pad. */
  boom(at) {
    if (!this.ctx) return;
    const c = this.ctx;
    const sub = this.osc("sine", 70, at, 2.6);
    sub.frequency.exponentialRampToValueAtTime(30, at + 1.6);
    const sg = c.createGain();
    this.env(sg, at, 0.005, 1.0, 2.2);
    sub.connect(sg).connect(this.master);
    const n = this.noiseSource(at, 1.2);
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(3000, at);
    lp.frequency.exponentialRampToValueAtTime(200, at + 1);
    const ng = c.createGain();
    this.env(ng, at, 0.003, 0.4, 1);
    n.connect(lp).connect(ng).connect(this.master);
    const pad = c.createGain();
    pad.gain.setValueAtTime(0.0001, at);
    pad.gain.exponentialRampToValueAtTime(0.12, at + 0.15);
    pad.gain.exponentialRampToValueAtTime(0.0001, at + 3.4);
    const plp = c.createBiquadFilter();
    plp.type = "lowpass";
    plp.frequency.value = 1800;
    plp.connect(pad).connect(this.master);
    for (const f of [110, 164.8, 220, 329.6, 440]) {
      for (const d of [-4, 4]) {
        const o = this.osc("sawtooth", f, at, 3.5);
        o.detune.value = d;
        o.connect(plp);
      }
    }
  }

  close() {
    for (const node of this.nodes) {
      try {
        node.stop();
      } catch {
        /* already stopped */
      }
    }
    this.nodes.clear();
    if (this.ctx && this.master) {
      try {
        this.master.gain.cancelScheduledValues(this.now);
        this.master.gain.setValueAtTime(this.master.gain.value, this.now);
        this.master.gain.linearRampToValueAtTime(0, this.now + 0.08);
      } catch {
        /* context gone */
      }
      const ctx = this.ctx;
      setTimeout(() => ctx.close().catch(() => {}), 150);
    }
  }
}

const PREFERRED_VOICES = [/kyoko/i, /o-?ren/i, /nanami/i, /haruka/i, /ayumi/i, /mizuki/i, /google 日本語/i, /female/i];

export class Announcer {
  constructor(enabled) {
    this.synth = enabled && typeof speechSynthesis !== "undefined" ? speechSynthesis : undefined;
    this.voice = undefined;
    if (!this.synth) return;
    this.synth.cancel();
    this.pick();
    this.onVoices = () => this.pick();
    this.synth.addEventListener?.("voiceschanged", this.onVoices);
  }

  pick() {
    const voices = this.synth.getVoices().filter((v) => /^ja/i.test(v.lang));
    for (const re of PREFERRED_VOICES) {
      const hit = voices.find((v) => re.test(v.name));
      if (hit) {
        this.voice = hit;
        return;
      }
    }
    this.voice = voices[0];
  }

  speak(text, { rate = 1.02, pitch = 0.82 } = {}) {
    if (!this.synth || !text) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    if (this.voice) u.voice = this.voice;
    u.rate = rate;
    u.pitch = pitch;
    u.volume = 0.95;
    this.synth.speak(u);
  }

  dispose() {
    if (!this.synth) return;
    this.synth.removeEventListener?.("voiceschanged", this.onVoices);
    this.synth.cancel();
  }
}

// Pre-rendered announcer clips played through a band-limited intercom chain.
// Clips are fetched as soon as the cinematic mounts; decoding waits for the
// AudioContext the start gate creates. Lines never overlap: a clip that comes
// due while another is still speaking is queued right after it.
export class VoicePlayer {
  // source: async () => ({ [file]: base64 }) (the bundled voice chunk), or a
  // base URL the files are fetched from (standalone harness).
  constructor(source, files) {
    this.raw = new Map();
    this.buffers = new Map();
    this.pending = new Map();
    this.busyUntil = 0;
    this.sources = new Set();
    this.failed = !source;
    if (this.failed) return;
    const load = typeof source === "function"
      ? source().then((clips) => {
          for (const file of files) {
            if (!clips?.[file]) throw new Error(`voice ${file}: missing`);
            this.raw.set(file, base64ToBuffer(clips[file]));
          }
        })
      : Promise.all(
          files.map(async (file) => {
            const res = await fetch(`${source.replace(/\/$/, "")}/${file}`);
            if (!res.ok) throw new Error(`voice ${file}: ${res.status}`);
            this.raw.set(file, await res.arrayBuffer());
          }),
        );
    this.fetching = load.catch(() => {
      this.failed = true;
    });
  }

  attach(engine) {
    if (this.failed || !engine?.ctx || this.engine) return;
    this.engine = engine;
    const c = engine.ctx;
    const hp = c.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 240;
    hp.Q.value = 0.8;
    const presence = c.createBiquadFilter();
    presence.type = "peaking";
    presence.frequency.value = 2300;
    presence.Q.value = 0.9;
    presence.gain.value = 4.5;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 6800;
    lp.Q.value = 0.7;
    const drive = c.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < curve.length; i++) {
      const x = (i / (curve.length - 1)) * 2 - 1;
      curve[i] = Math.tanh(x * 1.6) / Math.tanh(1.6);
    }
    drive.curve = curve;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -22;
    comp.ratio.value = 3.5;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    this.out = c.createGain();
    this.out.gain.value = 1.15;
    hp.connect(presence).connect(lp).connect(drive).connect(comp).connect(this.out).connect(engine.master);
    this.input = hp;
    this.ready = (this.fetching || Promise.resolve()).then(() =>
      Promise.all(
        [...this.raw].map(([file, data]) => {
          const job = c
            .decodeAudioData(data.slice(0))
            .then((buf) => this.buffers.set(file, trim(c, buf)))
            .catch(() => {});
          this.pending.set(file, job);
          return job;
        }),
      ),
    );
  }

  // Resolves true when the clip was scheduled, false when it is unavailable.
  async play(file, { delay = 0, onStart } = {}) {
    if (this.failed || !this.engine) return false;
    const c = this.engine.ctx;
    const due = c.currentTime + delay;
    if (!this.buffers.has(file)) {
      await this.ready;
      if (!this.buffers.has(file)) return false;
      if (c.currentTime - due > 1.2) return true; // too late to be meaningful; drop silently
    }
    const buf = this.buffers.get(file);
    const at = Math.max(c.currentTime + 0.02, due, this.busyUntil + 0.1);
    const src = c.createBufferSource();
    src.buffer = buf;
    src.connect(this.input);
    src.start(at);
    this.sources.add(src);
    src.onended = () => this.sources.delete(src);
    this.busyUntil = at + buf.duration;
    onStart?.(at, buf.duration);
    return true;
  }

  // Cut whatever is speaking (with a short fade so it does not click).
  stop() {
    const c = this.engine?.ctx;
    const fade = 0.05;
    if (c && this.out && this.sources.size) {
      const t = c.currentTime;
      this.out.gain.cancelScheduledValues(t);
      this.out.gain.setTargetAtTime(0, t, fade / 4);
      this.out.gain.setValueAtTime(1.15, t + fade + 0.02);
    }
    for (const src of this.sources) {
      try {
        src.stop(c ? c.currentTime + fade : 0);
      } catch {}
    }
    this.sources.clear();
    this.busyUntil = c ? c.currentTime + fade : 0;
  }
}

function base64ToBuffer(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out.buffer;
}

// Drop the leading/trailing silence TTS engines pad clips with (keeps 30 ms).
function trim(ctx, buf) {
  const ch = buf.getChannelData(0);
  const thr = 0.012;
  let a = 0;
  let b = ch.length - 1;
  while (a < b && Math.abs(ch[a]) < thr) a++;
  while (b > a && Math.abs(ch[b]) < thr) b--;
  const pad = Math.round(buf.sampleRate * 0.03);
  a = Math.max(0, a - pad);
  b = Math.min(ch.length - 1, b + pad * 3);
  const len = b - a + 1;
  if (len <= 0 || len === ch.length) return buf;
  const out = ctx.createBuffer(buf.numberOfChannels, len, buf.sampleRate);
  for (let i = 0; i < buf.numberOfChannels; i++) out.copyToChannel(buf.getChannelData(i).subarray(a, b + 1), i);
  return out;
}
