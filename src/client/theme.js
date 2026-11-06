// Theme registration (eva-02, dark-only) and the restrained everyday skin.
import { DEFAULT_UNIT } from "../shared/units.js";
import backdropRight from "./backdrop-right.svg";
import backdropLeft from "./backdrop-left.svg";
import markSvg from "./mark.svg";

const svgUrl = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;

export const FONT_BASE = "/eva-theme-assets";

/** Crimson-tinted neutral ramp replacing the bluish ramp the dark aliases reference. */
function ramp() {
  return {
    "--dsw-static-neutral-bluish-00": "#fff7f2",
    "--dsw-static-neutral-bluish-50": "#ece4da",
    "--dsw-static-neutral-bluish-60": "#e5dcd2",
    "--dsw-static-neutral-bluish-75": "#ddd3c9",
    "--dsw-static-neutral-bluish-100": "#d4c9bf",
    "--dsw-static-neutral-bluish-150": "#c9bdb3",
    "--dsw-static-neutral-bluish-200": "#bdb1a8",
    "--dsw-static-neutral-bluish-300": "#bcaea6",
    "--dsw-static-neutral-bluish-400": "#a59a93",
    "--dsw-static-neutral-bluish-500": "#8b7f7a",
    "--dsw-static-neutral-bluish-600": "#6f6462",
    "--dsw-static-neutral-bluish-700": "#4b3c3d",
    "--dsw-static-neutral-bluish-750": "#3b2e30",
    "--dsw-static-neutral-bluish-800": "#2b2123",
    "--dsw-static-neutral-bluish-850": "#1e1719",
    "--dsw-static-neutral-bluish-875": "#171214",
    "--dsw-static-neutral-bluish-900": "#131012",
    "--dsw-static-neutral-bluish-950": "#0b090a",
    "--dsw-static-neutral-bluish-1000": "#060405",
  };
}

/**
 * Accent ramps the shipped aliases and plugins reference directly: DeepSeek blue
 * becomes Unit-02 orange, the generic blue becomes armour red, plain neutrals get
 * the same crimson tint as the bluish ramp, and the semantic green/amber/red ramps
 * move onto the EVA phosphor values.
 */
function accentRamps() {
  return {
    "--dsw-static-deepseek-50": "#2a170e",
    "--dsw-static-deepseek-100": "#3a1f12",
    "--dsw-static-deepseek-200": "#5a2e17",
    "--dsw-static-deepseek-300": "#ffc7a3",
    "--dsw-static-deepseek-400": "#ff8a3d",
    "--dsw-static-deepseek-450": "#f6762d",
    "--dsw-static-deepseek-500": "#f06a22",
    "--dsw-static-deepseek-600": "#c9541a",
    "--dsw-static-deepseek-700-delete": "#9a3f14",
    "--dsw-static-deepseek-800": "#4a2412",
    "--dsw-static-deepseek-900": "#2a170e",
    "--dsw-static-blue-50": "#2a0c0f",
    "--dsw-static-blue-50p": "#2a0c0f",
    "--dsw-static-blue-75": "#33101a",
    "--dsw-static-blue-100": "#3d1418",
    "--dsw-static-blue-300": "#ffa58f",
    "--dsw-static-blue-400": "#ff6a52",
    "--dsw-static-blue-450": "#f0413c",
    "--dsw-static-blue-500": "#d8262e",
    "--dsw-static-blue-600": "#b62026",
    "--dsw-static-blue-800": "#7d1a18",
    "--dsw-static-blue-900": "#4e1218",
    "--dsw-static-blue-950": "#2a0c0f",
    "--dsw-static-neutral-50": "#ece4da",
    "--dsw-static-neutral-100": "#d4c9bf",
    "--dsw-static-neutral-150": "#c9bdb3",
    "--dsw-static-neutral-200": "#bdb1a8",
    "--dsw-static-neutral-250": "#b0a49c",
    "--dsw-static-neutral-300": "#a59a93",
    "--dsw-static-neutral-400": "#8b7f7a",
    "--dsw-static-neutral-500": "#776b67",
    "--dsw-static-neutral-550": "#655957",
    "--dsw-static-neutral-600": "#54484a",
    "--dsw-static-neutral-700": "#3b2e30",
    "--dsw-static-neutral-800": "#2b2123",
    "--dsw-static-neutral-850": "#1e1719",
    "--dsw-static-neutral-900": "#0e0b0c",
    "--dsw-static-green-400": "#5fe79c",
    "--dsw-static-green-500": "#3fe08a",
    "--dsw-static-green-500-a08": "#3fe08a14",
    "--dsw-static-green-500-a12": "#3fe08a1f",
    "--dsw-static-green-900": "#0d2e1f",
    "--dsw-static-amber-400": "#f5c96a",
    "--dsw-static-amber-500": "#f0b53a",
    "--dsw-static-amber-600": "#d99a1e",
    "--dsw-static-amber-900": "#2e2310",
    "--dsw-static-red-400": "#f0413c",
    "--dsw-static-red-400-a12": "#f0413c1f",
    "--dsw-static-red-500": "#e0373a",
    "--dsw-static-red-600": "#d8262e",
    "--dsw-static-red-600-a08": "#d8262e14",
    "--dsw-static-red-900": "#4e1218",
  };
}

/** Syntax colours: orange constants, red keywords, soft phosphor strings. */
function codeTokens() {
  return {
    "--shiki-token-constant": "#ff9a52",
    "--shiki-token-string": "#7fdca4",
    "--shiki-token-comment": "#7d706b",
    "--shiki-token-keyword": "#ff5a52",
    "--shiki-token-parameter": "#f5c96a",
    "--shiki-token-function": "#ffc08f",
    "--shiki-token-string-expression": "#a8ecc4",
    "--shiki-token-punctuation": "#bdb1a8",
    "--shiki-token-link": "#ff8a3d",
  };
}

const alpha = (hex, a) => `color-mix(in srgb, ${hex} ${a}%, transparent)`;

export function themeTokens(unit = DEFAULT_UNIT) {
  const p = unit.palette;
  return {
    ...ramp(),
    ...accentRamps(),
    ...codeTokens(),
    "--dsw-alias-bg-base": p.bg,
    "--dsw-alias-bg-layer-1": "#151113",
    "--dsw-alias-bg-layer-2": p.raised,
    "--dsw-alias-bg-layer-3": "#251c1e",
    "--dsw-alias-bg-overlay": "#3b2e30",
    "--dsw-alias-bg-module-platform": "#221a1c",
    "--dsw-alias-bg-document-preview": p.bg,
    "--dsw-alias-bg-document-selection": alpha(p.accent, 36),
    "--dsw-alias-border-l1": "#ff5a5a12",
    "--dsw-alias-border-l2": "#ff6a6a21",
    "--dsw-alias-border-l3": "#ff7a7a2e",
    "--dsw-alias-border-l4": "#ff8a8a3b",
    "--dsw-alias-brand-primary": p.accent,
    "--dsw-alias-brand-text": p.text,
    "--dsw-alias-button-primary-hover": p.accentHot,
    "--dsw-alias-button-contrast-fill": p.text,
    "--dsw-alias-label-primary": p.text,
    "--dsw-alias-label-primary-bluish": p.text,
    "--dsw-alias-label-secondary": "#c2b6ad",
    "--dsw-alias-label-tertiary": p.muted,
    "--dsw-alias-label-caption": p.faint,
    "--dsw-alias-label-primary-foreground": "#fff4ee",
    "--dsw-alias-link": "#ff8a3d",
    "--dsw-alias-state-error-primary": p.redHot,
    "--dsw-alias-state-error-secondary": p.redHot,
    "--dsw-alias-state-idle-primary": p.faint,
    "--dsw-alias-state-success-primary": p.green,
    "--dsw-alias-state-success-secondary": p.greenHot,
    "--dsw-alias-state-warn-primary": p.warn,
    "--dsw-alias-state-warn-secondary": "#f5c96a",
    "--dsw-alias-state-business-primary": p.orange,
    "--dsw-alias-state-business-tertiary": alpha(p.orange, 14),
    "--dsw-alias-interactive-bg-hover": "#ff8a8a12",
    "--dsw-alias-interactive-bg-active": "#ff8a8a21",
    "--dsw-alias-interactive-bg-hover-solid": "#251c1e",
    "--dsw-alias-markdown-code-block": "#0e0b0c",
    "--dsw-alias-markdown-code-block-banner": "#171214",
    "--dsw-alias-markdown-inline-code": alpha(p.orange, 12),
    "--dsw-alias-scrollbar-bg-l2": alpha(p.accent, 30),
    "--dsw-alias-scrollbar-hover-l2": alpha(p.accent, 55),
    "--dsw-alias-switch-thumb": p.muted,
    "--dsw-alias-toast-bg": "#2a1c1f",
    "--dsw-focus-ring-color": p.orange,
    "--dsw-alias-brand-primary-new-colorprimary-new-color": p.accent,
    "--dsw-alias-button-info-fill": p.orange,
    "--dsw-alias-button-info-hover": "#ff8a3d",
    "--dsw-alias-label-deep-diving": "#e8823f",
    "--dsw-alias-label-deep-diving-shimmer": "#ffd3ad",
    "--dsw-alias-interactive-bg-hover-accent": "#ff8a8a3d",
    "--dsw-alias-bg-mask-drop": "#2a1015b3",
    "--dsw-alias-tooltip-bg": "#2a1c1f",
    "--dsw-alias-state-warn-label": p.warn,
    "--dsw-alias-state-success-tertiary": p.greenDeep,
    "--dsw-alias-state-warn-tertiary": "#2e2310",
    "--dsw-menu-surface-fill": "#2a1c1fcc",
    "--dsw-alias-menu-group-header-fill": "#241a1cf0",
    "--dsw-specific-selector": "#2b2123",
    "--dsw-specific-bubble-highlight": "#4a1a20",
    "--dsw-specific-sidebar-fill": p.sidebar,
    "--dsw-specific-sidebar-nav-item-active": p.redDeep,
    "--dsw-specific-sidebar-nav-item-hover": "#24141a",
    "--dsw-specific-sidebar-nav-item-active-accent": p.orange,
    "--dsw-specific-input-major": "#141012",
    "--dsw-specific-menu": "#1a1315f5",
    "--dsw-specific-bubble": "#2a1216",
    "--dsw-specific-tip": "#2a1c1f",
    // Armour-plate geometry: real radii, rendered as chamfers (corner-shape: bevel).
    "--dsw-radius-xs": "2px",
    "--dsw-radius-sm": "4px",
    "--dsw-radius-md": "6px",
    "--dsw-radius-lg": "8px",
    "--dsw-radius-xl": "10px",
    "--dsw-radius-panel": "14px",
    "--dsw-corner-shape": "bevel",
    "--eva-accent": p.accent,
    "--eva-accent-hot": p.accentHot,
    "--eva-red": p.red,
    "--eva-red-deep": p.redDeep,
    "--eva-green": p.green,
    "--eva-green-hot": p.greenHot,
    "--eva-green-dim": p.greenDim,
    "--eva-green-deep": p.greenDeep,
    "--eva-orange": p.orange,
    "--eva-warn": p.warn,
    "--eva-text": p.text,
    "--eva-font-mincho": '"EVA Mincho", "Noto Serif CJK JP", "Hiragino Mincho ProN", "Songti SC", serif',
    "--eva-font-condensed": '"EVA Condensed", "Barlow Condensed", "DIN Condensed", "Arial Narrow", sans-serif',
  };
}

export function fontFaceCss() {
  return `
@font-face{font-family:"EVA Mincho";src:url("${FONT_BASE}/eva-mincho.woff2") format("woff2");font-weight:900;font-style:normal;font-display:swap}
@font-face{font-family:"EVA Condensed";src:url("${FONT_BASE}/eva-condensed-medium.woff2") format("woff2");font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:"EVA Condensed";src:url("${FONT_BASE}/eva-condensed-semibold.woff2") format("woff2");font-weight:600 800;font-style:normal;font-display:swap}
`;
}

/** Exact hashed-class token match ("_name" as a whole class token), version-hash agnostic. */
const tok = (name) => `:is([class*="_${name} "],[class$="_${name}"])`;

/**
 * Everyday skin, active only while body[data-eva-theme] is set.
 * Unit-02 language: crimson armour for identity and actions, eye-green
 * phosphor for "system alive" signals. Reading surfaces stay calm.
 */
export function skinCss(unit = DEFAULT_UNIT) {
  const B = "body[data-eva-theme]";
  const R = "var(--eva-accent)";
  const RH = "var(--eva-accent-hot)";
  const G = "var(--eva-green)";
  const md = `${B} [class*="_markdown_"]`;
  return `
/* ── sidebar: crimson armour plate ── */
${B} [class*="_sidebarCol"]{
  background:
    linear-gradient(165deg, #6a141ce8 0, #33101599 190px, #0f0a0c00 400px),
    repeating-linear-gradient(0deg, #ffffff05 0 1px, transparent 1px 3px),
    var(--dsw-specific-sidebar-fill) !important;
  border-right:1px solid #3a1418 !important;
  box-shadow:inset -1px 0 0 #f06a2214;
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *){
  background:linear-gradient(90deg,#d8262e2e,#d8262e12) !important;
  border:1px solid #d8262e66 !important;
  border-radius:8px !important;
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *):hover{background:linear-gradient(90deg,#d8262e55,#d8262e22) !important;border-color:${RH} !important}
${B} ${tok("sessionRow")}${tok("selected")},
${B} ${tok("panelRow")}${tok("panelActive")}{
  background:linear-gradient(90deg,#d8262e38,#d8262e0a 70%) !important;
  box-shadow:inset 2px 0 0 var(--eva-orange);
}
${B} ${tok("sessionRow")}:hover:not(${tok("selected")}){background:#ff6a6a10 !important}
${B} [class*="_sidebarCol"] [aria-current="page"],
${B} [class*="_sidebarCol"] [data-active="true"]{box-shadow:inset 2px 0 0 var(--eva-orange)}

/* ── brand seat: the shipped brand entry outranks installed packages, so swap it in CSS ── */
${B} [class*="_brandMark"] > [data-slot="sidebar.brand.mark"] > *,
${B} [class*="_railMark"] > [data-slot="sidebar.brand.mark"] > *,
${B} [class*="_brandName"] > [data-slot="sidebar.brand.name"] > *{display:none!important}
${B} [class*="_brandMark"]:has(> [data-slot="sidebar.brand.mark"])::before,
${B} [class*="_railMark"]:has(> [data-slot="sidebar.brand.mark"])::before{
  content:"";display:block;width:24px;height:24px;background:${svgUrl(markSvg)} center/contain no-repeat;
  filter:drop-shadow(0 0 6px #d8262e66)}
${B} [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::before{
  content:"${unit.kanji}";font-family:"EVA Mincho",serif;font-weight:900;font-size:19px;letter-spacing:.02em;
  display:inline-block;transform:scaleX(.86);transform-origin:left center;margin-right:-6px;color:var(--eva-text,#ece4da)}
${B} [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::after{
  content:"UNIT-${unit.id} · DSH";font-family:"EVA Condensed",sans-serif;font-weight:600;font-size:11px;
  letter-spacing:.16em;color:var(--eva-orange);align-self:flex-end;line-height:18px;text-shadow:0 0 8px #f06a2255}

/* ── conversation backdrop + header ── */
${B} [data-phase]:has(> [data-slot="conversation.header"])::before{
  content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    ${svgUrl(backdropRight)} right -24px top 52px / auto calc(100% - 72px) no-repeat,
    ${svgUrl(backdropLeft)} left 18px bottom 96px / 210px auto no-repeat,
    radial-gradient(120% 70% at 100% 0, #d8262e0d, transparent 60%),
    radial-gradient(80% 50% at 0 100%, #f06a2208, transparent 60%);
}
/* Positioned (so it paints above the backdrop and anchors the hairline) but
   deliberately WITHOUT z-index: a stacking context here would trap fixed
   overlays that header plugins render inline (e.g. a subagent drawer at
   z-index 1000) beneath the composer and side docks. */
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *{position:relative}
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *::after{
  content:"";position:absolute;left:0;right:0;bottom:0;height:1px;pointer-events:none;
  background:linear-gradient(90deg,#d8262e 0,#d8262e66 22%,transparent 48%,transparent 62%,#f06a2255 85%,#f06a22 100%);opacity:.55}
${B} ${tok("crumbCurrent")}{letter-spacing:.02em}
${B} ${tok("tabActive")}{color:var(--eva-orange) !important;text-shadow:0 0 10px #f06a2244}
@media (max-width:1280px){${B} [data-phase]:has(> [data-slot="conversation.header"])::before{background-size:auto calc(100% - 72px),0 0,auto,auto;opacity:.6}}

/* ── user bubble: crimson entry-plug plate ── */
${B} ${tok("userRow")} ${tok("bubble")}{
  background:linear-gradient(135deg,#3a1219 0,#25101400 70%),var(--dsw-specific-bubble) !important;
  border-left:2px solid ${R};
  border-radius:0 12px 0 12px !important;
  box-shadow:inset 0 1px 0 #ff6a6a1f;
}

/* ── markdown: NERV briefing typography ── */
${md} :where(h1,h2){position:relative;padding:0 0 6px 12px;
  background:linear-gradient(90deg,#d8262e99,#d8262e00 60%) left bottom/100% 1px no-repeat}
${md} :where(h1,h2)::before{content:"";position:absolute;left:0;top:.18em;bottom:calc(6px + .18em);width:3px;background:${R}}
${md} h3{position:relative;padding-left:14px}
${md} h3::before{content:"";position:absolute;left:0;top:50%;width:7px;height:7px;margin-top:-3.5px;background:var(--eva-orange);
  clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);box-shadow:0 0 6px #f06a22}
${md} h4{color:var(--eva-orange)}
${md} li::marker{color:var(--eva-orange)}
${md} strong{color:#fff2ea}
${md} a{color:#ff8a3d !important;text-decoration-color:#f06a2266 !important}
${md} blockquote{border-left:2px solid var(--eva-orange) !important;background:linear-gradient(90deg,#f06a2210,transparent 70%);padding:6px 0 6px 14px !important}
${md} hr{background:linear-gradient(90deg,#d8262e,#d8262e33 40%,#f06a2233 60%,#f06a22) !important;height:1px !important;opacity:.6}
${md} :not(pre)>code{color:#ffa063 !important;border:.5px solid #f06a2233}
${md} [class*="_tableScroll_"] th{color:var(--eva-orange);letter-spacing:.06em;border-bottom:1px solid #d8262e88 !important}
${md} [class*="_tableScroll_"] tr:hover td{background:#ff6a6a08}

/* ── code blocks: dark terminal with a crimson rail ── */
${B} .md-code-block{border-radius:var(--dsw-radius-lg) !important;box-shadow:inset 2px 0 0 #d8262eaa, inset 0 0 0 .5px #ff6a6a1f !important}
${B} .md-code-block [data-code-block-banner]{font-family:"EVA Condensed",var(--ds-font-family-code),sans-serif;letter-spacing:.12em;color:var(--eva-orange);text-transform:uppercase}
${B} .md-code-block [data-code-block-banner]::before{content:"";display:inline-block;width:5px;height:5px;margin-right:8px;vertical-align:middle;background:${G};box-shadow:0 0 6px ${G};border-radius:50%}

/* ── composer: framed control panel ── */
${B} [data-composer-card]{
  background:var(--dsw-specific-input-major) !important;
  box-shadow:inset 0 2px 0 0 #d8262ecc, 0 0 0 1px #f06a2240, 0 12px 40px -18px #d8262e55 !important;
  border-radius:var(--dsw-radius-xl) 14px var(--dsw-radius-xl) 14px !important;
}
${B} [data-composer-card]:focus-within{
  box-shadow:inset 0 2px 0 0 #f0413c, 0 0 0 1px #f06a2299, 0 0 22px -6px #f06a2244 !important}

/* ── geometry: one shape language — chamfered armour plates, no round corners ──
   DSH routes most corners through --dsw-corner-shape, but some controls pin
   corner-shape:round or a 999px / 50% pill; normalise all of them. */
${B} *,${B} *::before,${B} *::after{corner-shape:bevel !important}
${B} :is(img,video,canvas,picture,[class*="vatar"],[class*="vatar"] *){corner-shape:round !important}
${B} :is(button,[role="button"],[role="switch"],[role="tab"],[role="menuitem"],[role="option"],kbd,input,select){border-radius:5px !important}
${B} :is(textarea,[contenteditable="true"]){border-radius:0 !important}

/* ── new-session hero: the launch order instead of "Into the Unknown" ──
   The stock headline span keeps its text for screen readers (font-size 0);
   the copy is drawn as a squashed Mincho line with a HUD subtitle. */
${B} ${tok("titleGroup")} > span:first-child:not(${tok("previewBadge")}){
  font-size:0 !important;display:inline-flex;flex-direction:column;align-items:center;gap:3px;line-height:1}
${B} ${tok("titleGroup")} > span:first-child:not(${tok("previewBadge")})::before{
  content:"${unit.hero.ja}";font:900 31px/36px "EVA Mincho",serif;letter-spacing:.04em;color:var(--dsw-alias-label-primary);
  display:inline-block;transform:scaleX(.84);text-shadow:0 0 18px #d8262e40}
${B} ${tok("titleGroup")} > span:first-child:not(${tok("previewBadge")})::after{
  content:"${unit.hero.en}";font:600 10.5px/14px "EVA Condensed",sans-serif;letter-spacing:.32em;color:var(--eva-orange);
  padding:2px 0 0 .32em;border-top:1px solid #d8262e88;text-shadow:0 0 8px #f06a2255}
${B} ${tok("previewBadge")}{
  background:#f06a2214 !important;color:var(--eva-orange) !important;border:none !important;border-radius:2px !important;
  box-shadow:inset 0 0 0 1px #f06a2266;font-family:"EVA Condensed",var(--ds-font-family-code) !important;letter-spacing:.12em}

/* ── ask-user question: recommended option = MAGI unanimous (3/3 可決) ──
   The stock badge paints info-fill text on the nav-accent fill; both are
   orange here, so the badge is replaced outright. The original "推荐" text
   stays in the DOM (font-size 0) for screen readers. */
${B} ${tok("optionLine")} ${tok("badge")}{
  display:inline-flex;align-items:center;gap:6px;height:18px;padding:0 7px 0 5px;
  font-size:0 !important;line-height:18px;color:transparent !important;
  background:#1b1618 !important;border-radius:2px !important;
  box-shadow:inset 0 0 0 1px #3a2a2c, inset 2px 0 0 var(--eva-orange);
  align-self:center;white-space:nowrap}
${B} ${tok("optionLine")} ${tok("badge")}::before{
  content:"MAGI";padding-left:32px;
  font:600 10.5px/18px "EVA Condensed",sans-serif;letter-spacing:.16em;color:#bdb1a8;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='10' viewBox='0 0 26 10'%3E%3Cg fill='%233fe08a'%3E%3Cpath d='M2 0h4l2 5-2 5H2L0 5z'/%3E%3Cpath d='M11 0h4l2 5-2 5h-4l-2-5z'/%3E%3Cpath d='M20 0h4l2 5-2 5h-4l-2-5z'/%3E%3C/g%3E%3C/svg%3E") left center / 26px 10px no-repeat;
  filter:drop-shadow(0 0 3px #3fe08a88)}
${B} ${tok("optionLine")} ${tok("badge")}::after{
  content:"可決";font:900 11.5px/18px "EVA Mincho",serif;color:var(--eva-orange-hot,#ff8a3d);
  display:inline-block;transform:scaleX(.88);transform-origin:left center;margin-right:-1px}
${B} ${tok("option")}:has(${tok("badge")}){
  border-color:#f06a2255 !important;box-shadow:inset 2px 0 0 var(--eva-orange)}
${B} ${tok("option")}:has(${tok("badge")}) ${tok("number")}{
  background:var(--eva-orange) !important;color:#140a06 !important}

/* ── hard-coded tints in shipped panels ── */
${B} [class*="_root_1alm6_"]{--json-tree-property:#ff9a52;--json-tree-string:#7fdca4;--json-tree-number:#f5c96a;--json-tree-keyword:#ff5a52;--json-tree-punctuation:#bdb1a8;--json-tree-icon:#8b7f7a}
${B} ${tok("colorTools")}{--meter-tint:var(--eva-orange) !important}
${B} ${tok("colorMessages")}{--meter-tint:var(--eva-accent) !important}

/* ── system details ── */
${B} ::selection{background:#d8262e66;color:#fff}
${B} :focus-visible{outline-color:var(--eva-orange)}
${B} ::-webkit-scrollbar-thumb{background-color:#d8262e4d}
${B} ::-webkit-scrollbar-thumb:hover{background-color:#d8262e88}
`;
}

export function installTheme(ctx, prefs, unit = DEFAULT_UNIT) {
  const themeId = unit.themeId;
  const definition = { id: themeId, colorScheme: "dark", tokens: themeTokens(unit) };
  let disposeTheme;
  let styleTag;
  let fontTag;
  let enforcing = false;
  let uiThemeForm;
  try {
    uiThemeForm = ctx.configForms?.get("ui-theme");
  } catch {
    uiThemeForm = undefined;
  }

  // Fonts are cheap and also used by the cinematic and sync meter; keep them for the plugin lifetime.
  ctx.effect(() => {
    fontTag = document.createElement("style");
    fontTag.dataset.plugin = "dsh-theme-eva";
    fontTag.dataset.pluginCss = "dsh-theme-eva/fonts";
    fontTag.textContent = fontFaceCss();
    document.head.appendChild(fontTag);
    return () => fontTag.remove();
  }, "dsh-theme-eva: font faces");

  const hostPreference = () => {
    const pref = uiThemeForm?.getSnapshot?.().value?.preference;
    return pref === "light" || pref === "dark" || pref === "system" ? pref : "system";
  };

  let retryTimer = 0;
  let retries = 0;
  const clearRetry = () => {
    if (retryTimer) clearTimeout(retryTimer);
    retryTimer = 0;
  };

  const enable = () => {
    if (disposeTheme) return;
    clearRetry();
    try {
      disposeTheme = ctx.theme.register(definition);
    } catch (error) {
      // A hot reload can apply this copy before the previous copy has retracted
      // the same theme id; keep trying briefly instead of giving up.
      if (retries++ < 80) retryTimer = setTimeout(() => prefs.get().enabled && enable(), 250);
      else console.warn("[dsh-theme-eva] theme registration failed", error);
      return;
    }
    retries = 0;
    styleTag = document.createElement("style");
    styleTag.dataset.plugin = "dsh-theme-eva";
    styleTag.dataset.pluginCss = "dsh-theme-eva/skin";
    styleTag.textContent = skinCss(unit);
    document.head.appendChild(styleTag);
    document.body.dataset.evaTheme = unit.id;
    enforcing = true;
    if (ctx.theme.getTheme().preference !== themeId) ctx.theme.setTheme(themeId);
  };

  const disable = () => {
    clearRetry();
    if (!disposeTheme) return;
    enforcing = false;
    // Restore the user's own durable appearance (light / dark / system) before
    // retracting the theme, so the registry never falls back to its default.
    try {
      ctx.theme.setTheme(hostPreference());
    } catch (error) {
      console.warn("[dsh-theme-eva] restoring appearance failed", error);
    }
    disposeTheme();
    disposeTheme = undefined;
    styleTag?.remove();
    styleTag = undefined;
    delete document.body.dataset.evaTheme;
  };

  const reconcile = () => {
    if (prefs.get().enabled) enable();
    else disable();
  };

  // The theme runtime re-adopts the Host preference whenever the ui-theme
  // section republishes; third-party ids are never persisted, so keep
  // re-asserting eva-02 while the theme is enabled.
  ctx.on("theme/change", (snapshot) => {
    if (!enforcing || snapshot.preference === themeId) return;
    queueMicrotask(() => {
      if (!enforcing) return;
      if (ctx.theme.getTheme().preference === themeId) return;
      try {
        ctx.theme.setTheme(themeId);
      } catch {
        /* theme retracted meanwhile */
      }
    });
  });

  // Self-heal: a hot replacement or a Host style sweep can leave the theme
  // half-applied (registration retracted, skin tag removed, preference reset).
  const heal = () => {
    if (!prefs.get().enabled) return;
    if (fontTag && !fontTag.isConnected) document.head.appendChild(fontTag);
    let snap;
    try {
      snap = ctx.theme.getTheme();
    } catch {
      return;
    }
    if (disposeTheme && !snap.themes?.some((t) => t.id === themeId)) {
      disposeTheme = undefined;
      styleTag?.remove();
      styleTag = undefined;
    }
    if (!disposeTheme) {
      if (!retryTimer) enable();
      return;
    }
    if (styleTag && !styleTag.isConnected) document.head.appendChild(styleTag);
    if (document.body.dataset.evaTheme !== unit.id) document.body.dataset.evaTheme = unit.id;
    if (snap.preference !== themeId) {
      try {
        ctx.theme.setTheme(themeId);
      } catch {
        /* retracted meanwhile; the next tick re-registers */
      }
    }
  };

  ctx.effect(() => {
    const timer = setInterval(heal, 1500);
    return () => clearInterval(timer);
  }, "dsh-theme-eva: self-heal");

  ctx.effect(() => {
    const off = prefs.subscribe(reconcile);
    reconcile();
    return () => {
      off();
      disable();
    };
  }, "dsh-theme-eva: theme");
}
