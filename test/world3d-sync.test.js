'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { check } = require('../scripts/sync-world3d');

test('client/world3d.js and the inlined Atrium module in sabotage-stack.html are identical', () => {
  assert.equal(check(), true, 'Run `node scripts/sync-world3d.js` to copy client/world3d.js into the client.');
});
