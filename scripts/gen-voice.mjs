// Pre-render the announcer lines with edge-tts (Microsoft online neural voice).
// Generation only: the plugin plays the resulting local mp3 files and never
// calls a speech service at runtime.
//
//   python3 -m pip install --user edge-tts
//   node scripts/gen-voice.mjs            # render missing clips
//   node scripts/gen-voice.mjs --force    # re-render all clips
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { UNITS, voiceFile, voiceLines } from "../src/shared/units.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "voice");
const force = process.argv.includes("--force");
mkdirSync(outDir, { recursive: true });

const manifest = [];
for (const unit of Object.values(UNITS)) {
  for (const line of voiceLines(unit)) {
    const file = voiceFile(unit, line);
    const out = join(outDir, file);
    manifest.push({ file, text: line.voice, voice: unit.voiceName });
    if (!force && existsSync(out)) continue;
    // Calm operator delivery: a touch slower, slightly lower, no other processing.
    execFileSync("python3", [
      "-m", "edge_tts",
      "--voice", unit.voiceName,
      "--rate=-6%",
      "--pitch=-4Hz",
      "--text", line.voice,
      "--write-media", out,
    ], { stdio: "inherit" });
    console.log("rendered", file);
  }
}
writeFileSync(join(outDir, "VOICE-NOTES.json"), JSON.stringify({
  engine: "Microsoft online speech via edge-tts (generation only)",
  settings: { rate: "-6%", pitch: "-4Hz" },
  runtimeProcessing: "band-limited intercom EQ and light compression in WebAudio",
  lines: manifest,
}, null, 2) + "\n");
