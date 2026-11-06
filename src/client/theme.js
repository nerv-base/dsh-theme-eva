// Theme registration (one dark-only DSH theme per EVA unit: eva-01, eva-02),
// the restrained everyday skin, and the live unit switch.
//
// Everything unit-specific comes from src/shared/units.js. The skin itself
// only references --eva-* custom properties (published as theme tokens), so
// the same CSS serves every unit.
import { DEFAULT_UNIT, UNITS, UNIT_IDS, getUnit, recolor } from "../shared/units.js";
import backdropLeft from "./backdrop-left.svg";
import backdropRight01 from "./backdrop-right-01.svg";
import backdropRight02 from "./backdrop-right-02.svg";
import mark01 from "./mark-01.svg";
import mark02 from "./mark-02.svg";

const ART = {
  "01": { backdropRight: backdropRight01, mark: mark01 },
  "02": { backdropRight: backdropRight02, mark: mark02 },
};

const svgUrl = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;

/** Generated art for a unit, recoloured from the template palette. */
export function unitArt(unit = DEFAULT_UNIT) {
  const art = ART[unit.id] ?? ART[DEFAULT_UNIT.id];
  return {
    backdropRight: recolor(art.backdropRight, unit),
    backdropLeft: recolor(backdropLeft, unit),
    mark: recolor(art.mark, unit),
  };
}

export const FONT_BASE = "/eva-theme-assets";

const alpha = (color, a) => `color-mix(in srgb, ${color} ${a}%, transparent)`;
/** Alpha variant of an --eva-* custom property. */
const va = (name, a) => alpha(`var(--eva-${name})`, a);

export function themeTokens(unit = DEFAULT_UNIT) {
  const p = unit.palette;
  const s = unit.surfaces;
  return {
    ...unit.ramps,
    ...unit.code,
    "--dsw-alias-bg-base": p.bg,
    "--dsw-alias-bg-layer-1": s.layer1,
    "--dsw-alias-bg-layer-2": p.raised,
    "--dsw-alias-bg-layer-3": s.layer3,
    "--dsw-alias-bg-overlay": s.overlay,
    "--dsw-alias-bg-module-platform": s.platform,
    "--dsw-alias-bg-document-preview": p.bg,
    "--dsw-alias-bg-document-selection": alpha(p.accent, 36),
    "--dsw-alias-border-l1": alpha(p.tint, 7),
    "--dsw-alias-border-l2": alpha(p.tint, 13),
    "--dsw-alias-border-l3": alpha(p.tint, 18),
    "--dsw-alias-border-l4": alpha(p.tint, 23),
    "--dsw-alias-brand-primary": p.accent,
    "--dsw-alias-brand-text": p.text,
    "--dsw-alias-button-primary-hover": p.accentHot,
    "--dsw-alias-button-contrast-fill": p.text,
    "--dsw-alias-label-primary": p.text,
    "--dsw-alias-label-primary-bluish": p.text,
    "--dsw-alias-label-secondary": s.labelSecondary,
    "--dsw-alias-label-tertiary": p.muted,
    "--dsw-alias-label-caption": p.faint,
    "--dsw-alias-label-primary-foreground": s.labelOnAccent,
    "--dsw-alias-link": p.markingHot,
    "--dsw-alias-state-error-primary": p.redHot,
    "--dsw-alias-state-error-secondary": p.redHot,
    "--dsw-alias-state-idle-primary": p.faint,
    "--dsw-alias-state-success-primary": p.green,
    "--dsw-alias-state-success-secondary": p.greenHot,
    "--dsw-alias-state-warn-primary": p.warn,
    "--dsw-alias-state-warn-secondary": s.warnSoft,
    "--dsw-alias-state-business-primary": p.marking,
    "--dsw-alias-state-business-tertiary": alpha(p.marking, 14),
    "--dsw-alias-interactive-bg-hover": alpha(p.tint, 7),
    "--dsw-alias-interactive-bg-active": alpha(p.tint, 13),
    "--dsw-alias-interactive-bg-hover-solid": s.layer3,
    "--dsw-alias-markdown-code-block": s.codeBlock,
    "--dsw-alias-markdown-code-block-banner": s.codeBanner,
    "--dsw-alias-markdown-inline-code": alpha(p.marking, 12),
    "--dsw-alias-scrollbar-bg-l2": alpha(p.accent, 30),
    "--dsw-alias-scrollbar-hover-l2": alpha(p.accent, 55),
    "--dsw-alias-switch-thumb": p.muted,
    "--dsw-alias-toast-bg": s.toast,
    "--dsw-focus-ring-color": p.marking,
    "--dsw-alias-brand-primary-new-colorprimary-new-color": p.accent,
    "--dsw-alias-button-info-fill": p.marking,
    "--dsw-alias-button-info-hover": p.markingHot,
    "--dsw-alias-label-deep-diving": s.deepDiving,
    "--dsw-alias-label-deep-diving-shimmer": s.deepDivingShimmer,
    "--dsw-alias-interactive-bg-hover-accent": alpha(p.tint, 24),
    "--dsw-alias-bg-mask-drop": s.maskDrop,
    "--dsw-alias-tooltip-bg": s.toast,
    "--dsw-alias-state-warn-label": p.warn,
    "--dsw-alias-state-success-tertiary": p.greenDeep,
    "--dsw-alias-state-warn-tertiary": s.warnDeep,
    "--dsw-menu-surface-fill": s.menuSurface,
    "--dsw-alias-menu-group-header-fill": s.groupHeader,
    "--dsw-specific-selector": s.selector,
    "--dsw-specific-bubble-highlight": s.bubbleHighlight,
    "--dsw-specific-sidebar-fill": p.sidebar,
    "--dsw-specific-sidebar-nav-item-active": p.accentDeep,
    "--dsw-specific-sidebar-nav-item-hover": s.navHover,
    "--dsw-specific-sidebar-nav-item-active-accent": p.marking,
    "--dsw-specific-input-major": s.inputMajor,
    "--dsw-specific-menu": s.menu,
    "--dsw-specific-bubble": s.bubble,
    "--dsw-specific-tip": s.toast,
    // Armour-plate geometry: real radii, rendered as chamfers (corner-shape: bevel).
    "--dsw-radius-xs": "2px",
    "--dsw-radius-sm": "4px",
    "--dsw-radius-md": "6px",
    "--dsw-radius-lg": "8px",
    "--dsw-radius-xl": "10px",
    "--dsw-radius-panel": "14px",
    "--dsw-corner-shape": "bevel",
    // Unit palette for the skin, component styles and other plugins.
    "--eva-unit": `"${unit.id}"`,
    "--eva-accent": p.accent,
    "--eva-accent-hot": p.accentHot,
    "--eva-accent-deep": p.accentDeep,
    "--eva-marking": p.marking,
    "--eva-marking-hot": p.markingHot,
    "--eva-on-marking": p.onMarking,
    "--eva-tint": p.tint,
    "--eva-red": p.red,
    "--eva-red-hot": p.redHot,
    "--eva-green": p.green,
    "--eva-green-hot": p.greenHot,
    "--eva-green-dim": p.greenDim,
    "--eva-green-deep": p.greenDeep,
    "--eva-warn": p.warn,
    "--eva-text": p.text,
    "--eva-strong": s.strong,
    "--eva-inline-code": s.inlineCode,
    "--eva-raised": p.raised,
    "--eva-border": p.border,
    "--eva-hud-text": p.hudText,
    "--eva-plate": s.plate,
    "--eva-sidebar-glow": s.sidebarGlow,
    "--eva-sidebar-glow-2": s.sidebarGlow2,
    "--eva-sidebar-edge": s.sidebarEdge,
    // Kept for consumers of the Unit-02-era name; same value as --eva-marking.
    "--eva-orange": p.marking,
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
 * Armour colour (--eva-accent) for identity and actions, HUD markings
 * (--eva-marking) for active state, phosphor green for "system alive"
 * signals. Reading surfaces stay calm.
 */
export function skinCss(unit = DEFAULT_UNIT) {
  const B = "body[data-eva-theme]";
  const R = "var(--eva-accent)";
  const RH = "var(--eva-accent-hot)";
  const O = "var(--eva-marking)";
  const G = "var(--eva-green)";
  const md = `${B} [class*="_markdown_"]`;
  const art = unitArt(unit);
  return `
/* ── sidebar: armour plate ── */
${B} [class*="_sidebarCol"]{
  background:
    linear-gradient(165deg, ${va("sidebar-glow", 91)} 0, ${va("sidebar-glow-2", 60)} 190px, transparent 400px),
    repeating-linear-gradient(0deg, #ffffff05 0 1px, transparent 1px 3px),
    var(--dsw-specific-sidebar-fill) !important;
  border-right:1px solid var(--eva-sidebar-edge) !important;
  box-shadow:inset -1px 0 0 ${va("marking", 8)};
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *){
  background:linear-gradient(90deg,${va("accent", 18)},${va("accent", 7)}) !important;
  border:1px solid ${va("accent", 40)} !important;
  border-radius:8px !important;
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *):hover{background:linear-gradient(90deg,${va("accent", 33)},${va("accent", 13)}) !important;border-color:${RH} !important}
${B} ${tok("sessionRow")}${tok("selected")},
${B} ${tok("panelRow")}${tok("panelActive")}{
  background:linear-gradient(90deg,${va("accent", 22)},${va("accent", 4)} 70%) !important;
  box-shadow:inset 2px 0 0 ${O};
}
${B} ${tok("sessionRow")}:hover:not(${tok("selected")}){background:${va("tint", 6)} !important}
${B} [class*="_sidebarCol"] [aria-current="page"],
${B} [class*="_sidebarCol"] [data-active="true"]{box-shadow:inset 2px 0 0 ${O}}

/* ── brand seat: the shipped brand entry outranks installed packages, so swap it in CSS ── */
${B} [class*="_brandMark"] > [data-slot="sidebar.brand.mark"] > *,
${B} [class*="_railMark"] > [data-slot="sidebar.brand.mark"] > *,
${B} [class*="_brandName"] > [data-slot="sidebar.brand.name"] > *{display:none!important}
${B} [class*="_brandMark"]:has(> [data-slot="sidebar.brand.mark"])::before,
${B} [class*="_railMark"]:has(> [data-slot="sidebar.brand.mark"])::before{
  content:"";display:block;width:24px;height:24px;background:${svgUrl(art.mark)} center/contain no-repeat;
  filter:drop-shadow(0 0 6px ${va("accent", 40)})}
${B} [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::before{
  content:"${unit.kanji}";font-family:"EVA Mincho",serif;font-weight:900;font-size:19px;letter-spacing:.02em;
  display:inline-block;transform:scaleX(.86);transform-origin:left center;margin-right:-6px;color:var(--eva-text)}
${B} [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::after{
  content:"UNIT-${unit.id} · DSH";font-family:"EVA Condensed",sans-serif;font-weight:600;font-size:11px;
  letter-spacing:.16em;color:${O};align-self:flex-end;line-height:18px;text-shadow:0 0 8px ${va("marking", 33)}}

/* ── conversation backdrop + header ── */
${B} [data-phase]:has(> [data-slot="conversation.header"])::before{
  content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    ${svgUrl(art.backdropRight)} right -24px top 52px / auto calc(100% - 72px) no-repeat,
    ${svgUrl(art.backdropLeft)} left 18px bottom 96px / 210px auto no-repeat,
    radial-gradient(120% 70% at 100% 0, ${va("accent", 5)}, transparent 60%),
    radial-gradient(80% 50% at 0 100%, ${va("marking", 3)}, transparent 60%);
}
/* Positioned (so it paints above the backdrop and anchors the hairline) but
   deliberately WITHOUT z-index: a stacking context here would trap fixed
   overlays that header plugins render inline (e.g. a subagent drawer at
   z-index 1000) beneath the composer and side docks. */
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *{position:relative}
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *::after{
  content:"";position:absolute;left:0;right:0;bottom:0;height:1px;pointer-events:none;
  background:linear-gradient(90deg,${R} 0,${va("accent", 40)} 22%,transparent 48%,transparent 62%,${va("marking", 33)} 85%,${O} 100%);opacity:.55}
${B} ${tok("crumbCurrent")}{letter-spacing:.02em}
${B} ${tok("tabActive")}{color:${O} !important;text-shadow:0 0 10px ${va("marking", 27)}}
@media (max-width:1280px){${B} [data-phase]:has(> [data-slot="conversation.header"])::before{background-size:auto calc(100% - 72px),0 0,auto,auto;opacity:.6}}

/* ── user bubble: entry-plug plate ── */
${B} ${tok("userRow")} ${tok("bubble")}{
  background:linear-gradient(135deg,var(--eva-plate) 0,transparent 70%),var(--dsw-specific-bubble) !important;
  border-left:2px solid ${R};
  border-radius:0 12px 0 12px !important;
  box-shadow:inset 0 1px 0 ${va("tint", 12)};
}

/* ── markdown: NERV briefing typography ── */
${md} :where(h1,h2){position:relative;padding:0 0 6px 12px;
  background:linear-gradient(90deg,${va("accent", 60)},transparent 60%) left bottom/100% 1px no-repeat}
${md} :where(h1,h2)::before{content:"";position:absolute;left:0;top:.18em;bottom:calc(6px + .18em);width:3px;background:${R}}
${md} h3{position:relative;padding-left:14px}
${md} h3::before{content:"";position:absolute;left:0;top:50%;width:7px;height:7px;margin-top:-3.5px;background:${O};
  clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);box-shadow:0 0 6px ${O}}
${md} h4{color:${O}}
${md} li::marker{color:${O}}
${md} strong{color:var(--eva-strong)}
${md} a{color:var(--eva-marking-hot) !important;text-decoration-color:${va("marking", 40)} !important}
${md} blockquote{border-left:2px solid ${O} !important;background:linear-gradient(90deg,${va("marking", 6)},transparent 70%);padding:6px 0 6px 14px !important}
${md} hr{background:linear-gradient(90deg,${R},${va("accent", 20)} 40%,${va("marking", 20)} 60%,${O}) !important;height:1px !important;opacity:.6}
${md} :not(pre)>code{color:var(--eva-inline-code) !important;border:.5px solid ${va("marking", 20)}}
${md} [class*="_tableScroll_"] th{color:${O};letter-spacing:.06em;border-bottom:1px solid ${va("accent", 53)} !important}
${md} [class*="_tableScroll_"] tr:hover td{background:${va("tint", 3)}}

/* ── code blocks: dark terminal with an armour rail ── */
${B} .md-code-block{border-radius:var(--dsw-radius-lg) !important;box-shadow:inset 2px 0 0 ${va("accent", 67)}, inset 0 0 0 .5px ${va("tint", 12)} !important}
${B} .md-code-block [data-code-block-banner]{font-family:"EVA Condensed",var(--ds-font-family-code),sans-serif;letter-spacing:.12em;color:${O};text-transform:uppercase}
${B} .md-code-block [data-code-block-banner]::before{content:"";display:inline-block;width:5px;height:5px;margin-right:8px;vertical-align:middle;background:${G};box-shadow:0 0 6px ${G};border-radius:50%}

/* ── composer: framed control panel ── */
${B} [data-composer-card]{
  background:var(--dsw-specific-input-major) !important;
  box-shadow:inset 0 2px 0 0 ${va("accent", 80)}, 0 0 0 1px ${va("marking", 25)}, 0 12px 40px -18px ${va("accent", 33)} !important;
  border-radius:var(--dsw-radius-xl) 14px var(--dsw-radius-xl) 14px !important;
}
${B} [data-composer-card]:focus-within{
  box-shadow:inset 0 2px 0 0 ${RH}, 0 0 0 1px ${va("marking", 60)}, 0 0 22px -6px ${va("marking", 27)} !important}

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
  display:inline-block;transform:scaleX(.84);text-shadow:0 0 18px ${va("accent", 25)}}
${B} ${tok("titleGroup")} > span:first-child:not(${tok("previewBadge")})::after{
  content:"${unit.hero.en}";font:600 10.5px/14px "EVA Condensed",sans-serif;letter-spacing:.32em;color:${O};
  padding:2px 0 0 .32em;border-top:1px solid ${va("accent", 53)};text-shadow:0 0 8px ${va("marking", 33)}}
${B} ${tok("previewBadge")}{
  background:${va("marking", 8)} !important;color:${O} !important;border:none !important;border-radius:2px !important;
  box-shadow:inset 0 0 0 1px ${va("marking", 40)};font-family:"EVA Condensed",var(--ds-font-family-code) !important;letter-spacing:.12em}

/* ── ask-user question: recommended option = MAGI unanimous (3/3 可決) ──
   The stock badge paints info-fill text on the nav-accent fill; both are the
   marking colour here, so the badge is replaced outright. The original "推荐"
   text stays in the DOM (font-size 0) for screen readers. */
${B} ${tok("optionLine")} ${tok("badge")}{
  display:inline-flex;align-items:center;gap:6px;height:18px;padding:0 7px 0 5px;
  font-size:0 !important;line-height:18px;color:transparent !important;
  background:var(--eva-raised) !important;border-radius:2px !important;
  box-shadow:inset 0 0 0 1px var(--eva-border), inset 2px 0 0 ${O};
  align-self:center;white-space:nowrap}
${B} ${tok("optionLine")} ${tok("badge")}::before{
  content:"MAGI";padding-left:32px;
  font:600 10.5px/18px "EVA Condensed",sans-serif;letter-spacing:.16em;color:var(--dsw-static-neutral-200);
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='10' viewBox='0 0 26 10'%3E%3Cg fill='%233fe08a'%3E%3Cpath d='M2 0h4l2 5-2 5H2L0 5z'/%3E%3Cpath d='M11 0h4l2 5-2 5h-4l-2-5z'/%3E%3Cpath d='M20 0h4l2 5-2 5h-4l-2-5z'/%3E%3C/g%3E%3C/svg%3E") left center / 26px 10px no-repeat;
  filter:drop-shadow(0 0 3px #3fe08a88)}
${B} ${tok("optionLine")} ${tok("badge")}::after{
  content:"可決";font:900 11.5px/18px "EVA Mincho",serif;color:var(--eva-marking-hot);
  display:inline-block;transform:scaleX(.88);transform-origin:left center;margin-right:-1px}
${B} ${tok("option")}:has(${tok("badge")}){
  border-color:${va("marking", 33)} !important;box-shadow:inset 2px 0 0 ${O}}
${B} ${tok("option")}:has(${tok("badge")}) ${tok("number")}{
  background:${O} !important;color:var(--eva-on-marking) !important}

/* ── hard-coded tints in shipped panels ── */
${B} [class*="_root_1alm6_"]{--json-tree-property:var(--shiki-token-constant);--json-tree-string:var(--shiki-token-string);--json-tree-number:#f5c96a;--json-tree-keyword:var(--shiki-token-keyword);--json-tree-punctuation:var(--shiki-token-punctuation);--json-tree-icon:var(--dsw-static-neutral-400)}
${B} ${tok("colorTools")}{--meter-tint:${O} !important}
${B} ${tok("colorMessages")}{--meter-tint:${R} !important}

/* ── system details ── */
${B} ::selection{background:${va("accent", 40)};color:#fff}
${B} :focus-visible{outline-color:${O}}
${B} ::-webkit-scrollbar-thumb{background-color:${va("accent", 30)}}
${B} ::-webkit-scrollbar-thumb:hover{background-color:${va("accent", 53)}}
`;
}

/**
 * Registers the active unit's DSH theme and skin, and follows the `enabled`
 * and `unit` preferences live. Switching units registers the new theme and
 * activates it before the previous one is retracted, so the page never falls
 * back to the stock palette in between.
 *
 * Returns the switch handle `{ units, getUnit(), setUnit(id), setEnabled(on) }`,
 * which index.js publishes for other plugins and the console.
 */
export function installTheme(ctx, prefs) {
  /** @type {{ unit: object, dispose: () => void, style: HTMLStyleElement } | undefined} */
  let active;
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

  /** The unit that should be showing right now, or undefined when the theme is off. */
  const wanted = () => {
    const state = prefs.get();
    return state.enabled ? getUnit(state.unit) : undefined;
  };

  let retryTimer = 0;
  let retries = 0;
  const clearRetry = () => {
    if (retryTimer) clearTimeout(retryTimer);
    retryTimer = 0;
  };

  /** Announce the visible unit to other plugins (detail.unit is null while off). */
  const announce = (unit) => {
    try {
      window.dispatchEvent(
        new CustomEvent("dsh-theme-eva:change", { detail: { unit: unit?.id ?? null, themeId: unit?.themeId ?? null } }),
      );
    } catch {
      /* no window (tests) */
    }
  };

  const retract = (entry) => {
    try {
      entry.dispose();
    } catch {
      /* already retracted by the registry */
    }
    entry.style.remove();
  };

  const activate = (unit) => {
    if (active?.unit === unit) return;
    clearRetry();
    let dispose;
    try {
      dispose = ctx.theme.register({ id: unit.themeId, colorScheme: "dark", tokens: themeTokens(unit) });
    } catch (error) {
      // A hot reload can apply this copy before the previous copy has retracted
      // the same theme id; keep trying briefly instead of giving up.
      if (retries++ < 80) retryTimer = setTimeout(() => wanted() === unit && activate(unit), 250);
      else console.warn(`[dsh-theme-eva] theme ${unit.themeId} registration failed`, error);
      return;
    }
    retries = 0;
    const style = document.createElement("style");
    style.dataset.plugin = "dsh-theme-eva";
    style.dataset.pluginCss = "dsh-theme-eva/skin";
    style.dataset.evaUnit = unit.id;
    style.textContent = skinCss(unit);
    document.head.appendChild(style);
    const previous = active;
    active = { unit, dispose, style };
    document.body.dataset.evaTheme = unit.id;
    enforcing = true;
    try {
      if (ctx.theme.getTheme().preference !== unit.themeId) ctx.theme.setTheme(unit.themeId);
    } catch (error) {
      console.warn("[dsh-theme-eva] activating theme failed", error);
    }
    if (previous) retract(previous);
    announce(unit);
  };

  const deactivate = () => {
    clearRetry();
    if (!active) return;
    enforcing = false;
    // Restore the user's own durable appearance (light / dark / system) before
    // retracting the theme, so the registry never falls back to its default.
    try {
      ctx.theme.setTheme(hostPreference());
    } catch (error) {
      console.warn("[dsh-theme-eva] restoring appearance failed", error);
    }
    retract(active);
    active = undefined;
    delete document.body.dataset.evaTheme;
    announce(undefined);
  };

  const reconcile = () => {
    const unit = wanted();
    if (unit) activate(unit);
    else deactivate();
  };

  // The theme runtime re-adopts the Host preference whenever the ui-theme
  // section republishes; third-party ids are never persisted, so keep
  // re-asserting the active unit's theme while the theme is enabled.
  ctx.on("theme/change", (snapshot) => {
    if (!enforcing || !active || snapshot.preference === active.unit.themeId) return;
    queueMicrotask(() => {
      if (!enforcing || !active) return;
      const id = active.unit.themeId;
      if (ctx.theme.getTheme().preference === id) return;
      try {
        ctx.theme.setTheme(id);
      } catch {
        /* theme retracted meanwhile */
      }
    });
  });

  // Self-heal: a hot replacement or a Host style sweep can leave the theme
  // half-applied (registration retracted, skin tag removed, preference reset).
  const heal = () => {
    const unit = wanted();
    if (!unit) return;
    if (fontTag && !fontTag.isConnected) document.head.appendChild(fontTag);
    let snap;
    try {
      snap = ctx.theme.getTheme();
    } catch {
      return;
    }
    if (active && !snap.themes?.some((t) => t.id === active.unit.themeId)) {
      active.style.remove();
      active = undefined;
    }
    if (!active || active.unit !== unit) {
      if (!retryTimer) activate(unit);
      return;
    }
    if (!active.style.isConnected) document.head.appendChild(active.style);
    if (document.body.dataset.evaTheme !== unit.id) document.body.dataset.evaTheme = unit.id;
    if (snap.preference !== unit.themeId) {
      try {
        ctx.theme.setTheme(unit.themeId);
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
      deactivate();
    };
  }, "dsh-theme-eva: theme");

  return {
    units: UNIT_IDS.map((id) => UNITS[id]),
    /** The unit currently showing, or undefined while the theme is off. */
    getUnit: () => active?.unit,
    /** Durably select a unit ("01" | "02"); resolves false when the Host refuses the write. */
    setUnit: (id) => {
      if (!UNIT_IDS.includes(id)) return Promise.reject(new RangeError(`[dsh-theme-eva] unknown unit "${id}"`));
      return prefs.set("unit", id);
    },
    setEnabled: (on) => prefs.set("enabled", Boolean(on)),
  };
}
