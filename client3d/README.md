# client3d — the 3D layer of Sabotage Stack

A WebGL renderer and interaction layer that sits **on top of the unchanged game**. The rules (`shared/game-core.js`), the
WebSocket protocol, the server and the solo logic are untouched. The page (`sabotage-stack.html`) still owns all state and
all DOM; this layer only *reads* it and draws it in 3D.

```
sabotage-stack.html  ── defines window.SabotageStackHost { view(), snapshot, setActive(flag) }
public/stack3d.js    ── the bundle built from this folder; attaches to the host, injects the 3D/Flat toggle
```

The 2D game stays fully intact as the fallback (and is what the jsdom tests exercise).

## Building

`public/stack3d.js` is **committed**. Render only runs `npm ci && npm start`, so there is no build step in production.
After editing anything in `client3d/`:

```sh
npm run build        # minified bundle -> public/stack3d.js (esbuild, three.js bundled in, no CDN)
npm run build:dev    # readable bundle with an inline source map (~6 MB): for debugging only, never commit it
npm run build:check  # fails if the committed bundle is stale or is a dev build (also run by npm test)
npm run typeface     # regenerate client3d/assets/typeface-*.json from the fonts embedded in the page
```

The server serves the bundle at `/assets/stack3d.js` (and `/public/stack3d.js`, which is what the page requests) with an
ETag, `no-cache` revalidation and brotli/gzip.

## Using it

| | |
|---|---|
| **3D view / Flat view** button | top bar; the choice is remembered in `localStorage['sabotage-stack-view-v1']` |
| `?3d=off` or `?view=flat` | start flat (links, kiosks, low-end devices) |
| `?3d=on` | start in 3D regardless of the remembered choice |
| `?tier=low\|medium\|high\|ultra` | pin the quality tier (turns the adaptive governor off) |
| `?scale=0.75` | pin the render resolution scale (also turns the governor off) |

Fallbacks, in order: no usable WebGL2 → the toggle is hidden and the flat game runs; three consecutive frame errors →
the layer disables itself and the flat view takes over mid-run; Reduced Motion (system or the page's Motion menu) is honoured
by every scene (no shake, no confetti, instant reveals).

## What is in 3D

* **Three worlds**, one per theme: Paper (paper-cut hills, clearcoat blocks, tilt-shift), Sunset Stack '94 (synthwave sun and
  grid, flat-shaded neon blocks, pixelate + dither + scanlines) and Prime Time (game-show studio, sunburst, LED wall, beams).
  Each has an altitude "sky journey" as the tower rises and an instanced crowd that raises ballot cards during chat votes.
* **Home**: the headline is real 3D letters that rain onto ledges and react to the pointer; a self-playing demo tower runs a
  fake chat vote through the *real* rules; an orbiting ring of the 16 sabotage icons, each of which triggers its effect.
* **Play**: ruler, PERFECT!/TIMBER!/sabotage-name popups in 3D type, a badge with the countdown ring, and a per-sabotage
  look (blur, wobble, zoom, spotlight veil, magnifier, calipers, portals, …) for all 16.
* **Lobby**, **competitive spectator arena**, **results** and, for multiplayer, a **podium finale** where every final tower
  climbs block by block beside the result cards.
* The page's sabotage icons are replaced by sprites baked from the same 3D models; the multiplayer result cards are
  3D snapshots (`snapshot.js`).

## Modules

| file | role |
|---|---|
| `index.js` | boot: finds the host, injects the toggle, runs the frame loop, handles fallbacks |
| `stage.js` | the scene director: picks a mode (hero / lobby / play / arena / results / celebrate), camera, popups |
| `engine.js`, `governor.js`, `shaders.js` | renderer, post chain (bloom, tilt-shift, grade, dither, spotlight veil), adaptive quality |
| `worlds.js`, `world-common.js`, `audience.js`, `palette.js` | the three worlds, sky, plinth, crowd, per-theme colours |
| `tower.js`, `blocks.js`, `physics.js` | the 3D tower, block geometry/materials, a small rigid-body solver for tumbling pieces |
| `effects3d.js`, `particles.js`, `popups.js` | sabotage rigs, sparks/confetti/pulse rings, 3D text popups and the ruler |
| `hero.js` | headline letters, the self-playing demo (`AttractDirector`), the icon ring (`Arsenal`) |
| `podium.js` | pure layout/reveal rules for the multiplayer results podium |
| `icons3d.js`, `text3d.js`, `snapshot.js` | 3D icons and baked sprites, typefaces → geometry, result-card snapshots |
| `assets/typeface-*.json` | glyph outlines extracted from the fonts already embedded in the page |

## Keeping it in sync with the game

* `palette.js` mirrors the page's block-colour maps; `test/client3d.test.js` fails if they drift.
* The 16 sabotage ids come from `shared/game-core.js` and the page's own sabotage list, which stay the source of truth.
  A new sabotage needs its rules there, then an icon in `icons3d.js` and a rig/look in `effects3d.js` + `stage.js`. The 3D
  layer tolerates ids it does not know (generic icon, no special rig), so it never blocks a new sabotage from shipping.
* Never read game state through anything but `SabotageStackHost.view()`; never write to it.

## Debugging

`window.__stack3d` is the live `Stage` (mode, theme, engine, fx) and `window.__stack3dBoot` exposes `enable()`/`disable()`.
Set `window.__stack3dNoRender = true` to run the logic without drawing (used by the headless QA scripts).
