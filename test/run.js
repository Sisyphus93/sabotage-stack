'use strict';
// Runs every *.test.js in this folder with Node's built-in test runner (no glob support needed, works on Node 20+ and Windows).
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const files = fs.readdirSync(__dirname).filter(name => name.endsWith('.test.js')).sort().map(name => path.join(__dirname, name));
const result = spawnSync(process.execPath, ['--test', '--test-concurrency=1', ...files], { stdio: 'inherit' });
process.exit(result.status === null ? 1 : result.status);
