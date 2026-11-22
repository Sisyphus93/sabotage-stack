'use strict';
// Committed alongside the client so production needs no build step.
const fs = require('node:fs');
const path = require('node:path');
const { inlineMetadata } = require('../server/content-security-policy');
const ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'public', 'csp-hashes.json');

function output() {
  return JSON.stringify(inlineMetadata(fs.readFileSync(path.join(ROOT, 'sabotage-stack.html'), 'utf8')), null, 2) + '\n';
}
function check() {
  return fs.existsSync(OUT_FILE) && fs.readFileSync(OUT_FILE, 'utf8') === output();
}
function build() {
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, output());
}
if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (!check()) { console.error('public/csp-hashes.json is stale: run npm run build'); process.exitCode = 1; }
    else console.log('public/csp-hashes.json is up to date');
  } else build();
}
module.exports = { build, check };
