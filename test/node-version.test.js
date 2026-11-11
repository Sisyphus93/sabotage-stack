'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { isSupportedNode } = require('../scripts/node-version');
const pkg = require('../package.json');

test('documented Node ranges match the test runner preflight (F-030)', () => {
  assert.equal(pkg.engines.node, '^22.22.2 || ^24.15.0 || >=26.0.0');
  assert.equal(fs.readFileSync(require('node:path').join(__dirname, '..', '.nvmrc'), 'utf8').trim(), '22.22.2');
  for (const version of ['22.22.2', '22.23.0', '24.15.0', '24.16.0', '26.0.0', '27.0.0']) assert.equal(isSupportedNode(version), true, version);
  for (const version of ['20.20.2', '22.22.1', '23.0.0', '24.14.9', '25.0.0', 'invalid']) assert.equal(isSupportedNode(version), false, version);
});
