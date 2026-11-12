# THE ATRIUM

Sabotage Stack does not "switch on" 3D when a game starts. The page is a 3D room
from its first painted frame: a WebGL monument behind glass panels, extruded
headlines, physical controls, medallion icons, a pointer-driven light, parallax
planes, and depth transitions between every screen. The board is a portal inside
that room, not the whole experience.

## What exists, from the outside in

1. **First paint.** `<html>` carries `data-dimension="3d"`, and a tiny head
   script restores a saved theme / Classic 2D preference before any CSS or body
   content is parsed. The dark Atrium palette, glass chrome and world canvas are
   therefore already in place before the main script boots.
2. **The world canvas** (`#world-canvas`, `client/world3d.js`) is a real WebGL1
   scene. A procedural sky pass paints a nebula, stars, key light, shafts,
   vignette and grade; a depth-tested geometry pass paints a 16-level monument,
   mirrored plinth, three orbital rings, five orbiting cubes, twelve shards and
   a reflective floor. It is 4,830 vertices / 1,610 triangles — real perspective
   geometry, not a per-pixel raymarch — with bevel highlights, fog, specular,
   Fresnel and procedural floor reflections. The camera slowly orbits, responds
   to the pointer, dollies in during the intro, and dims behind gameplay.
3. **The DOM is the near field.** The `html[data-dimension="3d"]` CSS turns the
   topbar, cards, dialogs, chips, buttons, pills, step numbers and result
   panels into glass planes at different `translateZ` depths. Headlines are
   extruded with layered text shadows; the brand mark is a spinning CSS cube;
   sabotage/vote icons are tilted medallions. `--px` / `--py` drive camera
   parallax on the large planes, while `--light-x` / `--light-y` move a screen
   blend light over everything. Screens arrive through `screenPortal`, a short
   perspective translate/rotate/blur animation re-triggered on every
   `setScreen`.
4. **The board portal** (`client/scene3d.js`) remains the game-facing 3D layer:
   a dependency-free Canvas-2D perspective renderer with its own camera,
   lighting, gloss, rings, shards, sabotage effects, landing guides, demo tower
   and result tower. It sits inside the glass stage and is orbitable
   independently. The original 2D canvases are still drawn every frame; they
   remain the keyboard/touch input surface, the accessible description, and the
   Classic 2D fallback.
5. **Everything else follows the same room.** Lobby cards, join/how dialogs,
   voting medallions, live stats, effect meters, result towers, room codes,
   HUD badges and screen changes all share the palette, depth, parallax and
   transitions. The three themes — `paper` / ATRIUM, `sunset` / NEON VOID,
   `primetime` / PRIME TIME — repaint the WebGL uniforms, glass tints, HUD and
   board portal together.

## Source of truth and sync

The client is still one deployed HTML file. Edit the modules, then run the sync
scripts; `--check` is enforced by tests.

| Source | Inlined between | Sync |
| --- | --- | --- |
| `shared/game-core.js` | `SHARED_CORE_START/END` | `node scripts/sync-core.js` |
| `client/scene3d.js` | `SCENE3D_START/END` | `node scripts/sync-scene3d.js` |
| `client/world3d.js` | `WORLD3D_START/END` | `node scripts/sync-world3d.js` |

`scripts/sync-world3d.js` refuses to inline a source containing `</script`.
`test/world3d-sync.test.js` and `test/scene3d-sync.test.js` keep the copies
identical. No CDN, font request, texture, model file or network asset is used;
the single HTML file works in the offline Arena preview.

## Controls

| Input | Effect |
| --- | --- |
| Move pointer | Steers the WebGL camera, CSS plane parallax and shared light |
| `Dimension` picker / `V` | The Atrium ↔ Classic 2D |
| `Theme` picker | Repaints the entire world, glass, HUD and board portal |
| Right / Shift / Alt-drag stage | Orbit the board portal camera |
| `Free cam` / `F` | Drag the stage with any pointer |
| Wheel | Dolly the board portal |
| `Q` / `E` | Rotate the board portal |
| `R` | Reset the board portal view |
| `O` | Toggle auto-orbit |
| Drop button / `Space` / tap | Play the game exactly as before |

The camera bar, badge and HUD report the live dimension, backend and triangle
count. Controls are hidden on narrow phones; a glass backing keeps the
extruded headline readable over the monument there.

## Fallbacks, accessibility and motion

- **No WebGL / jsdom:** `World` falls back to a Canvas-2D painter (nebula,
  starfield, perspective grid, tower, vignette). If even that is unavailable,
  `html.world-fallback` shows a static layered gradient Atrium.
- **Board portal failure:** only the board portal steps aside. The full-page
  Atrium stays in 3D; `html.arena-host-fallback` restores the original 2D
  canvases and hides the orbit controls.
- **Classic 2D:** the world canvas, pointer light, HUD, glass chrome and depth
  transitions are all disabled; the audited flat design returns, including the
  original theme-color meta.
- **Reduced motion:** the world clock and intro dolly are held still, pointer
  parallax is frozen, CSS arrivals / cube spin / screen portals are disabled,
  and the board portal keeps its own reduced-motion behaviour.
- **Focus / input:** the world layers are `aria-hidden` and `pointer-events:none`;
  the 2D game canvas keeps `tabindex`, `role`, Space handling and the mirrored
  focus ring. No extra `touch-action:none` rules were added.

## Performance

Geometry was chosen deliberately over a full-screen raymarch: the sky is one
cheap fragment pass and the monument is one static vertex buffer. WebGL renders
at 0.85× the viewport (capped at 1400 px) with a 30 fps background cap; the
Canvas-2D fallback renders at 0.6×. Theme changes are uniforms, not geometry
rebuilds. The original 2D draw loop still runs underneath for input,
accessibility and pixel-level test coverage.

## Tests and visual QA

```sh
npm ci
npm test
node scripts/sync-world3d.js --check
node scripts/sync-scene3d.js --check
node scripts/sync-core.js --check
```

`test/world3d.test.js` covers the module API, software fallback, first-paint 3D,
live world frames, pointer CSS variables, theme repaint, Classic 2D persistence,
reduced motion and static Atrium/fallback CSS. `test/scene3d.test.js` still
covers the board portal, camera controls and 2D pixel contract.

`scripts/preview-3d.js` renders jsdom/Canvas PNGs without a browser. For real
Chromium screenshots, install the dev-only tools and run the QA script against
the local server:

```sh
npm i --no-save playwright-core @sparticuz/chromium
LD_LIBRARY_PATH=/tmp/al2023/lib:/tmp node scripts/shot.js .preview
```

`scripts/shot.js` inflates the bundled Chromium libs into `/tmp/al2023`, visits
`http://127.0.0.1:3000/`, and writes title, parallax, lobby, game, three
themes, results, dialog, dialog-depth and phone screenshots into the ignored
`.preview/` directory. It also prints the WebGL backend, triangle count and any
console/page errors. It is a development tool only; the deployed app has no
Playwright dependency.

## Deployment

`server.js` still serves `/`, `/sabotage-stack.html`, `/healthz` and `/ws`; the
client remains a single inlined file, so `render.yaml` needs no static build or
CDN. The authoritative multiplayer rules in `server/` and `shared/game-core.js`
are unchanged.
