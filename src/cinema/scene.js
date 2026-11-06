// three.js entry-plug scene, rendered in a cel-shaded anime style: flat colour
// bands, hard shadow terminator, ink outlines (inverted hull + crease lines)
// and hard camera cuts. Every frame is a pure function of timeline time t
// (seconds), so skipping, freezing at the confirmation gate, and replaying are
// deterministic. All geometry is original and built in code.
import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  EdgesGeometry,
  ExtrudeGeometry,
  Group,
  HalfFloatType,
  LatheGeometry,
  LinearFilter,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Path,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
  SRGBColorSpace,
} from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { scopeAt } from "./monitor.js";
import { toner } from "./tone.js";

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, t) => {
  const x = clamp((t - a) / (b - a));
  return x * x * (3 - 2 * x);
};
const easeOut = (x) => 1 - Math.pow(1 - clamp(x), 3);
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const lerp = (a, b, x) => a + (b - a) * x;

// Timeline anchors (seconds) shared with the HUD.
export const T = {
  insertEnd: 3.3,
  lockStart: 4.4,
  lockEnd: 6.0,
  cut: 6.6,
  lights: 7.0,
  lclStart: 8.4,
  lclEnd: 12.4,
  electric: 11.6,
  electricEnd: 12.9,
  power: 13.1,
  rainbowStart: 15.0,
  rainbowEnd: 19.6,
  syncStart: 20.6,
  syncStop: 25.4,
};

/** Hex → raw sRGB triple (the whole pipeline works in display space, anime-flat). */
const rgb = (hex) => {
  const n = parseInt(String(hex).slice(1), 16);
  return new Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

/* ───────────────────────── textures ───────────────────────── */

function canvasTex(w, h, draw, wrap = false) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const tex = new CanvasTexture(c);
  tex.anisotropy = 4;
  if (wrap) tex.wrapS = tex.wrapT = RepeatWrapping;
  return tex;
}

const COND = "'EVA Condensed','Barlow Condensed','Arial Narrow',sans-serif";

// Plug skin: u runs around the hull, v runs nose (0) → rear (1).
function plugSkin(unit, tone, vOf) {
  return canvasTex(2048, 1024, (g, W, H) => {
    const red = unit.palette.armor;
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, W, H);
    const y = (z) => vOf(z) * H;
    g.fillStyle = red;
    for (const [z0, z1] of [[-2.25, -2.05], [-1.0, -0.92], [1.62, 1.86], [2.0, 2.06]]) g.fillRect(0, y(z0), W, y(z1) - y(z0));
    for (const u of [0.18, 0.68]) g.fillRect(u * W, y(-1.9), 60, y(1.5) - y(-1.9));
    g.strokeStyle = "#20140f";
    g.lineWidth = 5;
    for (const z of [-2.35, -1.7, -0.4, 0.8, 1.5, 2.2]) {
      g.beginPath();
      g.moveTo(0, y(z));
      g.lineTo(W, y(z));
      g.stroke();
    }
    g.lineWidth = 4;
    for (const u of [0, 0.25, 0.5, 0.75]) {
      g.beginPath();
      g.moveTo(u * W + 2, y(-1.7));
      g.lineTo(u * W + 2, y(1.5));
      g.stroke();
    }
    g.lineWidth = 3;
    for (const [u, z0, z1] of [[0.06, -0.3, 0.6], [0.31, 0.95, 1.4], [0.56, -1.55, -0.6], [0.81, -0.3, 0.6], [0.41, -1.55, -1.1]]) {
      const x = u * W;
      g.strokeRect(x, y(z0), 150, y(z1) - y(z0));
      g.fillStyle = "#20140f";
      for (let k = 0; k < 4; k++) g.fillRect(x + 12 + k * 36, y(z1) - 18, 18, 6);
    }
    g.fillStyle = tone("#3a302b", "accent");
    for (const u of [0.12, 0.62]) for (let k = 0; k < 7; k++) g.fillRect(u * W, y(0.85) + k * 16, 110, 7);
    g.textBaseline = "middle";
    g.font = `800 120px ${COND}`;
    for (const u of [0.36, 0.86]) {
      g.save();
      g.translate(u * W, y(0.1));
      g.rotate(-Math.PI / 2);
      g.fillStyle = red;
      g.fillText(unit.id, -60, 0);
      g.restore();
    }
    g.fillStyle = "#20140f";
    g.font = `700 34px ${COND}`;
    for (const u of [0.02, 0.52]) {
      g.save();
      g.translate(u * W + 40, y(-1.65));
      g.rotate(Math.PI / 2);
      g.fillText(`ENTRY PLUG · EVA-${unit.id} · HANDLE WITH CARE`, 0, 0);
      g.restore();
    }
    g.font = `700 26px ${COND}`;
    for (const u of [0.27, 0.77]) g.fillText("CAUTION  LCL HIGH PRESSURE", u * W, y(1.74) + 2);
  });
}

function decalTexture(unit) {
  return canvasTex(512, 512, (g) => {
    g.fillStyle = "#f2ede4";
    g.fillRect(0, 0, 512, 512);
    g.strokeStyle = "#20140f";
    g.lineWidth = 10;
    g.beginPath();
    g.arc(256, 256, 236, 0, Math.PI * 2);
    g.stroke();
    g.lineWidth = 5;
    g.beginPath();
    g.arc(256, 256, 180, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = "#20140f";
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      g.beginPath();
      g.arc(256 + Math.cos(a) * 208, 256 + Math.sin(a) * 208, 9, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = unit.palette.armor;
    g.font = `900 210px ${COND}`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(unit.id, 256, 262);
  });
}

function armorSkin(unit, tone) {
  const line = tone("#2a0c0e", "accent");
  return canvasTex(
    1024,
    1024,
    (g, W, H) => {
      g.fillStyle = "#ffffff";
      g.fillRect(0, 0, W, H);
      g.strokeStyle = line;
      g.lineWidth = 5;
      for (const [x, y, w, h] of [[60, 80, 380, 260], [520, 60, 440, 200], [80, 420, 300, 480], [460, 330, 500, 300], [470, 700, 480, 250]]) g.strokeRect(x, y, w, h);
      g.fillStyle = line;
      for (let i = 0; i < 40; i++) g.fillRect(70 + (i % 10) * 34, 360 + Math.floor(i / 10) * 14, 10, 6);
      g.font = `700 40px ${COND}`;
      g.fillStyle = "#e8dcd0";
      g.fillText(`EVA-${unit.id}`, 560, 300);
      g.font = `700 24px ${COND}`;
      g.fillText("DANGER · KEEP CLEAR OF PLUG HATCH", 480, 680);
    },
    true,
  );
}

function consoleScreen(unit, tone) {
  const phosphor = tone("#ff7a1a"); // same marking phosphor as the monitor cuts
  return canvasTex(512, 256, (g, W, H) => {
    g.fillStyle = "#050806";
    g.fillRect(0, 0, W, H);
    g.strokeStyle = phosphor;
    g.lineWidth = 2;
    g.strokeRect(6, 6, W - 12, H - 12);
    g.fillStyle = phosphor;
    g.font = `700 26px ${COND}`;
    g.fillText(`EVA-${unit.id}  SYNC MONITOR`, 20, 40);
    for (let i = 0; i < 12; i++) {
      g.fillStyle = i < 9 ? "#5cf2a0" : "#e8261c";
      g.fillRect(20 + i * 38, 70, 30, 60 + (i % 4) * 18);
    }
    g.fillStyle = "#5cf2a0";
    g.font = `600 22px ${COND}`;
    g.fillText("A10 · HARMONICS · LCL", 20, 226);
  });
}

/* ───────────────────────── shaders ───────────────────────── */

const toonVert = /* glsl */ `
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
`;

const toonFrag = /* glsl */ `
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
`;

const inkVert = /* glsl */ `
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
`;
const inkFrag = /* glsl */ `
precision highp float;
uniform vec3 uInk;
void main() { gl_FragColor = vec4(uInk, 1.0); }
`;

const skyVert = /* glsl */ `
varying vec3 vWorld;
void main() {
  vWorld = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const skyFrag = /* glsl */ `
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
`;

const fullscreenVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const postFrag = /* glsl */ `
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
`;

const cabinVert = /* glsl */ `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const cabinFrag = /* glsl */ `
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
`;

const surfaceFrag = /* glsl */ `
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
`;

const bubbleVert = /* glsl */ `
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
`;

const bubbleFrag = /* glsl */ `
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
`;

/* ───────────────────────── scene ───────────────────────── */

// Hologram: additive fresnel shell, hue running along the plug axis (red at
// the socket end → blue at the rear), magenta where it is already inside.
const holoVert = /* glsl */ `
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
`;
const holoFrag = /* glsl */ `
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
`;

// Harmonics tube: a plane bent into a tube around a travelling sine curve,
// skinned with a hexagonal cell mesh.
const helixVert = /* glsl */ `
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
`;
const helixFrag = /* glsl */ `
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
`;

export function createScene(canvas, unit) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  // Unit colours: palette roles for the armour, markings and glows; the other
  // warm shades (ink, panel lines, shadows) re-hued from Unit-02 (tone.js).
  const pal = unit.palette;
  const tone = toner(unit);
  const res = new Vector2(1, 1);
  const owned = [];
  const keep = (x) => (owned.push(x), x);

  const makeWorld = (light, fogColor, fog, rim) => ({
    uLightDir: { value: new Vector3(...light).normalize() },
    uFogColor: { value: rgb(fogColor) },
    uFog: { value: new Vector2(...fog) },
    uRim: { value: rgb(rim) },
    uExposure: { value: 1 },
    uLevel: { value: -99 },
  });
  const extWorld = makeWorld([0.55, 0.75, 0.55], "#0d0e14", [16, 50], tone("#ff9a52"));
  const cabWorld = makeWorld([0.2, 0.9, 0.5], "#050304", [3, 9], pal.markingHot);

  function toon(world, { color, shade = "#7c6f88", map, repeat = [1, 1], emissive = "#000000", rimK = 0.5 } = {}) {
    return keep(
      new ShaderMaterial({
        uniforms: {
          ...world,
          uColor: { value: rgb(color) },
          uShade: { value: rgb(shade) },
          uEmissive: { value: rgb(emissive) },
          uMap: { value: map ?? null },
          uUseMap: { value: map ? 1 : 0 },
          uRepeat: { value: new Vector2(...repeat) },
          uRimK: { value: rimK },
        },
        vertexShader: toonVert,
        fragmentShader: toonFrag,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      }),
    );
  }

  const ink = tone("#1a0d0b", "accent");
  const inkUniforms = { uRes: { value: res }, uWidth: { value: 1.6 }, uInk: { value: rgb(ink) } };
  const inkMat = keep(new ShaderMaterial({ uniforms: inkUniforms, vertexShader: inkVert, fragmentShader: inkFrag, side: BackSide }));
  const inkThin = keep(
    new ShaderMaterial({ uniforms: { uRes: inkUniforms.uRes, uInk: inkUniforms.uInk, uWidth: { value: 1.0 } }, vertexShader: inkVert, fragmentShader: inkFrag, side: BackSide }),
  );
  const creaseMat = keep(new LineBasicMaterial({ color: ink }));

  /** Mesh + ink: inverted-hull silhouette and crease lines on hard edges. */
  function inked(geo, mat, { hull = inkMat, crease = 32 } = {}) {
    const mesh = new Mesh(geo, mat);
    if (hull) {
      const g = geo.clone();
      g.deleteAttribute("normal");
      g.deleteAttribute("uv");
      const merged = mergeVertices(g, 1e-3);
      merged.computeVertexNormals();
      g.dispose();
      mesh.add(new Mesh(merged, hull));
    }
    if (crease) mesh.add(new LineSegments(new EdgesGeometry(geo, crease), creaseMat));
    return mesh;
  }

  function chamferRect(w, h, c) {
    const s = new Shape();
    s.moveTo(-w / 2 + c, -h / 2);
    s.lineTo(w / 2 - c, -h / 2);
    s.lineTo(w / 2, -h / 2 + c);
    s.lineTo(w / 2, h / 2 - c);
    s.lineTo(w / 2 - c, h / 2);
    s.lineTo(-w / 2 + c, h / 2);
    s.lineTo(-w / 2, h / 2 - c);
    s.lineTo(-w / 2, -h / 2 + c);
    s.closePath();
    return s;
  }
  const extrude = (shape, depth, bevel = 0.05) =>
    new ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 24 });

  /* ───────── Exterior ───────── */
  const ext = new Scene();
  const skyMat = keep(
    new ShaderMaterial({
      uniforms: { uTop: { value: rgb("#1b2030") }, uBottom: { value: rgb("#08080b") }, uGlow: { value: rgb(tone("#6a2a18", "accent")) } },
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: BackSide,
      depthWrite: false,
    }),
  );
  ext.add(new Mesh(new SphereGeometry(70, 32, 16), skyMat));

  const armorTex = keep(armorSkin(unit, tone));
  const armorMat = toon(extWorld, { color: pal.armor, shade: tone("#5a2a44", "accent"), map: armorTex, repeat: [0.22, 0.22], rimK: 0.35 });
  const armorDark = toon(extWorld, { color: tone("#7a1820", "accent"), shade: tone("#3a1a30", "accent"), rimK: 0.25 });
  const steel = toon(extWorld, { color: "#b9b3ab", shade: "#5c5868", rimK: 0.4 });
  const gunmetal = toon(extWorld, { color: "#3a3638", shade: "#1c1a24", rimK: 0.3 });
  const orangeMat = toon(extWorld, { color: pal.accent, shade: tone("#8a3a2a", "accent"), rimK: 0.2 });
  const black = keep(new MeshBasicMaterial({ color: 0x030303 }));

  const armor = new Group();
  {
    const s = new Shape();
    s.moveTo(-5.2, -4.6);
    s.lineTo(5.2, -4.6);
    s.lineTo(5.8, -1.0);
    s.lineTo(4.6, 3.2);
    s.lineTo(2.2, 4.4);
    s.lineTo(-2.2, 4.4);
    s.lineTo(-4.6, 3.2);
    s.lineTo(-5.8, -1.0);
    s.closePath();
    const hole = new Path();
    hole.absarc(0, 0, 1.05, 0, Math.PI * 2, true);
    s.holes.push(hole);
    const geo = extrude(s, 5.8, 0.18);
    geo.translate(0, 0, -6);
    armor.add(inked(geo, armorMat));
  }
  for (const [x, y, w, h, rot] of [
    [-3.3, 2.0, 2.4, 1.7, -0.12],
    [3.3, 2.0, 2.4, 1.7, 0.12],
    [-3.6, -2.3, 1.9, 2.6, 0.05],
    [3.6, -2.3, 1.9, 2.6, -0.05],
    [0, 3.4, 2.8, 0.8, 0],
    [0, -3.5, 3.0, 1.2, 0],
  ]) {
    const plate = inked(extrude(chamferRect(w, h, 0.32), 0.26, 0.06), armorMat);
    plate.position.set(x, y, 0.15);
    plate.rotation.z = rot;
    armor.add(plate);
  }
  for (const sx of [-1, 1]) {
    for (let k = 0; k < 5; k++) {
      const v = inked(new BoxGeometry(1.2, 0.12, 0.16), gunmetal, { hull: inkThin });
      v.position.set(sx * 3.6, -1.2 - k * 0.32, 0.5);
      armor.add(v);
    }
  }
  const collar = inked(new CylinderGeometry(1.5, 1.6, 0.5, 48, 1), steel);
  collar.rotation.x = Math.PI / 2;
  collar.position.z = 0.25;
  armor.add(collar);
  const collarHole = new Mesh(new CircleGeometry(1.06, 48), black);
  collarHole.position.z = 0.505;
  armor.add(collarHole);
  const lockRing = new Group();
  lockRing.add(inked(new TorusGeometry(1.22, 0.1, 10, 48), gunmetal, { hull: inkThin, crease: 0 }));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tooth = inked(new BoxGeometry(0.22, 0.32, 0.16), orangeMat, { hull: inkThin });
    tooth.position.set(Math.cos(a) * 1.22, Math.sin(a) * 1.22, 0);
    tooth.rotation.z = a;
    lockRing.add(tooth);
  }
  lockRing.position.z = 0.56;
  armor.add(lockRing);
  const doors = [-1, 1].map((sx) => {
    const g = new Group();
    const d = inked(extrude(chamferRect(1.6, 2.9, 0.4), 0.16, 0.04), armorDark);
    g.add(d);
    const stripe = inked(new BoxGeometry(0.16, 2.2, 0.06), orangeMat, { hull: inkThin });
    stripe.position.set(-sx * 0.55, 0, 0.22);
    g.add(stripe);
    g.userData.sx = sx;
    g.position.z = 0.62;
    armor.add(g);
    return g;
  });
  const neck = inked(new CylinderGeometry(1.3, 1.7, 3.0, 24), gunmetal);
  neck.position.set(0, 5.6, -2.4);
  armor.add(neck);
  for (const sx of [-1, 1]) {
    const py = inked(extrude(chamferRect(2.4, 5.0, 0.7), 2.2, 0.12), armorMat);
    py.position.set(sx * 7.4, 0.4, -3.2);
    py.rotation.set(0.1, sx * 0.4, sx * -0.18);
    armor.add(py);
  }
  ext.add(armor);

  const cageMat = toon(extWorld, { color: "#2c2a33", shade: "#15141c", rimK: 0.15 });
  for (const [x, z] of [[-10, -4], [10, -4], [-10, 6], [10, 6], [-6, 14], [6, 14]]) {
    const beam = inked(new BoxGeometry(0.7, 26, 0.7), cageMat, { hull: inkThin, crease: 0 });
    beam.position.set(x, 0, z);
    ext.add(beam);
  }
  for (const [y, z] of [[-5.2, 4], [6.5, -1]]) {
    const walk = inked(new BoxGeometry(22, 0.35, 1.4), cageMat, { hull: inkThin, crease: 0 });
    walk.position.set(0, y, z);
    ext.add(walk);
  }
  for (const a of [0.7, 2.45, 3.85, 5.6]) {
    const rail = inked(new BoxGeometry(0.1, 0.1, 18), gunmetal, { hull: inkThin, crease: 0 });
    rail.position.set(Math.cos(a) * 0.78, Math.sin(a) * 0.78, 9.5);
    ext.add(rail);
  }
  const guideMat = keep(new MeshBasicMaterial({ color: pal.accent, transparent: true, opacity: 0.2, blending: AdditiveBlending, depthWrite: false }));
  const rings = [];
  for (let i = 0; i < 8; i++) {
    const r = new Mesh(new TorusGeometry(0.82, 0.03, 6, 48), keep(guideMat.clone()));
    r.position.z = 2.2 + i * 1.8;
    ext.add(r);
    rings.push(r);
  }

  // Entry plug: lathe body resampled by arc length so the skin maps by z.
  const plug = new Group();
  const ctl = [
    [0.0, -2.75], [0.18, -2.73], [0.33, -2.66], [0.45, -2.54], [0.52, -2.4], [0.55, -2.25],
    [0.55, -1.72], [0.52, -1.7], [0.52, -1.62], [0.55, -1.6],
    [0.55, 1.5], [0.52, 1.52], [0.52, 1.58], [0.55, 1.6],
    [0.55, 2.26], [0.6, 2.3], [0.6, 2.5], [0.56, 2.56], [0.46, 2.6], [0.0, 2.6],
  ].map(([r, y]) => new Vector2(r, y));
  const cum = [0];
  for (let i = 1; i < ctl.length; i++) cum.push(cum[i - 1] + ctl[i].distanceTo(ctl[i - 1]));
  const total = cum[cum.length - 1];
  const profile = [];
  for (let k = 0; k <= 140; k++) {
    const s = (k / 140) * total;
    let i = 1;
    while (i < cum.length - 1 && cum[i] < s) i++;
    const f = (s - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
    profile.push(new Vector2().lerpVectors(ctl[i - 1], ctl[i], f));
  }
  const vOf = (z) => {
    for (let k = 0; k < profile.length; k++) if (profile[k].y >= z) return k / (profile.length - 1);
    return 1;
  };
  const plugGeo = new LatheGeometry(profile, 64);
  plugGeo.rotateX(Math.PI / 2); // lathe axis y → world z (nose at −z)
  const plugTex = keep(plugSkin(unit, tone, vOf));
  const plugMat = toon(extWorld, { color: "#efe9df", shade: "#7d7690", map: plugTex, rimK: 0.55 });
  plug.add(inked(plugGeo, plugMat, { crease: 0 }));
  const decalTex = keep(decalTexture(unit));
  const decal = new Mesh(new CircleGeometry(0.44, 48), toon(extWorld, { color: "#ffffff", shade: "#8a8496", map: decalTex, rimK: 0 }));
  decal.position.z = 2.605;
  plug.add(decal);
  const handle = inked(new TorusGeometry(0.24, 0.045, 8, 24, Math.PI), steel, { hull: inkThin, crease: 0 });
  handle.position.set(0, -0.05, 2.63);
  plug.add(handle);
  for (const a of [Math.PI / 2, -Math.PI / 2]) {
    const rail = inked(new BoxGeometry(0.09, 0.08, 3.4), gunmetal, { hull: inkThin });
    rail.position.set(Math.cos(a) * 0.57, Math.sin(a) * 0.57, -0.1);
    rail.rotation.z = a;
    plug.add(rail);
  }
  for (const [a, z] of [[0.6, -0.8], [2.3, 0.9], [3.7, -0.2], [5.2, 1.1]]) {
    const blister = inked(new BoxGeometry(0.24, 0.05, 0.5), steel, { hull: inkThin });
    blister.position.set(Math.cos(a) * 0.565, Math.sin(a) * 0.565, z);
    blister.rotation.z = a + Math.PI / 2;
    plug.add(blister);
  }
  const plugGlowMat = keep(new MeshBasicMaterial({ color: pal.accentHot, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }));
  const plugGlow = new Mesh(new TorusGeometry(0.6, 0.02, 6, 48), plugGlowMat);
  plugGlow.position.z = 2.3;
  plug.add(plugGlow);
  ext.add(plug);

  const extCam = new PerspectiveCamera(40, 1, 0.1, 150);

  /* ───────── Interior ───────── */
  const cab = new Scene();
  const cabinUniforms = {
    uTime: { value: 0 },
    uLights: { value: 0 },
    uRainbow: { value: 0 },
    uView: { value: 0 },
    uLevel: { value: -3 },
    uElectric: { value: 0 },
    uAccent: { value: rgb(pal.accent) },
  };
  const wallMat = keep(new ShaderMaterial({ uniforms: cabinUniforms, vertexShader: cabinVert, fragmentShader: cabinFrag, side: BackSide }));
  cab.add(new Mesh(new CylinderGeometry(1.6, 1.6, 4.4, 96, 1, true), wallMat));

  const seatMat = toon(cabWorld, { color: "#4a4448", shade: "#1e1a26", rimK: 0.5 });
  const seatPad = toon(cabWorld, { color: tone("#6e2228", "accent"), shade: tone("#2a1020", "accent"), rimK: 0.4 });
  const cabSteel = toon(cabWorld, { color: "#a29c96", shade: "#3c3848", rimK: 0.5 });
  const gripMat = toon(cabWorld, { color: "#2a2628", shade: "#121018", rimK: 0.6 });
  const buttonMat = toon(cabWorld, { color: pal.armor, shade: pal.armorShade, emissive: tone("#2a0404", "accent"), rimK: 0.3 });
  const lampMats = [pal.accent, "#5cf2a0", pal.accent, "#e8261c"].map((c) => keep(new MeshBasicMaterial({ color: c })));

  const cockpit = new Group();
  const lamps = [];
  for (const sx of [-1, 1]) {
    // armrest: side-profile extrusion running forward from the seat
    const s = new Shape();
    s.moveTo(0.55, -0.12);
    s.lineTo(-0.38, -0.12);
    s.quadraticCurveTo(-0.5, -0.1, -0.52, 0.0);
    s.lineTo(-0.5, 0.06);
    s.lineTo(0.55, 0.08);
    s.closePath();
    const geo = extrude(s, 0.16, 0.025);
    geo.translate(0, 0, -0.08);
    geo.rotateY(Math.PI / 2); // profile x → world −z (forward), extrusion → x
    const arm = inked(geo, seatMat, { hull: inkThin });
    arm.position.set(sx * 0.48, -0.62, 0.05);
    cockpit.add(arm);
    const pad = inked(new BoxGeometry(0.14, 0.05, 0.6), seatPad, { hull: inkThin });
    pad.position.set(sx * 0.48, -0.53, 0.2);
    cockpit.add(pad);
    const housing = inked(new CylinderGeometry(0.09, 0.11, 0.08, 20), cabSteel, { hull: inkThin });
    housing.position.set(sx * 0.48, -0.53, -0.4);
    cockpit.add(housing);
    const gripProfile = [[0.0, 0.0], [0.05, 0.0], [0.058, 0.04], [0.05, 0.1], [0.056, 0.16], [0.05, 0.22], [0.04, 0.25], [0.0, 0.26]].map(([r, y]) => new Vector2(r, y));
    const grip = inked(new LatheGeometry(gripProfile, 20), gripMat, { hull: inkThin, crease: 0 });
    grip.position.set(sx * 0.48, -0.5, -0.4);
    grip.rotation.set(-0.55, 0, sx * -0.12);
    cockpit.add(grip);
    for (const bx of [0, sx * -0.035]) {
      const b = inked(new CylinderGeometry(0.018, 0.018, 0.02, 12), buttonMat, { hull: null, crease: 0 });
      b.position.set(sx * 0.48 + bx - sx * 0.03, -0.29, -0.53 + Math.abs(bx));
      b.rotation.x = -0.55;
      cockpit.add(b);
    }
    for (let k = 0; k < 4; k++) {
      const lamp = new Mesh(new BoxGeometry(0.03, 0.012, 0.05), lampMats[k]);
      lamp.position.set(sx * 0.56, -0.505, -0.1 + k * 0.09);
      lamp.userData.k = k + (sx > 0 ? 4 : 0);
      cockpit.add(lamp);
      lamps.push(lamp);
    }
  }
  {
    const s = new Shape();
    s.moveTo(-0.36, 0);
    s.lineTo(0.36, 0);
    s.lineTo(0.3, 0.22);
    s.lineTo(-0.3, 0.22);
    s.closePath();
    const con = inked(extrude(s, 0.12, 0.02), seatMat, { hull: inkThin });
    con.position.set(0, -0.98, -0.72);
    con.rotation.x = -0.9;
    cockpit.add(con);
    const screenMat = keep(new MeshBasicMaterial({ map: keep(consoleScreen(unit, tone)) }));
    const screen = new Mesh(new PlaneGeometry(0.42, 0.14), screenMat);
    screen.position.set(0, -0.84, -0.68);
    screen.rotation.x = -0.75;
    cockpit.add(screen);
  }
  const ribs = new Group();
  for (const y of [-1.75, 1.75]) {
    const r = inked(new TorusGeometry(1.55, 0.05, 8, 64), cabSteel, { hull: inkThin, crease: 0 });
    r.rotation.x = Math.PI / 2;
    r.position.y = y;
    ribs.add(r);
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.25;
    const rib = inked(new BoxGeometry(0.07, 3.6, 0.05), cabSteel, { hull: inkThin, crease: 0 });
    rib.position.set(Math.cos(a) * 1.55, 0, Math.sin(a) * 1.55);
    rib.rotation.y = -a;
    ribs.add(rib);
  }
  cab.add(ribs);
  cab.add(cockpit);

  const surfaceUniforms = { uTime: { value: 0 }, uAlpha: { value: 0 } };
  const surfaceMat = keep(new ShaderMaterial({ uniforms: surfaceUniforms, vertexShader: cabinVert, fragmentShader: surfaceFrag, transparent: true, depthWrite: false, side: DoubleSide }));
  const surface = new Mesh(new PlaneGeometry(3.4, 3.4, 1, 1), surfaceMat);
  surface.rotation.x = -Math.PI / 2;
  cab.add(surface);

  const N = 460;
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N);
  let rs = 7;
  const rnd = () => (rs = (rs * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < N; i++) {
    const r = Math.sqrt(rnd()) * 1.45;
    const a = rnd() * Math.PI * 2;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = rnd() * 4.2;
    pos[i * 3 + 2] = Math.sin(a) * r;
    seed[i] = rnd();
  }
  const bubbleGeo = new BufferGeometry();
  bubbleGeo.setAttribute("position", new BufferAttribute(pos, 3));
  bubbleGeo.setAttribute("aSeed", new BufferAttribute(seed, 1));
  const bubbleUniforms = { uTime: { value: 0 }, uLevel: { value: -3 }, uFlow: { value: 0 } };
  const bubbleMat = keep(new ShaderMaterial({ uniforms: bubbleUniforms, vertexShader: bubbleVert, fragmentShader: bubbleFrag, transparent: true, depthWrite: false }));
  cab.add(new Points(bubbleGeo, bubbleMat));
  const cabCam = new PerspectiveCamera(72, 1, 0.03, 20);

  /* ───────── X-ray scope: the plug seen through the armour as a hologram ───────── */
  const xr = new Scene();
  const holo = (color, { rainbow = 0, k = 1 } = {}) =>
    keep(
      new ShaderMaterial({
        uniforms: { uColor: { value: rgb(color) }, uRainbow: { value: rainbow }, uK: { value: k }, uTime: { value: 0 } },
        vertexShader: holoVert,
        fragmentShader: holoFrag,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        side: DoubleSide,
      }),
    );
  const xPlug = new Group();
  const xPlugMat = holo("#ff3aa8", { rainbow: 1, k: 1.1 });
  xPlug.add(new Mesh(plugGeo, xPlugMat));
  const xHandle = new Mesh(handle.geometry, holo("#7fe8ff", { k: 0.6 }));
  xHandle.position.copy(handle.position);
  xPlug.add(xHandle);
  {
    // depth ruler along the hull
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const z = -2.4 + i * 0.048;
      const l = i % 10 === 0 ? 0.2 : i % 5 === 0 ? 0.13 : 0.07;
      pts.push(0.58, 0.18, z, 0.58 + l, 0.18, z);
    }
    pts.push(0.58, 0.18, -2.4, 0.58, 0.18, 2.4);
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(new Float32Array(pts), 3));
    xPlug.add(new LineSegments(geo, keep(new LineBasicMaterial({ color: 0xfff2e0, transparent: true, opacity: 0.85, blending: AdditiveBlending }))));
    // inner seat outline
    const seatGeo = new BoxGeometry(0.5, 0.18, 1.4);
    const seat = new LineSegments(new EdgesGeometry(seatGeo), keep(new LineBasicMaterial({ color: 0xaaa0a8, transparent: true, opacity: 0.6, blending: AdditiveBlending })));
    seatGeo.dispose();
    seat.position.set(0, -0.05, 0.1);
    xPlug.add(seat);
  }
  xr.add(xPlug);
  const xRings = new Group();
  const xCollar = new Mesh(collar.geometry, holo("#ff4aa0", { k: 1.2 }));
  xCollar.rotation.x = Math.PI / 2;
  xCollar.position.z = 0.25;
  xRings.add(xCollar);
  for (const [r, tube, z, color, teeth] of [
    [1.25, 0.12, 0.5, "#c86bff", 16],
    [1.75, 0.2, 0.1, "#ff2f7a", 24],
    [2.35, 0.1, -0.3, "#ff4ab0", 0],
    [2.85, 0.26, -0.6, "#ff2468", 32],
  ]) {
    const ring = new Mesh(new TorusGeometry(r, tube, 10, 96), holo(color, { k: 1 }));
    ring.position.z = z;
    xRings.add(ring);
    for (let i = 0; i < teeth; i++) {
      if (i % 4 === 3) continue;
      const a = (i / teeth) * Math.PI * 2;
      const tooth = new Mesh(new BoxGeometry(0.34, tube * 2.6, 0.3), holo(color, { k: 0.8 }));
      tooth.position.set(Math.cos(a) * (r + tube * 1.6), Math.sin(a) * (r + tube * 1.6), z);
      tooth.rotation.z = a;
      xRings.add(tooth);
    }
  }
  xr.add(xRings);
  {
    // the armour as a faint wire ghost
    armor.updateMatrixWorld(true);
    const ghost = keep(new LineBasicMaterial({ color: 0x8a6cff, transparent: true, opacity: 0.22, blending: AdditiveBlending, depthWrite: false }));
    armor.traverse((o) => {
      if (!o.isMesh || o.material === inkMat || o.material === inkThin || o === collarHole) return;
      const line = new LineSegments(new EdgesGeometry(o.geometry, 25), ghost);
      line.matrixAutoUpdate = false;
      line.matrix.copy(o.matrixWorld);
      xr.add(line);
    });
    // long guide beams crossing the frame
    const beams = [];
    for (const [a, b] of [
      [[-14, 6, -6], [14, -5, 9]],
      [[-12, -7, 4], [12, 7, -2]],
      [[-3, 12, 3], [2, -12, 1]],
    ]) beams.push(...a, ...b);
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(new Float32Array(beams), 3));
    xr.add(new LineSegments(geo, keep(new LineBasicMaterial({ color: 0x3a6cff, transparent: true, opacity: 0.7, blending: AdditiveBlending }))));
  }
  const xrCam = new PerspectiveCamera(40, 1, 0.1, 80);

  /* ───────── Harmonics scope: pilot and unit waves as hex-mesh tubes ───────── */
  const hx = new Scene();
  const helixGeo = new PlaneGeometry(1, 1, 360, 40);
  const helixTubes = [
    ["#7dff3a", 0.0, 0.0, "unit"],
    ["#2f9bff", 0.32, -0.6, "unit"],
    ["#ff2f86", 0.0, 0.5, "pilot"],
    ["#a874ff", 0.32, -0.2, "pilot"],
  ].map(([color, offset, z, who]) => {
    const mat = keep(
      new ShaderMaterial({
        uniforms: {
          uColor: { value: rgb(color) },
          uPhase: { value: 0 },
          uAmp: { value: 2.4 },
          uK: { value: 0.55 },
          uLen: { value: 26 },
          uRadius: { value: 0.78 },
          uZ: { value: z },
          uTime: { value: 0 },
        },
        vertexShader: helixVert,
        fragmentShader: helixFrag,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        side: DoubleSide,
      }),
    );
    const mesh = new Mesh(helixGeo, mat);
    mesh.frustumCulled = false;
    mesh.userData = { offset, who };
    hx.add(mesh);
    return mesh;
  });
  const hxCam = new PerspectiveCamera(38, 1, 0.1, 80);

  /* ───────── post ───────── */
  const target = new WebGLRenderTarget(2, 2, { type: HalfFloatType, minFilter: LinearFilter, magFilter: LinearFilter, samples: 4 });
  const postUniforms = {
    tScene: { value: target.texture },
    uTime: { value: 0 },
    uSubmerged: { value: 0 },
    uElectric: { value: 0 },
    uFade: { value: 0 },
    uFlash: { value: 0 },
    uSpeed: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
  };
  const postMat = keep(new ShaderMaterial({ uniforms: postUniforms, vertexShader: fullscreenVert, fragmentShader: postFrag, depthTest: false }));
  const post = new Scene();
  post.add(new Mesh(new PlaneGeometry(2, 2), postMat));
  const postCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  function resize(w, h) {
    const width = Math.max(1, w);
    const height = Math.max(1, h);
    renderer.setSize(width, height, false);
    const pr = renderer.getPixelRatio();
    target.setSize(Math.floor(width * pr), Math.floor(height * pr));
    postUniforms.uRes.value.set(width * pr, height * pr);
    res.set(width * pr, height * pr);
    inkUniforms.uWidth.value = 1.8 * pr;
    inkThin.uniforms.uWidth.value = 1.1 * pr;
    for (const cam of [extCam, cabCam, xrCam, hxCam]) {
      cam.aspect = width / height;
      cam.updateProjectionMatrix();
    }
  }

  function shakeAt(t) {
    let s = 0;
    for (const [at, amp] of [
      [T.insertEnd, 0.18],
      [T.lockEnd, 0.22],
      [T.electric, 0.08],
      [T.power, 0.1],
    ]) {
      if (t >= at) s += amp * Math.exp(-(t - at) * 7);
    }
    return s;
  }
  const jitter = (t, k) => Math.sin(t * 91.7 + k * 13.1) * Math.cos(t * 57.3 + k * 7.7);

  function plugZ(t) {
    if (t < T.insertEnd) return lerp(20, 4.0, easeOut(t / T.insertEnd));
    if (t < T.lockStart) return lerp(4.0, 3.2, smooth(T.insertEnd, T.lockStart, t));
    return lerp(3.2, -2.25, easeInOut(clamp((t - T.lockStart) / (T.lockEnd - T.lockStart))));
  }

  const camPos = new Vector3();
  const look = new Vector3();
  function renderExterior(t) {
    const z = plugZ(t);
    plug.position.set(0, 0, z);
    plug.rotation.z = smooth(T.lockStart, T.lockEnd - 0.3, t) * Math.PI * 0.5 + (1 - easeOut(t / T.insertEnd)) * 0.5;
    plugGlowMat.opacity = 0.9 * smooth(T.lockStart, T.lockEnd, t) * (0.6 + 0.4 * Math.sin(t * 20));
    const open = smooth(0.7, 1.6, t) * (1 - smooth(T.lockEnd - 0.55, T.lockEnd, t));
    for (const d of doors) d.position.x = d.userData.sx * lerp(0.8, 2.35, open);
    lockRing.rotation.z = smooth(T.lockStart + 0.4, T.lockEnd - 0.4, t) * (Math.PI / 4);
    rings.forEach((r, i) => {
      const chase = Math.max(0, 1 - Math.abs(((t * 5) % 8) - (7 - i)) * 0.8);
      r.material.opacity = (0.06 + chase * 0.6) * (1 - smooth(T.insertEnd, T.insertEnd + 0.6, t));
    });

    // Hard-cut shots, storyboard style.
    let speed = 0;
    if (t < 1.7) {
      // A: low side close-up racing alongside the plug
      camPos.set(1.55, -0.35, z + 0.9 - t * 0.6);
      look.set(0, 0.05, z - 0.6);
      extCam.fov = 34;
      speed = 1 - smooth(1.3, 1.7, t) * 0.4;
    } else if (t < T.insertEnd) {
      // B: wide over the unit's back, the plug coming in
      const k = (t - 1.7) / (T.insertEnd - 1.7);
      camPos.set(lerp(7.5, 6.8, k), lerp(5.2, 4.8, k), lerp(13, 12, k));
      look.set(0.2, 0.4, 1.5);
      extCam.fov = 38;
      speed = 0.25;
    } else if (t < T.lockStart) {
      // C: tight on the socket, low angle, as the plug seats
      camPos.set(2.2, -1.5, 4.4);
      look.set(0, 0.1, 1.6);
      extCam.fov = 32;
    } else {
      // D: from above and behind: the plug turns, sinks, the hatch closes
      const k = smooth(T.lockStart, T.cut, t);
      camPos.set(lerp(1.4, 0.9, k), lerp(4.2, 3.4, k), lerp(6.0, 5.2, k));
      look.set(0, 0, lerp(0.8, 0.2, k));
      extCam.fov = 36;
    }
    const sh = shakeAt(t);
    camPos.x += jitter(t, 1) * sh;
    camPos.y += jitter(t, 2) * sh;
    extCam.position.copy(camPos);
    extCam.lookAt(look);
    extCam.updateProjectionMatrix();
    postUniforms.uSpeed.value = speed;
    renderer.setRenderTarget(target);
    renderer.render(ext, extCam);
  }

  const lookAtV = new Vector3();
  function renderInterior(t) {
    postUniforms.uSpeed.value = 0;
    cabinUniforms.uTime.value = t;
    const lights = smooth(T.lights - 0.2, T.lights + 0.4, t) * (t < T.lights + 0.5 ? 0.5 + 0.5 * Math.sign(Math.sin(t * 60)) : 1);
    cabinUniforms.uLights.value = lights;
    const level = lerp(-2.4, 2.6, easeInOut(clamp((t - T.lclStart) / (T.lclEnd - T.lclStart))));
    cabinUniforms.uLevel.value = level;
    cabWorld.uLevel.value = level;
    bubbleUniforms.uLevel.value = level;
    bubbleUniforms.uTime.value = t;
    bubbleUniforms.uFlow.value = smooth(T.lclStart, T.lclStart + 0.6, t) * (1 - 0.6 * smooth(T.rainbowEnd, T.syncStop, t));
    surface.position.y = level;
    surface.visible = level < 2.15;
    surfaceUniforms.uTime.value = t;
    surfaceUniforms.uAlpha.value = smooth(T.lclStart, T.lclStart + 0.4, t);
    const electric = t >= T.electric && t < T.electricEnd ? (0.7 + 0.3 * jitter(t, 5)) * (1 - smooth(T.electricEnd - 0.4, T.electricEnd, t)) : 0;
    cabinUniforms.uElectric.value = electric;
    const rainbow = smooth(T.rainbowStart, T.rainbowStart + 1.0, t) * (1 - smooth(T.rainbowEnd - 0.8, T.rainbowEnd, t));
    cabinUniforms.uRainbow.value = rainbow;
    cabinUniforms.uView.value = smooth(T.rainbowEnd - 0.6, T.rainbowEnd + 0.8, t);
    ribs.visible = t < T.rainbowStart + 0.3;
    cabWorld.uExposure.value = 0.18 + 0.82 * lights + 0.5 * electric + 0.3 * rainbow;
    for (const lamp of lamps) lamp.visible = lights > 0.5 && Math.sin(t * (2 + lamp.userData.k * 0.7) + lamp.userData.k) > -0.3;
    const sh = shakeAt(t);
    cabCam.position.set(Math.sin(t * 0.4) * 0.04 + jitter(t, 3) * sh * 0.3, 0.05 + Math.sin(t * 0.9) * 0.02, 0.32);
    const down = smooth(T.lclStart - 0.4, T.lclStart + 0.8, t);
    const follow = smooth(T.lclStart + 1.4, T.lclEnd - 0.6, t);
    const lookY = lerp(lerp(-0.35, -1.1, down), 0.1, follow);
    cabCam.lookAt(lookAtV.set(Math.sin(t * 0.25) * 0.18, lookY, -1.6));
    postUniforms.uSubmerged.value = (level > 0.05 ? 1 : 0) * smooth(0.0, 0.4, level);
    postUniforms.uElectric.value = electric;
    renderer.setRenderTarget(target);
    renderer.render(cab, cabCam);
  }

  function renderXray(t, clock) {
    postUniforms.uSpeed.value = 0;
    postUniforms.uSubmerged.value = 0;
    postUniforms.uElectric.value = 0;
    xPlug.position.set(0, 0, plugZ(t));
    xPlug.rotation.z = plug.rotation.z;
    xRings.rotation.z = -lockRing.rotation.z * 0.5;
    xPlugMat.uniforms.uTime.value = clock;
    const k = smooth(4.5, 5.8, t);
    xrCam.position.set(lerp(6.2, 5.4, k), lerp(2.6, 2.0, k), lerp(7.5, 6.6, k));
    xrCam.up.set(0.32, 1, 0).normalize();
    xrCam.lookAt(0.3, 0.1, 0.9);
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 1);
    renderer.render(xr, xrCam);
  }

  function renderHelix(t, clock, sync) {
    postUniforms.uSpeed.value = 0;
    postUniforms.uSubmerged.value = 0;
    postUniforms.uElectric.value = 0;
    // phase difference between pilot and unit closes as the ratio rises
    const gap = (1 - clamp(sync / 100)) * 2.6;
    const base = clock * 0.9;
    for (const m of helixTubes) {
      const u = m.material.uniforms;
      u.uPhase.value = base + m.userData.offset + (m.userData.who === "pilot" ? gap : 0);
      u.uAmp.value = 2.4 + (m.userData.who === "pilot" ? gap * 0.25 : 0);
    }
    hxCam.position.set(Math.sin(clock * 0.15) * 1.2, 0.6, 17.5);
    hxCam.up.set(0, 1, 0);
    hxCam.lookAt(0, -0.2, 0);
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 1);
    renderer.render(hx, hxCam);
  }

  function update(t, { fade = 1, flash = 0, clock = t, sync = 0 } = {}) {
    postUniforms.uTime.value = t;
    const scope = scopeAt(t);
    if (scope?.kind === "xray") {
      renderXray(t, clock);
    } else if (scope?.kind === "helix") {
      renderHelix(t, clock, sync);
    } else if (t < T.cut) {
      postUniforms.uSubmerged.value = 0;
      postUniforms.uElectric.value = 0;
      renderExterior(t);
    } else {
      renderInterior(t);
    }
    let cutFlash = 0;
    for (const at of [1.7, T.insertEnd, T.lockStart, T.cut]) {
      if (t >= at && t < at + 0.25) cutFlash = Math.max(cutFlash, Math.exp(-(t - at) * 14) * (at === T.cut ? 0.9 : 0.35));
    }
    postUniforms.uFlash.value = Math.max(flash, cutFlash);
    postUniforms.uFade.value = smooth(0, 0.5, t) * fade;
    renderer.setRenderTarget(null);
    renderer.render(post, postCam);
  }

  function dispose() {
    const seen = new Set();
    for (const s of [ext, cab, xr, hx, post]) {
      s.traverse((o) => {
        if (o.geometry && !seen.has(o.geometry)) {
          seen.add(o.geometry);
          o.geometry.dispose();
        }
      });
    }
    for (const x of owned) x.dispose?.();
    target.dispose();
    renderer.dispose();
    renderer.forceContextLoss?.();
  }

  return { resize, update, dispose };
}
