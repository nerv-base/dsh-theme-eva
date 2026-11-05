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

const alpha = (hex, a) => `color-mix(in srgb, ${hex} ${a}%, transparent)`;

export function themeTokens(unit = DEFAULT_UNIT) {
  const p = unit.palette;
  return {
    ...ramp(),
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
    "--dsw-alias-link": p.green,
    "--dsw-alias-state-error-primary": p.redHot,
    "--dsw-alias-state-error-secondary": p.redHot,
    "--dsw-alias-state-idle-primary": p.faint,
    "--dsw-alias-state-success-primary": p.green,
    "--dsw-alias-state-success-secondary": p.greenHot,
    "--dsw-alias-state-warn-primary": p.warn,
    "--dsw-alias-state-warn-secondary": "#f5c96a",
    "--dsw-alias-state-business-primary": p.accentHot,
    "--dsw-alias-state-business-tertiary": alpha(p.green, 14),
    "--dsw-alias-interactive-bg-hover": "#ff8a8a12",
    "--dsw-alias-interactive-bg-active": "#ff8a8a21",
    "--dsw-alias-interactive-bg-hover-solid": "#251c1e",
    "--dsw-alias-markdown-code-block": "#0e0b0c",
    "--dsw-alias-markdown-code-block-banner": "#171214",
    "--dsw-alias-markdown-inline-code": alpha(p.green, 11),
    "--dsw-alias-scrollbar-bg-l2": alpha(p.accent, 30),
    "--dsw-alias-scrollbar-hover-l2": alpha(p.accent, 55),
    "--dsw-alias-switch-thumb": p.muted,
    "--dsw-alias-toast-bg": "#2a1c1f",
    "--dsw-focus-ring-color": p.green,
    "--dsw-specific-sidebar-fill": p.sidebar,
    "--dsw-specific-sidebar-nav-item-active": p.redDeep,
    "--dsw-specific-sidebar-nav-item-hover": "#24141a",
    "--dsw-specific-sidebar-nav-item-active-accent": p.accentHot,
    "--dsw-specific-input-major": "#141012",
    "--dsw-specific-menu": "#1a1315f5",
    "--dsw-specific-bubble": "#2a1216",
    "--dsw-specific-tip": "#2a1c1f",
    "--dsw-radius-xs": "0px",
    "--dsw-radius-sm": "2px",
    "--dsw-radius-md": "2px",
    "--dsw-radius-lg": "3px",
    "--dsw-radius-xl": "4px",
    "--dsw-radius-panel": "4px",
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

/** Corner-bracket background layers (green L marks) for framed surfaces. */
const corners = (c, len = 9, w = 1) =>
  ["top left", "top right", "bottom left", "bottom right"]
    .flatMap((pos) => [
      `linear-gradient(${c},${c}) ${pos}/${len}px ${w}px no-repeat`,
      `linear-gradient(${c},${c}) ${pos}/${w}px ${len}px no-repeat`,
    ])
    .join(",");

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
  box-shadow:inset -1px 0 0 #3fe08a14;
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *){
  background:linear-gradient(90deg,#d8262e2e,#d8262e12) !important;
  border:1px solid #d8262e66 !important;
  clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
}
${B} ${tok("newSession")}:not([class*="_collapsed"] *):hover{background:linear-gradient(90deg,#d8262e55,#d8262e22) !important;border-color:${RH} !important}
${B} ${tok("sessionRow")}${tok("selected")},
${B} ${tok("panelRow")}${tok("panelActive")}{
  background:linear-gradient(90deg,#d8262e38,#d8262e0a 70%) !important;
  box-shadow:inset 2px 0 0 ${RH};
}
${B} ${tok("sessionRow")}:hover:not(${tok("selected")}){background:#ff6a6a10 !important}
${B} [class*="_sidebarCol"] [aria-current="page"],
${B} [class*="_sidebarCol"] [data-active="true"]{box-shadow:inset 2px 0 0 ${RH}}

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
  letter-spacing:.16em;color:${G};align-self:flex-end;line-height:18px;text-shadow:0 0 8px #3fe08a55}

/* ── conversation backdrop + header ── */
${B} [data-phase]:has(> [data-slot="conversation.header"])::before{
  content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    ${svgUrl(backdropRight)} right -24px top 52px / auto calc(100% - 72px) no-repeat,
    ${svgUrl(backdropLeft)} left 18px bottom 96px / 210px auto no-repeat,
    radial-gradient(120% 70% at 100% 0, #d8262e0d, transparent 60%),
    radial-gradient(80% 50% at 0 100%, #3fe08a08, transparent 60%);
}
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *{position:relative;z-index:1}
${B} [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *::after{
  content:"";position:absolute;left:0;right:0;bottom:0;height:1px;pointer-events:none;
  background:linear-gradient(90deg,#d8262e 0,#d8262e66 22%,transparent 48%,transparent 62%,#3fe08a55 85%,#3fe08a 100%);opacity:.55}
${B} ${tok("crumbCurrent")}{letter-spacing:.02em}
${B} ${tok("tabActive")}{color:${RH} !important;text-shadow:0 0 10px #f0413c44}
@media (max-width:1280px){${B} [data-phase]:has(> [data-slot="conversation.header"])::before{background-size:auto calc(100% - 72px),0 0,auto,auto;opacity:.6}}

/* ── user bubble: crimson entry-plug plate ── */
${B} ${tok("userRow")} ${tok("bubble")}{
  background:linear-gradient(135deg,#3a1219 0,#25101400 70%),var(--dsw-specific-bubble) !important;
  border-left:2px solid ${R};
  border-radius:0 !important;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%);
  box-shadow:inset 0 1px 0 #ff6a6a1f;
}

/* ── markdown: NERV briefing typography ── */
${md} :where(h1,h2){position:relative;padding:0 0 6px 12px;
  background:linear-gradient(90deg,#d8262e99,#d8262e00 60%) left bottom/100% 1px no-repeat}
${md} :where(h1,h2)::before{content:"";position:absolute;left:0;top:.18em;bottom:calc(6px + .18em);width:3px;background:${R}}
${md} h3{position:relative;padding-left:14px}
${md} h3::before{content:"";position:absolute;left:0;top:50%;width:7px;height:7px;margin-top:-3.5px;background:${G};
  clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);box-shadow:0 0 6px #3fe08a}
${md} h4{color:${G}}
${md} li::marker{color:${RH}}
${md} strong{color:#fff2ea}
${md} a{color:${G} !important}
${md} blockquote{border-left:2px solid ${G} !important;background:linear-gradient(90deg,#3fe08a12,transparent 70%);padding:6px 0 6px 14px !important}
${md} hr{background:linear-gradient(90deg,#d8262e,#d8262e33 40%,#3fe08a33 60%,#3fe08a) !important;height:1px !important;opacity:.6}
${md} :not(pre)>code{color:var(--eva-green-hot) !important;border:.5px solid #3fe08a33}
${md} [class*="_tableScroll_"] th{color:${G};letter-spacing:.06em;border-bottom:1px solid #d8262e88 !important}
${md} [class*="_tableScroll_"] tr:hover td{background:#ff6a6a08}

/* ── code blocks: dark terminal with a crimson rail ── */
${B} .md-code-block{border-radius:0 !important;box-shadow:inset 2px 0 0 #d8262eaa, inset 0 0 0 .5px #ff6a6a1f !important}
${B} .md-code-block [data-code-block-banner]{font-family:"EVA Condensed",var(--ds-font-family-code),sans-serif;letter-spacing:.12em;color:${G};text-transform:uppercase}

/* ── composer: framed control panel ── */
${B} [data-composer-card]{
  background:${corners("#3fe08a99")},var(--dsw-specific-input-major) !important;
  box-shadow:inset 0 2px 0 -0px #d8262ecc, 0 0 0 .5px #ff6a6a2e, 0 12px 40px -18px #d8262e55 !important;
  border-radius:0 !important;
}
${B} [data-composer-card]:focus-within{
  box-shadow:inset 0 2px 0 0 #f0413c, 0 0 0 .5px #3fe08a77, 0 0 22px -6px #3fe08a44 !important}

/* ── system details ── */
${B} ::selection{background:#d8262e66;color:#fff}
${B} :focus-visible{outline-color:${G}}
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

  ctx.effect(() => {
    const off = prefs.subscribe(reconcile);
    reconcile();
    return () => {
      off();
      disable();
    };
  }, "dsh-theme-eva: theme");
}
