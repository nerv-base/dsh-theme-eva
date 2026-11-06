window.__ModuleLoader__.load({ id: "dsh-theme-eva", chunk: "client.cinema.js", factory: (require) => {
var module = { exports: {} };
var exports = module.exports;
var Jr=Object.defineProperty;var vh=Object.getOwnPropertyDescriptor;var xh=Object.getOwnPropertyNames;var _h=Object.prototype.hasOwnProperty;var yh=(s,e)=>{for(var t in e)Jr(s,t,{get:e[t],enumerable:!0})},Mh=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of xh(e))!_h.call(s,i)&&i!==t&&Jr(s,i,{get:()=>e[i],enumerable:!(n=vh(e,i))||n.enumerable});return s};var bh=s=>Mh(Jr({},"__esModule",{value:!0}),s);var Ag={};yh(Ag,{mount:()=>Eg});module.exports=bh(Ag);var Mc=`.evc-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
  color: var(--evc-text);
  font-family: "EVA Condensed", "Barlow Condensed", "Bahnschrift", "DIN Condensed", system-ui, sans-serif;
  letter-spacing: 0.06em;
  user-select: none;
  cursor: default;
  /* unit colours are set inline from unit.palette (see mount() in index.js):
     --evc-accent marking \xB7 --evc-hot markingHot \xB7 --evc-red armor \xB7 --evc-crimson accent
     --evc-text hudText \xB7 --evc-well / --evc-panel / --evc-rim / --evc-red-hot derived shades */
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
  background: radial-gradient(ellipse at 50% 55%, var(--evc-well) 0, #050404 55%, #000 100%);
  cursor: pointer;
  transition: opacity 0.5s ease;
  z-index: 5;
}
.evc-gate.is-gone { opacity: 0; pointer-events: none; }
.evc-gate-inner { display: grid; justify-items: center; gap: 18px; }
.evc-gate-frame {
  position: relative;
  padding: 34px 64px 30px;
  border: 1px solid color-mix(in srgb, var(--evc-accent) 33.33%, transparent);
  background: linear-gradient(180deg, color-mix(in srgb, var(--evc-accent) 5.10%, transparent), #0000);
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
  text-shadow: 0 0 18px color-mix(in srgb, var(--evc-accent) 25.10%, transparent);
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
.evc-rule { position: absolute; left: 28px; right: 28px; top: 78px; height: 1px; background: linear-gradient(90deg, var(--evc-accent), transparent 70%); opacity: 0.7; }

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
.evc-read-row b { font-size: 18px; letter-spacing: 0.06em; color: var(--evc-text); font-weight: 600; font-variant-numeric: tabular-nums; }
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
  border: 1px solid color-mix(in srgb, var(--evc-accent) 40.00%, transparent);
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
  background: linear-gradient(180deg, color-mix(in srgb, var(--evc-panel) 86.67%, transparent), #0b0b0cee);
  border: 1px solid color-mix(in srgb, var(--evc-accent) 53.33%, transparent);
  box-shadow: 0 0 0 1px #000, 0 30px 80px #000c, 0 0 60px color-mix(in srgb, var(--evc-accent) 13.33%, transparent);
  backdrop-filter: blur(6px);
}
.evc-confirm-panel::before,
.evc-confirm-panel::after { content: ""; position: absolute; width: 18px; height: 18px; border: 2px solid var(--evc-rim); }
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
  border: 1px solid var(--evc-red-hot);
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 0;
  animation: evc-pulse 1.2s ease-in-out infinite;
}
.evc-confirm-btn:hover, .evc-confirm-btn:focus-visible { background: var(--evc-red-hot); outline: none; }
@keyframes evc-pulse { 50% { box-shadow: 0 0 0 6px color-mix(in srgb, var(--evc-red) 20.00%, transparent); } }

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
.evc-title-en { font-size: 15px; letter-spacing: 0.6em; color: var(--evc-text); padding-left: 0.6em; }
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
.evc-skip:hover { color: var(--evc-text); border-color: var(--evc-accent); }
.evc-skip kbd { font: inherit; font-size: 10px; border: 1px solid #4a4440; padding: 1px 5px; color: #6f6b66; transition: color 0.15s, border-color 0.15s; }
/* hold progress: thin bar along the bottom edge + a faint fill behind the label */
.evc-skip-bar { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: color-mix(in srgb, var(--evc-accent) 13.33%, transparent); pointer-events: none; }
.evc-skip-bar b {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--evc-crimson), var(--evc-accent));
  box-shadow: 0 0 8px color-mix(in srgb, var(--evc-accent) 66.67%, transparent);
  transform: scaleX(0);
  transform-origin: left center;
}
.evc-skip::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, color-mix(in srgb, var(--evc-crimson) 20.00%, transparent), color-mix(in srgb, var(--evc-accent) 7.84%, transparent));
  transform: scaleX(var(--evc-hold, 0)); transform-origin: left center;
  opacity: 0; transition: opacity 0.15s;
}
.evc-skip.is-armed::before { opacity: 1; }
.evc-skip.is-armed { color: var(--evc-text); border-color: color-mix(in srgb, var(--evc-accent) 66.67%, transparent); }
.evc-skip.is-armed kbd { color: var(--evc-accent); border-color: color-mix(in srgb, var(--evc-accent) 66.67%, transparent); }
.evc-skip.is-holding kbd { background: color-mix(in srgb, var(--evc-accent) 13.33%, transparent); }
.evc-skip.is-done { color: #fff; border-color: var(--evc-accent); }
.evc-skip > * { position: relative; }
.evc-skip > .evc-skip-bar { position: absolute; }

@media (max-width: 760px) {
  .evc-steps, .evc-read { display: none; }
  .evc-sub-ja { font-size: 28px; }
  .evc-sync { left: 16px; right: 16px; width: auto; }
}
`;var Ds=class{constructor(){let e=window.AudioContext||window.webkitAudioContext;if(this.ctx=e?new e:void 0,this.nodes=new Set,!this.ctx)return;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=1e-4;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.master.gain.exponentialRampToValueAtTime(.85,t.currentTime+.4);let i=t.sampleRate*2;this.noise=t.createBuffer(1,i,t.sampleRate);let r=this.noise.getChannelData(0);for(let o=0;o<i;o++)r[o]=Math.random()*2-1}get now(){return this.ctx?this.ctx.currentTime:0}resume(){return this.ctx?.state==="suspended"?this.ctx.resume():Promise.resolve()}track(e){return this.nodes.add(e),e.onended=()=>this.nodes.delete(e),e}env(e,t,n,i,r,o=1e-4){let a=e.gain;a.setValueAtTime(1e-4,t),a.exponentialRampToValueAtTime(Math.max(i,2e-4),t+n),a.exponentialRampToValueAtTime(Math.max(o,1e-4),t+n+r)}noiseSource(e,t){let n=this.ctx.createBufferSource();return n.buffer=this.noise,n.loop=!0,n.start(e,Math.random()*1.5),n.stop(e+t+.05),this.track(n)}osc(e,t,n,i){let r=this.ctx.createOscillator();return r.type=e,r.frequency.setValueAtTime(t,n),r.start(n),r.stop(n+i+.05),this.track(r)}hum(e=this.now){if(!this.ctx)return;let t=this.ctx,n=t.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+2.5);let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=150,i.Q.value=.8,i.connect(n).connect(this.master);let r=t.createOscillator();r.type="sawtooth",r.frequency.value=46;let o=t.createOscillator();o.type="triangle",o.frequency.value=69.3;let a=t.createOscillator();a.frequency.value=.18;let c=t.createGain();c.gain.value=40,a.connect(c).connect(i.frequency);for(let l of[r,o,a])l!==a&&l.connect(i),l.start(e),this.nodes.add(l);this.humNodes={out:n,lp:i,a:r,b:o,lfo:a}}humPower(e=this.now){let t=this.humNodes;t&&(t.a.frequency.linearRampToValueAtTime(55,e+1.6),t.b.frequency.linearRampToValueAtTime(110,e+1.6),t.lp.frequency.linearRampToValueAtTime(420,e+1.6),t.out.gain.linearRampToValueAtTime(.28,e+1.6))}humFade(e=this.now,t=1){let n=this.humNodes;n&&(n.out.gain.cancelScheduledValues(e),n.out.gain.setValueAtTime(n.out.gain.value,e),n.out.gain.exponentialRampToValueAtTime(1e-4,e+t))}whoosh(e,t,n=300,i=2400,r=.35){if(!this.ctx)return;let o=this.ctx,a=this.noiseSource(e,t),c=o.createBiquadFilter();c.type="bandpass",c.Q.value=1.4,c.frequency.setValueAtTime(n,e),c.frequency.exponentialRampToValueAtTime(i,e+t);let l=o.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+t*.7),l.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(c).connect(l).connect(this.master)}clank(e,t=1){if(!this.ctx)return;let n=this.ctx;[187,431,677,1093,1631,2410].forEach((u,h)=>{let d=this.osc(h%2?"square":"sine",u*(.97+Math.random()*.06),e,1.4),p=n.createGain();this.env(p,e,.003,.16/(h+1)*t,.25+.9/(h+1));let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=3200,d.connect(g).connect(p).connect(this.master)});let r=this.noiseSource(e,.25),o=n.createBiquadFilter();o.type="highpass",o.frequency.value=1800;let a=n.createGain();this.env(a,e,.002,.3*t,.12),r.connect(o).connect(a).connect(this.master);let c=this.osc("sine",90,e,.6);c.frequency.exponentialRampToValueAtTime(32,e+.4);let l=n.createGain();this.env(l,e,.004,.9*t,.45),c.connect(l).connect(this.master)}hiss(e,t,n=.12){if(!this.ctx)return;let i=this.ctx,r=this.noiseSource(e,t),o=i.createBiquadFilter();o.type="highpass",o.frequency.value=2600;let a=i.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(n,e+.08),a.gain.setValueAtTime(n,e+t*.6),a.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(a).connect(this.master)}servo(e,t,n=110,i=190){if(!this.ctx)return;let r=this.ctx,o=this.osc("sawtooth",n,e,t);o.frequency.linearRampToValueAtTime(i,e+t*.8),o.frequency.linearRampToValueAtTime(n*.8,e+t);let a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=900;let c=r.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.07,e+.1),c.gain.setValueAtTime(.07,e+t-.15),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(a).connect(c).connect(this.master)}beep(e,t=1320,n=.09,i=.08){if(!this.ctx)return;let r=this.ctx,o=this.osc("sine",t,e,n),a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i,e+.006),a.gain.setValueAtTime(i,e+n*.7),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(a).connect(this.master)}chirp(e){this.beep(e,1760,.06,.05),this.beep(e+.07,2349,.08,.05)}squelch(e){if(!this.ctx)return;let t=this.ctx,n=this.noiseSource(e,.22),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=2.2;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+.2),n.connect(i).connect(r).connect(this.master),this.beep(e+.02,2600,.03,.03)}liquid(e,t){if(!this.ctx)return;let n=this.ctx,i=this.noiseSource(e,t),r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(260,e),r.frequency.linearRampToValueAtTime(700,e+t*.5),r.frequency.linearRampToValueAtTime(320,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.42,e+.6),o.gain.setValueAtTime(.42,e+t*.7),o.gain.exponentialRampToValueAtTime(1e-4,e+t),i.connect(r).connect(o).connect(this.master);let a=Math.floor(t*22);for(let c=0;c<a;c++){let l=e+Math.random()*t,u=260+Math.random()*520,h=this.osc("sine",u,l,.08);h.frequency.exponentialRampToValueAtTime(u*(1.8+Math.random()),l+.05);let d=n.createGain();this.env(d,l,.004,.035+Math.random()*.04,.06),h.connect(d).connect(this.master)}}zap(e,t=1.2){if(!this.ctx)return;let n=this.ctx,i=n.createWaveShaper(),r=new Float32Array(1024);for(let u=0;u<1024;u++){let h=u/1023*2-1;r[u]=Math.tanh(h*6)}i.curve=r;let o=this.osc("square",55,e,t),a=this.osc("sawtooth",110.6,e,t),c=n.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.16,e+.03),c.gain.exponentialRampToValueAtTime(1e-4,e+t);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=80,o.connect(i),a.connect(i),i.connect(l).connect(c).connect(this.master);for(let u=0;u<26;u++){let h=e+Math.random()*t,d=this.noiseSource(h,.03),p=n.createGain();this.env(p,h,.001,.15+Math.random()*.2,.02);let g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=2e3+Math.random()*5e3,d.connect(g).connect(p).connect(this.master)}}powerUp(e,t=1.8){if(!this.ctx)return;let n=this.ctx,i=this.osc("sawtooth",38,e,t+.3);i.frequency.exponentialRampToValueAtTime(220,e+t);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(120,e),r.frequency.exponentialRampToValueAtTime(2600,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.18,e+t*.8),o.gain.exponentialRampToValueAtTime(1e-4,e+t+.3),i.connect(r).connect(o).connect(this.master)}syncTone(e,t){if(!this.ctx)return;let n=this.ctx,i=this.osc("sine",220,e,t);i.frequency.exponentialRampToValueAtTime(880,e+t);let r=this.osc("sine",223,e,t);r.frequency.exponentialRampToValueAtTime(882.5,e+t);let o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.06,e+.4),o.gain.setValueAtTime(.06,e+t-.2),o.gain.exponentialRampToValueAtTime(1e-4,e+t),i.connect(o),r.connect(o),o.connect(this.master)}boom(e){if(!this.ctx)return;let t=this.ctx,n=this.osc("sine",70,e,2.6);n.frequency.exponentialRampToValueAtTime(30,e+1.6);let i=t.createGain();this.env(i,e,.005,1,2.2),n.connect(i).connect(this.master);let r=this.noiseSource(e,1.2),o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(3e3,e),o.frequency.exponentialRampToValueAtTime(200,e+1);let a=t.createGain();this.env(a,e,.003,.4,1),r.connect(o).connect(a).connect(this.master);let c=t.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(.12,e+.15),c.gain.exponentialRampToValueAtTime(1e-4,e+3.4);let l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=1800,l.connect(c).connect(this.master);for(let u of[110,164.8,220,329.6,440])for(let h of[-4,4]){let d=this.osc("sawtooth",u,e,3.5);d.detune.value=h,d.connect(l)}}close(){for(let e of this.nodes)try{e.stop()}catch{}if(this.nodes.clear(),this.ctx&&this.master){try{this.master.gain.cancelScheduledValues(this.now),this.master.gain.setValueAtTime(this.master.gain.value,this.now),this.master.gain.linearRampToValueAtTime(0,this.now+.08)}catch{}let e=this.ctx;setTimeout(()=>e.close().catch(()=>{}),150)}}},wh=[/kyoko/i,/o-?ren/i,/nanami/i,/haruka/i,/ayumi/i,/mizuki/i,/google 日本語/i,/female/i],Ns=class{constructor(e){this.synth=e&&typeof speechSynthesis<"u"?speechSynthesis:void 0,this.voice=void 0,this.synth&&(this.synth.cancel(),this.pick(),this.onVoices=()=>this.pick(),this.synth.addEventListener?.("voiceschanged",this.onVoices))}pick(){let e=this.synth.getVoices().filter(t=>/^ja/i.test(t.lang));for(let t of wh){let n=e.find(i=>t.test(i.name));if(n){this.voice=n;return}}this.voice=e[0]}speak(e,{rate:t=1.02,pitch:n=.82}={}){if(!this.synth||!e)return;let i=new SpeechSynthesisUtterance(e);i.lang="ja-JP",this.voice&&(i.voice=this.voice),i.rate=t,i.pitch=n,i.volume=.95,this.synth.speak(i)}dispose(){this.synth&&(this.synth.removeEventListener?.("voiceschanged",this.onVoices),this.synth.cancel())}},Us=class{constructor(e,t){if(this.raw=new Map,this.buffers=new Map,this.pending=new Map,this.busyUntil=0,this.sources=new Set,this.failed=!e,this.failed)return;let n=typeof e=="function"?e().then(i=>{for(let r of t){if(!i?.[r])throw new Error(`voice ${r}: missing`);this.raw.set(r,Th(i[r]))}}):Promise.all(t.map(async i=>{let r=await fetch(`${e.replace(/\/$/,"")}/${i}`);if(!r.ok)throw new Error(`voice ${i}: ${r.status}`);this.raw.set(i,await r.arrayBuffer())}));this.fetching=n.catch(()=>{this.failed=!0})}attach(e){if(this.failed||!e?.ctx||this.engine)return;this.engine=e;let t=e.ctx,n=t.createBiquadFilter();n.type="highpass",n.frequency.value=240,n.Q.value=.8;let i=t.createBiquadFilter();i.type="peaking",i.frequency.value=2300,i.Q.value=.9,i.gain.value=4.5;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=6800,r.Q.value=.7;let o=t.createWaveShaper(),a=new Float32Array(1024);for(let l=0;l<a.length;l++){let u=l/(a.length-1)*2-1;a[l]=Math.tanh(u*1.6)/Math.tanh(1.6)}o.curve=a;let c=t.createDynamicsCompressor();c.threshold.value=-22,c.ratio.value=3.5,c.attack.value=.004,c.release.value=.18,this.out=t.createGain(),this.out.gain.value=1.15,n.connect(i).connect(r).connect(o).connect(c).connect(this.out).connect(e.master),this.input=n,this.ready=(this.fetching||Promise.resolve()).then(()=>Promise.all([...this.raw].map(([l,u])=>{let h=t.decodeAudioData(u.slice(0)).then(d=>this.buffers.set(l,Eh(t,d))).catch(()=>{});return this.pending.set(l,h),h})))}async play(e,{delay:t=0,onStart:n}={}){if(this.failed||!this.engine)return!1;let i=this.engine.ctx,r=i.currentTime+t;if(!this.buffers.has(e)){if(await this.ready,!this.buffers.has(e))return!1;if(i.currentTime-r>1.2)return!0}let o=this.buffers.get(e),a=Math.max(i.currentTime+.02,r,this.busyUntil+.1),c=i.createBufferSource();return c.buffer=o,c.connect(this.input),c.start(a),this.sources.add(c),c.onended=()=>this.sources.delete(c),this.busyUntil=a+o.duration,n?.(a,o.duration),!0}stop(){let e=this.engine?.ctx,t=.05;if(e&&this.out&&this.sources.size){let n=e.currentTime;this.out.gain.cancelScheduledValues(n),this.out.gain.setTargetAtTime(0,n,t/4),this.out.gain.setValueAtTime(1.15,n+t+.02)}for(let n of this.sources)try{n.stop(e?e.currentTime+t:0)}catch{}this.sources.clear(),this.busyUntil=e?e.currentTime+t:0}};function Th(s){let e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}function Eh(s,e){let t=e.getChannelData(0),n=.012,i=0,r=t.length-1;for(;i<r&&Math.abs(t[i])<n;)i++;for(;r>i&&Math.abs(t[r])<n;)r--;let o=Math.round(e.sampleRate*.03);i=Math.max(0,i-o),r=Math.min(t.length-1,r+o*3);let a=r-i+1;if(a<=0||a===t.length)return e;let c=s.createBuffer(e.numberOfChannels,a,e.sampleRate);for(let l=0;l<e.numberOfChannels;l++)c.copyToChannel(e.getChannelData(l).subarray(i,r+1),l);return c}var bc=Object.freeze({accent:"#d8262e",marking:"#f06a22",green:"#3fe08a",markText:"#fff3e6"}),Sc=Object.freeze([{id:"insert",t:.6,ja:"\u30A8\u30F3\u30C8\u30EA\u30FC\u30D7\u30E9\u30B0\u3001\u633F\u5165",en:"ENTRY PLUG INSERTION",voice:"\u30A8\u30F3\u30C8\u30EA\u30FC\u30D7\u30E9\u30B0\u3001\u633F\u5165\u3002",shared:!0},{id:"lock",t:4.4,ja:"\u30D7\u30E9\u30B0\u56FA\u5B9A\u3001\u7B2C\u4E00\u6B21\u63A5\u7D9A\u958B\u59CB",en:"PLUG LOCKED \u2014 PRIMARY CONTACT",voice:"\u30D7\u30E9\u30B0\u56FA\u5B9A\u3001\u7B2C\u4E00\u6B21\u63A5\u7D9A\u3001\u958B\u59CB\u3002",shared:!0},{id:"lcl",t:8.4,ja:"LCL \u6CE8\u6C34",en:"LCL INJECTION",voice:"\u30A8\u30EB\u30B7\u30FC\u30A8\u30EB\u3001\u6CE8\u6C34\u3002",shared:!0},{id:"electric",t:11.6,ja:"LCL \u96FB\u5316",en:"ELECTRIFYING LCL",voice:"\u30A8\u30EB\u30B7\u30FC\u30A8\u30EB\u3001\u96FB\u5316\u3002",shared:!0},{id:"power",t:13.1,ja:"\u4E3B\u96FB\u6E90\u63A5\u7D9A\u3001\u5168\u56DE\u8DEF\u52D5\u529B\u4F1D\u9054",en:"MAIN POWER CONNECTED \u2014 ALL CIRCUITS LIVE",voice:"\u4E3B\u96FB\u6E90\u3001\u63A5\u7D9A\u3002",shared:!0},{id:"contact2",t:15.6,ja:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A\u958B\u59CB",en:"SECONDARY CONTACT",voice:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A\u3001\u958B\u59CB\u3002",shared:!0},{id:"a10",t:17.4,ja:"A10 \u795E\u7D4C\u63A5\u7D9A\u3001\u7570\u5E38\u306A\u3057",en:"A10 NERVE CONNECTION \u2014 NOMINAL",voice:"\u30A8\u30FC\u30C6\u30F3\u795E\u7D4C\u63A5\u7D9A\u3001\u7570\u5E38\u306A\u3057\u3002",shared:!0},{id:"bidir",t:19.3,ja:"\u53CC\u65B9\u5411\u56DE\u7DDA\u3001\u958B\u304D\u307E\u3059",en:"OPENING BIDIRECTIONAL CIRCUIT",voice:"\u53CC\u65B9\u5411\u56DE\u7DDA\u3001\u958B\u304D\u307E\u3059\u3002",shared:!0},{id:"sync",t:20.6,ja:"\u30B7\u30F3\u30AF\u30ED\u958B\u59CB",en:"SYNCHRONIZATION START",voice:"\u30B7\u30F3\u30AF\u30ED\u3001\u958B\u59CB\u3002",shared:!0}]),wc=Object.freeze({id:"final",ja:"\u30B7\u30F3\u30AF\u30ED\u7387 100%\u3001\u30CF\u30FC\u30E2\u30CB\u30AF\u30B9\u6B63\u5E38",en:"SYNC RATIO 100% \u2014 HARMONICS NORMAL",voice:"\u30B7\u30F3\u30AF\u30ED\u7387\u3001\u767E\u30D1\u30FC\u30BB\u30F3\u30C8\u3002",shared:!0}),Tc=Object.freeze({ja:"\u63A5\u7D9A\u5F85\u6A5F",en:"ENTRY PLUG \u2014 STANDBY"}),Ah={id:"02",themeId:"eva-02",label:{zh:"\u5F10\u53F7\u673A",en:"Unit-02"},kanji:"\u5F10\u53F7\u6A5F",kanjiNumber:"\u5F10",nameEn:"EVANGELION UNIT-02",designation:"PRODUCTION MODEL",pilotRole:"SECOND CHILDREN",palette:{bg:"#0b090a",panel:"#131012",raised:"#1b1618",raised2:"#241d1f",border:"#3a2a2c",borderStrong:"#55383b",text:"#ece4da",textDim:"#cbbfb4",muted:"#a59a93",faint:"#6f6462",hudText:"#e8e2d7",accent:"#d8262e",accentHot:"#f0413c",accentDeep:"#4e1218",armor:"#b62026",armorShade:"#5a1020",marking:"#f06a22",markingHot:"#ff8a3d",markingDim:"#5a2a0c",onMarking:"#140a06",markText:"#fff3e6",tint:"#ff6a6a",red:"#b62026",redHot:"#e0373a",green:"#3fe08a",greenHot:"#86f7bb",greenDim:"#23a463",greenDeep:"#0d2e1f",warn:"#f0b53a",ok:"#3fe08a",lcl:"#ff7a1a",sidebar:"#0f0a0c"},surfaces:{layer1:"#151113",layer3:"#251c1e",overlay:"#3b2e30",platform:"#221a1c",labelSecondary:"#c2b6ad",labelOnAccent:"#fff4ee",strong:"#fff2ea",inlineCode:"#ffa063",warnSoft:"#f5c96a",warnDeep:"#2e2310",deepDiving:"#e8823f",deepDivingShimmer:"#ffd3ad",codeBlock:"#0e0b0c",codeBanner:"#171214",toast:"#2a1c1f",menuSurface:"#2a1c1fcc",groupHeader:"#241a1cf0",selector:"#2b2123",bubbleHighlight:"#4a1a20",navHover:"#24141a",inputMajor:"#141012",menu:"#1a1315f5",bubble:"#2a1216",maskDrop:"#2a1015b3",sidebarGlow:"#6a141c",sidebarGlow2:"#331015",sidebarEdge:"#3a1418",plate:"#3a1219"},ramps:{"--dsw-static-neutral-bluish-00":"#fff7f2","--dsw-static-neutral-bluish-50":"#ece4da","--dsw-static-neutral-bluish-60":"#e5dcd2","--dsw-static-neutral-bluish-75":"#ddd3c9","--dsw-static-neutral-bluish-100":"#d4c9bf","--dsw-static-neutral-bluish-150":"#c9bdb3","--dsw-static-neutral-bluish-200":"#bdb1a8","--dsw-static-neutral-bluish-300":"#bcaea6","--dsw-static-neutral-bluish-400":"#a59a93","--dsw-static-neutral-bluish-500":"#8b7f7a","--dsw-static-neutral-bluish-600":"#6f6462","--dsw-static-neutral-bluish-700":"#4b3c3d","--dsw-static-neutral-bluish-750":"#3b2e30","--dsw-static-neutral-bluish-800":"#2b2123","--dsw-static-neutral-bluish-850":"#1e1719","--dsw-static-neutral-bluish-875":"#171214","--dsw-static-neutral-bluish-900":"#131012","--dsw-static-neutral-bluish-950":"#0b090a","--dsw-static-neutral-bluish-1000":"#060405","--dsw-static-deepseek-50":"#2a170e","--dsw-static-deepseek-100":"#3a1f12","--dsw-static-deepseek-200":"#5a2e17","--dsw-static-deepseek-300":"#ffc7a3","--dsw-static-deepseek-400":"#ff8a3d","--dsw-static-deepseek-450":"#f6762d","--dsw-static-deepseek-500":"#f06a22","--dsw-static-deepseek-600":"#c9541a","--dsw-static-deepseek-700-delete":"#9a3f14","--dsw-static-deepseek-800":"#4a2412","--dsw-static-deepseek-900":"#2a170e","--dsw-static-blue-50":"#2a0c0f","--dsw-static-blue-50p":"#2a0c0f","--dsw-static-blue-75":"#33101a","--dsw-static-blue-100":"#3d1418","--dsw-static-blue-300":"#ffa58f","--dsw-static-blue-400":"#ff6a52","--dsw-static-blue-450":"#f0413c","--dsw-static-blue-500":"#d8262e","--dsw-static-blue-600":"#b62026","--dsw-static-blue-800":"#7d1a18","--dsw-static-blue-900":"#4e1218","--dsw-static-blue-950":"#2a0c0f","--dsw-static-neutral-50":"#ece4da","--dsw-static-neutral-100":"#d4c9bf","--dsw-static-neutral-150":"#c9bdb3","--dsw-static-neutral-200":"#bdb1a8","--dsw-static-neutral-250":"#b0a49c","--dsw-static-neutral-300":"#a59a93","--dsw-static-neutral-400":"#8b7f7a","--dsw-static-neutral-500":"#776b67","--dsw-static-neutral-550":"#655957","--dsw-static-neutral-600":"#54484a","--dsw-static-neutral-700":"#3b2e30","--dsw-static-neutral-800":"#2b2123","--dsw-static-neutral-850":"#1e1719","--dsw-static-neutral-900":"#0e0b0c"},code:{"--shiki-token-constant":"#ff9a52","--shiki-token-string":"#7fdca4","--shiki-token-comment":"#7d706b","--shiki-token-keyword":"#ff5a52","--shiki-token-parameter":"#f5c96a","--shiki-token-function":"#ffc08f","--shiki-token-string-expression":"#a8ecc4","--shiki-token-punctuation":"#bdb1a8","--shiki-token-link":"#ff8a3d"},script:Sc,confirm:{id:"confirm",ja:"\u30BB\u30AB\u30F3\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u78BA\u8A8D",en:"SECOND CHILDREN \u2014 CONFIRM BOARDING",voice:"\u30BB\u30AB\u30F3\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},final:wc,title:{id:"title",ja:"\u5F10\u53F7\u6A5F \u8D77\u52D5",en:"EVANGELION UNIT-02 \xB7 ACTIVATED",voice:"\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3\u4E8C\u53F7\u6A5F\u3001\u8D77\u52D5\u3002"},gate:Tc,hero:{ja:"\u5F10\u53F7\u6A5F\u3001\u767A\u9032",en:"EVANGELION UNIT-02 \xB7 LAUNCH"},syncStop:99.2,voiceName:"ja-JP-NanamiNeural"},Ch={id:"01",themeId:"eva-01",label:{zh:"\u521D\u53F7\u673A",en:"Unit-01"},kanji:"\u521D\u53F7\u6A5F",kanjiNumber:"\u521D",nameEn:"EVANGELION UNIT-01",designation:"TEST TYPE",pilotRole:"THIRD CHILDREN",palette:{bg:"#0a090c",panel:"#111014",raised:"#18171c",raised2:"#201d26",border:"#312c3c",borderStrong:"#453b58",text:"#e7e3f1",textDim:"#c4bed0",muted:"#9e9aa8",faint:"#686570",hudText:"#e4e0ef",accent:"#8d4dde",accentHot:"#a162f5",accentDeep:"#321d50",armor:"#6b3fa0",armorShade:"#2e1a4f",marking:"#a0da3b",markingHot:"#b9f068",markingDim:"#2b3b12",onMarking:"#0a0e05",markText:"#f7f3ff",tint:"#b384fc",red:"#b62026",redHot:"#e0373a",green:"#3fe08a",greenHot:"#86f7bb",greenDim:"#23a463",greenDeep:"#0d2e1f",warn:"#f0b53a",ok:"#3fe08a",lcl:"#ff7a1a",sidebar:"#0c0b10"},surfaces:{layer1:"#131116",layer3:"#201d26",overlay:"#342f3d",platform:"#1e1b23",labelSecondary:"#bab5c6",labelOnAccent:"#f8f4ff",strong:"#f6f2ff",inlineCode:"#ccfa8f",warnSoft:"#f5c96a",warnDeep:"#2e2310",deepDiving:"#afe06a",deepDivingShimmer:"#e7ffcc",codeBlock:"#0c0b0f",codeBanner:"#141318",toast:"#221d2c",menuSurface:"#221d2ccc",groupHeader:"#1e1b25f0",selector:"#25222c",bubbleHighlight:"#32224b",navHover:"#1c1627",inputMajor:"#121015",menu:"#16141bf5",bubble:"#1d162a",maskDrop:"#1d142ab3",sidebarGlow:"#44266d",sidebarGlow2:"#221634",sidebarEdge:"#271a3a",plate:"#26193b"},ramps:{"--dsw-static-neutral-bluish-00":"#faf7ff","--dsw-static-neutral-bluish-50":"#e7e3f1","--dsw-static-neutral-bluish-60":"#dfdbea","--dsw-static-neutral-bluish-75":"#d7d2e2","--dsw-static-neutral-bluish-100":"#cdc8d8","--dsw-static-neutral-bluish-150":"#c2bccd","--dsw-static-neutral-bluish-200":"#b6b0c1","--dsw-static-neutral-bluish-300":"#b3aebf","--dsw-static-neutral-bluish-400":"#9e9aa8","--dsw-static-neutral-bluish-500":"#847f8d","--dsw-static-neutral-bluish-600":"#686570","--dsw-static-neutral-bluish-700":"#423d4d","--dsw-static-neutral-bluish-750":"#342f3d","--dsw-static-neutral-bluish-800":"#25222c","--dsw-static-neutral-bluish-850":"#1a181f","--dsw-static-neutral-bluish-875":"#141318","--dsw-static-neutral-bluish-900":"#111014","--dsw-static-neutral-bluish-950":"#0a090c","--dsw-static-neutral-bluish-1000":"#050407","--dsw-static-deepseek-50":"#17200c","--dsw-static-deepseek-100":"#222d11","--dsw-static-deepseek-200":"#394d1c","--dsw-static-deepseek-300":"#e7ffcb","--dsw-static-deepseek-400":"#b9f068","--dsw-static-deepseek-450":"#a9e24d","--dsw-static-deepseek-500":"#a0da3b","--dsw-static-deepseek-600":"#82b427","--dsw-static-deepseek-700-delete":"#5e8516","--dsw-static-deepseek-800":"#2b3b12","--dsw-static-deepseek-900":"#17200c","--dsw-static-blue-50":"#1b112a","--dsw-static-blue-50p":"#1b112a","--dsw-static-blue-75":"#221634","--dsw-static-blue-100":"#291b3e","--dsw-static-blue-300":"#cbaffd","--dsw-static-blue-400":"#b282fd","--dsw-static-blue-450":"#a162f5","--dsw-static-blue-500":"#8d4dde","--dsw-static-blue-600":"#7741bb","--dsw-static-blue-800":"#512d80","--dsw-static-blue-900":"#321d50","--dsw-static-blue-950":"#1b112a","--dsw-static-neutral-50":"#e7e3f1","--dsw-static-neutral-100":"#cdc8d8","--dsw-static-neutral-150":"#c2bccd","--dsw-static-neutral-200":"#b6b0c1","--dsw-static-neutral-250":"#a8a4b3","--dsw-static-neutral-300":"#9e9aa8","--dsw-static-neutral-400":"#847f8d","--dsw-static-neutral-500":"#706c78","--dsw-static-neutral-550":"#5e5a66","--dsw-static-neutral-600":"#4d4955","--dsw-static-neutral-700":"#342f3d","--dsw-static-neutral-800":"#25222c","--dsw-static-neutral-850":"#1a181f","--dsw-static-neutral-900":"#0c0b0f"},code:{"--shiki-token-constant":"#c6f881","--shiki-token-string":"#7fdca4","--shiki-token-comment":"#75707f","--shiki-token-keyword":"#ae79fe","--shiki-token-parameter":"#f5c96a","--shiki-token-function":"#d4bcff","--shiki-token-string-expression":"#a8ecc4","--shiki-token-punctuation":"#b6b0c1","--shiki-token-link":"#b9f068"},script:Sc,confirm:{id:"confirm",ja:"\u30B5\u30FC\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u78BA\u8A8D",en:"THIRD CHILDREN \u2014 CONFIRM BOARDING",voice:"\u30B5\u30FC\u30C9\u30C1\u30EB\u30C9\u30EC\u30F3\u3001\u642D\u4E57\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},final:wc,title:{id:"title",ja:"\u521D\u53F7\u6A5F \u8D77\u52D5",en:"EVANGELION UNIT-01 \xB7 ACTIVATED",voice:"\u30A8\u30F4\u30A1\u30F3\u30B2\u30EA\u30AA\u30F3\u521D\u53F7\u6A5F\u3001\u8D77\u52D5\u3002"},gate:Tc,hero:{ja:"\u521D\u53F7\u6A5F\u3001\u767A\u9032",en:"EVANGELION UNIT-01 \xB7 LAUNCH"},syncStop:99.6,voiceName:"ja-JP-NanamiNeural"},Ec=Object.freeze({"01":Ch,"02":Ah}),Pg=Object.freeze(Object.keys(Ec)),Rh="02",Lg=Ec[Rh];function Ac(s){return[...s.script,s.confirm,s.final,s.title].filter(e=>typeof e.voice=="string")}function Kr(s,e){return`${e.shared?"shared":s.id}-${e.id}.mp3`}var Ih=0,Cc=1,Ph=2;var Ol=1,Lh=2,Rn=3,jn=0,Lt=1,en=2,Jn=0,Gi=1,gn=2,Rc=3,Ic=4,Dh=5,pi=100,Nh=101,Uh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Vh=203,Do=204,No=205,Hh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,$h=212,Zh=213,Jh=214,Uo=0,Fo=1,Oo=2,Yi=3,Bo=4,zo=5,ko=6,Vo=7,Bl=0,Kh=1,jh=2,Kn=0,Qh=1,eu=2,tu=3,nu=4,iu=5,su=6,ru=7;var zl=300,$i=301,Zi=302,Ho=303,Go=304,Xr=306,ys=1e3,gi=1001,Wo=1002,mn=1003,ou=1004;var Fs=1005;var tn=1006,jr=1007;var vi=1008;var Nn=1009,kl=1010,Vl=1011,Ms=1012,ic=1013,xi=1014,Pn=1015,wi=1016,sc=1017,rc=1018,Ji=1020,Hl=35902,Gl=1021,Wl=1022,pn=1023,Xl=1024,ql=1025,Wi=1026,Ki=1027,Yl=1028,oc=1029,$l=1030,ac=1031;var cc=1033,pr=33776,mr=33777,gr=33778,vr=33779,Xo=35840,qo=35841,Yo=35842,$o=35843,Zo=36196,Jo=37492,Ko=37496,jo=37808,Qo=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,oa=37816,aa=37817,ca=37818,la=37819,ha=37820,ua=37821,xr=36492,da=36494,fa=36495,Zl=36283,pa=36284,ma=36285,ga=36286;var yr=2300,va=2301,Qr=2302,Pc=2400,Lc=2401,Dc=2402;var au=3200,cu=3201;var lu=0,hu=1,$n="",Kt="srgb",ns="srgb-linear",qr="linear",gt="srgb";var Ai=7680;var Nc=519,uu=512,du=513,fu=514,Jl=515,pu=516,mu=517,gu=518,vu=519,Uc=35044;var Fc="300 es",Ln=2e3,Mr=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _r=Math.PI/180,xa=180/Math.PI;function is(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function xu(s,e){return(s%e+e)%e}function eo(s,e,t){return(1-t)*s+t*e}function cs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ne=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],T=i[1],b=i[4],_=i[7],F=i[2],R=i[5],C=i[8];return r[0]=o*v+a*T+c*F,r[3]=o*m+a*b+c*R,r[6]=o*f+a*_+c*C,r[1]=l*v+u*T+h*F,r[4]=l*m+u*b+h*R,r[7]=l*f+u*_+h*C,r[2]=d*v+p*T+g*F,r[5]=d*m+p*b+g*R,r[8]=d*f+p*_+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new st;function Kl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _u(){let s=br("canvas");return s.style.display="block",s}var Oc={};function ps(s){s in Oc||(Oc[s]=!0,console.warn(s))}function yu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Mu(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bu(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bc=[.64,.33,.3,.6,.15,.06],zc=[.2126,.7152,.0722],kc=[.3127,.329],Vc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[ns]:{primaries:Bc,whitePoint:kc,transfer:qr,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:zc,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:Bc,whitePoint:kc,transfer:gt,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:zc,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});var Ci,_a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=br("canvas")),Ci.width=e.width,Ci.height=e.height;let n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Su=0,Sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(no(i[o].image)):r.push(no(i[o]))}else r=no(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function no(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wu=0,nn=class s extends Qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=gi,i=gi,r=tn,o=vi,a=pn,c=Nn,l=s.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=is(),this.name="",this.source=new Sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=zl;nn.DEFAULT_ANISOTROPY=1;var Ct=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(p+1)/2,F=(f+1)/2,R=(u+d)/4,C=(h+v)/4,U=(g+m)/4;return b>_&&b>F?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=C/n):_>F?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=U/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=C/r,i=U/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Sr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wr=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==p||u!==g){let m=1-a,f=c*d+l*p+u*g+h*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let F=Math.sqrt(b),R=Math.atan2(F,f*T);m=Math.sin(m*R)/F,a=Math.sin(a*R)/F}let _=a*T;if(c=c*m+d*_,l=l*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-a){let F=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=F,l*=F,u*=F,h*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new z,Gc=new ei,_i=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Bs.subVectors(this.max,ls),Ri.subVectors(e.a,ls),Ii.subVectors(e.b,ls),Pi.subVectors(e.c,ls),Hn.subVectors(Ii,Ri),Gn.subVectors(Pi,Ii),ai.subVectors(Ri,Pi);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!so(t,Ri,Ii,Pi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Ri,Ii,Pi,Bs))?!1:(zs.crossVectors(Hn,Gn),t=[zs.x,zs.y,zs.z],so(t,Ri,Ii,Pi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wn=[new z,new z,new z,new z,new z,new z,new z,new z],un=new z,Os=new _i,Ri=new z,Ii=new z,Pi=new z,Hn=new z,Gn=new z,ai=new z,ls=new z,Bs=new z,zs=new z,ci=new z;function so(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ci.fromArray(s,r);let a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Tu=new _i,hs=new z,ro=new z,yi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(ro)),this.expandByPoint(hs.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new z,oo=new z,ks=new z,Wn=new z,ao=new z,Vs=new z,co=new z,bs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(oo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Wn.dot(this.direction),c=-Wn.dot(ks),l=Wn.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(oo).addScaledVector(ks,d),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);let n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){ao.subVectors(t,e),Vs.subVectors(n,e),co.crossVectors(ao,Vs);let o=this.direction.dot(co),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);let c=a*this.direction.dot(Vs.crossVectors(Wn,Vs));if(c<0)return null;let l=a*this.direction.dot(ao.cross(Wn));if(l<0||c+l>o)return null;let u=-a*Wn.dot(co);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,d,p,g,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,p,g,v,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Au)}lookAt(e,t,n){let i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Xn.crossVectors(n,jt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Xn.crossVectors(n,jt)),Xn.normalize(),Hs.crossVectors(jt,Xn),i[0]=Xn.x,i[4]=Hs.x,i[8]=jt.x,i[1]=Xn.y,i[5]=Hs.y,i[9]=jt.y,i[2]=Xn.z,i[6]=Hs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],b=n[7],_=n[11],F=n[15],R=i[0],C=i[4],U=i[8],S=i[12],y=i[1],N=i[5],te=i[9],q=i[13],ee=i[2],he=i[6],$=i[10],Se=i[14],ne=i[3],De=i[7],Oe=i[11],ke=i[15];return r[0]=o*R+a*y+c*ee+l*ne,r[4]=o*C+a*N+c*he+l*De,r[8]=o*U+a*te+c*$+l*Oe,r[12]=o*S+a*q+c*Se+l*ke,r[1]=u*R+h*y+d*ee+p*ne,r[5]=u*C+h*N+d*he+p*De,r[9]=u*U+h*te+d*$+p*Oe,r[13]=u*S+h*q+d*Se+p*ke,r[2]=g*R+v*y+m*ee+f*ne,r[6]=g*C+v*N+m*he+f*De,r[10]=g*U+v*te+m*$+f*Oe,r[14]=g*S+v*q+m*Se+f*ke,r[3]=T*R+b*y+_*ee+F*ne,r[7]=T*C+b*N+_*he+F*De,r[11]=T*U+b*te+_*$+F*Oe,r[15]=T*S+b*q+_*Se+F*ke,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*p-n*c*p)+v*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=h*m*l-v*d*l+v*c*p-a*m*p-h*c*f+a*d*f,b=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,_=u*v*l-g*h*l+g*a*p-o*v*p-u*a*f+o*h*f,F=g*h*c-u*v*c-g*a*d+o*v*d+u*a*m-o*h*m,R=t*T+n*b+i*_+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=T*C,e[1]=(v*d*r-h*m*r-v*i*p+n*m*p+h*i*f-n*d*f)*C,e[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*f+n*c*f)*C,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*p-n*c*p)*C,e[4]=b*C,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*C,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*p+t*c*p)*C,e[8]=_*C,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*f-t*h*f)*C,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*f+t*a*f)*C,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*C,e[12]=F*C,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*m+t*h*m)*C,e[14]=(g*a*i-o*v*i-g*n*c+t*v*c+o*n*m-t*a*m)*C,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,T=c*l,b=c*u,_=c*h,F=n.x,R=n.y,C=n.z;return i[0]=(1-(v+f))*F,i[1]=(p+_)*F,i[2]=(g-b)*F,i[3]=0,i[4]=(p-_)*R,i[5]=(1-(d+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+b)*C,i[9]=(m-T)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Li.set(i[0],i[1],i[2]).length(),o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);let l=1/r,u=1/o,h=1/a;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ln){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(a===Ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ln){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,p=(n+i)*u,g,v;if(a===Ln)g=(o+r)*h,v=-2*h;else if(a===Mr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Li=new z,dn=new Et,Eu=new z(0,0,0),Au=new z(1,1,1),Xn=new z,Hs=new z,jt=new z,Wc=new Et,Xc=new ei,Un=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cu=0,qc=new z,Di=new ei,En=new Et,Gs=new z,us=new z,Ru=new z,Iu=new ei,Yc=new z(1,0,0),$c=new z(0,1,0),Zc=new z(0,0,1),Jc={type:"added"},Pu={type:"removed"},Ni={type:"childadded",child:null},lo={type:"childremoved",child:null},sn=class s extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new z,t=new Un,n=new ei,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new st}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(us,Gs,this.up):En.lookAt(Gs,us,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(En),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};sn.DEFAULT_UP=new z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new z,An=new z,ho=new z,Cn=new z,Ui=new z,Fi=new z,Kc=new z,uo=new z,fo=new z,po=new z,mo=new Ct,go=new Ct,vo=new Ct,Zn=class s{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fn.subVectors(i,t),An.subVectors(n,t),ho.subVectors(e,t);let o=fn.dot(fn),a=fn.dot(An),c=fn.dot(ho),l=An.dot(An),u=An.dot(ho),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return mo.setScalar(0),go.setScalar(0),vo.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(vo,r.z),o}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),An.subVectors(e,t),fn.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),fn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ui.subVectors(i,n),Fi.subVectors(r,n),uo.subVectors(e,n);let c=Ui.dot(uo),l=Fi.dot(uo);if(c<=0&&l<=0)return t.copy(n);fo.subVectors(e,i);let u=Ui.dot(fo),h=Fi.dot(fo);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ui,o);po.subVectors(e,r);let p=Ui.dot(po),g=Fi.dot(po);if(g>=0&&p<=g)return t.copy(r);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Fi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Kc.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Kc,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(Ui,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=xu(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xo(o,r,e+1/3),this.g=xo(o,r,e),this.b=xo(o,r,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ht.fromWorkingColorSpace(Xt.copy(this),e),Math.round(kt(Xt.r*255,0,255))*65536+Math.round(kt(Xt.g*255,0,255))*256+Math.round(kt(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){ht.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,i=Xt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Ws);let n=eo(qn.h,Ws.h,t),i=eo(qn.s,Ws.s,t),r=eo(qn.l,Ws.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new ut;ut.NAMES=jl;var Lu=0,ti=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=is(),this.name="",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new z,Xs=new Ne,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}};var Er=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ar=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Du=0,cn=new Et,_o=new sn,Oi=new z,Qt=new _i,ds=new _i,Ot=new z,Pt=class s extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?Ar:Er)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Qt.min,ds.min),Qt.expandByPoint(Ot),Ot.addVectors(Qt.max,ds.max),Qt.expandByPoint(Ot)):(Qt.expandByPoint(ds.min),Qt.expandByPoint(ds.max))}Qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(e,l),Ot.add(Oi)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new z,c[U]=new z;let l=new z,u=new z,h=new z,d=new Ne,p=new Ne,g=new Ne,v=new z,m=new z;function f(U,S,y){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[U].add(v),a[S].add(v),a[y].add(v),c[U].add(m),c[S].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,S=T.length;U<S;++U){let y=T[U],N=y.start,te=y.count;for(let q=N,ee=N+te;q<ee;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let b=new z,_=new z,F=new z,R=new z;function C(U){F.fromBufferAttribute(i,U),R.copy(F);let S=a[U];b.copy(S),b.sub(F.multiplyScalar(F.dot(S))).normalize(),_.crossVectors(R,S);let N=_.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,N)}for(let U=0,S=T.length;U<S;++U){let y=T[U],N=y.start,te=y.count;for(let q=N,ee=N+te;q<ee;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Vt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new Et,li=new bs,qs=new yi,Qc=new z,Ys=new z,$s=new z,Zs=new z,yo=new z,Js=new z,el=new z,Ks=new z,dt=class extends sn{constructor(e=new Pt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(yo.fromBufferAttribute(h,e),o?Js.addScaledVector(yo,u):Js.addScaledVector(yo.sub(t),u))}t.add(Js)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(qs.containsPoint(li.origin)===!1&&(li.intersectSphere(qs,Qc)===null||li.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(jc.copy(r).invert(),li.copy(e.ray).applyMatrix4(jc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,F=b;_<F;_+=3){let R=a.getX(_),C=a.getX(_+1),U=a.getX(_+2);i=js(this,f,e,n,l,u,h,R,C,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let T=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);i=js(this,o,e,n,l,u,h,T,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,F=b;_<F;_+=3){let R=_,C=_+1,U=_+2;i=js(this,f,e,n,l,u,h,R,C,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let T=m,b=m+1,_=m+2;i=js(this,o,e,n,l,u,h,T,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Nu(s,e,t,n,i,r,o,a){let c;if(e.side===Lt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===jn,a),c===null)return null;Ks.copy(a),Ks.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ks);return l<t.near||l>t.far?null:{distance:l,point:Ks.clone(),object:s}}function js(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ys),s.getVertexPosition(c,$s),s.getVertexPosition(l,Zs);let u=Nu(s,e,t,n,Ys,$s,Zs,el);if(u){let h=new z;Zn.getBarycoord(el,Ys,$s,Zs,h),i&&(u.uv=Zn.getInterpolatedAttribute(i,a,c,l,h,new Ne)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,c,l,h,new Ne)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new z,materialIndex:0};Zn.getNormal(Ys,$s,Zs,d.normal),u.face=d,u.barycoord=h}return u}var Dt=class s extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(v,m,f,T,b,_,F,R,C,U,S){let y=_/C,N=F/U,te=_/2,q=F/2,ee=R/2,he=C+1,$=U+1,Se=0,ne=0,De=new z;for(let Oe=0;Oe<$;Oe++){let ke=Oe*N-q;for(let ae=0;ae<he;ae++){let de=ae*y-te;De[v]=de*T,De[m]=ke*b,De[f]=ee,l.push(De.x,De.y,De.z),De[v]=0,De[m]=0,De[f]=R>0?1:-1,u.push(De.x,De.y,De.z),h.push(ae/C),h.push(1-Oe/U),Se+=1}}for(let Oe=0;Oe<U;Oe++)for(let ke=0;ke<C;ke++){let ae=d+ke+he*Oe,de=d+ke+he*(Oe+1),I=d+(ke+1)+he*(Oe+1),V=d+(ke+1)+he*Oe;c.push(ae,de,V),c.push(de,I,V),ne+=6}a.addGroup(p,ne,S),p+=ne,d+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ji(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){let e={};for(let t=0;t<s.length;t++){let n=ji(s[t]);for(let i in n)e[i]=n[i]}return e}function Uu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ql(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Fu={clone:ji,merge:Yt},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cr=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new z,tl=new Ne,nl=new Ne,Bt=class extends Cr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bi=-90,zi=1,ba=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(Bi,zi,e,t);i.layers=this.layers,this.add(i);let r=new Bt(Bi,zi,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Bi,zi,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Bi,zi,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Bi,zi,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rr=class extends nn{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sa=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Dt(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new dt(i,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=tn),new ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Mo=new z,zu=new z,ku=new st,In=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Mo.subVectors(n,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ku.getNormalMatrix(e),i=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new yi,Qs=new z,Ir=class{constructor(e=new In,t=new In,n=new In,i=new In,r=new In,o=new In){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],T=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-p,_-f).normalize(),n[1].setComponents(c+r,d+l,m+p,_+f).normalize(),n[2].setComponents(c+o,d+u,m+g,_+T).normalize(),n[3].setComponents(c-o,d-u,m-g,_-T).normalize(),n[4].setComponents(c-a,d-h,m-v,_-b).normalize(),t===Ln)n[5].setComponents(c+a,d+h,m+v,_+b).normalize();else if(t===Mr)n[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vu(s){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Fn=class s extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let T=f*d-o;for(let b=0;b<l;b++){let _=b*h-r;g.push(_,-T,0),v.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){let b=T+l*f,_=T+l*(f+1),F=T+1+l*(f+1),R=T+1+l*f;p.push(b,_,R),p.push(_,F,R)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
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
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,td=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ud=`#define PI 3.141592653589793
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
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
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
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
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
#endif`,kd=`struct PhysicalMaterial {
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
}`,Vd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kd=`#if defined( USE_POINTS_UV )
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
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
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
#endif`,rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uf=`#ifdef USE_NORMALMAP
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
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Af=`float getShadowMask() {
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
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
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
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
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
#endif`,Of=`#ifdef USE_TRANSMISSION
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
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
}`,Zf=`#if DEPTH_PACKING == 3200
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
}`,Jf=`#define DISTANCE
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
}`,Kf=`#define DISTANCE
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#define LAMBERT
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
}`,rp=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,ap=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,up=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,_p=`uniform vec3 color;
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
}`,yp=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Hu,alphahash_pars_fragment:Gu,alphamap_fragment:Wu,alphamap_pars_fragment:Xu,alphatest_fragment:qu,alphatest_pars_fragment:Yu,aomap_fragment:$u,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:Ku,begin_vertex:ju,beginnormal_vertex:Qu,bsdfs:ed,iridescence_fragment:td,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:od,color_fragment:ad,color_pars_fragment:cd,color_pars_vertex:ld,color_vertex:hd,common:ud,cube_uv_reflection_fragment:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:_d,envmap_fragment:yd,envmap_common_pars_fragment:Md,envmap_pars_fragment:bd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Nd,envmap_vertex:wd,fog_vertex:Td,fog_pars_vertex:Ed,fog_fragment:Ad,fog_pars_fragment:Cd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Id,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:Bd,lights_physical_fragment:zd,lights_physical_pars_fragment:kd,lights_fragment_begin:Vd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Qd,morphinstance_vertex:ef,morphcolor_vertex:tf,morphnormal_vertex:nf,morphtarget_pars_vertex:sf,morphtarget_vertex:rf,normal_fragment_begin:of,normal_fragment_maps:af,normal_pars_fragment:cf,normal_pars_vertex:lf,normal_vertex:hf,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,opaque_fragment:gf,packing:vf,premultiplied_alpha_fragment:xf,project_vertex:_f,dithering_fragment:yf,dithering_pars_fragment:Mf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Tf,shadowmap_vertex:Ef,shadowmask_pars_fragment:Af,skinbase_vertex:Cf,skinning_pars_vertex:Rf,skinning_vertex:If,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:Nf,tonemapping_pars_fragment:Uf,transmission_fragment:Ff,transmission_pars_fragment:Of,uv_pars_fragment:Bf,uv_pars_vertex:zf,uv_vertex:kf,worldpos_vertex:Vf,background_vert:Hf,background_frag:Gf,backgroundCube_vert:Wf,backgroundCube_frag:Xf,cube_vert:qf,cube_frag:Yf,depth_vert:$f,depth_frag:Zf,distanceRGBA_vert:Jf,distanceRGBA_frag:Kf,equirect_vert:jf,equirect_frag:Qf,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:sp,meshlambert_frag:rp,meshmatcap_vert:op,meshmatcap_frag:ap,meshnormal_vert:cp,meshnormal_frag:lp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:dp,meshphysical_frag:fp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:vp,shadow_vert:xp,shadow_frag:_p,sprite_vert:yp,sprite_frag:Mp},Be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},bn={basic:{uniforms:Yt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Yt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Yt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Yt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Yt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Yt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Yt([Be.points,Be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Yt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Yt([Be.common,Be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Yt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Yt([Be.sprite,Be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Yt([Be.common,Be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Yt([Be.lights,Be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bn.physical={uniforms:Yt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var er={r:0,b:0,g:0},ui=new Un,bp=new Et;function Sp(s,e,t,n,i,r,o){let a=new ut(0),c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function v(T){let b=!1,_=g(T);_===null?f(a,c):_&&_.isColor&&(f(_,1),b=!0);let F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Xr)?(u===void 0&&(u=new dt(new Dt(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:ji(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ui.copy(b.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(ui)),u.material.toneMapped=ht.getTransfer(_.colorSpace)!==gt,(h!==_||d!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new dt(new Fn(2,2),new Rt({name:"BackgroundMaterial",uniforms:ji(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,p=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,b){T.getRGB(er,Ql(s)),n.buffers.color.setClear(er.r,er.g,er.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:v,addToRenderList:m}}function wp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,N,te,q,ee){let he=!1,$=h(q,te,N);r!==$&&(r=$,l(r.object)),he=p(y,q,te,ee),he&&g(y,q,te,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,_(y,N,te,q),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,N,te){let q=te.wireframe===!0,ee=n[y.id];ee===void 0&&(ee={},n[y.id]=ee);let he=ee[N.id];he===void 0&&(he={},ee[N.id]=he);let $=he[q];return $===void 0&&($=d(c()),he[q]=$),$}function d(y){let N=[],te=[],q=[];for(let ee=0;ee<t;ee++)N[ee]=0,te[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:te,attributeDivisors:q,object:y,attributes:{},index:null}}function p(y,N,te,q){let ee=r.attributes,he=N.attributes,$=0,Se=te.getAttributes();for(let ne in Se)if(Se[ne].location>=0){let Oe=ee[ne],ke=he[ne];if(ke===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ke=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ke=y.instanceColor)),Oe===void 0||Oe.attribute!==ke||ke&&Oe.data!==ke.data)return!0;$++}return r.attributesNum!==$||r.index!==q}function g(y,N,te,q){let ee={},he=N.attributes,$=0,Se=te.getAttributes();for(let ne in Se)if(Se[ne].location>=0){let Oe=he[ne];Oe===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(Oe=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(Oe=y.instanceColor));let ke={};ke.attribute=Oe,Oe&&Oe.data&&(ke.data=Oe.data),ee[ne]=ke,$++}r.attributes=ee,r.attributesNum=$,r.index=q}function v(){let y=r.newAttributes;for(let N=0,te=y.length;N<te;N++)y[N]=0}function m(y){f(y,0)}function f(y,N){let te=r.newAttributes,q=r.enabledAttributes,ee=r.attributeDivisors;te[y]=1,q[y]===0&&(s.enableVertexAttribArray(y),q[y]=1),ee[y]!==N&&(s.vertexAttribDivisor(y,N),ee[y]=N)}function T(){let y=r.newAttributes,N=r.enabledAttributes;for(let te=0,q=N.length;te<q;te++)N[te]!==y[te]&&(s.disableVertexAttribArray(te),N[te]=0)}function b(y,N,te,q,ee,he,$){$===!0?s.vertexAttribIPointer(y,N,te,ee,he):s.vertexAttribPointer(y,N,te,q,ee,he)}function _(y,N,te,q){v();let ee=q.attributes,he=te.getAttributes(),$=N.defaultAttributeValues;for(let Se in he){let ne=he[Se];if(ne.location>=0){let De=ee[Se];if(De===void 0&&(Se==="instanceMatrix"&&y.instanceMatrix&&(De=y.instanceMatrix),Se==="instanceColor"&&y.instanceColor&&(De=y.instanceColor)),De!==void 0){let Oe=De.normalized,ke=De.itemSize,ae=e.get(De);if(ae===void 0)continue;let de=ae.buffer,I=ae.type,V=ae.bytesPerElement,X=I===s.INT||I===s.UNSIGNED_INT||De.gpuType===ic;if(De.isInterleavedBufferAttribute){let D=De.data,le=D.stride,Le=De.offset;if(D.isInstancedInterleavedBuffer){for(let se=0;se<ne.locationSize;se++)f(ne.location+se,D.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let se=0;se<ne.locationSize;se++)m(ne.location+se);s.bindBuffer(s.ARRAY_BUFFER,de);for(let se=0;se<ne.locationSize;se++)b(ne.location+se,ke/ne.locationSize,I,Oe,le*V,(Le+ke/ne.locationSize*se)*V,X)}else{if(De.isInstancedBufferAttribute){for(let D=0;D<ne.locationSize;D++)f(ne.location+D,De.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let D=0;D<ne.locationSize;D++)m(ne.location+D);s.bindBuffer(s.ARRAY_BUFFER,de);for(let D=0;D<ne.locationSize;D++)b(ne.location+D,ke/ne.locationSize,I,Oe,ke*V,ke/ne.locationSize*D*V,X)}}else if($!==void 0){let Oe=$[Se];if(Oe!==void 0)switch(Oe.length){case 2:s.vertexAttrib2fv(ne.location,Oe);break;case 3:s.vertexAttrib3fv(ne.location,Oe);break;case 4:s.vertexAttrib4fv(ne.location,Oe);break;default:s.vertexAttrib1fv(ne.location,Oe)}}}}T()}function F(){U();for(let y in n){let N=n[y];for(let te in N){let q=N[te];for(let ee in q)u(q[ee].object),delete q[ee];delete N[te]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let N=n[y.id];for(let te in N){let q=N[te];for(let ee in q)u(q[ee].object),delete q[ee];delete N[te]}delete n[y.id]}function C(y){for(let N in n){let te=n[N];if(te[y.id]===void 0)continue;let q=te[y.id];for(let ee in q)u(q[ee].object),delete q[ee];delete te[y.id]}}function U(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Tp(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ep(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let U=C===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!U)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:F,maxSamples:R}}function Ap(s){let e=this,t=null,n=0,i=!1,r=!1,o=new In,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,b=T*4,_=f.clippingState||null;c.value=_,_=u(g,d,b,p);for(let F=0;F!==b;++F)_[F]=t[F];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==v;++b,_+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Cp(s){let e=new WeakMap;function t(o,a){return a===Ho?o.mapping=$i:a===Go&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ho||a===Go)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sa(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ss=class extends Cr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vi=4,il=[.125,.215,.35,.446,.526,.582],mi=20,bo=new Ss,sl=new ut,So=null,wo=0,To=0,Eo=!1,fi=(1+Math.sqrt(5))/2,ki=1/fi,rl=[new z(-fi,ki,0),new z(fi,ki,0),new z(-ki,0,fi),new z(ki,0,fi),new z(0,fi,-ki),new z(0,fi,ki),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,wo,To),this._renderer.xr.enabled=Eo,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:wi,format:pn,colorSpace:ns,depthBuffer:!1},i=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(r)),this._blurMaterial=Ip(r,e,t)}return i}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){let a=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sl),u.toneMapping=Kn,u.autoClear=!1;let p=new Sn({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new dt(new Dt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(sl),v=!0);for(let f=0;f<6;f++){let T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let b=this._cubeSize;tr(i,T*b,f>2?b:0,b,b),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===$i||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;tr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rl[(i-r-1)%rl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);let f=[],T=0;for(let C=0;C<mi;++C){let U=C/v,S=Math.exp(-U*U/2);f.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let _=this._sizeLods[i],F=3*_*(i>b-Vi?i-b+Vi:0),R=4*(this._cubeSize-_);tr(t,F,R,3*_,2*_),c.setRenderTarget(t),c.render(h,bo)}};function Rp(s){let e=[],t=[],n=[],i=s,r=s-Vi+1+il.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Vi?c=il[o-s+Vi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),b=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,U=R>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];T.set(S,v*g*R),b.set(d,m*g*R);let y=[R,R,R,R,R,R];_.set(y,f*g*R)}let F=new Pt;F.setAttribute("position",new Vt(T,v)),F.setAttribute("uv",new Vt(b,m)),F.setAttribute("faceIndex",new Vt(_,f)),e.push(F),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(s,e,t){let n=new vn(s,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ip(s,e,t){let n=new Float32Array(mi),i=new z(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function al(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cl(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function Pp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ho||c===Go,u=c===$i||c===Zi;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pr(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Pr(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dp(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let T=p.array;v=p.version;for(let b=0,_=T.length;b<_;b+=3){let F=T[b+0],R=T[b+1],C=T[b+2];d.push(F,R,R,C,C,F)}}else if(g!==void 0){let T=g.array;v=g.version;for(let b=0,_=T.length/3-1;b<_;b+=3){let F=b+0,R=b+1,C=b+2;d.push(F,R,R,C,C,F)}}else return;let m=new(Kl(d)?Ar:Er)(d,1);m.version=v;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Np(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Up(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fp(s,e,t){let n=new WeakMap,i=new Ct;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let _=a.attributes.position.count*b,F=1;_>e.maxTextureSize&&(F=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*F*4*h),C=new wr(R,_,F,h);C.type=Pn,C.needsUpdate=!0;let U=b*4;for(let y=0;y<h;y++){let N=m[y],te=f[y],q=T[y],ee=_*F*4*y;for(let he=0;he<N.count;he++){let $=he*U;p===!0&&(i.fromBufferAttribute(N,he),R[ee+$+0]=i.x,R[ee+$+1]=i.y,R[ee+$+2]=i.z,R[ee+$+3]=0),g===!0&&(i.fromBufferAttribute(te,he),R[ee+$+4]=i.x,R[ee+$+5]=i.y,R[ee+$+6]=i.z,R[ee+$+7]=0),v===!0&&(i.fromBufferAttribute(q,he),R[ee+$+8]=i.x,R[ee+$+9]=i.y,R[ee+$+10]=i.z,R[ee+$+11]=q.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new Ne(_,F)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Op(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Lr=class extends nn{constructor(e,t,n,i,r,o,a,c,l,u=Wi){if(u!==Wi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=xi),n===void 0&&u===Ki&&(n=Ji),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},th=new nn,ll=new Lr(1,1),nh=new wr,ih=new Ma,sh=new Rr,hl=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function ss(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=hl[i];if(r===void 0&&(r=new Float32Array(i),hl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yr(s,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function kp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Vp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Hp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;pl.set(n),s.uniformMatrix2fv(this.addr,!1,pl),Ut(t,n)}}function Gp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;fl.set(n),s.uniformMatrix3fv(this.addr,!1,fl),Ut(t,n)}}function Wp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;dl.set(n),s.uniformMatrix4fv(this.addr,!1,dl),Ut(t,n)}}function Xp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function Yp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function $p(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function Zp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function Kp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function jp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function Qp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ll.compareFunction=Jl,r=ll):r=th,t.setTexture2D(e||r,i)}function em(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ih,i)}function tm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sh,i)}function nm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nh,i)}function im(s){switch(s){case 5126:return Bp;case 35664:return zp;case 35665:return kp;case 35666:return Vp;case 35674:return Hp;case 35675:return Gp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function sm(s,e){s.uniform1fv(this.addr,e)}function rm(s,e){let t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function om(s,e){let t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function am(s,e){let t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function cm(s,e){let t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function lm(s,e){let t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hm(s,e){let t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function um(s,e){s.uniform1iv(this.addr,e)}function dm(s,e){s.uniform2iv(this.addr,e)}function fm(s,e){s.uniform3iv(this.addr,e)}function pm(s,e){s.uniform4iv(this.addr,e)}function mm(s,e){s.uniform1uiv(this.addr,e)}function gm(s,e){s.uniform2uiv(this.addr,e)}function vm(s,e){s.uniform3uiv(this.addr,e)}function xm(s,e){s.uniform4uiv(this.addr,e)}function _m(s,e,t){let n=this.cache,i=e.length,r=Yr(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||th,r[o])}function ym(s,e,t){let n=this.cache,i=e.length,r=Yr(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ih,r[o])}function Mm(s,e,t){let n=this.cache,i=e.length,r=Yr(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sh,r[o])}function bm(s,e,t){let n=this.cache,i=e.length,r=Yr(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nh,r[o])}function Sm(s){switch(s){case 5126:return sm;case 35664:return rm;case 35665:return om;case 35666:return am;case 35674:return cm;case 35675:return lm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return bm}}var wa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=im(t.type)}},Ta=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}},Ea=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function ml(s,e){s.seq.push(e),s.map[e.id]=e}function wm(s,e,t){let n=s.name,i=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),o=Ao.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ml(t,l===void 0?new wa(a,s,e):new Ta(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ea(a),ml(t,h)),t=h}}}var qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);wm(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function gl(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Tm=37297,Em=0;function Am(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vl=new st;function Cm(s){ht._getMatrix(vl,ht.workingColorSpace,s);let e=`mat3( ${vl.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case qr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xl(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Am(s.getShaderSource(e),o)}else return i}function Rm(s,e){let t=Cm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Im(s,e){let t;switch(e){case Qh:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case nu:t="ACESFilmic";break;case su:t="AgX";break;case ru:t="Neutral";break;case iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nr=new z;function Pm(){ht.getLuminanceCoefficients(nr);let s=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Dm(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ms(s){return s!==""}function _l(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(s){return s.replace(Um,Om)}var Fm=new Map;function Om(s,e){let t=rt[e];if(t===void 0){let n=Fm.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}var Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(s){return s.replace(Bm,zm)}function zm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Zi:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case jh:e="ENVMAP_BLENDING_ADD";break}return e}function Wm(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xm(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=km(t),l=Vm(t),u=Hm(t),h=Gm(t),d=Wm(t),p=Lm(t),g=Dm(r),v=i.createProgram(),m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),f.length>0&&(f+=`
`)):(m=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),f=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=Aa(o),o=_l(o,t),o=yl(o,t),a=Aa(a),a=_l(a,t),a=yl(a,t),o=Ml(o),a=Ml(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=T+m+o,_=T+f+a,F=gl(i,i.VERTEX_SHADER,b),R=gl(i,i.FRAGMENT_SHADER,_);i.attachShader(v,F),i.attachShader(v,R),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(N){if(s.debug.checkShaderErrors){let te=i.getProgramInfoLog(v).trim(),q=i.getShaderInfoLog(F).trim(),ee=i.getShaderInfoLog(R).trim(),he=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,F,R);else{let Se=xl(i,F,"vertex"),ne=xl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+te+`
`+Se+`
`+ne)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(q===""||ee==="")&&($=!1);$&&(N.diagnostics={runnable:he,programLog:te,vertexShader:{log:q,prefix:m},fragmentShader:{log:ee,prefix:f}})}i.deleteShader(F),i.deleteShader(R),U=new qi(i,v),S=Nm(i,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Tm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=R,this}var qm=0,Ca=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ra(e),t.set(e,n)),n}},Ra=class{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}};function Ym(s,e,t,n,i,r,o){let a=new Tr,c=new Ca,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,N,te,q){let ee=te.fog,he=q.geometry,$=S.isMeshStandardMaterial?te.environment:null,Se=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),ne=Se&&Se.mapping===Xr?Se.image.height:null,De=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ke=Oe!==void 0?Oe.length:0,ae=0;he.morphAttributes.position!==void 0&&(ae=1),he.morphAttributes.normal!==void 0&&(ae=2),he.morphAttributes.color!==void 0&&(ae=3);let de,I,V,X;if(De){let Je=bn[De];de=Je.vertexShader,I=Je.fragmentShader}else de=S.vertexShader,I=S.fragmentShader,c.update(S),V=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);let D=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Le=q.isInstancedMesh===!0,se=q.isBatchedMesh===!0,ge=!!S.map,H=!!S.matcap,ie=!!Se,A=!!S.aoMap,we=!!S.lightMap,re=!!S.bumpMap,Ae=!!S.normalMap,ve=!!S.displacementMap,Ue=!!S.emissiveMap,_e=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,Y=S.clearcoat>0,j=S.dispersion>0,P=S.iridescence>0,G=S.sheen>0,me=S.transmission>0,fe=x&&!!S.anisotropyMap,ye=Y&&!!S.clearcoatMap,qe=Y&&!!S.clearcoatNormalMap,xe=Y&&!!S.clearcoatRoughnessMap,Fe=P&&!!S.iridescenceMap,Ge=P&&!!S.iridescenceThicknessMap,Ve=G&&!!S.sheenColorMap,ze=G&&!!S.sheenRoughnessMap,nt=!!S.specularMap,oe=!!S.specularColorMap,Te=!!S.specularIntensityMap,L=me&&!!S.transmissionMap,be=me&&!!S.thicknessMap,Q=!!S.gradientMap,ce=!!S.alphaMap,Ee=S.alphaTest>0,Pe=!!S.alphaHash,Ye=!!S.extensions,Ke=Kn;S.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ke=s.toneMapping);let vt={shaderID:De,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:I,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:se,batchingColor:se&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?s.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ns,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:H,envMap:ie,envMapMode:ie&&Se.mapping,envMapCubeUVHeight:ne,aoMap:A,lightMap:we,bumpMap:re,normalMap:Ae,displacementMap:d&&ve,emissiveMap:Ue,normalMapObjectSpace:Ae&&S.normalMapType===hu,normalMapTangentSpace:Ae&&S.normalMapType===lu,metalnessMap:_e,roughnessMap:w,anisotropy:x,anisotropyMap:fe,clearcoat:Y,clearcoatMap:ye,clearcoatNormalMap:qe,clearcoatRoughnessMap:xe,dispersion:j,iridescence:P,iridescenceMap:Fe,iridescenceThicknessMap:Ge,sheen:G,sheenColorMap:Ve,sheenRoughnessMap:ze,specularMap:nt,specularColorMap:oe,specularIntensityMap:Te,transmission:me,transmissionMap:L,thicknessMap:be,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Gi&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ee,alphaHash:Pe,combine:S.combine,mapUv:ge&&v(S.map.channel),aoMapUv:A&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:re&&v(S.bumpMap.channel),normalMapUv:Ae&&v(S.normalMap.channel),displacementMapUv:ve&&v(S.displacementMap.channel),emissiveMapUv:Ue&&v(S.emissiveMap.channel),metalnessMapUv:_e&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:ye&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(S.sheenRoughnessMap.channel),specularMapUv:nt&&v(S.specularMap.channel),specularColorMapUv:oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Te&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:be&&v(S.thicknessMap.channel),alphaMapUv:ce&&v(S.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ae||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!he.attributes.uv&&(ge||ce),fog:!!ee,useFog:S.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:le,skinning:q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Lt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function f(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)y.push(N),y.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(T(y,S),b(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let y=g[S.type],N;if(y){let te=bn[y];N=Fu.clone(te.uniforms)}else N=S.uniforms;return N}function F(S,y){let N;for(let te=0,q=u.length;te<q;te++){let ee=u[te];if(ee.cacheKey===y){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new Xm(s,y,S,r),u.push(N)),N}function R(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:F,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:U}}function $m(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wl(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(h,d,p,g,v,m){let f=o(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Zm),n.length>1&&n.sort(d||Sl),i.length>1&&i.sort(d||Sl)}function u(){for(let h=e,d=s.length;h<d;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Jm(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new wl,s.set(n,[o])):i>=r.length?(o=new wl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Km(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ut};break;case"SpotLight":t={position:new z,direction:new z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function jm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Qm=0;function e0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function t0(s){let e=new Km,t=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,r=new Et,o=new Et;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,b=0,_=0,F=0,R=0,C=0;l.sort(e0);for(let S=0,y=l.length;S<y;S++){let N=l[S],te=N.color,q=N.intensity,ee=N.distance,he=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=te.r*q,h+=te.g*q,d+=te.b*q;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],q);C++}else if(N.isDirectionalLight){let $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Se=N.shadow,ne=t.get(N);ne.shadowIntensity=Se.intensity,ne.shadowBias=Se.bias,ne.shadowNormalBias=Se.normalBias,ne.shadowRadius=Se.radius,ne.shadowMapSize=Se.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=he,n.directionalShadowMatrix[p]=N.shadow.matrix,T++}n.directional[p]=$,p++}else if(N.isSpotLight){let $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(te).multiplyScalar(q),$.distance=ee,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[v]=$;let Se=N.shadow;if(N.map&&(n.spotLightMap[F]=N.map,F++,Se.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[v]=Se.matrix,N.castShadow){let ne=t.get(N);ne.shadowIntensity=Se.intensity,ne.shadowBias=Se.bias,ne.shadowNormalBias=Se.normalBias,ne.shadowRadius=Se.radius,ne.shadowMapSize=Se.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=he,_++}v++}else if(N.isRectAreaLight){let $=e.get(N);$.color.copy(te).multiplyScalar(q),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=$,m++}else if(N.isPointLight){let $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){let Se=N.shadow,ne=t.get(N);ne.shadowIntensity=Se.intensity,ne.shadowBias=Se.bias,ne.shadowNormalBias=Se.normalBias,ne.shadowRadius=Se.radius,ne.shadowMapSize=Se.mapSize,ne.shadowCameraNear=Se.camera.near,ne.shadowCameraFar=Se.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=he,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=$,g++}else if(N.isHemisphereLight){let $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(q),$.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[f]=$,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==_||U.numSpotMaps!==F||U.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=_,U.numSpotMaps=F,U.numLightProbes=C,n.version=Qm++)}function c(l,u){let h=0,d=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){let b=l[f];if(b.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Tl(s){let e=new t0(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function n0(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Tl(s),e.set(i,[a])):r>=o.length?(a=new Tl(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ia=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pa=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`;function r0(s,e,t){let n=new Ir,i=new Ne,r=new Ne,o=new Ct,a=new Ia({depthPacking:cu}),c=new Pa,l={},u=t.maxTextureSize,h={[jn]:Lt,[Lt]:jn,[en]:en},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let f=this.type;this.render=function(R,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Jn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let q=f!==Rn&&this.type===Rn,ee=f===Rn&&this.type!==Rn;for(let he=0,$=R.length;he<$;he++){let Se=R[he],ne=Se.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;i.copy(ne.mapSize);let De=ne.getFrameExtents();if(i.multiply(De),r.copy(ne.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/De.x),i.x=r.x*De.x,ne.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/De.y),i.y=r.y*De.y,ne.mapSize.y=r.y)),ne.map===null||q===!0||ee===!0){let ke=this.type!==Rn?{minFilter:mn,magFilter:mn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new vn(i.x,i.y,ke),ne.map.texture.name=Se.name+".shadowMap",ne.camera.updateProjectionMatrix()}s.setRenderTarget(ne.map),s.clear();let Oe=ne.getViewportCount();for(let ke=0;ke<Oe;ke++){let ae=ne.getViewport(ke);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),te.viewport(o),ne.updateMatrices(Se,ke),n=ne.getFrustum(),_(C,U,ne.camera,Se,this.type)}ne.isPointLightShadow!==!0&&this.type===Rn&&T(ne,U),ne.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,N)};function T(R,C){let U=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,U,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,U,p,v,null)}function b(R,C,U,S){let y=null,N=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)y=N;else if(y=U.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let te=y.uuid,q=C.uuid,ee=l[te];ee===void 0&&(ee={},l[te]=ee);let he=ee[q];he===void 0&&(he=y.clone(),ee[q]=he,C.addEventListener("dispose",F)),y=he}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Rn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let te=s.properties.get(y);te.light=U}return y}function _(R,C,U,S,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Rn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let q=e.update(R),ee=R.material;if(Array.isArray(ee)){let he=q.groups;for(let $=0,Se=he.length;$<Se;$++){let ne=he[$],De=ee[ne.materialIndex];if(De&&De.visible){let Oe=b(R,De,S,y);R.onBeforeShadow(s,R,C,U,q,Oe,ne),s.renderBufferDirect(U,null,q,Oe,R,ne),R.onAfterShadow(s,R,C,U,q,Oe,ne)}}}else if(ee.visible){let he=b(R,ee,S,y);R.onBeforeShadow(s,R,C,U,q,he,null),s.renderBufferDirect(U,null,q,he,R,null),R.onAfterShadow(s,R,C,U,q,he,null)}}let te=R.children;for(let q=0,ee=te.length;q<ee;q++)_(te[q],C,U,S,y)}function F(R){R.target.removeEventListener("dispose",F);for(let U in l){let S=l[U],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var o0={[Uo]:Fo,[Oo]:ko,[Bo]:Vo,[Yi]:zo,[Fo]:Uo,[ko]:Oo,[Vo]:Bo,[zo]:Yi};function a0(s,e){function t(){let L=!1,be=new Ct,Q=null,ce=new Ct(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!L&&(s.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,Pe,Ye,Ke,vt){vt===!0&&(Ee*=Ke,Pe*=Ke,Ye*=Ke),be.set(Ee,Pe,Ye,Ke),ce.equals(be)===!1&&(s.clearColor(Ee,Pe,Ye,Ke),ce.copy(be))},reset:function(){L=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let L=!1,be=!1,Q=null,ce=null,Ee=null;return{setReversed:function(Pe){if(be!==Pe){let Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Ke=Ee;Ee=null,this.setClear(Ke)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?D(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!L&&(s.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(be&&(Pe=o0[Pe]),ce!==Pe){switch(Pe){case Uo:s.depthFunc(s.NEVER);break;case Fo:s.depthFunc(s.ALWAYS);break;case Oo:s.depthFunc(s.LESS);break;case Yi:s.depthFunc(s.LEQUAL);break;case Bo:s.depthFunc(s.EQUAL);break;case zo:s.depthFunc(s.GEQUAL);break;case ko:s.depthFunc(s.GREATER);break;case Vo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Pe}},setLocked:function(Pe){L=Pe},setClear:function(Pe){Ee!==Pe&&(be&&(Pe=1-Pe),s.clearDepth(Pe),Ee=Pe)},reset:function(){L=!1,Q=null,ce=null,Ee=null,be=!1}}}function i(){let L=!1,be=null,Q=null,ce=null,Ee=null,Pe=null,Ye=null,Ke=null,vt=null;return{setTest:function(Je){L||(Je?D(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(Je){be!==Je&&!L&&(s.stencilMask(Je),be=Je)},setFunc:function(Je,ft,yt){(Q!==Je||ce!==ft||Ee!==yt)&&(s.stencilFunc(Je,ft,yt),Q=Je,ce=ft,Ee=yt)},setOp:function(Je,ft,yt){(Pe!==Je||Ye!==ft||Ke!==yt)&&(s.stencilOp(Je,ft,yt),Pe=Je,Ye=ft,Ke=yt)},setLocked:function(Je){L=Je},setClear:function(Je){vt!==Je&&(s.clearStencil(Je),vt=Je)},reset:function(){L=!1,be=null,Q=null,ce=null,Ee=null,Pe=null,Ye=null,Ke=null,vt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,b=null,_=null,F=null,R=null,C=new ut(0,0,0),U=0,S=!1,y=null,N=null,te=null,q=null,ee=null,he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Se=0,ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(Se=parseFloat(/^WebGL (\d)/.exec(ne)[1]),$=Se>=1):ne.indexOf("OpenGL ES")!==-1&&(Se=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),$=Se>=2);let De=null,Oe={},ke=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),de=new Ct().fromArray(ke),I=new Ct().fromArray(ae);function V(L,be,Q,ce){let Ee=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(L,Pe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<Q;Ye++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(be+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Pe}let X={};X[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(s.DEPTH_TEST),o.setFunc(Yi),re(!1),Ae(Cc),D(s.CULL_FACE),A(Jn);function D(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function le(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Le(L,be){return h[L]!==be?(s.bindFramebuffer(L,be),h[L]=be,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=be),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=be),!0):!1}function se(L,be){let Q=p,ce=!1;if(L){Q=d.get(be),Q===void 0&&(Q=[],d.set(be,Q));let Ee=L.textures;if(Q.length!==Ee.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Ye=Ee.length;Pe<Ye;Pe++)Q[Pe]=s.COLOR_ATTACHMENT0+Pe;Q.length=Ee.length,ce=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ce=!0);ce&&s.drawBuffers(Q)}function ge(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let H={[pi]:s.FUNC_ADD,[Nh]:s.FUNC_SUBTRACT,[Uh]:s.FUNC_REVERSE_SUBTRACT};H[Fh]=s.MIN,H[Oh]=s.MAX;let ie={[Bh]:s.ZERO,[zh]:s.ONE,[kh]:s.SRC_COLOR,[Do]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[Wh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[Vh]:s.ONE_MINUS_SRC_COLOR,[No]:s.ONE_MINUS_SRC_ALPHA,[Xh]:s.ONE_MINUS_DST_COLOR,[Gh]:s.ONE_MINUS_DST_ALPHA,[Yh]:s.CONSTANT_COLOR,[$h]:s.ONE_MINUS_CONSTANT_COLOR,[Zh]:s.CONSTANT_ALPHA,[Jh]:s.ONE_MINUS_CONSTANT_ALPHA};function A(L,be,Q,ce,Ee,Pe,Ye,Ke,vt,Je){if(L===Jn){v===!0&&(le(s.BLEND),v=!1);return}if(v===!1&&(D(s.BLEND),v=!0),L!==Dh){if(L!==m||Je!==S){if((f!==pi||_!==pi)&&(s.blendEquation(s.FUNC_ADD),f=pi,_=pi),Je)switch(L){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gn:s.blendFunc(s.ONE,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,b=null,F=null,R=null,C.set(0,0,0),U=0,m=L,S=Je}return}Ee=Ee||be,Pe=Pe||Q,Ye=Ye||ce,(be!==f||Ee!==_)&&(s.blendEquationSeparate(H[be],H[Ee]),f=be,_=Ee),(Q!==T||ce!==b||Pe!==F||Ye!==R)&&(s.blendFuncSeparate(ie[Q],ie[ce],ie[Pe],ie[Ye]),T=Q,b=ce,F=Pe,R=Ye),(Ke.equals(C)===!1||vt!==U)&&(s.blendColor(Ke.r,Ke.g,Ke.b,vt),C.copy(Ke),U=vt),m=L,S=!1}function we(L,be){L.side===en?le(s.CULL_FACE):D(s.CULL_FACE);let Q=L.side===Lt;be&&(Q=!Q),re(Q),L.blending===Gi&&L.transparent===!1?A(Jn):A(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ce=L.stencilWrite;a.setTest(ce),ce&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?D(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function Ae(L){L!==Ih?(D(s.CULL_FACE),L!==N&&(L===Cc?s.cullFace(s.BACK):L===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),N=L}function ve(L){L!==te&&($&&s.lineWidth(L),te=L)}function Ue(L,be,Q){L?(D(s.POLYGON_OFFSET_FILL),(q!==be||ee!==Q)&&(s.polygonOffset(be,Q),q=be,ee=Q)):le(s.POLYGON_OFFSET_FILL)}function _e(L){L?D(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function w(L){L===void 0&&(L=s.TEXTURE0+he-1),De!==L&&(s.activeTexture(L),De=L)}function x(L,be,Q){Q===void 0&&(De===null?Q=s.TEXTURE0+he-1:Q=De);let ce=Oe[Q];ce===void 0&&(ce={type:void 0,texture:void 0},Oe[Q]=ce),(ce.type!==L||ce.texture!==be)&&(De!==Q&&(s.activeTexture(Q),De=Q),s.bindTexture(L,be||X[L]),ce.type=L,ce.texture=be)}function Y(){let L=Oe[De];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){de.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function ze(L){I.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),I.copy(L))}function nt(L,be){let Q=l.get(be);Q===void 0&&(Q=new WeakMap,l.set(be,Q));let ce=Q.get(L);ce===void 0&&(ce=s.getUniformBlockIndex(be,L.name),Q.set(L,ce))}function oe(L,be){let ce=l.get(be).get(L);c.get(be)!==ce&&(s.uniformBlockBinding(be,ce,L.__bindingPointIndex),c.set(be,ce))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},De=null,Oe={},h={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,b=null,_=null,F=null,R=null,C=new ut(0,0,0),U=0,S=!1,y=null,N=null,te=null,q=null,ee=null,de.set(0,0,s.canvas.width,s.canvas.height),I.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:le,bindFramebuffer:Le,drawBuffers:se,useProgram:ge,setBlending:A,setMaterial:we,setFlipSided:re,setCullFace:Ae,setLineWidth:ve,setPolygonOffset:Ue,setScissorTest:_e,activeTexture:w,bindTexture:x,unbindTexture:Y,compressedTexImage2D:j,compressedTexImage3D:P,texImage2D:Fe,texImage3D:Ge,updateUBOMapping:nt,uniformBlockBinding:oe,texStorage2D:qe,texStorage3D:xe,texSubImage2D:G,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ve,viewport:ze,reset:Te}}function El(s,e,t,n){let i=c0(n);switch(t){case Gl:return s*e;case Xl:return s*e;case ql:return s*e*2;case Yl:return s*e/i.components*i.byteLength;case oc:return s*e/i.components*i.byteLength;case $l:return s*e*2/i.components*i.byteLength;case ac:return s*e*2/i.components*i.byteLength;case Wl:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case cc:return s*e*4/i.components*i.byteLength;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gr:case vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qo:case $o:return Math.max(s,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(s,8)*Math.max(e,8)/2;case Zo:case Jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xr:case da:case fa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zl:case pa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ma:case ga:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(s){switch(s){case Nn:case kl:return{byteLength:1,components:1};case Ms:case Vl:case wi:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case xi:case ic:case Pn:return{byteLength:4,components:1};case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function l0(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):br("canvas")}function v(w,x,Y){let j=1,P=_e(w);if((P.width>Y||P.height>Y)&&(j=Y/Math.max(P.width,P.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let G=Math.floor(j*P.width),me=Math.floor(j*P.height);h===void 0&&(h=g(G,me));let fe=x?g(G,me):h;return fe.width=G,fe.height=me,fe.getContext("2d").drawImage(w,0,0,G,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+G+"x"+me+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,x,Y,j,P=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=x;if(x===s.RED&&(Y===s.FLOAT&&(G=s.R32F),Y===s.HALF_FLOAT&&(G=s.R16F),Y===s.UNSIGNED_BYTE&&(G=s.R8)),x===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(G=s.R8UI),Y===s.UNSIGNED_SHORT&&(G=s.R16UI),Y===s.UNSIGNED_INT&&(G=s.R32UI),Y===s.BYTE&&(G=s.R8I),Y===s.SHORT&&(G=s.R16I),Y===s.INT&&(G=s.R32I)),x===s.RG&&(Y===s.FLOAT&&(G=s.RG32F),Y===s.HALF_FLOAT&&(G=s.RG16F),Y===s.UNSIGNED_BYTE&&(G=s.RG8)),x===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(G=s.RG8UI),Y===s.UNSIGNED_SHORT&&(G=s.RG16UI),Y===s.UNSIGNED_INT&&(G=s.RG32UI),Y===s.BYTE&&(G=s.RG8I),Y===s.SHORT&&(G=s.RG16I),Y===s.INT&&(G=s.RG32I)),x===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(G=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(G=s.RGB16UI),Y===s.UNSIGNED_INT&&(G=s.RGB32UI),Y===s.BYTE&&(G=s.RGB8I),Y===s.SHORT&&(G=s.RGB16I),Y===s.INT&&(G=s.RGB32I)),x===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),Y===s.UNSIGNED_INT&&(G=s.RGBA32UI),Y===s.BYTE&&(G=s.RGBA8I),Y===s.SHORT&&(G=s.RGBA16I),Y===s.INT&&(G=s.RGBA32I)),x===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),x===s.RGBA){let me=P?qr:ht.getTransfer(j);Y===s.FLOAT&&(G=s.RGBA32F),Y===s.HALF_FLOAT&&(G=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(G=me===gt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(w,x){let Y;return w?x===null||x===xi||x===Ji?Y=s.DEPTH24_STENCIL8:x===Pn?Y=s.DEPTH32F_STENCIL8:x===Ms&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xi||x===Ji?Y=s.DEPTH_COMPONENT24:x===Pn?Y=s.DEPTH_COMPONENT32F:x===Ms&&(Y=s.DEPTH_COMPONENT16),Y}function F(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==mn&&w.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){let x=w.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&u.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),y(x)}function U(w){let x=n.get(w);if(x.__webglInit===void 0)return;let Y=w.source,j=d.get(Y);if(j){let P=j[x.__cacheKey];P.usedTimes--,P.usedTimes===0&&S(w),Object.keys(j).length===0&&d.delete(Y)}n.remove(w)}function S(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let Y=w.source,j=d.get(Y);delete j[x.__cacheKey],o.memory.textures--}function y(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let P=0;P<x.__webglFramebuffer[j].length;P++)s.deleteFramebuffer(x.__webglFramebuffer[j][P]);else s.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)s.deleteFramebuffer(x.__webglFramebuffer[j]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Y=w.textures;for(let j=0,P=Y.length;j<P;j++){let G=n.get(Y[j]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(Y[j])}n.remove(w)}let N=0;function te(){N=0}function q(){let w=N;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function ee(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function he(w,x){let Y=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(Y,w,x);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+x)}function $(w,x){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){I(Y,w,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+x)}function Se(w,x){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){I(Y,w,x);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+x)}function ne(w,x){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){V(Y,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+x)}let De={[ys]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Wo]:s.MIRRORED_REPEAT},Oe={[mn]:s.NEAREST,[ou]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[jr]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},ke={[uu]:s.NEVER,[vu]:s.ALWAYS,[du]:s.LESS,[Jl]:s.LEQUAL,[fu]:s.EQUAL,[gu]:s.GEQUAL,[pu]:s.GREATER,[mu]:s.NOTEQUAL};function ae(w,x){if(x.type===Pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===jr||x.magFilter===Fs||x.magFilter===vi||x.minFilter===tn||x.minFilter===jr||x.minFilter===Fs||x.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,De[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,De[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,De[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Oe[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Oe[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==Fs&&x.minFilter!==vi||x.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function de(w,x){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));let j=x.source,P=d.get(j);P===void 0&&(P={},d.set(j,P));let G=ee(x);if(G!==w.__cacheKey){P[G]===void 0&&(P[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),P[G].usedTimes++;let me=P[w.__cacheKey];me!==void 0&&(P[w.__cacheKey].usedTimes--,me.usedTimes===0&&S(x)),w.__cacheKey=G,w.__webglTexture=P[G].texture}return Y}function I(w,x,Y){let j=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=s.TEXTURE_3D);let P=de(w,x),G=x.source;t.bindTexture(j,w.__webglTexture,s.TEXTURE0+Y);let me=n.get(G);if(G.version!==me.__version||P===!0){t.activeTexture(s.TEXTURE0+Y);let fe=ht.getPrimaries(ht.workingColorSpace),ye=x.colorSpace===$n?null:ht.getPrimaries(x.colorSpace),qe=x.colorSpace===$n||fe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xe=v(x.image,!1,i.maxTextureSize);xe=Ue(x,xe);let Fe=r.convert(x.format,x.colorSpace),Ge=r.convert(x.type),Ve=b(x.internalFormat,Fe,Ge,x.colorSpace,x.isVideoTexture);ae(j,x);let ze,nt=x.mipmaps,oe=x.isVideoTexture!==!0,Te=me.__version===void 0||P===!0,L=G.dataReady,be=F(x,xe);if(x.isDepthTexture)Ve=_(x.format===Ki,x.type),Te&&(oe?t.texStorage2D(s.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Fe,Ge,null));else if(x.isDataTexture)if(nt.length>0){oe&&Te&&t.texStorage2D(s.TEXTURE_2D,be,Ve,nt[0].width,nt[0].height);for(let Q=0,ce=nt.length;Q<ce;Q++)ze=nt[Q],oe?L&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ze.width,ze.height,Fe,Ge,ze.data):t.texImage2D(s.TEXTURE_2D,Q,Ve,ze.width,ze.height,0,Fe,Ge,ze.data);x.generateMipmaps=!1}else oe?(Te&&t.texStorage2D(s.TEXTURE_2D,be,Ve,xe.width,xe.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe.width,xe.height,Fe,Ge,xe.data)):t.texImage2D(s.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Fe,Ge,xe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){oe&&Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ve,nt[0].width,nt[0].height,xe.depth);for(let Q=0,ce=nt.length;Q<ce;Q++)if(ze=nt[Q],x.format!==pn)if(Fe!==null)if(oe){if(L)if(x.layerUpdates.size>0){let Ee=El(ze.width,ze.height,x.format,x.type);for(let Pe of x.layerUpdates){let Ye=ze.data.subarray(Pe*Ee/ze.data.BYTES_PER_ELEMENT,(Pe+1)*Ee/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Pe,ze.width,ze.height,1,Fe,Ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ze.width,ze.height,xe.depth,Fe,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ve,ze.width,ze.height,xe.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ze.width,ze.height,xe.depth,Fe,Ge,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ve,ze.width,ze.height,xe.depth,0,Fe,Ge,ze.data)}else{oe&&Te&&t.texStorage2D(s.TEXTURE_2D,be,Ve,nt[0].width,nt[0].height);for(let Q=0,ce=nt.length;Q<ce;Q++)ze=nt[Q],x.format!==pn?Fe!==null?oe?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ze.width,ze.height,Fe,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?L&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ze.width,ze.height,Fe,Ge,ze.data):t.texImage2D(s.TEXTURE_2D,Q,Ve,ze.width,ze.height,0,Fe,Ge,ze.data)}else if(x.isDataArrayTexture)if(oe){if(Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ve,xe.width,xe.height,xe.depth),L)if(x.layerUpdates.size>0){let Q=El(xe.width,xe.height,x.format,x.type);for(let ce of x.layerUpdates){let Ee=xe.data.subarray(ce*Q/xe.data.BYTES_PER_ELEMENT,(ce+1)*Q/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,xe.width,xe.height,1,Fe,Ge,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Ge,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,Fe,Ge,xe.data);else if(x.isData3DTexture)oe?(Te&&t.texStorage3D(s.TEXTURE_3D,be,Ve,xe.width,xe.height,xe.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,Ge,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,Fe,Ge,xe.data);else if(x.isFramebufferTexture){if(Te)if(oe)t.texStorage2D(s.TEXTURE_2D,be,Ve,xe.width,xe.height);else{let Q=xe.width,ce=xe.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Ve,Q,ce,0,Fe,Ge,null),Q>>=1,ce>>=1}}else if(nt.length>0){if(oe&&Te){let Q=_e(nt[0]);t.texStorage2D(s.TEXTURE_2D,be,Ve,Q.width,Q.height)}for(let Q=0,ce=nt.length;Q<ce;Q++)ze=nt[Q],oe?L&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Fe,Ge,ze):t.texImage2D(s.TEXTURE_2D,Q,Ve,Fe,Ge,ze);x.generateMipmaps=!1}else if(oe){if(Te){let Q=_e(xe);t.texStorage2D(s.TEXTURE_2D,be,Ve,Q.width,Q.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Ge,xe)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Fe,Ge,xe);m(x)&&f(j),me.__version=G.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function V(w,x,Y){if(x.image.length!==6)return;let j=de(w,x),P=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+Y);let G=n.get(P);if(P.version!==G.__version||j===!0){t.activeTexture(s.TEXTURE0+Y);let me=ht.getPrimaries(ht.workingColorSpace),fe=x.colorSpace===$n?null:ht.getPrimaries(x.colorSpace),ye=x.colorSpace===$n||me===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let qe=x.isCompressedTexture||x.image[0].isCompressedTexture,xe=x.image[0]&&x.image[0].isDataTexture,Fe=[];for(let ce=0;ce<6;ce++)!qe&&!xe?Fe[ce]=v(x.image[ce],!0,i.maxCubemapSize):Fe[ce]=xe?x.image[ce].image:x.image[ce],Fe[ce]=Ue(x,Fe[ce]);let Ge=Fe[0],Ve=r.convert(x.format,x.colorSpace),ze=r.convert(x.type),nt=b(x.internalFormat,Ve,ze,x.colorSpace),oe=x.isVideoTexture!==!0,Te=G.__version===void 0||j===!0,L=P.dataReady,be=F(x,Ge);ae(s.TEXTURE_CUBE_MAP,x);let Q;if(qe){oe&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,nt,Ge.width,Ge.height);for(let ce=0;ce<6;ce++){Q=Fe[ce].mipmaps;for(let Ee=0;Ee<Q.length;Ee++){let Pe=Q[Ee];x.format!==pn?Ve!==null?oe?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Pe.width,Pe.height,Ve,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,nt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Pe.width,Pe.height,Ve,ze,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,nt,Pe.width,Pe.height,0,Ve,ze,Pe.data)}}}else{if(Q=x.mipmaps,oe&&Te){Q.length>0&&be++;let ce=_e(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,nt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(xe){oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe[ce].width,Fe[ce].height,Ve,ze,Fe[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Fe[ce].width,Fe[ce].height,0,Ve,ze,Fe[ce].data);for(let Ee=0;Ee<Q.length;Ee++){let Ye=Q[Ee].image[ce].image;oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,Ye.width,Ye.height,Ve,ze,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,nt,Ye.width,Ye.height,0,Ve,ze,Ye.data)}}else{oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve,ze,Fe[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Ve,ze,Fe[ce]);for(let Ee=0;Ee<Q.length;Ee++){let Pe=Q[Ee];oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,Ve,ze,Pe.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,nt,Ve,ze,Pe.image[ce])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),G.__version=P.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function X(w,x,Y,j,P,G){let me=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),ye=b(Y.internalFormat,me,fe,Y.colorSpace),qe=n.get(x),xe=n.get(Y);if(xe.__renderTarget=x,!qe.__hasExternalTextures){let Fe=Math.max(1,x.width>>G),Ge=Math.max(1,x.height>>G);P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?t.texImage3D(P,G,ye,Fe,Ge,x.depth,0,me,fe,null):t.texImage2D(P,G,ye,Fe,Ge,0,me,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,P,xe.__webglTexture,0,re(x)):(P===s.TEXTURE_2D||P>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,P,xe.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function D(w,x,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let j=x.depthTexture,P=j&&j.isDepthTexture?j.type:null,G=_(x.stencilBuffer,P),me=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=re(x);Ae(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,G,x.width,x.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,G,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,G,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,w)}else{let j=x.textures;for(let P=0;P<j.length;P++){let G=j[P],me=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),ye=b(G.internalFormat,me,fe,G.colorSpace),qe=re(x);Y&&Ae(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,ye,x.width,x.height):Ae(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,ye,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ye,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),he(x.depthTexture,0);let P=j.__webglTexture,G=re(x);if(x.depthTexture.format===Wi)Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,P,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,P,0);else if(x.depthTexture.format===Ki)Ae(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,P,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function Le(w){let x=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let P=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",P)};j.addEventListener("dispose",P),x.__depthDisposeCallback=P}x.__boundDepthTexture=j}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,w)}else if(Y){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=s.createRenderbuffer(),D(x.__webglDepthbuffer[j],w,!1);else{let P=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,P,s.RENDERBUFFER,G)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),D(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,P=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,P),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,P)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(w,x,Y){let j=n.get(w);x!==void 0&&X(j.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Le(w)}function ge(w){let x=w.texture,Y=n.get(w),j=n.get(x);w.addEventListener("dispose",C);let P=w.textures,G=w.isWebGLCubeRenderTarget===!0,me=P.length>1;if(me||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=x.version,o.memory.textures++),G){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let ye=0;ye<x.mipmaps.length;ye++)Y.__webglFramebuffer[fe][ye]=s.createFramebuffer()}else Y.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(me)for(let fe=0,ye=P.length;fe<ye;fe++){let qe=n.get(P[fe]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Ae(w)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let fe=0;fe<P.length;fe++){let ye=P[fe];Y.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);let qe=r.convert(ye.format,ye.colorSpace),xe=r.convert(ye.type),Fe=b(ye.internalFormat,qe,xe,ye.colorSpace,w.isXRRenderTarget===!0),Ge=re(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Y.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),D(Y.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ae(s.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)X(Y.__webglFramebuffer[fe][ye],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else X(Y.__webglFramebuffer[fe],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,ye=P.length;fe<ye;fe++){let qe=P[fe],xe=n.get(qe);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),ae(s.TEXTURE_2D,qe),X(Y.__webglFramebuffer,w,qe,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(qe)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),ae(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)X(Y.__webglFramebuffer[ye],w,x,s.COLOR_ATTACHMENT0,fe,ye);else X(Y.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,fe,0);m(x)&&f(fe),t.unbindTexture()}w.depthBuffer&&Le(w)}function H(w){let x=w.textures;for(let Y=0,j=x.length;Y<j;Y++){let P=x[Y];if(m(P)){let G=T(w),me=n.get(P).__webglTexture;t.bindTexture(G,me),f(G),t.unbindTexture()}}}let ie=[],A=[];function we(w){if(w.samples>0){if(Ae(w)===!1){let x=w.textures,Y=w.width,j=w.height,P=s.COLOR_BUFFER_BIT,G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(w),fe=x.length>1;if(fe)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(P|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(P|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let qe=n.get(x[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,Y,j,0,0,Y,j,P,s.NEAREST),c===!0&&(ie.length=0,A.length=0,ie.push(s.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ie.push(G),A.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let qe=n.get(x[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function re(w){return Math.min(i.maxSamples,w.samples)}function Ae(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Ue(w,x){let Y=w.colorSpace,j=w.format,P=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Y!==ns&&Y!==$n&&(ht.getTransfer(Y)===gt?(j!==pn||P!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),x}function _e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=te,this.setTexture2D=he,this.setTexture2DArray=$,this.setTexture3D=Se,this.setTextureCube=ne,this.rebindTextures=se,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ae}function h0(s,e){function t(n,i=$n){let r,o=ht.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return s.BYTE;if(n===Vl)return s.SHORT;if(n===Ms)return s.UNSIGNED_SHORT;if(n===ic)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===wi)return s.HALF_FLOAT;if(n===Gl)return s.ALPHA;if(n===Wl)return s.RGB;if(n===pn)return s.RGBA;if(n===Xl)return s.LUMINANCE;if(n===ql)return s.LUMINANCE_ALPHA;if(n===Wi)return s.DEPTH_COMPONENT;if(n===Ki)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===oc)return s.RED_INTEGER;if(n===$l)return s.RG;if(n===ac)return s.RG_INTEGER;if(n===cc)return s.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===vr)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Jo)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===da||n===fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===pa||n===ma||n===ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var La=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$t=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},u0={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`,Da=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new nn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Na=class extends Qn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,v=new Da,m=t.getContextAttributes(),f=null,T=null,b=[],_=[],F=new Ne,R=null,C=new Bt;C.viewport=new Ct;let U=new Bt;U.viewport=new Ct;let S=[C,U],y=new La,N=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=b[I];return V===void 0&&(V=new gs,b[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=b[I];return V===void 0&&(V=new gs,b[I]=V),V.getGripSpace()},this.getHand=function(I){let V=b[I];return V===void 0&&(V=new gs,b[I]=V),V.getHandSpace()};function q(I){let V=_.indexOf(I.inputSource);if(V===-1)return;let X=b[V];X!==void 0&&(X.update(I.inputSource,I.frame,l||o),X.dispatchEvent({type:I.type,data:I.inputSource}))}function ee(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",he);for(let I=0;I<b.length;I++){let V=_[I];V!==null&&(_[I]=null,b[I].disconnect(V))}N=null,te=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,i=null,T=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",he),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(F),i.renderState.layers===void 0){let V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new vn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,X=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?Ki:Wi,X=m.stencil?Ji:xi);let le={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new vn(d.textureWidth,d.textureHeight,{format:pn,type:Nn,depthTexture:new Lr(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function he(I){for(let V=0;V<I.removed.length;V++){let X=I.removed[V],D=_.indexOf(X);D>=0&&(_[D]=null,b[D].disconnect(X))}for(let V=0;V<I.added.length;V++){let X=I.added[V],D=_.indexOf(X);if(D===-1){for(let Le=0;Le<b.length;Le++)if(Le>=_.length){_.push(X),D=Le;break}else if(_[Le]===null){_[Le]=X,D=Le;break}if(D===-1)break}let le=b[D];le&&le.connect(X)}}let $=new z,Se=new z;function ne(I,V,X){$.setFromMatrixPosition(V.matrixWorld),Se.setFromMatrixPosition(X.matrixWorld);let D=$.distanceTo(Se),le=V.projectionMatrix.elements,Le=X.projectionMatrix.elements,se=le[14]/(le[10]-1),ge=le[14]/(le[10]+1),H=(le[9]+1)/le[5],ie=(le[9]-1)/le[5],A=(le[8]-1)/le[0],we=(Le[8]+1)/Le[0],re=se*A,Ae=se*we,ve=D/(-A+we),Ue=ve*-A;if(V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ue),I.translateZ(ve),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),le[10]===-1)I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let _e=se+ve,w=ge+ve,x=re-Ue,Y=Ae+(D-Ue),j=H*ge/w*_e,P=ie*ge/w*_e;I.projectionMatrix.makePerspective(x,Y,j,P,_e,w),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function De(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;let V=I.near,X=I.far;v.texture!==null&&(v.depthNear>0&&(V=v.depthNear),v.depthFar>0&&(X=v.depthFar)),y.near=U.near=C.near=V,y.far=U.far=C.far=X,(N!==y.near||te!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,te=y.far),C.layers.mask=I.layers.mask|2,U.layers.mask=I.layers.mask|4,y.layers.mask=C.layers.mask|U.layers.mask;let D=I.parent,le=y.cameras;De(y,D);for(let Le=0;Le<le.length;Le++)De(le[Le],D);le.length===2?ne(y,C,U):y.projectionMatrix.copy(C.projectionMatrix),Oe(I,y,D)};function Oe(I,V,X){X===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy(X.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=xa*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(I){c=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ke=null;function ae(I,V){if(u=V.getViewerPose(l||o),g=V,u!==null){let X=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let D=!1;X.length!==y.cameras.length&&(y.cameras.length=0,D=!0);for(let Le=0;Le<X.length;Le++){let se=X[Le],ge=null;if(p!==null)ge=p.getViewport(se);else{let ie=h.getViewSubImage(d,se);ge=ie.viewport,Le===0&&(e.setRenderTargetTextures(T,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(T))}let H=S[Le];H===void 0&&(H=new Bt,H.layers.enable(Le),H.viewport=new Ct,S[Le]=H),H.matrix.fromArray(se.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(se.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(ge.x,ge.y,ge.width,ge.height),Le===0&&(y.matrix.copy(H.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),D===!0&&y.cameras.push(H)}let le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){let Le=h.getDepthInformation(X[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,i.renderState)}}for(let X=0;X<b.length;X++){let D=_[X],le=b[X];D!==null&&le!==void 0&&le.update(D,V,l||o)}ke&&ke(I,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}let de=new eh;de.setAnimationLoop(ae),this.setAnimationLoop=function(I){ke=I},this.dispose=function(){}}},di=new Un,p0=new Et;function m0(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ql(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,b,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Lt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Lt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=e.get(f),b=T.envMap,_=T.envMapRotation;b&&(m.envMap.value=b,di.copy(_),di.x*=-1,di.y*=-1,di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(di)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g0(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let _=b.program;n.uniformBlockBinding(T,_)}function l(T,b){let _=i[T.id];_===void 0&&(g(T),_=u(T),i[T.id]=_,T.addEventListener("dispose",m));let F=b.program;n.updateUBOMapping(T,F);let R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){let b=h();T.__bindingPointIndex=b;let _=s.createBuffer(),F=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,F,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=i[T.id],_=T.uniforms,F=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,C=_.length;R<C;R++){let U=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,y=U.length;S<y;S++){let N=U[S];if(p(N,R,S,F)===!0){let te=N.__offset,q=Array.isArray(N.value)?N.value:[N.value],ee=0;for(let he=0;he<q.length;he++){let $=q[he],Se=v($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,te+ee,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,ee),ee+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,b,_,F){let R=T.value,C=b+"_"+_;if(F[C]===void 0)return typeof R=="number"||typeof R=="boolean"?F[C]=R:F[C]=R.clone(),!0;{let U=F[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(T){let b=T.uniforms,_=0,F=16;for(let C=0,U=b.length;C<U;C++){let S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,N=S.length;y<N;y++){let te=S[y],q=Array.isArray(te.value)?te.value:[te.value];for(let ee=0,he=q.length;ee<he;ee++){let $=q[ee],Se=v($),ne=_%F,De=ne%Se.boundary,Oe=ne+De;_+=De,Oe!==0&&F-Oe<Se.storage&&(_+=F-Oe),te.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=_,_+=Se.storage}}}let R=_%F;return R>0&&(_+=F-R),T.__size=_,T.__cache={},this}function v(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(let T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}var Dr=class{constructor(e={}){let{canvas:t=_u(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Kn,this.toneMappingExposure=1;let _=this,F=!1,R=0,C=0,U=null,S=-1,y=null,N=new Ct,te=new Ct,q=null,ee=new ut(0),he=0,$=t.width,Se=t.height,ne=1,De=null,Oe=null,ke=new Ct(0,0,$,Se),ae=new Ct(0,0,$,Se),de=!1,I=new Ir,V=!1,X=!1,D=new Et,le=new Et,Le=new z,se=new Ct,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},H=!1;function ie(){return U===null?ne:1}let A=n;function we(M,k){return t.getContext(M,k)}try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),A===null){let k="webgl2";if(A=we(k,M),A===null)throw we(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let re,Ae,ve,Ue,_e,w,x,Y,j,P,G,me,fe,ye,qe,xe,Fe,Ge,Ve,ze,nt,oe,Te,L;function be(){re=new Lp(A),re.init(),oe=new h0(A,re),Ae=new Ep(A,re,e,oe),ve=new a0(A,re),Ae.reverseDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),Ue=new Up(A),_e=new $m,w=new l0(A,re,ve,_e,Ae,oe,Ue),x=new Cp(_),Y=new Pp(_),j=new Vu(A),Te=new wp(A,j),P=new Dp(A,j,Ue,Te),G=new Op(A,P,j,Ue),Ve=new Fp(A,Ae,w),xe=new Ap(_e),me=new Ym(_,x,Y,re,Ae,Te,xe),fe=new m0(_,_e),ye=new Jm,qe=new n0(re),Ge=new Sp(_,x,Y,ve,G,p,c),Fe=new r0(_,G,Ae),L=new g0(A,Ue,Ae,ve),ze=new Tp(A,re,Ue),nt=new Np(A,re,Ue),Ue.programs=me.programs,_.capabilities=Ae,_.extensions=re,_.properties=_e,_.renderLists=ye,_.shadowMap=Fe,_.state=ve,_.info=Ue}be();let Q=new Na(_,A);this.xr=Q,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize($,Se,!1))},this.getSize=function(M){return M.set($,Se)},this.setSize=function(M,k,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,Se=k,t.width=Math.floor(M*ne),t.height=Math.floor(k*ne),K===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set($*ne,Se*ne).floor()},this.setDrawingBufferSize=function(M,k,K){$=M,Se=k,ne=K,t.width=Math.floor(M*K),t.height=Math.floor(k*K),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,k,K,J){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,k,K,J),ve.viewport(N.copy(ke).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,k,K,J){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,k,K,J),ve.scissor(te.copy(ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){ve.setScissorTest(de=M)},this.setOpaqueSort=function(M){De=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(M=!0,k=!0,K=!0){let J=0;if(M){let B=!1;if(U!==null){let Ie=U.texture.format;B=Ie===cc||Ie===ac||Ie===oc}if(B){let Ie=U.texture.type,E=Ie===Nn||Ie===xi||Ie===Ms||Ie===Ji||Ie===sc||Ie===rc,O=Ge.getClearColor(),W=Ge.getClearAlpha(),ue=O.r,Re=O.g,pe=O.b;E?(g[0]=ue,g[1]=Re,g[2]=pe,g[3]=W,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=ue,v[1]=Re,v[2]=pe,v[3]=W,A.clearBufferiv(A.COLOR,0,v))}else J|=A.COLOR_BUFFER_BIT}k&&(J|=A.DEPTH_BUFFER_BIT),K&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ye.dispose(),qe.dispose(),_e.dispose(),x.dispose(),Y.dispose(),G.dispose(),Te.dispose(),L.dispose(),me.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",wt),Q.removeEventListener("sessionend",bt),at.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let M=Ue.autoReset,k=Fe.enabled,K=Fe.autoUpdate,J=Fe.needsUpdate,B=Fe.type;be(),Ue.autoReset=M,Fe.enabled=k,Fe.autoUpdate=K,Fe.needsUpdate=J,Fe.type=B}function Pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ye(M){let k=M.target;k.removeEventListener("dispose",Ye),Ke(k)}function Ke(M){vt(M),_e.remove(M)}function vt(M){let k=_e.get(M).programs;k!==void 0&&(k.forEach(function(K){me.releaseProgram(K)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,K,J,B,Ie){k===null&&(k=ge);let E=B.isMesh&&B.matrixWorld.determinant()<0,O=et(M,k,K,J,B);ve.setMaterial(J,E);let W=K.index,ue=1;if(J.wireframe===!0){if(W=P.getWireframeAttribute(K),W===void 0)return;ue=2}let Re=K.drawRange,pe=K.attributes.position,We=Re.start*ue,je=(Re.start+Re.count)*ue;Ie!==null&&(We=Math.max(We,Ie.start*ue),je=Math.min(je,(Ie.start+Ie.count)*ue)),W!==null?(We=Math.max(We,0),je=Math.min(je,W.count)):pe!=null&&(We=Math.max(We,0),je=Math.min(je,pe.count));let Qe=je-We;if(Qe<0||Qe===1/0)return;Te.setup(B,J,O,K,W);let ct,lt=ze;if(W!==null&&(ct=j.get(W),lt=nt,lt.setIndex(ct)),B.isMesh)J.wireframe===!0?(ve.setLineWidth(J.wireframeLinewidth*ie()),lt.setMode(A.LINES)):lt.setMode(A.TRIANGLES);else if(B.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),ve.setLineWidth(Xe*ie()),B.isLineSegments?lt.setMode(A.LINES):B.isLineLoop?lt.setMode(A.LINE_LOOP):lt.setMode(A.LINE_STRIP)}else B.isPoints?lt.setMode(A.POINTS):B.isSprite&&lt.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Xe=B._multiDrawStarts,ot=B._multiDrawCounts,it=B._multiDrawCount,Ft=W?j.get(W).bytesPerElement:1,yn=_e.get(J).currentProgram.getUniforms();for(let zt=0;zt<it;zt++)yn.setValue(A,"_gl_DrawID",zt),lt.render(Xe[zt]/Ft,ot[zt])}else if(B.isInstancedMesh)lt.renderInstances(We,Qe,B.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ot=Math.min(K.instanceCount,Xe);lt.renderInstances(We,Qe,ot)}else lt.render(We,Qe)};function Je(M,k,K){M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=Lt,M.needsUpdate=!0,tt(M,k,K),M.side=jn,M.needsUpdate=!0,tt(M,k,K),M.side=en):tt(M,k,K)}this.compile=function(M,k,K=null){K===null&&(K=M),f=qe.get(K),f.init(k),b.push(f),K.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==K&&M.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let J=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let Ie=B.material;if(Ie)if(Array.isArray(Ie))for(let E=0;E<Ie.length;E++){let O=Ie[E];Je(O,K,B),J.add(O)}else Je(Ie,K,B),J.add(Ie)}),b.pop(),f=null,J},this.compileAsync=function(M,k,K=null){let J=this.compile(M,k,K);return new Promise(B=>{function Ie(){if(J.forEach(function(E){_e.get(E).currentProgram.isReady()&&J.delete(E)}),J.size===0){B(M);return}setTimeout(Ie,10)}re.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ft=null;function yt(M){ft&&ft(M)}function wt(){at.stop()}function bt(){at.start()}let at=new eh;at.setAnimationLoop(yt),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(M){ft=M,Q.setAnimationLoop(M),M===null?at.stop():at.start()},Q.addEventListener("sessionstart",wt),Q.addEventListener("sessionend",bt),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,k,U),f=qe.get(M,b.length),f.init(k),b.push(f),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I.setFromProjectionMatrix(le),X=this.localClippingEnabled,V=xe.init(this.clippingPlanes,X),m=ye.get(M,T.length),m.init(),T.push(m),Q.enabled===!0&&Q.isPresenting===!0){let Ie=_.xr.getDepthSensingMesh();Ie!==null&&pt(Ie,k,-1/0,_.sortObjects)}pt(M,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(De,Oe),H=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,H&&Ge.addToRenderList(m,M),this.info.render.frame++,V===!0&&xe.beginShadows();let K=f.state.shadowsArray;Fe.render(K,M,k),V===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,B=m.transmissive;if(f.setupLights(),k.isArrayCamera){let Ie=k.cameras;if(B.length>0)for(let E=0,O=Ie.length;E<O;E++){let W=Ie[E];Z(J,B,M,W)}H&&Ge.render(M);for(let E=0,O=Ie.length;E<O;E++){let W=Ie[E];Zt(m,M,W,W.viewport)}}else B.length>0&&Z(J,B,M,k),H&&Ge.render(M),Zt(m,M,k);U!==null&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(_,M,k),Te.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],V===!0&&xe.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function pt(M,k,K,J){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||I.intersectsSprite(M)){J&&se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);let E=G.update(M),O=M.material;O.visible&&m.push(M,E,O,K,se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||I.intersectsObject(M))){let E=G.update(M),O=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),se.copy(M.boundingSphere.center)):(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)),se.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(O)){let W=E.groups;for(let ue=0,Re=W.length;ue<Re;ue++){let pe=W[ue],We=O[pe.materialIndex];We&&We.visible&&m.push(M,E,We,K,se.z,pe)}}else O.visible&&m.push(M,E,O,K,se.z,null)}}let Ie=M.children;for(let E=0,O=Ie.length;E<O;E++)pt(Ie[E],k,K,J)}function Zt(M,k,K,J){let B=M.opaque,Ie=M.transmissive,E=M.transparent;f.setupLightsView(K),V===!0&&xe.setGlobalState(_.clippingPlanes,K),J&&ve.viewport(N.copy(J)),B.length>0&&Ce(B,k,K),Ie.length>0&&Ce(Ie,k,K),E.length>0&&Ce(E,k,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Z(M,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new vn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?wi:Nn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Ie=f.state.transmissionRenderTarget[J.id],E=J.viewport||N;Ie.setSize(E.z,E.w);let O=_.getRenderTarget();_.setRenderTarget(Ie),_.getClearColor(ee),he=_.getClearAlpha(),he<1&&_.setClearColor(16777215,.5),_.clear(),H&&Ge.render(K);let W=_.toneMapping;_.toneMapping=Kn;let ue=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),V===!0&&xe.setGlobalState(_.clippingPlanes,J),Ce(M,K,J),w.updateMultisampleRenderTarget(Ie),w.updateRenderTargetMipmap(Ie),re.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let pe=0,We=k.length;pe<We;pe++){let je=k[pe],Qe=je.object,ct=je.geometry,lt=je.material,Xe=je.group;if(lt.side===en&&Qe.layers.test(J.layers)){let ot=lt.side;lt.side=Lt,lt.needsUpdate=!0,Ze(Qe,K,J,ct,lt,Xe),lt.side=ot,lt.needsUpdate=!0,Re=!0}}Re===!0&&(w.updateMultisampleRenderTarget(Ie),w.updateRenderTargetMipmap(Ie))}_.setRenderTarget(O),_.setClearColor(ee,he),ue!==void 0&&(J.viewport=ue),_.toneMapping=W}function Ce(M,k,K){let J=k.isScene===!0?k.overrideMaterial:null;for(let B=0,Ie=M.length;B<Ie;B++){let E=M[B],O=E.object,W=E.geometry,ue=J===null?E.material:J,Re=E.group;O.layers.test(K.layers)&&Ze(O,k,K,W,ue,Re)}}function Ze(M,k,K,J,B,Ie){M.onBeforeRender(_,k,K,J,B,Ie),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(_,k,K,J,M,Ie),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=Lt,B.needsUpdate=!0,_.renderBufferDirect(K,k,J,B,M,Ie),B.side=jn,B.needsUpdate=!0,_.renderBufferDirect(K,k,J,B,M,Ie),B.side=en):_.renderBufferDirect(K,k,J,B,M,Ie),M.onAfterRender(_,k,K,J,B,Ie)}function tt(M,k,K){k.isScene!==!0&&(k=ge);let J=_e.get(M),B=f.state.lights,Ie=f.state.shadowsArray,E=B.state.version,O=me.getParameters(M,B.state,Ie,k,K),W=me.getProgramCacheKey(O),ue=J.programs;J.environment=M.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(M.isMeshStandardMaterial?Y:x).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,ue===void 0&&(M.addEventListener("dispose",Ye),ue=new Map,J.programs=ue);let Re=ue.get(W);if(Re!==void 0){if(J.currentProgram===Re&&J.lightsStateVersion===E)return He(M,O),Re}else O.uniforms=me.getUniforms(M),M.onBeforeCompile(O,_),Re=me.acquireProgram(O,W),ue.set(W,Re),J.uniforms=O.uniforms;let pe=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(pe.clippingPlanes=xe.uniform),He(M,O),J.needsLights=Tt(M),J.lightsStateVersion=E,J.needsLights&&(pe.ambientLightColor.value=B.state.ambient,pe.lightProbe.value=B.state.probe,pe.directionalLights.value=B.state.directional,pe.directionalLightShadows.value=B.state.directionalShadow,pe.spotLights.value=B.state.spot,pe.spotLightShadows.value=B.state.spotShadow,pe.rectAreaLights.value=B.state.rectArea,pe.ltc_1.value=B.state.rectAreaLTC1,pe.ltc_2.value=B.state.rectAreaLTC2,pe.pointLights.value=B.state.point,pe.pointLightShadows.value=B.state.pointShadow,pe.hemisphereLights.value=B.state.hemi,pe.directionalShadowMap.value=B.state.directionalShadowMap,pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,pe.spotShadowMap.value=B.state.spotShadowMap,pe.spotLightMatrix.value=B.state.spotLightMatrix,pe.spotLightMap.value=B.state.spotLightMap,pe.pointShadowMap.value=B.state.pointShadowMap,pe.pointShadowMatrix.value=B.state.pointShadowMatrix),J.currentProgram=Re,J.uniformsList=null,Re}function $e(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=qi.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function He(M,k){let K=_e.get(M);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function et(M,k,K,J,B){k.isScene!==!0&&(k=ge),w.resetTextureUnits();let Ie=k.fog,E=J.isMeshStandardMaterial?k.environment:null,O=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ns,W=(J.isMeshStandardMaterial?Y:x).get(J.envMap||E),ue=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Re=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),pe=!!K.morphAttributes.position,We=!!K.morphAttributes.normal,je=!!K.morphAttributes.color,Qe=Kn;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qe=_.toneMapping);let ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,lt=ct!==void 0?ct.length:0,Xe=_e.get(J),ot=f.state.lights;if(V===!0&&(X===!0||M!==y)){let an=M===y&&J.id===S;xe.setState(J,M,an)}let it=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ot.state.version||Xe.outputColorSpace!==O||B.isBatchedMesh&&Xe.batching===!1||!B.isBatchedMesh&&Xe.batching===!0||B.isBatchedMesh&&Xe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Xe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Xe.instancing===!1||!B.isInstancedMesh&&Xe.instancing===!0||B.isSkinnedMesh&&Xe.skinning===!1||!B.isSkinnedMesh&&Xe.skinning===!0||B.isInstancedMesh&&Xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Xe.instancingMorph===!1&&B.morphTexture!==null||Xe.envMap!==W||J.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==xe.numPlanes||Xe.numIntersection!==xe.numIntersection)||Xe.vertexAlphas!==ue||Xe.vertexTangents!==Re||Xe.morphTargets!==pe||Xe.morphNormals!==We||Xe.morphColors!==je||Xe.toneMapping!==Qe||Xe.morphTargetsCount!==lt)&&(it=!0):(it=!0,Xe.__version=J.version);let Ft=Xe.currentProgram;it===!0&&(Ft=tt(J,k,B));let yn=!1,zt=!1,zn=!1,_t=Ft.getUniforms(),Mn=Xe.uniforms;if(ve.useProgram(Ft.program)&&(yn=!0,zt=!0,zn=!0),J.id!==S&&(S=J.id,zt=!0),yn||y!==M){ve.buffers.depth.getReversed()?(D.copy(M.projectionMatrix),Mu(D),bu(D),_t.setValue(A,"projectionMatrix",D)):_t.setValue(A,"projectionMatrix",M.projectionMatrix),_t.setValue(A,"viewMatrix",M.matrixWorldInverse);let kn=_t.map.cameraPosition;kn!==void 0&&kn.setValue(A,Le.setFromMatrixPosition(M.matrixWorld)),Ae.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_t.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,zt=!0,zn=!0)}if(B.isSkinnedMesh){_t.setOptional(A,B,"bindMatrix"),_t.setOptional(A,B,"bindMatrixInverse");let an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_t.setValue(A,"boneTexture",an.boneTexture,w))}B.isBatchedMesh&&(_t.setOptional(A,B,"batchingTexture"),_t.setValue(A,"batchingTexture",B._matricesTexture,w),_t.setOptional(A,B,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",B._indirectTexture,w),_t.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",B._colorsTexture,w));let as=K.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Ve.update(B,K,Ft),(zt||Xe.receiveShadow!==B.receiveShadow)&&(Xe.receiveShadow=B.receiveShadow,_t.setValue(A,"receiveShadow",B.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=W,Mn.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),zt&&(_t.setValue(A,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&xt(Mn,zn),Ie&&J.fog===!0&&fe.refreshFogUniforms(Mn,Ie),fe.refreshMaterialUniforms(Mn,J,ne,Se,f.state.transmissionRenderTarget[M.id]),qi.upload(A,$e(Xe),Mn,w)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qi.upload(A,$e(Xe),Mn,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_t.setValue(A,"center",B.center),_t.setValue(A,"modelViewMatrix",B.modelViewMatrix),_t.setValue(A,"normalMatrix",B.normalMatrix),_t.setValue(A,"modelMatrix",B.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let an=J.uniformsGroups;for(let kn=0,Vn=an.length;kn<Vn;kn++){let yc=an[kn];L.update(yc,Ft),L.bind(yc,Ft)}}return Ft}function xt(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Tt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,k,K){_e.get(M.texture).__webglTexture=k,_e.get(M.depthTexture).__webglTexture=K;let J=_e.get(M);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){let K=_e.get(M);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,K=0){U=M,R=k,C=K;let J=!0,B=null,Ie=!1,E=!1;if(M){let W=_e.get(M);if(W.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(W.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(W.__hasExternalTextures)w.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let pe=M.depthTexture;if(W.__boundDepthTexture!==pe){if(pe!==null&&_e.has(pe)&&(M.width!==pe.image.width||M.height!==pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let ue=M.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(E=!0);let Re=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?B=Re[k][K]:B=Re[k],Ie=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?B=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[K]:B=Re,N.copy(M.viewport),te.copy(M.scissor),q=M.scissorTest}else N.copy(ke).multiplyScalar(ne).floor(),te.copy(ae).multiplyScalar(ne).floor(),q=de;if(ve.bindFramebuffer(A.FRAMEBUFFER,B)&&J&&ve.drawBuffers(M,B),ve.viewport(N),ve.scissor(te),ve.setScissorTest(q),Ie){let W=_e.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,W.__webglTexture,K)}else if(E){let W=_e.get(M.texture),ue=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,W.__webglTexture,K||0,ue)}S=-1},this.readRenderTargetPixels=function(M,k,K,J,B,Ie,E){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&E!==void 0&&(O=O[E]),O){ve.bindFramebuffer(A.FRAMEBUFFER,O);try{let W=M.texture,ue=W.format,Re=W.type;if(!Ae.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-J&&K>=0&&K<=M.height-B&&A.readPixels(k,K,J,B,oe.convert(ue),oe.convert(Re),Ie)}finally{let W=U!==null?_e.get(U).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(M,k,K,J,B,Ie,E){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&E!==void 0&&(O=O[E]),O){let W=M.texture,ue=W.format,Re=W.type;if(!Ae.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-J&&K>=0&&K<=M.height-B){ve.bindFramebuffer(A.FRAMEBUFFER,O);let pe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,pe),A.bufferData(A.PIXEL_PACK_BUFFER,Ie.byteLength,A.STREAM_READ),A.readPixels(k,K,J,B,oe.convert(ue),oe.convert(Re),0);let We=U!==null?_e.get(U).__webglFramebuffer:null;ve.bindFramebuffer(A.FRAMEBUFFER,We);let je=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await yu(A,je,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,pe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ie),A.deleteBuffer(pe),A.deleteSync(je),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,K=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);let J=Math.pow(2,-K),B=Math.floor(M.image.width*J),Ie=Math.floor(M.image.height*J),E=k!==null?k.x:0,O=k!==null?k.y:0;w.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,K,0,0,E,O,B,Ie),ve.unbindTexture()},this.copyTextureToTexture=function(M,k,K=null,J=null,B=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,M=arguments[1],k=arguments[2],B=arguments[3]||0,K=null);let Ie,E,O,W,ue,Re,pe,We,je,Qe=M.isCompressedTexture?M.mipmaps[B]:M.image;K!==null?(Ie=K.max.x-K.min.x,E=K.max.y-K.min.y,O=K.isBox3?K.max.z-K.min.z:1,W=K.min.x,ue=K.min.y,Re=K.isBox3?K.min.z:0):(Ie=Qe.width,E=Qe.height,O=Qe.depth||1,W=0,ue=0,Re=0),J!==null?(pe=J.x,We=J.y,je=J.z):(pe=0,We=0,je=0);let ct=oe.convert(k.format),lt=oe.convert(k.type),Xe;k.isData3DTexture?(w.setTexture3D(k,0),Xe=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Xe=A.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Xe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);let ot=A.getParameter(A.UNPACK_ROW_LENGTH),it=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ft=A.getParameter(A.UNPACK_SKIP_PIXELS),yn=A.getParameter(A.UNPACK_SKIP_ROWS),zt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Qe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,W),A.pixelStorei(A.UNPACK_SKIP_ROWS,ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);let zn=M.isDataArrayTexture||M.isData3DTexture,_t=k.isDataArrayTexture||k.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Mn=_e.get(M),as=_e.get(k),an=_e.get(Mn.__renderTarget),kn=_e.get(as.__renderTarget);ve.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Vn=0;Vn<O;Vn++)zn&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,B,Re+Vn),M.isDepthTexture?(_t&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(k).__webglTexture,B,je+Vn),A.blitFramebuffer(W,ue,Ie,E,pe,We,Ie,E,A.DEPTH_BUFFER_BIT,A.NEAREST)):_t?A.copyTexSubImage3D(Xe,B,pe,We,je+Vn,W,ue,Ie,E):A.copyTexSubImage2D(Xe,B,pe,We,je+Vn,W,ue,Ie,E);ve.bindFramebuffer(A.READ_FRAMEBUFFER,null),ve.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else _t?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Xe,B,pe,We,je,Ie,E,O,ct,lt,Qe.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Xe,B,pe,We,je,Ie,E,O,ct,Qe.data):A.texSubImage3D(Xe,B,pe,We,je,Ie,E,O,ct,lt,Qe):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,B,pe,We,Ie,E,ct,lt,Qe.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,B,pe,We,Qe.width,Qe.height,ct,Qe.data):A.texSubImage2D(A.TEXTURE_2D,B,pe,We,Ie,E,ct,lt,Qe);A.pixelStorei(A.UNPACK_ROW_LENGTH,ot),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ft),A.pixelStorei(A.UNPACK_SKIP_ROWS,yn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt),B===0&&k.generateMipmaps&&A.generateMipmap(Xe),ve.unbindTexture()},this.copyTextureToTexture3D=function(M,k,K=null,J=null,B=0){return M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,M=arguments[2],k=arguments[3],B=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,K,J,B)},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){R=0,C=0,U=null,ve.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var ni=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var On=class extends ti{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nr=new z,Ur=new z,Al=new Et,fs=new bs,ir=new yi,Co=new z,Cl=new z,Ua=class extends sn{constructor(e=new Pt,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nr.fromBufferAttribute(t,i-1),Ur.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nr.distanceTo(Ur);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;Al.copy(i).invert(),fs.copy(e.ray).applyMatrix4(Al);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let f=u.getX(v),T=u.getX(v+1),b=sr(this,e,fs,c,f,T);b&&t.push(b)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),f=sr(this,e,fs,c,v,m);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let f=sr(this,e,fs,c,v,v+1);f&&t.push(f)}if(this.isLineLoop){let v=sr(this,e,fs,c,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sr(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Nr.fromBufferAttribute(o,i),Ur.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Ur,Co,Cl)>n)return;Co.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Co);if(!(c<e.near||c>e.far))return{distance:c,point:Cl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Rl=new z,Il=new z,ii=class extends Ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rl.fromBufferAttribute(t,i),Il.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rl.distanceTo(Il);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fa=class extends ti{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pl=new Et,Oa=new bs,rr=new yi,or=new z,Fr=class extends sn{constructor(e=new Pt,t=new Fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Pl.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(Pl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,v=p;g<v;g++){let m=l.getX(g);or.fromBufferAttribute(h,m),Ll(or,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p;g<v;g++)or.fromBufferAttribute(h,g),Ll(or,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ll(s,e,t,n,i,r,o){let a=Oa.distanceSqToPoint(s);if(a<t){let c=new z;Oa.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Or=class extends nn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,p=(o-u)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Ne:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new z,i=[],r=[],o=[],a=new z,c=new Et;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ws=class extends ln{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ne){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ba=class extends ws{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,p*=u,i(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ar=new z,Ro=new hc,Io=new hc,Po=new hc,za=class extends ln{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(ar.subVectors(i[0],i[1]).add(i[0]),l=ar);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ar.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ar),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ro.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),Io.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Po.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Io.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Po.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ro.calc(c),Io.calc(c),Po.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dl(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function v0(s,e){let t=1-s;return t*t*e}function x0(s,e){return 2*(1-s)*s*e}function _0(s,e){return s*s*e}function vs(s,e,t,n){return v0(s,e)+x0(s,t)+_0(s,n)}function y0(s,e){let t=1-s;return t*t*t*e}function M0(s,e){let t=1-s;return 3*t*t*s*e}function b0(s,e){return 3*(1-s)*s*s*e}function S0(s,e){return s*s*s*e}function xs(s,e,t,n,i){return y0(s,e)+M0(s,t)+b0(s,n)+S0(s,i)}var Br=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne,i=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ne){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,i.x,r.x,o.x,a.x),xs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends ln{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,i.x,r.x,o.x,a.x),xs(e,i.y,r.y,o.y,a.y),xs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zr=class extends ln{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends ln{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,i.x,r.x,o.x),vs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends ln{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(e,i.x,r.x,o.x),vs(e,i.y,r.y,o.y),vs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Dl(a,c.x,l.x,u.x,h.x),Dl(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ne().fromArray(i))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:za,CubicBezierCurve:Br,CubicBezierCurve3:ka,EllipseCurve:ws,LineCurve:zr,LineCurve3:Va,QuadraticBezierCurve:kr,QuadraticBezierCurve3:Ha,SplineCurve:Vr}),Wa=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ga[i.type]().fromJSON(i))}return this}},Qi=class extends Wa{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zr(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new kr(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Br(this.currentPoint.clone(),new Ne(e,t),new Ne(n,i),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Vr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new ws(e,t,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ts=class s extends Pt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=kt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new z,d=new Ne,p=new z,g=new z,v=new z,m=0,f=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,f=e[T+1].y-e[T].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[T+1].x-e[T].x,f=e[T+1].y-e[T].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let T=0;T<=t;T++){let b=n+T*u*i,_=Math.sin(b),F=Math.cos(b);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*_,h.y=e[R].y,h.z=e[R].x*F,o.push(h.x,h.y,h.z),d.x=T/t,d.y=R/(e.length-1),a.push(d.x,d.y);let C=c[3*R+0]*_,U=c[3*R+1],S=c[3*R+0]*F;l.push(C,U,S)}}for(let T=0;T<t;T++)for(let b=0;b<e.length-1;b++){let _=b+T*e.length,F=_,R=_+e.length,C=_+e.length+1,U=_+1;r.push(F,R,U),r.push(C,U,R)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.setAttribute("normal",new mt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Es=class s extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new z,u=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let p=n+h/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},si=class s extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,v=[],m=n/2,f=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function T(){let _=new z,F=new z,R=0,C=(t-e)/n;for(let U=0;U<=r;U++){let S=[],y=U/r,N=y*(t-e)+e;for(let te=0;te<=i;te++){let q=te/i,ee=q*c+a,he=Math.sin(ee),$=Math.cos(ee);F.x=N*he,F.y=-y*n+m,F.z=N*$,h.push(F.x,F.y,F.z),_.set(he,C,$).normalize(),d.push(_.x,_.y,_.z),p.push(q,1-y),S.push(g++)}v.push(S)}for(let U=0;U<i;U++)for(let S=0;S<r;S++){let y=v[S][U],N=v[S+1][U],te=v[S+1][U+1],q=v[S][U+1];(e>0||S!==0)&&(u.push(y,N,q),R+=3),(t>0||S!==r-1)&&(u.push(N,te,q),R+=3)}l.addGroup(f,R,0),f+=R}function b(_){let F=g,R=new Ne,C=new z,U=0,S=_===!0?e:t,y=_===!0?1:-1;for(let te=1;te<=i;te++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let N=g;for(let te=0;te<=i;te++){let ee=te/i*c+a,he=Math.cos(ee),$=Math.sin(ee);C.x=S*$,C.y=m*y,C.z=S*he,h.push(C.x,C.y,C.z),d.push(0,y,0),R.x=he*.5+.5,R.y=$*.5*y+.5,p.push(R.x,R.y),g++}for(let te=0;te<i;te++){let q=F+te,ee=N+te;_===!0?u.push(ee,ee+1,q):u.push(ee+1,ee,q),U+=3}l.addGroup(f,U,_===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var cr=new z,lr=new z,Lo=new z,hr=new Zn,es=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(_r*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:f}=hr;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),hr.getNormal(Lo),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){let b=(T+1)%3,_=h[T],F=h[b],R=hr[u[T]],C=hr[u[b]],U=`${_}_${F}`,S=`${F}_${_}`;S in d&&d[S]?(Lo.dot(d[S].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[S]=null):U in d||(d[U]={index0:l[T],index1:l[b],normal:Lo.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:m}=d[g];cr.fromBufferAttribute(a,v),lr.fromBufferAttribute(a,m),p.push(cr.x,cr.y,cr.z),p.push(lr.x,lr.y,lr.z)}this.setAttribute("position",new mt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ri=class extends Qi{constructor(e){super(e),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Qi().fromJSON(i))}return this}},w0={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=rh(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,p;if(n&&(r=R0(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return As(r,o,t,a,c,p,0),o}};function rh(s,e,t,n,i){let r,o;if(i===k0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Nl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nl(r,s[r],s[r+1],o);return o&&$r(o,o.next)&&(Rs(o),o=o.next),o}function Mi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&($r(t,t.next)||St(t.prev,t,t.next)===0)){if(Rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(s,e,t,n,i,r,o){if(!s)return;!o&&r&&N0(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?E0(s,n,i,r):T0(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Rs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=A0(Mi(s),e,t),As(s,e,t,n,i,r,2)):o===2&&C0(s,e,t,n,i,r):As(Mi(s),e,t,n,i,r,1);break}}}function T0(s){let e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Hi(i,a,r,c,o,l,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E0(s,e,t,n){let i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,f=Xa(p,g,e,t,n),T=Xa(v,m,e,t,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=f&&_&&_.z<=T;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Hi(a,u,c,h,l,d,b.x,b.y)&&St(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Hi(a,u,c,h,l,d,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Hi(a,u,c,h,l,d,b.x,b.y)&&St(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=T;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Hi(a,u,c,h,l,d,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function A0(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!$r(i,r)&&oh(i,n,n.next,r)&&Cs(i,r)&&Cs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Rs(n),Rs(n.next),n=s=r),n=n.next}while(n!==s);return Mi(n)}function C0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O0(o,a)){let c=ah(o,a);o=Mi(o,o.next),c=Mi(c,c.next),As(o,e,t,n,i,r,0),As(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function R0(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=rh(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(F0(l));for(i.sort(I0),r=0;r<i.length;r++)t=P0(i[r],t);return t}function I0(s,e){return s.x-e.x}function P0(s,e){let t=L0(s,e);if(!t)return e;let n=ah(t,s);return Mi(n,n.next),Mi(t,t.next)}function L0(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Hi(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Cs(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&D0(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function D0(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function N0(s,e,t,n){let i=s;do i.z===0&&(i.z=Xa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,U0(i)}function U0(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Xa(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function F0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Hi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function O0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!B0(s,e)&&(Cs(s,e)&&Cs(e,s)&&z0(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||$r(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $r(s,e){return s.x===e.x&&s.y===e.y}function oh(s,e,t,n){let i=dr(St(s,e,t)),r=dr(St(s,e,n)),o=dr(St(t,n,s)),a=dr(St(t,n,e));return!!(i!==r&&o!==a||i===0&&ur(s,t,e)||r===0&&ur(s,n,e)||o===0&&ur(t,s,n)||a===0&&ur(t,e,n))}function ur(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function dr(s){return s>0?1:s<0?-1:0}function B0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&oh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Cs(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function z0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ah(s,e){let t=new qa(s.i,s.x,s.y),n=new qa(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nl(s,e,t,n){let i=new qa(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qa(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var _s=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ul(e),Fl(n,e);let o=e.length;t.forEach(Ul);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Fl(n,t[c]);let a=w0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ul(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Hr=class s extends Pt{constructor(e=new ri([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:V0,b,_=!1,F,R,C,U;f&&(b=f.getSpacedPoints(u),_=!0,d=!1,F=f.computeFrenetFrames(u,!1),R=new z,C=new z,U=new z),d||(m=0,p=0,g=0,v=0);let S=a.extractPoints(l),y=S.shape,N=S.holes;if(!_s.isClockWise(y)){y=y.reverse();for(let H=0,ie=N.length;H<ie;H++){let A=N[H];_s.isClockWise(A)&&(N[H]=A.reverse())}}let q=_s.triangulateShape(y,N),ee=y;for(let H=0,ie=N.length;H<ie;H++){let A=N[H];y=y.concat(A)}function he(H,ie,A){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(ie,A)}let $=y.length,Se=q.length;function ne(H,ie,A){let we,re,Ae,ve=H.x-ie.x,Ue=H.y-ie.y,_e=A.x-H.x,w=A.y-H.y,x=ve*ve+Ue*Ue,Y=ve*w-Ue*_e;if(Math.abs(Y)>Number.EPSILON){let j=Math.sqrt(x),P=Math.sqrt(_e*_e+w*w),G=ie.x-Ue/j,me=ie.y+ve/j,fe=A.x-w/P,ye=A.y+_e/P,qe=((fe-G)*w-(ye-me)*_e)/(ve*w-Ue*_e);we=G+ve*qe-H.x,re=me+Ue*qe-H.y;let xe=we*we+re*re;if(xe<=2)return new Ne(we,re);Ae=Math.sqrt(xe/2)}else{let j=!1;ve>Number.EPSILON?_e>Number.EPSILON&&(j=!0):ve<-Number.EPSILON?_e<-Number.EPSILON&&(j=!0):Math.sign(Ue)===Math.sign(w)&&(j=!0),j?(we=-Ue,re=ve,Ae=Math.sqrt(x)):(we=ve,re=Ue,Ae=Math.sqrt(x/2))}return new Ne(we/Ae,re/Ae)}let De=[];for(let H=0,ie=ee.length,A=ie-1,we=H+1;H<ie;H++,A++,we++)A===ie&&(A=0),we===ie&&(we=0),De[H]=ne(ee[H],ee[A],ee[we]);let Oe=[],ke,ae=De.concat();for(let H=0,ie=N.length;H<ie;H++){let A=N[H];ke=[];for(let we=0,re=A.length,Ae=re-1,ve=we+1;we<re;we++,Ae++,ve++)Ae===re&&(Ae=0),ve===re&&(ve=0),ke[we]=ne(A[we],A[Ae],A[ve]);Oe.push(ke),ae=ae.concat(ke)}for(let H=0;H<m;H++){let ie=H/m,A=p*Math.cos(ie*Math.PI/2),we=g*Math.sin(ie*Math.PI/2)+v;for(let re=0,Ae=ee.length;re<Ae;re++){let ve=he(ee[re],De[re],we);D(ve.x,ve.y,-A)}for(let re=0,Ae=N.length;re<Ae;re++){let ve=N[re];ke=Oe[re];for(let Ue=0,_e=ve.length;Ue<_e;Ue++){let w=he(ve[Ue],ke[Ue],we);D(w.x,w.y,-A)}}}let de=g+v;for(let H=0;H<$;H++){let ie=d?he(y[H],ae[H],de):y[H];_?(C.copy(F.normals[0]).multiplyScalar(ie.x),R.copy(F.binormals[0]).multiplyScalar(ie.y),U.copy(b[0]).add(C).add(R),D(U.x,U.y,U.z)):D(ie.x,ie.y,0)}for(let H=1;H<=u;H++)for(let ie=0;ie<$;ie++){let A=d?he(y[ie],ae[ie],de):y[ie];_?(C.copy(F.normals[H]).multiplyScalar(A.x),R.copy(F.binormals[H]).multiplyScalar(A.y),U.copy(b[H]).add(C).add(R),D(U.x,U.y,U.z)):D(A.x,A.y,h/u*H)}for(let H=m-1;H>=0;H--){let ie=H/m,A=p*Math.cos(ie*Math.PI/2),we=g*Math.sin(ie*Math.PI/2)+v;for(let re=0,Ae=ee.length;re<Ae;re++){let ve=he(ee[re],De[re],we);D(ve.x,ve.y,h+A)}for(let re=0,Ae=N.length;re<Ae;re++){let ve=N[re];ke=Oe[re];for(let Ue=0,_e=ve.length;Ue<_e;Ue++){let w=he(ve[Ue],ke[Ue],we);_?D(w.x,w.y+b[u-1].y,b[u-1].x+A):D(w.x,w.y,h+A)}}}I(),V();function I(){let H=i.length/3;if(d){let ie=0,A=$*ie;for(let we=0;we<Se;we++){let re=q[we];le(re[2]+A,re[1]+A,re[0]+A)}ie=u+m*2,A=$*ie;for(let we=0;we<Se;we++){let re=q[we];le(re[0]+A,re[1]+A,re[2]+A)}}else{for(let ie=0;ie<Se;ie++){let A=q[ie];le(A[2],A[1],A[0])}for(let ie=0;ie<Se;ie++){let A=q[ie];le(A[0]+$*u,A[1]+$*u,A[2]+$*u)}}n.addGroup(H,i.length/3-H,0)}function V(){let H=i.length/3,ie=0;X(ee,ie),ie+=ee.length;for(let A=0,we=N.length;A<we;A++){let re=N[A];X(re,ie),ie+=re.length}n.addGroup(H,i.length/3-H,1)}function X(H,ie){let A=H.length;for(;--A>=0;){let we=A,re=A-1;re<0&&(re=H.length-1);for(let Ae=0,ve=u+m*2;Ae<ve;Ae++){let Ue=$*Ae,_e=$*(Ae+1),w=ie+we+Ue,x=ie+re+Ue,Y=ie+re+_e,j=ie+we+_e;Le(w,x,Y,j)}}}function D(H,ie,A){c.push(H),c.push(ie),c.push(A)}function le(H,ie,A){se(H),se(ie),se(A);let we=i.length/3,re=T.generateTopUV(n,i,we-3,we-2,we-1);ge(re[0]),ge(re[1]),ge(re[2])}function Le(H,ie,A,we){se(H),se(ie),se(we),se(ie),se(A),se(we);let re=i.length/3,Ae=T.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);ge(Ae[0]),ge(Ae[1]),ge(Ae[3]),ge(Ae[1]),ge(Ae[2]),ge(Ae[3])}function se(H){i.push(c[H*3+0]),i.push(c[H*3+1]),i.push(c[H*3+2])}function ge(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return H0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ga[i.type]().fromJSON(i)),new s(n,e.options)}},V0={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Ne(r,o),new Ne(a,c),new Ne(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ne(o,1-c),new Ne(l,1-h),new Ne(d,1-g),new Ne(v,1-f)]:[new Ne(a,1-c),new Ne(u,1-h),new Ne(p,1-g),new Ne(m,1-f)]}};function H0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gr=class s extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new z,d=new z,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){let T=[],b=f/n,_=0;f===0&&o===0?_=.5/t:f===n&&c===Math.PI&&(_=-.5/t);for(let F=0;F<=t;F++){let R=F/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(R+_,1-b),T.push(l++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){let b=u[f][T+1],_=u[f][T],F=u[f+1][T],R=u[f+1][T+1];(f!==0||o>0)&&p.push(b,_,R),(f!==n-1||c<Math.PI)&&p.push(_,F,R)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class s extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new z,h=new z,d=new z;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let v=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,T=(i+1)*p+g;o.push(v,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function fr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function G0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=e,a=2*t-n;break;case Dc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lc:o=e,c=2*n-t;break;case Dc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,T=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let F=0;F!==a;++F)r[F]=f*o[u+F]+T*o[l+F]+b*o[c+F]+_*o[h+F];return r}},$a=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Za=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fr(t,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fr(e.times,Array),values:fr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&G0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=va;var bi=class extends xn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=yr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends xn{};Ja.prototype.ValueTypeName="color";var Ka=class extends xn{};Ka.prototype.ValueTypeName="number";var ja=class extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)ei.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wr=class extends xn{InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends xn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=yr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends xn{};Qa.prototype.ValueTypeName="vector";var ec=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},W0=new ec,tc=class{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var uc="\\[\\]\\.:\\/",X0=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",q0="[^"+uc.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",dc),$0=/(WCOD+)?/.source.replace("WCOD",q0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),K0=new RegExp("^"+Y0+$0+Z0+J0+"$"),j0=["material","materials","bones","map"],nc=class{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){let t=K0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);j0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=nc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function ch(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),c={},l={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let T=0,b=a.length;T<b;T++){let _=a[T],F=s.attributes[_];c[_]=new F.constructor(new F.array.constructor(F.count*F.itemSize),F.itemSize,F.normalized);let R=s.morphAttributes[_];R&&(l[_]||(l[_]=[]),R.forEach((C,U)=>{let S=new C.array.constructor(C.count*C.itemSize);l[_][U]=new C.constructor(S,C.itemSize,C.normalized)}))}let p=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=p*v;for(let T=0;T<r;T++){let b=n?n.getX(T):T,_="";for(let F=0,R=a.length;F<R;F++){let C=a[F],U=s.getAttribute(C),S=U.itemSize;for(let y=0;y<S;y++)_+=`${~~(U[h[y]](b)*v+m)},`}if(_ in t)u.push(t[_]);else{for(let F=0,R=a.length;F<R;F++){let C=a[F],U=s.getAttribute(C),S=s.morphAttributes[C],y=U.itemSize,N=c[C],te=l[C];for(let q=0;q<y;q++){let ee=h[q],he=d[q];if(N[he](o,U[ee](b)),S)for(let $=0,Se=S.length;$<Se;$++)te[$][he](o,S[$][ee](b))}}t[_]=o,u.push(o),o++}}let f=s.clone();for(let T in s.attributes){let b=c[T];if(f.setAttribute(T,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),T in l)for(let _=0;_<l[T].length;_++){let F=l[T][_];f.morphAttributes[T][_]=new F.constructor(F.array.slice(0,o*F.itemSize),F.itemSize,F.normalized)}}return f.setIndex(u),f}var fc=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4,Q0=s=>s<=.0031308?12.92*s:1.055*s**(1/2.4)-.055;function pc(s){let e=parseInt(String(s).slice(1,7),16),t=fc((e>>16&255)/255),n=fc((e>>8&255)/255),i=fc((e&255)/255),r=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*i),o=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*i),a=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*i),c=.2104542553*r+.793617785*o-.0040720468*a,l=1.9779984951*r-2.428592205*o+.4505937099*a,u=.0259040371*r+.7827717662*o-.808675766*a;return[c,Math.hypot(l,u),Math.atan2(u,l)]}function mc(s,e,t){let n=e*Math.cos(t),i=e*Math.sin(t),r=(s+.3963377774*n+.2158037573*i)**3,o=(s-.1055613458*n-.0638541728*i)**3,a=(s-.0894841775*n-1.291485548*i)**3;return[4.0767416621*r-3.3077115913*o+.2309699292*a,-1.2684380046*r+2.6097574011*o-.3413193965*a,-.0041960863*r-.7034186147*o+1.707614701*a]}var eg=.35,lh=s=>s.every(e=>e>=-1e-4&&e<=1+1e-4);function tg(s,e,t){let n=mc(s,e,t);if(!lh(n)){let i=0,r=e;for(let o=0;o<24;o++){let a=(i+r)/2;lh(mc(s,a,t))?i=a:r=a}n=mc(s,i,t)}return`#${n.map(i=>Math.round(Math.min(1,Math.max(0,Q0(Math.min(1,Math.max(0,i)))))*255).toString(16).padStart(2,"0")).join("")}`}function rs(s){let e={};for(let n of["accent","marking"]){let i=bc[n],r=s.palette[n];e[n]=i.toLowerCase()===String(r).toLowerCase()?null:[pc(i),pc(r)]}let t=new Map;return(n,i="marking")=>{let r=e[i];if(!r)return n;let o=`${i}${n}`;if(t.has(o))return t.get(o);let[[a,c,l],[u,h,d]]=r,[p,g,v]=pc(n),m=p<=a?p*u/a:u+(p-a)*(1-u)/(1-a),f=Math.atan2(Math.sin(v-l),Math.cos(v-l)),T=tg(m,g*(h/c),d+f*eg);return t.set(o,T),T}}var rn=1600,_n=1e3,on='"EVA Mincho","Noto Serif CJK JP","Hiragino Mincho ProN","Yu Mincho",serif',ng='"EVA Condensed","Barlow Condensed","Arial Narrow",sans-serif',Ti=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Is=s=>1-Math.pow(1-Ti(s),3),gc=[{at:6.25,end:6.95,kind:"title",ja:"\u7B2C\u4E00\u6B21\u63A5\u7D9A",en:"PRIMARY CONTACT"},{at:12.9,end:13.45,kind:"title",ja:"\u4E3B\u96FB\u6E90\u63A5\u7D9A",en:"MAIN POWER"},{at:13.45,end:14.3,kind:"power"},{at:14.3,end:15.55,kind:"lines"},{at:15.55,end:16.1,kind:"title",ja:"\u7B2C\u4E8C\u6B21\u63A5\u7D9A",en:"SECONDARY CONTACT"},{at:16.1,end:17.4,kind:"neural"},{at:17.4,end:18.7,kind:"brain"},{at:19.25,end:19.85,kind:"title",ja:"\u53CC\u65B9\u5411\u56DE\u7DDA",en:"BIDIRECTIONAL CIRCUIT",vertical:"\u958B\u653E"},{at:19.85,end:20.6,kind:"magi"}];function vc(s){for(let e of gc)if(s>=e.at&&s<e.end)return e;return null}var xc=[{at:4.5,end:5.8,kind:"xray"},{at:20.6,end:1/0,kind:"helix"}];function _c(s){for(let e of xc)if(s>=e.at&&s<e.end)return e;return null}function hh(s,e){let t=rs(e),n={bg:"#040405",green:"#5cf2a0",greenDim:"#1d5a3c",orange:t("#ff7a1a"),orangeDim:e.palette.markingDim,hot:e.palette.markingHot,amber:t("#f2a65a"),pointer:t("#ff5a1a"),well:t("#2a1206"),wellDeep:t("#1a0d05"),wellMagi:t("#1a0b05"),red:"#e8261c",scope:t("#e8261c","accent"),white:"#f4efe6"};n.grid=`${n.orange}18`;let i=s.getContext("2d"),r=1,o=1,a=1,c=null,l=de=>{let I=Math.sin(de*127.1+311.7)*43758.5453;return I-Math.floor(I)};function u(de,I){a=Math.min(2,window.devicePixelRatio||1),r=Math.max(1,de),o=Math.max(1,I),s.width=Math.round(r*a),s.height=Math.round(o*a)}function h(de,I,V,{font:X=ng,size:D=20,color:le=n.orange,align:Le="left",weight:se=600,sx:ge=1,spacing:H=0,glow:ie=0,base:A="alphabetic"}={}){i.save(),i.translate(I,V),i.scale(ge,1),i.font=`${se} ${D}px ${X}`,i.fillStyle=le,i.textAlign=Le,i.textBaseline=A,"letterSpacing"in i&&(i.letterSpacing=`${H}px`),ie&&(i.shadowColor=le,i.shadowBlur=ie),i.fillText(de,0,0),i.restore()}function d(de,I,V,X,D=n.orange,le=1.5){i.strokeStyle=D,i.lineWidth=le,i.strokeRect(de+.5,I+.5,V,X)}function p(de,I,V,X,D){i.fillStyle=D,i.fillRect(de,I,V,X)}function g(de,I,V,X,D=18,le=n.orange){i.strokeStyle=le,i.lineWidth=2,i.beginPath(),i.moveTo(de,I+D),i.lineTo(de,I),i.lineTo(de+D,I),i.moveTo(de+V-D,I),i.lineTo(de+V,I),i.lineTo(de+V,I+D),i.moveTo(de+V,I+X-D),i.lineTo(de+V,I+X),i.lineTo(de+V-D,I+X),i.moveTo(de+D,I+X),i.lineTo(de,I+X),i.lineTo(de,I+X-D),i.stroke()}function v(de,I,V,X,D,{color:le=n.orange,sub:Le,lit:se=!1}={}){se&&p(de,I,V,X,le),d(de,I,V,X,le,1.5),h(D,de+12,I+X/2+(Le?-2:7),{size:20,color:se?n.bg:le,spacing:1.5}),Le&&h(Le,de+12,I+X/2+18,{size:13,color:se?n.bg:le,spacing:1.2,weight:500})}function m(de,I,V){i.strokeStyle=n.grid,i.lineWidth=1,i.beginPath();for(let D=0;D<=rn;D+=50)i.moveTo(D,0),i.lineTo(D,_n);for(let D=0;D<=_n;D+=50)i.moveTo(0,D),i.lineTo(rn,D);i.stroke(),g(28,28,rn-56,_n-56,30),h(V,48,66,{size:18,spacing:3}),h(`EVA-${e.id}  \xB7  ${e.pilotRole}`,rn-48,66,{size:18,spacing:3,align:"right"});let X=(de.at+I).toFixed(2).padStart(6,"0");h(`T+${X}`,rn-48,_n-44,{size:16,spacing:2,align:"right",color:n.orange}),h("LIVE",48,_n-44,{size:16,spacing:3,color:Math.sin(I*14)>0?n.red:n.orangeDim})}function f(de,I){let V=de.ja.length>4?170:190;if(h(de.ja,rn/2,_n/2+40,{font:on,size:V,weight:900,color:n.white,align:"center",sx:.78,spacing:6}),de.vertical){let X=rn/2+de.ja.length*V*.78/2+40;[...de.vertical].forEach((D,le)=>h(D,X,_n/2-60+le*110,{font:on,size:96,weight:900,color:n.white,sx:.84}))}h(de.en,rn/2,_n/2+120,{size:26,color:"#bdb6aa",align:"center",spacing:10,weight:500}),I<.08&&p(0,0,rn,_n,"#ffffff10")}function T(de,I){m(de,I,"MONITOR 07 \xB7 POWER DISTRIBUTION"),h("\u4E3B\u96FB\u6E90\u4F9B\u7D66\u30B7\u30B9\u30C6\u30E0",80,170,{font:on,size:54,weight:900,color:n.orange,sx:.86}),h("MAIN POWER SUPPLY SYSTEM",82,204,{size:18,spacing:4});let V=I>.25;v(80,240,230,74,"\u5916\u90E8 EXTERNAL",{lit:V&&Math.sin(I*30)>-.6,color:n.green,sub:"UMBILICAL CABLE"}),v(330,240,230,74,"\u5185\u90E8 INTERNAL",{sub:"STANDBY \xB7 5:00"});let X=18;for(let se=0;se<X;se++){let H=220*Is((I-.15-se*.03)/.5)*(.55+.45*l(se+3)),ie=se>14?n.red:se>11?n.orange:n.green;p(84+se*26,600-H,18,H,ie)}d(76,370,484,236),h("VOLTAGE",84,630,{size:16,spacing:3}),h(`${(Is(I/1.2)*1.21).toFixed(2)} GV`,556,630,{size:16,spacing:2,align:"right",color:n.green}),h("\u5168\u56DE\u8DEF\u52D5\u529B\u4F1D\u9054",660,170,{font:on,size:54,weight:900,color:n.orange,sx:.86}),h("POWER TRANSFER TO ALL CIRCUITS",662,204,{size:18,spacing:4});let D=8,le=5;for(let se=0;se<le;se++)for(let ge=0;ge<D;ge++){let H=se*D+ge,ie=660+ge*108,A=240+se*70,we=I>.2+H*.028;we&&p(ie,A,96,56,n.greenDim),d(ie,A,96,56,we?n.green:n.orangeDim),h(`${String.fromCharCode(65+se)}-${String(ge+1).padStart(2,"0")}`,ie+10,A+24,{size:16,color:we?n.green:n.orangeDim,spacing:1}),h(we?"LIVE":"----",ie+10,A+46,{size:14,color:we?n.green:n.orangeDim,spacing:2,weight:500})}let Le=Ti((I-.2)/1.15);d(660,620,852,34),p(664,624,844*Le,26,Le>=1?n.green:n.orange),h(`TRANSFER ${Math.round(Le*100)}%`,660,690,{size:20,spacing:3,color:Le>=1?n.green:n.orange}),h("UNIT-"+e.id+" \xB7 PRIMARY CIRCUIT",1512,690,{size:16,spacing:3,align:"right"})}function b(de,I,V,X,D,le,{tab:Le=n.orange,label:se,labelColor:ge="#052a1c",alpha:H=1}={}){if(i.globalAlpha=H,i.beginPath(),i.moveTo(de,I),i.lineTo(de+V,I-D),i.lineTo(de+V,I-D+X),i.lineTo(de,I+X),i.closePath(),i.fillStyle=le,i.fill(),Le){let ie=V*.13,A=D*(ie/V),we=D>0?de:de+V-ie,re=D>0?I:I-D+A;i.beginPath(),i.moveTo(we,re),i.lineTo(we+ie,re-A),i.lineTo(we+ie,re-A+X*.32),i.lineTo(we,re+X*.32),i.closePath(),i.fillStyle=Le,i.fill()}se&&(i.save(),i.translate(de+V/2,I-D/2+X/2),i.rotate(-Math.atan2(D,V)),h(se,0,9,{size:30,weight:800,color:ge,align:"center",spacing:2}),i.restore()),i.globalAlpha=1}function _(de,I){let V=-I*150,X=150,D=9,le=(ge,H)=>I>.08+H*.07+ge*.035;i.save(),i.translate(-40,V+40),i.shadowBlur=0,i.strokeStyle=n.orange,i.lineWidth=3,i.beginPath();for(let ge of[300,590,1010,1325])i.moveTo(ge,-200),i.lineTo(ge,D*X+300);for(let ge=0;ge<D;ge++){let H=ge*X+40;i.moveTo(300,H),i.lineTo(360,H),i.moveTo(590,H),i.lineTo(650,H),i.moveTo(870,H+10),i.lineTo(960,H+10),i.moveTo(1240,H-30),i.lineTo(1325,H-30)}i.stroke(),i.shadowColor=n.green,i.shadowBlur=16;for(let ge=0;ge<D;ge++){let H=ge*X;b(40,H+110,250,70,115,le(0,ge)?n.green:n.greenDim),b(370,H+110,210,66,95,le(1,ge)?n.green:n.greenDim),b(660,H+110,200,66,95,le(2,ge)?n.green:n.greenDim,{label:ge===1||ge===2?"SYNC":void 0}),b(1030,H+15,200,66,-95,le(3,ge)?n.green:n.greenDim,{label:ge===1||ge===2?"SYNC":void 0});let ie=I>.55+ge*.06;i.shadowColor=ie?n.green:n.red,b(1345,H+15,230,66,-105,ie?n.green:n.red,{label:ge>5?"SYNC":void 0,labelColor:ie?"#052a1c":"#3a0503"}),i.shadowColor=n.green}i.shadowBlur=0;for(let ge=0;ge<D;ge++){let H=ge*X+50,ie=133+ge;h(`A0${ie}`,314,H-16,{size:34,weight:600,sx:.8}),h((ge+11).toString(2).padStart(5,"0"),604,H-16,{size:34,weight:600,sx:.8}),h(`MT-0${1353+ge}`,876,H+2,{size:34,weight:600,sx:.8}),h(`B${24+ge}`,1250,H-40,{size:30,weight:600,sx:.8}),h(`MT-${2353+ge}`,1590,H-40,{size:30,weight:600,sx:.8,align:"right"})}let Le=Ti((I-.55)/.06,-.5,D)*X+40;i.save(),i.translate(1300,Le),i.rotate(-.42),p(-150,-26,300,52,"#1a5a40"),d(-150,-26,300,52,n.green,2),h("BORDER-LINE",0,12,{size:30,weight:800,color:n.orange,align:"center",spacing:3}),i.restore(),h("ABSOLUTE-L",1180,Le-60,{size:22,spacing:2}),h(`GTGC0100${(11010+Math.floor(I*9)).toString()}`,880,D*X-30,{size:34,sx:.8}),i.restore(),p(40,40,520,104,"#000000d0"),d(40,40,520,104),h("CIRCUIT 0001 \u2014 1405",60,84,{size:30,spacing:4,weight:700});let se=Math.min(1405,Math.round(Is(I/(de.end-de.at-.15))*1405));h(`OPEN ${String(se).padStart(4,"0")} / 1405`,60,126,{size:26,spacing:3,color:se>=1405?n.green:n.orange}),h(se>=1405?"\u56DE\u7DDA \u5168\u958B":"\u56DE\u7DDA \u958B\u653E\u4E2D",540,126,{font:on,size:40,weight:900,sx:.86,align:"right",color:se>=1405?n.green:n.orange})}function F(de,I,V,X=30){p(de,I-X+2,4,X+6,n.orange),h(V,de+18,I,{size:X,weight:700,color:n.amber,spacing:.5,glow:10})}function R(de,I){F(90,110,`Monitored Subject : EVA-${e.id} Entry Plug`,36);let V=Ti((I+.1)/1.3);F(860,900,"Status : Verifying Link-up System",30),F(860,944,`Plug Depth ${(3.2+V*1.6).toFixed(2)} m  \xB7  Insertion Angle ${(V*90).toFixed(1)}\xB0`,26),i.strokeStyle=n.amber,i.lineWidth=2,i.beginPath();for(let D=0;D<=40;D++){let le=200+D*16;i.moveTo(60,le),i.lineTo(D%5===0?92:76,le)}i.stroke();let X=200+V*640;i.fillStyle=n.red,i.beginPath(),i.moveTo(100,X),i.lineTo(122,X-10),i.lineTo(122,X+10),i.closePath(),i.fill()}function C(de,I,{sync:V=0,confirmed:X=!1}={}){let D=n.scope;for(let se=0;se<96;se++){let ge=12+se*16.5,H=["#e8261c","#36d45a","#2f5bff","#e8261c"][se%4];i.fillStyle=H,i.globalAlpha=.7,i.fillRect(ge,48,3,se%3===0?40:26)}i.globalAlpha=1,i.strokeStyle=D,i.lineWidth=2,i.beginPath(),i.moveTo(0,112),i.lineTo(rn,112),i.moveTo(0,880),i.lineTo(rn,880),i.moveTo(150,100),i.lineTo(150,905),i.moveTo(175,100),i.lineTo(175,905),i.stroke();for(let se=-6;se<=6;se++){let ge=490-se*60;i.beginPath(),i.moveTo(140,ge),i.lineTo(186,ge),i.stroke(),h(`${se>=0?"+":""}${se.toFixed(1)}`,196,ge+8,{size:20,color:D,weight:600});let H=800+se*118;i.beginPath(),i.moveTo(H,880),i.lineTo(H,900),i.stroke(),h(`${se>=0?"+":""}${se.toFixed(1)}`,H,930,{size:22,color:D,weight:600,align:"center"})}let Le=490-(100-V)/100*300+Math.sin(I*3)*6;d(70,Le-60,120,120,D,3),i.fillStyle=n.pointer,i.beginPath(),i.moveTo(84,Le-12),i.lineTo(104,Le),i.lineTo(84,Le+12),i.closePath(),i.fill(),i.fillRect(104,Le-1.5,70,3),F(230,166,`Monitored Subject : EVA-${e.id} Assigned Pilot`,30),F(230,208,X?"Neurological Link-up : Synchronization Complete":"Verifying Neurological Link-up : Calculating Synchronization Rate",26),p(1160,140,380,200,"#000000c0"),d(1160,140,380,200,`${n.scope}80`,1.5),h("SYNCHRONIZATION RATIO",1520,180,{size:22,spacing:4,align:"right",color:n.amber}),h(`${V.toFixed(1)}%`,1520,280,{size:110,weight:700,align:"right",color:V>=99?n.green:n.hot,glow:18}),h(`HARMONICS \xB1${((100-V)*.12).toFixed(2)}`,1520,320,{size:22,spacing:3,align:"right",color:n.amber})}let U=(()=>{let I=(Z,Ce=5)=>{let Ze=[Z[0]];for(let tt=0;tt<Z.length-1;tt++){let $e=Z[Math.max(0,tt-1)],He=Z[tt],et=Z[tt+1],xt=Z[Math.min(Z.length-1,tt+2)];for(let Tt=1;Tt<=Ce;Tt++){let M=Tt/Ce,k=M*M,K=k*M,J=B=>.5*(2*He[B]+(et[B]-$e[B])*M+(2*$e[B]-5*He[B]+4*et[B]-xt[B])*k+(3*He[B]-$e[B]-3*et[B]+xt[B])*K);Ze.push([J(0),J(1)])}}return Ze},V=(Z,Ce,Ze=!0)=>Ce.forEach(([tt,$e],He)=>He===0&&Ze?Z.moveTo(tt,$e):Z.lineTo(tt,$e)),X=Z=>Z.map(([Ce,Ze])=>[1600-Ce,Ze]),D=(Z,Ce,Ze=5)=>{let tt=I(Ce,Ze);V(Z,tt),V(Z,X(tt))},le=[[890,300,17],[911,356,15],[933,412,12],[955,458,13],[978,504,9.5]],Le=Z=>{let Ce=le[Math.max(0,Z-1)],Ze=le[Math.min(le.length-1,Z+1)],tt=Math.hypot(Ze[0]-Ce[0],Ze[1]-Ce[1]);return[(Ze[1]-Ce[1])/tt,-(Ze[0]-Ce[0])/tt]},se=(Z,Ce)=>{let Ze=Math.min(le.length-2,Math.floor(Z)),tt=Z-Ze,$e=Le(Ze),He=Le(Ze+1),et=le[Ze][0]+(le[Ze+1][0]-le[Ze][0])*tt,xt=le[Ze][1]+(le[Ze+1][1]-le[Ze][1])*tt;return[et+Ce*($e[0]+(He[0]-$e[0])*tt),xt+Ce*($e[1]+(He[1]-$e[1])*tt)]},ge=(Z,Ce)=>se(Z,Ce*le[Z][2]),H=(Z,Ce)=>[978+.439*Z+.898*Ce,504+.898*Z-.439*Ce],ie=[[0,9.5],[10,13],[20,18],[28,22],[31,21],[30,17.5],[24,13],[40,11],[57,10],[61,7.5],[58,5],[45,4.5],[62,4],[65,1.5],[62,-1],[45,-1.5],[60,-2.5],[62,-4.8],[59,-7],[43,-7.5],[51,-8.5],[53,-10.8],[50,-13],[36,-14],[16,-12],[0,-9.5]],A=[[[800,155],[818,158],[832,170],[838,192],[836,214],[829,230]],[[829,230],[819,244],[819,262],[842,274],[868,281],[887,287],[903,298],[912,320],ge(1,1),ge(2,1),ge(3,1),ge(4,1)],ie.map(([Z,Ce])=>H(Z,Ce)),[ge(4,-1),ge(3,-1),ge(2,-1),ge(1,-1),[884,340],[873,331]],[[873,331],[868,352],[862,385],[853,415],[857,437],[869,458],[879,482],[883,505],[880,560],[869,628],[866,660],[870,700],[869,735],[862,772],[861,800]],[[861,800],[866,816],[875,829],[879,837],[866,841],[846,841],[832,838],[835,824],[839,800]],[[839,800],[834,772],[828,722],[830,690],[832,662],[828,628],[818,575],[809,535],[801,508]]],we=[];for(let Z of A){let Ce=I(Z,6);we.length&&Ce.shift(),we.push(...Ce)}let re=new Path2D;V(re,we),V(re,X(we).reverse(),!1),re.closePath();let Ae=new Path2D;for(let Z=152;Z<=846;Z+=4)Ae.moveTo(600,Z),Ae.lineTo(1e3,Z);let ve=new Path2D;D(ve,[[829,230],[818,241],[806,246],[800,247]]),D(ve,[[806,285],[828,287],[856,283],[882,290]]),D(ve,[[806,328],[828,338],[852,337],[866,326]]);for(let Z=0;Z<10;Z++){let Ce=299+Z*9.55;D(ve,[[806,Ce-3],[828,Ce-1],[848,Ce+8],[858-Z*.7,Ce+22]])}D(ve,[[801,372],[818,385],[838,398],[852,404]]),D(ve,[[808,436],[832,434],[854,442],[866,460],[862,476]]),D(ve,[[826,480],[816,494],[803,498]]),V(ve,[[800,288],[800,372]]);for(let Z of[1,-1])ve.moveTo(800+Z*49+8,652),ve.ellipse(800+Z*49,652,8,10,0,0,Math.PI*2),ve.moveTo(800+Z*42+9,488),ve.arc(800+Z*42,488,9,0,Math.PI*2);let Ue=new Path2D;Ue.ellipse(800,186,31,27,0,0,Math.PI*2),V(Ue,[[800,160],[800,211]]),D(Ue,[[804,168],[814,166],[822,174],[818,182]],4),D(Ue,[[806,192],[818,188],[828,194],[824,204]],4),D(Ue,[[806,178],[812,182],[810,190]],4);let _e=[],w=[],x=(Z,Ce,Ze="j",tt=0)=>(_e.push({x:Z,y:Ce,kind:Ze,side:tt,t:1/0}),_e.length-1),Y=(Z,Ce,Ze=[],tt=1,$e=!1)=>{let He=I([[_e[Z].x,_e[Z].y],...Ze,[_e[Ce].x,_e[Ce].y]],4),et=new Path2D;V(et,He);let xt=[0];for(let Tt=1;Tt<He.length;Tt++)xt.push(xt[Tt-1]+Math.hypot(He[Tt][0]-He[Tt-1][0],He[Tt][1]-He[Tt-1][1]));w.push({a:Z,b:Ce,pts:He,cum:xt,len:xt[xt.length-1],path:et,w:tt,brain:$e,t0:0,t1:0})},j={},P={},G=[],me=x(800,494,"s"),fe=me,ye=(Z,Ce,Ze,tt,$e)=>{if(P[Z]=Ce,j[Z]=x(800,Ce,"v"),Y(fe,j[Z],[],2.4),fe=j[Z],!Ze)return;let He=new Path2D,et=800-Ze/2;He.moveTo(et+1.5,Ce-tt/2),He.lineTo(et+Ze-1.5,Ce-tt/2),He.lineTo(et+Ze,Ce-tt/2+1.5),He.lineTo(et+Ze,Ce+tt/2-1.5),He.lineTo(et+Ze-1.5,Ce+tt/2),He.lineTo(et+1.5,Ce+tt/2),He.lineTo(et,Ce+tt/2-1.5),He.lineTo(et,Ce-tt/2+1.5),He.closePath(),He.rect(800-$e,Ce-1.4,$e-Ze/2,2.8),He.rect(800+Ze/2,Ce-1.4,$e-Ze/2,2.8),G.push({path:He,node:j[Z],name:Z})};ye("S2",480),ye("S1",466);for(let Z=5;Z>=1;Z--)ye(`L${Z}`,404+(Z-1)*12,22+(Z-1),9,18+(Z-1)*.6);for(let Z=12;Z>=1;Z--)ye(`T${Z}`,289+(Z-1)*9.545,13+(Z-1)*.6,6.4,13+(Z-1)*.3);for(let Z=7;Z>=1;Z--)ye(`C${Z}`,240+(Z-1)*7,11,4.6,9.5);let qe=new Path2D;V(qe,[[784,459],[816,459],[808,492],[792,492]]),qe.closePath();for(let Z of[468,478,486])for(let Ce of[1,-1])qe.moveTo(800+Ce*7+1.6,Z),qe.arc(800+Ce*7,Z,1.6,0,Math.PI*2);let xe=x(800,228,"b");Y(j.C1,xe,[],2.1);let Fe=x(800,214,"b");Y(xe,Fe,[],1.7,!0);let Ge=x(800,200,"b");Y(Fe,Ge,[],1.6,!0);let Ve={a10:Fe,th:Ge};for(let Z of[1,-1]){let Ce=Z>0?"R":"L",Ze=ot=>800+Z*(ot-800),tt=([ot,it])=>[Ze(ot),it],$e=(ot,it="j")=>x(Ze(ot[0]),ot[1],it,Z),He=(ot,it,Ft=[],yn=1,zt=!1)=>Y(ot,it,Ft.map(tt),yn,zt),et=(ot,it,Ft=.8,yn=!1)=>it.forEach(([zt,zn])=>He(ot,$e(zt,"t"),zn?[zn]:[],Ft,yn)),xt=$e([815,186],"b");He(Ge,xt,[[808,196]],1.3,!0),et(xt,[[[809,166],[813,175]],[[825,170],[822,178]],[[828,200],[824,193]],[[812,206],[814,197]]],1,!0),et(xe,[[[828,222],[813,225]]],.9),He(j.C2,$e([824,240],"t"),[[812,246]],.9),He(j.C3,$e([826,256],"t"),[[814,255]],.9),He(j.C4,$e([830,380],"t"),[[810,270],[818,322]],.8);let Tt=$e([834,289]);for(let ot of["C5","C6","C7","T1"])He(j[ot],Tt,[[816,P[ot]+3]],1.2);let M=$e([880,306]);He(Tt,M,[[858,295]],1.8),et(M,[[[908,312],[897,302]],[se(1.5,11),se(.7,10)]],.9);let k=$e(se(2,7));He(M,k,[se(.6,6),se(1.3,8)],1.2);let K=$e(H(4,9));He(k,K,[se(2.8,7.5),se(3.5,7)],1),et(K,[[H(30,19.5),H(15,14)]],.8);let J=$e(se(2,-1));He(M,J,[se(.8,-1),se(1.4,-1)],1.5);let B=$e(H(2,1));He(J,B,[se(2.8,-1),se(3.5,0)],1.3);let Ie=$e(H(24,3));He(B,Ie,[],1.1),et(Ie,[[H(29,19),H(22,12)],[H(59,7.5),H(42,7)],[H(63,1.5),H(44,2)]]);let E=$e(se(2,-8));He(M,E,[se(.9,-9),se(1.5,-8.5)],1.2);let O=$e(H(3,-6));He(E,O,[se(2.8,-7.5),se(3.5,-6.5)],1.1);let W=$e(H(24,-7));He(O,W,[],1),et(W,[[H(60,-4.8),H(43,-5)],[H(51,-10.8),H(36,-10)]]);let ue=0;for(let ot=0;ot<10;ot++){let it=P[`T${ot+2}`],Ft=$e([848-ot*.5,it+15+ot*.6],"t");ot===4&&(ue=Ft),He(j[`T${ot+2}`],Ft,[[812,it+1],[832,it+5]],.85)}He(j.T12,$e([846,430],"t"),[[816,398],[836,412]],.85);let Re=$e([824,448]);for(let ot of["L1","L2","L3","L4"])He(j[ot],Re,[[812,P[ot]+4]],1.1);et(Re,[[[858,470],[842,454]],[[818,545],[812,490]]],.85);let pe=$e([842,502]);He(Re,pe,[[833,474]],1.4),et(pe,[[[866,578],[857,537]],[[852,604],[847,548]]],.9);let We=$e([838,662]);He(pe,We,[[834,545],[832,605]],1),et(We,[[[840,798],[834,722]]],.9);let je=$e([822,484]);for(let ot of["L5","S1","S2"])He(j[ot],je,[[812,P[ot]+5]],1.3);et(je,[[[862,474],[842,478]]],.85);let Qe=$e([848,628]);He(je,Qe,[[832,508],[840,552],[845,596]],2);let ct=$e([845,794]);He(Qe,ct,[[846,680],[842,740]],1.4);let lt=$e([843,816]);He(ct,lt,[],1.1),et(lt,[[[834,837]],[[845,839]],[[856,838]]]);let Xe=$e([858,790]);He(Qe,Xe,[[858,650],[865,692],[863,742]],1.2),et(Xe,[[[874,834],[867,816]]]),Object.assign(Ve,{[`hemi${Ce}`]:xt,[`ax${Ce}`]:M,[`me${Ce}`]:J,[`mw${Ce}`]:B,[`lp${Ce}`]:Re,[`fem${Ce}`]:pe,[`pop${Ce}`]:Qe,[`ank${Ce}`]:ct,[`per${Ce}`]:Xe,[`ic${Ce}`]:ue})}let ze=.72,nt=.64,oe=_e.map(()=>1/0);oe[me]=0;let Te=0;for(let Z of w){if(Z.brain)continue;let Ce=oe[Z.a]+Z.len;oe[Z.b]=Math.min(oe[Z.b],Ce),Te=Math.max(Te,Ce)}let L=ze/Te;_e[me].t=0;let be=0,Q=0;for(let Z of w)Z.t0=Z.brain?Math.max(nt,_e[Z.a].t):_e[Z.a].t,Z.t1=Z.t0+Z.len*L*(Z.brain?2.4:1),_e[Z.b].t=Math.min(_e[Z.b].t,Z.t1),be=Math.max(be,Z.t1),Q+=Z.len;let ce=new Path2D;for(let Z of w)ce.addPath(Z.path);let Ee=(Z,Ce,Ze)=>({node:Z,label:Ce,x:_e[Z].x+Ze,y:_e[Z].y+3.5,align:Ze<0?"right":"left"}),Pe=[...["C3","C7","T3","T7","T11","L2","L4","S1"].map((Z,Ce)=>Ee(j[Z],Z,Ce%2?26:-26)),Ee(Ve.axR,"N-011",8),Ee(Ve.axL,"N-012",-8),Ee(Ve.meR,"N-014",9),Ee(Ve.meL,"N-015",-9),Ee(Ve.lpR,"N-021",10),Ee(Ve.lpL,"N-022",-10),Ee(Ve.popR,"N-041",10),Ee(Ve.popL,"N-042",-10)],Ye={x:585,y:132,w:430,h:716},Ke=(Z,Ce,Ze,tt,$e=0)=>{let{x:He,y:et}=_e[Z],xt=$e||(He>=800?1:-1),Tt=xt>0?1040:560,M=Math.min(Math.abs(Ce-et),Math.abs(Tt-He)-30),k=new Path2D;return k.moveTo(He,et),k.lineTo(He+xt*M,et+Math.sign(Ce-et)*M),k.lineTo(Tt-xt*6,Ce),{node:Z,lx:Tt,ly:Ce,s:xt,title:Ze,sub:tt,path:k,ax:He,ay:et}},vt=[Ke(Ve.hemiR,168,"CEREBRUM","CORTEX \xB7 N-003"),Ke(Ve.a10,226,"A10 NERVE","LIMBIC \xB7 \u4E2D\u67A2"),Ke(Ve.axR,300,"BRACHIAL PLEXUS","C5\u2013T1 \xB7 N-011"),Ke(Ve.mwR,448,"MEDIAN N.","CARPAL \xB7 N-017"),Ke(Ve.popR,612,"SCIATIC N.","L4\u2013S3 \xB7 N-041"),Ke(Ve.ankR,762,"TIBIAL N.","PLANTAR \xB7 N-044"),Ke(j.C4,236,"CERVICAL","C1\u2013C7 \xB7 \u810A\u9AC4",-1),Ke(Ve.icL,352,"INTERCOSTAL","T2\u2013T12 \xB7 \u672B\u68A2"),Ke(Ve.lpL,448,"LUMBAR PLEXUS","L1\u2013L4 \xB7 N-022"),Ke(Ve.femL,552,"FEMORAL N.","L2\u2013L4 \xB7 N-032"),Ke(Ve.perL,742,"PERONEAL N.","FIBULAR \xB7 N-045")],Je=new Path2D,ft=[],{x:yt,y:wt,w:bt,h:at}=Ye;for(let Z=0;Z<=180;Z+=5){let Ce=838-Z*3.88;if(Ce<wt)break;let Ze=Z%25===0?12:5;Je.moveTo(yt,Ce),Je.lineTo(yt+Ze,Ce),Z%25===0&&ft.push([String(Z),yt+16,Ce+4,"left"])}for(let Z=wt;Z<=wt+at;Z+=10){let Ce=(Z-wt)%50===0?10:4;Je.moveTo(yt+bt,Z),Je.lineTo(yt+bt-Ce,Z)}for(let Z=-210;Z<=210;Z+=10){let Ce=Z%50===0?10:4;Je.moveTo(800+Z,wt),Je.lineTo(800+Z,wt+Ce),Je.moveTo(800+Z,wt+at),Je.lineTo(800+Z,wt+at-Ce*.6),Math.abs(Z)===100&&ft.push([String(Math.abs(Z)),800+Z,wt+24,"center"])}let pt=[[0,800,480],[.2,800,420],[.34,800,300],[.48,978,520],[.6,622,520],[.72,846,800],[.86,800,190],[1.2,800,190]],Zt=[];for(let Z=1;Z<=7;Z++)Zt.push(j[`C${Z}`]);for(let Z=1;Z<=12;Z++)Zt.push(j[`T${Z}`]);for(let Z=1;Z<=5;Z++)Zt.push(j[`L${Z}`]);return Zt.push(j.S1,j.S2),{outline:re,hatch:Ae,bones:ve,brain:Ue,sacrum:qe,verts:G,nodes:_e,edges:w,nerves:ce,tags:Pe,callouts:vt,frame:Ye,ticks:Je,tickText:ft,reticle:pt,index:Zt,tEnd:be,total:Q,LIMB_END:ze,cord:j.C1}})(),S=[0,0],y=[3,26],N=[],te=new Float32Array(U.edges.length*2),q=Array.from({length:10},(de,I)=>`#5cf2a0${Math.round(30-I*3).toString(16).padStart(2,"0")}`);function ee(de,I){m(de,I,"MONITOR 12 \xB7 NERVE CONNECTION");let V=I/(de.end-de.at-.15),X=U,D=X.frame,le=X.nodes,Le=V>=X.tEnd,se=`${n.orange}80`;i.lineWidth=1,i.strokeStyle=`${n.orange}40`,i.strokeRect(D.x+.5,D.y+.5,D.w,D.h),i.strokeStyle=`${n.orange}90`,i.stroke(X.ticks);for(let[P,G,me,fe]of X.tickText)h(P,G,me,{size:11,color:`${n.orange}99`,align:fe,weight:500});g(D.x-6,D.y-6,D.w+12,D.h+12,14,n.orange),h("ANTERIOR \xB7 FRONT VIEW",D.x+40,D.y+46,{size:12,spacing:2,weight:500,color:`${n.orange}b0`}),h("SCALE 1:9.6",D.x+D.w-18,D.y+46,{size:12,spacing:2,weight:500,align:"right",color:`${n.orange}b0`}),h("cm",D.x+16,D.y+D.h-8,{size:11,color:`${n.orange}99`,weight:500}),i.fillStyle=`${n.orange}0e`,i.fill(X.outline),i.save(),i.clip(X.outline),i.strokeStyle=`${n.orange}16`,i.stroke(X.hatch),i.restore(),i.lineCap="round",i.lineJoin="round",i.strokeStyle=`${n.orange}2a`,i.lineWidth=2,i.stroke(X.bones);let ge=V>=le[X.callouts[0].node].t;i.strokeStyle=ge?"#5cf2a050":`${n.orange}30`,i.lineWidth=1,i.stroke(X.brain),Le?(i.save(),i.strokeStyle="#5cf2a0c0",i.shadowColor=n.green,i.shadowBlur=10,i.lineWidth=1.6,i.stroke(X.outline),i.restore()):(i.strokeStyle=`${n.orange}88`,i.lineWidth=1.4,i.stroke(X.outline));let H=V>.005;i.fillStyle=H?"#12402a":n.wellDeep,i.fill(X.sacrum),i.strokeStyle=H?n.green:se,i.stroke(X.sacrum);for(let P of X.verts){let G=V>=le[P.node].t;i.fillStyle=G?"#17503a":n.wellDeep,i.fill(P.path),i.strokeStyle=G?n.green:se,i.stroke(P.path)}i.strokeStyle=`${n.orange}48`,i.lineWidth=1,i.stroke(X.nerves);let ie=0,A=0;for(let P of X.edges){let G=(V-P.t0)/(P.t1-P.t0);if(G<=0)continue;let me=G>=1;if(!me){S[0]=P.len*G,S[1]=P.len+8,i.setLineDash(S);let fe=P.len*G,ye=1;for(;ye<P.cum.length-1&&P.cum[ye]<fe;)ye++;let qe=(fe-P.cum[ye-1])/(P.cum[ye]-P.cum[ye-1]||1);te[A*2]=P.pts[ye-1][0]+(P.pts[ye][0]-P.pts[ye-1][0])*qe,te[A*2+1]=P.pts[ye-1][1]+(P.pts[ye][1]-P.pts[ye-1][1])*qe,A++}ie+=P.len*(me?1:G),i.strokeStyle="#5cf2a02c",i.lineWidth=P.w*2+3,i.stroke(P.path),i.strokeStyle=me&&V-P.t1>.06?n.green:"#d4ffe6",i.lineWidth=P.w,i.stroke(P.path),me||i.setLineDash(N)}i.setLineDash(y),i.lineDashOffset=-I*120,i.strokeStyle="#f2fff8c0";for(let P of X.edges)V<P.t1||P.w<1.05||(i.lineWidth=P.w+.4,i.stroke(P.path));if(i.setLineDash(N),i.lineDashOffset=0,A){i.save(),i.fillStyle="#ffffff",i.shadowColor=n.green,i.shadowBlur=12,i.beginPath();for(let P=0;P<A;P++)i.moveTo(te[P*2]+2.6,te[P*2+1]),i.arc(te[P*2],te[P*2+1],2.6,0,Math.PI*2);i.fill(),i.restore()}for(let P of le){if(P.kind==="v")continue;let G=V-P.t,me=G>=0;if(P.kind==="t"){p(P.x-1.6,P.y-1.6,3.2,3.2,me?n.green:se);continue}let fe=P.kind==="b"?3.4:P.kind==="s"?5:2.8;if(p(P.x-fe,P.y-fe,fe*2,fe*2,me?n.green:n.bg),i.strokeStyle=me?n.green:n.orange,i.lineWidth=1,P.kind==="b"?(i.beginPath(),i.arc(P.x,P.y,fe+2.5,0,Math.PI*2),i.stroke()):i.strokeRect(P.x-fe-2,P.y-fe-2,fe*2+4,fe*2+4),me&&G<.08){let ye=G/.08;i.globalAlpha=1-ye,i.strokeStyle="#ffffff";let qe=fe+3+ye*14;i.strokeRect(P.x-qe,P.y-qe,qe*2,qe*2),i.globalAlpha=1}}for(let P of X.tags){let G=V>=le[P.node].t,me=P.label.length*6.4+6,fe=P.align==="right"?P.x-me+3:P.align==="center"?P.x-me/2:P.x-3;p(fe,P.y-10,me,13,"#040405d0"),h(P.label,P.x,P.y,{size:11,color:G?n.green:n.orange,align:P.align,spacing:.5,weight:600})}for(let P of X.callouts){let G=V>=le[P.node].t,me=G?n.green:n.orange;i.strokeStyle=G?"#5cf2a0b0":`${n.orange}70`,i.lineWidth=1,i.stroke(P.path),p(P.ax-2,P.ay-2,4,4,me);let fe=P.s>0?"left":"right";p((P.s>0,P.lx-4),P.ly-4,8,8,me),h(P.title,P.lx+P.s*10,P.ly+5,{size:16,color:me,align:fe,spacing:1.5}),h(`${P.sub} \xB7 ${G?"LINK":"WAIT"}`,P.lx+P.s*10,P.ly+22,{size:11,color:G?"#5cf2a0b0":`${n.orange}a0`,align:fe,spacing:1.2,weight:500})}let we=D.y+I*.85%1*D.h;for(let P=0;P<q.length;P++){let G=we-(P+1)*4;G>D.y&&p(D.x+1,G,D.w-1,4,q[P])}p(D.x+1,we,D.w-1,1.5,"#9dffd0b0"),h(`SCAN ${String(Math.round((we-D.y)/D.h*999)).padStart(3,"0")}`,D.x+D.w-8,we-4,{size:10,color:"#9dffd0",align:"right",weight:500});let re=X.reticle,Ae=0;for(;Ae<re.length-2&&V>re[Ae+1][0];)Ae++;let ve=Is(Ti((V-re[Ae][0])/(re[Ae+1][0]-re[Ae][0])*2.2)),Ue=re[Ae][1]+(re[Ae+1][1]-re[Ae][1])*ve,_e=re[Ae][2]+(re[Ae+1][2]-re[Ae][2])*ve,w=ve>=1;i.strokeStyle=w?n.green:n.orange,i.lineWidth=1.2,i.beginPath(),i.arc(Ue,_e,22,I*3,I*3+1.1),i.moveTo(Ue+22*Math.cos(I*3+Math.PI),_e+22*Math.sin(I*3+Math.PI)),i.arc(Ue,_e,22,I*3+Math.PI,I*3+Math.PI+1.1),i.moveTo(Ue-34,_e),i.lineTo(Ue-12,_e),i.moveTo(Ue+12,_e),i.lineTo(Ue+34,_e),i.moveTo(Ue,_e-34),i.lineTo(Ue,_e-12),i.moveTo(Ue,_e+12),i.lineTo(Ue,_e+34),i.stroke(),i.strokeRect(Ue-30,_e-30,60,60),h(`X${String(Math.round(Ue)).padStart(4,"0")} Y${String(Math.round(_e)).padStart(4,"0")}`,Ue+34,_e-34,{size:10,color:w?n.green:n.orange,weight:500,spacing:1}),h("\u7B2C\u4E8C\u6B21\u63A5\u7D9A",80,170,{font:on,size:54,weight:900,color:n.orange,sx:.86}),h("SECONDARY CONTACT \xB7 NERVE LINK",82,204,{size:18,spacing:4});for(let P=0;P<14;P++){let G=254+P*42,me=(V-.05-P*.06)/.08,fe=me>0,ye=fe?n.green:se;h(`NERVE ${String(P+1).padStart(3,"0")}`,84,G,{size:19,color:ye,spacing:2});let qe=fe?Math.ceil(12*Ti(me)):0;for(let xe=0;xe<12;xe++)p(196+xe*12,G-15,10,15,xe<qe?n.green:fe?n.greenDim:n.well);h(fe?"\u63A5\u7D9A":"\u5F85\u6A5F",352,G,{font:on,size:19,weight:900,color:fe?n.green:n.orangeDim}),h((.31+l(P+40)*.6).toFixed(2),438,G,{size:12,color:fe?"#5cf2a0a0":`${n.orange}60`,align:"right",weight:500})}h("SPINAL INDEX \xB7 \u810A\u9AC4",1250,146,{size:14,spacing:2}),h("C1\u2014S2",1520,146,{size:14,spacing:2,align:"right"}),X.index.forEach((P,G)=>{let me=V>=le[P].t;p(1250+G*10.4,156,9,20,me?n.green:n.well)}),[["C",0],["T",7],["L",19],["S",24]].forEach(([P,G])=>{p(1250+G*10.4,180,1,8,n.orange),h(P,1254+G*10.4,192,{size:12,color:n.orange,weight:500})});for(let P=0;P<10;P++){let G=214+P*42,me=V>.1+P*.075,fe=me?n.green:n.red;h(`PHASE ${String(P+8).padStart(2,"0")}`,1250,G+26,{size:20,color:fe,spacing:2}),p(1370,G+7,150,26,me?n.green:"#3a0806"),d(1370,G+7,150,26,fe),h(me?"CLEAR":"HOLD",1378,G+26,{size:14,color:me?n.bg:n.red,spacing:2})}let x=ie/X.total*100;h("NEURAL LINK RATE",1250,660,{size:14,spacing:2}),h(`${x.toFixed(1).padStart(5,"0")}%`,1520,712,{size:50,color:x>=100?n.green:n.orange,align:"right",spacing:1,glow:x>=100?12:0}),d(1250,724,270,8,n.orangeDim,1),p(1252,726,266*Ti(x/100),4,x>=100?n.green:n.orange);let Y=V>=le[X.cord].t,j=V>=X.LIMB_END;h("\u4E2D\u67A2 CENTRAL",1250,762,{size:15,spacing:1.5,color:Y?n.green:n.orange}),h(Y?"\u6B63\u5E38":"\u5F85\u6A5F",1520,762,{font:on,size:18,weight:900,align:"right",color:Y?n.green:n.orange}),h("\u672B\u68A2 PERIPHERAL",1250,788,{size:15,spacing:1.5,color:j?n.green:n.orange}),h(j?"\u6B63\u5E38":"\u5F85\u6A5F",1520,788,{font:on,size:18,weight:900,align:"right",color:j?n.green:n.orange}),h(`LINKED ${Math.min(14,Math.max(0,Math.floor((V-.05)/.06)+1))} / 14`,1520,826,{size:22,spacing:3,align:"right",color:n.green})}let he=["AMYGDALA","HIPPOCAMPUS","PARIETAL LOBE","MOTOR CORTEX","SENSORY CORTEX"];function $(de,I){m(de,I,"MONITOR 03 \xB7 A10 NERVE / VITAL"),h("A10 \u795E\u7D4C\u63A5\u7D9A",80,170,{font:on,size:54,weight:900,color:n.orange,sx:.86}),h("A10 NERVE CONNECTION",82,204,{size:18,spacing:4});let V=104;he.forEach((X,D)=>{let le=250+D*V;d(80,le,1060,V-16,n.orangeDim),h(X,96,le+28,{size:18,spacing:3});let Le=Is((I-D*.08)/.5);i.save(),i.beginPath(),i.rect(80,le,1060*Le,V-16),i.clip(),i.strokeStyle=n.green,i.lineWidth=2,i.shadowColor=n.green,i.shadowBlur=8,i.beginPath();let se=le+(V-16)/2+10;for(let H=0;H<=1040;H+=4){let ie=H/1040*6+I*4+D*1.3,A=ie%1,we=Math.sin(ie*9+D)*3;A>.42&&A<.5?we-=(A-.42)*380:A>=.5&&A<.56&&(we+=(.56-A)*300-4);let re=90+H;H===0?i.moveTo(re,se+we):i.lineTo(re,se+we)}i.stroke(),i.restore();let ge=I>.35+D*.12;h(ge?"NORMAL":"SCAN",1124,le+28,{size:18,spacing:3,align:"right",color:ge?n.green:n.orange})}),d(1180,250,340,260,n.green),h("\u7570\u5E38\u306A\u3057",1350,410,{font:on,size:84,weight:900,color:n.green,align:"center",sx:.82,glow:I>.9?18:0}),h("NOMINAL",1350,470,{size:24,spacing:8,align:"center",color:n.green}),h("MENTAL CONTAMINATION",1180,560,{size:18,spacing:3});for(let X=0;X<20;X++){let D=X<12?n.green:X<16?n.orange:n.red;p(1180+X*17,576,13,34,X<3?D:D+"33")}h("CAUTION",1384,636,{size:14,spacing:2,color:n.orange}),h("DANGER",1452,656,{size:14,spacing:2,color:n.red}),h("L.C.L. PURITY  99.9999989%",1180,712,{size:20,spacing:2,color:n.green})}function Se(de,I,V){i.beginPath();for(let X=0;X<6;X++){let D=Math.PI/3*X+Math.PI/6,le=de+V*Math.cos(D),Le=I+V*Math.sin(D);X===0?i.moveTo(le,Le):i.lineTo(le,Le)}i.closePath()}function ne(de,I){m(de,I,"MONITOR 01 \xB7 TRI-COMPUTER CONSENSUS"),h("\u53CC\u65B9\u5411\u56DE\u7DDA \u958B\u653E",80,170,{font:on,size:54,weight:900,color:n.orange,sx:.86}),h("BIDIRECTIONAL CIRCUIT \xB7 OPEN",82,204,{size:18,spacing:4}),[["CASPER \xB7 3",560,560],["BALTHASAR \xB7 2",800,400],["MELCHIOR \xB7 1",1040,560]].forEach(([X,D,le],Le)=>{let se=I>.12+Le*.14;Se(D,le,140),i.fillStyle=se?"#0f3a26":n.wellMagi,i.fill(),i.strokeStyle=se?n.green:n.orange,i.lineWidth=3,i.stroke(),h(X,D,le-24,{size:26,spacing:3,align:"center",color:se?n.green:n.orange}),h(se?"\u627F\u8A8D":"\u5BE9\u8B70\u4E2D",D,le+46,{font:on,size:52,weight:900,align:"center",color:se?n.green:n.orange,sx:.86})}),i.strokeStyle=n.orangeDim,i.lineWidth=2,i.beginPath(),i.moveTo(560,560),i.lineTo(800,400),i.lineTo(1040,560),i.closePath(),i.stroke(),I>.55&&h("\u5168\u4F1A\u4E00\u81F4 \xB7 UNANIMOUS",800,820,{size:30,spacing:6,align:"center",color:n.green,glow:12})}let De={title:f,power:T,lines:_,neural:ee,brain:$,magi:ne},Oe={xray:R,helix:C};function ke(){let de=Math.min(r*a/rn,o*a/_n);return[de,(r*a-rn*de)/2,(o*a-_n*de)/2]}function ae(de,I={}){let V=I.hidden?null:vc(de),X=V||I.hidden?null:_c(de);if(!V&&!X)return c&&(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,s.width,s.height),c=null),null;if(X){c=X,i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,s.width,s.height);let[ie,A,we]=ke();return i.setTransform(ie,0,0,ie,A,we),Oe[X.kind](X,de-X.at,I),"scope"}c=V;let D=de-V.at;i.setTransform(1,0,0,1,0,0),i.fillStyle=V.kind==="title"?"#000":n.bg,i.fillRect(0,0,s.width,s.height);let[le,Le,se]=ke(),ge=D<.07?(l(V.at)-.5)*40*le:0;if(i.setTransform(le,0,0,le,Le+ge,se),De[V.kind](V,D),i.setTransform(1,0,0,1,0,0),V.kind!=="title"){i.fillStyle="#00000038";let ie=Math.max(2,Math.round(3*a));for(let A=0;A<s.height;A+=ie)i.fillRect(0,A,s.width,1)}let H=i.createRadialGradient(s.width/2,s.height/2,s.height*.3,s.width/2,s.height/2,s.height*.85);return H.addColorStop(0,"#00000000"),H.addColorStop(1,"#000000a0"),i.fillStyle=H,i.fillRect(0,0,s.width,s.height),D<.05&&(i.fillStyle="#ffffff22",i.fillRect(0,0,s.width,s.height)),"cut"}return{resize:u,update:ae,dispose(){i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,s.width,s.height)}}}var Ps=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),At=(s,e,t)=>{let n=Ps((t-s)/(e-s));return n*n*(3-2*n)},uh=s=>1-Math.pow(1-Ps(s),3),dh=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ht=(s,e,t)=>s+(e-s)*t,Me={insertEnd:3.3,lockStart:4.4,lockEnd:6,cut:6.6,lights:7,lclStart:8.4,lclEnd:12.4,electric:11.6,electricEnd:12.9,power:13.1,rainbowStart:15,rainbowEnd:19.6,syncStart:20.6,syncStop:25.4},hn=s=>{let e=parseInt(String(s).slice(1),16);return new z((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)};function Zr(s,e,t,n=!1){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new Or(i);return r.anisotropy=4,n&&(r.wrapS=r.wrapT=ys),r}var oi="'EVA Condensed','Barlow Condensed','Arial Narrow',sans-serif";function ig(s,e,t){return Zr(2048,1024,(n,i,r)=>{let o=s.palette.armor;n.fillStyle="#ffffff",n.fillRect(0,0,i,r);let a=c=>t(c)*r;n.fillStyle=o;for(let[c,l]of[[-2.25,-2.05],[-1,-.92],[1.62,1.86],[2,2.06]])n.fillRect(0,a(c),i,a(l)-a(c));for(let c of[.18,.68])n.fillRect(c*i,a(-1.9),60,a(1.5)-a(-1.9));n.strokeStyle="#20140f",n.lineWidth=5;for(let c of[-2.35,-1.7,-.4,.8,1.5,2.2])n.beginPath(),n.moveTo(0,a(c)),n.lineTo(i,a(c)),n.stroke();n.lineWidth=4;for(let c of[0,.25,.5,.75])n.beginPath(),n.moveTo(c*i+2,a(-1.7)),n.lineTo(c*i+2,a(1.5)),n.stroke();n.lineWidth=3;for(let[c,l,u]of[[.06,-.3,.6],[.31,.95,1.4],[.56,-1.55,-.6],[.81,-.3,.6],[.41,-1.55,-1.1]]){let h=c*i;n.strokeRect(h,a(l),150,a(u)-a(l)),n.fillStyle="#20140f";for(let d=0;d<4;d++)n.fillRect(h+12+d*36,a(u)-18,18,6)}n.fillStyle=e("#3a302b","accent");for(let c of[.12,.62])for(let l=0;l<7;l++)n.fillRect(c*i,a(.85)+l*16,110,7);n.textBaseline="middle",n.font=`800 120px ${oi}`;for(let c of[.36,.86])n.save(),n.translate(c*i,a(.1)),n.rotate(-Math.PI/2),n.fillStyle=o,n.fillText(s.id,-60,0),n.restore();n.fillStyle="#20140f",n.font=`700 34px ${oi}`;for(let c of[.02,.52])n.save(),n.translate(c*i+40,a(-1.65)),n.rotate(Math.PI/2),n.fillText(`ENTRY PLUG \xB7 EVA-${s.id} \xB7 HANDLE WITH CARE`,0,0),n.restore();n.font=`700 26px ${oi}`;for(let c of[.27,.77])n.fillText("CAUTION  LCL HIGH PRESSURE",c*i,a(1.74)+2)})}function sg(s){return Zr(512,512,e=>{e.fillStyle="#f2ede4",e.fillRect(0,0,512,512),e.strokeStyle="#20140f",e.lineWidth=10,e.beginPath(),e.arc(256,256,236,0,Math.PI*2),e.stroke(),e.lineWidth=5,e.beginPath(),e.arc(256,256,180,0,Math.PI*2),e.stroke(),e.fillStyle="#20140f";for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.beginPath(),e.arc(256+Math.cos(n)*208,256+Math.sin(n)*208,9,0,Math.PI*2),e.fill()}e.fillStyle=s.palette.armor,e.font=`900 210px ${oi}`,e.textAlign="center",e.textBaseline="middle",e.fillText(s.id,256,262)})}function rg(s,e){let t=e("#2a0c0e","accent");return Zr(1024,1024,(n,i,r)=>{n.fillStyle="#ffffff",n.fillRect(0,0,i,r),n.strokeStyle=t,n.lineWidth=5;for(let[o,a,c,l]of[[60,80,380,260],[520,60,440,200],[80,420,300,480],[460,330,500,300],[470,700,480,250]])n.strokeRect(o,a,c,l);n.fillStyle=t;for(let o=0;o<40;o++)n.fillRect(70+o%10*34,360+Math.floor(o/10)*14,10,6);n.font=`700 40px ${oi}`,n.fillStyle="#e8dcd0",n.fillText(`EVA-${s.id}`,560,300),n.font=`700 24px ${oi}`,n.fillText("DANGER \xB7 KEEP CLEAR OF PLUG HATCH",480,680)},!0)}function og(s,e){let t=e("#ff7a1a");return Zr(512,256,(n,i,r)=>{n.fillStyle="#050806",n.fillRect(0,0,i,r),n.strokeStyle=t,n.lineWidth=2,n.strokeRect(6,6,i-12,r-12),n.fillStyle=t,n.font=`700 26px ${oi}`,n.fillText(`EVA-${s.id}  SYNC MONITOR`,20,40);for(let o=0;o<12;o++)n.fillStyle=o<9?"#5cf2a0":"#e8261c",n.fillRect(20+o*38,70,30,60+o%4*18);n.fillStyle="#5cf2a0",n.font=`600 22px ${oi}`,n.fillText("A10 \xB7 HARMONICS \xB7 LCL",20,226)})}var ag=`
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
`,cg=`
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
`,fh=`
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
`,ph=`
precision highp float;
uniform vec3 uInk;
void main() { gl_FragColor = vec4(uInk, 1.0); }
`,lg=`
varying vec3 vWorld;
void main() {
  vWorld = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hg=`
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
`,ug=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,dg=`
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
`,mh=`
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fg=`
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
`,pg=`
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
`,mg=`
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
`,gg=`
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
`,vg=`
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
`,xg=`
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
`,_g=`
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
`,yg=`
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
`;function gh(s,e){let t=new Dr({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Kt;let n=e.palette,i=rs(e),r=new Ne(1,1),o=[],a=E=>(o.push(E),E),c=(E,O,W,ue)=>({uLightDir:{value:new z(...E).normalize()},uFogColor:{value:hn(O)},uFog:{value:new Ne(...W)},uRim:{value:hn(ue)},uExposure:{value:1},uLevel:{value:-99}}),l=c([.55,.75,.55],"#0d0e14",[16,50],i("#ff9a52")),u=c([.2,.9,.5],"#050304",[3,9],n.markingHot);function h(E,{color:O,shade:W="#7c6f88",map:ue,repeat:Re=[1,1],emissive:pe="#000000",rimK:We=.5}={}){return a(new Rt({uniforms:{...E,uColor:{value:hn(O)},uShade:{value:hn(W)},uEmissive:{value:hn(pe)},uMap:{value:ue??null},uUseMap:{value:ue?1:0},uRepeat:{value:new Ne(...Re)},uRimK:{value:We}},vertexShader:ag,fragmentShader:cg,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}))}let d=i("#1a0d0b","accent"),p={uRes:{value:r},uWidth:{value:1.6},uInk:{value:hn(d)}},g=a(new Rt({uniforms:p,vertexShader:fh,fragmentShader:ph,side:Lt})),v=a(new Rt({uniforms:{uRes:p.uRes,uInk:p.uInk,uWidth:{value:1}},vertexShader:fh,fragmentShader:ph,side:Lt})),m=a(new On({color:d}));function f(E,O,{hull:W=g,crease:ue=32}={}){let Re=new dt(E,O);if(W){let pe=E.clone();pe.deleteAttribute("normal"),pe.deleteAttribute("uv");let We=ch(pe,.001);We.computeVertexNormals(),pe.dispose(),Re.add(new dt(We,W))}return ue&&Re.add(new ii(new es(E,ue),m)),Re}function T(E,O,W){let ue=new ri;return ue.moveTo(-E/2+W,-O/2),ue.lineTo(E/2-W,-O/2),ue.lineTo(E/2,-O/2+W),ue.lineTo(E/2,O/2-W),ue.lineTo(E/2-W,O/2),ue.lineTo(-E/2+W,O/2),ue.lineTo(-E/2,O/2-W),ue.lineTo(-E/2,-O/2+W),ue.closePath(),ue}let b=(E,O,W=.05)=>new Hr(E,{depth:O,bevelEnabled:W>0,bevelThickness:W,bevelSize:W,bevelSegments:1,curveSegments:24}),_=new ni,F=a(new Rt({uniforms:{uTop:{value:hn("#1b2030")},uBottom:{value:hn("#08080b")},uGlow:{value:hn(i("#6a2a18","accent"))}},vertexShader:lg,fragmentShader:hg,side:Lt,depthWrite:!1}));_.add(new dt(new Gr(70,32,16),F));let R=a(rg(e,i)),C=h(l,{color:n.armor,shade:i("#5a2a44","accent"),map:R,repeat:[.22,.22],rimK:.35}),U=h(l,{color:i("#7a1820","accent"),shade:i("#3a1a30","accent"),rimK:.25}),S=h(l,{color:"#b9b3ab",shade:"#5c5868",rimK:.4}),y=h(l,{color:"#3a3638",shade:"#1c1a24",rimK:.3}),N=h(l,{color:n.accent,shade:i("#8a3a2a","accent"),rimK:.2}),te=a(new Sn({color:197379})),q=new $t;{let E=new ri;E.moveTo(-5.2,-4.6),E.lineTo(5.2,-4.6),E.lineTo(5.8,-1),E.lineTo(4.6,3.2),E.lineTo(2.2,4.4),E.lineTo(-2.2,4.4),E.lineTo(-4.6,3.2),E.lineTo(-5.8,-1),E.closePath();let O=new Qi;O.absarc(0,0,1.05,0,Math.PI*2,!0),E.holes.push(O);let W=b(E,5.8,.18);W.translate(0,0,-6),q.add(f(W,C))}for(let[E,O,W,ue,Re]of[[-3.3,2,2.4,1.7,-.12],[3.3,2,2.4,1.7,.12],[-3.6,-2.3,1.9,2.6,.05],[3.6,-2.3,1.9,2.6,-.05],[0,3.4,2.8,.8,0],[0,-3.5,3,1.2,0]]){let pe=f(b(T(W,ue,.32),.26,.06),C);pe.position.set(E,O,.15),pe.rotation.z=Re,q.add(pe)}for(let E of[-1,1])for(let O=0;O<5;O++){let W=f(new Dt(1.2,.12,.16),y,{hull:v});W.position.set(E*3.6,-1.2-O*.32,.5),q.add(W)}let ee=f(new si(1.5,1.6,.5,48,1),S);ee.rotation.x=Math.PI/2,ee.position.z=.25,q.add(ee);let he=new dt(new Es(1.06,48),te);he.position.z=.505,q.add(he);let $=new $t;$.add(f(new Bn(1.22,.1,10,48),y,{hull:v,crease:0}));for(let E=0;E<8;E++){let O=E/8*Math.PI*2,W=f(new Dt(.22,.32,.16),N,{hull:v});W.position.set(Math.cos(O)*1.22,Math.sin(O)*1.22,0),W.rotation.z=O,$.add(W)}$.position.z=.56,q.add($);let Se=[-1,1].map(E=>{let O=new $t,W=f(b(T(1.6,2.9,.4),.16,.04),U);O.add(W);let ue=f(new Dt(.16,2.2,.06),N,{hull:v});return ue.position.set(-E*.55,0,.22),O.add(ue),O.userData.sx=E,O.position.z=.62,q.add(O),O}),ne=f(new si(1.3,1.7,3,24),y);ne.position.set(0,5.6,-2.4),q.add(ne);for(let E of[-1,1]){let O=f(b(T(2.4,5,.7),2.2,.12),C);O.position.set(E*7.4,.4,-3.2),O.rotation.set(.1,E*.4,E*-.18),q.add(O)}_.add(q);let De=h(l,{color:"#2c2a33",shade:"#15141c",rimK:.15});for(let[E,O]of[[-10,-4],[10,-4],[-10,6],[10,6],[-6,14],[6,14]]){let W=f(new Dt(.7,26,.7),De,{hull:v,crease:0});W.position.set(E,0,O),_.add(W)}for(let[E,O]of[[-5.2,4],[6.5,-1]]){let W=f(new Dt(22,.35,1.4),De,{hull:v,crease:0});W.position.set(0,E,O),_.add(W)}for(let E of[.7,2.45,3.85,5.6]){let O=f(new Dt(.1,.1,18),y,{hull:v,crease:0});O.position.set(Math.cos(E)*.78,Math.sin(E)*.78,9.5),_.add(O)}let Oe=a(new Sn({color:n.accent,transparent:!0,opacity:.2,blending:gn,depthWrite:!1})),ke=[];for(let E=0;E<8;E++){let O=new dt(new Bn(.82,.03,6,48),a(Oe.clone()));O.position.z=2.2+E*1.8,_.add(O),ke.push(O)}let ae=new $t,de=[[0,-2.75],[.18,-2.73],[.33,-2.66],[.45,-2.54],[.52,-2.4],[.55,-2.25],[.55,-1.72],[.52,-1.7],[.52,-1.62],[.55,-1.6],[.55,1.5],[.52,1.52],[.52,1.58],[.55,1.6],[.55,2.26],[.6,2.3],[.6,2.5],[.56,2.56],[.46,2.6],[0,2.6]].map(([E,O])=>new Ne(E,O)),I=[0];for(let E=1;E<de.length;E++)I.push(I[E-1]+de[E].distanceTo(de[E-1]));let V=I[I.length-1],X=[];for(let E=0;E<=140;E++){let O=E/140*V,W=1;for(;W<I.length-1&&I[W]<O;)W++;let ue=(O-I[W-1])/(I[W]-I[W-1]||1);X.push(new Ne().lerpVectors(de[W-1],de[W],ue))}let D=E=>{for(let O=0;O<X.length;O++)if(X[O].y>=E)return O/(X.length-1);return 1},le=new Ts(X,64);le.rotateX(Math.PI/2);let Le=a(ig(e,i,D)),se=h(l,{color:"#efe9df",shade:"#7d7690",map:Le,rimK:.55});ae.add(f(le,se,{crease:0}));let ge=a(sg(e)),H=new dt(new Es(.44,48),h(l,{color:"#ffffff",shade:"#8a8496",map:ge,rimK:0}));H.position.z=2.605,ae.add(H);let ie=f(new Bn(.24,.045,8,24,Math.PI),S,{hull:v,crease:0});ie.position.set(0,-.05,2.63),ae.add(ie);for(let E of[Math.PI/2,-Math.PI/2]){let O=f(new Dt(.09,.08,3.4),y,{hull:v});O.position.set(Math.cos(E)*.57,Math.sin(E)*.57,-.1),O.rotation.z=E,ae.add(O)}for(let[E,O]of[[.6,-.8],[2.3,.9],[3.7,-.2],[5.2,1.1]]){let W=f(new Dt(.24,.05,.5),S,{hull:v});W.position.set(Math.cos(E)*.565,Math.sin(E)*.565,O),W.rotation.z=E+Math.PI/2,ae.add(W)}let A=a(new Sn({color:n.accentHot,transparent:!0,opacity:0,blending:gn,depthWrite:!1})),we=new dt(new Bn(.6,.02,6,48),A);we.position.z=2.3,ae.add(we),_.add(ae);let re=new Bt(40,1,.1,150),Ae=new ni,ve={uTime:{value:0},uLights:{value:0},uRainbow:{value:0},uView:{value:0},uLevel:{value:-3},uElectric:{value:0},uAccent:{value:hn(n.accent)}},Ue=a(new Rt({uniforms:ve,vertexShader:mh,fragmentShader:fg,side:Lt}));Ae.add(new dt(new si(1.6,1.6,4.4,96,1,!0),Ue));let _e=h(u,{color:"#4a4448",shade:"#1e1a26",rimK:.5}),w=h(u,{color:i("#6e2228","accent"),shade:i("#2a1020","accent"),rimK:.4}),x=h(u,{color:"#a29c96",shade:"#3c3848",rimK:.5}),Y=h(u,{color:"#2a2628",shade:"#121018",rimK:.6}),j=h(u,{color:n.armor,shade:n.armorShade,emissive:i("#2a0404","accent"),rimK:.3}),P=[n.accent,"#5cf2a0",n.accent,"#e8261c"].map(E=>a(new Sn({color:E}))),G=new $t,me=[];for(let E of[-1,1]){let O=new ri;O.moveTo(.55,-.12),O.lineTo(-.38,-.12),O.quadraticCurveTo(-.5,-.1,-.52,0),O.lineTo(-.5,.06),O.lineTo(.55,.08),O.closePath();let W=b(O,.16,.025);W.translate(0,0,-.08),W.rotateY(Math.PI/2);let ue=f(W,_e,{hull:v});ue.position.set(E*.48,-.62,.05),G.add(ue);let Re=f(new Dt(.14,.05,.6),w,{hull:v});Re.position.set(E*.48,-.53,.2),G.add(Re);let pe=f(new si(.09,.11,.08,20),x,{hull:v});pe.position.set(E*.48,-.53,-.4),G.add(pe);let We=[[0,0],[.05,0],[.058,.04],[.05,.1],[.056,.16],[.05,.22],[.04,.25],[0,.26]].map(([Qe,ct])=>new Ne(Qe,ct)),je=f(new Ts(We,20),Y,{hull:v,crease:0});je.position.set(E*.48,-.5,-.4),je.rotation.set(-.55,0,E*-.12),G.add(je);for(let Qe of[0,E*-.035]){let ct=f(new si(.018,.018,.02,12),j,{hull:null,crease:0});ct.position.set(E*.48+Qe-E*.03,-.29,-.53+Math.abs(Qe)),ct.rotation.x=-.55,G.add(ct)}for(let Qe=0;Qe<4;Qe++){let ct=new dt(new Dt(.03,.012,.05),P[Qe]);ct.position.set(E*.56,-.505,-.1+Qe*.09),ct.userData.k=Qe+(E>0?4:0),G.add(ct),me.push(ct)}}{let E=new ri;E.moveTo(-.36,0),E.lineTo(.36,0),E.lineTo(.3,.22),E.lineTo(-.3,.22),E.closePath();let O=f(b(E,.12,.02),_e,{hull:v});O.position.set(0,-.98,-.72),O.rotation.x=-.9,G.add(O);let W=a(new Sn({map:a(og(e,i))})),ue=new dt(new Fn(.42,.14),W);ue.position.set(0,-.84,-.68),ue.rotation.x=-.75,G.add(ue)}let fe=new $t;for(let E of[-1.75,1.75]){let O=f(new Bn(1.55,.05,8,64),x,{hull:v,crease:0});O.rotation.x=Math.PI/2,O.position.y=E,fe.add(O)}for(let E=0;E<6;E++){let O=E/6*Math.PI*2+.25,W=f(new Dt(.07,3.6,.05),x,{hull:v,crease:0});W.position.set(Math.cos(O)*1.55,0,Math.sin(O)*1.55),W.rotation.y=-O,fe.add(W)}Ae.add(fe),Ae.add(G);let ye={uTime:{value:0},uAlpha:{value:0}},qe=a(new Rt({uniforms:ye,vertexShader:mh,fragmentShader:pg,transparent:!0,depthWrite:!1,side:en})),xe=new dt(new Fn(3.4,3.4,1,1),qe);xe.rotation.x=-Math.PI/2,Ae.add(xe);let Fe=460,Ge=new Float32Array(Fe*3),Ve=new Float32Array(Fe),ze=7,nt=()=>(ze=ze*16807%2147483647)/2147483647;for(let E=0;E<Fe;E++){let O=Math.sqrt(nt())*1.45,W=nt()*Math.PI*2;Ge[E*3]=Math.cos(W)*O,Ge[E*3+1]=nt()*4.2,Ge[E*3+2]=Math.sin(W)*O,Ve[E]=nt()}let oe=new Pt;oe.setAttribute("position",new Vt(Ge,3)),oe.setAttribute("aSeed",new Vt(Ve,1));let Te={uTime:{value:0},uLevel:{value:-3},uFlow:{value:0}},L=a(new Rt({uniforms:Te,vertexShader:mg,fragmentShader:gg,transparent:!0,depthWrite:!1}));Ae.add(new Fr(oe,L));let be=new Bt(72,1,.03,20),Q=new ni,ce=(E,{rainbow:O=0,k:W=1}={})=>a(new Rt({uniforms:{uColor:{value:hn(E)},uRainbow:{value:O},uK:{value:W},uTime:{value:0}},vertexShader:vg,fragmentShader:xg,transparent:!0,depthWrite:!1,blending:gn,side:en})),Ee=new $t,Pe=ce("#ff3aa8",{rainbow:1,k:1.1});Ee.add(new dt(le,Pe));let Ye=new dt(ie.geometry,ce("#7fe8ff",{k:.6}));Ye.position.copy(ie.position),Ee.add(Ye);{let E=[];for(let Re=0;Re<=100;Re++){let pe=-2.4+Re*.048,We=Re%10===0?.2:Re%5===0?.13:.07;E.push(.58,.18,pe,.58+We,.18,pe)}E.push(.58,.18,-2.4,.58,.18,2.4);let O=new Pt;O.setAttribute("position",new Vt(new Float32Array(E),3)),Ee.add(new ii(O,a(new On({color:16773856,transparent:!0,opacity:.85,blending:gn}))));let W=new Dt(.5,.18,1.4),ue=new ii(new es(W),a(new On({color:11182248,transparent:!0,opacity:.6,blending:gn})));W.dispose(),ue.position.set(0,-.05,.1),Ee.add(ue)}Q.add(Ee);let Ke=new $t,vt=new dt(ee.geometry,ce("#ff4aa0",{k:1.2}));vt.rotation.x=Math.PI/2,vt.position.z=.25,Ke.add(vt);for(let[E,O,W,ue,Re]of[[1.25,.12,.5,"#c86bff",16],[1.75,.2,.1,"#ff2f7a",24],[2.35,.1,-.3,"#ff4ab0",0],[2.85,.26,-.6,"#ff2468",32]]){let pe=new dt(new Bn(E,O,10,96),ce(ue,{k:1}));pe.position.z=W,Ke.add(pe);for(let We=0;We<Re;We++){if(We%4===3)continue;let je=We/Re*Math.PI*2,Qe=new dt(new Dt(.34,O*2.6,.3),ce(ue,{k:.8}));Qe.position.set(Math.cos(je)*(E+O*1.6),Math.sin(je)*(E+O*1.6),W),Qe.rotation.z=je,Ke.add(Qe)}}Q.add(Ke);{q.updateMatrixWorld(!0);let E=a(new On({color:9071871,transparent:!0,opacity:.22,blending:gn,depthWrite:!1}));q.traverse(ue=>{if(!ue.isMesh||ue.material===g||ue.material===v||ue===he)return;let Re=new ii(new es(ue.geometry,25),E);Re.matrixAutoUpdate=!1,Re.matrix.copy(ue.matrixWorld),Q.add(Re)});let O=[];for(let[ue,Re]of[[[-14,6,-6],[14,-5,9]],[[-12,-7,4],[12,7,-2]],[[-3,12,3],[2,-12,1]]])O.push(...ue,...Re);let W=new Pt;W.setAttribute("position",new Vt(new Float32Array(O),3)),Q.add(new ii(W,a(new On({color:3828991,transparent:!0,opacity:.7,blending:gn}))))}let Je=new Bt(40,1,.1,80),ft=new ni,yt=new Fn(1,1,360,40),wt=[["#7dff3a",0,0,"unit"],["#2f9bff",.32,-.6,"unit"],["#ff2f86",0,.5,"pilot"],["#a874ff",.32,-.2,"pilot"]].map(([E,O,W,ue])=>{let Re=a(new Rt({uniforms:{uColor:{value:hn(E)},uPhase:{value:0},uAmp:{value:2.4},uK:{value:.55},uLen:{value:26},uRadius:{value:.78},uZ:{value:W},uTime:{value:0}},vertexShader:_g,fragmentShader:yg,transparent:!0,depthWrite:!1,blending:gn,side:en})),pe=new dt(yt,Re);return pe.frustumCulled=!1,pe.userData={offset:O,who:ue},ft.add(pe),pe}),bt=new Bt(38,1,.1,80),at=new vn(2,2,{type:wi,minFilter:tn,magFilter:tn,samples:4}),pt={tScene:{value:at.texture},uTime:{value:0},uSubmerged:{value:0},uElectric:{value:0},uFade:{value:0},uFlash:{value:0},uSpeed:{value:0},uRes:{value:new Ne(1,1)}},Zt=a(new Rt({uniforms:pt,vertexShader:ug,fragmentShader:dg,depthTest:!1})),Z=new ni;Z.add(new dt(new Fn(2,2),Zt));let Ce=new Ss(-1,1,1,-1,0,1);function Ze(E,O){let W=Math.max(1,E),ue=Math.max(1,O);t.setSize(W,ue,!1);let Re=t.getPixelRatio();at.setSize(Math.floor(W*Re),Math.floor(ue*Re)),pt.uRes.value.set(W*Re,ue*Re),r.set(W*Re,ue*Re),p.uWidth.value=1.8*Re,v.uniforms.uWidth.value=1.1*Re;for(let pe of[re,be,Je,bt])pe.aspect=W/ue,pe.updateProjectionMatrix()}function tt(E){let O=0;for(let[W,ue]of[[Me.insertEnd,.18],[Me.lockEnd,.22],[Me.electric,.08],[Me.power,.1]])E>=W&&(O+=ue*Math.exp(-(E-W)*7));return O}let $e=(E,O)=>Math.sin(E*91.7+O*13.1)*Math.cos(E*57.3+O*7.7);function He(E){return E<Me.insertEnd?Ht(20,4,uh(E/Me.insertEnd)):E<Me.lockStart?Ht(4,3.2,At(Me.insertEnd,Me.lockStart,E)):Ht(3.2,-2.25,dh(Ps((E-Me.lockStart)/(Me.lockEnd-Me.lockStart))))}let et=new z,xt=new z;function Tt(E){let O=He(E);ae.position.set(0,0,O),ae.rotation.z=At(Me.lockStart,Me.lockEnd-.3,E)*Math.PI*.5+(1-uh(E/Me.insertEnd))*.5,A.opacity=.9*At(Me.lockStart,Me.lockEnd,E)*(.6+.4*Math.sin(E*20));let W=At(.7,1.6,E)*(1-At(Me.lockEnd-.55,Me.lockEnd,E));for(let pe of Se)pe.position.x=pe.userData.sx*Ht(.8,2.35,W);$.rotation.z=At(Me.lockStart+.4,Me.lockEnd-.4,E)*(Math.PI/4),ke.forEach((pe,We)=>{let je=Math.max(0,1-Math.abs(E*5%8-(7-We))*.8);pe.material.opacity=(.06+je*.6)*(1-At(Me.insertEnd,Me.insertEnd+.6,E))});let ue=0;if(E<1.7)et.set(1.55,-.35,O+.9-E*.6),xt.set(0,.05,O-.6),re.fov=34,ue=1-At(1.3,1.7,E)*.4;else if(E<Me.insertEnd){let pe=(E-1.7)/(Me.insertEnd-1.7);et.set(Ht(7.5,6.8,pe),Ht(5.2,4.8,pe),Ht(13,12,pe)),xt.set(.2,.4,1.5),re.fov=38,ue=.25}else if(E<Me.lockStart)et.set(2.2,-1.5,4.4),xt.set(0,.1,1.6),re.fov=32;else{let pe=At(Me.lockStart,Me.cut,E);et.set(Ht(1.4,.9,pe),Ht(4.2,3.4,pe),Ht(6,5.2,pe)),xt.set(0,0,Ht(.8,.2,pe)),re.fov=36}let Re=tt(E);et.x+=$e(E,1)*Re,et.y+=$e(E,2)*Re,re.position.copy(et),re.lookAt(xt),re.updateProjectionMatrix(),pt.uSpeed.value=ue,t.setRenderTarget(at),t.render(_,re)}let M=new z;function k(E){pt.uSpeed.value=0,ve.uTime.value=E;let O=At(Me.lights-.2,Me.lights+.4,E)*(E<Me.lights+.5?.5+.5*Math.sign(Math.sin(E*60)):1);ve.uLights.value=O;let W=Ht(-2.4,2.6,dh(Ps((E-Me.lclStart)/(Me.lclEnd-Me.lclStart))));ve.uLevel.value=W,u.uLevel.value=W,Te.uLevel.value=W,Te.uTime.value=E,Te.uFlow.value=At(Me.lclStart,Me.lclStart+.6,E)*(1-.6*At(Me.rainbowEnd,Me.syncStop,E)),xe.position.y=W,xe.visible=W<2.15,ye.uTime.value=E,ye.uAlpha.value=At(Me.lclStart,Me.lclStart+.4,E);let ue=E>=Me.electric&&E<Me.electricEnd?(.7+.3*$e(E,5))*(1-At(Me.electricEnd-.4,Me.electricEnd,E)):0;ve.uElectric.value=ue;let Re=At(Me.rainbowStart,Me.rainbowStart+1,E)*(1-At(Me.rainbowEnd-.8,Me.rainbowEnd,E));ve.uRainbow.value=Re,ve.uView.value=At(Me.rainbowEnd-.6,Me.rainbowEnd+.8,E),fe.visible=E<Me.rainbowStart+.3,u.uExposure.value=.18+.82*O+.5*ue+.3*Re;for(let ct of me)ct.visible=O>.5&&Math.sin(E*(2+ct.userData.k*.7)+ct.userData.k)>-.3;let pe=tt(E);be.position.set(Math.sin(E*.4)*.04+$e(E,3)*pe*.3,.05+Math.sin(E*.9)*.02,.32);let We=At(Me.lclStart-.4,Me.lclStart+.8,E),je=At(Me.lclStart+1.4,Me.lclEnd-.6,E),Qe=Ht(Ht(-.35,-1.1,We),.1,je);be.lookAt(M.set(Math.sin(E*.25)*.18,Qe,-1.6)),pt.uSubmerged.value=(W>.05?1:0)*At(0,.4,W),pt.uElectric.value=ue,t.setRenderTarget(at),t.render(Ae,be)}function K(E,O){pt.uSpeed.value=0,pt.uSubmerged.value=0,pt.uElectric.value=0,Ee.position.set(0,0,He(E)),Ee.rotation.z=ae.rotation.z,Ke.rotation.z=-$.rotation.z*.5,Pe.uniforms.uTime.value=O;let W=At(4.5,5.8,E);Je.position.set(Ht(6.2,5.4,W),Ht(2.6,2,W),Ht(7.5,6.6,W)),Je.up.set(.32,1,0).normalize(),Je.lookAt(.3,.1,.9),t.setRenderTarget(at),t.setClearColor(0,1),t.render(Q,Je)}function J(E,O,W){pt.uSpeed.value=0,pt.uSubmerged.value=0,pt.uElectric.value=0;let ue=(1-Ps(W/100))*2.6,Re=O*.9;for(let pe of wt){let We=pe.material.uniforms;We.uPhase.value=Re+pe.userData.offset+(pe.userData.who==="pilot"?ue:0),We.uAmp.value=2.4+(pe.userData.who==="pilot"?ue*.25:0)}bt.position.set(Math.sin(O*.15)*1.2,.6,17.5),bt.up.set(0,1,0),bt.lookAt(0,-.2,0),t.setRenderTarget(at),t.setClearColor(0,1),t.render(ft,bt)}function B(E,{fade:O=1,flash:W=0,clock:ue=E,sync:Re=0}={}){pt.uTime.value=E;let pe=_c(E);pe?.kind==="xray"?K(E,ue):pe?.kind==="helix"?J(E,ue,Re):E<Me.cut?(pt.uSubmerged.value=0,pt.uElectric.value=0,Tt(E)):k(E);let We=0;for(let je of[1.7,Me.insertEnd,Me.lockStart,Me.cut])E>=je&&E<je+.25&&(We=Math.max(We,Math.exp(-(E-je)*14)*(je===Me.cut?.9:.35)));pt.uFlash.value=Math.max(W,We),pt.uFade.value=At(0,.5,E)*O,t.setRenderTarget(null),t.render(Z,Ce)}function Ie(){let E=new Set;for(let O of[_,Ae,Q,ft,Z])O.traverse(W=>{W.geometry&&!E.has(W.geometry)&&(E.add(W.geometry),W.geometry.dispose())});for(let O of o)O.dispose?.();at.dispose(),t.dispose(),t.forceContextLoss?.()}return{resize:Ze,update:B,dispose:Ie}}var os=Me.syncStop,Ls=os+2.2,Mg=2.9,bg=Ls+Mg,Ei=(s,e=0,t=1)=>Math.min(t,Math.max(e,s));function qt(s,e,t){let n=document.createElement(s);return e&&(n.className=e),t!=null&&(n.innerHTML=t),n}var Gt=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Sg(s){let e=Math.floor(s*100),t=Math.floor(e/6e3),n=Math.floor(e/100)%60,i=e%100;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function wg(s,e,t){if(s<Me.syncStart)return 0;if(e==null||s<os){let n=Ei((s-Me.syncStart)/(Me.syncStop-Me.syncStart)),i=1-Math.pow(1-n,2.4),r=n<1?Math.sin(s*37)*.6*(1-n):0;return Ei(i*t+r,0,t)}return t+(100-t)*Ei((s-os)/.9)}function Tg(s){let e=s.palette,t=rs(s);return{"--evc-accent":e.marking,"--evc-hot":e.markingHot,"--evc-red":e.armor,"--evc-crimson":e.accent,"--evc-text":e.hudText,"--evc-well":t("#1a0d0b","accent"),"--evc-panel":t("#1b0d0b","accent"),"--evc-rim":t("#ffb88f","marking"),"--evc-red-hot":t("#d34634","accent")}}function Eg(s,{unit:e,voice:t=!0,voiceClips:n,strings:i={},onDone:r}){let o=document.createElement("style");o.dataset.evaCinema="",o.textContent=Mc,document.head.appendChild(o);let a=qt("div","evc-root");for(let[oe,Te]of Object.entries(Tg(e)))a.style.setProperty(oe,Te);let c=e.palette;a.setAttribute("role","dialog"),a.setAttribute("aria-label",e.title.en);let l=qt("canvas","evc-canvas");a.appendChild(l);let u=qt("canvas","evc-monitor");a.appendChild(u);let h=qt("div","evc-gate",`<div class="evc-gate-inner">
      <div class="evc-gate-frame">
        <div class="evc-gate-ja evc-mincho">${Gt(e.gate.ja)}</div>
        <div class="evc-gate-en">${Gt(e.gate.en)}</div>
      </div>
      <div class="evc-gate-hint">${Gt(i.gateHint||"CLICK / ANY KEY")}</div>
      <div class="evc-gate-meta"><span>EVA-<b>${Gt(e.id)}</b></span><span>${Gt(e.pilotRole)}</span><span>LCL \u25B8 STANDBY</span></div>
    </div>`);a.appendChild(h);let d=qt("div","evc-hud"),p=qt("div","evc-caution");d.appendChild(p);let g=qt("div","evc-hud-top",`<div class="evc-tag"><div class="evc-tag-title">${Gt(e.nameEn)}</div><div class="evc-tag-sub">ENTRY SEQUENCE \xB7 ${Gt(e.pilotRole)}</div></div>
     <div class="evc-clock"><span data-k="clock">00:00:00</span><small data-k="power">EXTERNAL POWER \xB7 UMBILICAL</small></div>`);d.appendChild(g),d.appendChild(qt("div","evc-rule"));let v=qt("div","evc-steps"),m=e.script.map((oe,Te)=>{let L=qt("div","evc-step",`<span class="evc-step-n">${String(Te+1).padStart(2,"0")}</span><span>${Gt(oe.en)}</span><span class="evc-step-st">\u2014</span>`);return v.appendChild(L),L});d.appendChild(v);let f=qt("div","evc-read",`<div class="evc-read-row" data-r="depth"><span>PLUG DEPTH</span><b>0.00 m</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="lcl"><span>LCL LEVEL</span><b>0 %</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="press"><span>LCL PRESSURE</span><b>0.00 MPa</b><div class="evc-read-bar"><i></i></div></div>
     <div class="evc-read-row" data-r="a10"><span>A10 NERVE</span><b>OFFLINE</b><div class="evc-read-bar"><i></i></div></div>`);d.appendChild(f);let T=qt("div","evc-sub",'<div class="evc-sub-ja evc-mincho"></div><div class="evc-sub-en"></div>');d.appendChild(T);let b=qt("div","evc-sync",`<div class="evc-sync-head"><span>SYNCHRONIZATION RATIO</span><span data-k="harm">HARMONICS \xB10.0</span></div>
     <div class="evc-sync-num"><span data-k="sync">0.0</span><small>%</small></div>
     <canvas width="880" height="184"></canvas>
     <div class="evc-sync-legend"><span><i style="background:var(--evc-accent)"></i>PILOT</span><span><i style="background:var(--evc-text)"></i>UNIT-${Gt(e.id)}</span><span><i style="background:#58c46a"></i>HARMONICS</span></div>`);d.appendChild(b),a.appendChild(d);let _=qt("div","evc-confirm",`<div class="evc-confirm-panel">
      <div class="evc-confirm-label">PILOT AUTHENTICATION \xB7 SYNC ${e.syncStop.toFixed(1)}%</div>
      <div class="evc-confirm-ja evc-mincho">${Gt(e.confirm.ja)}</div>
      <div class="evc-confirm-en">${Gt(e.confirm.en)}</div>
      <button type="button" class="evc-confirm-btn">${Gt(i.confirm||"CONFIRM")}</button>
    </div>`);a.appendChild(_);let F=Gt(e.title.ja).replace(Gt(e.kanjiNumber),`<span>${Gt(e.kanjiNumber)}</span>`),R=qt("div","evc-title",`<div class="evc-title-inner">
      <div class="evc-title-ja evc-mincho">${F}</div>
      <div class="evc-title-rule"></div>
      <div class="evc-title-en">${Gt(e.title.en)}</div>
    </div>`);a.appendChild(R);let C=qt("button","evc-skip",`<span class="evc-skip-label">${Gt(i.skip||"HOLD TO SKIP")}</span><kbd>Esc</kbd><i class="evc-skip-bar"><b></b></i>`);C.type="button",C.title=i.skipHint||"",a.appendChild(C),s.appendChild(a);let U=oe=>a.querySelector(`[data-k="${oe}"]`),S=U("clock"),y=U("power"),N=U("sync"),te=U("harm"),q=T.firstElementChild,ee=T.lastElementChild,he=b.querySelector("canvas"),$=he.getContext("2d"),Se=Object.fromEntries([...f.querySelectorAll("[data-r]")].map(oe=>[oe.dataset.r,oe])),ne;try{ne=gh(l,e)}catch(oe){console.warn("[dsh-theme-eva] WebGL unavailable, HUD-only cinematic",oe)}let De=hh(u,e),Oe=()=>{ne?.resize(a.clientWidth,a.clientHeight),De.resize(a.clientWidth,a.clientHeight)},ke=new ResizeObserver(Oe);ke.observe(a),Oe();let ae,de,I=t?new Us(n,Ac(e).map(oe=>Kr(e,oe))):void 0,V=!1,X=0,D=null,le=0,Le=null,se=0,ge=!1,H=-1,ie=new Set,A=(oe,Te=0)=>{if(!t||!oe||typeof oe.voice!="string"||ge)return;let L=()=>{!de||ge||(ae?.squelch(ae.now),setTimeout(()=>de?.speak(oe.voice,{rate:1,pitch:1}),120+Te*1e3))};if(!I||I.failed)return L();I.play(Kr(e,oe),{delay:Te+.1,onStart:(be,Q)=>{ae?.squelch(Math.max(ae.now,be-.1)),ae?.squelch(be+Q+.04)}}).then(be=>{be||L()})},we=[[0,"hum",()=>{ae?.hum(),ae?.whoosh(ae.now,3.3,180,1500,.3)}],[Me.insertEnd-.05,"clank1",()=>ae?.clank(ae.now,1.2)],[Me.lockStart,"servo",()=>ae?.servo(ae.now,Me.lockEnd-Me.lockStart)],[Me.lockEnd-.08,"clank2",()=>{ae?.clank(ae.now,1),ae?.hiss(ae.now+.1,1.3)}],[Me.cut-.1,"cut",()=>ae?.whoosh(ae.now,.5,2400,300,.25)],[Me.lights,"lights",()=>[0,.14,.28].forEach((oe,Te)=>ae?.beep(ae.now+oe,880+Te*220,.08,.06))],[Me.lclStart,"lcl",()=>ae?.liquid(ae.now,Me.lclEnd-Me.lclStart+.6)],[Me.electric,"zap",()=>ae?.zap(ae.now,Me.electricEnd-Me.electric)],[Me.power,"power",()=>{ae?.powerUp(ae.now),ae?.humPower(ae.now)}],[Me.syncStart,"sync",()=>ae?.syncTone(ae.now,Me.syncStop-Me.syncStart)],[Me.syncStop,"confirm",()=>{ae?.beep(ae.now,1568,.14,.07),ae?.beep(ae.now+.2,1568,.14,.07),A(e.confirm)}]];gc.forEach((oe,Te)=>{we.push([oe.at,`cut${Te}`,()=>{if(oe.kind==="title"?ae?.beep(ae.now,196,.22,.09):(ae?.beep(ae.now,2093,.03,.05),ae?.whoosh(ae.now,.18,3200,900,.12)),oe.kind==="neural")for(let L=0;L<14;L++)ae?.beep(ae.now+.08+L*.075,1320+L%3*110,.025,.035);if(oe.kind==="lines")for(let L=0;L<18;L++)ae?.beep(ae.now+.1+L*.06,990+L%4*165,.02,.03);oe.kind==="magi"&&[.12,.26,.4].forEach(L=>ae?.beep(ae.now+L*.75+.1,1760,.06,.05))}])}),xc.forEach((oe,Te)=>{we.push([oe.at,`scope${Te}`,()=>{ae?.beep(ae.now,2637,.03,.05),ae?.whoosh(ae.now,.2,3600,1200,.12)}])}),e.script.forEach((oe,Te)=>{we.push([oe.t,`line${Te}`,()=>A(oe)]);let L=e.script[Te+1]?.t??Me.syncStop;we.push([Math.min(L-.3,oe.t+2.2),`ok${Te}`,()=>ae?.chirp(ae.now)])});let re=[[os+.02,"final",()=>{ae?.chirp(ae.now),A(e.final)}],[Ls,"title",()=>{ae?.boom(ae.now),ae?.humFade(ae.now+2,1.2),A(e.title,.45)}]];function Ae(oe){if(!V)return 0;if(Le!=null)return Le;let Te=(oe-X)/1e3;return D==null?Math.min(Te,Me.syncStop):os+(oe-D)/1e3}function ve(oe,Te){let L=he.width,be=he.height;$.clearRect(0,0,L,be),$.strokeStyle="#ffffff12",$.lineWidth=1;for(let Pe=0;Pe<=L;Pe+=L/16)$.beginPath(),$.moveTo(Pe,0),$.lineTo(Pe,be),$.stroke();$.beginPath(),$.moveTo(0,be/2),$.lineTo(L,be/2),$.stroke();let ce=1-Te/100,Ee=(Pe,Ye,Ke,vt,Je)=>{$.strokeStyle=Pe,$.lineWidth=Je,$.beginPath();for(let ft=0;ft<=L;ft+=4){let yt=ft/L,wt=be/2+Math.sin(yt*Math.PI*2*vt+Ye)*Ke*be*.36+Math.sin(yt*40+oe*9+Ye)*ce*6;ft===0?$.moveTo(ft,wt):$.lineTo(ft,wt)}$.stroke()};Ee(c.hudText,oe*2.1,.9,3,2),Ee(c.marking,oe*2.1+ce*2.6,.9-ce*.4,3+ce*1.4,2.4),Ee("#58c46a",oe*3+1,.15+ce*.5,7,1.4)}function Ue(oe,Te,L,be=!1){let Q=Se[oe];Q.children[1].textContent=Te,Q.children[2].firstElementChild.style.width=`${Ei(L)*100}%`,Q.classList.toggle("is-alert",be)}function _e(oe){se=requestAnimationFrame(_e);let Te=Ae(oe);if(!V)return;for(let[bt,at,pt]of we)Te>=bt&&!ie.has(at)&&(ie.add(at),pt());if(D!=null)for(let[bt,at,pt]of re)Te>=bt&&!ie.has(at)&&(ie.add(at),pt());let L=D!=null&&Te>=Ls,be=wg(Te,D,e.syncStop),Q=oe/1e3;if(ne&&!L){let bt=D!=null?1-Ei((Te-(Ls-.4))/.4):1,at=D!=null?Math.exp(-(Te-os)*5)*.5:0;ne.update(Te,{fade:bt,flash:at,clock:Q,sync:be})}let ce=De.update(Te,{sync:be,clock:Q,confirmed:D!=null,hidden:L||D!=null&&Te>=Ls-.4}),Ee=ce==="cut";a.classList.toggle("is-monitor",Ee),a.classList.toggle("is-scope",ce==="scope"),a.classList.toggle("is-intertitle",Ee&&vc(Te)?.kind==="title"),d.classList.toggle("is-on",Te>.3&&!L),S.textContent=Sg(Te),y.textContent=Te>=Me.power?"INTERNAL POWER \xB7 MAIN CIRCUIT LIVE":"EXTERNAL POWER \xB7 UMBILICAL",p.classList.toggle("is-on",Te>=Me.electric&&Te<Me.electricEnd&&Math.sin(Te*30)>0);let Pe=-1;e.script.forEach((bt,at)=>{Te>=bt.t&&(Pe=at)}),m.forEach((bt,at)=>{let pt=e.script[at+1]?.t??Me.syncStop,Zt=Te>=Math.min(pt-.3,e.script[at].t+2.2)||at===e.script.length-1&&D!=null;bt.classList.toggle("is-done",Zt),bt.classList.toggle("is-active",at===Pe&&!Zt),bt.lastElementChild.textContent=Zt?"OK":at===Pe?"RUN":"\u2014"});let Ye=Pe>=0?e.script[Pe]:null,Ke=Pe;D!=null?(Ye=e.final,Ke=100):Te>=Me.syncStop&&(Ye=null,Ke=99),Ke!==H&&(H=Ke,q.textContent=Ye?.ja??"",ee.textContent=Ye?.en??"",T.classList.remove("is-in"),T.offsetWidth,T.classList.add("is-in"));let vt=Math.min(1,Te/Me.lockEnd);Ue("depth",`${(vt*4.8).toFixed(2)} m`,vt);let Je=Ei((Te-Me.lclStart)/(Me.lclEnd-Me.lclStart));Ue("lcl",`${Math.round(Je*100)} %`,Je);let ft=Je*.42+(Te>=Me.electric?.08:0);Ue("press",`${ft.toFixed(2)} MPa`,ft/.5,Te>=Me.electric&&Te<Me.electricEnd);let yt=Ei((Te-(Me.power+4.3))/1.2);Ue("a10",Te<Me.power+4.3?"OFFLINE":yt<1?`LINKING ${Math.round(yt*100)}%`:"NOMINAL",yt),b.classList.toggle("is-on",Te>=Me.syncStart-.2),N.textContent=be.toFixed(1),te.textContent=`HARMONICS \xB1${((100-be)*.12).toFixed(1)}`,Te>=Me.syncStart-.2&&ve(Te,be);let wt=Te>=Me.syncStop&&D==null;wt!==_.classList.contains("is-on")&&(_.classList.toggle("is-on",wt),wt&&setTimeout(()=>_.querySelector("button")?.focus({preventScroll:!0}),50)),wt&&oe-le>2400&&(le=oe,ie.has("confirm")&&ae?.beep(ae.now,1568,.1,.04)),R.classList.toggle("is-on",L),D!=null&&Te>=bg&&Y()}function w(){V||ge||(V=!0,ae=new Ds,ae.resume(),de=new Ns(t),I?.attach(ae),X=performance.now(),h.classList.add("is-gone"))}function x(){D!=null||!V||Ae(performance.now())<Me.syncStop||(D=performance.now(),I?.stop())}function Y(){ge||(ge=!0,a.classList.add("is-leaving"),de?.dispose(),I?.stop(),ae?.humFade(ae.now,.5),setTimeout(()=>r?.(),600))}let j=1200,P=C.querySelector(".evc-skip-bar b"),G=0,me=0,fe=0,ye=0,qe=oe=>{let Te=fe?Math.min(100,oe-fe):16;if(fe=oe,me=G?Math.min(1,me+Te/j):Math.max(0,me-Te/(j*.35)),P.style.transform=`scaleX(${me})`,C.style.setProperty("--evc-hold",String(me)),C.classList.toggle("is-holding",G!==0&&me>0),C.classList.toggle("is-armed",me>0),me>=1){ye=0,C.classList.add("is-done"),Y();return}ye=me>0||G?requestAnimationFrame(qe):0,ye||(fe=0)},xe=oe=>{ge||(!G&&!me&&!ye&&ae?.beep(ae.now,880,.05,.03),G|=oe,ye||(ye=requestAnimationFrame(qe)))},Fe=oe=>{G&=~oe,G===0&&!ye&&me>0&&(ye=requestAnimationFrame(qe))},Ge=oe=>{oe.key==="Escape"&&(oe.preventDefault(),oe.stopPropagation(),Fe(1))},Ve=()=>{Fe(1),Fe(2)},ze=oe=>{if(oe.key==="Escape"){oe.preventDefault(),oe.stopPropagation(),oe.repeat||xe(1);return}if(!V){oe.preventDefault(),w();return}(oe.key==="Enter"||oe.key===" ")&&_.classList.contains("is-on")&&(oe.preventDefault(),x())};window.addEventListener("keydown",ze,!0),window.addEventListener("keyup",Ge,!0),window.addEventListener("blur",Ve),h.addEventListener("click",w),_.querySelector("button").addEventListener("click",x),C.addEventListener("pointerdown",oe=>{oe.preventDefault(),oe.stopPropagation(),C.setPointerCapture?.(oe.pointerId),xe(2)});let nt=oe=>{oe.stopPropagation(),Fe(2)};return C.addEventListener("pointerup",nt),C.addEventListener("pointercancel",nt),C.addEventListener("lostpointercapture",()=>Fe(2)),C.addEventListener("click",oe=>oe.stopPropagation()),h.focus?.(),se=requestAnimationFrame(_e),{seek(oe,{hold:Te=!1}={}){if(w(),D==null){X=performance.now()-oe*1e3,Le=Te?oe:null;for(let[L,be]of we)L<oe-.05&&ie.add(be)}},dispose(){cancelAnimationFrame(se),cancelAnimationFrame(ye),window.removeEventListener("keydown",ze,!0),window.removeEventListener("keyup",Ge,!0),window.removeEventListener("blur",Ve),ke.disconnect(),de?.dispose(),I?.stop(),ae?.close(),ne?.dispose(),De.dispose(),a.remove(),o.remove()}}}

return module.exports;
} });
