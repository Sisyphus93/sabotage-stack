'use strict';

(function exposeRoomReplication(root, factory) {
  const replication = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = replication;
  if (root) root.SabotageStackReplication = replication;
})(typeof window === 'object' && window ? window : globalThis, function createRoomReplication() {
  // Room snapshots and packets are JSON wire values. Keep this clone separate
  // from the mutable gameplay view: prediction must never alter its baseline.
  function captureBaseline(state) {
    return Number.isInteger(state.revision) ? JSON.parse(JSON.stringify(state)) : null;
  }

  // Growing arrays are patched by index; shrinking arrays and objects with
  // removed keys are replaced so reconstruction is unambiguous.
  function stateChanges(before, after, path = [], changes = [], historyPrefixLength = null) {
    if (Object.is(before, after)) return changes;
    const arrays = Array.isArray(before) && Array.isArray(after);
    const objects = before && after && typeof before === 'object' && typeof after === 'object' && !Array.isArray(before) && !Array.isArray(after);
    if (arrays && after.length >= before.length) {
      // Only the publisher can certify immutable history lineage. Ordinary JSON
      // arrays (including growing metadata arrays) still compare every entry.
      const prefix = historyPrefixLength ? historyPrefixLength(before, after) : null;
      for (let i = prefix === null ? 0 : prefix; i < after.length; i += 1) stateChanges(before[i], after[i], path.concat(i), changes, historyPrefixLength);
    } else if (objects && Object.keys(before).every(key => Object.hasOwn(after, key))) {
      for (const key of Object.keys(after)) stateChanges(before[key], after[key], path.concat(key), changes, historyPrefixLength);
    } else changes.push([path, after]);
    return changes;
  }

  function createDelta(before, after, { historyPrefixLength = null } = {}) {
    return { type: 'room.delta', baseRevision: before.revision, revision: after.revision, changes: stateChanges(before, after, [], [], historyPrefixLength) };
  }

  // Pure decision/reconstruction seam. Callers own baseline adoption, ignoring
  // duplicates, and sending at most one pending synchronization request.
  // Preserve the existing wire validation and its order; this is not a schema
  // validator. In particular stale integer revisions are ignored first.
  function receiveDelta(baseline, message) {
    if (baseline && Number.isInteger(message.revision) && message.revision <= baseline.revision) return { status: 'ignore' };
    if (!baseline || baseline.revision !== message.baseRevision || !Array.isArray(message.changes)) return { status: 'resynchronize' };
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
        // Detach replacement values too: a later path may descend into one,
        // and the mutable room view must not retain references into the packet.
        const value = change[1];
        target[key] = value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
      }
      if (next.revision !== message.revision) throw new Error('Invalid delta revision');
      return { status: 'apply', state: next };
    } catch (_) {
      return { status: 'resynchronize' };
    }
  }

  return Object.freeze({ captureBaseline, createDelta, receiveDelta });
});
