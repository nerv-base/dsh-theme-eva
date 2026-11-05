# Third-party notices

The theme code is MIT licensed (see `LICENSE`). The bundled files below keep
their own licenses.

| File | Source | License |
| --- | --- | --- |
| `assets/fonts/eva-mincho.woff2` | Subset of **Noto Serif CJK JP Black** (Adobe / Google) | SIL Open Font License 1.1 — `assets/fonts/OFL-NotoSerifCJK.txt` |
| `assets/fonts/eva-condensed-medium.woff2`, `assets/fonts/eva-condensed-semibold.woff2` | Subsets of **Barlow Condensed** (Jeremy Tribby) | SIL Open Font License 1.1 — `assets/fonts/OFL-BarlowCondensed.txt` |
| `lib/client.cinema.js` | Contains a tree-shaken build of **three.js** | MIT — Copyright © 2010-2024 three.js authors |
| `assets/voice/*.mp3` | Japanese announcer lines rendered with Microsoft **ja-JP-NanamiNeural** through `edge-tts` (`scripts/gen-voice.mjs`, settings in `assets/voice/VOICE-NOTES.json`) | **Not covered by the MIT license.** See below. |

The subset fonts are renamed ("EVA Mincho", "EVA Condensed") only as CSS
family names; the font files themselves keep their original names and
copyright notices, as the OFL requires.

## Announcer voice

The ten clips in `assets/voice/` are original system-announcement lines (no
dialogue from the anime, no imitation of any voice actor) spoken by the
generic Microsoft `ja-JP-NanamiNeural` voice. They were generated once through
the Microsoft online speech service via the open-source `edge-tts` client and
are played locally; the theme never contacts a speech service at runtime and
ships no voice model or credentials. Runtime processing is a band-limited
intercom EQ and light compression in WebAudio.

Microsoft has not granted an explicit public redistribution license for audio
produced this way, so the MIT license of this project does **not** extend to
these clips. If that matters for your use, delete `assets/voice/` (the theme
falls back to the operating system's Japanese speech voice) or regenerate the
lines with a voice you hold rights to: edit the `voice` strings in
`src/shared/units.js` and run `npm run voice -- --force`.

## Not included

No audio recordings from the anime, music, character artwork, or NERV /
studio logos are included. Sound effects are synthesized at runtime with
WebAudio; the "02" unit mark is an original drawing.
