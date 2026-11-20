#!/usr/bin/env node
'use strict';
// Keep the standalone page's replication implementation identical to Node's.
// node scripts/sync-replication.js [--check]
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const sourcePath = path.join(root, 'shared', 'room-replication.js');
const START = '    /* SHARED_REPLICATION_START */\n';
const END = '    /* SHARED_REPLICATION_END */';

function split(html) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('SHARED_REPLICATION markers not found in sabotage-stack.html');
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}

function check() {
  return split(fs.readFileSync(htmlPath, 'utf8')).inlined === fs.readFileSync(sourcePath, 'utf8');
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('room-replication is in sync with sabotage-stack.html'); process.exit(0); }
    console.error('room-replication.js and its inlined copy differ. Run: node scripts/sync-replication.js');
    process.exit(1);
  }
  const parts = split(fs.readFileSync(htmlPath, 'utf8'));
  fs.writeFileSync(htmlPath, parts.head + fs.readFileSync(sourcePath, 'utf8') + parts.tail);
  console.log('Copied shared/room-replication.js into sabotage-stack.html');
}

module.exports = { check };
