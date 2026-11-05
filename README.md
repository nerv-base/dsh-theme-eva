# dsh-theme-eva

An EVA Unit-02 theme for DeepSeek Harness (DSH).

- **Entry cinematic.** Every time the page opens: start gate → entry plug inserted into the spine socket → plug lock → LCL floods the cabin and is electrified → main power, A10 nerve connection → sync ratio climbs to 99.2% and waits for the pilot to confirm → 100% → 「弐号機 起動」 title card → workbench. Built in three.js and loaded only while it plays. Click **Skip** or press **Esc** at any time.
- **Sync meter.** Under the composer: sync ratio = 100% − context window occupancy, taken from the session's real context pressure. Below 30% it turns orange (精神汚染), below 10% red (シンクロ率低下). While a turn runs, the meter switches to **internal power** and counts the turn's elapsed time; when idle it shows **external power (umbilical)**.
- **Scan beam.** A thin orange beam sweeps the window while a session is running.
- **Everyday skin.** Kept restrained so chat and code stay readable: Unit-02 palette, square corners, a red gradient at the top of the sidebar, a "02" unit mark, and Mincho titles. Messages and code blocks keep DSH's own fonts.

Settings live in **Settings → General → EVA 接入 / EVA Link**: theme, cinematic, voice and sound, scan beam and sync meter can each be turned off, and there is a **Replay** button. The sidebar footer has a **重新接入 / Re-link** button too.

While the theme is on, the appearance is locked to dark (EVA has no light mode). Turning it off restores your own light/dark/system setting.

If the system setting **Reduce motion** is on, the 3D cinematic is replaced by a 2-second static title card, with no gates and no scan beam.

## Install

```sh
git clone <this repo> dsh-theme-eva
cd dsh-theme-eva
npm install
npm run build
```

Then, from a DSH session, ask the agent to install the bundle at the absolute path of this directory (plugin manager `install_bundle`), or install it from the plugin market once it is published. Reload the window after installing.

## Develop

| Command | What it does |
| --- | --- |
| `npm run build` | Bundle `src/` into `lib/client.js` (main) and `lib/client.cinema.js` (lazy cinematic chunk). `-- --dev` skips minification, `-- --watch` rebuilds on change. |
| `npm run fonts` | Re-subset the fonts from the full OTF/TTF sources (`EVA_FONT_SRC`, default `/tmp/evafonts`) to the characters used in `src/`. Run after changing any Japanese copy. |
| `npm run voice` | Render missing announcer clips with edge-tts; `-- --force` re-renders all. Needs `python3 -m pip install --user edge-tts`. |

`scripts/harness/cinema.html` runs the cinematic on its own: serve the repository root with any static server and open `/scripts/harness/cinema.html`.

Unit-specific values (palette, number, pilot callsign, every cinematic line and its spoken reading) live in `src/shared/units.js`. Only Unit-02 ships today; another unit is one more entry there.

Layout:

```
lib/index.js            Host half: preferences (Config) + allowlisted asset route /eva-theme-assets
src/client/             Browser half: theme tokens, skin CSS, settings row, brand seats, sync meter, overlay
src/cinema/             Lazy chunk: three.js scene, HUD, WebAudio sound design, announcer
src/shared/units.js     Per-unit configuration
assets/                 Icon, font subsets, announcer clips
```

## Credits and licenses

Inspired by **eva-codex-workbench** (MIT, © 2026 Iris-change), an EVA Unit-02 styled Codex workbench. This project is a separate implementation for DSH and copies none of its code.

The code is MIT licensed. Bundled fonts are SIL OFL 1.1 subsets of Noto Serif CJK JP and Barlow Condensed; three.js is MIT. **The announcer clips are not covered by the MIT license**: they were rendered with Microsoft's ja-JP-NanamiNeural voice through edge-tts, and Microsoft has not granted an explicit redistribution license for such output. See [NOTICE.md](NOTICE.md) for details and for how to remove or replace them.

## Disclaimer

This is an unofficial fan work. It is not affiliated with, endorsed by, or sponsored by khara, Inc., Studio Gainax, or any other rights holder of *Neon Genesis Evangelion*, nor by DeepSeek. It contains no footage, music, voice recordings, character artwork or logos from the series. "Evangelion" and related names are trademarks of their respective owners.
