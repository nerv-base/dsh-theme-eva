// Pre-render the announcer lines with edge-tts (Microsoft online neural voice).
// Generation only: the plugin plays the resulting local mp3 files and never
// calls a speech service at runtime.
//
// Lines marked `shared` in src/shared/units.js are spoken identically by every
// unit and render once to assets/voice/shared-<line id>.mp3; the rest render
// per unit to assets/voice/<unit id>-<line id>.mp3 (see `voiceFile`).
//
//   python3 -m pip install --user edge-tts
//   node scripts/gen-voice.mjs            # render missing clips
//   node scripts/gen-voice.mjs --force    # re-render all clips
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { UNITS, voiceFile, voiceLines } from "../src/shared/units.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "voice");
const force = process.argv.includes("--force");
mkdirSync(outDir, { recursive: true });

// One entry per distinct file, in first-seen order (units in display order).
const clips = new Map();
for (const unit of Object.values(UNITS)) {
  for (const line of voiceLines(unit)) {
    const file = voiceFile(unit, line);
    const clip = { file, text: line.voice, voice: unit.voiceName };
    const seen = clips.get(file);
    if (!seen) clips.set(file, clip);
    else if (seen.text !== clip.text || seen.voice !== clip.voice) {
      throw new Error(`${file}: units disagree on a shared line (${seen.text} / ${clip.text})`);
    }
  }
}

for (const { file, text, voice } of clips.values()) {
  const out = join(outDir, file);
  if (!force && existsSync(out) && statSync(out).size > 0) continue;
  // Calm operator delivery: a touch slower, slightly lower, no other processing.
  execFileSync("python3", [
    "-m", "edge_tts",
    "--voice", voice,
    "--rate=-6%",
    "--pitch=-4Hz",
    "--text", text,
    "--write-media", out,
  ], { stdio: "inherit" });
  console.log("rendered", file);
}

writeFileSync(join(outDir, "VOICE-NOTES.json"), JSON.stringify({
  engine: "Microsoft online speech via edge-tts (generation only)",
  settings: { rate: "-6%", pitch: "-4Hz" },
  runtimeProcessing: "band-limited intercom EQ and light compression in WebAudio",
  lines: [...clips.values()],
}, null, 2) + "\n");
