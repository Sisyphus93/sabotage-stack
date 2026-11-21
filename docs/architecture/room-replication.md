# Room-state replication

`shared/room-replication.js` concentrates patch creation, reconstruction, and
revision checks. Both Node and the standalone page use the same implementation.
It is separate from stacking rules in `shared/game-core.js`.

## Interface

- `createDelta(before, after)` returns the existing `room.delta` packet:
  `baseRevision`, `revision`, and `changes` (ordered `[path, value]` pairs).
- `receiveDelta(baseline, message)` returns `{ status: 'apply', state }`,
  `{ status: 'ignore' }`, or `{ status: 'resynchronize' }`. It does not adopt the
  result or send anything.
- `captureBaseline(state)` JSON-clones a snapshot with an integer revision, or
  returns `null` when its revision is missing/noninteger. Snapshot shape checks
  remain with the caller.

Inputs are JSON wire values, not arbitrary JavaScript objects. No module state,
clock, socket, room lookup, or gameplay dependency is hidden behind this seam.
Baseline capture isolates the mutable room/gameplay view. Reconstruction clones
both the baseline and object-valued replacements; overlapping paths cannot
mutate the incoming packet. This removes a legacy aliasing side effect without
changing wire values or validation decisions.

## Publisher adapter

RoomManager still owns snapshot creation, incrementing `stateRevision`, the
`lastBroadcastState` baseline, transport, and full-state fallback. A delta is
selected only when its JSON string length is smaller than the full-state packet,
exactly as before. Missing baselines trigger a full broadcast. Baselines advance
regardless of which packet representation is sent.

Growing arrays are patched by index. Shrinking arrays and objects with removed
keys are replaced. The current room snapshot has a stable top-level shape.

## Receiver adapter

The browser stores the baseline separately from its mutable room view. Stale
integer revisions are ignored before other checks. A missing/mismatched baseline,
invalid changes, rejected paths, or a reconstructed revision mismatch requests
synchronization through the existing `syncPending` guard. Failed sends can retry;
a successfully sent pending request suppresses duplicates until a snapshot is
adopted. Disconnect/reset behavior is unchanged.

An apply outcome is passed through the existing `applyRoomSnapshot` path. That
path captures a new isolated baseline and clears the pending flag. Its existing
error recovery remains in place. The server answers `room.sync` with the exact
last broadcast baseline, not a newly timed snapshot whose contents would no
longer agree with subsequent deltas.

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
isolation, packet isolation, full-state fallback, and exact recovery baselines.
Existing and extended real WebSocket tests cover recovery and request suppression.

Run `npm run sync` (`scripts/sync-shared.js`) after changing the shared module.
Its embedded copy is between `SHARED_REPLICATION` markers in `sabotage-stack.html`.
`node scripts/sync-shared.js --check` and the regular test suite reject a
stale copy. No extra browser network request or build dependency is introduced.
