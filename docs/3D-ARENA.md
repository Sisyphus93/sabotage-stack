# The 3D Arena

Sabotage Stack now renders the tower in a real, perspective-correct 3D world. The
original 2D game is untouched: it is still drawn every frame, still owns all input,
all rules, all accessibility text and all of the audited behaviour. The 3D layer is
a separate, additive overlay that only *reads* game state.

## What it is (and is not)

It is a genuine software 3D pipeline written from scratch, with no libraries, no
WebGL context and no network access — so the client stays a single file that works
from `file://`, in a locked-down browser, and in the jsdom + Skia test harness.

```
world vertices -> 4x4 view matrix -> perspective projection -> near-plane clipping
-> painter's-algorithm depth sort -> per-face Lambert + Blinn-Phong shading
-> distance fog -> additive light / particles -> cinematic post pass
```

It is not a parallax trick or a CSS transform. Blocks are chamfered octagonal
prisms with eight shaded side faces, a glossy top and glowing rim edges. The
camera orbits in 3D, follows the tower as it grows, and can be moved by the player.

## Where things are

| Path | Purpose |
|---|---|
| `client/scene3d.js` | **Source of truth.** The whole 3D engine: maths, worlds, renderer, post FX. |
| `sabotage-stack.html` | Inlines that module between `SCENE3D_START` / `SCENE3D_END`, plus markup, CSS and the client wiring. |
| `scripts/sync-scene3d.js` | Copies the module into the HTML (`--check` verifies it, used by `npm test`). |
| `scripts/preview-3d.js` | Dev tool: boots the real page in jsdom and writes 3D overlay PNGs for visual review. |
| `test/scene3d.test.js`, `test/scene3d-sync.test.js` | Engine unit tests, in-page integration tests and the inline-sync check. |

After editing `client/scene3d.js`, run:

```
node scripts/sync-scene3d.js
```

## Controls

| Control | Action |
|---|---|
| **View picker** (topbar) or **V** | Switch between `3D arena` (default) and `Classic 2D`. Persisted in `localStorage`. |
| Right-drag / Shift-drag / Alt-drag on the stage | Orbit the camera. A plain tap still drops a block. |
| **Free cam** button or **F** | Let any single-pointer drag orbit instead of dropping (use Space or the Drop button to play). |
| Scroll wheel | Dolly in / out. |
| **Q** / **E** | Rotate left / right. |
| **R** / **Reset view** | Return to the default camera. |
| **O** / **Auto orbit** | Toggle the slow ambient camera drift. |
| Pointer movement over the stage | Subtle parallax lean. |

All motion (auto orbit, parallax, shake, twinkle, grain, speed lines) is disabled
when the game's reduced-motion setting is active. The 3D scene itself still renders.

A glowing footprint is projected onto the top face of the stack at the moving
block's current X position, so alignment stays readable from any camera angle.

## Three worlds

The theme picker now changes a whole 3D environment, not just a palette:

- **Paper Studio** — warm parchment daylight, pale sun, soft dust motes, parchment
  grid, gentle shadows.
- **Sunset Wireframe** — purple void, banded synthwave sun, magenta perspective
  grid, neon rim light, stars, scanlines and heavy bloom.
- **Prime Time Studio** — deep blue stage, gold grid, glossy floor, overhead
  spotlight rig, studio haze and confetti-bright specular highlights.

## Sabotages in 3D

Every sabotage gets a spatial treatment on top of the unchanged game rules:
`spotlight` blacks out the world outside a real cone of light; `portal` opens
glowing gates at both edges; `magnet`, `calipers`, `superglue` and `crumble` draw
3D arcs, guides, strands and cracks; `pisa` leans the whole tower; `earthquake`
and `drunk` shake and roll the camera; `zoom` punches the lens; `peekaboo` fades
the mover; `double` shows a translucent decoy; `slowmo`/`turbo` leave motion
ghosts; `rollercoaster` bobs the mover. Perfect drops fire a shockwave ring and a
spark burst; collapse pulls the camera back, shakes it and throws debris.

## Screens

The title preview and the results screen use the same renderer in `showcase`
mode: a slowly orbiting demo tower on the title card and a rotating 3D monument
of your final stack on results. The wide Competitive host scoreboard stays flat,
because it is a purpose-built multi-column 2D view.

## Performance and fallbacks

- Only the arena for the active screen renders each frame.
- Blocks below the camera's view are culled; tall towers stay cheap.
- Particle count is capped (220), and primitives are sorted once per frame.
- If anything in the 3D layer throws, it disables itself, restores the 2D board
  and records the error in `window.SabotageStack.arena.errors` (asserted empty by
  the test suite).
- `Classic 2D` hides every overlay canvas; the original canvas remains the input
  surface and is still repainted every frame.

## Visual review

```
node scripts/preview-3d.js .preview paper game
node scripts/preview-3d.js .preview sunset game
node scripts/preview-3d.js .preview primetime title
```

PNGs land in `.preview/` (gitignored). `npm test` also boots the real page and
measures pixels from both the 2D and 3D canvases.
