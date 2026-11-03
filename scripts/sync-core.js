#!/usr/bin/env node
'use strict';
// shared/game-core.js is the single source of truth for the game rules. The single-file client inlines an identical copy
// between the SHARED_CORE markers so it can run with no server (solo mode). If the two copies ever differ, the server and
// the browser would disagree about physics and every multiplayer drop would be judged by different rules.
//
//   node scripts/sync-core.js           copy shared/game-core.js into sabotage-stack.html
//   node scripts/sync-core.js --check   exit 1 if the copies differ (used by `npm test`)
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const corePath = path.join(root, 'shared', 'game-core.js');
const START = '    /* SHARED_CORE_START */\n';
const END = '    /* SHARED_CORE_END */';

function split(html) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('SHARED_CORE markers not found in sabotage-stack.html');
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}

function check() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const core = fs.readFileSync(corePath, 'utf8');
  return split(html).inlined === core;
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('game-core is in sync with sabotage-stack.html'); process.exit(0); }
    console.error('game-core.js and the copy inlined in sabotage-stack.html differ. Run: node scripts/sync-core.js');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const parts = split(html);
  fs.writeFileSync(htmlPath, parts.head + fs.readFileSync(corePath, 'utf8') + parts.tail);
  console.log('Copied shared/game-core.js into sabotage-stack.html');
}

module.exports = { check };
