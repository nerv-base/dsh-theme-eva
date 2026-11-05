// Builds the Client half into the DSH browser module format:
//   lib/client.js         main module (React from the platform module table)
//   lib/client.cinema.js  lazy chunk with three.js + the boot cinematic
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const ID = pkg.name;
const watch = process.argv.includes("--watch");
const minify = !process.argv.includes("--dev");

const common = {
  bundle: true,
  format: "cjs",
  platform: "browser",
  target: ["chrome120", "safari17"],
  external: ["react"],
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  loader: { ".css": "text", ".jsx": "jsx" },
  minify,
  legalComments: "none",
  write: false,
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "warning",
};

function wrapMain(code) {
  return `window.__ModuleLoader__.load({ id: ${JSON.stringify(ID)}, factory: (require) => {
var __dshRequire = require;
var module = { exports: {} };
var exports = module.exports;
${code}
return module.exports;
} });
`;
}

function wrapChunk(name, code) {
  return `window.__ModuleLoader__.load({ id: ${JSON.stringify(ID)}, chunk: ${JSON.stringify(name)}, factory: (require) => {
var module = { exports: {} };
var exports = module.exports;
${code}
return module.exports;
} });
`;
}

async function run() {
  await mkdir(new URL("../lib/", import.meta.url), { recursive: true });
  const [main, cinema] = await Promise.all([
    build({ ...common, entryPoints: [new URL("../src/client/index.js", import.meta.url).pathname] }),
    build({ ...common, entryPoints: [new URL("../src/cinema/index.js", import.meta.url).pathname] }),
  ]);
  const mainCode = main.outputFiles[0].text;
  const cinemaCode = cinema.outputFiles[0].text;
  await writeFile(new URL("../lib/client.js", import.meta.url), wrapMain(mainCode));
  await writeFile(new URL("../lib/client.cinema.js", import.meta.url), wrapChunk("client.cinema.js", cinemaCode));
  const kb = (s) => `${(Buffer.byteLength(s) / 1024).toFixed(1)} KiB`;
  console.log(`lib/client.js ${kb(mainCode)} · lib/client.cinema.js ${kb(cinemaCode)}`);
}

await run();
if (watch) {
  const { watch: fsWatch } = await import("node:fs");
  let timer;
  fsWatch(new URL("../src/", import.meta.url), { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(() => run().catch((e) => console.error(e.message)), 120);
  });
  console.log("watching src/ …");
}
