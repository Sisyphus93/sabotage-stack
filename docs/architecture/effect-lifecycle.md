# Effect lifecycle

An **Effect** is one activation of a Sabotage against a target (see `GLOSSARY.md`).
A lifecycle module inside `shared/game-core.js` owns how an Effect is created,
which actors it applies to, how landings consume it, and when it expires. It is
embedded into the standalone page by `scripts/sync-shared.js`.
RoundEngine, solo play and the multiplayer view are its three adapters.

## Interface and ownership

- **Activate** (`activateEffect`): builds the Effect record: target, duration
  (5 s, or 8 s for drop-counted IDs), a 3-drop budget for drop-counted IDs, and
  per-effect random directions (`tiltDirection`, `spotlightSide`) from an
  injected random function. Unknown IDs produce no Effect.
- **Applies-to** (`effectApplies`, `effectFor`, `effectElapsed`): the targeting
  rule, and which live Effect applies to an actor at a given `now`.
- **Landing** (`landEffects`): spends a drop from a budget or ends an until-drop
  Effect. A drop is spent only from an Effect that has not expired.
- **Expiry / pause shift** (`expireEffects`, `shiftEffects`): removes expired
  Effects, and moves timed expiries forward by a pause duration.
- **Wire conversion** (`effectsToWire`, `effectsFromWire`): projects Effects to
  the snapshot's `elapsed`/`remaining` seconds, and converts received wire
  Effects back into timestamps on the receiver's clock (`startedAt = now -
  elapsed`, `expiresAt = now + remaining`). Untimed Effects report `remaining:
  duration`, which keeps visual envelopes open, and stay untimed when received.

All Effects use absolute millisecond timestamps with an explicit `now`. The
server needs point-in-time queries between ticks (`advanceMovers` substeps and
landing checks). Every caller holds a **list** of Effects. An Effect without
`expiresAt` has no timed expiry.

Operations return `{ effects, ended }` (activation also returns `effect`) and
never mutate the list they are given. Callers send announcements,
`sabotage.active`, status/toast text, HUD refresh and Mover cleanup
(`finishMoverBehavior`) from the returned values.

## Policies

Callers select a frozen policy from `EFFECT_POLICIES` rather than branching
inside the module.

| Behavior | `teamwork` | `competitive` | `solo` | `dev` |
| --- | --- | --- | --- | --- |
| Lifetime | Until the affected landing (drop-counted: 3 landings) | Timed 5 s / 8 s, 3-drop budget | Same as Competitive | 3600 s, no expiry, no drops spent |
| Replacement | A new Effect clears all | Replaces stack-wide Effects and same-target Effects | At most one Effect | At most one Effect |
| Random directions | Injected random | Injected random | Injected random | Fixed (no draw) |

## Adapters

- **RoundEngine**: passes wall-clock `now`. `consumeDropEffects` remains as a
  thin method that adopts the landing result and returns the ended Effects. It
  keeps `teamSabotageQueue` / `pendingSabotage`, which decide *when* an Effect
  starts on a turn, and only asks whether the list is empty.
- **Solo page**: one contiguous block (`soloEffectPolicy` … `clearSoloEffects`).
  It passes `game.elapsed * 1000` as `now`. Solo pause skips `updateGame`, so the
  clock stops and no pause shift is needed. `game.effects` holds the list;
  `game.activeEffect` is its wire-shaped view, refreshed each frame and read by
  rendering, the HUD and mover stepping.
- **Multiplayer view**: one contiguous block (`roomEffectNow` …
  `advanceRoomEffects`). Each snapshot's Effects are converted onto the view's
  clock (`game.elapsed`, reset by the snapshot and stopped while the round is
  paused) and kept in `game.effects`; each frame expires them. `activeEffect` and
  `remoteEffects` are wire-shaped views read by the HUD, the arena canvas and
  `client3d/stage.js`. Choosing the active/pending/observed Effect for a host,
  player or spectator stays in the page as a presentation concern. It uses the
  targeting rule only, so an Effect that arrives already expired is still shown
  for one frame and its Mover consequences are finished, as before.

## Mover consequences

Changes to the Mover when an Effect starts go through `beginMoverBehavior`, the
counterpart of `finishMoverBehavior`. RoundEngine chooses which actors it applies
to. Existing differences are kept as policy rows (see `mover-behavior.md`):

| Behavior | `authoritative` | `local` |
| --- | --- | --- |
| Drunk seed samples | Clamped; hold drawn before target | Used directly; target drawn before hold |
| Accordion start | Left to the next preparation step | Phase set from the block below's width |

Replacing a solo Effect does not finish its Mover consequences; this is
pre-existing behavior, preserved.

## Out of scope

Vote timing (`FIRST_VOTE_AT`, `VOTE_SECONDS`, solo `nextVoteAt`) and the message
protocol. Spawning a Mover under an active Effect belongs to the Landing module
(see `landing.md`). Which Sabotages count drops lives in the Sabotage catalogue,
whose rules text reads this module's durations (see `sabotage-catalogue.md`).

## Verification

`test/fixtures/legacy-effects.js` freezes the pre-refactor server `addEffect`,
`effectFor`, `consumeDropEffects`, expiry, pause shift and snapshot projection;
the page's `activateSabotage`, `consumeLocalDropEffect` and their call sites; and
the multiplayer view's Effect selection and countdowns. It works like
`test/fixtures/legacy-mover.js`. Do not update it to mirror the refactor.
`test/effect-lifecycle.test.js` drives the oracle and the shipped code
(RoundEngine, and the page's solo and multiplayer blocks sliced from
`sabotage-stack.html`) through the same random scripts, and checks that the
page's call sites match the harness. The scripts must reach expiry and final-drop
paths; frame and server times are 1/64-second multiples, so timestamps and
countdowns agree exactly at expiry boundaries. With arbitrary frame times the two
representations can disagree about the last frame by float rounding (~1e-14 s).

The planned exception (solo no longer spends a drop from an expired Effect) is
unobservable: solo expires Effects every frame, and drops land between frames,
so the oracle matches exactly. Behavior is otherwise checked with table-driven
tests at the module interface: every Sabotage ID under each policy.
