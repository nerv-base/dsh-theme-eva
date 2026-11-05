// three.js entry-plug scene. Every frame is a pure function of timeline time t
// (seconds), so skipping, freezing at the confirmation gate, and replaying are
// deterministic.
import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DoubleSide,
  Fog,
  Group,
  HalfFloatType,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
  AmbientLight,
  DirectionalLight,
  SRGBColorSpace,
} from "three";

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
  power: 14.4,
  rainbowStart: 15.0,
  rainbowEnd: 19.6,
  syncStart: 20.4,
  syncStop: 25.4,
};

function decalTexture(unit) {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#1a1514";
  g.fillRect(0, 0, 512, 512);
  g.strokeStyle = unit.palette.red;
  g.lineWidth = 18;
  g.beginPath();
  g.arc(256, 256, 226, 0, Math.PI * 2);
  g.stroke();
  g.fillStyle = unit.palette.red;
  g.font = "900 230px 'EVA Condensed', 'Barlow Condensed', sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(unit.id, 256, 250);
  g.font = "700 40px 'EVA Condensed', sans-serif";
  g.fillStyle = "#e8e2d7";
  g.fillText("ENTRY PLUG", 256, 398);
  g.fillText(unit.designation.toUpperCase().slice(0, 18), 256, 120);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function stripeTexture(unit) {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = "#d9d3c7";
  g.fillRect(0, 0, 1024, 64);
  g.fillStyle = unit.palette.red;
  for (const [x, w] of [
    [40, 60],
    [140, 14],
    [560, 50],
    [880, 90],
  ])
    g.fillRect(x, 0, w, 64);
  g.fillStyle = "#2a2624";
  g.font = "700 30px 'EVA Condensed', sans-serif";
  g.textBaseline = "middle";
  g.fillText(`EVA-${unit.id}  CAUTION  LCL HIGH PRESSURE`, 220, 33);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

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
uniform float uRainbow;
uniform vec2 uRes;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  // Refraction wobble once the cabin is flooded.
  float w = uSubmerged;
  uv += w * 0.006 * vec2(sin(uv.y * 18.0 + uTime * 1.7), cos(uv.x * 14.0 + uTime * 1.3));
  // Electric tearing.
  float tear = step(0.985 - uElectric * 0.06, hash(vec2(floor(uv.y * 90.0), floor(uTime * 24.0))));
  uv.x += tear * uElectric * 0.03;
  vec2 dir = (uv - 0.5);
  float ab = 0.0025 + 0.004 * w + 0.01 * uElectric;
  vec3 col;
  col.r = texture2D(tScene, uv + dir * ab).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - dir * ab).b;
  // LCL tint: amber-orange, slightly milky.
  vec3 lcl = vec3(1.0, 0.52, 0.2);
  col = mix(col, col * lcl * 1.35 + lcl * 0.035, w * 0.75);
  // Scanlines when electrified / sync HUD.
  float scan = 0.5 + 0.5 * sin(vUv.y * uRes.y * 1.4);
  col *= 1.0 - (0.06 + 0.2 * uElectric) * scan;
  col += uElectric * 0.08 * vec3(1.0, 0.7, 0.4) * step(0.7, hash(vec2(uTime, vUv.y)));
  // Vignette + grain.
  float vig = smoothstep(1.05, 0.25, length(dir * vec2(1.15, 1.0)));
  col *= mix(0.42, 1.0, vig);
  col += (hash(vUv * uRes + uTime) - 0.5) * 0.045;
  col += uFlash * vec3(1.0, 0.82, 0.62);
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

// The cabin wall: panelled interior, indicator lights, the rainbow
// "neural connection" bands, then the hangar view projected on the wall.
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
vec3 hue(float h) {
  return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
}

void main() {
  vec2 p = vec2(vUv.x * 24.0, vUv.y * 10.0);
  vec2 cell = floor(p);
  vec2 f = fract(p);
  float seam = smoothstep(0.0, 0.04, f.x) * smoothstep(1.0, 0.96, f.x) * smoothstep(0.0, 0.05, f.y) * smoothstep(1.0, 0.95, f.y);
  float tone = 0.11 + 0.06 * hash(cell);
  vec3 base = vec3(tone * 1.1, tone * 0.95, tone * 0.9) * mix(0.45, 1.0, seam);
  // Indicator lamps along the panel rows.
  float lamp = step(0.82, hash(cell + 3.1)) * smoothstep(0.12, 0.0, length(f - vec2(0.82, 0.2)));
  float blink = step(0.5, fract(uTime * (0.6 + hash(cell) * 2.0) + hash(cell + 9.0)));
  vec3 lampCol = mix(uAccent, vec3(0.35, 1.0, 0.45), step(0.6, hash(cell + 1.7)));
  vec3 col = base * (0.2 + 1.0 * uLights) + lamp * blink * lampCol * 1.6 * uLights;
  // Light strip around the hatch ring.
  col += uAccent * smoothstep(0.012, 0.0, abs(vUv.y - 0.5)) * 0.6 * uLights;

  // Rainbow neural bands sweeping around the cylinder.
  float bandPhase = vUv.x * 3.0 + vUv.y * 1.6 - uTime * 0.35;
  vec3 rainbow = hue(fract(bandPhase));
  float stripes = 0.55 + 0.45 * sin(vUv.y * 140.0 + uTime * 8.0);
  float flow = smoothstep(0.0, 1.0, sin(vUv.x * 6.2831 * 4.0 + uTime * 2.2) * 0.5 + 0.5);
  vec3 rb = rainbow * (0.35 + 0.65 * flow) * stripes;
  col = mix(col, rb * 1.25, uRainbow);

  // Hangar view (the wall becomes a display of the cage outside).
  vec2 q = vec2(vUv.x * 6.2831, vUv.y);
  float horizon = smoothstep(0.42, 0.44, vUv.y);
  float gantry = step(0.92, fract(vUv.x * 36.0)) * smoothstep(0.75, 0.3, vUv.y);
  float catwalk = smoothstep(0.012, 0.0, abs(fract(vUv.y * 6.0) - 0.5)) * horizon;
  vec3 hangar = mix(vec3(0.05, 0.035, 0.03), vec3(0.16, 0.12, 0.09), horizon);
  hangar += gantry * vec3(0.22, 0.16, 0.12) + catwalk * vec3(0.5, 0.36, 0.2);
  hangar += uAccent * 0.4 * smoothstep(0.05, 0.0, abs(vUv.y - 0.86)) * (0.5 + 0.5 * sin(q.x * 30.0));
  col = mix(col, hangar * 1.4, uView);

  // Electric surges race across the wall.
  float arc = smoothstep(0.02, 0.0, abs(fract(vUv.x * 5.0 + sin(vUv.y * 30.0 + uTime * 40.0) * 0.05) - 0.5));
  col += uElectric * arc * vec3(1.0, 0.75, 0.4) * step(0.55, hash(vec2(floor(uTime * 20.0), floor(vUv.x * 5.0))));

  // Below the LCL line the wall is tinted and dimmed.
  float under = step(vPos.y, uLevel);
  col = mix(col, col * vec3(1.0, 0.55, 0.25) + vec3(0.06, 0.02, 0.0), under * 0.65);
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
  vec3 col = mix(vec3(0.75, 0.28, 0.06), vec3(1.0, 0.72, 0.36), smoothstep(0.4, 1.4, r));
  float edge = smoothstep(0.5, 0.42, length(vUv - 0.5));
  gl_FragColor = vec4(col, uAlpha * edge * (0.45 + 0.25 * r));
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
  float ring = smoothstep(0.5, 0.38, d) * smoothstep(0.18, 0.36, d);
  float spec = smoothstep(0.12, 0.0, length(c - vec2(-0.14, -0.14)));
  float a = (ring * 0.7 + spec) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vec3(1.0, 0.86, 0.66), a);
}
`;

export function createScene(canvas, unit) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  const accent = new Color(unit.palette.accent);
  const red = new Color(unit.palette.red);

  // ---------------- Exterior: the plug enters the spine socket.
  const ext = new Scene();
  ext.background = new Color(0x050404);
  ext.fog = new Fog(0x050404, 8, 34);
  ext.add(new AmbientLight(0x6d5a50, 0.55));
  const key = new DirectionalLight(0xffe2c8, 2.1);
  key.position.set(6, 9, 10);
  ext.add(key);
  const rim = new PointLight(0xff6a22, 30, 18, 1.6);
  rim.position.set(-3, 2, 2);
  ext.add(rim);

  const armorMat = new MeshStandardMaterial({ color: 0x5a1218, metalness: 0.55, roughness: 0.42 });
  const darkMat = new MeshStandardMaterial({ color: 0x141112, metalness: 0.7, roughness: 0.5 });
  const armor = new Group();
  const back = new Mesh(new BoxGeometry(9, 7, 4), armorMat);
  back.position.set(0, 0, -2);
  armor.add(back);
  for (const [x, y, w, h] of [
    [-3.2, 2.4, 2.2, 1.8],
    [3.2, 2.4, 2.2, 1.8],
    [-3.4, -2.2, 1.6, 2.4],
    [3.4, -2.2, 1.6, 2.4],
  ]) {
    const plate = new Mesh(new BoxGeometry(w, h, 0.4), armorMat);
    plate.position.set(x, y, 0.2);
    armor.add(plate);
  }
  const socket = new Mesh(new CylinderGeometry(1.15, 1.15, 0.6, 48, 1, true), darkMat);
  socket.rotation.x = Math.PI / 2;
  socket.position.z = 0.1;
  armor.add(socket);
  const hole = new Mesh(new SphereGeometry(0.98, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new MeshBasicMaterial({ color: 0x000000, side: BackSide }));
  hole.rotation.x = -Math.PI / 2;
  hole.position.z = -0.1;
  armor.add(hole);
  const glowMat = new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.2, blending: AdditiveBlending });
  const socketRing = new Mesh(new RingGeometry(1.0, 1.32, 64), glowMat);
  socketRing.position.z = 0.42;
  armor.add(socketRing);
  const clampMat = new MeshStandardMaterial({ color: 0xc8c0b4, metalness: 0.85, roughness: 0.3 });
  const clamps = [];
  for (let i = 0; i < 4; i++) {
    const c = new Mesh(new BoxGeometry(0.42, 0.9, 0.5), clampMat);
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    c.userData.a = a;
    c.position.set(Math.cos(a) * 1.9, Math.sin(a) * 1.9, 0.55);
    c.rotation.z = a;
    armor.add(c);
    clamps.push(c);
  }
  ext.add(armor);

  // Guide rails / tube rings the plug slides through.
  const guideMat = new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.12, blending: AdditiveBlending });
  const rings = [];
  for (let i = 0; i < 9; i++) {
    const r = new Mesh(new TorusGeometry(0.95, 0.025, 8, 64), guideMat.clone());
    r.position.z = 1.6 + i * 1.5;
    ext.add(r);
    rings.push(r);
  }
  const railGeo = new BoxGeometry(0.06, 0.06, 14);
  for (const a of [0.6, 2.5, 3.7, 5.6]) {
    const rail = new Mesh(railGeo, darkMat);
    rail.position.set(Math.cos(a) * 1.05, Math.sin(a) * 1.05, 8);
    ext.add(rail);
  }

  // The entry plug.
  const plug = new Group();
  const shellMat = new MeshStandardMaterial({ map: stripeTexture(unit), metalness: 0.45, roughness: 0.36 });
  const shell = new Mesh(new CylinderGeometry(0.55, 0.55, 5.2, 48, 1, true), shellMat);
  shell.rotation.x = Math.PI / 2;
  plug.add(shell);
  const capMat = new MeshStandardMaterial({ map: decalTexture(unit), metalness: 0.4, roughness: 0.45 });
  const cap = new Mesh(new CylinderGeometry(0.55, 0.55, 0.1, 48), [
    new MeshStandardMaterial({ color: 0xbdb5a8, metalness: 0.6, roughness: 0.35 }),
    capMat,
    darkMat,
  ]);
  cap.rotation.x = Math.PI / 2;
  cap.position.z = 2.62;
  plug.add(cap);
  const nose = new Mesh(new SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), clampMat);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -2.6;
  plug.add(nose);
  for (const z of [-1.6, 0.9, 2.2]) {
    const band = new Mesh(new TorusGeometry(0.565, 0.035, 8, 48), new MeshStandardMaterial({ color: red, metalness: 0.3, roughness: 0.5 }));
    band.position.z = z;
    plug.add(band);
  }
  const plugLight = new PointLight(0xff8a3d, 0, 4, 2);
  plugLight.position.set(0, 0, 3.2);
  plug.add(plugLight);
  ext.add(plug);

  const extCam = new PerspectiveCamera(42, 1, 0.1, 100);

  // ---------------- Interior: the cabin.
  const cab = new Scene();
  cab.background = new Color(0x020101);
  const cabinUniforms = {
    uTime: { value: 0 },
    uLights: { value: 0 },
    uRainbow: { value: 0 },
    uView: { value: 0 },
    uLevel: { value: -3 },
    uElectric: { value: 0 },
    uAccent: { value: accent },
  };
  const wall = new Mesh(
    new CylinderGeometry(1.6, 1.6, 4.4, 96, 1, true),
    new ShaderMaterial({ uniforms: cabinUniforms, vertexShader: cabinVert, fragmentShader: cabinFrag, side: BackSide }),
  );
  cab.add(wall);
  cab.add(new AmbientLight(0xffd7bf, 0.4));
  const cabLight = new PointLight(0xffb27a, 0, 8, 1.4);
  cabLight.position.set(0, 1.4, 0.4);
  cab.add(cabLight);
  const seatMat = new MeshStandardMaterial({ color: 0x2b2524, metalness: 0.4, roughness: 0.6 });
  const seat = new Group();
  const seatBack = new Mesh(new BoxGeometry(0.8, 1.1, 0.12), seatMat);
  seatBack.position.set(0, -0.1, 1.05);
  seatBack.rotation.x = 0.3;
  seat.add(seatBack);
  const seatBase = new Mesh(new BoxGeometry(0.8, 0.12, 0.7), seatMat);
  seatBase.position.set(0, -0.85, 0.55);
  seat.add(seatBase);
  const gripMat = new MeshStandardMaterial({ color: 0x8a1c22, metalness: 0.5, roughness: 0.4, emissive: 0x200404 });
  for (const x of [-0.62, 0.62]) {
    const arm = new Mesh(new BoxGeometry(0.12, 0.1, 0.8), seatMat);
    arm.position.set(x * 0.9, -0.62, -0.05);
    seat.add(arm);
    const grip = new Mesh(new CylinderGeometry(0.06, 0.07, 0.32, 16), gripMat);
    grip.position.set(x * 0.72, -0.46, -0.36);
    grip.rotation.x = -0.5;
    seat.add(grip);
  }
  // Low console arc in front of the pilot with a lit edge.
  const consoleMesh = new Mesh(new CylinderGeometry(1.05, 1.15, 0.22, 48, 1, false, Math.PI * 0.72, Math.PI * 0.56), seatMat);
  consoleMesh.position.set(0, -0.92, 0.25);
  seat.add(consoleMesh);
  const edgeMat = new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.0, blending: AdditiveBlending });
  const edge = new Mesh(new TorusGeometry(1.06, 0.008, 6, 64, Math.PI * 0.56), edgeMat);
  edge.rotation.set(Math.PI / 2, 0, Math.PI * 0.22);
  edge.position.set(0, -0.8, 0.25);
  seat.add(edge);
  cab.add(seat);

  const surfaceUniforms = { uTime: { value: 0 }, uAlpha: { value: 0 } };
  const surface = new Mesh(
    new PlaneGeometry(3.4, 3.4, 1, 1),
    new ShaderMaterial({
      uniforms: surfaceUniforms,
      vertexShader: cabinVert,
      fragmentShader: surfaceFrag,
      transparent: true,
      depthWrite: false,
      side: DoubleSide,
    }),
  );
  surface.rotation.x = -Math.PI / 2;
  cab.add(surface);

  const N = 520;
  const pos = new Float32Array(N * 3);
  const seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const r = Math.sqrt(Math.random()) * 1.45;
    const a = Math.random() * Math.PI * 2;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = Math.random() * 4.2;
    pos[i * 3 + 2] = Math.sin(a) * r;
    seed[i] = Math.random();
  }
  const bubbleGeo = new BufferGeometry();
  bubbleGeo.setAttribute("position", new BufferAttribute(pos, 3));
  bubbleGeo.setAttribute("aSeed", new BufferAttribute(seed, 1));
  const bubbleUniforms = { uTime: { value: 0 }, uLevel: { value: -3 }, uFlow: { value: 0 } };
  const bubbles = new Points(
    bubbleGeo,
    new ShaderMaterial({
      uniforms: bubbleUniforms,
      vertexShader: bubbleVert,
      fragmentShader: bubbleFrag,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    }),
  );
  cab.add(bubbles);
  const cabCam = new PerspectiveCamera(70, 1, 0.05, 20);

  // ---------------- Post-processing.
  const target = new WebGLRenderTarget(2, 2, { type: HalfFloatType, minFilter: LinearFilter, magFilter: LinearFilter });
  const postUniforms = {
    tScene: { value: target.texture },
    uTime: { value: 0 },
    uSubmerged: { value: 0 },
    uElectric: { value: 0 },
    uFade: { value: 0 },
    uFlash: { value: 0 },
    uRainbow: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
  };
  const post = new Scene();
  post.add(new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({ uniforms: postUniforms, vertexShader: fullscreenVert, fragmentShader: postFrag, depthTest: false })));
  const postCam = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  let width = 1;
  let height = 1;
  function resize(w, h) {
    width = Math.max(1, w);
    height = Math.max(1, h);
    renderer.setSize(width, height, false);
    const pr = renderer.getPixelRatio();
    target.setSize(Math.floor(width * pr), Math.floor(height * pr));
    postUniforms.uRes.value.set(width * pr, height * pr);
    for (const cam of [extCam, cabCam]) {
      cam.aspect = width / height;
      cam.updateProjectionMatrix();
    }
  }

  /** Shake amplitude from impact moments. */
  function shakeAt(t) {
    let s = 0;
    for (const [at, amp] of [
      [T.insertEnd, 0.22],
      [T.lockEnd, 0.3],
      [T.electric, 0.08],
      [T.power, 0.1],
    ]) {
      if (t >= at) s += amp * Math.exp(-(t - at) * 6);
    }
    return s;
  }

  function renderExterior(t) {
    // Plug slide-in, then lock with a 90 degree turn.
    const slide = easeOut(t / T.insertEnd);
    const lock = easeInOut(clamp((t - T.lockStart) / (T.lockEnd - T.lockStart)));
    plug.position.z = lerp(lerp(15, 3.4, slide), 0.15, lock);
    plug.rotation.z = lock * Math.PI * 0.5 + (1 - slide) * 0.6;
    plugLight.intensity = 6 * smooth(T.lockStart, T.lockEnd, t);
    for (const c of clamps) {
      const close = smooth(T.lockEnd - 0.5, T.lockEnd, t);
      const r = lerp(1.9, 0.86, close);
      c.position.set(Math.cos(c.userData.a) * r, Math.sin(c.userData.a) * r, lerp(0.55, 0.62, close));
    }
    rings.forEach((r, i) => {
      const chase = Math.max(0, 1 - Math.abs(((t * 4.2) % 9) - (8 - i)) * 0.7);
      r.material.opacity = 0.08 + chase * 0.55 * (1 - smooth(T.lockEnd, T.cut, t) * 0.6);
    });
    glowMat.opacity = 0.18 + 0.6 * smooth(T.lockStart, T.lockEnd, t) * (0.7 + 0.3 * Math.sin(t * 12));
    // Camera: side tracking shot that swings behind the plug for the lock.
    const sw = easeInOut(clamp((t - 2.2) / 3.4));
    const camPos = new Vector3(lerp(6.5, 2.6, sw), lerp(1.8, 1.4, sw), lerp(plug.position.z + 4, 6.8, sw));
    const look = new Vector3(0, 0, lerp(plug.position.z - 1, 0.2, sw));
    const sh = shakeAt(t);
    camPos.x += (Math.random() - 0.5) * sh;
    camPos.y += (Math.random() - 0.5) * sh;
    extCam.position.copy(camPos);
    extCam.lookAt(look);
    renderer.setRenderTarget(target);
    renderer.render(ext, extCam);
  }

  function renderInterior(t) {
    cabinUniforms.uTime.value = t;
    cabinUniforms.uLights.value = smooth(T.lights - 0.2, T.lights + 0.4, t) * (t < T.lights + 0.5 ? 0.5 + 0.5 * Math.sign(Math.sin(t * 60)) : 1);
    const level = lerp(-2.4, 2.6, easeInOut(clamp((t - T.lclStart) / (T.lclEnd - T.lclStart))));
    cabinUniforms.uLevel.value = level;
    bubbleUniforms.uLevel.value = level;
    bubbleUniforms.uTime.value = t;
    bubbleUniforms.uFlow.value = smooth(T.lclStart, T.lclStart + 0.6, t) * (1 - 0.6 * smooth(T.rainbowEnd, T.syncStop, t));
    surface.position.y = level;
    surface.visible = level < 2.15;
    surfaceUniforms.uTime.value = t;
    surfaceUniforms.uAlpha.value = smooth(T.lclStart, T.lclStart + 0.4, t);
    const electric = t >= T.electric && t < T.electricEnd ? (0.6 + 0.4 * Math.random()) * (1 - smooth(T.electricEnd - 0.4, T.electricEnd, t)) : 0;
    cabinUniforms.uElectric.value = electric;
    cabinUniforms.uRainbow.value = smooth(T.rainbowStart, T.rainbowStart + 1.2, t) * (1 - smooth(T.rainbowEnd - 0.8, T.rainbowEnd, t));
    cabinUniforms.uView.value = smooth(T.rainbowEnd - 0.6, T.rainbowEnd + 0.8, t);
    cabLight.intensity = 4 * cabinUniforms.uLights.value + 6 * electric;
    edgeMat.opacity = 0.75 * cabinUniforms.uLights.value + 0.25 * cabinUniforms.uRainbow.value;
    // Pilot-eye camera: slow breathing drift, look up as the liquid rises.
    const sh = shakeAt(t);
    const head = level > 0.05 ? 1 : 0;
    cabCam.position.set(Math.sin(t * 0.4) * 0.05 + (Math.random() - 0.5) * sh * 0.4, 0.05 + Math.sin(t * 0.9) * 0.02, 0.35);
    // Look down at the feet as LCL floods in, follow the surface up past the eyes.
    const down = smooth(T.lclStart - 0.4, T.lclStart + 0.8, t);
    const follow = smooth(T.lclStart + 1.4, T.lclEnd - 0.6, t);
    const lookY = lerp(lerp(-0.2, -1.1, down), 0.15, follow);
    cabCam.lookAt(new Vector3(Math.sin(t * 0.25) * 0.2, lookY, -1.6));
    postUniforms.uSubmerged.value = head * smooth(0.0, 0.4, level) ;
    postUniforms.uElectric.value = electric;
    renderer.setRenderTarget(target);
    renderer.render(cab, cabCam);
  }

  function update(t, { fade = 1, flash = 0 } = {}) {
    postUniforms.uTime.value = t;
    if (t < T.cut) {
      postUniforms.uSubmerged.value = 0;
      postUniforms.uElectric.value = 0;
      renderExterior(t);
    } else {
      renderInterior(t);
    }
    // Brief white-out on the cut, and on caller request.
    const cutFlash = t >= T.cut - 0.12 && t < T.cut + 0.5 ? Math.exp(-Math.abs(t - T.cut) * 9) * 0.9 : 0;
    const openFade = smooth(0, 0.8, t);
    postUniforms.uFlash.value = Math.max(flash, cutFlash);
    postUniforms.uFade.value = openFade * fade;
    renderer.setRenderTarget(null);
    renderer.render(post, postCam);
  }

  function dispose() {
    const seen = new Set();
    for (const s of [ext, cab, post]) {
      s.traverse((o) => {
        if (o.geometry && !seen.has(o.geometry)) {
          seen.add(o.geometry);
          o.geometry.dispose();
        }
        const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
        for (const m of mats) {
          if (seen.has(m)) continue;
          seen.add(m);
          m.map?.dispose();
          m.dispose();
        }
      });
    }
    target.dispose();
    renderer.dispose();
    renderer.forceContextLoss?.();
  }

  return { resize, update, dispose };
}
