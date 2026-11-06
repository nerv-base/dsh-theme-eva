// Unit colours for the cinematic shades that are not a palette role.
//
// The cinematic was drawn in Unit-02's colours. Its main colours read palette
// roles directly; the in-between shades (dark wells, light rims, ink, panel
// lines) are re-hued from the Unit-02 template colour of their family onto the
// active unit's colour of the same role, in OKLCH: hue rotates by the role's hue
// difference (offsets within the family narrowed), chroma scales by the role's chroma ratio and lightness is remapped
// piecewise so the template role lands on the unit role (darks stay dark, lights
// stay light). For Unit-02 every shade comes back unchanged.
import { TEMPLATE_COLORS } from "../shared/units.js";

const toLin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

function oklch(hex) {
  const n = parseInt(String(hex).slice(1, 7), 16);
  const r = toLin(((n >> 16) & 255) / 255);
  const g = toLin(((n >> 8) & 255) / 255);
  const b = toLin((n & 255) / 255);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(A, B), Math.atan2(B, A)];
}

function linear(L, C, h) {
  const A = C * Math.cos(h);
  const B = C * Math.sin(h);
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

// Fraction of a shade's hue offset from its template kept after re-hueing.
const SPREAD = 0.35;

const inGamut = (rgb) => rgb.every((c) => c >= -1e-4 && c <= 1 + 1e-4);

function hex(L, C, h) {
  // gamut-map by reducing chroma (same lightness and hue)
  let rgb = linear(L, C, h);
  if (!inGamut(rgb)) {
    let lo = 0;
    let hi = C;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (inGamut(linear(L, mid, h))) lo = mid;
      else hi = mid;
    }
    rgb = linear(L, lo, h);
  }
  return `#${rgb.map((c) => Math.round(Math.min(1, Math.max(0, toGamma(Math.min(1, Math.max(0, c))))) * 255).toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Build `tone(hex, role)` for a unit: maps a Unit-02 shade of the `role` family
 * ("accent" = crimson armour, "marking" = orange HUD) onto the unit's colours.
 */
export function toner(unit) {
  const roles = {};
  for (const role of ["accent", "marking"]) {
    const from = TEMPLATE_COLORS[role];
    const to = unit.palette[role];
    roles[role] = from.toLowerCase() === String(to).toLowerCase() ? null : [oklch(from), oklch(to)];
  }
  const cache = new Map();
  return (shade, role = "marking") => {
    const map = roles[role];
    if (!map) return shade;
    const key = `${role}${shade}`;
    if (cache.has(key)) return cache.get(key);
    const [[Lt, Ct, ht], [Lu, Cu, hu]] = map;
    const [L, C, h] = oklch(shade);
    const L2 = L <= Lt ? (L * Lu) / Lt : Lu + ((L - Lt) * (1 - Lu)) / (1 - Lt);
    // angular offset from the template hue, wrapped to ±π and narrowed so a
    // family stays clustered around the unit hue (no drift into semantic green/blue)
    const dh = Math.atan2(Math.sin(h - ht), Math.cos(h - ht));
    const out = hex(L2, C * (Cu / Ct), hu + dh * SPREAD);
    cache.set(key, out);
    return out;
  };
}

