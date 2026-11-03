'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { check } = require('../scripts/sync-core');

test('shared/game-core.js and the copy inlined in sabotage-stack.html are identical', () => {
  assert.equal(check(), true, 'Run `node scripts/sync-core.js` to copy shared/game-core.js into the client.');
});
