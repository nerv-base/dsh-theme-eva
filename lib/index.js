// dsh-theme-eva — Host half.
// Owns two things only:
//   1. the durable user preferences (Config, editable from the client through configForms);
//   2. a read-only, allowlisted route serving the bundled OFL font subsets.
import { readFile } from "node:fs/promises";
import z from "@deepseek-ai/schemastery";

export const name = "dsh-theme-eva";

/** Live user preferences. Every field is volatile so the settings UI can write it without a restart. */
export const Config = z.object({
  enabled: z.boolean().default(true).description("Apply the EVA theme.").volatile(),
  unit: z
    .union([z.const("02").description("Unit-02 (弐号机)"), z.const("01").description("Unit-01 (初号机)")])
    .default("02")
    .description("Which Evangelion unit the theme dresses the app as.")
    .volatile(),
  cinematic: z.boolean().default(true).description("Play the entry-plug boot cinematic when the page opens.").volatile(),
  voice: z.boolean().default(true).description("Japanese announcer voice and sound effects in the cinematic.").volatile(),
  scanBeam: z.boolean().default(true).description("Sweep a scan beam across the window while a session is running.").volatile(),
  syncMeter: z.boolean().default(true).description("Show the sync-rate meter (remaining context) under the composer.").volatile(),
});

const ASSET_PREFIX = "/eva-theme-assets";
const FONT_FILES = new Set([
  "eva-mincho.woff2",
  "eva-condensed-medium.woff2",
  "eva-condensed-semibold.woff2",
]);
const FONT_DIR = new URL("../assets/fonts/", import.meta.url);

export function apply(ctx) {
  ctx.inject(["settings"], (sctx) => {
    sctx.effect(() => sctx.settings.configure({ auto: false }, ctx.fiber), "dsh-theme-eva: settings page policy");
  });

  ctx.inject(["webServer"], (wctx) => {
    const server = wctx.get("webServer");
    wctx.effect(() => server.register({
      kind: "prefix",
      path: ASSET_PREFIX,
      handler: async (req, res) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
          res.writeHead(405, { Allow: "GET, HEAD" }).end();
          return;
        }
        const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
        const file = pathname.slice(ASSET_PREFIX.length + 1);
        if (!pathname.startsWith(`${ASSET_PREFIX}/`) || !FONT_FILES.has(file)) {
          res.writeHead(404).end();
          return;
        }
        let bytes;
        try {
          bytes = await readFile(new URL(file, FONT_DIR));
        } catch (error) {
          if (error?.code !== "ENOENT") throw error;
          res.writeHead(404).end();
          return;
        }
        res.writeHead(200, {
          "Content-Type": "font/woff2",
          "Content-Length": bytes.length,
          "Cache-Control": "public, max-age=86400",
          "X-Content-Type-Options": "nosniff",
        });
        res.end(req.method === "HEAD" ? undefined : bytes);
      },
    }), "dsh-theme-eva: font route");
  });
}
