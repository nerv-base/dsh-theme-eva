// dsh-theme-eva — Client half entry.
import { createPrefs } from "./prefs.js";
import { installTheme } from "./theme.js";
import { LOCALE_NS, zh, en } from "./locale.js";
import uiCss from "./ui.css";
import {
  makeBrandMark,
  makeBrandName,
  makeSettingsRow,
  makeFooterReplay,
  makeSyncMeter,
  makeRunningIndicator,
} from "./components.jsx";
import { makeCinemaOverlay } from "./cinemaHost.jsx";
import { makeEffortSync } from "./effort-sync.jsx";

export const inject = ["slots", "locale", "theme", "configForms"];

// Lower than every shipped brand occupant: official brand 0, liveshare viewer -10.
export const BRAND_PRIORITY = -100;

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
  const themeSwitch = installTheme(ctx, prefs);

  // Public switch: `globalThis.dshThemeEva.setUnit("01")` from other plugins or
  // the console. The durable source of truth is the `unit` field of the
  // `theme-eva` settings section, so writing it through configForms works too.
  ctx.effect(() => {
    globalThis.dshThemeEva = themeSwitch;
    return () => {
      if (globalThis.dshThemeEva === themeSwitch) delete globalThis.dshThemeEva;
    };
  }, "dsh-theme-eva: public switch");

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
  // Reasoning effort as a sync-ratio slider, just before the model seat. It rides the
  // shipped model-selection service; without it (or for addressed subagent sessions,
  // where model selection is unavailable) the slider simply is not offered.
  ctx.inject(["slots", "modelDirectories", "sessions"], (scope) => {
    const models = scope.modelDirectories;
    const sessions = scope.sessions;
    scope.slots.inject("conversation.input.right", () =>
      scope.slots.register(
        {
          name: "conversation.input.right",
          id: "theme-eva-effort-sync",
          order: 1000,
          locale: LOCALE_NS,
          inject: (sessionId) => {
            const available = sessions.subagentAddress?.(sessionId) === undefined;
            if (!available) return { available };
            const directory = models.directoryFor(sessionId);
            return {
              available,
              directory: directory.store,
              load: () => directory.load().catch(() => {}),
              select: (selection) => directory.select(selection),
            };
          },
        },
        makeEffortSync(prefs),
      ),
    );
  });
  ctx.slots.inject("shell.overlay", function* () {
    yield ctx.slots.register(
      { name: "shell.overlay", id: "theme-eva-cinema", order: 1000, locale: LOCALE_NS },
      makeCinemaOverlay(prefs),
    );
  });

  // Brand seats shadow the shipped UI, so they are only occupied while the theme is on.
  //
  // These are `single` slots and a registration only shadows an existing occupant when it
  // sits at a *strictly lower* priority — an equal priority is a hard error
  // (`single slot "sidebar.brand.mark" already has a registration at priority 0`).
  // The shipped `@deepseek-ai/dsh-client-ui-brand-official` occupies the sidebar seats at
  // priority 0 in official builds, and the experimental liveshare viewer brand at -10, so
  // the theme registers below both. Registering at the default 0 breaks the moment the
  // official brand is present.
  const BrandMark = makeBrandMark(prefs);
  const BrandName = makeBrandName(prefs);
  const brandSeats = [
    ["sidebar.brand.mark", BrandMark],
    ["sidebar.brand.name", BrandName],
    ["conversation.hero.brand.mark", BrandMark],
  ];
  for (const [name, Component] of brandSeats) {
    ctx.slots.inject(name, () => {
      let dispose;
      const register = () => {
        try {
          return ctx.slots.register({ name, priority: BRAND_PRIORITY, registrant: "dsh-theme-eva" }, Component);
        } catch (error) {
          // Losing this seat costs the themed brand only; it must not take the rest of the theme down.
          console.warn(`[dsh-theme-eva] brand seat "${name}" not occupied`, error);
          return undefined;
        }
      };
      const sync = () => {
        const on = prefs.get().enabled;
        if (on && !dispose) dispose = register();
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
