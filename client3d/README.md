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
| a click that does not move | still pokes the title or calls a sabotage from the ring |

Drags that start on a button, a link, a menu or one of the page's glass panels are left alone, so text stays selectable and
controls stay controls. The stage (plinth, floor, title, tower, icons) stays put while the camera circles it; the set
dressing (crowd galleries, key / rim / fill lights, reflections, the sky and the backdrop) turns with the camera, so every
angle is composed and lit like the default one. Leaving the home screen always snaps back to the default view.

While the pointer rests on the scene it is *hovered*: one `HoverField` (`hover.js`) turns "where is the pointer and how fast"
into a single energy that every reaction reads: the title's letters ripple, lean away and swell near it, a wave runs through
them when it arrives, the ring's icons lean in like magnets (and the ring slows so the one you are reaching for holds
still), the crowd cranes towards it and cheers, a warm light follows it, a sparkle trail and floor ripples answer fast
movement, and the tilt-shift focus follows it. Reduced Motion removes every one of those motions (the light stays).

## The opening: SABOTAGE STACK, built by the sky

The first moment is the title assembling itself (`brick-layout.js`, `title-stack.js`). Each theme's own typeface is turned into rows of
real bricks (a running bond: seams interlock from row to row, so a letter reads as a brick wall), and they rain from the sky onto a
precarious two-tier stack, layer by layer: a slab, **STACK** bottom row first, a second slab on top of those letters, then
**SABOTAGE**. Several hundred bricks are one instanced draw. The camera swoops down to meet it, and the menu is held back
(`html[data-intro="hold"]`) until the build is about 80 % done, when the glass panels swing in from depth. Sunset builds its pixel
font one pixel row per brick behind a flickering marquee; Prime Time's bricks sit under the studio lights.

| | |
|---|---|
| any press or key during the build | rushes it to the end (the menu is released at once) |
| coming back to the menu | rebuilds 2.2x faster, as part of the flight home |
| Reduced Motion | the title is simply there, no hold, no swing, no flight |

**Poke it**: a click or tap knocks out the bricks under the pointer (about 40); they tumble onto the plinth, rest, and fall back into
the wall by themselves a few seconds later. While Superglue holds, the wall only shivers.

**Chat sabotages the title** (`title-effects.js`): every few seconds a `TitleDirector` runs *idle (1.7 s) -> chat votes (1.9 s) ->
the sabotage plays (4.4 s)*, with a "CHAT VOTED: EARTHQUAKE" pill under the scene (the sabotage's icon beside its name). All sixteen have a reaction on the title, drawn from one pure function, `titlePose(id, t, duration)`, which
starts and ends at rest:

| | |
|---|---|
| turbo drunk slowmo magnet accordion | the tiers slide, sway, drag and pull (motion blur, wobble, frost); accordion squeezes SABOTAGE |
| portal rollercoaster | the top tier runs through two swirling gates; a flowing rail carries the title along |
| pisa earthquake | the camera rolls (the world leans up to 16 degrees) while the tiers lean; the stage shakes |
| spotlight peekaboo zoom double | a dark veil with one lit circle sweeping the title; letters vanish and return; a 1.85x macro push-in; a ghost twin |
| crumble superglue calipers | bricks shed from the edges and rebuild bottom-up; the wall turns glossy; two caliper jaws close on it |

A click on a ring icon, or the **Trigger sabotage** key, calls one at once (`TitleDirector.force`): a running one winds down, an open
vote goes the clicked way. The ring itself (16 icons orbiting, hover-leaning, each a trigger) is unchanged. Under Reduced Motion the
five sabotages the game keeps out of reduced-motion rooms (accordion, pisa, rollercoaster, peekaboo, earthquake) are not picked and
do not move the title; every cue that is not movement (veil, ghost, glue, jaws, the caption) stays.

## Pressing Play, and every other change of screen

Screens are a camera flight through the same world, never a cut (`flight.js`, `Stage.startFlight`). The camera's pose is the pure
`blendSpec(from, to, k)`: it starts exactly where the old screen had the camera, lands exactly where the new one wants it, blends the
zoom geometrically and takes angles the short way round, and in the middle pulls back, rises and lifts its target so it reads as
travelling. **Play** also blows the title up: bricks and slab chunks fly, tumble and are gone in a few seconds while the camera glides
down to the tower. The old tower sinks away as the next one rises. Flights run 1.1 to 2.2 s (`FLIGHTS`); under Reduced Motion
there is a cut and a fade.

## The crowd

Every spectator has googly eyes: white balls with loose pupils on springs. Everyone watches the moving block (the pointer, once it is
over the home scene; the lanes, in the arena). During a vote the paddles flail, on **Perfect!** a stadium wave runs across the
galleries (rationed, so a run of perfects is one good wave), and when a sabotage lands there is chaos: paddles everywhere and the
eyes spin. `Crowd.setGaze / wave / chaos` are the whole interface.

## Panels, headings and keys

While the 3D layer runs, every glass card (the menu, the side cards, the results card, the multiplayer results, the practice preview)
is **frosted glass facing slightly inward** (5.5 degrees at 901 px and wider; on a phone the cards stack and face the viewer) and
tilts up to 2.2 degrees towards the pointer on top of that angle (`tactile.js` writes `--tx` / `--ty`; the CSS composes them with the
card's own resting angle and its swing-in; never on touch, never under Reduced Motion). Headings are **extruded** in each theme's
colours. Buttons, the vote keys and the Space bar are keycaps: a side wall of real depth (a different wall colour per theme), a
hover lift and a press that sinks into the wall, by pointer, touch or the key itself (`tactile.js` presses the DROP bar for Space
and the vote keys for 1 / 2 / 3). The page's sabotage icons have **thickness and a slow turn** (`icon-turn.js` wraps each one in a
holder with darker copies behind it, kept in step with the real icon, so ids and the page's own queries are untouched). The brand
emblem and the speaker are sculpted and baked like the 17 sabotage icons and swapped in; Flat view puts the original drawings back.
All of it is under `html.has-3d`, so the flat page is unchanged.

## Lobby and results

* **Lobby**: every connected player stands on the plinth as a **totem** in their own colour inside a pulsing beacon ring (a second
  ring expands from it, a light column hums), with googly eyes that follow the pointer and a name plate. They drop in, glow while
  connected, and shrink away on leaving (`totems.js`).
* **Solo results**: the score is a giant extruded sculpture; a new session best is **crowned** with a turning gold crown (`crown.js`).
  Hold left or right and drag to walk all the way round it, like the home scene (same controller, controls and rules).

## During play: the tower stands in the open world

There is no framed box. The page's border around the lane and around the results tower is transparent (it keeps its width, so the
layout and the camera's framing do not move); the HEIGHT and speed chips stay, and on a phone the HEIGHT chip is the only height.

* **The tower** is real blocks with depth, soft shadows, a floor mirror (`reflection.js`, strength by quality tier) and glow. The
  camera follows it as it grows. Landings squash and kick up dust, perfect drops fire rings and confetti, and a collapse bursts into
  tumbling rubble (`physics.js`).
* **While chat votes** the three candidates hover over the tower, each the block sculpture of its icon on a coloured disc with a name
  plate, and each **grows with its share** of the votes (`candidates.js`: `sharesOf`, `candidateScale`). The dark worlds put a dark
  medallion behind each sculpture and Sunset's plates are bright cream with larger type (its pixel pass and bloom would otherwise
  wash them out; its bloom also eases off during the vote). When the vote closes the winner flies to its place beside the tower.
* **The winner's emblem** floats beside the tower while its sabotage is active: the sculpture in a medallion with a countdown ring,
  turning slowly and lingering face-on (`dwellSpin`). It is off-screen on phones. Only the name shows there.
* **The name** of each sabotage slams in above the tower in blocks and shatters (`brick-text.js`).
* **The height** stands beside the lane as block digits (off-screen on phones). **The final score** floats over the results tower as
  brick digits, with the NEW BEST crown.
* **Sculptures** (`icon-voxel.js`) are made from the page's own icon artwork: the symbol is rasterised, every opaque pixel becomes a
  block in the theme's block colours (its dark lines are raised), neighbours of one colour join into longer bricks. Pixelated themes
  use a coarser 20-block grid so the detail survives.
* **All sixteen sabotages** render in 3D: Pisa rolls the camera (the tower stays straight, the same angle as the game's own view),
  Earthquake shakes it, Spotlight drops a dark veil over the whole view with one lit circle on the tower's beam (the name lands first,
  then the dark closes in as an iris, and the emblem keeps a pool of light of its own), Portal adds two swirling gates, Turbo
  smears, Drunk wobbles, and so on. Accordion works as in the game and has no special 3D cue.

## What is in 3D

* **Three worlds**, one per theme: Paper (paper-cut hills, clearcoat blocks, tilt-shift), Sunset Stack '94 (synthwave sun and
  grid, flat-shaded neon blocks, pixelate + dither + scanlines) and Prime Time (game-show studio, sunburst, LED wall, beams).
  Each has an altitude "sky journey" as the tower rises and an instanced crowd that raises ballot cards during chat votes.
* **Home**: the brick title above, the orbiting ring of the 16 sabotage icons (each triggers its effect), orbit and hover.
* **Play**, **lobby**, **competitive spectator arena**, **results** and, for multiplayer, a **podium finale** where every final tower
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
| `brick-layout.js`, `title-effects.js`, `flight.js` | pure and unit-tested: typeface outlines to rows of bricks, `titlePose` / `TitleDirector` / captions, the camera flights |
| `title-stack.js`, `title-props.js`, `brick-text.js` | the instanced brick title (rain, poke, shed, rebuild, explode, marquee), its props (portal gates, caliper jaws, turbo streaks, the rail), slam-and-shatter names and digits |
| `candidates.js`, `icon-voxel.js`, `icon-turn.js`, `reflection.js` | the vote candidates, block sculptures from the icon artwork, thick turning panel icons, the floor mirror |
| `hero.js` | the ring of 16 sabotage icons (`Arsenal`) |
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
* `TITLE_EFFECT_IDS` (the title's reactions) must equal the game's `SABOTAGE_IDS`; `test/title3d.test.js` fails if they drift.
* Never read game state through anything but `SabotageStackHost.view()`; never write to it.

## Tests

`npm test` runs everything. The pure modules (`brick-layout`, `title-effects`, `flight`, `candidates`, `icon-voxel`, `orbit`, `hover`, `podium`)
are tested in Node (`test/title3d.test.js`, `test/client3d.test.js`); the page and the DOM helpers run in the jsdom harness, which has no
WebGL, so those tests also prove the flat fallback. Visual checks need a real browser: the headless QA used for this work drove
Chromium with software WebGL (SwiftShader), so real-GPU performance is untested.

## Debugging

`window.__stack3d` is the live `Stage` (mode, theme, engine, fx) and `window.__stack3dBoot` exposes `enable()`/`disable()`.
Set `window.__stack3dNoRender = true` to run the logic without drawing (used by the headless QA scripts).
