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

## Turning the home scene

On the home screen (and the solo results) the whole scene can be turned a full 360 degrees and looked at from above or below.

| | |
|---|---|
| hold the **left or right mouse button** on the scene and drag | turns it (right-click drags work, the context menu stays out of the way); lets go with a little inertia |
| a finger on the scene, swiping **sideways** | turns it; vertical swipes still scroll the page |
| double-click, **Home**, or the reset button | back to the default view (it also returns by itself after 30 s of no input) |
| **Left / Right arrow** (Shift = quarter turn), or the two arrow buttons | step round the scene |
| a click that does not move | still pops a headline letter or calls a sabotage from the ring |

Drags that start on a button, a link, a menu or one of the page's glass panels are left alone, so text stays selectable and
controls stay controls. The stage (plinth, floor, tower, headline, icons) stays put while the camera circles it; the set
dressing (crowd galleries, key / rim / fill lights, reflections, the sky and the backdrop) turns with the camera, so every
angle is composed and lit like the default one. Leaving the home screen always snaps back to the default view.

While the pointer rests on the scene it is *hovered*: one `HoverField` (`hover.js`) turns "where is the pointer and how fast"
into a single energy that every reaction reads: letters ripple, lean away and swell near it, a wave runs through the
headline when it arrives, the ring's icons lean in like magnets (and the ring slows so the one you are reaching for holds
still), the crowd cranes towards it and cheers, a warm light follows it, a sparkle trail and floor ripples answer fast
movement, and the tilt-shift focus follows it. Reduced Motion removes every one of those motions (the light stays).

## Playing with the title screen

The home scene is a toy as well as a trailer. The demo tower plays itself until a visitor takes over.

| | |
|---|---|
| **click the tower**, or the **Drop block** key under it | drops the moving block by hand (the first drop hands the tower over; nothing drops for you, votes included, until you have left it alone for 9 s) |
| **Trigger sabotage** key | calls a random sabotage down on the tower at once (a running one winds down, an open vote goes its way) |
| click a ring icon | the same, for that icon |
| callouts | PERFECT! / TIMBER! / TOWER COMPLETE! and the name of every sabotage that lands float beside the tower in extruded 3D letters |

By hand the perfect window is 10 px (the real game's is 3), because perfects are the fun part and this is a toy. Reaching the tower's
height locks it, celebrates, and brings it down. The game itself, its rules and the protocol are untouched.

## The crowd

Every spectator has googly eyes: white balls with loose pupils on springs. Everyone watches the moving block (the pointer, once it is
over the home scene; the lanes, in the arena). During a vote the paddles flail, on **Perfect!** a stadium wave runs across the
galleries (rationed, so a run of perfects is one good wave), and when a sabotage lands there is chaos: paddles everywhere and the
eyes spin. `Crowd.setGaze / wave / chaos` are the whole interface.

## Tactile UI

While the 3D layer runs, buttons, the vote keys and the Space bar are keycaps: a side wall of real depth (a different wall colour
per theme), a hover lift and a press that sinks into the wall, by pointer, touch or the key itself (`tactile.js` presses the DROP bar
for Space and the vote keys for 1 / 2 / 3). The home copy, the lobby cards and the results card tilt up to 2.2 degrees towards the
pointer (never on touch, never under Reduced Motion). The brand emblem and the speaker are sculpted and baked like the 17 sabotage
icons and swapped in; Flat view puts the original drawings back. All of it is under `html.has-3d`, so the flat page is unchanged.

## Lobby and results

* **Lobby**: every connected player stands on the plinth as a **totem** in their own colour inside a pulsing beacon ring (a second
  ring expands from it, a light column hums), with googly eyes that follow the pointer and a name plate. They drop in, glow while
  connected, and shrink away on leaving (`totems.js`).
* **Solo results**: the score is a giant extruded sculpture; a new session best is **crowned** with a turning gold crown (`crown.js`).
  Hold left or right and drag to walk all the way round it, like the home scene (same controller, controls and rules).

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
| `orbit.js`, `hover.js`, `orbit-hud.js` | pure turn-the-scene and hover rules (unit-tested in Node) and the on-screen hint / turn buttons |
| `totems.js`, `crown.js`, `tactile.js` | lobby player totems and beacons, the new-best crown, key presses and deck tilt |
| `once-soon.js` | a "run once, soon" latch (the page's icon sprites are baked with it; a restarting debounce would never fire at 60 fps) |
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
