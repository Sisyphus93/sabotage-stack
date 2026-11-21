# Landing and Mover spawn

A **Landing** resolves a dropped Mover against the block below (see
`GLOSSARY.md`). `shared/game-core.js` owns the Landing and the creation of the
next Mover; `scripts/sync-shared.js` embeds them into the standalone page.
RoundEngine (Teamwork and Competitive) and solo play are the two adapters. The
multiplayer view sends drops to the server and never resolves a Landing itself.

## Interface and ownership

- **`landingSpeed(actor, below, height, effects, reduced, policy)`**: the Mover's
  composed speed (`moverBehaviorSpeed`) times the Magnet's pull towards the
  centre of the block below. It sets the perfect window, and on the server also
  the lag-compensation window and the position tolerance.
- **`resolveLanding(below, moving, { left, speed, effects, level, color, placer })`**:
  applies, in order:
  1. the Calipers rails (`caliperBounds`);
  2. keeping the Mover inside the world, or wrapping it when `portalWrap` is set;
  3. the Portal's choice of the wrapped copy that best overlaps the block below
     (`portalLandingMover`);
  4. `placeDrop`, with the Superglue perfect window and Crumble.

  It returns `{ left, landed, outcome }`. `left` is the position after the rails,
  which the server reports as `authoritativeX`. It changes nothing: callers push
  the placed block, record fallen pieces, use up Effects (`landEffects`), score,
  collapse, announce and play sounds.
- **`spawnMover(stack, { fromLeft, color, effects, reduced })`**: the next Mover
  over the top of `stack`. It sets width, level, `rollerPhase`, and the Effects
  already in force: `portalWrap`, accordion (phase and width, or
  `accordionReduced` under reduced motion), and the Decoy, created after the
  accordion resize.

`effects` is the map the Mover functions already take: Sabotage ID to
`{ elapsed }` (or absent/null). The Landing reads `calipers`, `portal`,
`superglue`, `crumble` and `magnet`.

## Adapters

- **RoundEngine**: `resolveDrop` is shared by `teamDrop` and `competitiveDrop`.
  It passes the lag-compensated position from `landingLeft`, which keeps only the
  authority rule: honour the reported position when it is within a quarter-second
  of travel. Validation, turn rules, scoring, collapse and events stay in the two
  drops. `makeMover` passes the player's Effects to `spawnMover`. The team turn
  still re-applies `portalWrap`/Decoy to a reused Mover, which is reconciliation,
  not a spawn.
- **Solo page**: `completeDrop` passes the Mover's own position, `speedAtLanding()`
  and `moverEffects()`. `spawnMovingBlock` picks the side and palette colour,
  then writes `vx` and resets `blockClock`.

Scoring stays with the callers on purpose: solo counts blocks; Teamwork adds
perfects.

## Changes from the earlier copies

- Solo now applies the Calipers rails at the Landing. Before, it relied on
  stepping, which keeps a solo Mover inside the rails from its first frame, so
  only a drop before the Mover had moved could differ.
- Solo Movers no longer carry `accordionReduced: false`, or an unused
  `accordionPhase` under reduced motion, and the Decoy is created after the
  accordion resize. None of these is observable: stepping ignores the phase while
  reduced, and a target never has accordion and Double at once.
- `dropDrift` (always 0), `landingMover`, its `drift` field and the dev lab's
  "px drift" text are deleted.

## Verification

`test/fixtures/legacy-landing.js` freezes the pre-refactor server speed,
`landingLeft`, the landing part of both drops and the spawn code, and the page's
`spawnMovingBlock`, `completeDrop` and `speedAtLanding`. Do not update it to
mirror the refactor. `test/landing.test.js`:

- plays RoundEngine rounds with random Effects, reduced motion and drops, and
  checks every drop result and every spawned Mover against the oracle;
- runs the shipped page's solo functions (sliced from `sabotage-stack.html`) and
  the frozen ones on random towers, positions and Effects. The frozen side gets
  its input moved onto the Calipers rails, and its spawned Mover normalised to
  the new shape;
- checks that the solo and RoundEngine adapters resolve the same Landing with the
  same speed;
- checks the page's call sites.
