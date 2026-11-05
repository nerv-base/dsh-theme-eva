// Theme registration (eva-02, dark-only) and the restrained everyday skin.
import { DEFAULT_UNIT } from "../shared/units.js";
import backdropRight from "./backdrop-right.svg";
import backdropLeft from "./backdrop-left.svg";
import markSvg from "./mark.svg";

const svgUrl = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;

export const FONT_BASE = "/eva-theme-assets";

/** Warm Unit-02 ramp replacing the bluish neutral ramp the dark aliases reference. */
function ramp() {
  return {
    "--dsw-static-neutral-bluish-00": "#fff8f0",
    "--dsw-static-neutral-bluish-50": "#e8e2d7",
    "--dsw-static-neutral-bluish-60": "#e2dbd0",
    "--dsw-static-neutral-bluish-75": "#dad2c6",
    "--dsw-static-neutral-bluish-100": "#d2cabd",
    "--dsw-static-neutral-bluish-150": "#c8c0b3",
    "--dsw-static-neutral-bluish-200": "#bcb4a8",
    "--dsw-static-neutral-bluish-300": "#bdb6ab",
    "--dsw-static-neutral-bluish-400": "#a29e97",
    "--dsw-static-neutral-bluish-500": "#8a857e",
    "--dsw-static-neutral-bluish-600": "#6f6b66",
    "--dsw-static-neutral-bluish-700": "#4a4440",
    "--dsw-static-neutral-bluish-750": "#3a3532",
    "--dsw-static-neutral-bluish-800": "#2a2726",
    "--dsw-static-neutral-bluish-850": "#1d1c1c",
    "--dsw-static-neutral-bluish-875": "#161617",
    "--dsw-static-neutral-bluish-900": "#121315",
    "--dsw-static-neutral-bluish-950": "#0b0b0c",
    "--dsw-static-neutral-bluish-1000": "#070606",
  };
}

export function themeTokens(unit = DEFAULT_UNIT) {
  const p = unit.palette;
  return {
    ...ramp(),
    "--dsw-alias-bg-base": p.bg,
    "--dsw-alias-bg-layer-1": "#141415",
    "--dsw-alias-bg-layer-2": p.raised,
    "--dsw-alias-bg-layer-3": "#242222",
    "--dsw-alias-bg-overlay": "#3a3532",
    "--dsw-alias-bg-module-platform": "#242222",
    "--dsw-alias-bg-document-preview": p.bg,
    "--dsw-alias-bg-document-selection": "color-mix(in srgb, #f06a22 38%, transparent)",
    "--dsw-alias-border-l1": "#ffe6cc0f",
    "--dsw-alias-border-l2": "#ffe6cc1f",
    "--dsw-alias-border-l3": "#ffe6cc2b",
    "--dsw-alias-border-l4": "#ffe6cc38",
    "--dsw-alias-brand-primary": p.accent,
    "--dsw-alias-brand-text": p.text,
    "--dsw-alias-button-primary-hover": p.accentHot,
    "--dsw-alias-button-contrast-fill": p.text,
    "--dsw-alias-label-primary": p.text,
    "--dsw-alias-label-primary-bluish": p.text,
    "--dsw-alias-label-secondary": "#bdb6ab",
    "--dsw-alias-label-tertiary": p.muted,
    "--dsw-alias-label-caption": p.faint,
    "--dsw-alias-label-primary-foreground": "#140a05",
    "--dsw-alias-link": p.accentHot,
    "--dsw-alias-state-error-primary": "#e2453a",
    "--dsw-alias-state-error-secondary": "#e2453a",
    "--dsw-alias-state-idle-primary": p.faint,
    "--dsw-alias-state-success-primary": p.ok,
    "--dsw-alias-state-success-secondary": "#7bd38a",
    "--dsw-alias-state-warn-primary": p.warn,
    "--dsw-alias-state-warn-secondary": "#f0cd5a",
    "--dsw-alias-state-business-primary": p.accent,
    "--dsw-alias-interactive-bg-hover": "#ffd9b814",
    "--dsw-alias-interactive-bg-active": "#ffd9b824",
    "--dsw-alias-interactive-bg-hover-solid": "#242222",
    "--dsw-alias-markdown-code-block": "#101011",
    "--dsw-alias-markdown-code-block-banner": "#1a1919",
    "--dsw-alias-markdown-inline-code": "#2a2421",
    "--dsw-alias-switch-thumb": p.muted,
    "--dsw-alias-toast-bg": "#2a2321",
    "--dsw-specific-sidebar-fill": p.sidebar,
    "--dsw-specific-sidebar-nav-item-active": p.redDeep,
    "--dsw-specific-sidebar-nav-item-hover": "#221517",
    "--dsw-specific-sidebar-nav-item-active-accent": p.accent,
    "--dsw-specific-input-major": "#141415",
    "--dsw-specific-menu": "#1a1817f5",
    "--dsw-specific-bubble": "#221c1a",
    "--dsw-specific-tip": "#2a2321",
    "--dsw-radius-xs": "0px",
    "--dsw-radius-sm": "2px",
    "--dsw-radius-md": "2px",
    "--dsw-radius-lg": "3px",
    "--dsw-radius-xl": "4px",
    "--dsw-radius-panel": "4px",
    "--eva-accent": p.accent,
    "--eva-red": p.red,
    "--eva-warn": p.warn,
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

/** Everyday skin: only active while body[data-eva-theme] is set. Chat and code stay untouched. */
export function skinCss(unit = DEFAULT_UNIT) {
  return `
body[data-eva-theme] [class*="_sidebarCol"]{
  background:
    linear-gradient(165deg, #51161ce6 0, #241215cc 170px, #10111300 350px),
    var(--dsw-specific-sidebar-fill) !important;
  border-right:.5px solid #3c3029 !important;
}
body[data-eva-theme] [data-phase]:has(> [data-slot="conversation.header"])::before{
  content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:
    ${svgUrl(backdropRight)} right -24px top 52px / auto calc(100% - 72px) no-repeat,
    ${svgUrl(backdropLeft)} left 18px bottom 96px / 250px auto no-repeat;
}
body[data-eva-theme] [data-phase]:has(> [data-slot="conversation.header"]) > [data-slot="conversation.header"] > *{position:relative;z-index:1}
@media (max-width:980px){body[data-eva-theme] [data-phase]:has(> [data-slot="conversation.header"])::before{background-size:auto calc(100% - 72px),0 0;opacity:.6}}
/* brand seat: the shipped brand entry outranks installed packages, so swap it in CSS */
body[data-eva-theme] [class*="_brandMark"] > [data-slot="sidebar.brand.mark"] > *,
body[data-eva-theme] [class*="_railMark"] > [data-slot="sidebar.brand.mark"] > *,
body[data-eva-theme] [class*="_brandName"] > [data-slot="sidebar.brand.name"] > *{display:none!important}
body[data-eva-theme] [class*="_brandMark"]:has(> [data-slot="sidebar.brand.mark"])::before,
body[data-eva-theme] [class*="_railMark"]:has(> [data-slot="sidebar.brand.mark"])::before{
  content:"";display:block;width:24px;height:24px;background:${svgUrl(markSvg)} center/contain no-repeat}
body[data-eva-theme] [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::before{
  content:"${unit.kanji}";font-family:"EVA Mincho",serif;font-weight:900;font-size:19px;letter-spacing:.02em;
  display:inline-block;transform:scaleX(.86);transform-origin:left center;margin-right:-6px;color:var(--eva-text,#e8e2d7)}
body[data-eva-theme] [class*="_brandName"]:has(> [data-slot="sidebar.brand.name"])::after{
  content:"UNIT-${unit.id} · DSH";font-family:"EVA Condensed",sans-serif;font-weight:600;font-size:11px;
  letter-spacing:.16em;color:var(--eva-accent,#f06a22);align-self:flex-end;line-height:18px}
body[data-eva-theme] ::selection{background:color-mix(in srgb,#f06a22 40%,transparent)}
body[data-eva-theme] :focus-visible{outline-color:#f06a22}
body[data-eva-theme] [class*="_sidebarCol"] [aria-current="page"],
body[data-eva-theme] [class*="_sidebarCol"] [data-active="true"]{
  box-shadow:inset 3px 0 0 #f06a22;
}
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
