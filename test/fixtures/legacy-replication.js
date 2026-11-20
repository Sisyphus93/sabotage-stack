
'use strict';
// Frozen from f653a998 before the replication refactor. Test oracle only;
// do not update this implementation to mirror production changes.
function stateChanges(before, after, path = [], changes = []) {
  if (Object.is(before, after)) return changes;
  const arrays = Array.isArray(before) && Array.isArray(after);
  const objects = before && after && typeof before === 'object' && typeof after === 'object' && !Array.isArray(before) && !Array.isArray(after);
  if (arrays && after.length >= before.length) {
    for (let i = 0; i < after.length; i += 1) stateChanges(before[i], after[i], path.concat(i), changes);
  } else if (objects && Object.keys(before).every(key => Object.hasOwn(after, key))) {
    for (const key of Object.keys(after)) stateChanges(before[key], after[key], path.concat(key), changes);
  } else changes.push([path, after]);
  return changes;
}

class LegacyPublisher {
  broadcastState(room) {
    room.stateRevision = (room.stateRevision || 0) + 1;
    room.lastBroadcastState = this.snapshot(room);
    this.broadcast(room, { type: 'room.state', state: room.lastBroadcastState });
  }

  broadcastDelta(room) {
    if (!room.lastBroadcastState) return this.broadcastState(room);
    const previous = room.lastBroadcastState;
    room.stateRevision = (room.stateRevision || 0) + 1;
    const state = this.snapshot(room);
    const delta = { type: 'room.delta', baseRevision: previous.revision, revision: state.revision, changes: stateChanges(previous, state) };
    room.lastBroadcastState = state;
    if (JSON.stringify(delta).length >= JSON.stringify({ type: 'room.state', state }).length) this.broadcast(room, { type: 'room.state', state });
    else this.broadcast(room, delta);
  }

}
function receiveDelta(baseline, message) {
  let result = { status: 'ignore' };
  const multiplayer = { deltaBaseline: baseline, syncPending: false };
  const sendMultiplayer = () => { result = { status: 'resynchronize' }; return true; };
  const applyRoomSnapshot = state => { result = { status: 'apply', state }; };
  function handle() {
      if (message.type === 'room.delta') {
        const baseline = multiplayer.deltaBaseline;
        if (baseline && Number.isInteger(message.revision) && message.revision <= baseline.revision) return;
        if (!baseline || baseline.revision !== message.baseRevision || !Array.isArray(message.changes)) {
          if (!multiplayer.syncPending) multiplayer.syncPending = sendMultiplayer({ type: 'room.sync' });
          return;
        }
        try {
          const next = JSON.parse(JSON.stringify(baseline));
          for (const change of message.changes) {
            if (!Array.isArray(change) || !Array.isArray(change[0]) || !change[0].length) throw new Error('Invalid delta');
            let target = next;
            for (const key of change[0].slice(0, -1)) {
              if (key === '__proto__' || key === 'constructor' || key === 'prototype' || !target || typeof target !== 'object') throw new Error('Invalid delta path');
              target = target[key];
            }
            const key = change[0][change[0].length - 1];
            if (key === '__proto__' || key === 'constructor' || key === 'prototype' || !target || typeof target !== 'object') throw new Error('Invalid delta path');
            target[key] = change[1];
          }
          if (next.revision !== message.revision) throw new Error('Invalid delta revision');
          applyRoomSnapshot(next);
        } catch (_) {
          if (!multiplayer.syncPending) multiplayer.syncPending = sendMultiplayer({ type: 'room.sync' });
        }
        return;
      }
  }
  handle();
  return result;
}
module.exports = { LegacyPublisher, receiveDelta };
