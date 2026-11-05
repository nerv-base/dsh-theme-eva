// dsh-theme-eva — Client half entry.
import { createPrefs } from "./prefs.js";
import { installTheme } from "./theme.js";
import { LOCALE_NS, zh, en } from "./locale.js";
import uiCss from "./ui.css";
import {
  BrandMark,
  BrandName,
  makeSettingsRow,
  makeFooterReplay,
  makeSyncMeter,
  makeRunningIndicator,
} from "./components.jsx";
import { makeCinemaOverlay } from "./cinemaHost.jsx";

export const inject = ["slots", "locale", "theme", "configForms"];

export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), "dsh-theme-eva: dictionaries");

  ctx.effect(() => {
    const tag = document.createElement("style");
    tag.dataset.plugin = "dsh-theme-eva";
    tag.dataset.pluginCss = "dsh-theme-eva/ui";
    tag.textContent = uiCss;
    document.head.appendChild(tag);
    // Host-side style sweeps (e.g. during a hot replacement) may drop the tag; put it back.
    const heal = setInterval(() => tag.isConnected || document.head.appendChild(tag), 1500);
    return () => {
      clearInterval(heal);
      tag.remove();
    };
  }, "dsh-theme-eva: component styles");

  const prefs = createPrefs(ctx);
  installTheme(ctx, prefs);

  // Always-present controls.
  ctx.slots.inject("settings.general.item", () =>
    ctx.slots.register(
      { name: "settings.general.item", id: "theme-eva", order: 15, locale: LOCALE_NS, label: "EVA" },
      makeSettingsRow(prefs),
    ),
  );
  ctx.slots.inject("sidebar.footer.action", () =>
    ctx.slots.register(
      { name: "sidebar.footer.action", id: "theme-eva-replay", order: 50, locale: LOCALE_NS },
      makeFooterReplay(prefs),
    ),
  );
  ctx.slots.inject("conversation.session.header.utilities", () =>
    ctx.slots.register(
      { name: "conversation.session.header.utilities", id: "theme-eva-sync", order: 5, locale: LOCALE_NS },
      makeSyncMeter(prefs),
    ),
  );
  ctx.slots.inject("conversation.input.dock", () =>
    ctx.slots.register(
      { name: "conversation.input.dock", id: "theme-eva-edge", order: 1000, locale: LOCALE_NS },
      makeRunningIndicator(prefs),
    ),
  );
  ctx.slots.inject("shell.overlay", function* () {
    yield ctx.slots.register(
      { name: "shell.overlay", id: "theme-eva-cinema", order: 1000, locale: LOCALE_NS },
      makeCinemaOverlay(prefs),
    );
  });

  // Brand seats shadow the shipped UI, so they are only occupied while the theme is on.
  const brandSeats = [
    ["sidebar.brand.mark", BrandMark],
    ["sidebar.brand.name", BrandName],
    ["conversation.hero.brand.mark", BrandMark],
  ];
  for (const [name, Component] of brandSeats) {
    ctx.slots.inject(name, () => {
      let dispose;
      const sync = () => {
        const on = prefs.get().enabled;
        if (on && !dispose) dispose = ctx.slots.register({ name }, Component);
        else if (!on && dispose) {
          dispose();
          dispose = undefined;
        }
      };
      const off = prefs.subscribe(sync);
      sync();
      return () => {
        off();
        dispose?.();
        dispose = undefined;
      };
    });
  }
}
