#!/usr/bin/env node
'use strict';
// client/scene3d.js is the source of truth for the 3D stage. The single-file client inlines an
// identical copy between the SCENE3D markers so it can run with no server (solo mode).
//
//   node scripts/sync-scene3d.js           copy client/scene3d.js into sabotage-stack.html
//   node scripts/sync-scene3d.js --check   exit 1 if the copies differ (used by `npm test`)
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const scenePath = path.join(root, 'client', 'scene3d.js');
const START = '    /* SCENE3D_START */\n';
const END = '    /* SCENE3D_END */';

function split(html) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('SCENE3D markers not found in sabotage-stack.html');
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}

function check() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const source = fs.readFileSync(scenePath, 'utf8');
  return split(html).inlined === source;
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('scene3d.js is in sync with sabotage-stack.html'); process.exit(0); }
    console.error('client/scene3d.js and the copy inlined in sabotage-stack.html differ. Run: node scripts/sync-scene3d.js');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const parts = split(html);
  fs.writeFileSync(htmlPath, parts.head + fs.readFileSync(scenePath, 'utf8') + parts.tail);
  console.log('Copied client/scene3d.js into sabotage-stack.html');
}

module.exports = { check };
