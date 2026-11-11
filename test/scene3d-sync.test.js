'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { check } = require('../scripts/sync-scene3d');

test('client/scene3d.js and the inlined 3D module in sabotage-stack.html are identical', () => {
  assert.equal(check(), true, 'Run `node scripts/sync-scene3d.js` to copy client/scene3d.js into the client.');
});
