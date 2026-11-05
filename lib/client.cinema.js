window.__ModuleLoader__.load({ id: "dsh-theme-eva", chunk: "client.cinema.js", factory: (require) => {
var module = { exports: {} };
var exports = module.exports;
var $r=Object.defineProperty;var oh=Object.getOwnPropertyDescriptor;var ah=Object.getOwnPropertyNames;var ch=Object.prototype.hasOwnProperty;var lh=(i,e)=>{for(var t in e)$r(i,t,{get:e[t],enumerable:!0})},hh=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ah(e))!ch.call(i,s)&&s!==t&&$r(i,s,{get:()=>e[s],enumerable:!(n=oh(e,s))||n.enumerable});return i};var uh=i=>hh($r({},"__esModule",{value:!0}),i);var hg={};lh(hg,{mount:()=>lg});module.exports=uh(hg);var gc=`.evc-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
  color: #e8e2d7;
  font-family: "EVA Condensed", "Barlow Condensed", "Bahnschrift", "DIN Condensed", system-ui, sans-serif;
  letter-spacing: 0.06em;
  user-select: none;
  cursor: default;
  --evc-accent: #f06a22;
  --evc-hot: #ff8a3d;
  --evc-red: #b62026;
  --evc-warn: #e7bc35;
  --evc-ok: #58c46a;
  transition: opacity 0.6s ease;
}
.evc-root.is-leaving { opacity: 0; }
.evc-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.evc-monitor { position: absolute; inset: 0; width: 100%; height: 100%; display: block; pointer-events: none; }
.evc-root.is-monitor .evc-hud-top, .evc-root.is-monitor .evc-rule, .evc-root.is-monitor .evc-steps,
.evc-root.is-monitor .evc-read, .evc-root.is-monitor .evc-caution, .evc-root.is-intertitle .evc-sub { opacity: 0 !important; transition: none !important; }
.evc-root.is-scope .evc-hud-top, .evc-root.is-scope .evc-rule, .evc-root.is-scope .evc-steps, .evc-root.is-scope .evc-read,
.evc-root.is-scope .evc-caution, .evc-root.is-scope .evc-sync { opacity: 0 !important; transition: none !important; }
.evc-mincho { font-family: "EVA Mincho", "Noto Serif CJK JP", "Hiragino Mincho ProN", "Yu Mincho", serif; font-weight: 900; letter-spacing: 0.02em; }

/* ---------------- Start gate */
.evc-gate {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: radial-gradient(ellipse at 50% 55%, #1a0d0b 0, #050404 55%, #000 100%);
  cursor: pointer;
  transition: opacity 0.5s ease;
  z-index: 5;
}
.evc-gate.is-gone { opacity: 0; pointer-events: none; }
.evc-gate-inner { display: grid; justify-items: center; gap: 18px; }
.evc-gate-frame {
  position: relative;
  padding: 34px 64px 30px;
  border: 1px solid #f06a2255;
  background: linear-gradient(180deg, #f06a220d, #0000);
}
.evc-gate-frame::before,
.evc-gate-frame::after {
  content: "";
  position: absolute;
  width: 22px;
  height: 22px;
  border: 2px solid var(--evc-hot);
}
.evc-gate-frame::before { left: -2px; top: -2px; border-right: 0; border-bottom: 0; }
.evc-gate-frame::after { right: -2px; bottom: -2px; border-left: 0; border-top: 0; }
.evc-gate-ja {
  font-size: 76px;
  line-height: 1;
  transform: scaleX(0.8);
  color: #f3ece0;
  text-shadow: 0 0 18px #f06a2240;
}
.evc-gate-en { margin-top: 14px; font-size: 15px; letter-spacing: 0.42em; color: var(--evc-accent); text-align: center; }
.evc-gate-hint { font-size: 13px; letter-spacing: 0.18em; color: #a29e97; animation: evc-blink 1.6s steps(2, start) infinite; }
.evc-gate-meta { display: flex; gap: 22px; font-size: 11px; letter-spacing: 0.24em; color: #6f6b66; }
.evc-gate-meta b { color: var(--evc-red); font-weight: 600; }
@keyframes evc-blink { 50% { opacity: 0.25; } }

/* ---------------- HUD */
.evc-hud { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.6s ease; z-index: 2; }
.evc-hud.is-on { opacity: 1; }
.evc-hud-top {
  position: absolute;
  left: 28px;
  right: 28px;
  top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
  letter-spacing: 0.22em;
}
.evc-tag { display: grid; gap: 4px; }
.evc-tag-title { font-size: 20px; letter-spacing: 0.16em; color: #f3ece0; font-weight: 600; }
.evc-tag-sub { color: var(--evc-accent); }
.evc-clock { font-variant-numeric: tabular-nums; font-size: 26px; letter-spacing: 0.08em; color: var(--evc-hot); text-align: right; font-weight: 600; }
.evc-clock small { display: block; font-size: 11px; letter-spacing: 0.24em; color: #a29e97; font-weight: 500; }
.evc-rule { position: absolute; left: 28px; right: 28px; top: 78px; height: 1px; background: linear-gradient(90deg, var(--evc-accent), #f06a2200 70%); opacity: 0.7; }

.evc-steps { position: absolute; left: 28px; top: 104px; display: grid; gap: 7px; font-size: 12px; letter-spacing: 0.14em; }
.evc-step { display: grid; grid-template-columns: 26px 1fr 54px; gap: 10px; align-items: center; color: #6f6b66; transition: color 0.3s ease; min-width: 330px; }
.evc-step-n { font-weight: 600; }
.evc-step-st { text-align: right; font-size: 11px; }
.evc-step.is-active { color: #f3ece0; }
.evc-step.is-active .evc-step-n { color: var(--evc-accent); }
.evc-step.is-active .evc-step-st { color: var(--evc-warn); animation: evc-blink 0.7s steps(2, start) infinite; }
.evc-step.is-done { color: #a29e97; }
.evc-step.is-done .evc-step-st { color: var(--evc-ok); }

.evc-read { position: absolute; right: 28px; top: 104px; display: grid; gap: 10px; min-width: 210px; font-size: 11px; letter-spacing: 0.2em; color: #a29e97; }
.evc-read-row { display: grid; gap: 4px; }
.evc-read-row b { font-size: 18px; letter-spacing: 0.06em; color: #e8e2d7; font-weight: 600; font-variant-numeric: tabular-nums; }
.evc-read-bar { height: 3px; background: #ffffff14; position: relative; }
.evc-read-bar i { position: absolute; inset: 0 auto 0 0; background: var(--evc-accent); width: 0; }
.evc-read-row.is-alert b { color: var(--evc-warn); }

.evc-caution {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 10px;
  background: repeating-linear-gradient(-45deg, var(--evc-warn) 0 14px, #000 14px 28px);
  opacity: 0;
  transition: opacity 0.2s;
}
.evc-caution.is-on { opacity: 0.9; }

.evc-sub {
  position: absolute;
  left: 50%;
  bottom: 14%;
  transform: translateX(-50%);
  text-align: center;
  display: grid;
  gap: 10px;
  justify-items: center;
  white-space: nowrap;
}
.evc-sub-ja { font-size: 40px; line-height: 1.1; color: #fbf6ee; text-shadow: 0 2px 16px #000, 0 0 2px #000; transform: scaleX(0.86); }
.evc-sub-en { font-size: 13px; letter-spacing: 0.38em; color: var(--evc-accent); text-shadow: 0 1px 6px #000; }
.evc-sub.is-in .evc-sub-ja { animation: evc-type 0.5s steps(8, end); }
@keyframes evc-type { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }

/* ---------------- Sync panel */
.evc-sync {
  position: absolute;
  right: 28px;
  bottom: 28px;
  width: min(440px, 40vw);
  padding: 14px 16px 12px;
  background: #0b0b0ccc;
  border: 1px solid #f06a2266;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.evc-sync.is-on { opacity: 1; transform: none; }
.evc-sync-head { display: flex; justify-content: space-between; align-items: baseline; font-size: 11px; letter-spacing: 0.24em; color: #a29e97; }
.evc-sync-num { font-size: 54px; line-height: 1; color: var(--evc-hot); font-weight: 600; font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
.evc-sync-num small { font-size: 22px; margin-left: 4px; }
.evc-sync canvas { display: block; width: 100%; height: 92px; margin-top: 8px; }
.evc-sync-legend { display: flex; gap: 16px; font-size: 10px; letter-spacing: 0.2em; color: #6f6b66; margin-top: 6px; }
.evc-sync-legend i { display: inline-block; width: 14px; height: 2px; vertical-align: middle; margin-right: 6px; }

/* ---------------- Confirmation */
.evc-confirm {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
  z-index: 4;
}
.evc-confirm.is-on { opacity: 1; pointer-events: auto; }
.evc-confirm-panel {
  position: relative;
  padding: 28px 40px 26px;
  min-width: 420px;
  display: grid;
  justify-items: center;
  gap: 14px;
  background: linear-gradient(180deg, #1b0d0bdd, #0b0b0cee);
  border: 1px solid #f06a2288;
  box-shadow: 0 0 0 1px #000, 0 30px 80px #000c, 0 0 60px #f06a2222;
  backdrop-filter: blur(6px);
}
.evc-confirm-panel::before,
.evc-confirm-panel::after { content: ""; position: absolute; width: 18px; height: 18px; border: 2px solid #ffb88f; }
.evc-confirm-panel::before { left: -3px; top: -3px; border-right: 0; border-bottom: 0; }
.evc-confirm-panel::after { right: -3px; bottom: -3px; border-left: 0; border-top: 0; }
.evc-confirm-label { font-size: 11px; letter-spacing: 0.3em; color: var(--evc-warn); }
.evc-confirm-ja { font-size: 34px; color: #fbf6ee; transform: scaleX(0.86); }
.evc-confirm-en { font-size: 12px; letter-spacing: 0.3em; color: #a29e97; }
.evc-confirm-btn {
  margin-top: 6px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: #fff;
  background: var(--evc-red);
  border: 1px solid #d34634;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 0;
  animation: evc-pulse 1.2s ease-in-out infinite;
}
.evc-confirm-btn:hover, .evc-confirm-btn:focus-visible { background: #d34634; outline: none; }
@keyframes evc-pulse { 50% { box-shadow: 0 0 0 6px #b6202633; } }

/* ---------------- Title card */
.evc-title {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: #000;
  opacity: 0;
  pointer-events: none;
  z-index: 6;
}
.evc-title.is-on { opacity: 1; }
.evc-title-inner { display: grid; justify-items: center; gap: 22px; }
.evc-title-ja { font-size: clamp(96px, 15vw, 210px); line-height: 0.95; color: #fbf6ee; transform: scaleX(0.74); white-space: nowrap; }
.evc-title-ja span { color: var(--evc-red); }
.evc-title-en { font-size: 15px; letter-spacing: 0.6em; color: #e8e2d7; padding-left: 0.6em; }
.evc-title-rule { width: 220px; height: 2px; background: var(--evc-red); }
.evc-title.is-on .evc-title-ja { animation: evc-title 2.8s cubic-bezier(.2,.7,.1,1) both; }
@keyframes evc-title { from { letter-spacing: 0.3em; filter: blur(6px); opacity: 0; } 12% { opacity: 1; filter: none; } to { letter-spacing: 0.02em; } }

/* ---------------- Skip */
.evc-skip {
  position: absolute;
  left: 28px;
  bottom: 24px;
  z-index: 7;
  display: flex;
  align-items: center;
  gap: 10px;
  font: inherit;
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #a29e97;
  background: #0b0b0c99;
  border: 1px solid #33312e;
  padding: 7px 12px 9px;
  cursor: pointer;
  border-radius: 0;
  user-select: none;
  touch-action: none;
  overflow: hidden;
  transition: color 0.15s, border-color 0.15s;
}
.evc-skip:hover { color: #e8e2d7; border-color: var(--evc-accent); }
.evc-skip kbd { font: inherit; font-size: 10px; border: 1px solid #4a4440; padding: 1px 5px; color: #6f6b66; transition: color 0.15s, border-color 0.15s; }
/* hold progress: thin bar along the bottom edge + a faint fill behind the label */
.evc-skip-bar { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: #f06a2222; pointer-events: none; }
.evc-skip-bar b {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #d8262e, #f06a22);
  box-shadow: 0 0 8px #f06a22aa;
  transform: scaleX(0);
  transform-origin: left center;
}
.evc-skip::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, #d8262e33, #f06a2214);
  transform: scaleX(var(--evc-hold, 0)); transform-origin: left center;
  opacity: 0; transition: opacity 0.15s;
}
.evc-skip.is-armed::before { opacity: 1; }
.evc-skip.is-armed { color: #e8e2d7; border-color: #f06a22aa; }
.evc-skip.is-armed kbd { color: #f06a22; border-color: #f06a22aa; }
.evc-skip.is-holding kbd { background: #f06a2222; }
.evc-skip.is-done { color: #fff; border-color: #f06a22; }
.evc-skip > * { position: relative; }
.evc-skip > .evc-skip-bar { position: absolute; }

@media (max-width: 760px) {
  .evc-steps, .evc-read { display: none; }
  .evc-sub-ja { font-size: 28px; }
  .evc-sync { left: 16px; right: 16px; width: auto; }
}
`;var Ps=class{constructor(){let e=window.AudioContext||window.webkitAudioContext;if(this.ctx=e?new e:void 0,this.nodes=new Set,!this.ctx)return;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=1e-4;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.master.gain.exponentialRampToValueAtTime(.85,t.currentTime+.4);let s=t.sampleRate*2;this.noise=t.createBuffer(1,s,t.sampleRate);let r=this.noise.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}get now(){return this.ctx?this.ctx.currentTime:0}resume(){return this.ctx?.state==="suspended"?this.ctx.resume():Promise.resolve()}track(e){return this.nodes.add(e),e.onended=()=>this.nodes.delete(e),e}env(e,t,n,s,r,o=1e-4){let a=e.gain;a.setValueAtTime(1e-4,t),a.exponentialRampToValueAtTime(Math.max(s,2e-4),t+n),a.exponentialRampToValueAtTime(Math.max(o,1e-4),t+n+r)}noiseSource(e,t){let n=this.ctx.createBufferSource();return n.buffer=this.noise,n.loop=!0,n.start(e,Math.random()*1.5),n.stop(e+t+.05),this.track(n)}osc(e,t,n,s){let r=this.ctx.createOscillator();return r.type=e,r.frequency.setValueAtTime(t,n),r.start(n),r.stop(n+s+.05),this.track(r)}hum(e=this.now){if(!this.ctx)return;let t=this.ctx,n=t.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+2.5);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=150,s.Q.value=.8,s.connect(n).connect(this.master);let r=t.createOscillator();r.type="sawtooth",r.frequency.value=46;let o=t.createOscillator();o.type="triangle",o.frequency.value=69.3;let a=t.createOscillator();a.frequency.value=.18;let l=t.createGain();l.gain.value=40,a.connect(l).connect(s.frequency);for(let c of[r,o,a])c!==a&&c.connect(s),c.start(e),this.nodes.add(c);this.humNodes={out:n,lp:s,a:r,b:o,lfo:a}}humPower(e=this.now){let t=this.humNodes;t&&(t.a.frequency.linearRampToValueAtTime(55,e+1.6),t.b.frequency.linearRampToValueAtTime(110,e+1.6),t.lp.frequency.linearRampToValueAtTime(420,e+1.6),t.out.gain.linearRampToValueAtTime(.28,e+1.6))}humFade(e=this.now,t=1){let n=this.humNodes;n&&(n.out.gain.cancelScheduledValues(e),n.out.gain.setValueAtTime(n.out.gain.value,e),n.out.gain.exponentialRampToValueAtTime(1e-4,e+t))}whoosh(e,t,n=300,s=2400,r=.35){if(!this.ctx)return;let o=this.ctx,a=this.noiseSource(e,t),l=o.createBiquadFilter();l.type="bandpass",l.Q.value=1.4,l.frequency.setValueAtTime(n,e),l.frequency.exponentialRampToValueAtTime(s,e+t);let c=o.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(r,e+t*.7),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(l).connect(c).connect(this.master)}clank(e,t=1){if(!this.ctx)return;let n=this.ctx;[187,431,677,1093,1631,2410].forEach((h,u)=>{let f=this.osc(u%2?"square":"sine",h*(.97+Math.random()*.06),e,1.4),p=n.createGain();this.env(p,e,.003,.16/(u+1)*t,.25+.9/(u+1));let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=3200,f.connect(g).connect(p).connect(this.master)});let r=this.noiseSource(e,.25),o=n.createBiquadFilter();o.type="highpass",o.frequency.value=1800;let a=n.createGain();this.env(a,e,.002,.3*t,.12),r.connect(o).connect(a).connect(this.master);let l=this.osc("sine",90,e,.6);l.frequency.exponentialRampToValueAtTime(32,e+.4);let c=n.createGain();this.env(c,e,.004,.9*t,.45),l.connect(c).connect(this.master)}hiss(e,t,n=.12){if(!this.ctx)return;let s=this.ctx,r=this.noiseSource(e,t),o=s.createBiquadFilter();o.type="highpass",o.frequency.value=2600;let a=s.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(n,e+.08),a.gain.setValueAtTime(n,e+t*.6),a.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(a).connect(this.master)}servo(e,t,n=110,s=190){if(!this.ctx)return;let r=this.ctx,o=this.osc("sawtooth",n,e,t);o.frequency.linearRampToValueAtTime(s,e+t*.8),o.frequency.linearRampToValueAtTime(n*.8,e+t);let a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=900;let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.07,e+.1),l.gain.setValueAtTime(.07,e+t-.15),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(a).connect(l).connect(this.master)}beep(e,t=1320,n=.09,s=.08){if(!this.ctx)return;let r=this.ctx,o=this.osc("sine",t,e,n),a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.006),a.gain.setValueAtTime(s,e+n*.7),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(a).connect(this.master)}chirp(e){this.beep(e,1760,.06,.05),this.beep(e+.07,2349,.08,.05)}squelch(e){if(!this.ctx)return;let t=this.ctx,n=this.noiseSource(e,.22),s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1900,s.Q.value=2.2;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+.2),n.connect(s).connect(r).connect(this.master),this.beep(e+.02,2600,.03,.03)}liquid(e,t){if(!this.ctx)return;let n=this.ctx,s=this.noiseSource(e,t),r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(260,e),r.frequency.linearRampToValueAtTime(700,e+t*.5),r.frequency.linearRampToValueAtTime(320,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.42,e+.6),o.gain.setValueAtTime(.42,e+t*.7),o.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(r).connect(o).connect(this.master);let a=Math.floor(t*22);for(let l=0;l<a;l++){let c=e+Math.random()*t,h=260+Math.random()*520,u=this.osc("sine",h,c,.08);u.frequency.exponentialRampToValueAtTime(h*(1.8+Math.random()),c+.05);let f=n.createGain();this.env(f,c,.004,.035+Math.random()*.04,.06),u.connect(f).connect(this.master)}}zap(e,t=1.2){if(!this.ctx)return;let n=this.ctx,s=n.createWaveShaper(),r=new Float32Array(1024);for(let h=0;h<1024;h++){let u=h/1023*2-1;r[h]=Math.tanh(u*6)}s.curve=r;let o=this.osc("square",55,e,t),a=this.osc("sawtooth",110.6,e,t),l=n.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.16,e+.03),l.gain.exponentialRampToValueAtTime(1e-4,e+t);let c=n.createBiquadFilter();c.type="highpass",c.frequency.value=80,o.connect(s),a.connect(s),s.connect(c).connect(l).connect(this.master);for(let h=0;h<26;h++){let u=e+Math.random()*t,f=this.noiseSource(u,.03),p=n.createGain();this.env(p,u,.001,.15+Math.random()*.2,.02);let g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=2e3+Math.random()*5e3,f.connect(g).connect(p).connect(this.master)}}powerUp(e,t=1.8){if(!this.ctx)return;let n=this.ctx,s=this.osc("sawtooth",38,e,t+.3);s.frequency.exponentialRampToValueAtTime(220,e+t);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(120,e),r.frequency.exponentialRampToValueAtTime(2600,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.18,e+t*.8),o.gain.exponentialRampToValueAtTime(1e-4,e+t+.3),s.connect(r).connect(o).connect(this.master)}syncTone(e,t){if(!this.ctx)return;let n=this.ctx,s=this.osc("sine",220,e,t);s.frequency.exponentialRampToValueAtTime(880,e+t);let r=this.osc("sine",223,e,t);r.frequency.exponentialRampToValueAtTime(882.5,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.06,e+.4),o.gain.setValueAtTime(.06,e+t-.2),o.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(o),r.connect(o),o.connect(this.master)}boom(e){if(!this.ctx)return;let t=this.ctx,n=this.osc("sine",70,e,2.6);n.frequency.exponentialRampToValueAtTime(30,e+1.6);let s=t.createGain();this.env(s,e,.005,1,2.2),n.connect(s).connect(this.master);let r=this.noiseSource(e,1.2),o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(3e3,e),o.frequency.exponentialRampToValueAtTime(200,e+1);let a=t.createGain();this.env(a,e,.003,.4,1),r.connect(o).connect(a).connect(this.master);let l=t.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.12,e+.15),l.gain.exponentialRampToValueAtTime(1e-4,e+3.4);let c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=1800,c.connect(l).connect(this.master);for(let h of[110,164.8,220,329.6,440])for(let u of[-4,4]){let f=this.osc("sawtooth",h,e,3.5);f.detune.value=u,f.connect(c)}}close(){for(let e of this.nodes)try{e.stop()}catch{}if(this.nodes.clear(),this.ctx&&this.master){try{this.master.gain.cancelScheduledValues(this.now),this.master.gain.setValueAtTime(this.master.gain.value,this.now),this.master.gain.linearRampToValueAtTime(0,this.now+.08)}catch{}let e=this.ctx;setTimeout(()=>e.close().catch(()=>{}),150)}}},fh=[/kyoko/i,/o-?ren/i,/nanami/i,/haruka/i,/ayumi/i,/mizuki/i,/google 日本語/i,/female/i],Ls=class{constructor(e){this.synth=e&&typeof speechSynthesis<"u"?speechSynthesis:void 0,this.voice=void 0,this.synth&&(this.synth.cancel(),this.pick(),this.onVoices=()=>this.pick(),this.synth.addEventListener?.("voiceschanged",this.onVoices))}pick(){let e=this.synth.getVoices().filter(t=>/^ja/i.test(t.lang));for(let t of fh){let n=e.find(s=>t.test(s.name));if(n){this.voice=n;return}}this.voice=e[0]}speak(e,{rate:t=1.02,pitch:n=.82}={}){if(!this.synth||!e)return;let s=new SpeechSynthesisUtterance(e);s.lang="ja-JP",this.voice&&(s.voice=this.voice),s.rate=t,s.pitch=n,s.volume=.95,this.synth.speak(s)}dispose(){this.synth&&(this.synth.removeEventListener?.("voiceschanged",this.onVoices),this.synth.cancel())}},Ds=class{constructor(e,t){if(this.raw=new Map,this.buffers=new Map,this.pending=new Map,this.busyUntil=0,this.sources=new Set,this.failed=!e,this.failed)return;let n=typeof e=="function"?e().then(s=>{for(let r of t){if(!s?.[r])throw new Error(`voice ${r}: missing`);this.raw.set(r,ph(s[r]))}}):Promise.all(t.map(async s=>{let r=await fetch(`${e.replace(/\/$/,"")}/${s}`);if(!r.ok)throw new Error(`voice ${s}: ${r.status}`);this.raw.set(s,await r.arrayBuffer())}));this.fetching=n.catch(()=>{this.failed=!0})}attach(e){if(this.failed||!e?.ctx||this.engine)return;this.engine=e;let t=e.ctx,n=t.createBiquadFilter();n.type="highpass",n.frequency.value=240,n.Q.value=.8;let s=t.createBiquadFilter();s.type="peaking",s.frequency.value=2300,s.Q.value=.9,s.gain.value=4.5;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=6800,r.Q.value=.7;let o=t.createWaveShaper(),a=new Float32Array(1024);for(let c=0;c<a.length;c++){let h=c/(a.length-1)*2-1;a[c]=Math.tanh(h*1.6)/Math.tanh(1.6)}o.curve=a;let l=t.createDynamicsCompressor();l.threshold.value=-22,l.ratio.value=3.5,l.attack.value=.004,l.release.value=.18,this.out=t.createGain(),this.out.gain.value=1.15,n.connect(s).connect(r).connect(o).connect(l).connect(this.out).connect(e.master),this.input=n,this.ready=(this.fetching||Promise.resolve()).then(()=>Promise.all([...this.raw].map(([c,h])=>{let u=t.decodeAudioData(h.slice(0)).then(f=>this.buffers.set(c,mh(t,f))).catch(()=>{});return this.pending.set(c,u),u})))}async play(e,{delay:t=0,onStart:n}={}){if(this.failed||!this.engine)return!1;let s=this.engine.ctx,r=s.currentTime+t;if(!this.buffers.has(e)){if(await this.ready,!this.buffers.has(e))return!1;if(s.currentTime-r>1.2)return!0}let o=this.buffers.get(e),a=Math.max(s.currentTime+.02,r,this.busyUntil+.1),l=s.createBufferSource();return l.buffer=o,l.connect(this.input),l.start(a),this.sources.add(l),l.onended=()=>this.sources.delete(l),this.busyUntil=a+o.duration,n?.(a,o.duration),!0}stop(){let e=this.engine?.ctx,t=.05;if(e&&this.out&&this.sources.size){let n=e.currentTime;this.out.gain.cancelScheduledValues(n),this.out.gain.setTargetAtTime(0,n,t/4),this.out.gain.setValueAtTime(1.15,n+t+.02)}for(let n of this.sources)try{n.stop(e?e.currentTime+t:0)}catch{}this.sources.clear(),this.busyUntil=e?e.currentTime+t:0}};function ph(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function mh(i,e){let t=e.getChannelData(0),n=.012,s=0,r=t.length-1;for(;s<r&&Math.abs(t[s])<n;)s++;for(;r>s&&Math.abs(t[r])<n;)r--;let o=Math.round(e.sampleRate*.03);s=Math.max(0,s-o),r=Math.min(t.length-1,r+o*3);let a=r-s+1;if(a<=0||a===t.length)return e;let l=i.createBuffer(e.numberOfChannels,a,e.sampleRate);for(let c=0;c<e.numberOfChannels;c++)l.copyToChannel(e.getChannelData(c).subarray(s,r+1),c);return l}var gh={"02":{id:"02",themeId:"eva-02",kanji:"\u5F10\u53F7\u6A5F",kanjiNumber:"\u5F10",nameEn:"EVANGELION UNIT-02",designation:"PRODUCTION MODEL",pilotRole:"SECOND CHILDREN",palette:{bg:"#0b090a",panel:"#131012",raised:"#1b1618",raised2:"#241d1f",border:"#3a2a2c",borderStrong:"#55383b",text:"#ece4da",textDim:"#cbbfb4",muted:"#a59a93",faint:"#6f6462",accent:"#d8262e",accentHot:"#f0413c",red:"#b62026",redHot:"#e0373a",redDeep:"#4e1218",green:"#3fe08a",greenHot:"#86f7bb",greenDim:"#23a463",greenDeep:"#0d2e1f",orange:"#f06a22",warn:"#f0b53a",ok:"#3fe08a",lcl:"#ff7a1a",sidebar:"#0f0a0c"},script:[{id:"insert",t:.6,ja:"\u30A8\u30F3\u30C8\u30EA\u30FC\u30D7\u30E9\u30B0\u3001\u633F\u5165",en:"ENTRY PLUG INSERTION",voice:"\u30A8\u30F3\u30C8\u30EA\u30FC\u30D7\u30E9\u30B0\u3001\u633F\u5165\u3002"},{id:"lock",t:4.4,ja:"\u30D7\u30E9\u30B0\u56FA\u5B9A\u3001\u7B2C\u4E00\u6B21\u63A5\u7D9A\u958B\u59CB",en:"PLUG LOCKED \u2014 PRIMARY CONTACT",voice:"\u30D7\u30E9\u30B0\u56FA\u5B9A\u3001\u7B2C\u4E00\u6B21\u63A5\u7D9A\u3001\u958B\u59CB\u3002"},{id:"lcl",t:8.4,ja:"LCL \u6CE8\u6C34",en:"LCL INJECTION",voice:"\u30A8\u30EB\u30B7\u30FC\u30A8\u30EB\u3001\u6CE8\u6C34\u3002"},{id:"electric",t:11.6,ja:"LCL \u96FB\u5316",en:"ELECTRIFYING LCL",voice:"\u30A8\u30EB\u30B7\u30FC\u30A8\u30EB\u3001\u96FB\u5316\u3002"},{id:"power",t:13.1,ja:"\u4E3B\u96FB\u6E90\u63A5\u7D9A\u3001\u5168\u56DE\u8DEF\u52D5\u529B\u4F1D\u9054",en:"MAIN POWER CONNECTED \u2014 ALL CIRCUITS LIVE",voice:"\u4E3B\u96FB\u6E90\u3001\u63A5\u7D9A\u3002"},{id:"contact2",t:15.6,ja:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A\u958B\u59CB",en:"SECONDARY CONTACT",voice:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A\u3001\u958B\u59CB\u3002"},{id:"a10",t:17.4,ja:"A10 \u795E\u7D4C\u63A5\u7D9A\u3001\u7570\u5E38\u306A\u3057",en:"A10 NERVE CONNECTION \u2014 NOMINAL",voice:"\u30A8\u30FC\u30C6\u30F3\u795E\u7D4C\u63A5\u7D9A\u3001\u7570\u5E38\u306A\u3057\u3002"},{id:"bidir",t:19.3,ja:"\u53CC\u65B9\u5411\u56DE\u7DDA\u3001\u958B\u304D\u307E\u3059",en:"OPENING BIDIRECTIONAL CIRCUIT",voice:"\u53CC\u65B9\u5411\u56DE\u7DDA\u3001\u958B\u304D\u307E\u3059\u3002"},{id:"sync",t:20.6,ja:"\u30B7\u30F3\u30AF\u30ED\u958B\u59CB",en:"SYNCHRONIZATION START",voice:"\u30B7\u30F3\u30AF\u30ED\u3001\u958B\u59CB\u3002"}],confirm:{id:"confirm",ja:"\u30BB\u30AB\u30F3\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u78BA\u8A8D",en:"SECOND CHILDREN \u2014 CONFIRM BOARDING",voice:"\u30BB\u30AB\u30F3\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},final:{id:"final",ja:"\u30B7\u30F3\u30AF\u30ED\u7387 100%\u3001\u30CF\u30FC\u30E2\u30CB\u30AF\u30B9\u6B63\u5E38",en:"SYNC RATIO 100% \u2014 HARMONICS NORMAL",voice:"\u30B7\u30F3\u30AF\u30ED\u7387\u3001\u767E\u30D1\u30FC\u30BB\u30F3\u30C8\u3002"},title:{id:"title",ja:"\u5F10\u53F7\u6A5F \u8D77\u52D5",en:"EVANGELION UNIT-02 \xB7 ACTIVATED",voice:"\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3\u4E8C\u53F7\u6A5F\u3001\u8D77\u52D5\u3002"},gate:{ja:"\u63A5\u7D9A\u5F85\u6A5F",en:"ENTRY PLUG \u2014 STANDBY"},syncStop:99.2,voiceName:"ja-JP-NanamiNeural"}},pg=gh["02"];function vc(i){return[...i.script,i.confirm,i.final,i.title].filter(e=>typeof e.voice=="string")}function Zr(i,e){return`${i.id}-${e.id}.mp3`}var vh=0,xc=1,xh=2;var Al=1,_h=2,Cn=3,Jn=0,It=1,tn=2,$n=0,Vi=1,gn=2,_c=3,yc=4,yh=5,di=100,Mh=101,Sh=102,bh=103,wh=104,Th=200,Eh=201,Ah=202,Ch=203,Po=204,Lo=205,Rh=206,Ih=207,Ph=208,Lh=209,Dh=210,Uh=211,Nh=212,Fh=213,Oh=214,Do=0,Uo=1,No=2,Xi=3,Fo=4,Oo=5,Bo=6,zo=7,Cl=0,Bh=1,zh=2,Zn=0,kh=1,Vh=2,Hh=3,Gh=4,Wh=5,Xh=6,qh=7;var Rl=300,qi=301,Yi=302,ko=303,Vo=304,Gr=306,xs=1e3,pi=1001,Ho=1002,mn=1003,Yh=1004;var Us=1005;var nn=1006,Jr=1007;var mi=1008;var Dn=1009,Il=1010,Pl=1011,_s=1012,tc=1013,gi=1014,In=1015,Si=1016,nc=1017,ic=1018,$i=1020,Ll=35902,Dl=1021,Ul=1022,pn=1023,Nl=1024,Fl=1025,Hi=1026,Zi=1027,Ol=1028,sc=1029,Bl=1030,rc=1031;var oc=1033,dr=33776,fr=33777,pr=33778,mr=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,$o=37492,Zo=37496,Jo=37808,Ko=37809,jo=37810,Qo=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,ca=37820,la=37821,gr=36492,ha=36494,ua=36495,zl=36283,da=36284,fa=36285,pa=36286;var xr=2300,ma=2301,Kr=2302,Mc=2400,Sc=2401,bc=2402;var $h=3200,Zh=3201;var Jh=0,Kh=1,qn="",Kt="srgb",es="srgb-linear",Wr="linear",gt="srgb";var Ti=7680;var wc=519,jh=512,Qh=513,eu=514,kl=515,tu=516,nu=517,iu=518,su=519,Tc=35044;var Ec="300 es",Pn=2e3,_r=2001,Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vr=Math.PI/180,ga=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function os(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],b=s[4],y=s[7],B=s[2],R=s[5],I=s[8];return r[0]=o*v+a*E+l*B,r[3]=o*m+a*b+l*R,r[6]=o*d+a*y+l*I,r[1]=c*v+h*E+u*B,r[4]=c*m+h*b+u*R,r[7]=c*d+h*y+u*I,r[2]=f*v+p*E+g*B,r[5]=f*m+p*b+g*R,r[8]=f*d+p*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new st;function Vl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){let i=yr("canvas");return i.style.display="block",i}var Ac={};function ds(i){i in Ac||(Ac[i]=!0,console.warn(i))}function au(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function cu(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lu(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ct={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Ic=[.3127,.329],Pc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[es]:{primaries:Cc,whitePoint:Ic,transfer:Wr,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:Cc,whitePoint:Ic,transfer:gt,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});var Ei,va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=yr("canvas")),Ei.width=e.width,Ei.height=e.height;let n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hu=0,Mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eo(s[o].image)):r.push(eo(s[o]))}else r=eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,sn=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=nn,o=mi,a=pn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ts(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Rl;sn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(p+1)/2,B=(d+1)/2,R=(h+f)/4,I=(u+v)/4,O=(g+m)/4;return b>y&&b>B?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=I/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=O/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=I/r,s=O/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xa=class extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends xa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let B=Math.sqrt(b),R=Math.atan2(B,d*E);m=Math.sin(m*R)/B,a=Math.sin(a*R)/B}let y=a*E;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},to=new z,Dc=new jn,vi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Fs.subVectors(this.max,as),Ai.subVectors(e.a,as),Ci.subVectors(e.b,as),Ri.subVectors(e.c,as),kn.subVectors(Ci,Ai),Vn.subVectors(Ri,Ci),ri.subVectors(Ai,Ri);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ri.y,ri.x,0];return!no(t,Ai,Ci,Ri,Fs)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Ai,Ci,Ri,Fs))?!1:(Os.crossVectors(kn,Vn),t=[Os.x,Os.y,Os.z],no(t,Ai,Ci,Ri,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bn=[new z,new z,new z,new z,new z,new z,new z,new z],un=new z,Ns=new vi,Ai=new z,Ci=new z,Ri=new z,kn=new z,Vn=new z,ri=new z,as=new z,Fs=new z,Os=new z,oi=new z;function no(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);let a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var du=new vi,cs=new z,io=new z,xi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(io)),this.expandByPoint(cs.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new z,so=new z,Bs=new z,Hn=new z,ro=new z,zs=new z,oo=new z,ys=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){so.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(so);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=Hn.dot(this.direction),l=-Hn.dot(Bs),c=Hn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(so).addScaledVector(Bs,f),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){ro.subVectors(t,e),zs.subVectors(n,e),oo.crossVectors(ro,zs);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);let l=a*this.direction.dot(zs.crossVectors(Hn,zs));if(l<0)return null;let c=a*this.direction.dot(ro.cross(Hn));if(c<0||l+c>o)return null;let h=-a*Hn.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,pu)}lookAt(e,t,n){let s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Gn.crossVectors(n,Qt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Gn.crossVectors(n,Qt)),Gn.normalize(),ks.crossVectors(Qt,Gn),s[0]=Gn.x,s[4]=ks.x,s[8]=Qt.x,s[1]=Gn.y,s[5]=ks.y,s[9]=Qt.y,s[2]=Gn.z,s[6]=ks.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],b=n[7],y=n[11],B=n[15],R=s[0],I=s[4],O=s[8],w=s[12],M=s[1],L=s[5],te=s[9],q=s[13],Z=s[2],re=s[6],ee=s[10],ye=s[14],ie=s[3],Pe=s[7],Le=s[11],N=s[15];return r[0]=o*R+a*M+l*Z+c*ie,r[4]=o*I+a*L+l*re+c*Pe,r[8]=o*O+a*te+l*ee+c*Le,r[12]=o*w+a*q+l*ye+c*N,r[1]=h*R+u*M+f*Z+p*ie,r[5]=h*I+u*L+f*re+p*Pe,r[9]=h*O+u*te+f*ee+p*Le,r[13]=h*w+u*q+f*ye+p*N,r[2]=g*R+v*M+m*Z+d*ie,r[6]=g*I+v*L+m*re+d*Pe,r[10]=g*O+v*te+m*ee+d*Le,r[14]=g*w+v*q+m*ye+d*N,r[3]=E*R+b*M+y*Z+B*ie,r[7]=E*I+b*L+y*re+B*Pe,r[11]=E*O+b*te+y*ee+B*Le,r[15]=E*w+b*q+y*ye+B*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,b=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,y=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,B=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,R=t*E+n*b+s*y+r*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=E*I,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*I,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*I,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*I,e[4]=b*I,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*I,e[8]=y*I,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*d-t*u*d)*I,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*d+t*a*d)*I,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*I,e[12]=B*I,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*I,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,E=l*c,b=l*h,y=l*u,B=n.x,R=n.y,I=n.z;return s[0]=(1-(v+d))*B,s[1]=(p+y)*B,s[2]=(g-b)*B,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(f+d))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*I,s[9]=(m-E)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);let c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Pn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===Pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_r)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,p=(n+s)*h,g,v;if(a===Pn)g=(o+r)*u,v=-2*u;else if(a===_r)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new z,dn=new bt,fu=new z(0,0,0),pu=new z(1,1,1),Gn=new z,ks=new z,Qt=new z,Uc=new bt,Nc=new jn,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mu=0,Fc=new z,Pi=new jn,Tn=new bt,Vs=new z,ls=new z,gu=new z,vu=new jn,Oc=new z(1,0,0),Bc=new z(0,1,0),zc=new z(0,0,1),kc={type:"added"},xu={type:"removed"},Li={type:"childadded",child:null},ao={type:"childremoved",child:null},rn=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Un,n=new jn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new st}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ls,Vs,this.up):Tn.lookAt(Vs,ls,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new z,En=new z,co=new z,An=new z,Di=new z,Ui=new z,Vc=new z,lo=new z,ho=new z,uo=new z,fo=new Et,po=new Et,mo=new Et,Yn=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),En.subVectors(n,t),co.subVectors(e,t);let o=fn.dot(fn),a=fn.dot(En),l=fn.dot(co),c=En.dot(En),h=En.dot(co),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),En.subVectors(e,t),fn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),fn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Di.subVectors(s,n),Ui.subVectors(r,n),lo.subVectors(e,n);let l=Di.dot(lo),c=Ui.dot(lo);if(l<=0&&c<=0)return t.copy(n);ho.subVectors(e,s);let h=Di.dot(ho),u=Ui.dot(ho);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Di,o);uo.subVectors(e,r);let p=Di.dot(uo),g=Ui.dot(uo);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ui,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Vc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Vc,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Di,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=ru(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=go(o,r,e+1/3),this.g=go(o,r,e),this.b=go(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ct.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Bt(Wt.r*255,0,255))*65536+Math.round(Bt(Wt.g*255,0,255))*256+Math.round(Bt(Wt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kt){ct.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Hs);let n=jr(Wn.h,Hs.h,t),s=jr(Wn.s,Hs.s,t),r=jr(Wn.l,Hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new lt;lt.NAMES=Hl;var _u=0,Qn=class extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=ts(),this.name="",this.blending=Vi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Mn=class extends Qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new z,Gs=new Ne,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}};var wr=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},yu=0,cn=new bt,vo=new rn,Ni=new z,en=new vi,hs=new vi,Ft=new z,Rt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?Tr:wr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(en.min,hs.min),en.expandByPoint(Ft),Ft.addVectors(en.max,hs.max),en.expandByPoint(Ft)):(en.expandByPoint(hs.min),en.expandByPoint(hs.max))}en.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),Ft.add(Ni)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new z,l[O]=new z;let c=new z,h=new z,u=new z,f=new Ne,p=new Ne,g=new Ne,v=new z,m=new z;function d(O,w,M){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[O].add(v),a[w].add(v),a[M].add(v),l[O].add(m),l[w].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,w=E.length;O<w;++O){let M=E[O],L=M.start,te=M.count;for(let q=L,Z=L+te;q<Z;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let b=new z,y=new z,B=new z,R=new z;function I(O){B.fromBufferAttribute(s,O),R.copy(B);let w=a[O];b.copy(w),b.sub(B.multiplyScalar(B.dot(w))).normalize(),y.crossVectors(R,w);let L=y.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,L)}for(let O=0,w=E.length;O<w;++O){let M=E[O],L=M.start,te=M.count;for(let q=L,Z=L+te;q<Z;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new bt,ai=new ys,Ws=new xi,Gc=new z,Xs=new z,qs=new z,Ys=new z,xo=new z,$s=new z,Wc=new z,Zs=new z,dt=class extends rn{constructor(e=new Rt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(xo.fromBufferAttribute(u,e),o?$s.addScaledVector(xo,h):$s.addScaledVector(xo.sub(t),h))}t.add($s)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Ws.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ws,Gc)===null||ai.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,B=b;y<B;y+=3){let R=a.getX(y),I=a.getX(y+1),O=a.getX(y+2);s=Js(this,d,e,n,c,h,u,R,I,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Js(this,o,e,n,c,h,u,E,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,B=b;y<B;y+=3){let R=y,I=y+1,O=y+2;s=Js(this,d,e,n,c,h,u,R,I,O),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=m,b=m+1,y=m+2;s=Js(this,o,e,n,c,h,u,E,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mu(i,e,t,n,s,r,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);let h=Mu(i,e,t,n,Xs,qs,Ys,Wc);if(h){let u=new z;Yn.getBarycoord(Wc,Xs,qs,Ys,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,l,c,u,new Ne)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,l,c,u,new Ne)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Yn.getNormal(Xs,qs,Ys,f.normal),h.face=f,h.barycoord=u}return h}var Pt=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(v,m,d,E,b,y,B,R,I,O,w){let M=y/I,L=B/O,te=y/2,q=B/2,Z=R/2,re=I+1,ee=O+1,ye=0,ie=0,Pe=new z;for(let Le=0;Le<ee;Le++){let N=Le*L-q;for(let Y=0;Y<re;Y++){let oe=Y*M-te;Pe[v]=oe*E,Pe[m]=N*b,Pe[d]=Z,c.push(Pe.x,Pe.y,Pe.z),Pe[v]=0,Pe[m]=0,Pe[d]=R>0?1:-1,h.push(Pe.x,Pe.y,Pe.z),u.push(Y/I),u.push(1-Le/O),ye+=1}}for(let Le=0;Le<O;Le++)for(let N=0;N<I;N++){let Y=f+N+re*Le,oe=f+N+re*(Le+1),P=f+(N+1)+re*(Le+1),F=f+(N+1)+re*Le;l.push(Y,oe,F),l.push(oe,P,F),ie+=6}a.addGroup(p,ie,w),p+=ie,f+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Ji(i[t]);for(let s in n)e[s]=n[s]}return e}function Su(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var bu={clone:Ji,merge:Yt},wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Er=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new z,Xc=new Ne,qc=new Ne,Ot=class extends Er{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,ya=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Fi,Oi,e,t);a.layers=this.layers,this.add(a);let l=new Ot(Fi,Oi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ar=class extends sn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pt(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:$n});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=nn),new ya(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},_o=new z,Eu=new z,Au=new st,Rn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_o.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Au.getNormalMatrix(e),s=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new xi,Ks=new z,Cr=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-p,y-d).normalize(),n[1].setComponents(l+r,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+h,m+g,y+E).normalize(),n[3].setComponents(l-o,f-h,m-g,y-E).normalize(),n[4].setComponents(l-a,f-u,m-v,y-b).normalize(),t===Pn)n[5].setComponents(l+a,f+u,m+v,y+b).normalize();else if(t===_r)n[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ks.x=s.normal.x>0?e.max.x:e.min.x,Ks.y=s.normal.y>0?e.max.y:e.min.y,Ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cu(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Nn=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let b=0;b<c;b++){let y=b*u-r;g.push(y,-E,0),v.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let b=E+c*d,y=E+c*(d+1),B=E+1+c*(d+1),R=E+1+c*d;p.push(b,y,R),p.push(y,B,R)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Ru,alphahash_pars_fragment:Iu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:$u,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:cd,envmap_pars_fragment:ld,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:vd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:_d,lights_pars_begin:yd,lights_toon_fragment:Sd,lights_toon_pars_fragment:bd,lights_phong_fragment:wd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ed,lights_physical_pars_fragment:Ad,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Vd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:$d,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:cf,roughnessmap_fragment:lf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:vf,skinnormal_vertex:xf,specularmap_fragment:_f,specularmap_pars_fragment:yf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:wf,uv_pars_fragment:Tf,uv_pars_vertex:Ef,uv_vertex:Af,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:kf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:$f,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:cp},ze={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},yn={basic:{uniforms:Yt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Yt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Yt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Yt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Yt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Yt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Yt([ze.points,ze.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Yt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Yt([ze.common,ze.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Yt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Yt([ze.sprite,ze.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Yt([ze.common,ze.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Yt([ze.lights,ze.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};yn.physical={uniforms:Yt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var js={r:0,b:0,g:0},li=new Un,lp=new bt;function hp(i,e,t,n,s,r,o){let a=new lt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function v(E){let b=!1,y=g(E);y===null?d(a,l):y&&y.isColor&&(d(y,1),b=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===Gr)?(h===void 0&&(h=new dt(new Pt(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ji(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(b.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(li)),h.material.toneMapped=ct.getTransfer(y.colorSpace)!==gt,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new Nn(2,2),new At({name:"BackgroundMaterial",uniforms:Ji(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(js,Gl(i)),n.buffers.color.setClear(js.r,js.g,js.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:v,addToRenderList:m}}function up(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,L,te,q,Z){let re=!1,ee=u(q,te,L);r!==ee&&(r=ee,c(r.object)),re=p(M,q,te,Z),re&&g(M,q,te,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,y(M,L,te,q),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,te){let q=te.wireframe===!0,Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let re=Z[L.id];re===void 0&&(re={},Z[L.id]=re);let ee=re[q];return ee===void 0&&(ee=f(l()),re[q]=ee),ee}function f(M){let L=[],te=[],q=[];for(let Z=0;Z<t;Z++)L[Z]=0,te[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:te,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,L,te,q){let Z=r.attributes,re=L.attributes,ee=0,ye=te.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let Le=Z[ie],N=re[ie];if(N===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),Le===void 0||Le.attribute!==N||N&&Le.data!==N.data)return!0;ee++}return r.attributesNum!==ee||r.index!==q}function g(M,L,te,q){let Z={},re=L.attributes,ee=0,ye=te.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let Le=re[ie];Le===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(Le=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(Le=M.instanceColor));let N={};N.attribute=Le,Le&&Le.data&&(N.data=Le.data),Z[ie]=N,ee++}r.attributes=Z,r.attributesNum=ee,r.index=q}function v(){let M=r.newAttributes;for(let L=0,te=M.length;L<te;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){let te=r.newAttributes,q=r.enabledAttributes,Z=r.attributeDivisors;te[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),Z[M]!==L&&(i.vertexAttribDivisor(M,L),Z[M]=L)}function E(){let M=r.newAttributes,L=r.enabledAttributes;for(let te=0,q=L.length;te<q;te++)L[te]!==M[te]&&(i.disableVertexAttribArray(te),L[te]=0)}function b(M,L,te,q,Z,re,ee){ee===!0?i.vertexAttribIPointer(M,L,te,Z,re):i.vertexAttribPointer(M,L,te,q,Z,re)}function y(M,L,te,q){v();let Z=q.attributes,re=te.getAttributes(),ee=L.defaultAttributeValues;for(let ye in re){let ie=re[ye];if(ie.location>=0){let Pe=Z[ye];if(Pe===void 0&&(ye==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),ye==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),Pe!==void 0){let Le=Pe.normalized,N=Pe.itemSize,Y=e.get(Pe);if(Y===void 0)continue;let oe=Y.buffer,P=Y.type,F=Y.bytesPerElement,Q=P===i.INT||P===i.UNSIGNED_INT||Pe.gpuType===tc;if(Pe.isInterleavedBufferAttribute){let le=Pe.data,ne=le.stride,me=Pe.offset;if(le.isInstancedInterleavedBuffer){for(let ae=0;ae<ie.locationSize;ae++)d(ie.location+ae,le.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<ie.locationSize;ae++)m(ie.location+ae);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ae=0;ae<ie.locationSize;ae++)b(ie.location+ae,N/ie.locationSize,P,Le,ne*F,(me+N/ie.locationSize*ae)*F,Q)}else{if(Pe.isInstancedBufferAttribute){for(let le=0;le<ie.locationSize;le++)d(ie.location+le,Pe.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let le=0;le<ie.locationSize;le++)m(ie.location+le);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let le=0;le<ie.locationSize;le++)b(ie.location+le,N/ie.locationSize,P,Le,N*F,N/ie.locationSize*le*F,Q)}}else if(ee!==void 0){let Le=ee[ye];if(Le!==void 0)switch(Le.length){case 2:i.vertexAttrib2fv(ie.location,Le);break;case 3:i.vertexAttrib3fv(ie.location,Le);break;case 4:i.vertexAttrib4fv(ie.location,Le);break;default:i.vertexAttrib1fv(ie.location,Le)}}}}E()}function B(){O();for(let M in n){let L=n[M];for(let te in L){let q=L[te];for(let Z in q)h(q[Z].object),delete q[Z];delete L[te]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let te in L){let q=L[te];for(let Z in q)h(q[Z].object),delete q[Z];delete L[te]}delete n[M.id]}function I(M){for(let L in n){let te=n[L];if(te[M.id]===void 0)continue;let q=te[M.id];for(let Z in q)h(q[Z].object),delete q[Z];delete te[M.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function dp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let O=I===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!O)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:B,maxSamples:R}}function pp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Rn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,b=E*4,y=d.clippingState||null;l.value=y,y=h(g,f,b,p);for(let B=0;B!==b;++B)y[B]=t[B];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,y=p;b!==v;++b,y+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function mp(i){let e=new WeakMap;function t(o,a){return a===ko?o.mapping=qi:a===Vo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ko||a===Vo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ma(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ms=class extends Er{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zi=4,Yc=[.125,.215,.35,.446,.526,.582],fi=20,yo=new Ms,$c=new lt,Mo=null,So=0,bo=0,wo=!1,ui=(1+Math.sqrt(5))/2,Bi=1/ui,Zc=[new z(-ui,Bi,0),new z(ui,Bi,0),new z(-Bi,0,ui),new z(Bi,0,ui),new z(0,ui,-Bi),new z(0,ui,Bi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,So,bo),this._renderer.xr.enabled=wo,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Si,format:pn,colorSpace:es,depthBuffer:!1},s=Jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=vp(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($c),h.toneMapping=Zn,h.autoClear=!1;let p=new Mn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new dt(new Pt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy($c),v=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let b=this._cubeSize;Qs(s,E*b,d>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qi||e.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zc[(s-r-1)%Zc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new dt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);let d=[],E=0;for(let I=0;I<fi;++I){let O=I/v,w=Math.exp(-O*O/2);d.push(w),I===0?E+=w:I<m&&(E+=2*w)}for(let I=0;I<d.length;I++)d[I]=d[I]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let y=this._sizeLods[s],B=3*y*(s>b-zi?s-b+zi:0),R=4*(this._cubeSize-y);Qs(t,B,R,3*y,2*y),l.setRenderTarget(t),l.render(u,yo)}};function gp(i){let e=[],t=[],n=[],s=i,r=i-zi+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zi?l=Yc[o-i+zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),b=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let R=0;R<p;R++){let I=R%3*2/3-1,O=R>2?0:-1,w=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];E.set(w,v*g*R),b.set(f,m*g*R);let M=[R,R,R,R,R,R];y.set(M,d*g*R)}let B=new Rt;B.setAttribute("position",new zt(E,v)),B.setAttribute("uv",new zt(b,m)),B.setAttribute("faceIndex",new zt(y,d)),e.push(B),s>zi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jc(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vp(i,e,t){let n=new Float32Array(fi),s=new z(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Kc(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function jc(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ko||l===Vo,h=l===qi||l===Yi;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rr(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Rr(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _p(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yp(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let b=0,y=E.length;b<y;b+=3){let B=E[b+0],R=E[b+1],I=E[b+2];f.push(B,R,R,I,I,B)}}else if(g!==void 0){let E=g.array;v=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){let B=b+0,R=b+1,I=b+2;f.push(B,R,R,I,I,B)}}else return;let m=new(Vl(f)?Tr:wr)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mp(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bp(i,e,t){let n=new WeakMap,s=new Et;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*B*4*u),I=new Sr(R,y,B,u);I.type=In,I.needsUpdate=!0;let O=b*4;for(let M=0;M<u;M++){let L=m[M],te=d[M],q=E[M],Z=y*B*4*M;for(let re=0;re<L.count;re++){let ee=re*O;p===!0&&(s.fromBufferAttribute(L,re),R[Z+ee+0]=s.x,R[Z+ee+1]=s.y,R[Z+ee+2]=s.z,R[Z+ee+3]=0),g===!0&&(s.fromBufferAttribute(te,re),R[Z+ee+4]=s.x,R[Z+ee+5]=s.y,R[Z+ee+6]=s.z,R[Z+ee+7]=0),v===!0&&(s.fromBufferAttribute(q,re),R[Z+ee+8]=s.x,R[Z+ee+9]=s.y,R[Z+ee+10]=s.z,R[Z+ee+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new Ne(y,B)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ir=class extends sn{constructor(e,t,n,s,r,o,a,l,c,h=Hi){if(h!==Hi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=gi),n===void 0&&h===Zi&&(n=$i),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xl=new sn,Qc=new Ir(1,1),ql=new Sr,Yl=new _a,$l=new Ar,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function ns(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Rp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),Dt(t,n)}}function Ip(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;il.set(n),i.uniformMatrix3fv(this.addr,!1,il),Dt(t,n)}}function Pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;nl.set(n),i.uniformMatrix4fv(this.addr,!1,nl),Dt(t,n)}}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Fp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=kl,r=Qc):r=Xl,t.setTexture2D(e||r,s)}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yl,s)}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$l,s)}function Gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ql,s)}function Wp(i){switch(i){case 5126:return Tp;case 35664:return Ep;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Ip;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Dp;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,e){i.uniform1fv(this.addr,e)}function qp(i,e){let t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Yp(i,e){let t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function $p(i,e){let t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Zp(i,e){let t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jp(i,e){let t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kp(i,e){let t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jp(i,e){i.uniform1iv(this.addr,e)}function Qp(i,e){i.uniform2iv(this.addr,e)}function em(i,e){i.uniform3iv(this.addr,e)}function tm(i,e){i.uniform4iv(this.addr,e)}function nm(i,e){i.uniform1uiv(this.addr,e)}function im(i,e){i.uniform2uiv(this.addr,e)}function sm(i,e){i.uniform3uiv(this.addr,e)}function rm(i,e){i.uniform4uiv(this.addr,e)}function om(i,e,t){let n=this.cache,s=e.length,r=Xr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xl,r[o])}function am(i,e,t){let n=this.cache,s=e.length,r=Xr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yl,r[o])}function cm(i,e,t){let n=this.cache,s=e.length,r=Xr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$l,r[o])}function lm(i,e,t){let n=this.cache,s=e.length,r=Xr(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ql,r[o])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return $p;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return lm}}var Sa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}},ba=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}},wa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},To=/(\w+)(\])?(\[|\.)?/g;function rl(i,e){i.seq.push(e),i.map[e.id]=e}function um(i,e,t){let n=i.name,s=n.length;for(To.lastIndex=0;;){let r=To.exec(n),o=To.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rl(t,c===void 0?new Sa(a,i,e):new ba(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new wa(a),rl(t,u)),t=u}}}var Wi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);um(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ol(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dm=37297,fm=0;function pm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var al=new st;function mm(i){ct._getMatrix(al,ct.workingColorSpace,i);let e=`mat3( ${al.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pm(i.getShaderSource(e),o)}else return s}function gm(i,e){let t=mm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,e){let t;switch(e){case kh:t="Linear";break;case Vh:t="Reinhard";break;case Hh:t="Cineon";break;case Gh:t="ACESFilmic";break;case Xh:t="AgX";break;case qh:t="Neutral";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var er=new z;function xm(){ct.getLuminanceCoefficients(er);let i=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function ym(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fs(i){return i!==""}function ll(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Sm,wm)}var bm=new Map;function wm(i,e){let t=rt[e];if(t===void 0){let n=bm.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}var Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Tm,Em)}function Em(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Am(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Im(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Bh:e="ENVMAP_BLENDING_MIX";break;case zh:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Am(t),c=Cm(t),h=Rm(t),u=Im(t),f=Pm(t),p=_m(t),g=ym(r),v=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(m=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,gm("linearToOutputTexel",t.outputColorSpace),xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),o=Ta(o),o=ll(o,t),o=hl(o,t),a=Ta(a),a=ll(a,t),a=hl(a,t),o=ul(o),a=ul(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=E+m+o,y=E+d+a,B=ol(s,s.VERTEX_SHADER,b),R=ol(s,s.FRAGMENT_SHADER,y);s.attachShader(v,B),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(L){if(i.debug.checkShaderErrors){let te=s.getProgramInfoLog(v).trim(),q=s.getShaderInfoLog(B).trim(),Z=s.getShaderInfoLog(R).trim(),re=!0,ee=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,B,R);else{let ye=cl(s,B,"vertex"),ie=cl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+ye+`
`+ie)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(q===""||Z==="")&&(ee=!1);ee&&(L.diagnostics={runnable:re,programLog:te,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(B),s.deleteShader(R),O=new Wi(s,v),w=Mm(s,v)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,dm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=R,this}var Dm=0,Ea=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Aa(e),t.set(e,n)),n}},Aa=class{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}};function Um(i,e,t,n,s,r,o){let a=new br,l=new Ea,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,te,q){let Z=te.fog,re=q.geometry,ee=w.isMeshStandardMaterial?te.environment:null,ye=(w.isMeshStandardMaterial?t:e).get(w.envMap||ee),ie=ye&&ye.mapping===Gr?ye.image.height:null,Pe=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Le=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,N=Le!==void 0?Le.length:0,Y=0;re.morphAttributes.position!==void 0&&(Y=1),re.morphAttributes.normal!==void 0&&(Y=2),re.morphAttributes.color!==void 0&&(Y=3);let oe,P,F,Q;if(Pe){let Qe=yn[Pe];oe=Qe.vertexShader,P=Qe.fragmentShader}else oe=w.vertexShader,P=w.fragmentShader,l.update(w),F=l.getVertexShaderID(w),Q=l.getFragmentShaderID(w);let le=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),me=q.isInstancedMesh===!0,ae=q.isBatchedMesh===!0,Oe=!!w.map,J=!!w.matcap,he=!!ye,A=!!w.aoMap,De=!!w.lightMap,ue=!!w.bumpMap,Te=!!w.normalMap,fe=!!w.displacementMap,We=!!w.emissiveMap,Ie=!!w.metalnessMap,T=!!w.roughnessMap,_=w.anisotropy>0,C=w.clearcoat>0,H=w.dispersion>0,K=w.iridescence>0,G=w.sheen>0,we=w.transmission>0,Me=_&&!!w.anisotropyMap,Ue=C&&!!w.clearcoatMap,je=C&&!!w.clearcoatNormalMap,ve=C&&!!w.clearcoatRoughnessMap,Ce=K&&!!w.iridescenceMap,qe=K&&!!w.iridescenceThicknessMap,Ye=G&&!!w.sheenColorMap,Be=G&&!!w.sheenRoughnessMap,de=!!w.specularMap,_e=!!w.specularColorMap,ke=!!w.specularIntensityMap,U=we&&!!w.transmissionMap,Ee=we&&!!w.thicknessMap,$=!!w.gradientMap,pe=!!w.alphaMap,Re=w.alphaTest>0,be=!!w.alphaHash,$e=!!w.extensions,it=Zn;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=i.toneMapping);let ht={shaderID:Pe,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:P,defines:w.defines,customVertexShaderID:F,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ae,batchingColor:ae&&q._colorsTexture!==null,instancing:me,instancingColor:me&&q.instanceColor!==null,instancingMorph:me&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:es,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:J,envMap:he,envMapMode:he&&ye.mapping,envMapCubeUVHeight:ie,aoMap:A,lightMap:De,bumpMap:ue,normalMap:Te,displacementMap:f&&fe,emissiveMap:We,normalMapObjectSpace:Te&&w.normalMapType===Kh,normalMapTangentSpace:Te&&w.normalMapType===Jh,metalnessMap:Ie,roughnessMap:T,anisotropy:_,anisotropyMap:Me,clearcoat:C,clearcoatMap:Ue,clearcoatNormalMap:je,clearcoatRoughnessMap:ve,dispersion:H,iridescence:K,iridescenceMap:Ce,iridescenceThicknessMap:qe,sheen:G,sheenColorMap:Ye,sheenRoughnessMap:Be,specularMap:de,specularColorMap:_e,specularIntensityMap:ke,transmission:we,transmissionMap:U,thicknessMap:Ee,gradientMap:$,opaque:w.transparent===!1&&w.blending===Vi&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:Re,alphaHash:be,combine:w.combine,mapUv:Oe&&v(w.map.channel),aoMapUv:A&&v(w.aoMap.channel),lightMapUv:De&&v(w.lightMap.channel),bumpMapUv:ue&&v(w.bumpMap.channel),normalMapUv:Te&&v(w.normalMap.channel),displacementMapUv:fe&&v(w.displacementMap.channel),emissiveMapUv:We&&v(w.emissiveMap.channel),metalnessMapUv:Ie&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:Me&&v(w.anisotropyMap.channel),clearcoatMapUv:Ue&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(w.sheenRoughnessMap.channel),specularMapUv:de&&v(w.specularMap.channel),specularColorMapUv:_e&&v(w.specularColorMap.channel),specularIntensityMapUv:ke&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:Ee&&v(w.thicknessMap.channel),alphaMapUv:pe&&v(w.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Te||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!re.attributes.uv&&(Oe||pe),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:q.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&ct.getTransfer(w.map.colorSpace)===gt,decodeVideoTextureEmissive:We&&w.emissiveMap.isVideoTexture===!0&&ct.getTransfer(w.emissiveMap.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===It,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(E(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],L;if(M){let te=yn[M];L=bu.clone(te.uniforms)}else L=w.uniforms;return L}function B(w,M){let L;for(let te=0,q=h.length;te<q;te++){let Z=h[te];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new Lm(i,M,w,r),h.push(L)),L}function R(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function I(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:B,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:O}}function Nm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Fm),n.length>1&&n.sort(f||fl),s.length>1&&s.sort(f||fl)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pl,i.set(n,[o])):s>=r.length?(o=new pl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new lt};break;case"SpotLight":t={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function zm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var km=0;function Vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hm(i){let e=new Bm,t=zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new bt,o=new bt;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,b=0,y=0,B=0,R=0,I=0;c.sort(Vm);for(let w=0,M=c.length;w<M;w++){let L=c[w],te=L.color,q=L.intensity,Z=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=te.r*q,u+=te.g*q,f+=te.b*q;else if(L.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(L.sh.coefficients[ee],q);I++}else if(L.isDirectionalLight){let ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ye=L.shadow,ie=t.get(L);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=L.shadow.matrix,E++}n.directional[p]=ee,p++}else if(L.isSpotLight){let ee=e.get(L);ee.position.setFromMatrixPosition(L.matrixWorld),ee.color.copy(te).multiplyScalar(q),ee.distance=Z,ee.coneCos=Math.cos(L.angle),ee.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ee.decay=L.decay,n.spot[v]=ee;let ye=L.shadow;if(L.map&&(n.spotLightMap[B]=L.map,B++,ye.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=ye.matrix,L.castShadow){let ie=t.get(L);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=re,y++}v++}else if(L.isRectAreaLight){let ee=e.get(L);ee.color.copy(te).multiplyScalar(q),ee.halfWidth.set(L.width*.5,0,0),ee.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=ee,m++}else if(L.isPointLight){let ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),ee.distance=L.distance,ee.decay=L.decay,L.castShadow){let ye=L.shadow,ie=t.get(L);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,ie.shadowCameraNear=ye.camera.near,ie.shadowCameraFar=ye.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=ee,g++}else if(L.isHemisphereLight){let ee=e.get(L);ee.skyColor.copy(L.color).multiplyScalar(q),ee.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[d]=ee,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==E||O.numPointShadows!==b||O.numSpotShadows!==y||O.numSpotMaps!==B||O.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,O.directionalLength=p,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=E,O.numPointShadows=b,O.numSpotShadows=y,O.numSpotMaps=B,O.numLightProbes=I,n.version=km++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let b=c[d];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ml(i){let e=new Hm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gm(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ml(i),e.set(s,[a])):r>=o.length?(a=new ml(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ca=class extends Qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(i,e,t){let n=new Cr,s=new Ne,r=new Ne,o=new Et,a=new Ca({depthPacking:Zh}),l=new Ra,c={},h=t.maxTextureSize,u={[Jn]:It,[It]:Jn,[tn]:tn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let d=this.type;this.render=function(R,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),te=i.state;te.setBlending($n),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let q=d!==Cn&&this.type===Cn,Z=d===Cn&&this.type!==Cn;for(let re=0,ee=R.length;re<ee;re++){let ye=R[re],ie=ye.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let Pe=ie.getFrameExtents();if(s.multiply(Pe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Pe.x),s.x=r.x*Pe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Pe.y),s.y=r.y*Pe.y,ie.mapSize.y=r.y)),ie.map===null||q===!0||Z===!0){let N=this.type!==Cn?{minFilter:mn,magFilter:mn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new vn(s.x,s.y,N),ie.map.texture.name=ye.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let Le=ie.getViewportCount();for(let N=0;N<Le;N++){let Y=ie.getViewport(N);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),te.viewport(o),ie.updateMatrices(ye,N),n=ie.getFrustum(),y(I,O,ie.camera,ye,this.type)}ie.isPointLightShadow!==!0&&this.type===Cn&&E(ie,O),ie.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,L)};function E(R,I){let O=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,O,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,O,p,v,null)}function b(R,I,O,w){let M=null,L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let te=M.uuid,q=I.uuid,Z=c[te];Z===void 0&&(Z={},c[te]=Z);let re=Z[q];re===void 0&&(re=M.clone(),Z[q]=re,I.addEventListener("dispose",B)),M=re}if(M.visible=I.visible,M.wireframe=I.wireframe,w===Cn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let te=i.properties.get(M);te.light=O}return M}function y(R,I,O,w,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let q=e.update(R),Z=R.material;if(Array.isArray(Z)){let re=q.groups;for(let ee=0,ye=re.length;ee<ye;ee++){let ie=re[ee],Pe=Z[ie.materialIndex];if(Pe&&Pe.visible){let Le=b(R,Pe,w,M);R.onBeforeShadow(i,R,I,O,q,Le,ie),i.renderBufferDirect(O,null,q,Le,R,ie),R.onAfterShadow(i,R,I,O,q,Le,ie)}}}else if(Z.visible){let re=b(R,Z,w,M);R.onBeforeShadow(i,R,I,O,q,re,null),i.renderBufferDirect(O,null,q,re,R,null),R.onAfterShadow(i,R,I,O,q,re,null)}}let te=R.children;for(let q=0,Z=te.length;q<Z;q++)y(te[q],I,O,w,M)}function B(R){R.target.removeEventListener("dispose",B);for(let O in c){let w=c[O],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Ym={[Do]:Uo,[No]:Bo,[Fo]:zo,[Xi]:Oo,[Uo]:Do,[Bo]:No,[zo]:Fo,[Oo]:Xi};function $m(i,e){function t(){let U=!1,Ee=new Et,$=null,pe=new Et(0,0,0,0);return{setMask:function(Re){$!==Re&&!U&&(i.colorMask(Re,Re,Re,Re),$=Re)},setLocked:function(Re){U=Re},setClear:function(Re,be,$e,it,ht){ht===!0&&(Re*=it,be*=it,$e*=it),Ee.set(Re,be,$e,it),pe.equals(Ee)===!1&&(i.clearColor(Re,be,$e,it),pe.copy(Ee))},reset:function(){U=!1,$=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,Ee=!1,$=null,pe=null,Re=null;return{setReversed:function(be){if(Ee!==be){let $e=e.get("EXT_clip_control");Ee?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let it=Re;Re=null,this.setClear(it)}Ee=be},getReversed:function(){return Ee},setTest:function(be){be?le(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(be){$!==be&&!U&&(i.depthMask(be),$=be)},setFunc:function(be){if(Ee&&(be=Ym[be]),pe!==be){switch(be){case Do:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=be}},setLocked:function(be){U=be},setClear:function(be){Re!==be&&(Ee&&(be=1-be),i.clearDepth(be),Re=be)},reset:function(){U=!1,$=null,pe=null,Re=null,Ee=!1}}}function s(){let U=!1,Ee=null,$=null,pe=null,Re=null,be=null,$e=null,it=null,ht=null;return{setTest:function(Qe){U||(Qe?le(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(Qe){Ee!==Qe&&!U&&(i.stencilMask(Qe),Ee=Qe)},setFunc:function(Qe,ut,vt){($!==Qe||pe!==ut||Re!==vt)&&(i.stencilFunc(Qe,ut,vt),$=Qe,pe=ut,Re=vt)},setOp:function(Qe,ut,vt){(be!==Qe||$e!==ut||it!==vt)&&(i.stencilOp(Qe,ut,vt),be=Qe,$e=ut,it=vt)},setLocked:function(Qe){U=Qe},setClear:function(Qe){ht!==Qe&&(i.clearStencil(Qe),ht=Qe)},reset:function(){U=!1,Ee=null,$=null,pe=null,Re=null,be=null,$e=null,it=null,ht=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,b=null,y=null,B=null,R=null,I=new lt(0,0,0),O=0,w=!1,M=null,L=null,te=null,q=null,Z=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,ye=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ee=ye>=1):ie.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ee=ye>=2);let Pe=null,Le={},N=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new Et().fromArray(N),P=new Et().fromArray(Y);function F(U,Ee,$,pe){let Re=new Uint8Array(4),be=i.createTexture();i.bindTexture(U,be),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<$;$e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ee+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return be}let Q={};Q[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Xi),ue(!1),Te(xc),le(i.CULL_FACE),A($n);function le(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ne(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function me(U,Ee){return u[U]!==Ee?(i.bindFramebuffer(U,Ee),u[U]=Ee,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ee),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ae(U,Ee){let $=p,pe=!1;if(U){$=f.get(Ee),$===void 0&&($=[],f.set(Ee,$));let Re=U.textures;if($.length!==Re.length||$[0]!==i.COLOR_ATTACHMENT0){for(let be=0,$e=Re.length;be<$e;be++)$[be]=i.COLOR_ATTACHMENT0+be;$.length=Re.length,pe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pe=!0);pe&&i.drawBuffers($)}function Oe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let J={[di]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};J[bh]=i.MIN,J[wh]=i.MAX;let he={[Th]:i.ZERO,[Eh]:i.ONE,[Ah]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function A(U,Ee,$,pe,Re,be,$e,it,ht,Qe){if(U===$n){v===!0&&(ne(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),U!==yh){if(U!==m||Qe!==w){if((d!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),d=di,y=di),Qe)switch(U){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,b=null,B=null,R=null,I.set(0,0,0),O=0,m=U,w=Qe}return}Re=Re||Ee,be=be||$,$e=$e||pe,(Ee!==d||Re!==y)&&(i.blendEquationSeparate(J[Ee],J[Re]),d=Ee,y=Re),($!==E||pe!==b||be!==B||$e!==R)&&(i.blendFuncSeparate(he[$],he[pe],he[be],he[$e]),E=$,b=pe,B=be,R=$e),(it.equals(I)===!1||ht!==O)&&(i.blendColor(it.r,it.g,it.b,ht),I.copy(it),O=ht),m=U,w=!1}function De(U,Ee){U.side===tn?ne(i.CULL_FACE):le(i.CULL_FACE);let $=U.side===It;Ee&&($=!$),ue($),U.blending===Vi&&U.transparent===!1?A($n):A(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let pe=U.stencilWrite;a.setTest(pe),pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),We(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Te(U){U!==vh?(le(i.CULL_FACE),U!==L&&(U===xc?i.cullFace(i.BACK):U===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),L=U}function fe(U){U!==te&&(ee&&i.lineWidth(U),te=U)}function We(U,Ee,$){U?(le(i.POLYGON_OFFSET_FILL),(q!==Ee||Z!==$)&&(i.polygonOffset(Ee,$),q=Ee,Z=$)):ne(i.POLYGON_OFFSET_FILL)}function Ie(U){U?le(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+re-1),Pe!==U&&(i.activeTexture(U),Pe=U)}function _(U,Ee,$){$===void 0&&(Pe===null?$=i.TEXTURE0+re-1:$=Pe);let pe=Le[$];pe===void 0&&(pe={type:void 0,texture:void 0},Le[$]=pe),(pe.type!==U||pe.texture!==Ee)&&(Pe!==$&&(i.activeTexture($),Pe=$),i.bindTexture(U,Ee||Q[U]),pe.type=U,pe.texture=Ee)}function C(){let U=Le[Pe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(U){oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function Be(U){P.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),P.copy(U))}function de(U,Ee){let $=c.get(Ee);$===void 0&&($=new WeakMap,c.set(Ee,$));let pe=$.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(Ee,U.name),$.set(U,pe))}function _e(U,Ee){let pe=c.get(Ee).get(U);l.get(Ee)!==pe&&(i.uniformBlockBinding(Ee,pe,U.__bindingPointIndex),l.set(Ee,pe))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Pe=null,Le={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,b=null,y=null,B=null,R=null,I=new lt(0,0,0),O=0,w=!1,M=null,L=null,te=null,q=null,Z=null,oe.set(0,0,i.canvas.width,i.canvas.height),P.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ne,bindFramebuffer:me,drawBuffers:ae,useProgram:Oe,setBlending:A,setMaterial:De,setFlipSided:ue,setCullFace:Te,setLineWidth:fe,setPolygonOffset:We,setScissorTest:Ie,activeTexture:T,bindTexture:_,unbindTexture:C,compressedTexImage2D:H,compressedTexImage3D:K,texImage2D:Ce,texImage3D:qe,updateUBOMapping:de,uniformBlockBinding:_e,texStorage2D:je,texStorage3D:ve,texSubImage2D:G,texSubImage3D:we,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ue,scissor:Ye,viewport:Be,reset:ke}}function gl(i,e,t,n){let s=Zm(n);switch(t){case Dl:return i*e;case Nl:return i*e;case Fl:return i*e*2;case Ol:return i*e/s.components*s.byteLength;case sc:return i*e/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case rc:return i*e*2/s.components*s.byteLength;case Ul:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case oc:return i*e*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Xo:return Math.max(i,8)*Math.max(e,8)/2;case Yo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case gr:case ha:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zl:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zm(i){switch(i){case Dn:case Il:return{byteLength:1,components:1};case _s:case Pl:case Si:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case gi:case tc:case In:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jm(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):yr("canvas")}function v(T,_,C){let H=1,K=Ie(T);if((K.width>C||K.height>C)&&(H=C/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let G=Math.floor(H*K.width),we=Math.floor(H*K.height);u===void 0&&(u=g(G,we));let Me=_?g(G,we):u;return Me.width=G,Me.height=we,Me.getContext("2d").drawImage(T,0,0,G,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+we+")."),Me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,C,H,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=_;if(_===i.RED&&(C===i.FLOAT&&(G=i.R32F),C===i.HALF_FLOAT&&(G=i.R16F),C===i.UNSIGNED_BYTE&&(G=i.R8)),_===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.R8UI),C===i.UNSIGNED_SHORT&&(G=i.R16UI),C===i.UNSIGNED_INT&&(G=i.R32UI),C===i.BYTE&&(G=i.R8I),C===i.SHORT&&(G=i.R16I),C===i.INT&&(G=i.R32I)),_===i.RG&&(C===i.FLOAT&&(G=i.RG32F),C===i.HALF_FLOAT&&(G=i.RG16F),C===i.UNSIGNED_BYTE&&(G=i.RG8)),_===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RG8UI),C===i.UNSIGNED_SHORT&&(G=i.RG16UI),C===i.UNSIGNED_INT&&(G=i.RG32UI),C===i.BYTE&&(G=i.RG8I),C===i.SHORT&&(G=i.RG16I),C===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGB8UI),C===i.UNSIGNED_SHORT&&(G=i.RGB16UI),C===i.UNSIGNED_INT&&(G=i.RGB32UI),C===i.BYTE&&(G=i.RGB8I),C===i.SHORT&&(G=i.RGB16I),C===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),C===i.UNSIGNED_INT&&(G=i.RGBA32UI),C===i.BYTE&&(G=i.RGBA8I),C===i.SHORT&&(G=i.RGBA16I),C===i.INT&&(G=i.RGBA32I)),_===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),_===i.RGBA){let we=K?Wr:ct.getTransfer(H);C===i.FLOAT&&(G=i.RGBA32F),C===i.HALF_FLOAT&&(G=i.RGBA16F),C===i.UNSIGNED_BYTE&&(G=we===gt?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(T,_){let C;return T?_===null||_===gi||_===$i?C=i.DEPTH24_STENCIL8:_===In?C=i.DEPTH32F_STENCIL8:_===_s&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===$i?C=i.DEPTH_COMPONENT24:_===In?C=i.DEPTH_COMPONENT32F:_===_s&&(C=i.DEPTH_COMPONENT16),C}function B(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==mn&&T.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){let _=T.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&h.delete(_)}function I(T){let _=T.target;_.removeEventListener("dispose",I),M(_)}function O(T){let _=n.get(T);if(_.__webglInit===void 0)return;let C=T.source,H=f.get(C);if(H){let K=H[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(T),Object.keys(H).length===0&&f.delete(C)}n.remove(T)}function w(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let C=T.source,H=f.get(C);delete H[_.__cacheKey],o.memory.textures--}function M(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let K=0;K<_.__webglFramebuffer[H].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[H][K]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let C=T.textures;for(let H=0,K=C.length;H<K;H++){let G=n.get(C[H]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(C[H])}n.remove(T)}let L=0;function te(){L=0}function q(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function Z(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function re(T,_){let C=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){let H=T.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(C,T,_);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+_)}function ee(T,_){let C=n.get(T);if(T.version>0&&C.__version!==T.version){P(C,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+_)}function ye(T,_){let C=n.get(T);if(T.version>0&&C.__version!==T.version){P(C,T,_);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+_)}function ie(T,_){let C=n.get(T);if(T.version>0&&C.__version!==T.version){F(C,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+_)}let Pe={[xs]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},Le={[mn]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},N={[jh]:i.NEVER,[su]:i.ALWAYS,[Qh]:i.LESS,[kl]:i.LEQUAL,[eu]:i.EQUAL,[iu]:i.GEQUAL,[tu]:i.GREATER,[nu]:i.NOTEQUAL};function Y(T,_){if(_.type===In&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Jr||_.magFilter===Us||_.magFilter===mi||_.minFilter===nn||_.minFilter===Jr||_.minFilter===Us||_.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Pe[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Pe[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Pe[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Le[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Le[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,N[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===mn||_.minFilter!==Us&&_.minFilter!==mi||_.type===In&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(T,_){let C=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));let H=_.source,K=f.get(H);K===void 0&&(K={},f.set(H,K));let G=Z(_);if(G!==T.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),K[G].usedTimes++;let we=K[T.__cacheKey];we!==void 0&&(K[T.__cacheKey].usedTimes--,we.usedTimes===0&&w(_)),T.__cacheKey=G,T.__webglTexture=K[G].texture}return C}function P(T,_,C){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let K=oe(T,_),G=_.source;t.bindTexture(H,T.__webglTexture,i.TEXTURE0+C);let we=n.get(G);if(G.version!==we.__version||K===!0){t.activeTexture(i.TEXTURE0+C);let Me=ct.getPrimaries(ct.workingColorSpace),Ue=_.colorSpace===qn?null:ct.getPrimaries(_.colorSpace),je=_.colorSpace===qn||Me===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ve=v(_.image,!1,s.maxTextureSize);ve=We(_,ve);let Ce=r.convert(_.format,_.colorSpace),qe=r.convert(_.type),Ye=b(_.internalFormat,Ce,qe,_.colorSpace,_.isVideoTexture);Y(H,_);let Be,de=_.mipmaps,_e=_.isVideoTexture!==!0,ke=we.__version===void 0||K===!0,U=G.dataReady,Ee=B(_,ve);if(_.isDepthTexture)Ye=y(_.format===Zi,_.type),ke&&(_e?t.texStorage2D(i.TEXTURE_2D,1,Ye,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ve.width,ve.height,0,Ce,qe,null));else if(_.isDataTexture)if(de.length>0){_e&&ke&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,de[0].width,de[0].height);for(let $=0,pe=de.length;$<pe;$++)Be=de[$],_e?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Be.width,Be.height,Ce,qe,Be.data):t.texImage2D(i.TEXTURE_2D,$,Ye,Be.width,Be.height,0,Ce,qe,Be.data);_.generateMipmaps=!1}else _e?(ke&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,ve.width,ve.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,Ce,qe,ve.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ve.width,ve.height,0,Ce,qe,ve.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){_e&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,de[0].width,de[0].height,ve.depth);for(let $=0,pe=de.length;$<pe;$++)if(Be=de[$],_.format!==pn)if(Ce!==null)if(_e){if(U)if(_.layerUpdates.size>0){let Re=gl(Be.width,Be.height,_.format,_.type);for(let be of _.layerUpdates){let $e=Be.data.subarray(be*Re/Be.data.BYTES_PER_ELEMENT,(be+1)*Re/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,be,Be.width,Be.height,1,Ce,$e)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Be.width,Be.height,ve.depth,Ce,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ye,Be.width,Be.height,ve.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Be.width,Be.height,ve.depth,Ce,qe,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ye,Be.width,Be.height,ve.depth,0,Ce,qe,Be.data)}else{_e&&ke&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,de[0].width,de[0].height);for(let $=0,pe=de.length;$<pe;$++)Be=de[$],_.format!==pn?Ce!==null?_e?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Be.width,Be.height,Ce,qe,Be.data):t.texImage2D(i.TEXTURE_2D,$,Ye,Be.width,Be.height,0,Ce,qe,Be.data)}else if(_.isDataArrayTexture)if(_e){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,ve.width,ve.height,ve.depth),U)if(_.layerUpdates.size>0){let $=gl(ve.width,ve.height,_.format,_.type);for(let pe of _.layerUpdates){let Re=ve.data.subarray(pe*$/ve.data.BYTES_PER_ELEMENT,(pe+1)*$/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ve.width,ve.height,1,Ce,qe,Re)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ce,qe,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ve.width,ve.height,ve.depth,0,Ce,qe,ve.data);else if(_.isData3DTexture)_e?(ke&&t.texStorage3D(i.TEXTURE_3D,Ee,Ye,ve.width,ve.height,ve.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ce,qe,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ve.width,ve.height,ve.depth,0,Ce,qe,ve.data);else if(_.isFramebufferTexture){if(ke)if(_e)t.texStorage2D(i.TEXTURE_2D,Ee,Ye,ve.width,ve.height);else{let $=ve.width,pe=ve.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ye,$,pe,0,Ce,qe,null),$>>=1,pe>>=1}}else if(de.length>0){if(_e&&ke){let $=Ie(de[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,$.width,$.height)}for(let $=0,pe=de.length;$<pe;$++)Be=de[$],_e?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ce,qe,Be):t.texImage2D(i.TEXTURE_2D,$,Ye,Ce,qe,Be);_.generateMipmaps=!1}else if(_e){if(ke){let $=Ie(ve);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,qe,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Ce,qe,ve);m(_)&&d(H),we.__version=G.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function F(T,_,C){if(_.image.length!==6)return;let H=oe(T,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+C);let G=n.get(K);if(K.version!==G.__version||H===!0){t.activeTexture(i.TEXTURE0+C);let we=ct.getPrimaries(ct.workingColorSpace),Me=_.colorSpace===qn?null:ct.getPrimaries(_.colorSpace),Ue=_.colorSpace===qn||we===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let je=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,Ce=[];for(let pe=0;pe<6;pe++)!je&&!ve?Ce[pe]=v(_.image[pe],!0,s.maxCubemapSize):Ce[pe]=ve?_.image[pe].image:_.image[pe],Ce[pe]=We(_,Ce[pe]);let qe=Ce[0],Ye=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),de=b(_.internalFormat,Ye,Be,_.colorSpace),_e=_.isVideoTexture!==!0,ke=G.__version===void 0||H===!0,U=K.dataReady,Ee=B(_,qe);Y(i.TEXTURE_CUBE_MAP,_);let $;if(je){_e&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,de,qe.width,qe.height);for(let pe=0;pe<6;pe++){$=Ce[pe].mipmaps;for(let Re=0;Re<$.length;Re++){let be=$[Re];_.format!==pn?Ye!==null?_e?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,be.width,be.height,Ye,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,de,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,be.width,be.height,Ye,Be,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,de,be.width,be.height,0,Ye,Be,be.data)}}}else{if($=_.mipmaps,_e&&ke){$.length>0&&Ee++;let pe=Ie(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,de,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ve){_e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce[pe].width,Ce[pe].height,Ye,Be,Ce[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,Ce[pe].width,Ce[pe].height,0,Ye,Be,Ce[pe].data);for(let Re=0;Re<$.length;Re++){let $e=$[Re].image[pe].image;_e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,$e.width,$e.height,Ye,Be,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,de,$e.width,$e.height,0,Ye,Be,$e.data)}}else{_e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Be,Ce[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,Ye,Be,Ce[pe]);for(let Re=0;Re<$.length;Re++){let be=$[Re];_e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,Ye,Be,be.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,de,Ye,Be,be.image[pe])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,C,H,K,G){let we=r.convert(C.format,C.colorSpace),Me=r.convert(C.type),Ue=b(C.internalFormat,we,Me,C.colorSpace),je=n.get(_),ve=n.get(C);if(ve.__renderTarget=_,!je.__hasExternalTextures){let Ce=Math.max(1,_.width>>G),qe=Math.max(1,_.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,Ue,Ce,qe,_.depth,0,we,Me,null):t.texImage2D(K,G,Ue,Ce,qe,0,we,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Te(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,K,ve.__webglTexture,0,ue(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,K,ve.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,_,C){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let H=_.depthTexture,K=H&&H.isDepthTexture?H.type:null,G=y(_.stencilBuffer,K),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=ue(_);Te(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,G,_.width,_.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,T)}else{let H=_.textures;for(let K=0;K<H.length;K++){let G=H[K],we=r.convert(G.format,G.colorSpace),Me=r.convert(G.type),Ue=b(G.internalFormat,we,Me,G.colorSpace),je=ue(_);C&&Te(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ue,_.width,_.height):Te(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Ue,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),re(_.depthTexture,0);let K=H.__webglTexture,G=ue(_);if(_.depthTexture.format===Hi)Te(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Zi)Te(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function me(T){let _=n.get(T),C=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=H}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");ne(_.__webglFramebuffer,T)}else if(C){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),le(_.__webglDepthbuffer[H],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),le(_.__webglDepthbuffer,T,!1);else{let H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,_,C){let H=n.get(T);_!==void 0&&Q(H.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&me(T)}function Oe(T){let _=T.texture,C=n.get(T),H=n.get(_);T.addEventListener("dispose",I);let K=T.textures,G=T.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,o.memory.textures++),G){C.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[Me]=[];for(let Ue=0;Ue<_.mipmaps.length;Ue++)C.__webglFramebuffer[Me][Ue]=i.createFramebuffer()}else C.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let Me=0;Me<_.mipmaps.length;Me++)C.__webglFramebuffer[Me]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(we)for(let Me=0,Ue=K.length;Me<Ue;Me++){let je=n.get(K[Me]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Te(T)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Me=0;Me<K.length;Me++){let Ue=K[Me];C.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[Me]);let je=r.convert(Ue.format,Ue.colorSpace),ve=r.convert(Ue.type),Ce=b(Ue.internalFormat,je,ve,Ue.colorSpace,T.isXRRenderTarget===!0),qe=ue(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,C.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),le(C.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Y(i.TEXTURE_CUBE_MAP,_);for(let Me=0;Me<6;Me++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ue=0;Ue<_.mipmaps.length;Ue++)Q(C.__webglFramebuffer[Me][Ue],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue);else Q(C.__webglFramebuffer[Me],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Me=0,Ue=K.length;Me<Ue;Me++){let je=K[Me],ve=n.get(je);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Y(i.TEXTURE_2D,je),Q(C.__webglFramebuffer,T,je,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),m(je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,H.__webglTexture),Y(Me,_),_.mipmaps&&_.mipmaps.length>0)for(let Ue=0;Ue<_.mipmaps.length;Ue++)Q(C.__webglFramebuffer[Ue],T,_,i.COLOR_ATTACHMENT0,Me,Ue);else Q(C.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,Me,0);m(_)&&d(Me),t.unbindTexture()}T.depthBuffer&&me(T)}function J(T){let _=T.textures;for(let C=0,H=_.length;C<H;C++){let K=_[C];if(m(K)){let G=E(T),we=n.get(K).__webglTexture;t.bindTexture(G,we),d(G),t.unbindTexture()}}}let he=[],A=[];function De(T){if(T.samples>0){if(Te(T)===!1){let _=T.textures,C=T.width,H=T.height,K=i.COLOR_BUFFER_BIT,G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(T),Me=_.length>1;if(Me)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ue]);let je=n.get(_[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,C,H,0,0,C,H,K,i.NEAREST),l===!0&&(he.length=0,A.length=0,he.push(i.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(G),A.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ue]);let je=n.get(_[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ue(T){return Math.min(s.maxSamples,T.samples)}function Te(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function fe(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function We(T,_){let C=T.colorSpace,H=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||C!==es&&C!==qn&&(ct.getTransfer(C)===gt?(H!==pn||K!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=ye,this.setTextureCube=ie,this.rebindTextures=ae,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Te}function Km(i,e){function t(n,s=qn){let r,o=ct.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===pn)return i.RGBA;if(n===Nl)return i.LUMINANCE;if(n===Fl)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===Bl)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===$o||n===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===$o)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===Ko||n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===ha||n===ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===da||n===fa||n===pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ia=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$t=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:Qm,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},La=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new Pa,m=t.getContextAttributes(),d=null,E=null,b=[],y=[],B=new Ne,R=null,I=new Ot;I.viewport=new Et;let O=new Ot;O.viewport=new Et;let w=[I,O],M=new Ia,L=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=b[P];return F===void 0&&(F=new ps,b[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=b[P];return F===void 0&&(F=new ps,b[P]=F),F.getGripSpace()},this.getHand=function(P){let F=b[P];return F===void 0&&(F=new ps,b[P]=F),F.getHandSpace()};function q(P){let F=y.indexOf(P.inputSource);if(F===-1)return;let Q=b[F];Q!==void 0&&(Q.update(P.inputSource,P.frame,c||o),Q.dispatchEvent({type:P.type,data:P.inputSource}))}function Z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",re);for(let P=0;P<b.length;P++){let F=y[P];F!==null&&(y[P]=null,b[P].disconnect(F))}L=null,te=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){let F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new vn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,Q=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=m.stencil?Zi:Hi,Q=m.stencil?$i:gi);let ne={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new vn(f.textureWidth,f.textureHeight,{format:pn,type:Dn,depthTexture:new Ir(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(P){for(let F=0;F<P.removed.length;F++){let Q=P.removed[F],le=y.indexOf(Q);le>=0&&(y[le]=null,b[le].disconnect(Q))}for(let F=0;F<P.added.length;F++){let Q=P.added[F],le=y.indexOf(Q);if(le===-1){for(let me=0;me<b.length;me++)if(me>=y.length){y.push(Q),le=me;break}else if(y[me]===null){y[me]=Q,le=me;break}if(le===-1)break}let ne=b[le];ne&&ne.connect(Q)}}let ee=new z,ye=new z;function ie(P,F,Q){ee.setFromMatrixPosition(F.matrixWorld),ye.setFromMatrixPosition(Q.matrixWorld);let le=ee.distanceTo(ye),ne=F.projectionMatrix.elements,me=Q.projectionMatrix.elements,ae=ne[14]/(ne[10]-1),Oe=ne[14]/(ne[10]+1),J=(ne[9]+1)/ne[5],he=(ne[9]-1)/ne[5],A=(ne[8]-1)/ne[0],De=(me[8]+1)/me[0],ue=ae*A,Te=ae*De,fe=le/(-A+De),We=fe*-A;if(F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(We),P.translateZ(fe),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ne[10]===-1)P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Ie=ae+fe,T=Oe+fe,_=ue-We,C=Te+(le-We),H=J*Oe/T*Ie,K=he*Oe/T*Ie;P.projectionMatrix.makePerspective(_,C,H,K,Ie,T),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Pe(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let F=P.near,Q=P.far;v.texture!==null&&(v.depthNear>0&&(F=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),M.near=O.near=I.near=F,M.far=O.far=I.far=Q,(L!==M.near||te!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,te=M.far),I.layers.mask=P.layers.mask|2,O.layers.mask=P.layers.mask|4,M.layers.mask=I.layers.mask|O.layers.mask;let le=P.parent,ne=M.cameras;Pe(M,le);for(let me=0;me<ne.length;me++)Pe(ne[me],le);ne.length===2?ie(M,I,O):M.projectionMatrix.copy(I.projectionMatrix),Le(P,M,le)};function Le(P,F,Q){Q===null?P.matrix.copy(F.matrixWorld):(P.matrix.copy(Q.matrixWorld),P.matrix.invert(),P.matrix.multiply(F.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(F.projectionMatrix),P.projectionMatrixInverse.copy(F.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=ga*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let N=null;function Y(P,F){if(h=F.getViewerPose(c||o),g=F,h!==null){let Q=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let le=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let me=0;me<Q.length;me++){let ae=Q[me],Oe=null;if(p!==null)Oe=p.getViewport(ae);else{let he=u.getViewSubImage(f,ae);Oe=he.viewport,me===0&&(e.setRenderTargetTextures(E,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(E))}let J=w[me];J===void 0&&(J=new Ot,J.layers.enable(me),J.viewport=new Et,w[me]=J),J.matrix.fromArray(ae.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ae.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),me===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(J)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){let me=u.getDepthInformation(Q[0]);me&&me.isValid&&me.texture&&v.init(e,me,s.renderState)}}for(let Q=0;Q<b.length;Q++){let le=y[Q],ne=b[Q];le!==null&&ne!==void 0&&ne.update(le,F,c||o)}N&&N(P,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}let oe=new Wl;oe.setAnimationLoop(Y),this.setAnimationLoop=function(P){N=P},this.dispose=function(){}}},hi=new Un,t0=new bt;function n0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===It&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===It&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,hi.copy(y),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(hi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let y=b.program;n.uniformBlockBinding(E,y)}function c(E,b){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));let B=b.program;n.updateUBOMapping(E,B);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let b=u();E.__bindingPointIndex=b;let y=i.createBuffer(),B=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],y=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,I=y.length;R<I;R++){let O=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,M=O.length;w<M;w++){let L=O[w];if(p(L,R,w,B)===!0){let te=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],Z=0;for(let re=0;re<q.length;re++){let ee=q[re],ye=v(ee);typeof ee=="number"||typeof ee=="boolean"?(L.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,te+Z,L.__data)):ee.isMatrix3?(L.__data[0]=ee.elements[0],L.__data[1]=ee.elements[1],L.__data[2]=ee.elements[2],L.__data[3]=0,L.__data[4]=ee.elements[3],L.__data[5]=ee.elements[4],L.__data[6]=ee.elements[5],L.__data[7]=0,L.__data[8]=ee.elements[6],L.__data[9]=ee.elements[7],L.__data[10]=ee.elements[8],L.__data[11]=0):(ee.toArray(L.__data,Z),Z+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,y,B){let R=E.value,I=b+"_"+y;if(B[I]===void 0)return typeof R=="number"||typeof R=="boolean"?B[I]=R:B[I]=R.clone(),!0;{let O=B[I];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return B[I]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(E){let b=E.uniforms,y=0,B=16;for(let I=0,O=b.length;I<O;I++){let w=Array.isArray(b[I])?b[I]:[b[I]];for(let M=0,L=w.length;M<L;M++){let te=w[M],q=Array.isArray(te.value)?te.value:[te.value];for(let Z=0,re=q.length;Z<re;Z++){let ee=q[Z],ye=v(ee),ie=y%B,Pe=ie%ye.boundary,Le=ie+Pe;y+=Pe,Le!==0&&B-Le<ye.storage&&(y+=B-Le),te.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=y,y+=ye.storage}}}let R=y%B;return R>0&&(y+=B-R),E.__size=y,E.__cache={},this}function v(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Pr=class{constructor(e={}){let{canvas:t=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Zn,this.toneMappingExposure=1;let y=this,B=!1,R=0,I=0,O=null,w=-1,M=null,L=new Et,te=new Et,q=null,Z=new lt(0),re=0,ee=t.width,ye=t.height,ie=1,Pe=null,Le=null,N=new Et(0,0,ee,ye),Y=new Et(0,0,ee,ye),oe=!1,P=new Cr,F=!1,Q=!1,le=new bt,ne=new bt,me=new z,ae=new Et,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function he(){return O===null?ie:1}let A=n;function De(S,k){return t.getContext(S,k)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",be,!1),A===null){let k="webgl2";if(A=De(k,S),A===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ue,Te,fe,We,Ie,T,_,C,H,K,G,we,Me,Ue,je,ve,Ce,qe,Ye,Be,de,_e,ke,U;function Ee(){ue=new _p(A),ue.init(),_e=new Km(A,ue),Te=new fp(A,ue,e,_e),fe=new $m(A,ue),Te.reverseDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),We=new Sp(A),Ie=new Nm,T=new Jm(A,ue,fe,Ie,Te,_e,We),_=new mp(y),C=new xp(y),H=new Cu(A),ke=new up(A,H),K=new yp(A,H,We,ke),G=new wp(A,K,H,We),Ye=new bp(A,Te,T),ve=new pp(Ie),we=new Um(y,_,C,ue,Te,ke,ve),Me=new n0(y,Ie),Ue=new Om,je=new Gm(ue),qe=new hp(y,_,C,fe,G,p,l),Ce=new qm(y,G,Te),U=new i0(A,We,Te,fe),Be=new dp(A,ue,We),de=new Mp(A,ue,We),We.programs=we.programs,y.capabilities=Te,y.extensions=ue,y.properties=Ie,y.renderLists=Ue,y.shadowMap=Ce,y.state=fe,y.info=We}Ee();let $=new La(y,A);this.xr=$,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(ee,ye,!1))},this.getSize=function(S){return S.set(ee,ye)},this.setSize=function(S,k,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=S,ye=k,t.width=Math.floor(S*ie),t.height=Math.floor(k*ie),X===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(ee*ie,ye*ie).floor()},this.setDrawingBufferSize=function(S,k,X){ee=S,ye=k,ie=X,t.width=Math.floor(S*X),t.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,k,X,j){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,k,X,j),fe.viewport(L.copy(N).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,k,X,j){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,k,X,j),fe.scissor(te.copy(Y).multiplyScalar(ie).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){fe.setScissorTest(oe=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(S=!0,k=!0,X=!0){let j=0;if(S){let x=!1;if(O!==null){let D=O.texture.format;x=D===oc||D===rc||D===sc}if(x){let D=O.texture.type,V=D===Dn||D===gi||D===_s||D===$i||D===nc||D===ic,se=qe.getClearColor(),ge=qe.getClearAlpha(),Se=se.r,He=se.g,Fe=se.b;V?(g[0]=Se,g[1]=He,g[2]=Fe,g[3]=ge,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Se,v[1]=He,v[2]=Fe,v[3]=ge,A.clearBufferiv(A.COLOR,0,v))}else j|=A.COLOR_BUFFER_BIT}k&&(j|=A.DEPTH_BUFFER_BIT),X&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),je.dispose(),Ie.dispose(),_.dispose(),C.dispose(),G.dispose(),ke.dispose(),U.dispose(),we.dispose(),$.dispose(),$.removeEventListener("sessionstart",xt),$.removeEventListener("sessionend",ot),Tt.stop()};function pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let S=We.autoReset,k=Ce.enabled,X=Ce.autoUpdate,j=Ce.needsUpdate,x=Ce.type;Ee(),We.autoReset=S,Ce.enabled=k,Ce.autoUpdate=X,Ce.needsUpdate=j,Ce.type=x}function be(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $e(S){let k=S.target;k.removeEventListener("dispose",$e),it(k)}function it(S){ht(S),Ie.remove(S)}function ht(S){let k=Ie.get(S).programs;k!==void 0&&(k.forEach(function(X){we.releaseProgram(X)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,j,x,D){k===null&&(k=Oe);let V=x.isMesh&&x.matrixWorld.determinant()<0,se=St(S,k,X,j,x);fe.setMaterial(j,V);let ge=X.index,Se=1;if(j.wireframe===!0){if(ge=K.getWireframeAttribute(X),ge===void 0)return;Se=2}let He=X.drawRange,Fe=X.attributes.position,Ze=He.start*Se,nt=(He.start+He.count)*Se;D!==null&&(Ze=Math.max(Ze,D.start*Se),nt=Math.min(nt,(D.start+D.count)*Se)),ge!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,ge.count)):Fe!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Fe.count));let mt=nt-Ze;if(mt<0||mt===1/0)return;ke.setup(x,j,se,X,ge);let Nt,Xe=Be;if(ge!==null&&(Nt=H.get(ge),Xe=de,Xe.setIndex(Nt)),x.isMesh)j.wireframe===!0?(fe.setLineWidth(j.wireframeLinewidth*he()),Xe.setMode(A.LINES)):Xe.setMode(A.TRIANGLES);else if(x.isLine){let Ge=j.linewidth;Ge===void 0&&(Ge=1),fe.setLineWidth(Ge*he()),x.isLineSegments?Xe.setMode(A.LINES):x.isLineLoop?Xe.setMode(A.LINE_LOOP):Xe.setMode(A.LINE_STRIP)}else x.isPoints?Xe.setMode(A.POINTS):x.isSprite&&Xe.setMode(A.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)Xe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Xe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{let Ge=x._multiDrawStarts,Ht=x._multiDrawCounts,at=x._multiDrawCount,qt=ge?H.get(ge).bytesPerElement:1,Sn=Ie.get(j).currentProgram.getUniforms();for(let jt=0;jt<at;jt++)Sn.setValue(A,"_gl_DrawID",jt),Xe.render(Ge[jt]/qt,Ht[jt])}else if(x.isInstancedMesh)Xe.renderInstances(Ze,mt,x.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ht=Math.min(X.instanceCount,Ge);Xe.renderInstances(Ze,mt,Ht)}else Xe.render(Ze,mt)};function Qe(S,k,X){S.transparent===!0&&S.side===tn&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Ve(S,k,X),S.side=Jn,S.needsUpdate=!0,Ve(S,k,X),S.side=tn):Ve(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),d=je.get(X),d.init(k),b.push(d),X.traverseVisible(function(x){x.isLight&&x.layers.test(k.layers)&&(d.pushLight(x),x.castShadow&&d.pushShadow(x))}),S!==X&&S.traverseVisible(function(x){x.isLight&&x.layers.test(k.layers)&&(d.pushLight(x),x.castShadow&&d.pushShadow(x))}),d.setupLights();let j=new Set;return S.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let D=x.material;if(D)if(Array.isArray(D))for(let V=0;V<D.length;V++){let se=D[V];Qe(se,X,x),j.add(se)}else Qe(D,X,x),j.add(D)}),b.pop(),d=null,j},this.compileAsync=function(S,k,X=null){let j=this.compile(S,k,X);return new Promise(x=>{function D(){if(j.forEach(function(V){Ie.get(V).currentProgram.isReady()&&j.delete(V)}),j.size===0){x(S);return}setTimeout(D,10)}ue.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let ut=null;function vt(S){ut&&ut(S)}function xt(){Tt.stop()}function ot(){Tt.start()}let Tt=new Wl;Tt.setAnimationLoop(vt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(S){ut=S,$.setAnimationLoop(S),S===null?Tt.stop():Tt.start()},$.addEventListener("sessionstart",xt),$.addEventListener("sessionend",ot),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,O),d=je.get(S,b.length),d.init(k),b.push(d),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),P.setFromProjectionMatrix(ne),Q=this.localClippingEnabled,F=ve.init(this.clippingPlanes,Q),m=Ue.get(S,E.length),m.init(),E.push(m),$.enabled===!0&&$.isPresenting===!0){let D=y.xr.getDepthSensingMesh();D!==null&&W(D,k,-1/0,y.sortObjects)}W(S,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Pe,Le),J=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,J&&qe.addToRenderList(m,S),this.info.render.frame++,F===!0&&ve.beginShadows();let X=d.state.shadowsArray;Ce.render(X,S,k),F===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,x=m.transmissive;if(d.setupLights(),k.isArrayCamera){let D=k.cameras;if(x.length>0)for(let V=0,se=D.length;V<se;V++){let ge=D[V];Ke(j,x,S,ge)}J&&qe.render(S);for(let V=0,se=D.length;V<se;V++){let ge=D[V];Ae(m,S,ge,ge.viewport)}}else x.length>0&&Ke(j,x,S,k),J&&qe.render(S),Ae(m,S,k);O!==null&&(T.updateMultisampleRenderTarget(O),T.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(y,S,k),ke.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],F===!0&&ve.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function W(S,k,X,j){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||P.intersectsSprite(S)){j&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);let V=G.update(S),se=S.material;se.visible&&m.push(S,V,se,X,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||P.intersectsObject(S))){let V=G.update(S),se=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),ae.copy(V.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(se)){let ge=V.groups;for(let Se=0,He=ge.length;Se<He;Se++){let Fe=ge[Se],Ze=se[Fe.materialIndex];Ze&&Ze.visible&&m.push(S,V,Ze,X,ae.z,Fe)}}else se.visible&&m.push(S,V,se,X,ae.z,null)}}let D=S.children;for(let V=0,se=D.length;V<se;V++)W(D[V],k,X,j)}function Ae(S,k,X,j){let x=S.opaque,D=S.transmissive,V=S.transparent;d.setupLightsView(X),F===!0&&ve.setGlobalState(y.clippingPlanes,X),j&&fe.viewport(L.copy(j)),x.length>0&&tt(x,k,X),D.length>0&&tt(D,k,X),V.length>0&&tt(V,k,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ke(S,k,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new vn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Si:Dn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let D=d.state.transmissionRenderTarget[j.id],V=j.viewport||L;D.setSize(V.z,V.w);let se=y.getRenderTarget();y.setRenderTarget(D),y.getClearColor(Z),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear(),J&&qe.render(X);let ge=y.toneMapping;y.toneMapping=Zn;let Se=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),F===!0&&ve.setGlobalState(y.clippingPlanes,j),tt(S,X,j),T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D),ue.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Fe=0,Ze=k.length;Fe<Ze;Fe++){let nt=k[Fe],mt=nt.object,Nt=nt.geometry,Xe=nt.material,Ge=nt.group;if(Xe.side===tn&&mt.layers.test(j.layers)){let Ht=Xe.side;Xe.side=It,Xe.needsUpdate=!0,Je(mt,X,j,Nt,Xe,Ge),Xe.side=Ht,Xe.needsUpdate=!0,He=!0}}He===!0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D))}y.setRenderTarget(se),y.setClearColor(Z,re),Se!==void 0&&(j.viewport=Se),y.toneMapping=ge}function tt(S,k,X){let j=k.isScene===!0?k.overrideMaterial:null;for(let x=0,D=S.length;x<D;x++){let V=S[x],se=V.object,ge=V.geometry,Se=j===null?V.material:j,He=V.group;se.layers.test(X.layers)&&Je(se,k,X,ge,Se,He)}}function Je(S,k,X,j,x,D){S.onBeforeRender(y,k,X,j,x,D),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),x.onBeforeRender(y,k,X,j,S,D),x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1?(x.side=It,x.needsUpdate=!0,y.renderBufferDirect(X,k,j,x,S,D),x.side=Jn,x.needsUpdate=!0,y.renderBufferDirect(X,k,j,x,S,D),x.side=tn):y.renderBufferDirect(X,k,j,x,S,D),S.onAfterRender(y,k,X,j,x,D)}function Ve(S,k,X){k.isScene!==!0&&(k=Oe);let j=Ie.get(S),x=d.state.lights,D=d.state.shadowsArray,V=x.state.version,se=we.getParameters(S,x.state,D,k,X),ge=we.getProgramCacheKey(se),Se=j.programs;j.environment=S.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(S.isMeshStandardMaterial?C:_).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",$e),Se=new Map,j.programs=Se);let He=Se.get(ge);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===V)return pt(S,se),He}else se.uniforms=we.getUniforms(S),S.onBeforeCompile(se,y),He=we.acquireProgram(se,ge),Se.set(ge,He),j.uniforms=se.uniforms;let Fe=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),pt(S,se),j.needsLights=Zt(S),j.lightsStateVersion=V,j.needsLights&&(Fe.ambientLightColor.value=x.state.ambient,Fe.lightProbe.value=x.state.probe,Fe.directionalLights.value=x.state.directional,Fe.directionalLightShadows.value=x.state.directionalShadow,Fe.spotLights.value=x.state.spot,Fe.spotLightShadows.value=x.state.spotShadow,Fe.rectAreaLights.value=x.state.rectArea,Fe.ltc_1.value=x.state.rectAreaLTC1,Fe.ltc_2.value=x.state.rectAreaLTC2,Fe.pointLights.value=x.state.point,Fe.pointLightShadows.value=x.state.pointShadow,Fe.hemisphereLights.value=x.state.hemi,Fe.directionalShadowMap.value=x.state.directionalShadowMap,Fe.directionalShadowMatrix.value=x.state.directionalShadowMatrix,Fe.spotShadowMap.value=x.state.spotShadowMap,Fe.spotLightMatrix.value=x.state.spotLightMatrix,Fe.spotLightMap.value=x.state.spotLightMap,Fe.pointShadowMap.value=x.state.pointShadowMap,Fe.pointShadowMatrix.value=x.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function et(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Wi.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function pt(S,k){let X=Ie.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function St(S,k,X,j,x){k.isScene!==!0&&(k=Oe),T.resetTextureUnits();let D=k.fog,V=j.isMeshStandardMaterial?k.environment:null,se=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:es,ge=(j.isMeshStandardMaterial?C:_).get(j.envMap||V),Se=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,nt=!!X.morphAttributes.color,mt=Zn;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(mt=y.toneMapping);let Nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xe=Nt!==void 0?Nt.length:0,Ge=Ie.get(j),Ht=d.state.lights;if(F===!0&&(Q===!0||S!==M)){let an=S===M&&j.id===w;ve.setState(j,S,an)}let at=!1;j.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ht.state.version||Ge.outputColorSpace!==se||x.isBatchedMesh&&Ge.batching===!1||!x.isBatchedMesh&&Ge.batching===!0||x.isBatchedMesh&&Ge.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&Ge.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&Ge.instancing===!1||!x.isInstancedMesh&&Ge.instancing===!0||x.isSkinnedMesh&&Ge.skinning===!1||!x.isSkinnedMesh&&Ge.skinning===!0||x.isInstancedMesh&&Ge.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&Ge.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&Ge.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&Ge.instancingMorph===!1&&x.morphTexture!==null||Ge.envMap!==ge||j.fog===!0&&Ge.fog!==D||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ve.numPlanes||Ge.numIntersection!==ve.numIntersection)||Ge.vertexAlphas!==Se||Ge.vertexTangents!==He||Ge.morphTargets!==Fe||Ge.morphNormals!==Ze||Ge.morphColors!==nt||Ge.toneMapping!==mt||Ge.morphTargetsCount!==Xe)&&(at=!0):(at=!0,Ge.__version=j.version);let qt=Ge.currentProgram;at===!0&&(qt=Ve(j,k,x));let Sn=!1,jt=!1,ss=!1,_t=qt.getUniforms(),_n=Ge.uniforms;if(fe.useProgram(qt.program)&&(Sn=!0,jt=!0,ss=!0),j.id!==w&&(w=j.id,jt=!0),Sn||M!==S){fe.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),cu(le),lu(le),_t.setValue(A,"projectionMatrix",le)):_t.setValue(A,"projectionMatrix",S.projectionMatrix),_t.setValue(A,"viewMatrix",S.matrixWorldInverse);let Bn=_t.map.cameraPosition;Bn!==void 0&&Bn.setValue(A,me.setFromMatrixPosition(S.matrixWorld)),Te.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,jt=!0,ss=!0)}if(x.isSkinnedMesh){_t.setOptional(A,x,"bindMatrix"),_t.setOptional(A,x,"bindMatrixInverse");let an=x.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_t.setValue(A,"boneTexture",an.boneTexture,T))}x.isBatchedMesh&&(_t.setOptional(A,x,"batchingTexture"),_t.setValue(A,"batchingTexture",x._matricesTexture,T),_t.setOptional(A,x,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",x._indirectTexture,T),_t.setOptional(A,x,"batchingColorTexture"),x._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",x._colorsTexture,T));let rs=X.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Ye.update(x,X,qt),(jt||Ge.receiveShadow!==x.receiveShadow)&&(Ge.receiveShadow=x.receiveShadow,_t.setValue(A,"receiveShadow",x.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=ge,_n.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),jt&&(_t.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Ut(_n,ss),D&&j.fog===!0&&Me.refreshFogUniforms(_n,D),Me.refreshMaterialUniforms(_n,j,ie,ye,d.state.transmissionRenderTarget[S.id]),Wi.upload(A,et(Ge),_n,T)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wi.upload(A,et(Ge),_n,T),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(A,"center",x.center),_t.setValue(A,"modelViewMatrix",x.modelViewMatrix),_t.setValue(A,"normalMatrix",x.normalMatrix),_t.setValue(A,"modelMatrix",x.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let an=j.uniformsGroups;for(let Bn=0,zn=an.length;Bn<zn;Bn++){let mc=an[Bn];U.update(mc,qt),U.bind(mc,qt)}}return qt}function Ut(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Zt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,k,X){Ie.get(S.texture).__webglTexture=k,Ie.get(S.depthTexture).__webglTexture=X;let j=Ie.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){let X=Ie.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,X=0){O=S,R=k,I=X;let j=!0,x=null,D=!1,V=!1;if(S){let ge=Ie.get(S);if(ge.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(A.FRAMEBUFFER,null),j=!1;else if(ge.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(ge.__hasExternalTextures)T.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Fe=S.depthTexture;if(ge.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(V=!0);let He=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[k])?x=He[k][X]:x=He[k],D=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?x=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?x=He[X]:x=He,L.copy(S.viewport),te.copy(S.scissor),q=S.scissorTest}else L.copy(N).multiplyScalar(ie).floor(),te.copy(Y).multiplyScalar(ie).floor(),q=oe;if(fe.bindFramebuffer(A.FRAMEBUFFER,x)&&j&&fe.drawBuffers(S,x),fe.viewport(L),fe.scissor(te),fe.setScissorTest(q),D){let ge=Ie.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,X)}else if(V){let ge=Ie.get(S.texture),Se=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.__webglTexture,X||0,Se)}w=-1},this.readRenderTargetPixels=function(S,k,X,j,x,D,V){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&V!==void 0&&(se=se[V]),se){fe.bindFramebuffer(A.FRAMEBUFFER,se);try{let ge=S.texture,Se=ge.format,He=ge.type;if(!Te.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-j&&X>=0&&X<=S.height-x&&A.readPixels(k,X,j,x,_e.convert(Se),_e.convert(He),D)}finally{let ge=O!==null?Ie.get(O).__webglFramebuffer:null;fe.bindFramebuffer(A.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(S,k,X,j,x,D,V){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&V!==void 0&&(se=se[V]),se){let ge=S.texture,Se=ge.format,He=ge.type;if(!Te.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-j&&X>=0&&X<=S.height-x){fe.bindFramebuffer(A.FRAMEBUFFER,se);let Fe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Fe),A.bufferData(A.PIXEL_PACK_BUFFER,D.byteLength,A.STREAM_READ),A.readPixels(k,X,j,x,_e.convert(Se),_e.convert(He),0);let Ze=O!==null?Ie.get(O).__webglFramebuffer:null;fe.bindFramebuffer(A.FRAMEBUFFER,Ze);let nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await au(A,nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Fe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,D),A.deleteBuffer(Fe),A.deleteSync(nt),D}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,X=0){S.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);let j=Math.pow(2,-X),x=Math.floor(S.image.width*j),D=Math.floor(S.image.height*j),V=k!==null?k.x:0,se=k!==null?k.y:0;T.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,V,se,x,D),fe.unbindTexture()},this.copyTextureToTexture=function(S,k,X=null,j=null,x=0){S.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],k=arguments[2],x=arguments[3]||0,X=null);let D,V,se,ge,Se,He,Fe,Ze,nt,mt=S.isCompressedTexture?S.mipmaps[x]:S.image;X!==null?(D=X.max.x-X.min.x,V=X.max.y-X.min.y,se=X.isBox3?X.max.z-X.min.z:1,ge=X.min.x,Se=X.min.y,He=X.isBox3?X.min.z:0):(D=mt.width,V=mt.height,se=mt.depth||1,ge=0,Se=0,He=0),j!==null?(Fe=j.x,Ze=j.y,nt=j.z):(Fe=0,Ze=0,nt=0);let Nt=_e.convert(k.format),Xe=_e.convert(k.type),Ge;k.isData3DTexture?(T.setTexture3D(k,0),Ge=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Ge=A.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Ge=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);let Ht=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),qt=A.getParameter(A.UNPACK_SKIP_PIXELS),Sn=A.getParameter(A.UNPACK_SKIP_ROWS),jt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ge),A.pixelStorei(A.UNPACK_SKIP_ROWS,Se),A.pixelStorei(A.UNPACK_SKIP_IMAGES,He);let ss=S.isDataArrayTexture||S.isData3DTexture,_t=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let _n=Ie.get(S),rs=Ie.get(k),an=Ie.get(_n.__renderTarget),Bn=Ie.get(rs.__renderTarget);fe.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<se;zn++)ss&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.get(S).__webglTexture,x,He+zn),S.isDepthTexture?(_t&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.get(k).__webglTexture,x,nt+zn),A.blitFramebuffer(ge,Se,D,V,Fe,Ze,D,V,A.DEPTH_BUFFER_BIT,A.NEAREST)):_t?A.copyTexSubImage3D(Ge,x,Fe,Ze,nt+zn,ge,Se,D,V):A.copyTexSubImage2D(Ge,x,Fe,Ze,nt+zn,ge,Se,D,V);fe.bindFramebuffer(A.READ_FRAMEBUFFER,null),fe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Ge,x,Fe,Ze,nt,D,V,se,Nt,Xe,mt.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Ge,x,Fe,Ze,nt,D,V,se,Nt,mt.data):A.texSubImage3D(Ge,x,Fe,Ze,nt,D,V,se,Nt,Xe,mt):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,x,Fe,Ze,D,V,Nt,Xe,mt.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,x,Fe,Ze,mt.width,mt.height,Nt,mt.data):A.texSubImage2D(A.TEXTURE_2D,x,Fe,Ze,D,V,Nt,Xe,mt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Sn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,jt),x===0&&k.generateMipmaps&&A.generateMipmap(Ge),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,k,X=null,j=null,x=0){return S.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,S=arguments[2],k=arguments[3],x=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,X,j,x)},this.initRenderTarget=function(S){Ie.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,fe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var ei=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Fn=class extends Qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lr=new z,Dr=new z,vl=new bt,us=new ys,tr=new xi,Eo=new z,xl=new z,Da=class extends rn{constructor(e=new Rt,t=new Fn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Lr.fromBufferAttribute(t,s-1),Dr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Dr);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,e.ray.intersectsSphere(tr)===!1)return;vl.copy(s).invert(),us.copy(e.ray).applyMatrix4(vl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=h.getX(v),E=h.getX(v+1),b=nr(this,e,us,l,d,E);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=nr(this,e,us,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=nr(this,e,us,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=nr(this,e,us,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nr(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Lr.fromBufferAttribute(o,s),Dr.fromBufferAttribute(o,r),t.distanceSqToSegment(Lr,Dr,Eo,xl)>n)return;Eo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Eo);if(!(l<e.near||l>e.far))return{distance:l,point:xl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var _l=new z,yl=new z,ti=class extends Da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_l.fromBufferAttribute(t,s),yl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_l.distanceTo(yl);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ua=class extends Qn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ml=new bt,Na=new ys,ir=new xi,sr=new z,Ur=class extends rn{constructor(e=new Rt,t=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;Ml.copy(s).invert(),Na.copy(e.ray).applyMatrix4(Ml);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);sr.fromBufferAttribute(u,m),Sl(sr,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)sr.fromBufferAttribute(u,g),Sl(sr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sl(i,e,t,n,s,r,o){let a=Na.distanceSqToPoint(i);if(a<t){let l=new z;Na.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Nr=class extends sn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ne:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new z,s=[],r=[],o=[],a=new z,l=new bt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Bt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ss=class extends ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fa=class extends Ss{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var rr=new z,Ao=new cc,Co=new cc,Ro=new cc,Oa=class extends ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ao.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Co.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Ro.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ro.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ao.calc(l),Co.calc(l),Ro.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bl(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function s0(i,e){let t=1-i;return t*t*e}function r0(i,e){return 2*(1-i)*i*e}function o0(i,e){return i*i*e}function ms(i,e,t,n){return s0(i,e)+r0(i,t)+o0(i,n)}function a0(i,e){let t=1-i;return t*t*t*e}function c0(i,e){let t=1-i;return 3*t*t*i*e}function l0(i,e){return 3*(1-i)*i*i*e}function h0(i,e){return i*i*i*e}function gs(i,e,t,n,s){return a0(i,e)+c0(i,t)+l0(i,n)+h0(i,s)}var Fr=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(e,s.x,r.x,o.x,a.x),gs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends ln{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(e,s.x,r.x,o.x,a.x),gs(e,s.y,r.y,o.y,a.y),gs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends ln{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends ln{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(e,s.x,r.x,o.x),ms(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends ln{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(e,s.x,r.x,o.x),ms(e,s.y,r.y,o.y),ms(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bl(a,l.x,c.x,h.x,u.x),bl(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Va=Object.freeze({__proto__:null,ArcCurve:Fa,CatmullRomCurve3:Oa,CubicBezierCurve:Fr,CubicBezierCurve3:Ba,EllipseCurve:Ss,LineCurve:Or,LineCurve3:za,QuadraticBezierCurve:Br,QuadraticBezierCurve3:ka,SplineCurve:zr}),Ha=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Va[s.type]().fromJSON(s))}return this}},Ki=class extends Ha{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Or(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Br(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Fr(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ss(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bs=class i extends Rt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new z,f=new Ne,p=new z,g=new z,v=new z,m=0,d=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let E=0;E<=t;E++){let b=n+E*h*s,y=Math.sin(b),B=Math.cos(b);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*y,u.y=e[R].y,u.z=e[R].x*B,o.push(u.x,u.y,u.z),f.x=E/t,f.y=R/(e.length-1),a.push(f.x,f.y);let I=l[3*R+0]*y,O=l[3*R+1],w=l[3*R+0]*B;c.push(I,O,w)}}for(let E=0;E<t;E++)for(let b=0;b<e.length-1;b++){let y=b+E*e.length,B=y,R=y+e.length,I=y+e.length+1,O=y+1;r.push(B,R,O),r.push(I,O,R)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ws=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new z,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ni=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2));function E(){let y=new z,B=new z,R=0,I=(t-e)/n;for(let O=0;O<=r;O++){let w=[],M=O/r,L=M*(t-e)+e;for(let te=0;te<=s;te++){let q=te/s,Z=q*l+a,re=Math.sin(Z),ee=Math.cos(Z);B.x=L*re,B.y=-M*n+m,B.z=L*ee,u.push(B.x,B.y,B.z),y.set(re,I,ee).normalize(),f.push(y.x,y.y,y.z),p.push(q,1-M),w.push(g++)}v.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let M=v[w][O],L=v[w+1][O],te=v[w+1][O+1],q=v[w][O+1];(e>0||w!==0)&&(h.push(M,L,q),R+=3),(t>0||w!==r-1)&&(h.push(L,te,q),R+=3)}c.addGroup(d,R,0),d+=R}function b(y){let B=g,R=new Ne,I=new z,O=0,w=y===!0?e:t,M=y===!0?1:-1;for(let te=1;te<=s;te++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let L=g;for(let te=0;te<=s;te++){let Z=te/s*l+a,re=Math.cos(Z),ee=Math.sin(Z);I.x=w*ee,I.y=m*M,I.z=w*re,u.push(I.x,I.y,I.z),f.push(0,M,0),R.x=re*.5+.5,R.y=ee*.5*M+.5,p.push(R.x,R.y),g++}for(let te=0;te<s;te++){let q=B+te,Z=L+te;y===!0?h.push(Z,Z+1,q):h.push(Z+1,Z,q),O+=3}c.addGroup(d,O,y===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var or=new z,ar=new z,Io=new z,cr=new Yn,ji=class extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(vr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:m,c:d}=cr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),cr.getNormal(Io),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){let b=(E+1)%3,y=u[E],B=u[b],R=cr[h[E]],I=cr[h[b]],O=`${y}_${B}`,w=`${B}_${y}`;w in f&&f[w]?(Io.dot(f[w].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(I.x,I.y,I.z)),f[w]=null):O in f||(f[O]={index0:c[E],index1:c[b],normal:Io.clone()})}}for(let g in f)if(f[g]){let{index0:v,index1:m}=f[g];or.fromBufferAttribute(a,v),ar.fromBufferAttribute(a,m),p.push(or.x,or.y,or.z),p.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new ft(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ii=class extends Ki{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ki().fromJSON(s))}return this}},u0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zl(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=g0(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ts(r,o,t,a,l,p,0),o}};function Zl(i,e,t,n,s){let r,o;if(s===A0(i,e,t,n)>0)for(r=e;r<t;r+=n)o=wl(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=wl(r,i[r],i[r+1],o);return o&&qr(o,o.next)&&(As(o),o=o.next),o}function _i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qr(t,t.next)||Mt(t.prev,t,t.next)===0)){if(As(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ts(i,e,t,n,s,r,o){if(!i)return;!o&&r&&M0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?f0(i,n,s,r):d0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),As(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=p0(_i(i),e,t),Ts(i,e,t,n,s,r,2)):o===2&&m0(i,e,t,n,s,r):Ts(_i(i),e,t,n,s,r,1);break}}}function d0(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ki(s,a,r,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=Ga(p,g,e,t,n),E=Ga(v,m,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=d&&y&&y.z<=E;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ki(a,h,l,u,c,f,b.x,b.y)&&Mt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ki(a,h,l,u,c,f,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=E;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ki(a,h,l,u,c,f,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function p0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!qr(s,r)&&Jl(s,n,n.next,r)&&Es(s,r)&&Es(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),As(n),As(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function m0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w0(o,a)){let l=Kl(o,a);o=_i(o,o.next),l=_i(l,l.next),Ts(o,e,t,n,s,r,0),Ts(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function g0(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Zl(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(b0(c));for(s.sort(v0),r=0;r<s.length;r++)t=x0(s[r],t);return t}function v0(i,e){return i.x-e.x}function x0(i,e){let t=_0(i,e);if(!t)return e;let n=Kl(t,i);return _i(n,n.next),_i(t,t.next)}function _0(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ki(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Es(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&y0(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function y0(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function M0(i,e,t,n){let s=i;do s.z===0&&(s.z=Ga(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ga(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function b0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ki(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function w0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!T0(i,e)&&(Es(i,e)&&Es(e,i)&&E0(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||qr(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qr(i,e){return i.x===e.x&&i.y===e.y}function Jl(i,e,t,n){let s=hr(Mt(i,e,t)),r=hr(Mt(i,e,n)),o=hr(Mt(t,n,i)),a=hr(Mt(t,n,e));return!!(s!==r&&o!==a||s===0&&lr(i,t,e)||r===0&&lr(i,n,e)||o===0&&lr(t,i,n)||a===0&&lr(t,e,n))}function lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hr(i){return i>0?1:i<0?-1:0}function T0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Es(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function E0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Kl(i,e){let t=new Wa(i.i,i.x,i.y),n=new Wa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wl(i,e,t,n){let s=new Wa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function As(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Tl(e),El(n,e);let o=e.length;t.forEach(Tl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,El(n,t[l]);let a=u0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Tl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function El(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var kr=class i extends Rt{constructor(e=new ii([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:C0,b,y=!1,B,R,I,O;d&&(b=d.getSpacedPoints(h),y=!0,f=!1,B=d.computeFrenetFrames(h,!1),R=new z,I=new z,O=new z),f||(m=0,p=0,g=0,v=0);let w=a.extractPoints(c),M=w.shape,L=w.holes;if(!vs.isClockWise(M)){M=M.reverse();for(let J=0,he=L.length;J<he;J++){let A=L[J];vs.isClockWise(A)&&(L[J]=A.reverse())}}let q=vs.triangulateShape(M,L),Z=M;for(let J=0,he=L.length;J<he;J++){let A=L[J];M=M.concat(A)}function re(J,he,A){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(he,A)}let ee=M.length,ye=q.length;function ie(J,he,A){let De,ue,Te,fe=J.x-he.x,We=J.y-he.y,Ie=A.x-J.x,T=A.y-J.y,_=fe*fe+We*We,C=fe*T-We*Ie;if(Math.abs(C)>Number.EPSILON){let H=Math.sqrt(_),K=Math.sqrt(Ie*Ie+T*T),G=he.x-We/H,we=he.y+fe/H,Me=A.x-T/K,Ue=A.y+Ie/K,je=((Me-G)*T-(Ue-we)*Ie)/(fe*T-We*Ie);De=G+fe*je-J.x,ue=we+We*je-J.y;let ve=De*De+ue*ue;if(ve<=2)return new Ne(De,ue);Te=Math.sqrt(ve/2)}else{let H=!1;fe>Number.EPSILON?Ie>Number.EPSILON&&(H=!0):fe<-Number.EPSILON?Ie<-Number.EPSILON&&(H=!0):Math.sign(We)===Math.sign(T)&&(H=!0),H?(De=-We,ue=fe,Te=Math.sqrt(_)):(De=fe,ue=We,Te=Math.sqrt(_/2))}return new Ne(De/Te,ue/Te)}let Pe=[];for(let J=0,he=Z.length,A=he-1,De=J+1;J<he;J++,A++,De++)A===he&&(A=0),De===he&&(De=0),Pe[J]=ie(Z[J],Z[A],Z[De]);let Le=[],N,Y=Pe.concat();for(let J=0,he=L.length;J<he;J++){let A=L[J];N=[];for(let De=0,ue=A.length,Te=ue-1,fe=De+1;De<ue;De++,Te++,fe++)Te===ue&&(Te=0),fe===ue&&(fe=0),N[De]=ie(A[De],A[Te],A[fe]);Le.push(N),Y=Y.concat(N)}for(let J=0;J<m;J++){let he=J/m,A=p*Math.cos(he*Math.PI/2),De=g*Math.sin(he*Math.PI/2)+v;for(let ue=0,Te=Z.length;ue<Te;ue++){let fe=re(Z[ue],Pe[ue],De);le(fe.x,fe.y,-A)}for(let ue=0,Te=L.length;ue<Te;ue++){let fe=L[ue];N=Le[ue];for(let We=0,Ie=fe.length;We<Ie;We++){let T=re(fe[We],N[We],De);le(T.x,T.y,-A)}}}let oe=g+v;for(let J=0;J<ee;J++){let he=f?re(M[J],Y[J],oe):M[J];y?(I.copy(B.normals[0]).multiplyScalar(he.x),R.copy(B.binormals[0]).multiplyScalar(he.y),O.copy(b[0]).add(I).add(R),le(O.x,O.y,O.z)):le(he.x,he.y,0)}for(let J=1;J<=h;J++)for(let he=0;he<ee;he++){let A=f?re(M[he],Y[he],oe):M[he];y?(I.copy(B.normals[J]).multiplyScalar(A.x),R.copy(B.binormals[J]).multiplyScalar(A.y),O.copy(b[J]).add(I).add(R),le(O.x,O.y,O.z)):le(A.x,A.y,u/h*J)}for(let J=m-1;J>=0;J--){let he=J/m,A=p*Math.cos(he*Math.PI/2),De=g*Math.sin(he*Math.PI/2)+v;for(let ue=0,Te=Z.length;ue<Te;ue++){let fe=re(Z[ue],Pe[ue],De);le(fe.x,fe.y,u+A)}for(let ue=0,Te=L.length;ue<Te;ue++){let fe=L[ue];N=Le[ue];for(let We=0,Ie=fe.length;We<Ie;We++){let T=re(fe[We],N[We],De);y?le(T.x,T.y+b[h-1].y,b[h-1].x+A):le(T.x,T.y,u+A)}}}P(),F();function P(){let J=s.length/3;if(f){let he=0,A=ee*he;for(let De=0;De<ye;De++){let ue=q[De];ne(ue[2]+A,ue[1]+A,ue[0]+A)}he=h+m*2,A=ee*he;for(let De=0;De<ye;De++){let ue=q[De];ne(ue[0]+A,ue[1]+A,ue[2]+A)}}else{for(let he=0;he<ye;he++){let A=q[he];ne(A[2],A[1],A[0])}for(let he=0;he<ye;he++){let A=q[he];ne(A[0]+ee*h,A[1]+ee*h,A[2]+ee*h)}}n.addGroup(J,s.length/3-J,0)}function F(){let J=s.length/3,he=0;Q(Z,he),he+=Z.length;for(let A=0,De=L.length;A<De;A++){let ue=L[A];Q(ue,he),he+=ue.length}n.addGroup(J,s.length/3-J,1)}function Q(J,he){let A=J.length;for(;--A>=0;){let De=A,ue=A-1;ue<0&&(ue=J.length-1);for(let Te=0,fe=h+m*2;Te<fe;Te++){let We=ee*Te,Ie=ee*(Te+1),T=he+De+We,_=he+ue+We,C=he+ue+Ie,H=he+De+Ie;me(T,_,C,H)}}}function le(J,he,A){l.push(J),l.push(he),l.push(A)}function ne(J,he,A){ae(J),ae(he),ae(A);let De=s.length/3,ue=E.generateTopUV(n,s,De-3,De-2,De-1);Oe(ue[0]),Oe(ue[1]),Oe(ue[2])}function me(J,he,A,De){ae(J),ae(he),ae(De),ae(he),ae(A),ae(De);let ue=s.length/3,Te=E.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Oe(Te[0]),Oe(Te[1]),Oe(Te[3]),Oe(Te[1]),Oe(Te[2]),Oe(Te[3])}function ae(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Oe(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return R0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Va[s.type]().fromJSON(s)),new i(n,e.options)}},C0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ne(r,o),new Ne(a,l),new Ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ne(o,1-l),new Ne(c,1-u),new Ne(f,1-g),new Ne(v,1-d)]:[new Ne(a,1-l),new Ne(h,1-u),new Ne(p,1-g),new Ne(m,1-d)]}};function R0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vr=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,f=new z,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],b=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let B=0;B<=t;B++){let R=B/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(R+y,1-b),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let b=h[d][E+1],y=h[d][E],B=h[d+1][E],R=h[d+1][E+1];(d!==0||o>0)&&p.push(b,y,R),(d!==n-1||l<Math.PI)&&p.push(y,B,R)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var On=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,u=new z,f=new z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(v,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ur(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends Qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,a=2*t-n;break;case bc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,l=2*n-t;break;case bc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let B=0;B!==a;++B)r[B]=d*o[h+B]+E*o[c+B]+b*o[l+B]+y*o[u+B];return r}},qa=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ya=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&I0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=ma;var yi=class extends xn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=xr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends xn{};$a.prototype.ValueTypeName="color";var Za=class extends xn{};Za.prototype.ValueTypeName="number";var Ja=class extends Qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Hr=class extends xn{InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends xn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=xr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends xn{};Ka.prototype.ValueTypeName="vector";var ja=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},P0=new ja,Qa=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var lc="\\[\\]\\.:\\/",L0=new RegExp("["+lc+"]","g"),hc="[^"+lc+"]",D0="[^"+lc.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",hc),N0=/(WCOD+)?/.source.replace("WCOD",D0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),B0=new RegExp("^"+U0+N0+F0+O0+"$"),z0=["material","materials","bones","map"],ec=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){let t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=ec;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function jl(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let E=0,b=a.length;E<b;E++){let y=a[E],B=i.attributes[y];l[y]=new B.constructor(new B.array.constructor(B.count*B.itemSize),B.itemSize,B.normalized);let R=i.morphAttributes[y];R&&(c[y]||(c[y]=[]),R.forEach((I,O)=>{let w=new I.array.constructor(I.count*I.itemSize);c[y][O]=new I.constructor(w,I.itemSize,I.normalized)}))}let p=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=p*v;for(let E=0;E<r;E++){let b=n?n.getX(E):E,y="";for(let B=0,R=a.length;B<R;B++){let I=a[B],O=i.getAttribute(I),w=O.itemSize;for(let M=0;M<w;M++)y+=`${~~(O[u[M]](b)*v+m)},`}if(y in t)h.push(t[y]);else{for(let B=0,R=a.length;B<R;B++){let I=a[B],O=i.getAttribute(I),w=i.morphAttributes[I],M=O.itemSize,L=l[I],te=c[I];for(let q=0;q<M;q++){let Z=u[q],re=f[q];if(L[re](o,O[Z](b)),w)for(let ee=0,ye=w.length;ee<ye;ee++)te[ee][re](o,w[ee][Z](b))}}t[y]=o,h.push(o),o++}}let d=i.clone();for(let E in i.attributes){let b=l[E];if(d.setAttribute(E,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),E in c)for(let y=0;y<c[E].length;y++){let B=c[E][y];d.morphAttributes[E][y]=new B.constructor(B.array.slice(0,o*B.itemSize),B.itemSize,B.normalized)}}return d.setIndex(h),d}var ce={bg:"#040405",green:"#5cf2a0",greenDim:"#1d5a3c",orange:"#ff7a1a",orangeDim:"#5a2a0c",red:"#e8261c",white:"#f4efe6",grid:"#ff7a1a18"},on='"EVA Mincho","Noto Serif CJK JP","Hiragino Mincho ProN","Yu Mincho",serif',k0='"EVA Condensed","Barlow Condensed","Arial Narrow",sans-serif',bi=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Cs=i=>1-Math.pow(1-bi(i),3),uc=[{at:6.25,end:6.95,kind:"title",ja:"\u7B2C\u4E00\u6B21\u63A5\u7D9A",en:"PRIMARY CONTACT"},{at:12.9,end:13.45,kind:"title",ja:"\u4E3B\u96FB\u6E90\u63A5\u7D9A",en:"MAIN POWER"},{at:13.45,end:14.3,kind:"power"},{at:14.3,end:15.55,kind:"lines"},{at:15.55,end:16.1,kind:"title",ja:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A",en:"SECONDARY CONTACT"},{at:16.1,end:17.4,kind:"neural"},{at:17.4,end:18.7,kind:"brain"},{at:19.25,end:19.85,kind:"title",ja:"\u53CC\u65B9\u5411\u56DE\u7DDA",en:"BIDIRECTIONAL CIRCUIT",vertical:"\u958B\u653E"},{at:19.85,end:20.6,kind:"magi"}];function dc(i){for(let e of uc)if(i>=e.at&&i<e.end)return e;return null}var fc=[{at:4.5,end:5.8,kind:"xray"},{at:20.6,end:1/0,kind:"helix"}];function pc(i){for(let e of fc)if(i>=e.at&&i<e.end)return e;return null}function Ql(i,e){let t=i.getContext("2d"),n=1,s=1,r=1,o=null,a=N=>{let Y=Math.sin(N*127.1+311.7)*43758.5453;return Y-Math.floor(Y)};function l(N,Y){r=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,N),s=Math.max(1,Y),i.width=Math.round(n*r),i.height=Math.round(s*r)}function c(N,Y,oe,{font:P=k0,size:F=20,color:Q=ce.orange,align:le="left",weight:ne=600,sx:me=1,spacing:ae=0,glow:Oe=0,base:J="alphabetic"}={}){t.save(),t.translate(Y,oe),t.scale(me,1),t.font=`${ne} ${F}px ${P}`,t.fillStyle=Q,t.textAlign=le,t.textBaseline=J,"letterSpacing"in t&&(t.letterSpacing=`${ae}px`),Oe&&(t.shadowColor=Q,t.shadowBlur=Oe),t.fillText(N,0,0),t.restore()}function h(N,Y,oe,P,F=ce.orange,Q=1.5){t.strokeStyle=F,t.lineWidth=Q,t.strokeRect(N+.5,Y+.5,oe,P)}function u(N,Y,oe,P,F){t.fillStyle=F,t.fillRect(N,Y,oe,P)}function f(N,Y,oe,P,F=18,Q=ce.orange){t.strokeStyle=Q,t.lineWidth=2,t.beginPath(),t.moveTo(N,Y+F),t.lineTo(N,Y),t.lineTo(N+F,Y),t.moveTo(N+oe-F,Y),t.lineTo(N+oe,Y),t.lineTo(N+oe,Y+F),t.moveTo(N+oe,Y+P-F),t.lineTo(N+oe,Y+P),t.lineTo(N+oe-F,Y+P),t.moveTo(N+F,Y+P),t.lineTo(N,Y+P),t.lineTo(N,Y+P-F),t.stroke()}function p(N,Y,oe,P,F,{color:Q=ce.orange,sub:le,lit:ne=!1}={}){ne&&u(N,Y,oe,P,Q),h(N,Y,oe,P,Q,1.5),c(F,N+12,Y+P/2+(le?-2:7),{size:20,color:ne?ce.bg:Q,spacing:1.5}),le&&c(le,N+12,Y+P/2+18,{size:13,color:ne?ce.bg:Q,spacing:1.2,weight:500})}function g(N,Y,oe){t.strokeStyle=ce.grid,t.lineWidth=1,t.beginPath();for(let F=0;F<=1600;F+=50)t.moveTo(F,0),t.lineTo(F,1e3);for(let F=0;F<=1e3;F+=50)t.moveTo(0,F),t.lineTo(1600,F);t.stroke(),f(28,28,1544,944,30),c(oe,48,66,{size:18,spacing:3}),c(`EVA-${e.id}  \xB7  ${e.pilotRole}`,1552,66,{size:18,spacing:3,align:"right"});let P=(N.at+Y).toFixed(2).padStart(6,"0");c(`T+${P}`,1552,956,{size:16,spacing:2,align:"right",color:ce.orange}),c("LIVE",48,956,{size:16,spacing:3,color:Math.sin(Y*14)>0?ce.red:ce.orangeDim})}function v(N,Y){let oe=N.ja.length>4?170:190;if(c(N.ja,1600/2,1e3/2+40,{font:on,size:oe,weight:900,color:ce.white,align:"center",sx:.78,spacing:6}),N.vertical){let P=800+N.ja.length*oe*.78/2+40;[...N.vertical].forEach((F,Q)=>c(F,P,1e3/2-60+Q*110,{font:on,size:96,weight:900,color:ce.white,sx:.84}))}c(N.en,1600/2,1e3/2+120,{size:26,color:"#bdb6aa",align:"center",spacing:10,weight:500}),Y<.08&&u(0,0,1600,1e3,"#ffffff10")}function m(N,Y){g(N,Y,"MONITOR 07 \xB7 POWER DISTRIBUTION"),c("\u4E3B\u96FB\u6E90\u4F9B\u7D66\u30B7\u30B9\u30C6\u30E0",80,170,{font:on,size:54,weight:900,color:ce.orange,sx:.86}),c("MAIN POWER SUPPLY SYSTEM",82,204,{size:18,spacing:4});let oe=Y>.25;p(80,240,230,74,"\u5916\u90E8 EXTERNAL",{lit:oe&&Math.sin(Y*30)>-.6,color:ce.green,sub:"UMBILICAL CABLE"}),p(330,240,230,74,"\u5185\u90E8 INTERNAL",{sub:"STANDBY \xB7 5:00"});let P=18;for(let ne=0;ne<P;ne++){let ae=220*Cs((Y-.15-ne*.03)/.5)*(.55+.45*a(ne+3)),Oe=ne>14?ce.red:ne>11?ce.orange:ce.green;u(84+ne*26,600-ae,18,ae,Oe)}h(76,370,484,236),c("VOLTAGE",84,630,{size:16,spacing:3}),c(`${(Cs(Y/1.2)*1.21).toFixed(2)} GV`,556,630,{size:16,spacing:2,align:"right",color:ce.green}),c("\u5168\u56DE\u8DEF\u52D5\u529B\u4F1D\u9054",660,170,{font:on,size:54,weight:900,color:ce.orange,sx:.86}),c("POWER TRANSFER TO ALL CIRCUITS",662,204,{size:18,spacing:4});let F=8,Q=5;for(let ne=0;ne<Q;ne++)for(let me=0;me<F;me++){let ae=ne*F+me,Oe=660+me*108,J=240+ne*70,he=Y>.2+ae*.028;he&&u(Oe,J,96,56,ce.greenDim),h(Oe,J,96,56,he?ce.green:ce.orangeDim),c(`${String.fromCharCode(65+ne)}-${String(me+1).padStart(2,"0")}`,Oe+10,J+24,{size:16,color:he?ce.green:ce.orangeDim,spacing:1}),c(he?"LIVE":"----",Oe+10,J+46,{size:14,color:he?ce.green:ce.orangeDim,spacing:2,weight:500})}let le=bi((Y-.2)/1.15);h(660,620,852,34),u(664,624,844*le,26,le>=1?ce.green:ce.orange),c(`TRANSFER ${Math.round(le*100)}%`,660,690,{size:20,spacing:3,color:le>=1?ce.green:ce.orange}),c("UNIT-"+e.id+" \xB7 PRIMARY CIRCUIT",1512,690,{size:16,spacing:3,align:"right"})}function d(N,Y,oe,P,F,Q,{tab:le=ce.orange,label:ne,labelColor:me="#052a1c",alpha:ae=1}={}){if(t.globalAlpha=ae,t.beginPath(),t.moveTo(N,Y),t.lineTo(N+oe,Y-F),t.lineTo(N+oe,Y-F+P),t.lineTo(N,Y+P),t.closePath(),t.fillStyle=Q,t.fill(),le){let Oe=oe*.13,J=F*(Oe/oe),he=F>0?N:N+oe-Oe,A=F>0?Y:Y-F+J;t.beginPath(),t.moveTo(he,A),t.lineTo(he+Oe,A-J),t.lineTo(he+Oe,A-J+P*.32),t.lineTo(he,A+P*.32),t.closePath(),t.fillStyle=le,t.fill()}ne&&(t.save(),t.translate(N+oe/2,Y-F/2+P/2),t.rotate(-Math.atan2(F,oe)),c(ne,0,9,{size:30,weight:800,color:me,align:"center",spacing:2}),t.restore()),t.globalAlpha=1}function E(N,Y){let oe=-Y*150,P=150,F=9,Q=(me,ae)=>Y>.08+ae*.07+me*.035;t.save(),t.translate(-40,oe+40),t.shadowBlur=0,t.strokeStyle=ce.orange,t.lineWidth=3,t.beginPath();for(let me of[300,590,1010,1325])t.moveTo(me,-200),t.lineTo(me,F*P+300);for(let me=0;me<F;me++){let ae=me*P+40;t.moveTo(300,ae),t.lineTo(360,ae),t.moveTo(590,ae),t.lineTo(650,ae),t.moveTo(870,ae+10),t.lineTo(960,ae+10),t.moveTo(1240,ae-30),t.lineTo(1325,ae-30)}t.stroke(),t.shadowColor=ce.green,t.shadowBlur=16;for(let me=0;me<F;me++){let ae=me*P;d(40,ae+110,250,70,115,Q(0,me)?ce.green:ce.greenDim),d(370,ae+110,210,66,95,Q(1,me)?ce.green:ce.greenDim),d(660,ae+110,200,66,95,Q(2,me)?ce.green:ce.greenDim,{label:me===1||me===2?"SYNC":void 0}),d(1030,ae+15,200,66,-95,Q(3,me)?ce.green:ce.greenDim,{label:me===1||me===2?"SYNC":void 0});let Oe=Y>.55+me*.06;t.shadowColor=Oe?ce.green:ce.red,d(1345,ae+15,230,66,-105,Oe?ce.green:ce.red,{label:me>5?"SYNC":void 0,labelColor:Oe?"#052a1c":"#3a0503"}),t.shadowColor=ce.green}t.shadowBlur=0;for(let me=0;me<F;me++){let ae=me*P+50,Oe=133+me;c(`A0${Oe}`,314,ae-16,{size:34,weight:600,sx:.8}),c((me+11).toString(2).padStart(5,"0"),604,ae-16,{size:34,weight:600,sx:.8}),c(`MT-0${1353+me}`,876,ae+2,{size:34,weight:600,sx:.8}),c(`B${24+me}`,1250,ae-40,{size:30,weight:600,sx:.8}),c(`MT-${2353+me}`,1590,ae-40,{size:30,weight:600,sx:.8,align:"right"})}let le=bi((Y-.55)/.06,-.5,F)*P+40;t.save(),t.translate(1300,le),t.rotate(-.42),u(-150,-26,300,52,"#1a5a40"),h(-150,-26,300,52,ce.green,2),c("BORDER-LINE",0,12,{size:30,weight:800,color:ce.orange,align:"center",spacing:3}),t.restore(),c("ABSOLUTE-L",1180,le-60,{size:22,spacing:2}),c(`GTGC0100${(11010+Math.floor(Y*9)).toString()}`,880,F*P-30,{size:34,sx:.8}),t.restore(),u(40,40,520,104,"#000000d0"),h(40,40,520,104),c("CIRCUIT 0001 \u2014 1405",60,84,{size:30,spacing:4,weight:700});let ne=Math.min(1405,Math.round(Cs(Y/(N.end-N.at-.15))*1405));c(`OPEN ${String(ne).padStart(4,"0")} / 1405`,60,126,{size:26,spacing:3,color:ne>=1405?ce.green:ce.orange}),c(ne>=1405?"\u56DE\u7DDA \u5168\u958B":"\u56DE\u7DDA \u958B\u653E\u4E2D",540,126,{font:on,size:40,weight:900,sx:.86,align:"right",color:ne>=1405?ce.green:ce.orange})}function b(N,Y,oe,P=30){u(N,Y-P+2,4,P+6,ce.orange),c(oe,N+18,Y,{size:P,weight:700,color:"#f2a65a",spacing:.5,glow:10})}function y(N,Y){b(90,110,`Monitored Subject : EVA-${e.id} Entry Plug`,36);let oe=bi((Y+.1)/1.3);b(860,900,"Status : Verifying Link-up System",30),b(860,944,`Plug Depth ${(3.2+oe*1.6).toFixed(2)} m  \xB7  Insertion Angle ${(oe*90).toFixed(1)}\xB0`,26),t.strokeStyle="#f2a65a",t.lineWidth=2,t.beginPath();for(let F=0;F<=40;F++){let Q=200+F*16;t.moveTo(60,Q),t.lineTo(F%5===0?92:76,Q)}t.stroke();let P=200+oe*640;t.fillStyle=ce.red,t.beginPath(),t.moveTo(100,P),t.lineTo(122,P-10),t.lineTo(122,P+10),t.closePath(),t.fill()}function B(N,Y,{sync:oe=0,confirmed:P=!1}={}){let F="#e8261c";for(let ne=0;ne<96;ne++){let me=12+ne*16.5,ae=["#e8261c","#36d45a","#2f5bff","#e8261c"][ne%4];t.fillStyle=ae,t.globalAlpha=.7,t.fillRect(me,48,3,ne%3===0?40:26)}t.globalAlpha=1,t.strokeStyle=F,t.lineWidth=2,t.beginPath(),t.moveTo(0,112),t.lineTo(1600,112),t.moveTo(0,880),t.lineTo(1600,880),t.moveTo(150,100),t.lineTo(150,905),t.moveTo(175,100),t.lineTo(175,905),t.stroke();for(let ne=-6;ne<=6;ne++){let me=490-ne*60;t.beginPath(),t.moveTo(140,me),t.lineTo(186,me),t.stroke(),c(`${ne>=0?"+":""}${ne.toFixed(1)}`,196,me+8,{size:20,color:F,weight:600});let ae=800+ne*118;t.beginPath(),t.moveTo(ae,880),t.lineTo(ae,900),t.stroke(),c(`${ne>=0?"+":""}${ne.toFixed(1)}`,ae,930,{size:22,color:F,weight:600,align:"center"})}let le=490-(100-oe)/100*300+Math.sin(Y*3)*6;h(70,le-60,120,120,F,3),t.fillStyle="#ff5a1a",t.beginPath(),t.moveTo(84,le-12),t.lineTo(104,le),t.lineTo(84,le+12),t.closePath(),t.fill(),t.fillRect(104,le-1.5,70,3),b(230,166,`Monitored Subject : EVA-${e.id} Assigned Pilot`,30),b(230,208,P?"Neurological Link-up : Synchronization Complete":"Verifying Neurological Link-up : Calculating Synchronization Rate",26),u(1160,140,380,200,"#000000c0"),h(1160,140,380,200,"#e8261c80",1.5),c("SYNCHRONIZATION RATIO",1520,180,{size:22,spacing:4,align:"right",color:"#f2a65a"}),c(`${oe.toFixed(1)}%`,1520,280,{size:110,weight:700,align:"right",color:oe>=99?ce.green:"#ff8a3d",glow:18}),c(`HARMONICS \xB1${((100-oe)*.12).toFixed(2)}`,1520,320,{size:22,spacing:3,align:"right",color:"#f2a65a"})}let R=(()=>{let Y=(W,Ae=5)=>{let Ke=[W[0]];for(let tt=0;tt<W.length-1;tt++){let Je=W[Math.max(0,tt-1)],Ve=W[tt],et=W[tt+1],pt=W[Math.min(W.length-1,tt+2)];for(let St=1;St<=Ae;St++){let Ut=St/Ae,Zt=Ut*Ut,S=Zt*Ut,k=X=>.5*(2*Ve[X]+(et[X]-Je[X])*Ut+(2*Je[X]-5*Ve[X]+4*et[X]-pt[X])*Zt+(3*Ve[X]-Je[X]-3*et[X]+pt[X])*S);Ke.push([k(0),k(1)])}}return Ke},oe=(W,Ae,Ke=!0)=>Ae.forEach(([tt,Je],Ve)=>Ve===0&&Ke?W.moveTo(tt,Je):W.lineTo(tt,Je)),P=W=>W.map(([Ae,Ke])=>[1600-Ae,Ke]),F=(W,Ae,Ke=5)=>{let tt=Y(Ae,Ke);oe(W,tt),oe(W,P(tt))},Q=[[890,300,17],[911,356,15],[933,412,12],[955,458,13],[978,504,9.5]],le=W=>{let Ae=Q[Math.max(0,W-1)],Ke=Q[Math.min(Q.length-1,W+1)],tt=Math.hypot(Ke[0]-Ae[0],Ke[1]-Ae[1]);return[(Ke[1]-Ae[1])/tt,-(Ke[0]-Ae[0])/tt]},ne=(W,Ae)=>{let Ke=Math.min(Q.length-2,Math.floor(W)),tt=W-Ke,Je=le(Ke),Ve=le(Ke+1),et=Q[Ke][0]+(Q[Ke+1][0]-Q[Ke][0])*tt,pt=Q[Ke][1]+(Q[Ke+1][1]-Q[Ke][1])*tt;return[et+Ae*(Je[0]+(Ve[0]-Je[0])*tt),pt+Ae*(Je[1]+(Ve[1]-Je[1])*tt)]},me=(W,Ae)=>ne(W,Ae*Q[W][2]),ae=(W,Ae)=>[978+.439*W+.898*Ae,504+.898*W-.439*Ae],Oe=[[0,9.5],[10,13],[20,18],[28,22],[31,21],[30,17.5],[24,13],[40,11],[57,10],[61,7.5],[58,5],[45,4.5],[62,4],[65,1.5],[62,-1],[45,-1.5],[60,-2.5],[62,-4.8],[59,-7],[43,-7.5],[51,-8.5],[53,-10.8],[50,-13],[36,-14],[16,-12],[0,-9.5]],J=[[[800,155],[818,158],[832,170],[838,192],[836,214],[829,230]],[[829,230],[819,244],[819,262],[842,274],[868,281],[887,287],[903,298],[912,320],me(1,1),me(2,1),me(3,1),me(4,1)],Oe.map(([W,Ae])=>ae(W,Ae)),[me(4,-1),me(3,-1),me(2,-1),me(1,-1),[884,340],[873,331]],[[873,331],[868,352],[862,385],[853,415],[857,437],[869,458],[879,482],[883,505],[880,560],[869,628],[866,660],[870,700],[869,735],[862,772],[861,800]],[[861,800],[866,816],[875,829],[879,837],[866,841],[846,841],[832,838],[835,824],[839,800]],[[839,800],[834,772],[828,722],[830,690],[832,662],[828,628],[818,575],[809,535],[801,508]]],he=[];for(let W of J){let Ae=Y(W,6);he.length&&Ae.shift(),he.push(...Ae)}let A=new Path2D;oe(A,he),oe(A,P(he).reverse(),!1),A.closePath();let De=new Path2D;for(let W=152;W<=846;W+=4)De.moveTo(600,W),De.lineTo(1e3,W);let ue=new Path2D;F(ue,[[829,230],[818,241],[806,246],[800,247]]),F(ue,[[806,285],[828,287],[856,283],[882,290]]),F(ue,[[806,328],[828,338],[852,337],[866,326]]);for(let W=0;W<10;W++){let Ae=299+W*9.55;F(ue,[[806,Ae-3],[828,Ae-1],[848,Ae+8],[858-W*.7,Ae+22]])}F(ue,[[801,372],[818,385],[838,398],[852,404]]),F(ue,[[808,436],[832,434],[854,442],[866,460],[862,476]]),F(ue,[[826,480],[816,494],[803,498]]),oe(ue,[[800,288],[800,372]]);for(let W of[1,-1])ue.moveTo(800+W*49+8,652),ue.ellipse(800+W*49,652,8,10,0,0,Math.PI*2),ue.moveTo(800+W*42+9,488),ue.arc(800+W*42,488,9,0,Math.PI*2);let Te=new Path2D;Te.ellipse(800,186,31,27,0,0,Math.PI*2),oe(Te,[[800,160],[800,211]]),F(Te,[[804,168],[814,166],[822,174],[818,182]],4),F(Te,[[806,192],[818,188],[828,194],[824,204]],4),F(Te,[[806,178],[812,182],[810,190]],4);let fe=[],We=[],Ie=(W,Ae,Ke="j",tt=0)=>(fe.push({x:W,y:Ae,kind:Ke,side:tt,t:1/0}),fe.length-1),T=(W,Ae,Ke=[],tt=1,Je=!1)=>{let Ve=Y([[fe[W].x,fe[W].y],...Ke,[fe[Ae].x,fe[Ae].y]],4),et=new Path2D;oe(et,Ve);let pt=[0];for(let St=1;St<Ve.length;St++)pt.push(pt[St-1]+Math.hypot(Ve[St][0]-Ve[St-1][0],Ve[St][1]-Ve[St-1][1]));We.push({a:W,b:Ae,pts:Ve,cum:pt,len:pt[pt.length-1],path:et,w:tt,brain:Je,t0:0,t1:0})},_={},C={},H=[],K=Ie(800,494,"s"),G=K,we=(W,Ae,Ke,tt,Je)=>{if(C[W]=Ae,_[W]=Ie(800,Ae,"v"),T(G,_[W],[],2.4),G=_[W],!Ke)return;let Ve=new Path2D,et=800-Ke/2;Ve.moveTo(et+1.5,Ae-tt/2),Ve.lineTo(et+Ke-1.5,Ae-tt/2),Ve.lineTo(et+Ke,Ae-tt/2+1.5),Ve.lineTo(et+Ke,Ae+tt/2-1.5),Ve.lineTo(et+Ke-1.5,Ae+tt/2),Ve.lineTo(et+1.5,Ae+tt/2),Ve.lineTo(et,Ae+tt/2-1.5),Ve.lineTo(et,Ae-tt/2+1.5),Ve.closePath(),Ve.rect(800-Je,Ae-1.4,Je-Ke/2,2.8),Ve.rect(800+Ke/2,Ae-1.4,Je-Ke/2,2.8),H.push({path:Ve,node:_[W],name:W})};we("S2",480),we("S1",466);for(let W=5;W>=1;W--)we(`L${W}`,404+(W-1)*12,22+(W-1),9,18+(W-1)*.6);for(let W=12;W>=1;W--)we(`T${W}`,289+(W-1)*9.545,13+(W-1)*.6,6.4,13+(W-1)*.3);for(let W=7;W>=1;W--)we(`C${W}`,240+(W-1)*7,11,4.6,9.5);let Me=new Path2D;oe(Me,[[784,459],[816,459],[808,492],[792,492]]),Me.closePath();for(let W of[468,478,486])for(let Ae of[1,-1])Me.moveTo(800+Ae*7+1.6,W),Me.arc(800+Ae*7,W,1.6,0,Math.PI*2);let Ue=Ie(800,228,"b");T(_.C1,Ue,[],2.1);let je=Ie(800,214,"b");T(Ue,je,[],1.7,!0);let ve=Ie(800,200,"b");T(je,ve,[],1.6,!0);let Ce={a10:je,th:ve};for(let W of[1,-1]){let Ae=W>0?"R":"L",Ke=Xe=>800+W*(Xe-800),tt=([Xe,Ge])=>[Ke(Xe),Ge],Je=(Xe,Ge="j")=>Ie(Ke(Xe[0]),Xe[1],Ge,W),Ve=(Xe,Ge,Ht=[],at=1,qt=!1)=>T(Xe,Ge,Ht.map(tt),at,qt),et=(Xe,Ge,Ht=.8,at=!1)=>Ge.forEach(([qt,Sn])=>Ve(Xe,Je(qt,"t"),Sn?[Sn]:[],Ht,at)),pt=Je([815,186],"b");Ve(ve,pt,[[808,196]],1.3,!0),et(pt,[[[809,166],[813,175]],[[825,170],[822,178]],[[828,200],[824,193]],[[812,206],[814,197]]],1,!0),et(Ue,[[[828,222],[813,225]]],.9),Ve(_.C2,Je([824,240],"t"),[[812,246]],.9),Ve(_.C3,Je([826,256],"t"),[[814,255]],.9),Ve(_.C4,Je([830,380],"t"),[[810,270],[818,322]],.8);let St=Je([834,289]);for(let Xe of["C5","C6","C7","T1"])Ve(_[Xe],St,[[816,C[Xe]+3]],1.2);let Ut=Je([880,306]);Ve(St,Ut,[[858,295]],1.8),et(Ut,[[[908,312],[897,302]],[ne(1.5,11),ne(.7,10)]],.9);let Zt=Je(ne(2,7));Ve(Ut,Zt,[ne(.6,6),ne(1.3,8)],1.2);let S=Je(ae(4,9));Ve(Zt,S,[ne(2.8,7.5),ne(3.5,7)],1),et(S,[[ae(30,19.5),ae(15,14)]],.8);let k=Je(ne(2,-1));Ve(Ut,k,[ne(.8,-1),ne(1.4,-1)],1.5);let X=Je(ae(2,1));Ve(k,X,[ne(2.8,-1),ne(3.5,0)],1.3);let j=Je(ae(24,3));Ve(X,j,[],1.1),et(j,[[ae(29,19),ae(22,12)],[ae(59,7.5),ae(42,7)],[ae(63,1.5),ae(44,2)]]);let x=Je(ne(2,-8));Ve(Ut,x,[ne(.9,-9),ne(1.5,-8.5)],1.2);let D=Je(ae(3,-6));Ve(x,D,[ne(2.8,-7.5),ne(3.5,-6.5)],1.1);let V=Je(ae(24,-7));Ve(D,V,[],1),et(V,[[ae(60,-4.8),ae(43,-5)],[ae(51,-10.8),ae(36,-10)]]);let se=0;for(let Xe=0;Xe<10;Xe++){let Ge=C[`T${Xe+2}`],Ht=Je([848-Xe*.5,Ge+15+Xe*.6],"t");Xe===4&&(se=Ht),Ve(_[`T${Xe+2}`],Ht,[[812,Ge+1],[832,Ge+5]],.85)}Ve(_.T12,Je([846,430],"t"),[[816,398],[836,412]],.85);let ge=Je([824,448]);for(let Xe of["L1","L2","L3","L4"])Ve(_[Xe],ge,[[812,C[Xe]+4]],1.1);et(ge,[[[858,470],[842,454]],[[818,545],[812,490]]],.85);let Se=Je([842,502]);Ve(ge,Se,[[833,474]],1.4),et(Se,[[[866,578],[857,537]],[[852,604],[847,548]]],.9);let He=Je([838,662]);Ve(Se,He,[[834,545],[832,605]],1),et(He,[[[840,798],[834,722]]],.9);let Fe=Je([822,484]);for(let Xe of["L5","S1","S2"])Ve(_[Xe],Fe,[[812,C[Xe]+5]],1.3);et(Fe,[[[862,474],[842,478]]],.85);let Ze=Je([848,628]);Ve(Fe,Ze,[[832,508],[840,552],[845,596]],2);let nt=Je([845,794]);Ve(Ze,nt,[[846,680],[842,740]],1.4);let mt=Je([843,816]);Ve(nt,mt,[],1.1),et(mt,[[[834,837]],[[845,839]],[[856,838]]]);let Nt=Je([858,790]);Ve(Ze,Nt,[[858,650],[865,692],[863,742]],1.2),et(Nt,[[[874,834],[867,816]]]),Object.assign(Ce,{[`hemi${Ae}`]:pt,[`ax${Ae}`]:Ut,[`me${Ae}`]:k,[`mw${Ae}`]:X,[`lp${Ae}`]:ge,[`fem${Ae}`]:Se,[`pop${Ae}`]:Ze,[`ank${Ae}`]:nt,[`per${Ae}`]:Nt,[`ic${Ae}`]:se})}let qe=.72,Ye=.64,Be=fe.map(()=>1/0);Be[K]=0;let de=0;for(let W of We){if(W.brain)continue;let Ae=Be[W.a]+W.len;Be[W.b]=Math.min(Be[W.b],Ae),de=Math.max(de,Ae)}let _e=qe/de;fe[K].t=0;let ke=0,U=0;for(let W of We)W.t0=W.brain?Math.max(Ye,fe[W.a].t):fe[W.a].t,W.t1=W.t0+W.len*_e*(W.brain?2.4:1),fe[W.b].t=Math.min(fe[W.b].t,W.t1),ke=Math.max(ke,W.t1),U+=W.len;let Ee=new Path2D;for(let W of We)Ee.addPath(W.path);let $=(W,Ae,Ke)=>({node:W,label:Ae,x:fe[W].x+Ke,y:fe[W].y+3.5,align:Ke<0?"right":"left"}),pe=[...["C3","C7","T3","T7","T11","L2","L4","S1"].map((W,Ae)=>$(_[W],W,Ae%2?26:-26)),$(Ce.axR,"N-011",8),$(Ce.axL,"N-012",-8),$(Ce.meR,"N-014",9),$(Ce.meL,"N-015",-9),$(Ce.lpR,"N-021",10),$(Ce.lpL,"N-022",-10),$(Ce.popR,"N-041",10),$(Ce.popL,"N-042",-10)],Re={x:585,y:132,w:430,h:716},be=(W,Ae,Ke,tt,Je=0)=>{let{x:Ve,y:et}=fe[W],pt=Je||(Ve>=800?1:-1),St=pt>0?1040:560,Ut=Math.min(Math.abs(Ae-et),Math.abs(St-Ve)-30),Zt=new Path2D;return Zt.moveTo(Ve,et),Zt.lineTo(Ve+pt*Ut,et+Math.sign(Ae-et)*Ut),Zt.lineTo(St-pt*6,Ae),{node:W,lx:St,ly:Ae,s:pt,title:Ke,sub:tt,path:Zt,ax:Ve,ay:et}},$e=[be(Ce.hemiR,168,"CEREBRUM","CORTEX \xB7 N-003"),be(Ce.a10,226,"A10 NERVE","LIMBIC \xB7 \u4E2D\u67A2"),be(Ce.axR,300,"BRACHIAL PLEXUS","C5\u2013T1 \xB7 N-011"),be(Ce.mwR,448,"MEDIAN N.","CARPAL \xB7 N-017"),be(Ce.popR,612,"SCIATIC N.","L4\u2013S3 \xB7 N-041"),be(Ce.ankR,762,"TIBIAL N.","PLANTAR \xB7 N-044"),be(_.C4,236,"CERVICAL","C1\u2013C7 \xB7 \u810A\u9AC4",-1),be(Ce.icL,352,"INTERCOSTAL","T2\u2013T12 \xB7 \u672B\u68A2"),be(Ce.lpL,448,"LUMBAR PLEXUS","L1\u2013L4 \xB7 N-022"),be(Ce.femL,552,"FEMORAL N.","L2\u2013L4 \xB7 N-032"),be(Ce.perL,742,"PERONEAL N.","FIBULAR \xB7 N-045")],it=new Path2D,ht=[],{x:Qe,y:ut,w:vt,h:xt}=Re;for(let W=0;W<=180;W+=5){let Ae=838-W*3.88;if(Ae<ut)break;let Ke=W%25===0?12:5;it.moveTo(Qe,Ae),it.lineTo(Qe+Ke,Ae),W%25===0&&ht.push([String(W),Qe+16,Ae+4,"left"])}for(let W=ut;W<=ut+xt;W+=10){let Ae=(W-ut)%50===0?10:4;it.moveTo(Qe+vt,W),it.lineTo(Qe+vt-Ae,W)}for(let W=-210;W<=210;W+=10){let Ae=W%50===0?10:4;it.moveTo(800+W,ut),it.lineTo(800+W,ut+Ae),it.moveTo(800+W,ut+xt),it.lineTo(800+W,ut+xt-Ae*.6),Math.abs(W)===100&&ht.push([String(Math.abs(W)),800+W,ut+24,"center"])}let ot=[[0,800,480],[.2,800,420],[.34,800,300],[.48,978,520],[.6,622,520],[.72,846,800],[.86,800,190],[1.2,800,190]],Tt=[];for(let W=1;W<=7;W++)Tt.push(_[`C${W}`]);for(let W=1;W<=12;W++)Tt.push(_[`T${W}`]);for(let W=1;W<=5;W++)Tt.push(_[`L${W}`]);return Tt.push(_.S1,_.S2),{outline:A,hatch:De,bones:ue,brain:Te,sacrum:Me,verts:H,nodes:fe,edges:We,nerves:Ee,tags:pe,callouts:$e,frame:Re,ticks:it,tickText:ht,reticle:ot,index:Tt,tEnd:ke,total:U,LIMB_END:qe,cord:_.C1}})(),I=[0,0],O=[3,26],w=[],M=new Float32Array(R.edges.length*2),L=Array.from({length:10},(N,Y)=>`#5cf2a0${Math.round(30-Y*3).toString(16).padStart(2,"0")}`);function te(N,Y){g(N,Y,"MONITOR 12 \xB7 NERVE CONNECTION");let oe=Y/(N.end-N.at-.15),P=R,F=P.frame,Q=P.nodes,le=oe>=P.tEnd,ne="#ff7a1a80";t.lineWidth=1,t.strokeStyle="#ff7a1a40",t.strokeRect(F.x+.5,F.y+.5,F.w,F.h),t.strokeStyle="#ff7a1a90",t.stroke(P.ticks);for(let[C,H,K,G]of P.tickText)c(C,H,K,{size:11,color:"#ff7a1a99",align:G,weight:500});f(F.x-6,F.y-6,F.w+12,F.h+12,14,ce.orange),c("ANTERIOR \xB7 FRONT VIEW",F.x+40,F.y+46,{size:12,spacing:2,weight:500,color:"#ff7a1ab0"}),c("SCALE 1:9.6",F.x+F.w-18,F.y+46,{size:12,spacing:2,weight:500,align:"right",color:"#ff7a1ab0"}),c("cm",F.x+16,F.y+F.h-8,{size:11,color:"#ff7a1a99",weight:500}),t.fillStyle="#ff7a1a0e",t.fill(P.outline),t.save(),t.clip(P.outline),t.strokeStyle="#ff7a1a16",t.stroke(P.hatch),t.restore(),t.lineCap="round",t.lineJoin="round",t.strokeStyle="#ff7a1a2a",t.lineWidth=2,t.stroke(P.bones);let me=oe>=Q[P.callouts[0].node].t;t.strokeStyle=me?"#5cf2a050":"#ff7a1a30",t.lineWidth=1,t.stroke(P.brain),le?(t.save(),t.strokeStyle="#5cf2a0c0",t.shadowColor=ce.green,t.shadowBlur=10,t.lineWidth=1.6,t.stroke(P.outline),t.restore()):(t.strokeStyle="#ff7a1a88",t.lineWidth=1.4,t.stroke(P.outline));let ae=oe>.005;t.fillStyle=ae?"#12402a":"#1a0d05",t.fill(P.sacrum),t.strokeStyle=ae?ce.green:ne,t.stroke(P.sacrum);for(let C of P.verts){let H=oe>=Q[C.node].t;t.fillStyle=H?"#17503a":"#1a0d05",t.fill(C.path),t.strokeStyle=H?ce.green:ne,t.stroke(C.path)}t.strokeStyle="#ff7a1a48",t.lineWidth=1,t.stroke(P.nerves);let Oe=0,J=0;for(let C of P.edges){let H=(oe-C.t0)/(C.t1-C.t0);if(H<=0)continue;let K=H>=1;if(!K){I[0]=C.len*H,I[1]=C.len+8,t.setLineDash(I);let G=C.len*H,we=1;for(;we<C.cum.length-1&&C.cum[we]<G;)we++;let Me=(G-C.cum[we-1])/(C.cum[we]-C.cum[we-1]||1);M[J*2]=C.pts[we-1][0]+(C.pts[we][0]-C.pts[we-1][0])*Me,M[J*2+1]=C.pts[we-1][1]+(C.pts[we][1]-C.pts[we-1][1])*Me,J++}Oe+=C.len*(K?1:H),t.strokeStyle="#5cf2a02c",t.lineWidth=C.w*2+3,t.stroke(C.path),t.strokeStyle=K&&oe-C.t1>.06?ce.green:"#d4ffe6",t.lineWidth=C.w,t.stroke(C.path),K||t.setLineDash(w)}t.setLineDash(O),t.lineDashOffset=-Y*120,t.strokeStyle="#f2fff8c0";for(let C of P.edges)oe<C.t1||C.w<1.05||(t.lineWidth=C.w+.4,t.stroke(C.path));if(t.setLineDash(w),t.lineDashOffset=0,J){t.save(),t.fillStyle="#ffffff",t.shadowColor=ce.green,t.shadowBlur=12,t.beginPath();for(let C=0;C<J;C++)t.moveTo(M[C*2]+2.6,M[C*2+1]),t.arc(M[C*2],M[C*2+1],2.6,0,Math.PI*2);t.fill(),t.restore()}for(let C of Q){if(C.kind==="v")continue;let H=oe-C.t,K=H>=0;if(C.kind==="t"){u(C.x-1.6,C.y-1.6,3.2,3.2,K?ce.green:ne);continue}let G=C.kind==="b"?3.4:C.kind==="s"?5:2.8;if(u(C.x-G,C.y-G,G*2,G*2,K?ce.green:ce.bg),t.strokeStyle=K?ce.green:ce.orange,t.lineWidth=1,C.kind==="b"?(t.beginPath(),t.arc(C.x,C.y,G+2.5,0,Math.PI*2),t.stroke()):t.strokeRect(C.x-G-2,C.y-G-2,G*2+4,G*2+4),K&&H<.08){let we=H/.08;t.globalAlpha=1-we,t.strokeStyle="#ffffff";let Me=G+3+we*14;t.strokeRect(C.x-Me,C.y-Me,Me*2,Me*2),t.globalAlpha=1}}for(let C of P.tags){let H=oe>=Q[C.node].t,K=C.label.length*6.4+6,G=C.align==="right"?C.x-K+3:C.align==="center"?C.x-K/2:C.x-3;u(G,C.y-10,K,13,"#040405d0"),c(C.label,C.x,C.y,{size:11,color:H?ce.green:ce.orange,align:C.align,spacing:.5,weight:600})}for(let C of P.callouts){let H=oe>=Q[C.node].t,K=H?ce.green:ce.orange;t.strokeStyle=H?"#5cf2a0b0":"#ff7a1a70",t.lineWidth=1,t.stroke(C.path),u(C.ax-2,C.ay-2,4,4,K);let G=C.s>0?"left":"right";u((C.s>0,C.lx-4),C.ly-4,8,8,K),c(C.title,C.lx+C.s*10,C.ly+5,{size:16,color:K,align:G,spacing:1.5}),c(`${C.sub} \xB7 ${H?"LINK":"WAIT"}`,C.lx+C.s*10,C.ly+22,{size:11,color:H?"#5cf2a0b0":"#ff7a1aa0",align:G,spacing:1.2,weight:500})}let he=F.y+Y*.85%1*F.h;for(let C=0;C<L.length;C++){let H=he-(C+1)*4;H>F.y&&u(F.x+1,H,F.w-1,4,L[C])}u(F.x+1,he,F.w-1,1.5,"#9dffd0b0"),c(`SCAN ${String(Math.round((he-F.y)/F.h*999)).padStart(3,"0")}`,F.x+F.w-8,he-4,{size:10,color:"#9dffd0",align:"right",weight:500});let A=P.reticle,De=0;for(;De<A.length-2&&oe>A[De+1][0];)De++;let ue=Cs(bi((oe-A[De][0])/(A[De+1][0]-A[De][0])*2.2)),Te=A[De][1]+(A[De+1][1]-A[De][1])*ue,fe=A[De][2]+(A[De+1][2]-A[De][2])*ue,We=ue>=1;t.strokeStyle=We?ce.green:ce.orange,t.lineWidth=1.2,t.beginPath(),t.arc(Te,fe,22,Y*3,Y*3+1.1),t.moveTo(Te+22*Math.cos(Y*3+Math.PI),fe+22*Math.sin(Y*3+Math.PI)),t.arc(Te,fe,22,Y*3+Math.PI,Y*3+Math.PI+1.1),t.moveTo(Te-34,fe),t.lineTo(Te-12,fe),t.moveTo(Te+12,fe),t.lineTo(Te+34,fe),t.moveTo(Te,fe-34),t.lineTo(Te,fe-12),t.moveTo(Te,fe+12),t.lineTo(Te,fe+34),t.stroke(),t.strokeRect(Te-30,fe-30,60,60),c(`X${String(Math.round(Te)).padStart(4,"0")} Y${String(Math.round(fe)).padStart(4,"0")}`,Te+34,fe-34,{size:10,color:We?ce.green:ce.orange,weight:500,spacing:1}),c("\u7B2C\u4E8C\u6B21\u63A5\u7D9A",80,170,{font:on,size:54,weight:900,color:ce.orange,sx:.86}),c("SECONDARY CONTACT \xB7 NERVE LINK",82,204,{size:18,spacing:4});for(let C=0;C<14;C++){let H=254+C*42,K=(oe-.05-C*.06)/.08,G=K>0,we=G?ce.green:ne;c(`NERVE ${String(C+1).padStart(3,"0")}`,84,H,{size:19,color:we,spacing:2});let Me=G?Math.ceil(12*bi(K)):0;for(let Ue=0;Ue<12;Ue++)u(196+Ue*12,H-15,10,15,Ue<Me?ce.green:G?ce.greenDim:"#2a1206");c(G?"\u63A5\u7D9A":"\u5F85\u6A5F",352,H,{font:on,size:19,weight:900,color:G?ce.green:ce.orangeDim}),c((.31+a(C+40)*.6).toFixed(2),438,H,{size:12,color:G?"#5cf2a0a0":"#ff7a1a60",align:"right",weight:500})}c("SPINAL INDEX \xB7 \u810A\u9AC4",1250,146,{size:14,spacing:2}),c("C1\u2014S2",1520,146,{size:14,spacing:2,align:"right"}),P.index.forEach((C,H)=>{let K=oe>=Q[C].t;u(1250+H*10.4,156,9,20,K?ce.green:"#2a1206")}),[["C",0],["T",7],["L",19],["S",24]].forEach(([C,H])=>{u(1250+H*10.4,180,1,8,ce.orange),c(C,1254+H*10.4,192,{size:12,color:ce.orange,weight:500})});for(let C=0;C<10;C++){let H=214+C*42,K=oe>.1+C*.075,G=K?ce.green:ce.red;c(`PHASE ${String(C+8).padStart(2,"0")}`,1250,H+26,{size:20,color:G,spacing:2}),u(1370,H+7,150,26,K?ce.green:"#3a0806"),h(1370,H+7,150,26,G),c(K?"CLEAR":"HOLD",1378,H+26,{size:14,color:K?ce.bg:ce.red,spacing:2})}let Ie=Oe/P.total*100;c("NEURAL LINK RATE",1250,660,{size:14,spacing:2}),c(`${Ie.toFixed(1).padStart(5,"0")}%`,1520,712,{size:50,color:Ie>=100?ce.green:ce.orange,align:"right",spacing:1,glow:Ie>=100?12:0}),h(1250,724,270,8,ce.orangeDim,1),u(1252,726,266*bi(Ie/100),4,Ie>=100?ce.green:ce.orange);let T=oe>=Q[P.cord].t,_=oe>=P.LIMB_END;c("\u4E2D\u67A2 CENTRAL",1250,762,{size:15,spacing:1.5,color:T?ce.green:ce.orange}),c(T?"\u6B63\u5E38":"\u5F85\u6A5F",1520,762,{font:on,size:18,weight:900,align:"right",color:T?ce.green:ce.orange}),c("\u672B\u68A2 PERIPHERAL",1250,788,{size:15,spacing:1.5,color:_?ce.green:ce.orange}),c(_?"\u6B63\u5E38":"\u5F85\u6A5F",1520,788,{font:on,size:18,weight:900,align:"right",color:_?ce.green:ce.orange}),c(`LINKED ${Math.min(14,Math.max(0,Math.floor((oe-.05)/.06)+1))} / 14`,1520,826,{size:22,spacing:3,align:"right",color:ce.green})}let q=["AMYGDALA","HIPPOCAMPUS","PARIETAL LOBE","MOTOR CORTEX","SENSORY CORTEX"];function Z(N,Y){g(N,Y,"MONITOR 03 \xB7 A10 NERVE / VITAL"),c("A10 \u795E\u7D4C\u63A5\u7D9A",80,170,{font:on,size:54,weight:900,color:ce.orange,sx:.86}),c("A10 NERVE CONNECTION",82,204,{size:18,spacing:4});let oe=104;q.forEach((P,F)=>{let Q=250+F*oe;h(80,Q,1060,oe-16,ce.orangeDim),c(P,96,Q+28,{size:18,spacing:3});let le=Cs((Y-F*.08)/.5);t.save(),t.beginPath(),t.rect(80,Q,1060*le,oe-16),t.clip(),t.strokeStyle=ce.green,t.lineWidth=2,t.shadowColor=ce.green,t.shadowBlur=8,t.beginPath();let ne=Q+(oe-16)/2+10;for(let ae=0;ae<=1040;ae+=4){let Oe=ae/1040*6+Y*4+F*1.3,J=Oe%1,he=Math.sin(Oe*9+F)*3;J>.42&&J<.5?he-=(J-.42)*380:J>=.5&&J<.56&&(he+=(.56-J)*300-4);let A=90+ae;ae===0?t.moveTo(A,ne+he):t.lineTo(A,ne+he)}t.stroke(),t.restore();let me=Y>.35+F*.12;c(me?"NORMAL":"SCAN",1124,Q+28,{size:18,spacing:3,align:"right",color:me?ce.green:ce.orange})}),h(1180,250,340,260,ce.green),c("\u7570\u5E38\u306A\u3057",1350,410,{font:on,size:84,weight:900,color:ce.green,align:"center",sx:.82,glow:Y>.9?18:0}),c("NOMINAL",1350,470,{size:24,spacing:8,align:"center",color:ce.green}),c("MENTAL CONTAMINATION",1180,560,{size:18,spacing:3});for(let P=0;P<20;P++){let F=P<12?ce.green:P<16?ce.orange:ce.red;u(1180+P*17,576,13,34,P<3?F:F+"33")}c("CAUTION",1384,636,{size:14,spacing:2,color:ce.orange}),c("DANGER",1452,656,{size:14,spacing:2,color:ce.red}),c("L.C.L. PURITY  99.9999989%",1180,712,{size:20,spacing:2,color:ce.green})}function re(N,Y,oe){t.beginPath();for(let P=0;P<6;P++){let F=Math.PI/3*P+Math.PI/6,Q=N+oe*Math.cos(F),le=Y+oe*Math.sin(F);P===0?t.moveTo(Q,le):t.lineTo(Q,le)}t.closePath()}function ee(N,Y){g(N,Y,"MONITOR 01 \xB7 TRI-COMPUTER CONSENSUS"),c("\u53CC\u65B9\u5411\u56DE\u7DDA \u958B\u653E",80,170,{font:on,size:54,weight:900,color:ce.orange,sx:.86}),c("BIDIRECTIONAL CIRCUIT \xB7 OPEN",82,204,{size:18,spacing:4}),[["CASPER \xB7 3",560,560],["BALTHASAR \xB7 2",800,400],["MELCHIOR \xB7 1",1040,560]].forEach(([P,F,Q],le)=>{let ne=Y>.12+le*.14;re(F,Q,140),t.fillStyle=ne?"#0f3a26":"#1a0b05",t.fill(),t.strokeStyle=ne?ce.green:ce.orange,t.lineWidth=3,t.stroke(),c(P,F,Q-24,{size:26,spacing:3,align:"center",color:ne?ce.green:ce.orange}),c(ne?"\u627F\u8A8D":"\u5BE9\u8B70\u4E2D",F,Q+46,{font:on,size:52,weight:900,align:"center",color:ne?ce.green:ce.orange,sx:.86})}),t.strokeStyle=ce.orangeDim,t.lineWidth=2,t.beginPath(),t.moveTo(560,560),t.lineTo(800,400),t.lineTo(1040,560),t.closePath(),t.stroke(),Y>.55&&c("\u5168\u4F1A\u4E00\u81F4 \xB7 UNANIMOUS",800,820,{size:30,spacing:6,align:"center",color:ce.green,glow:12})}let ye={title:v,power:m,lines:E,neural:te,brain:Z,magi:ee},ie={xray:y,helix:B};function Pe(){let N=Math.min(n*r/1600,s*r/1e3);return[N,(n*r-1600*N)/2,(s*r-1e3*N)/2]}function Le(N,Y={}){let oe=Y.hidden?null:dc(N),P=oe||Y.hidden?null:pc(N);if(!oe&&!P)return o&&(t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i.width,i.height),o=null),null;if(P){o=P,t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i.width,i.height);let[Oe,J,he]=Pe();return t.setTransform(Oe,0,0,Oe,J,he),ie[P.kind](P,N-P.at,Y),"scope"}o=oe;let F=N-oe.at;t.setTransform(1,0,0,1,0,0),t.fillStyle=oe.kind==="title"?"#000":ce.bg,t.fillRect(0,0,i.width,i.height);let[Q,le,ne]=Pe(),me=F<.07?(a(oe.at)-.5)*40*Q:0;if(t.setTransform(Q,0,0,Q,le+me,ne),ye[oe.kind](oe,F),t.setTransform(1,0,0,1,0,0),oe.kind!=="title"){t.fillStyle="#00000038";let Oe=Math.max(2,Math.round(3*r));for(let J=0;J<i.height;J+=Oe)t.fillRect(0,J,i.width,1)}let ae=t.createRadialGradient(i.width/2,i.height/2,i.height*.3,i.width/2,i.height/2,i.height*.85);return ae.addColorStop(0,"#00000000"),ae.addColorStop(1,"#000000a0"),t.fillStyle=ae,t.fillRect(0,0,i.width,i.height),F<.05&&(t.fillStyle="#ffffff22",t.fillRect(0,0,i.width,i.height)),"cut"}return{resize:l,update:Le,dispose(){t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i.width,i.height)}}}var Rs=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),wt=(i,e,t)=>{let n=Rs((t-i)/(e-i));return n*n*(3-2*n)},eh=i=>1-Math.pow(1-Rs(i),3),th=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,kt=(i,e,t)=>i+(e-i)*t,xe={insertEnd:3.3,lockStart:4.4,lockEnd:6,cut:6.6,lights:7,lclStart:8.4,lclEnd:12.4,electric:11.6,electricEnd:12.9,power:13.1,rainbowStart:15,rainbowEnd:19.6,syncStart:20.6,syncStop:25.4},hn=i=>{let e=parseInt(String(i).slice(1),16);return new z((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)};function Yr(i,e,t,n=!1){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Nr(s);return r.anisotropy=4,n&&(r.wrapS=r.wrapT=xs),r}var si="'EVA Condensed','Barlow Condensed','Arial Narrow',sans-serif";function V0(i,e){return Yr(2048,1024,(t,n,s)=>{let r=i.palette.red;t.fillStyle="#ffffff",t.fillRect(0,0,n,s);let o=a=>e(a)*s;t.fillStyle=r;for(let[a,l]of[[-2.25,-2.05],[-1,-.92],[1.62,1.86],[2,2.06]])t.fillRect(0,o(a),n,o(l)-o(a));for(let a of[.18,.68])t.fillRect(a*n,o(-1.9),60,o(1.5)-o(-1.9));t.strokeStyle="#20140f",t.lineWidth=5;for(let a of[-2.35,-1.7,-.4,.8,1.5,2.2])t.beginPath(),t.moveTo(0,o(a)),t.lineTo(n,o(a)),t.stroke();t.lineWidth=4;for(let a of[0,.25,.5,.75])t.beginPath(),t.moveTo(a*n+2,o(-1.7)),t.lineTo(a*n+2,o(1.5)),t.stroke();t.lineWidth=3;for(let[a,l,c]of[[.06,-.3,.6],[.31,.95,1.4],[.56,-1.55,-.6],[.81,-.3,.6],[.41,-1.55,-1.1]]){let h=a*n;t.strokeRect(h,o(l),150,o(c)-o(l)),t.fillStyle="#20140f";for(let u=0;u<4;u++)t.fillRect(h+12+u*36,o(c)-18,18,6)}t.fillStyle="#3a302b";for(let a of[.12,.62])for(let l=0;l<7;l++)t.fillRect(a*n,o(.85)+l*16,110,7);t.textBaseline="middle",t.font=`800 120px ${si}`;for(let a of[.36,.86])t.save(),t.translate(a*n,o(.1)),t.rotate(-Math.PI/2),t.fillStyle=r,t.fillText(i.id,-60,0),t.restore();t.fillStyle="#20140f",t.font=`700 34px ${si}`;for(let a of[.02,.52])t.save(),t.translate(a*n+40,o(-1.65)),t.rotate(Math.PI/2),t.fillText(`ENTRY PLUG \xB7 EVA-${i.id} \xB7 HANDLE WITH CARE`,0,0),t.restore();t.font=`700 26px ${si}`;for(let a of[.27,.77])t.fillText("CAUTION  LCL HIGH PRESSURE",a*n,o(1.74)+2)})}function H0(i){return Yr(512,512,e=>{e.fillStyle="#f2ede4",e.fillRect(0,0,512,512),e.strokeStyle="#20140f",e.lineWidth=10,e.beginPath(),e.arc(256,256,236,0,Math.PI*2),e.stroke(),e.lineWidth=5,e.beginPath(),e.arc(256,256,180,0,Math.PI*2),e.stroke(),e.fillStyle="#20140f";for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.beginPath(),e.arc(256+Math.cos(n)*208,256+Math.sin(n)*208,9,0,Math.PI*2),e.fill()}e.fillStyle=i.palette.red,e.font=`900 210px ${si}`,e.textAlign="center",e.textBaseline="middle",e.fillText(i.id,256,262)})}function G0(i){return Yr(1024,1024,(e,t,n)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,n),e.strokeStyle="#2a0c0e",e.lineWidth=5;for(let[s,r,o,a]of[[60,80,380,260],[520,60,440,200],[80,420,300,480],[460,330,500,300],[470,700,480,250]])e.strokeRect(s,r,o,a);e.fillStyle="#2a0c0e";for(let s=0;s<40;s++)e.fillRect(70+s%10*34,360+Math.floor(s/10)*14,10,6);e.font=`700 40px ${si}`,e.fillStyle="#e8dcd0",e.fillText(`EVA-${i.id}`,560,300),e.font=`700 24px ${si}`,e.fillText("DANGER \xB7 KEEP CLEAR OF PLUG HATCH",480,680)},!0)}function W0(i){return Yr(512,256,(e,t,n)=>{e.fillStyle="#050806",e.fillRect(0,0,t,n),e.strokeStyle="#ff7a1a",e.lineWidth=2,e.strokeRect(6,6,t-12,n-12),e.fillStyle="#ff7a1a",e.font=`700 26px ${si}`,e.fillText(`EVA-${i.id}  SYNC MONITOR`,20,40);for(let s=0;s<12;s++)e.fillStyle=s<9?"#5cf2a0":"#e8261c",e.fillRect(20+s*38,70,30,60+s%4*18);e.fillStyle="#5cf2a0",e.font=`600 22px ${si}`,e.fillText("A10 \xB7 HARMONICS \xB7 LCL",20,226)})}var X0=`
uniform vec3 uLightDir;
varying vec3 vN;
varying vec3 vView;
varying vec3 vL;
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vN = normalize(normalMatrix * normal);
  vL = normalize((viewMatrix * vec4(uLightDir, 0.0)).xyz);
  gl_Position = projectionMatrix * mv;
}
`,q0=`
precision highp float;
uniform vec3 uColor;
uniform vec3 uShade;
uniform vec3 uEmissive;
uniform sampler2D uMap;
uniform float uUseMap;
uniform vec2 uRepeat;
uniform vec3 uRim;
uniform float uRimK;
uniform vec3 uFogColor;
uniform vec2 uFog;
uniform float uExposure;
uniform float uLevel;
varying vec3 vN;
varying vec3 vView;
varying vec3 vL;
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  vec3 base = uColor;
  if (uUseMap > 0.5) base *= texture2D(uMap, vUv * uRepeat).rgb;
  float d = dot(n, vL);
  float lit = smoothstep(0.04, 0.09, d);
  float hi = smoothstep(0.9, 0.93, d);
  vec3 col = mix(base * uShade, base, lit);
  col = mix(col, min(vec3(1.0), base * 1.25 + 0.06), hi * 0.6);
  float fr = 1.0 - max(dot(n, normalize(-vView)), 0.0);
  col += uRim * smoothstep(0.62, 0.68, fr) * uRimK;
  col *= uExposure;
  col += uEmissive;
  float under = step(vWorld.y, uLevel);
  col = mix(col, col * vec3(1.05, 0.6, 0.3) + vec3(0.05, 0.02, 0.0), under * 0.55);
  float fog = smoothstep(uFog.x, uFog.y, length(vView));
  gl_FragColor = vec4(mix(col, uFogColor, fog), 1.0);
}
`,nh=`
uniform vec2 uRes;
uniform float uWidth;
void main() {
  vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec3 vn = normalize(normalMatrix * normal);
  vec4 cn = projectionMatrix * vec4(vn, 0.0);
  vec2 dir = normalize(cn.xy + 1e-5);
  clip.xy += dir * uWidth * clip.w * 2.0 / uRes;
  gl_Position = clip;
}
`,ih=`
precision highp float;
uniform vec3 uInk;
void main() { gl_FragColor = vec4(uInk, 1.0); }
`,Y0=`
varying vec3 vWorld;
void main() {
  vWorld = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,$0=`
precision highp float;
uniform vec3 uTop;
uniform vec3 uBottom;
uniform vec3 uGlow;
varying vec3 vWorld;
void main() {
  vec3 d = normalize(vWorld);
  float h = d.y * 0.5 + 0.5;
  vec3 col = mix(uBottom, uTop, smoothstep(0.25, 0.85, h));
  float g = max(0.0, 1.0 - length(d.xy - vec2(-0.1, 0.05)) * 1.4);
  col += uGlow * floor(g * 4.0) / 4.0 * 0.6;
  gl_FragColor = vec4(col, 1.0);
}
`,Z0=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,J0=`
precision highp float;
uniform sampler2D tScene;
uniform float uTime;
uniform float uSubmerged;
uniform float uElectric;
uniform float uFade;
uniform float uFlash;
uniform float uSpeed;
uniform vec2 uRes;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  float w = uSubmerged;
  uv += w * 0.006 * vec2(sin(uv.y * 18.0 + uTime * 1.7), cos(uv.x * 14.0 + uTime * 1.3));
  float tear = step(0.985 - uElectric * 0.06, hash(vec2(floor(uv.y * 90.0), floor(uTime * 24.0))));
  uv.x += tear * uElectric * 0.03;
  vec2 dir = (uv - 0.5);
  float ab = 0.0012 + 0.004 * w + 0.01 * uElectric;
  vec3 col;
  col.r = texture2D(tScene, uv + dir * ab).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - dir * ab).b;
  vec3 lcl = vec3(1.0, 0.55, 0.22);
  col = mix(col, col * lcl * 1.3 + lcl * 0.04, w * 0.7);
  // anime speed lines
  float row = floor(vUv.y * 160.0);
  float lane = hash(vec2(row, 3.0));
  float streak = step(0.82, lane) * step(0.55, fract(vUv.x * (0.6 + lane) - uTime * (3.0 + lane * 4.0) + lane * 7.0));
  float edge = smoothstep(0.12, 0.5, abs(vUv.y - 0.5));
  col = mix(col, vec3(0.98, 0.95, 0.9), streak * edge * uSpeed * 0.55);
  float scan = 0.5 + 0.5 * sin(vUv.y * uRes.y * 1.4);
  col *= 1.0 - (0.03 + 0.2 * uElectric) * scan;
  col += uElectric * 0.08 * vec3(1.0, 0.7, 0.4) * step(0.7, hash(vec2(uTime, vUv.y)));
  float vig = smoothstep(1.1, 0.3, length(dir * vec2(1.15, 1.0)));
  col *= mix(0.55, 1.0, vig);
  col += (hash(vUv * uRes + uTime) - 0.5) * 0.03;
  col += uFlash * vec3(1.0, 0.86, 0.68);
  col *= uFade;
  gl_FragColor = vec4(col, 1.0);
}
`,sh=`
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,K0=`
precision highp float;
uniform float uTime;
uniform float uLights;
uniform float uRainbow;
uniform float uView;
uniform float uLevel;
uniform float uElectric;
uniform vec3 uAccent;
varying vec2 vUv;
varying vec3 vPos;

float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 15731.743); }
vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }

void main() {
  vec2 p = vec2(vUv.x * 24.0, vUv.y * 10.0);
  vec2 cell = floor(p);
  vec2 f = fract(p);
  float seam = step(0.03, f.x) * step(f.x, 0.97) * step(0.04, f.y) * step(f.y, 0.96);
  float tone = 0.16 + 0.05 * floor(hash(cell) * 3.0);
  vec3 base = vec3(tone * 1.05, tone * 0.95, tone * 1.0) * mix(0.25, 1.0, seam);
  float inner = step(0.1, f.x) * step(f.x, 0.9) * step(0.14, f.y) * step(f.y, 0.86);
  base *= mix(1.0, 0.82, seam * (1.0 - inner));
  float lamp = step(0.8, hash(cell + 3.1)) * step(length((f - vec2(0.8, 0.24)) * vec2(1.0, 0.6)), 0.07);
  float blink = step(0.5, fract(uTime * (0.6 + hash(cell) * 2.0) + hash(cell + 9.0)));
  vec3 lampCol = mix(uAccent, vec3(0.36, 0.95, 0.63), step(0.6, hash(cell + 1.7)));
  vec3 col = base * (0.15 + 1.0 * uLights) + lamp * blink * lampCol * 1.4 * uLights;
  col += uAccent * step(abs(vUv.y - 0.5), 0.006) * 0.7 * uLights;

  float bandPhase = vUv.x * 3.0 + vUv.y * 1.6 - uTime * 0.35;
  vec3 rainbow = hue(floor(fract(bandPhase) * 12.0) / 12.0);
  float stripes = step(0.35, fract(vUv.y * 40.0 + uTime * 1.5));
  float flow = step(0.5, sin(vUv.x * 6.2831 * 4.0 + uTime * 2.2) * 0.5 + 0.5);
  vec3 rb = rainbow * (0.45 + 0.55 * flow) * (0.6 + 0.4 * stripes);
  col = mix(col, rb * 1.2, uRainbow);

  float horizon = step(0.43, vUv.y);
  float gantry = step(0.92, fract(vUv.x * 36.0)) * step(vUv.y, 0.75);
  float catwalk = step(abs(fract(vUv.y * 6.0) - 0.5), 0.012) * horizon;
  vec3 hangar = mix(vec3(0.06, 0.05, 0.06), vec3(0.2, 0.17, 0.2), horizon);
  hangar += gantry * vec3(0.26, 0.2, 0.18) + catwalk * vec3(0.6, 0.4, 0.22);
  hangar += uAccent * 0.45 * step(abs(vUv.y - 0.86), 0.02) * step(0.0, sin(vUv.x * 190.0));
  col = mix(col, hangar * 1.3, uView);

  float arc = step(abs(fract(vUv.x * 5.0 + sin(vUv.y * 30.0 + uTime * 40.0) * 0.05) - 0.5), 0.012);
  col += uElectric * arc * vec3(1.0, 0.8, 0.45) * step(0.55, hash(vec2(floor(uTime * 20.0), floor(vUv.x * 5.0))));

  float under = step(vPos.y, uLevel);
  col = mix(col, col * vec3(1.0, 0.58, 0.28) + vec3(0.06, 0.02, 0.0), under * 0.6);
  gl_FragColor = vec4(col, 1.0);
}
`,j0=`
precision highp float;
uniform float uTime;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  vec2 p = vUv * 18.0;
  float r = sin(p.x + uTime * 1.4) * cos(p.y * 1.3 - uTime * 1.1) + sin(length(vUv - 0.5) * 50.0 - uTime * 4.0) * 0.5;
  float band = floor(smoothstep(-0.6, 1.4, r) * 3.0) / 3.0;
  vec3 col = mix(vec3(0.78, 0.3, 0.07), vec3(1.0, 0.76, 0.4), band);
  float edge = smoothstep(0.5, 0.42, length(vUv - 0.5));
  gl_FragColor = vec4(col, uAlpha * edge * (0.5 + 0.2 * band));
}
`,Q0=`
uniform float uTime;
uniform float uLevel;
uniform float uFlow;
attribute float aSeed;
varying float vAlpha;
void main() {
  vec3 p = position;
  float speed = 0.35 + aSeed * 0.6;
  float y = mod(p.y + uTime * speed, 4.2) - 2.1;
  p.y = y;
  p.x += sin(uTime * (1.0 + aSeed) + aSeed * 30.0) * 0.06;
  p.z += cos(uTime * (0.8 + aSeed) + aSeed * 12.0) * 0.06;
  vAlpha = step(y, uLevel) * uFlow;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = (6.0 + aSeed * 14.0) * (2.4 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,eg=`
precision highp float;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float ring = step(d, 0.5) * step(0.4, d);
  float fill = step(d, 0.4);
  float spec = step(length(c - vec2(-0.14, -0.14)), 0.09);
  vec3 col = mix(vec3(1.0, 0.72, 0.42), vec3(0.45, 0.16, 0.05), ring);
  col = mix(col, vec3(1.0, 0.97, 0.9), spec);
  float a = (ring * 0.9 + fill * 0.22 + spec) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(col, a);
}
`,tg=`
varying vec3 vN;
varying vec3 vView;
varying vec3 vLocal;
varying vec3 vWorld;
void main() {
  vLocal = position;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}
`,ng=`
precision highp float;
uniform vec3 uColor;
uniform float uRainbow;
uniform float uK;
uniform float uTime;
varying vec3 vN;
varying vec3 vView;
varying vec3 vLocal;
varying vec3 vWorld;
vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
void main() {
  float fr = 1.0 - abs(dot(normalize(vN), normalize(-vView)));
  vec3 col = uColor;
  if (uRainbow > 0.5) {
    float h = clamp((vLocal.z + 1.6) / 4.4, 0.0, 1.0) * 0.66;
    col = mix(hue(h), vec3(1.0, 0.25, 0.75), smoothstep(0.35, -0.15, vWorld.z));
  }
  float band = step(0.93, fract(vLocal.z * 2.2 - uTime * 0.6)) * 0.35;
  float a = (0.07 + pow(fr, 2.2) * 0.95 + band) * uK;
  gl_FragColor = vec4(col * a, 1.0);
}
`,ig=`
uniform float uPhase;
uniform float uAmp;
uniform float uK;
uniform float uLen;
uniform float uRadius;
uniform float uZ;
varying vec2 vCell;
varying float vFres;
void main() {
  float x = (uv.x - 0.5) * uLen;
  float th = uv.y * 6.2831853;
  float ph = uK * x + uPhase;
  vec3 c = vec3(x, uAmp * sin(ph), uZ + 0.6 * cos(ph));
  vec3 T = normalize(vec3(1.0, uAmp * uK * cos(ph), -0.6 * uK * sin(ph)));
  vec3 N = normalize(cross(vec3(0.0, 0.0, 1.0), T));
  vec3 B = cross(T, N);
  vec3 nrm = cos(th) * N + sin(th) * B;
  vec4 mv = modelViewMatrix * vec4(c + uRadius * nrm, 1.0);
  vFres = 1.0 - abs(dot(normalize(normalMatrix * nrm), normalize(-mv.xyz)));
  float arc = x * sqrt(1.0 + 0.5 * uAmp * uAmp * uK * uK);
  vCell = vec2(arc, th * uRadius) * 6.0;
  gl_Position = projectionMatrix * mv;
}
`,sg=`
precision highp float;
uniform vec3 uColor;
varying vec2 vCell;
varying float vFres;
float hexEdge(vec2 p) {
  const vec2 r = vec2(1.0, 1.7320508);
  vec2 h = r * 0.5;
  vec2 a = mod(p, r) - h;
  vec2 b = mod(p - h, r) - h;
  vec2 gv = dot(a, a) < dot(b, b) ? a : b;
  gv = abs(gv);
  float d = max(dot(gv, normalize(r)), gv.x);
  return 0.5 - d;
}
void main() {
  float e = hexEdge(vCell);
  float line = 1.0 - smoothstep(0.03, 0.08, e);
  vec3 col = mix(uColor, vec3(1.0), 0.35 * line) * (line * 0.5 + 0.035 + vFres * 0.16);
  gl_FragColor = vec4(col, 1.0);
}
`;function rh(i,e){let t=new Pr({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Kt;let n=e.palette,s=new Ne(1,1),r=[],o=x=>(r.push(x),x),a=(x,D,V,se)=>({uLightDir:{value:new z(...x).normalize()},uFogColor:{value:hn(D)},uFog:{value:new Ne(...V)},uRim:{value:hn(se)},uExposure:{value:1},uLevel:{value:-99}}),l=a([.55,.75,.55],"#0d0e14",[16,50],"#ff9a52"),c=a([.2,.9,.5],"#050304",[3,9],"#ff8a3d");function h(x,{color:D,shade:V="#7c6f88",map:se,repeat:ge=[1,1],emissive:Se="#000000",rimK:He=.5}={}){return o(new At({uniforms:{...x,uColor:{value:hn(D)},uShade:{value:hn(V)},uEmissive:{value:hn(Se)},uMap:{value:se??null},uUseMap:{value:se?1:0},uRepeat:{value:new Ne(...ge)},uRimK:{value:He}},vertexShader:X0,fragmentShader:q0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}))}let u={uRes:{value:s},uWidth:{value:1.6},uInk:{value:hn("#1a0d0b")}},f=o(new At({uniforms:u,vertexShader:nh,fragmentShader:ih,side:It})),p=o(new At({uniforms:{uRes:u.uRes,uInk:u.uInk,uWidth:{value:1}},vertexShader:nh,fragmentShader:ih,side:It})),g=o(new Fn({color:1707275}));function v(x,D,{hull:V=f,crease:se=32}={}){let ge=new dt(x,D);if(V){let Se=x.clone();Se.deleteAttribute("normal"),Se.deleteAttribute("uv");let He=jl(Se,.001);He.computeVertexNormals(),Se.dispose(),ge.add(new dt(He,V))}return se&&ge.add(new ti(new ji(x,se),g)),ge}function m(x,D,V){let se=new ii;return se.moveTo(-x/2+V,-D/2),se.lineTo(x/2-V,-D/2),se.lineTo(x/2,-D/2+V),se.lineTo(x/2,D/2-V),se.lineTo(x/2-V,D/2),se.lineTo(-x/2+V,D/2),se.lineTo(-x/2,D/2-V),se.lineTo(-x/2,-D/2+V),se.closePath(),se}let d=(x,D,V=.05)=>new kr(x,{depth:D,bevelEnabled:V>0,bevelThickness:V,bevelSize:V,bevelSegments:1,curveSegments:24}),E=new ei,b=o(new At({uniforms:{uTop:{value:hn("#1b2030")},uBottom:{value:hn("#08080b")},uGlow:{value:hn("#6a2a18")}},vertexShader:Y0,fragmentShader:$0,side:It,depthWrite:!1}));E.add(new dt(new Vr(70,32,16),b));let y=o(G0(e)),B=h(l,{color:n.red,shade:"#5a2a44",map:y,repeat:[.22,.22],rimK:.35}),R=h(l,{color:"#7a1820",shade:"#3a1a30",rimK:.25}),I=h(l,{color:"#b9b3ab",shade:"#5c5868",rimK:.4}),O=h(l,{color:"#3a3638",shade:"#1c1a24",rimK:.3}),w=h(l,{color:n.accent,shade:"#8a3a2a",rimK:.2}),M=o(new Mn({color:197379})),L=new $t;{let x=new ii;x.moveTo(-5.2,-4.6),x.lineTo(5.2,-4.6),x.lineTo(5.8,-1),x.lineTo(4.6,3.2),x.lineTo(2.2,4.4),x.lineTo(-2.2,4.4),x.lineTo(-4.6,3.2),x.lineTo(-5.8,-1),x.closePath();let D=new Ki;D.absarc(0,0,1.05,0,Math.PI*2,!0),x.holes.push(D);let V=d(x,5.8,.18);V.translate(0,0,-6),L.add(v(V,B))}for(let[x,D,V,se,ge]of[[-3.3,2,2.4,1.7,-.12],[3.3,2,2.4,1.7,.12],[-3.6,-2.3,1.9,2.6,.05],[3.6,-2.3,1.9,2.6,-.05],[0,3.4,2.8,.8,0],[0,-3.5,3,1.2,0]]){let Se=v(d(m(V,se,.32),.26,.06),B);Se.position.set(x,D,.15),Se.rotation.z=ge,L.add(Se)}for(let x of[-1,1])for(let D=0;D<5;D++){let V=v(new Pt(1.2,.12,.16),O,{hull:p});V.position.set(x*3.6,-1.2-D*.32,.5),L.add(V)}let te=v(new ni(1.5,1.6,.5,48,1),I);te.rotation.x=Math.PI/2,te.position.z=.25,L.add(te);let q=new dt(new ws(1.06,48),M);q.position.z=.505,L.add(q);let Z=new $t;Z.add(v(new On(1.22,.1,10,48),O,{hull:p,crease:0}));for(let x=0;x<8;x++){let D=x/8*Math.PI*2,V=v(new Pt(.22,.32,.16),w,{hull:p});V.position.set(Math.cos(D)*1.22,Math.sin(D)*1.22,0),V.rotation.z=D,Z.add(V)}Z.position.z=.56,L.add(Z);let re=[-1,1].map(x=>{let D=new $t,V=v(d(m(1.6,2.9,.4),.16,.04),R);D.add(V);let se=v(new Pt(.16,2.2,.06),w,{hull:p});return se.position.set(-x*.55,0,.22),D.add(se),D.userData.sx=x,D.position.z=.62,L.add(D),D}),ee=v(new ni(1.3,1.7,3,24),O);ee.position.set(0,5.6,-2.4),L.add(ee);for(let x of[-1,1]){let D=v(d(m(2.4,5,.7),2.2,.12),B);D.position.set(x*7.4,.4,-3.2),D.rotation.set(.1,x*.4,x*-.18),L.add(D)}E.add(L);let ye=h(l,{color:"#2c2a33",shade:"#15141c",rimK:.15});for(let[x,D]of[[-10,-4],[10,-4],[-10,6],[10,6],[-6,14],[6,14]]){let V=v(new Pt(.7,26,.7),ye,{hull:p,crease:0});V.position.set(x,0,D),E.add(V)}for(let[x,D]of[[-5.2,4],[6.5,-1]]){let V=v(new Pt(22,.35,1.4),ye,{hull:p,crease:0});V.position.set(0,x,D),E.add(V)}for(let x of[.7,2.45,3.85,5.6]){let D=v(new Pt(.1,.1,18),O,{hull:p,crease:0});D.position.set(Math.cos(x)*.78,Math.sin(x)*.78,9.5),E.add(D)}let ie=o(new Mn({color:n.accent,transparent:!0,opacity:.2,blending:gn,depthWrite:!1})),Pe=[];for(let x=0;x<8;x++){let D=new dt(new On(.82,.03,6,48),o(ie.clone()));D.position.z=2.2+x*1.8,E.add(D),Pe.push(D)}let Le=new $t,N=[[0,-2.75],[.18,-2.73],[.33,-2.66],[.45,-2.54],[.52,-2.4],[.55,-2.25],[.55,-1.72],[.52,-1.7],[.52,-1.62],[.55,-1.6],[.55,1.5],[.52,1.52],[.52,1.58],[.55,1.6],[.55,2.26],[.6,2.3],[.6,2.5],[.56,2.56],[.46,2.6],[0,2.6]].map(([x,D])=>new Ne(x,D)),Y=[0];for(let x=1;x<N.length;x++)Y.push(Y[x-1]+N[x].distanceTo(N[x-1]));let oe=Y[Y.length-1],P=[];for(let x=0;x<=140;x++){let D=x/140*oe,V=1;for(;V<Y.length-1&&Y[V]<D;)V++;let se=(D-Y[V-1])/(Y[V]-Y[V-1]||1);P.push(new Ne().lerpVectors(N[V-1],N[V],se))}let F=x=>{for(let D=0;D<P.length;D++)if(P[D].y>=x)return D/(P.length-1);return 1},Q=new bs(P,64);Q.rotateX(Math.PI/2);let le=o(V0(e,F)),ne=h(l,{color:"#efe9df",shade:"#7d7690",map:le,rimK:.55});Le.add(v(Q,ne,{crease:0}));let me=o(H0(e)),ae=new dt(new ws(.44,48),h(l,{color:"#ffffff",shade:"#8a8496",map:me,rimK:0}));ae.position.z=2.605,Le.add(ae);let Oe=v(new On(.24,.045,8,24,Math.PI),I,{hull:p,crease:0});Oe.position.set(0,-.05,2.63),Le.add(Oe);for(let x of[Math.PI/2,-Math.PI/2]){let D=v(new Pt(.09,.08,3.4),O,{hull:p});D.position.set(Math.cos(x)*.57,Math.sin(x)*.57,-.1),D.rotation.z=x,Le.add(D)}for(let[x,D]of[[.6,-.8],[2.3,.9],[3.7,-.2],[5.2,1.1]]){let V=v(new Pt(.24,.05,.5),I,{hull:p});V.position.set(Math.cos(x)*.565,Math.sin(x)*.565,D),V.rotation.z=x+Math.PI/2,Le.add(V)}let J=o(new Mn({color:n.accentHot,transparent:!0,opacity:0,blending:gn,depthWrite:!1})),he=new dt(new On(.6,.02,6,48),J);he.position.z=2.3,Le.add(he),E.add(Le);let A=new Ot(40,1,.1,150),De=new ei,ue={uTime:{value:0},uLights:{value:0},uRainbow:{value:0},uView:{value:0},uLevel:{value:-3},uElectric:{value:0},uAccent:{value:hn(n.accent)}},Te=o(new At({uniforms:ue,vertexShader:sh,fragmentShader:K0,side:It}));De.add(new dt(new ni(1.6,1.6,4.4,96,1,!0),Te));let fe=h(c,{color:"#4a4448",shade:"#1e1a26",rimK:.5}),We=h(c,{color:"#6e2228",shade:"#2a1020",rimK:.4}),Ie=h(c,{color:"#a29c96",shade:"#3c3848",rimK:.5}),T=h(c,{color:"#2a2628",shade:"#121018",rimK:.6}),_=h(c,{color:n.red,shade:"#5a1020",emissive:"#2a0404",rimK:.3}),C=[n.accent,"#5cf2a0",n.accent,"#e8261c"].map(x=>o(new Mn({color:x}))),H=new $t,K=[];for(let x of[-1,1]){let D=new ii;D.moveTo(.55,-.12),D.lineTo(-.38,-.12),D.quadraticCurveTo(-.5,-.1,-.52,0),D.lineTo(-.5,.06),D.lineTo(.55,.08),D.closePath();let V=d(D,.16,.025);V.translate(0,0,-.08),V.rotateY(Math.PI/2);let se=v(V,fe,{hull:p});se.position.set(x*.48,-.62,.05),H.add(se);let ge=v(new Pt(.14,.05,.6),We,{hull:p});ge.position.set(x*.48,-.53,.2),H.add(ge);let Se=v(new ni(.09,.11,.08,20),Ie,{hull:p});Se.position.set(x*.48,-.53,-.4),H.add(Se);let He=[[0,0],[.05,0],[.058,.04],[.05,.1],[.056,.16],[.05,.22],[.04,.25],[0,.26]].map(([Ze,nt])=>new Ne(Ze,nt)),Fe=v(new bs(He,20),T,{hull:p,crease:0});Fe.position.set(x*.48,-.5,-.4),Fe.rotation.set(-.55,0,x*-.12),H.add(Fe);for(let Ze of[0,x*-.035]){let nt=v(new ni(.018,.018,.02,12),_,{hull:null,crease:0});nt.position.set(x*.48+Ze-x*.03,-.29,-.53+Math.abs(Ze)),nt.rotation.x=-.55,H.add(nt)}for(let Ze=0;Ze<4;Ze++){let nt=new dt(new Pt(.03,.012,.05),C[Ze]);nt.position.set(x*.56,-.505,-.1+Ze*.09),nt.userData.k=Ze+(x>0?4:0),H.add(nt),K.push(nt)}}{let x=new ii;x.moveTo(-.36,0),x.lineTo(.36,0),x.lineTo(.3,.22),x.lineTo(-.3,.22),x.closePath();let D=v(d(x,.12,.02),fe,{hull:p});D.position.set(0,-.98,-.72),D.rotation.x=-.9,H.add(D);let V=o(new Mn({map:o(W0(e))})),se=new dt(new Nn(.42,.14),V);se.position.set(0,-.84,-.68),se.rotation.x=-.75,H.add(se)}let G=new $t;for(let x of[-1.75,1.75]){let D=v(new On(1.55,.05,8,64),Ie,{hull:p,crease:0});D.rotation.x=Math.PI/2,D.position.y=x,G.add(D)}for(let x=0;x<6;x++){let D=x/6*Math.PI*2+.25,V=v(new Pt(.07,3.6,.05),Ie,{hull:p,crease:0});V.position.set(Math.cos(D)*1.55,0,Math.sin(D)*1.55),V.rotation.y=-D,G.add(V)}De.add(G),De.add(H);let we={uTime:{value:0},uAlpha:{value:0}},Me=o(new At({uniforms:we,vertexShader:sh,fragmentShader:j0,transparent:!0,depthWrite:!1,side:tn})),Ue=new dt(new Nn(3.4,3.4,1,1),Me);Ue.rotation.x=-Math.PI/2,De.add(Ue);let je=460,ve=new Float32Array(je*3),Ce=new Float32Array(je),qe=7,Ye=()=>(qe=qe*16807%2147483647)/2147483647;for(let x=0;x<je;x++){let D=Math.sqrt(Ye())*1.45,V=Ye()*Math.PI*2;ve[x*3]=Math.cos(V)*D,ve[x*3+1]=Ye()*4.2,ve[x*3+2]=Math.sin(V)*D,Ce[x]=Ye()}let Be=new Rt;Be.setAttribute("position",new zt(ve,3)),Be.setAttribute("aSeed",new zt(Ce,1));let de={uTime:{value:0},uLevel:{value:-3},uFlow:{value:0}},_e=o(new At({uniforms:de,vertexShader:Q0,fragmentShader:eg,transparent:!0,depthWrite:!1}));De.add(new Ur(Be,_e));let ke=new Ot(72,1,.03,20),U=new ei,Ee=(x,{rainbow:D=0,k:V=1}={})=>o(new At({uniforms:{uColor:{value:hn(x)},uRainbow:{value:D},uK:{value:V},uTime:{value:0}},vertexShader:tg,fragmentShader:ng,transparent:!0,depthWrite:!1,blending:gn,side:tn})),$=new $t,pe=Ee("#ff3aa8",{rainbow:1,k:1.1});$.add(new dt(Q,pe));let Re=new dt(Oe.geometry,Ee("#7fe8ff",{k:.6}));Re.position.copy(Oe.position),$.add(Re);{let x=[];for(let ge=0;ge<=100;ge++){let Se=-2.4+ge*.048,He=ge%10===0?.2:ge%5===0?.13:.07;x.push(.58,.18,Se,.58+He,.18,Se)}x.push(.58,.18,-2.4,.58,.18,2.4);let D=new Rt;D.setAttribute("position",new zt(new Float32Array(x),3)),$.add(new ti(D,o(new Fn({color:16773856,transparent:!0,opacity:.85,blending:gn}))));let V=new Pt(.5,.18,1.4),se=new ti(new ji(V),o(new Fn({color:11182248,transparent:!0,opacity:.6,blending:gn})));V.dispose(),se.position.set(0,-.05,.1),$.add(se)}U.add($);let be=new $t,$e=new dt(te.geometry,Ee("#ff4aa0",{k:1.2}));$e.rotation.x=Math.PI/2,$e.position.z=.25,be.add($e);for(let[x,D,V,se,ge]of[[1.25,.12,.5,"#c86bff",16],[1.75,.2,.1,"#ff2f7a",24],[2.35,.1,-.3,"#ff4ab0",0],[2.85,.26,-.6,"#ff2468",32]]){let Se=new dt(new On(x,D,10,96),Ee(se,{k:1}));Se.position.z=V,be.add(Se);for(let He=0;He<ge;He++){if(He%4===3)continue;let Fe=He/ge*Math.PI*2,Ze=new dt(new Pt(.34,D*2.6,.3),Ee(se,{k:.8}));Ze.position.set(Math.cos(Fe)*(x+D*1.6),Math.sin(Fe)*(x+D*1.6),V),Ze.rotation.z=Fe,be.add(Ze)}}U.add(be);{L.updateMatrixWorld(!0);let x=o(new Fn({color:9071871,transparent:!0,opacity:.22,blending:gn,depthWrite:!1}));L.traverse(se=>{if(!se.isMesh||se.material===f||se.material===p||se===q)return;let ge=new ti(new ji(se.geometry,25),x);ge.matrixAutoUpdate=!1,ge.matrix.copy(se.matrixWorld),U.add(ge)});let D=[];for(let[se,ge]of[[[-14,6,-6],[14,-5,9]],[[-12,-7,4],[12,7,-2]],[[-3,12,3],[2,-12,1]]])D.push(...se,...ge);let V=new Rt;V.setAttribute("position",new zt(new Float32Array(D),3)),U.add(new ti(V,o(new Fn({color:3828991,transparent:!0,opacity:.7,blending:gn}))))}let it=new Ot(40,1,.1,80),ht=new ei,Qe=new Nn(1,1,360,40),ut=[["#7dff3a",0,0,"unit"],["#2f9bff",.32,-.6,"unit"],["#ff2f86",0,.5,"pilot"],["#a874ff",.32,-.2,"pilot"]].map(([x,D,V,se])=>{let ge=o(new At({uniforms:{uColor:{value:hn(x)},uPhase:{value:0},uAmp:{value:2.4},uK:{value:.55},uLen:{value:26},uRadius:{value:.78},uZ:{value:V},uTime:{value:0}},vertexShader:ig,fragmentShader:sg,transparent:!0,depthWrite:!1,blending:gn,side:tn})),Se=new dt(Qe,ge);return Se.frustumCulled=!1,Se.userData={offset:D,who:se},ht.add(Se),Se}),vt=new Ot(38,1,.1,80),xt=new vn(2,2,{type:Si,minFilter:nn,magFilter:nn,samples:4}),ot={tScene:{value:xt.texture},uTime:{value:0},uSubmerged:{value:0},uElectric:{value:0},uFade:{value:0},uFlash:{value:0},uSpeed:{value:0},uRes:{value:new Ne(1,1)}},Tt=o(new At({uniforms:ot,vertexShader:Z0,fragmentShader:J0,depthTest:!1})),W=new ei;W.add(new dt(new Nn(2,2),Tt));let Ae=new Ms(-1,1,1,-1,0,1);function Ke(x,D){let V=Math.max(1,x),se=Math.max(1,D);t.setSize(V,se,!1);let ge=t.getPixelRatio();xt.setSize(Math.floor(V*ge),Math.floor(se*ge)),ot.uRes.value.set(V*ge,se*ge),s.set(V*ge,se*ge),u.uWidth.value=1.8*ge,p.uniforms.uWidth.value=1.1*ge;for(let Se of[A,ke,it,vt])Se.aspect=V/se,Se.updateProjectionMatrix()}function tt(x){let D=0;for(let[V,se]of[[xe.insertEnd,.18],[xe.lockEnd,.22],[xe.electric,.08],[xe.power,.1]])x>=V&&(D+=se*Math.exp(-(x-V)*7));return D}let Je=(x,D)=>Math.sin(x*91.7+D*13.1)*Math.cos(x*57.3+D*7.7);function Ve(x){return x<xe.insertEnd?kt(20,4,eh(x/xe.insertEnd)):x<xe.lockStart?kt(4,3.2,wt(xe.insertEnd,xe.lockStart,x)):kt(3.2,-2.25,th(Rs((x-xe.lockStart)/(xe.lockEnd-xe.lockStart))))}let et=new z,pt=new z;function St(x){let D=Ve(x);Le.position.set(0,0,D),Le.rotation.z=wt(xe.lockStart,xe.lockEnd-.3,x)*Math.PI*.5+(1-eh(x/xe.insertEnd))*.5,J.opacity=.9*wt(xe.lockStart,xe.lockEnd,x)*(.6+.4*Math.sin(x*20));let V=wt(.7,1.6,x)*(1-wt(xe.lockEnd-.55,xe.lockEnd,x));for(let Se of re)Se.position.x=Se.userData.sx*kt(.8,2.35,V);Z.rotation.z=wt(xe.lockStart+.4,xe.lockEnd-.4,x)*(Math.PI/4),Pe.forEach((Se,He)=>{let Fe=Math.max(0,1-Math.abs(x*5%8-(7-He))*.8);Se.material.opacity=(.06+Fe*.6)*(1-wt(xe.insertEnd,xe.insertEnd+.6,x))});let se=0;if(x<1.7)et.set(1.55,-.35,D+.9-x*.6),pt.set(0,.05,D-.6),A.fov=34,se=1-wt(1.3,1.7,x)*.4;else if(x<xe.insertEnd){let Se=(x-1.7)/(xe.insertEnd-1.7);et.set(kt(7.5,6.8,Se),kt(5.2,4.8,Se),kt(13,12,Se)),pt.set(.2,.4,1.5),A.fov=38,se=.25}else if(x<xe.lockStart)et.set(2.2,-1.5,4.4),pt.set(0,.1,1.6),A.fov=32;else{let Se=wt(xe.lockStart,xe.cut,x);et.set(kt(1.4,.9,Se),kt(4.2,3.4,Se),kt(6,5.2,Se)),pt.set(0,0,kt(.8,.2,Se)),A.fov=36}let ge=tt(x);et.x+=Je(x,1)*ge,et.y+=Je(x,2)*ge,A.position.copy(et),A.lookAt(pt),A.updateProjectionMatrix(),ot.uSpeed.value=se,t.setRenderTarget(xt),t.render(E,A)}let Ut=new z;function Zt(x){ot.uSpeed.value=0,ue.uTime.value=x;let D=wt(xe.lights-.2,xe.lights+.4,x)*(x<xe.lights+.5?.5+.5*Math.sign(Math.sin(x*60)):1);ue.uLights.value=D;let V=kt(-2.4,2.6,th(Rs((x-xe.lclStart)/(xe.lclEnd-xe.lclStart))));ue.uLevel.value=V,c.uLevel.value=V,de.uLevel.value=V,de.uTime.value=x,de.uFlow.value=wt(xe.lclStart,xe.lclStart+.6,x)*(1-.6*wt(xe.rainbowEnd,xe.syncStop,x)),Ue.position.y=V,Ue.visible=V<2.15,we.uTime.value=x,we.uAlpha.value=wt(xe.lclStart,xe.lclStart+.4,x);let se=x>=xe.electric&&x<xe.electricEnd?(.7+.3*Je(x,5))*(1-wt(xe.electricEnd-.4,xe.electricEnd,x)):0;ue.uElectric.value=se;let ge=wt(xe.rainbowStart,xe.rainbowStart+1,x)*(1-wt(xe.rainbowEnd-.8,xe.rainbowEnd,x));ue.uRainbow.value=ge,ue.uView.value=wt(xe.rainbowEnd-.6,xe.rainbowEnd+.8,x),G.visible=x<xe.rainbowStart+.3,c.uExposure.value=.18+.82*D+.5*se+.3*ge;for(let nt of K)nt.visible=D>.5&&Math.sin(x*(2+nt.userData.k*.7)+nt.userData.k)>-.3;let Se=tt(x);ke.position.set(Math.sin(x*.4)*.04+Je(x,3)*Se*.3,.05+Math.sin(x*.9)*.02,.32);let He=wt(xe.lclStart-.4,xe.lclStart+.8,x),Fe=wt(xe.lclStart+1.4,xe.lclEnd-.6,x),Ze=kt(kt(-.35,-1.1,He),.1,Fe);ke.lookAt(Ut.set(Math.sin(x*.25)*.18,Ze,-1.6)),ot.uSubmerged.value=(V>.05?1:0)*wt(0,.4,V),ot.uElectric.value=se,t.setRenderTarget(xt),t.render(De,ke)}function S(x,D){ot.uSpeed.value=0,ot.uSubmerged.value=0,ot.uElectric.value=0,$.position.set(0,0,Ve(x)),$.rotation.z=Le.rotation.z,be.rotation.z=-Z.rotation.z*.5,pe.uniforms.uTime.value=D;let V=wt(4.5,5.8,x);it.position.set(kt(6.2,5.4,V),kt(2.6,2,V),kt(7.5,6.6,V)),it.up.set(.32,1,0).normalize(),it.lookAt(.3,.1,.9),t.setRenderTarget(xt),t.setClearColor(0,1),t.render(U,it)}function k(x,D,V){ot.uSpeed.value=0,ot.uSubmerged.value=0,ot.uElectric.value=0;let se=(1-Rs(V/100))*2.6,ge=D*.9;for(let Se of ut){let He=Se.material.uniforms;He.uPhase.value=ge+Se.userData.offset+(Se.userData.who==="pilot"?se:0),He.uAmp.value=2.4+(Se.userData.who==="pilot"?se*.25:0)}vt.position.set(Math.sin(D*.15)*1.2,.6,17.5),vt.up.set(0,1,0),vt.lookAt(0,-.2,0),t.setRenderTarget(xt),t.setClearColor(0,1),t.render(ht,vt)}function X(x,{fade:D=1,flash:V=0,clock:se=x,sync:ge=0}={}){ot.uTime.value=x;let Se=pc(x);Se?.kind==="xray"?S(x,se):Se?.kind==="helix"?k(x,se,ge):x<xe.cut?(ot.uSubmerged.value=0,ot.uElectric.value=0,St(x)):Zt(x);let He=0;for(let Fe of[1.7,xe.insertEnd,xe.lockStart,xe.cut])x>=Fe&&x<Fe+.25&&(He=Math.max(He,Math.exp(-(x-Fe)*14)*(Fe===xe.cut?.9:.35)));ot.uFlash.value=Math.max(V,He),ot.uFade.value=wt(0,.5,x)*D,t.setRenderTarget(null),t.render(W,Ae)}function j(){let x=new Set;for(let D of[E,De,U,ht,W])D.traverse(V=>{V.geometry&&!x.has(V.geometry)&&(x.add(V.geometry),V.geometry.dispose())});for(let D of r)D.dispose?.();xt.dispose(),t.dispose(),t.forceContextLoss?.()}return{resize:Ke,update:X,dispose:j}}var is=xe.syncStop,Is=is+2.2,rg=2.9,og=Is+rg,wi=(i,e=0,t=1)=>Math.min(t,Math.max(e,i));function Xt(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!=null&&(n.innerHTML=t),n}var Vt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ag(i){let e=Math.floor(i*100),t=Math.floor(e/6e3),n=Math.floor(e/100)%60,s=e%100;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function cg(i,e){if(i<xe.syncStart)return 0;if(e==null||i<is){let t=wi((i-xe.syncStart)/(xe.syncStop-xe.syncStart)),n=1-Math.pow(1-t,2.4),s=t<1?Math.sin(i*37)*.6*(1-t):0;return wi(n*99.2+s,0,99.2)}return 99.2+.8*wi((i-is)/.9)}function lg(i,{unit:e,voice:t=!0,voiceClips:n,strings:s={},onDone:r}){let o=document.createElement("style");o.dataset.evaCinema="",o.textContent=gc,document.head.appendChild(o);let a=Xt("div","evc-root");a.setAttribute("role","dialog"),a.setAttribute("aria-label",e.title.en);let l=Xt("canvas","evc-canvas");a.appendChild(l);let c=Xt("canvas","evc-monitor");a.appendChild(c);let h=Xt("div","evc-gate",`<div class="evc-gate-inner">
      <div class="evc-gate-frame">
        <div class="evc-gate-ja evc-mincho">${Vt(e.gate.ja)}</div>
        <div class="evc-gate-en">${Vt(e.gate.en)}</div>
      </div>
      <div class="evc-gate-hint">${Vt(s.gateHint||"CLICK / ANY KEY")}</div>
      <div class="evc-gate-meta"><span>EVA-<b>${Vt(e.id)}</b></span><span>${Vt(e.pilotRole)}</span><span>LCL \u25B8 STANDBY</span></div>
    </div>`);a.appendChild(h);let u=Xt("div","evc-hud"),f=Xt("div","evc-caution");u.appendChild(f);let p=Xt("div","evc-hud-top",`<div class="evc-tag"><div class="evc-tag-title">${Vt(e.nameEn)}</div><div class="evc-tag-sub">ENTRY SEQUENCE \xB7 ${Vt(e.pilotRole)}</div></div>
     <div class="evc-clock"><span data-k="clock">00:00:00</span><small data-k="power">EXTERNAL POWER \xB7 UMBILICAL</small></div>`);u.appendChild(p),u.appendChild(Xt("div","evc-rule"));let g=Xt("div","evc-steps"),v=e.script.map((de,_e)=>{let ke=Xt("div","evc-step",`<span class="evc-step-n">${String(_e+1).padStart(2,"0")}</span><span>${Vt(de.en)}</span><span class="evc-step-st">\u2014</span>`);return g.appendChild(ke),ke});u.appendChild(g);let m=Xt("div","evc-read",`<div class="evc-read-row" data-r="depth"><span>PLUG DEPTH</span><b>0.00 m</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="lcl"><span>LCL LEVEL</span><b>0 %</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="press"><span>LCL PRESSURE</span><b>0.00 MPa</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="a10"><span>A10 NERVE</span><b>OFFLINE</b><div class="evc-read-bar"><i></i></div></div>`);u.appendChild(m);let d=Xt("div","evc-sub",'<div class="evc-sub-ja evc-mincho"></div><div class="evc-sub-en"></div>');u.appendChild(d);let E=Xt("div","evc-sync",`<div class="evc-sync-head"><span>SYNCHRONIZATION RATIO</span><span data-k="harm">HARMONICS \xB10.0</span></div>
     <div class="evc-sync-num"><span data-k="sync">0.0</span><small>%</small></div>
     <canvas width="880" height="184"></canvas>
     <div class="evc-sync-legend"><span><i style="background:#f06a22"></i>PILOT</span><span><i style="background:#e8e2d7"></i>UNIT-${Vt(e.id)}</span><span><i style="background:#58c46a"></i>HARMONICS</span></div>`);u.appendChild(E),a.appendChild(u);let b=Xt("div","evc-confirm",`<div class="evc-confirm-panel">
      <div class="evc-confirm-label">PILOT AUTHENTICATION \xB7 SYNC ${e.syncStop.toFixed(1)}%</div>
      <div class="evc-confirm-ja evc-mincho">${Vt(e.confirm.ja)}</div>
      <div class="evc-confirm-en">${Vt(e.confirm.en)}</div>
      <button type="button" class="evc-confirm-btn">${Vt(s.confirm||"CONFIRM")}</button>
    </div>`);a.appendChild(b);let y=Vt(e.title.ja).replace(Vt(e.kanjiNumber),`<span>${Vt(e.kanjiNumber)}</span>`),B=Xt("div","evc-title",`<div class="evc-title-inner">
      <div class="evc-title-ja evc-mincho">${y}</div>
      <div class="evc-title-rule"></div>
      <div class="evc-title-en">${Vt(e.title.en)}</div>
    </div>`);a.appendChild(B);let R=Xt("button","evc-skip",`<span class="evc-skip-label">${Vt(s.skip||"HOLD TO SKIP")}</span><kbd>Esc</kbd><i class="evc-skip-bar"><b></b></i>`);R.type="button",R.title=s.skipHint||"",a.appendChild(R),i.appendChild(a);let I=de=>a.querySelector(`[data-k="${de}"]`),O=I("clock"),w=I("power"),M=I("sync"),L=I("harm"),te=d.firstElementChild,q=d.lastElementChild,Z=E.querySelector("canvas"),re=Z.getContext("2d"),ee=Object.fromEntries([...m.querySelectorAll("[data-r]")].map(de=>[de.dataset.r,de])),ye;try{ye=rh(l,e)}catch(de){console.warn("[dsh-theme-eva] WebGL unavailable, HUD-only cinematic",de)}let ie=Ql(c,e),Pe=()=>{ye?.resize(a.clientWidth,a.clientHeight),ie.resize(a.clientWidth,a.clientHeight)},Le=new ResizeObserver(Pe);Le.observe(a),Pe();let N,Y,oe=t?new Ds(n,vc(e).map(de=>Zr(e,de))):void 0,P=!1,F=0,Q=null,le=0,ne=null,me=0,ae=!1,Oe=-1,J=new Set,he=(de,_e=0)=>{if(!t||!de||typeof de.voice!="string"||ae)return;let ke=()=>{!Y||ae||(N?.squelch(N.now),setTimeout(()=>Y?.speak(de.voice,{rate:1,pitch:1}),120+_e*1e3))};if(!oe||oe.failed)return ke();oe.play(Zr(e,de),{delay:_e+.1,onStart:(U,Ee)=>{N?.squelch(Math.max(N.now,U-.1)),N?.squelch(U+Ee+.04)}}).then(U=>{U||ke()})},A=[[0,"hum",()=>{N?.hum(),N?.whoosh(N.now,3.3,180,1500,.3)}],[xe.insertEnd-.05,"clank1",()=>N?.clank(N.now,1.2)],[xe.lockStart,"servo",()=>N?.servo(N.now,xe.lockEnd-xe.lockStart)],[xe.lockEnd-.08,"clank2",()=>{N?.clank(N.now,1),N?.hiss(N.now+.1,1.3)}],[xe.cut-.1,"cut",()=>N?.whoosh(N.now,.5,2400,300,.25)],[xe.lights,"lights",()=>[0,.14,.28].forEach((de,_e)=>N?.beep(N.now+de,880+_e*220,.08,.06))],[xe.lclStart,"lcl",()=>N?.liquid(N.now,xe.lclEnd-xe.lclStart+.6)],[xe.electric,"zap",()=>N?.zap(N.now,xe.electricEnd-xe.electric)],[xe.power,"power",()=>{N?.powerUp(N.now),N?.humPower(N.now)}],[xe.syncStart,"sync",()=>N?.syncTone(N.now,xe.syncStop-xe.syncStart)],[xe.syncStop,"confirm",()=>{N?.beep(N.now,1568,.14,.07),N?.beep(N.now+.2,1568,.14,.07),he(e.confirm)}]];uc.forEach((de,_e)=>{A.push([de.at,`cut${_e}`,()=>{if(de.kind==="title"?N?.beep(N.now,196,.22,.09):(N?.beep(N.now,2093,.03,.05),N?.whoosh(N.now,.18,3200,900,.12)),de.kind==="neural")for(let ke=0;ke<14;ke++)N?.beep(N.now+.08+ke*.075,1320+ke%3*110,.025,.035);if(de.kind==="lines")for(let ke=0;ke<18;ke++)N?.beep(N.now+.1+ke*.06,990+ke%4*165,.02,.03);de.kind==="magi"&&[.12,.26,.4].forEach(ke=>N?.beep(N.now+ke*.75+.1,1760,.06,.05))}])}),fc.forEach((de,_e)=>{A.push([de.at,`scope${_e}`,()=>{N?.beep(N.now,2637,.03,.05),N?.whoosh(N.now,.2,3600,1200,.12)}])}),e.script.forEach((de,_e)=>{A.push([de.t,`line${_e}`,()=>he(de)]);let ke=e.script[_e+1]?.t??xe.syncStop;A.push([Math.min(ke-.3,de.t+2.2),`ok${_e}`,()=>N?.chirp(N.now)])});let De=[[is+.02,"final",()=>{N?.chirp(N.now),he(e.final)}],[Is,"title",()=>{N?.boom(N.now),N?.humFade(N.now+2,1.2),he(e.title,.45)}]];function ue(de){if(!P)return 0;if(ne!=null)return ne;let _e=(de-F)/1e3;return Q==null?Math.min(_e,xe.syncStop):is+(de-Q)/1e3}function Te(de,_e){let ke=Z.width,U=Z.height;re.clearRect(0,0,ke,U),re.strokeStyle="#ffffff12",re.lineWidth=1;for(let Re=0;Re<=ke;Re+=ke/16)re.beginPath(),re.moveTo(Re,0),re.lineTo(Re,U),re.stroke();re.beginPath(),re.moveTo(0,U/2),re.lineTo(ke,U/2),re.stroke();let $=1-_e/100,pe=(Re,be,$e,it,ht)=>{re.strokeStyle=Re,re.lineWidth=ht,re.beginPath();for(let Qe=0;Qe<=ke;Qe+=4){let ut=Qe/ke,vt=U/2+Math.sin(ut*Math.PI*2*it+be)*$e*U*.36+Math.sin(ut*40+de*9+be)*$*6;Qe===0?re.moveTo(Qe,vt):re.lineTo(Qe,vt)}re.stroke()};pe("#e8e2d7",de*2.1,.9,3,2),pe("#f06a22",de*2.1+$*2.6,.9-$*.4,3+$*1.4,2.4),pe("#58c46a",de*3+1,.15+$*.5,7,1.4)}function fe(de,_e,ke,U=!1){let Ee=ee[de];Ee.children[1].textContent=_e,Ee.children[2].firstElementChild.style.width=`${wi(ke)*100}%`,Ee.classList.toggle("is-alert",U)}function We(de){me=requestAnimationFrame(We);let _e=ue(de);if(!P)return;for(let[xt,ot,Tt]of A)_e>=xt&&!J.has(ot)&&(J.add(ot),Tt());if(Q!=null)for(let[xt,ot,Tt]of De)_e>=xt&&!J.has(ot)&&(J.add(ot),Tt());let ke=Q!=null&&_e>=Is,U=cg(_e,Q),Ee=de/1e3;if(ye&&!ke){let xt=Q!=null?1-wi((_e-(Is-.4))/.4):1,ot=Q!=null?Math.exp(-(_e-is)*5)*.5:0;ye.update(_e,{fade:xt,flash:ot,clock:Ee,sync:U})}let $=ie.update(_e,{sync:U,clock:Ee,confirmed:Q!=null,hidden:ke||Q!=null&&_e>=Is-.4}),pe=$==="cut";a.classList.toggle("is-monitor",pe),a.classList.toggle("is-scope",$==="scope"),a.classList.toggle("is-intertitle",pe&&dc(_e)?.kind==="title"),u.classList.toggle("is-on",_e>.3&&!ke),O.textContent=ag(_e),w.textContent=_e>=xe.power?"INTERNAL POWER \xB7 MAIN CIRCUIT LIVE":"EXTERNAL POWER \xB7 UMBILICAL",f.classList.toggle("is-on",_e>=xe.electric&&_e<xe.electricEnd&&Math.sin(_e*30)>0);let Re=-1;e.script.forEach((xt,ot)=>{_e>=xt.t&&(Re=ot)}),v.forEach((xt,ot)=>{let Tt=e.script[ot+1]?.t??xe.syncStop,W=_e>=Math.min(Tt-.3,e.script[ot].t+2.2)||ot===e.script.length-1&&Q!=null;xt.classList.toggle("is-done",W),xt.classList.toggle("is-active",ot===Re&&!W),xt.lastElementChild.textContent=W?"OK":ot===Re?"RUN":"\u2014"});let be=Re>=0?e.script[Re]:null,$e=Re;Q!=null?(be=e.final,$e=100):_e>=xe.syncStop&&(be=null,$e=99),$e!==Oe&&(Oe=$e,te.textContent=be?.ja??"",q.textContent=be?.en??"",d.classList.remove("is-in"),d.offsetWidth,d.classList.add("is-in"));let it=Math.min(1,_e/xe.lockEnd);fe("depth",`${(it*4.8).toFixed(2)} m`,it);let ht=wi((_e-xe.lclStart)/(xe.lclEnd-xe.lclStart));fe("lcl",`${Math.round(ht*100)} %`,ht);let Qe=ht*.42+(_e>=xe.electric?.08:0);fe("press",`${Qe.toFixed(2)} MPa`,Qe/.5,_e>=xe.electric&&_e<xe.electricEnd);let ut=wi((_e-(xe.power+4.3))/1.2);fe("a10",_e<xe.power+4.3?"OFFLINE":ut<1?`LINKING ${Math.round(ut*100)}%`:"NOMINAL",ut),E.classList.toggle("is-on",_e>=xe.syncStart-.2),M.textContent=U.toFixed(1),L.textContent=`HARMONICS \xB1${((100-U)*.12).toFixed(1)}`,_e>=xe.syncStart-.2&&Te(_e,U);let vt=_e>=xe.syncStop&&Q==null;vt!==b.classList.contains("is-on")&&(b.classList.toggle("is-on",vt),vt&&setTimeout(()=>b.querySelector("button")?.focus({preventScroll:!0}),50)),vt&&de-le>2400&&(le=de,J.has("confirm")&&N?.beep(N.now,1568,.1,.04)),B.classList.toggle("is-on",ke),Q!=null&&_e>=og&&_()}function Ie(){P||ae||(P=!0,N=new Ps,N.resume(),Y=new Ls(t),oe?.attach(N),F=performance.now(),h.classList.add("is-gone"))}function T(){Q!=null||!P||ue(performance.now())<xe.syncStop||(Q=performance.now(),oe?.stop())}function _(){ae||(ae=!0,a.classList.add("is-leaving"),Y?.dispose(),oe?.stop(),N?.humFade(N.now,.5),setTimeout(()=>r?.(),600))}let C=1200,H=R.querySelector(".evc-skip-bar b"),K=0,G=0,we=0,Me=0,Ue=de=>{let _e=we?Math.min(100,de-we):16;if(we=de,G=K?Math.min(1,G+_e/C):Math.max(0,G-_e/(C*.35)),H.style.transform=`scaleX(${G})`,R.style.setProperty("--evc-hold",String(G)),R.classList.toggle("is-holding",K!==0&&G>0),R.classList.toggle("is-armed",G>0),G>=1){Me=0,R.classList.add("is-done"),_();return}Me=G>0||K?requestAnimationFrame(Ue):0,Me||(we=0)},je=de=>{ae||(!K&&!G&&!Me&&N?.beep(N.now,880,.05,.03),K|=de,Me||(Me=requestAnimationFrame(Ue)))},ve=de=>{K&=~de,K===0&&!Me&&G>0&&(Me=requestAnimationFrame(Ue))},Ce=de=>{de.key==="Escape"&&(de.preventDefault(),de.stopPropagation(),ve(1))},qe=()=>{ve(1),ve(2)},Ye=de=>{if(de.key==="Escape"){de.preventDefault(),de.stopPropagation(),de.repeat||je(1);return}if(!P){de.preventDefault(),Ie();return}(de.key==="Enter"||de.key===" ")&&b.classList.contains("is-on")&&(de.preventDefault(),T())};window.addEventListener("keydown",Ye,!0),window.addEventListener("keyup",Ce,!0),window.addEventListener("blur",qe),h.addEventListener("click",Ie),b.querySelector("button").addEventListener("click",T),R.addEventListener("pointerdown",de=>{de.preventDefault(),de.stopPropagation(),R.setPointerCapture?.(de.pointerId),je(2)});let Be=de=>{de.stopPropagation(),ve(2)};return R.addEventListener("pointerup",Be),R.addEventListener("pointercancel",Be),R.addEventListener("lostpointercapture",()=>ve(2)),R.addEventListener("click",de=>de.stopPropagation()),h.focus?.(),me=requestAnimationFrame(We),{seek(de,{hold:_e=!1}={}){if(Ie(),Q==null){F=performance.now()-de*1e3,ne=_e?de:null;for(let[ke,U]of A)ke<de-.05&&J.add(U)}},dispose(){cancelAnimationFrame(me),cancelAnimationFrame(Me),window.removeEventListener("keydown",Ye,!0),window.removeEventListener("keyup",Ce,!0),window.removeEventListener("blur",qe),Le.disconnect(),Y?.dispose(),oe?.stop(),N?.close(),ye?.dispose(),ie.dispose(),a.remove(),o.remove()}}}

return module.exports;
} });
