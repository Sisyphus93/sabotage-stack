# Shared mover behavior

The existing `shared/game-core.js` module owns speed composition, drunk-motion
transitions, accordion geometry, mover/decoy advancement, and motion cleanup.
`scripts/sync-core.js` embeds the same implementation into the standalone page.

## Interface and ownership

- `moverBehaviorSpeed`: reads actor state, tower height, resolved effects, reduced
  motion, and an execution policy. Used for stepping and landing-speed queries.
- `stepMoverBehavior`: mutates actor motion. Callers supply seconds (`dt`), effects
  keyed by sabotage ID with elapsed seconds, reduced motion, a random function,
  and a named policy. No clock or random defaults are used.
- `finishMoverBehavior`: restores geometry and removes motion-specific state when
  the caller ends or replaces an effect. It does not end the effect itself.

Actor state includes `moving` and the existing `drunk*` fields. The caller supplies
the block below and tower height; the module does not need a round or a room.

RoundEngine resolves effects and their elapsed times per player before crossing
this seam. The browser resolves its current active effect. Votes, effect timing,
auto-drop, turn eligibility, authority, validation, lag compensation, networking,
rendering, and announcements remain with existing callers.

## Preserved differences

These are compatibility policies, not newly unified gameplay:

| Behavior | `authoritative` | `local` |
| --- | --- | --- |
| Random samples for drunk transitions | Clamped/coerced | Supplied samples used directly |
| Drunk speed multiplier | Clamped/coerced | Current multiplier used directly |
| Resized mover | Replaced | Existing object updated |
| Inactive accordion/portal reconciliation | During preparation | Caller ends/replaces the effect |
| Decoy portal wrapping | Disabled | Follows active portal effect |
| `moving.vx` | Unchanged | Set to base composed speed |

The named policies are frozen. Callers select them rather than constructing
runtime-specific logic inside the shared implementation.

## Prediction sequencing

The browser first calls `stepMoverBehavior` with `advance: false` and
`advanceDrunk: false`. This prepares accordion geometry even for an observer or
an ineligible player, just as before. Only an eligible player advances movement,
with `prepare: false` and `advanceDrunk: false`. Thus preparation is not repeated,
no local drunk randomness is consumed, and server-provided motion state remains
in control. Paused rounds return before either call. Reduced-motion preference
changes also prepare geometry without advancing time or movement.

Solo uses the full step. RoundEngine guards invalid/missing movers and
nonpositive time before using the full step.

## Verification

`test/fixtures/legacy-mover.js` freezes the pre-refactor orchestration from
`abc7e6d`. It is a test-only oracle, not a second production implementation.
Do not update it to mirror refactors. It deliberately uses the existing scalar
rules; these tests characterize orchestration, not independently verify physics.

`test/mover-behavior.test.js` compares deterministic traces for every sabotage,
reduced-motion transitions, effect replacement/expiry, mover identity, and random
draw ordering. Browser traces exercise the adapter extracted from the shipped
page. Cross-path position parity is asserted only for matching behavior; the
existing browser/WebSocket tests cover integration and authority.
