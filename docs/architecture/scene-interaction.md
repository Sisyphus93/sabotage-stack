# Scene interaction ownership

`client3d/scene-interaction.js` owns the visitor's view controls, separate from
Stage's scene composition and the page's gameplay input. It has no WebGL or
Three.js dependency. OrbitController and ZoomController are private
implementation inside this module. ZoomController's `reset` is now one case of
`tweenTo(factor, duration)`, which a held View uses to hand the visitor's zoom back.

## Interface and ownership

- Construct with injectable `doc`, `win`, and `now` (milliseconds), plus callbacks
  for a scene tap, rushing the title intro, and the title's sabotage toy.
- `activate()` installs input listeners once. `dispose()` is idempotent and
  terminal: it removes listeners and all HUDs, cancels the drag, clears transient
  pointer/cursor/context-menu state, and prevents reactivation.
- `setContext({ mode, reduced, reenter })` updates reduced motion and handles
  scene-entry interaction policy when the mode changes, or when Stage explicitly
  requests re-entry after a theme/context rebuild. It cancels drags, snaps the
  previous view, and opens/closes the appropriate controls. Repeated frame updates
  without `reenter` do not restart hint lifetimes or reset the view.
- `update(dt, focusY, { idleReset, cameraDistance })` advances the controllers
  using seconds and returns `{ yaw, pitch, zoom, par }`. Stage supplies the floor
  constraint context; the module does not inspect a camera or Stage object.
- `placeHud(kind, x, y, dt)` receives Stage-computed viewport coordinates. Hint
  age, retirement, reset availability, storage and button actions stay inside.
- `pointer`, `dragging`, `moving`, and `view` are observations for scene reactions
  and raycasting, not state for Stage to mutate. `view` is a value snapshot, not a
  controller reference. Pointer normalized coordinates are plain `{ x, y }`
  values accepted by Three.js raycasting, not a Three.js-owned vector.
  `moving` covers a drag, a fling still coasting, an orbit tween and the zoom
  easing towards its target.
- `samplePointer(event)` preserves the additional sample taken immediately before
  title picking. `lastActivity` is the milliseconds timestamp of the latest input
  path (pointer move/down/up, wheel, keys, clicks, touches); Stage reads it to wake
  an **Idle Scene**. `endFrame()` preserves per-frame pointer-speed decay.
  `wake()` resets idle time for title-toy actions. `setCursor()` applies Stage's
  picking feedback while the module owns cleanup.
- `hold(reason)` / `release()`: an Effect takes the **View** over (see
  `GLOSSARY.md`; Macro Zoom). `hold` is safe to call every frame: the first call
  saves the View, cancels a drag and eases to the default (0.8 s; at once under
  reduced motion). While held, wheel, drags, keys, double-tap resets and HUD
  buttons leave the View alone, the vertical wheel is still the scene's, and the
  scene's HUD greys its buttons (`aria-disabled`, "Held by <reason>").
  `release` eases the saved View back (0.9 s; at once under reduced motion) and is
  a no-op when nothing is held. A mode change drops the hold without restoring.

Stage still owns raycasting, title picking, hover effects, camera flights, final
camera composition, scene animation and rendering. It never sends gameplay
commands through this module. Its small `userView` and HUD-placement methods
translate scene-specific camera/layout context, rather than sharing gesture or
hint state. There is no back-reference from SceneInteraction to Stage.

## Preserved interaction behavior

- Play keeps the left mouse button for DROP; right drag turns it. Other active
  scenes accept left/right drags; middle-click remains the browser's.
- Touch turns sideways without taking vertical scrolling or browser pinch zoom.
- Controls and glass panels retain input; the game canvas remains part of the
  scene even with its accessibility `role=button` inside a play panel.
- Wheel ownership respects browser zoom, horizontal scrolling, open dialogs,
  and page controls. After browser-playtest feedback, the scene retains vertical
  wheel events at both zoom limits, even after a pause, instead of handing them
  back to page scrolling. This applies in windowed and fullscreen views.
- Keyboard exclusions retain text fields, selects, sliders, menus and dialogs,
  while buttons and links pass view keys through. Space, Enter, 1/2/3 and other
  page-owned keys remain untouched. Existing step sizes and timings are unchanged.
  A held View (above) is the one deliberate exception to all of the view input.
- Drag slop, tap duration, right-double-tap reset, context-menu release guard,
  reduced motion, floor constraints and idle reset use their existing constants.
- Home/results/lobby hints fade after 10 seconds, play after 12. Using a view
  retires its hint through the existing storage keys; play retains its separate
  three-visit hint rule. Home's reset indicator still reflects orbit alone.

Two cleanup omissions are addressed as part of the agreed disposal contract:
Stage's old disposal did not remove a live play HUD, and HUD disposal did not
remove handlers from retained detached button references. All scene HUDs now
close on disposal; `orbit-hud.js` removes its click listeners as well as its root.
The ownership refactor did not tune controls or change gameplay behavior. A later
browser-playtest fix deliberately removed zoom-limit wheel handoff; the regression
tests now require scene ownership at both limits across every mode and motion setting.

## Verification

`test/scene-interaction.test.js` drives real DOM events through a real interaction
module with controlled event timestamps and clock reads. Tests cover all modes,
focus exclusions, gesture classification/cancellation, touch, wheel handoff,
context menus, scene transitions, reduced motion, idle reset, hints, pointer
observations, repeated activation, and disposal (including retained buttons).

`test/fixtures/legacy-scene-interaction.mjs` freezes the former Stage input/view/
hint method bodies at `aebf5fad` behind a headless test adapter. It compares
orchestration against real input traces; its unchanged controllers are not an
independent mathematical oracle. Do not update the frozen method bodies to
mirror production changes. Assertions with literal expected behavior supplement
those trace comparisons.

Relevant borrowed-Stage-method tests have been replaced with tests through the
owning module. Stage camera/layout/pointer wiring checks and existing title,
HUD, pixel UI, gameplay and multiplayer tests remain. Headless tests do not
prove real GPU output or platform-specific native pointer behavior.

Rebuild the committed production bundle with `npm run build` after changes in
`client3d/`; `npm run build:check` and the regular suite enforce freshness.
