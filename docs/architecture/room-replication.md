# Room-state replication

`shared/room-replication.js` concentrates patch creation, reconstruction, and
revision checks. Both Node and the standalone page use the same implementation.
It is separate from stacking rules in `shared/game-core.js`.

## Interface

- `createDelta(before, after, { historyPrefixLength } = {})` returns the existing
  `room.delta` packet: `baseRevision`, `revision`, and `changes` (ordered
  `[path, value]` pairs). The optional publisher-only callback certifies an
  immutable shared prefix's length, or returns `null` for ordinary arrays. JSON
  callers need no callback.
- `receiveDelta(baseline, message)` returns `{ status: 'apply', state }`,
  `{ status: 'ignore' }`, or `{ status: 'resynchronize' }`. It does not adopt the
  result or send anything.
- `captureBaseline(state)` JSON-clones a snapshot with an integer revision, or
  returns `null` when its revision is missing/noninteger. Snapshot shape checks
  remain with the caller.

`receiveDelta` consumes JSON wire values; the packet `createDelta` produces is
JSON. Its optional `historyPrefixLength` callback is supplied by the publisher and
may inspect non-JSON append-only views, but the shared module never imports or
depends on them. No module state, clock, socket, room lookup, or gameplay
dependency is hidden behind this seam.
Baseline capture isolates the mutable room/gameplay view. Reconstruction clones
both the baseline and object-valued replacements; overlapping paths cannot
mutate the incoming packet. This removes a legacy aliasing side effect without
changing wire values or validation decisions.

## Publisher adapter

RoomManager owns snapshot creation, incrementing `stateRevision`, the
`lastBroadcastState` baseline, and transport. With a baseline every ordinary
change (engine callbacks, membership, preferences, absence-ready flags) sends a
delta, serialized once for every recipient. It never serializes a full candidate
just to compare packet sizes. Full state is reserved for a missing baseline,
`room.sync`, admission, and the existing round-start event snapshots.

Growing arrays are patched by index. Shrinking arrays and objects with removed
keys are replaced. Ordinary arrays are fully compared, even when growing.

### Publication snapshots and append-only history

`RoundEngine.changed()` passes the live game to its trusted room callback (which
only consumes phase/results), not a wire snapshot. Ordinary `snapshot()` calls
still return detached, mutable JSON values. The publisher requests
`snapshot(now, { publication: true })` instead:

- `server/publication-history.js` captures Teamwork `stack`, Competitive `blocks`
  (the engine's `stack`), and both modes' `fallen` as fixed-length, read-only
  array views over a private append-only store. Only new entries are JSON-cloned
  and deeply frozen. Creating a longer view does not copy old array references.
- A view is an array Proxy over an empty array, exposing its captured length,
  indexed entries and enumerable keys. Full JSON serialization is deliberately
  history-sized, but occurs only when a full snapshot is actually needed.
- The publisher's `historyPrefixLength` recognizes views of the same private store.
  Unchanged arrays are identical; growing histories compare only the new tail.
  No field-name heuristic treats unrelated growing arrays as immutable history.
- Gameplay must append to histories, not edit previously published entries.
  To edit/reset history, replace the array; shrinkage sampled at publication also
  starts a new store. Shortening and refilling to the same length between
  publications is undetectable, so in-place rewrites are forbidden by contract.
  New actors/rounds have new arrays, so even equal-length resets and player
  reordering cannot accidentally reuse another history's prefix.
- Completed results (including Teamwork's best score) are captured once, after
  the room callback sets the best score. Further edits require replacing the
  results object. Later membership/metadata publications reuse that detached,
  immutable value rather than re-copying its embedded towers.

Older views retain their original length and frozen values as the store grows;
gameplay mutations and mutable ordinary snapshots cannot alter a baseline.
The receiver still consumes only normal JSON arrays: the wire protocol has not
changed. Round transitions/resets/full syncs may do history-sized work. Ordinary
publication depends on bounded metadata and the new tail, not accumulated history.

### Membership and admission

Player/spectator joins publish deltas to existing connected seats. The newcomer
receives exactly one full snapshot in `room.joined`, at the final published
revision. Resume does the same through `room.resumed`: the new socket is withheld
from state broadcasts while reconnect callbacks run (events still reach it), then
receives the exact final baseline. Its next delta applies directly, without a
recovery round trip.

Leave/disconnect use deltas and do not follow an engine callback's publication
with a redundant full-state broadcast. A spectator's explicit leave still sends
only `room.left`: spectators are not enumerated in the wire state. Socket
disconnect and admission retain revision publications even when their seat
changes no wire-visible fields. Explicit `room.sync` always returns the exact
published baseline. Existing round-start event snapshots are unchanged.

### Mover position events

Mover motion is a tick event, not a `room.delta`. On each 100 ms tick with at
least one active Mover, `RoundEngine.advanceMovers()` emits one `positions` event.
`RoomManager` adds the room `code`, serializes the message once, and sends that
text to every connected seat:

```js
{
  type: 'positions',
  code,
  roundNumber,
  turnId,       // Teamwork only
  movers: [
    { playerId, x, width, direction, decoy?, motion }
  ]
}
```

Each batch is the complete set of active Movers for that tick; Movers whose
position happens to be unchanged are still included. The server emits no
outbound `player.position` events. A full 23-seat room therefore performs 23
sends per tick, regardless of how many Movers are active, instead of one send
per Mover per seat.

The browser applies every entry through the same single-Mover path, preserving
the self-versus-remote `x` rules and the `direction`, `decoy`, `motion`,
`roundNumber`, and Teamwork `turnId` checks. It still accepts legacy
`player.position` packets as a rollback fallback. A malformed batch is ignored
before any entry is applied. Inbound client-to-server `player.position` messages
keep their existing shape, sequence checks, cadence, and lag compensation.

## Receiver adapter

The browser stores the baseline separately from its mutable room view. Stale
integer revisions are ignored before other checks. A missing/mismatched baseline,
invalid changes, rejected paths, or a reconstructed revision mismatch requests
synchronization through the existing `syncPending` guard. Failed sends can retry;
a successfully sent pending request suppresses duplicates until a snapshot is
adopted. Disconnect/reset behavior is unchanged.

An apply outcome is passed through the existing `applyRoomSnapshot` path. The
reconstructed state is already a detached JSON value, so the receiver adopts that
same object as both `multiplayer.room` and `multiplayer.deltaBaseline` instead of
cloning it a second time. The gameplay view aliases parts of the room
(`remotePlayers`, `team.stack`, `team.fallen`, mover positions). The first
position tick in a delta epoch calls `detachDeltaBaseline()`, which clones a
private baseline before ticks write through the shared mover objects. Local
prediction instead receives its own copy of the mover and its decoy, so it
cannot reach the baseline either. `game.state` adoption likewise drops the old
baseline before replacing `room.game`, then re-adopts the rebuilt room. A
successful delta therefore costs one reconstruction clone, not two; baseline
isolation is copy-on-write and happens exactly when the view is mutated.

The applied path clears the pending flag. Its existing error recovery remains in
place. The server answers `room.sync` with the exact last broadcast baseline, not
a newly timed snapshot whose contents would no longer agree with subsequent
deltas.

## Compatibility limits / follow-up validation work

This refactor is not wire-schema hardening. It retains the receiver's existing
literal forbidden-key checks (`__proto__`, `constructor`, `prototype`) and their
ordering. The following existing gaps remain and need a separate compatibility
and security decision:

- Patch path segments are not constrained to strings or integer array indexes;
  JavaScript property-key coercion can bypass literal forbidden-key checks.
- Advancing revisions are not required to be integers or exactly one above the
  baseline. Matching fractional revisions are accepted by reconstruction, then
  baseline capture disables further deltas until synchronization.
- Missing values, extra change fields, and sparse array writes are not rejected.
- A root-replacement patch (empty path) is rejected even though generic structural
  diffing can produce one. Actual room snapshots keep their top-level keys.

These are not guarantees that untrusted arbitrary patches are safe. Normal
packets come from the authoritative server. No new validation strictness was
silently introduced in this change.

## Verification and generated source

`test/fixtures/legacy-replication.js` freezes the publisher/receiver from
`f653a998`; do not update it to mirror production refactors. Tests compare legacy
outcomes, JSON round trips over deterministic room traces, rejected-patch
isolation, packet isolation, missing-baseline fallback, exact recovery baselines,
and receiver baseline adoption/copy-on-write isolation under position ticks.
Existing and extended real WebSocket tests cover recovery and request suppression.

`test/publication.test.js` exercises recording sockets through RoomManager in
both modes, including admission, reconnect, history resets, completion/rematch,
isolation, and historical-entry access traps. `test/server.test.js` also checks
that publication serializes only one delta, not a full size-selection candidate.

Run `npm run benchmark:publication` (`scripts/benchmark-publication.js`) for the
full `changed()` publication path with a fixed clock, seeded gameplay RNG and 22
no-op recipients. It reports
the median of seven warmed batches at 20, 80 and 320 entries per tower/fallen
history, separately for scalar-only changes and one-block/one-piece appends in
each mode. A 320/20 ratio above 2x fails this scaling smoke check; rerun on an idle
machine before investigating. This is not a production latency budget. Local
measurements during #46 implementation were approximately 0.06–0.10 ms per
publication, with 320/20 ratios near 1x; no Render measurement is implied.

Run `npm run sync` (`scripts/sync-shared.js`) after changing the shared module.
Its embedded copy is between `SHARED_REPLICATION` markers in `sabotage-stack.html`.
`node scripts/sync-shared.js --check` and the regular test suite reject a
stale copy. No extra browser network request or build dependency is introduced.
