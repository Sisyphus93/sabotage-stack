#!/usr/bin/env node
'use strict';
// The shared modules are the single source of truth for what the server and the browser both run. The single-file
// client inlines an identical copy of each between its markers so it can run with no server (solo mode). If a copy
// ever differs, the server and the browser would disagree: about physics and every multiplayer drop (game-core), or
// about the room state they replicate (room-replication).
//
//   node scripts/sync-shared.js           copy every shared module into sabotage-stack.html
//   node scripts/sync-shared.js --check   exit 1 if any copy differs (used by `npm test`)
const fs = require('node:fs');
const path = require('node:path');

const MANIFEST = Object.freeze([
  Object.freeze({ source: 'shared/game-core.js', marker: 'SHARED_CORE' }),
  Object.freeze({ source: 'shared/room-replication.js', marker: 'SHARED_REPLICATION' })
]);

function markers(marker) {
  return { start: `    /* ${marker}_START */\n`, end: `    /* ${marker}_END */` };
}

function split(html, marker) {
  const { start: START, end: END } = markers(marker);
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error(`${marker} markers not found in sabotage-stack.html`);
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}

// The manifest entries whose inlined copy differs from the source.
function stale(root = path.join(__dirname, '..')) {
  const html = fs.readFileSync(path.join(root, 'sabotage-stack.html'), 'utf8');
  return MANIFEST.filter(({ source, marker }) => split(html, marker).inlined !== fs.readFileSync(path.join(root, source), 'utf8'));
}

function check(root) {
  return stale(root).length === 0;
}

function sync(root = path.join(__dirname, '..')) {
  const htmlPath = path.join(root, 'sabotage-stack.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  for (const { source, marker } of MANIFEST) {
    const parts = split(html, marker);
    html = parts.head + fs.readFileSync(path.join(root, source), 'utf8') + parts.tail;
  }
  fs.writeFileSync(htmlPath, html);
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    const differing = stale();
    if (!differing.length) { console.log('shared modules are in sync with sabotage-stack.html'); process.exit(0); }
    console.error(`${differing.map(item => item.source).join(', ')} and the copy inlined in sabotage-stack.html differ. Run: node scripts/sync-shared.js`);
    process.exit(1);
  }
  sync();
  console.log(`Copied ${MANIFEST.map(item => item.source).join(', ')} into sabotage-stack.html`);
}

module.exports = { MANIFEST, check, stale, sync };
