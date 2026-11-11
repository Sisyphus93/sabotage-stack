'use strict';
// Runs every *.test.js in this folder with Node's built-in test runner (no glob support needed, works on Node 20+ and Windows).
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { isSupportedNode } = require('../scripts/node-version');
if (!isSupportedNode(process.versions.node)) {
  console.error(`Tests require Node ^22.22.2, ^24.15.0, or >=26.0.0; current version is ${process.version}. Use the version in .nvmrc and run npm ci.`);
  process.exit(1);
}
const files = fs.readdirSync(__dirname).filter(name => name.endsWith('.test.js')).sort().map(name => path.join(__dirname, name));
const result = spawnSync(process.execPath, ['--test', '--test-concurrency=1', ...files], { stdio: 'inherit' });
process.exit(result.status === null ? 1 : result.status);
