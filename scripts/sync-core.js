#!/usr/bin/env node
'use strict';
// shared/game-core.js is the single source of truth for the game rules. The single-file client inlines an identical copy
// between the SHARED_CORE markers so it can run with no server (solo mode). If the two copies ever differ, the server and
// the browser would disagree about physics and every multiplayer drop would be judged by different rules.
//
//   node scripts/sync-core.js           copy shared/game-core.js, shared/view3d-core.js and scene3d.js into sabotage-stack.html
//   node scripts/sync-core.js --check   exit 1 if any copy differs (used by `npm test`)
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const corePath = path.join(root, 'shared', 'game-core.js');
const viewPath = path.join(root, 'shared', 'view3d-core.js');
const scenePath = path.join(root, 'scene3d.js');

const SOURCES = [
  { name: 'game-core', file: corePath, start: '    /* SHARED_CORE_START */\n', end: '    /* SHARED_CORE_END */' },
  { name: 'view3d-core', file: viewPath, start: '    /* SHARED_VIEW3D_START */\n', end: '    /* SHARED_VIEW3D_END */' },
  { name: 'scene3d', file: scenePath, start: '    /* SCENE3D_START */\n', end: '    /* SCENE3D_END */' }
];

function split(html, source) {
  const start = html.indexOf(source.start);
  const end = html.indexOf(source.end);
  if (start === -1 || end === -1 || end < start) throw new Error(`${source.name} markers not found in sabotage-stack.html`);
  return { head: html.slice(0, start + source.start.length), inlined: html.slice(start + source.start.length, end), tail: html.slice(end) };
}

function readSource(source) {
  // The inlined copy is indented and prefixed so it reads like the surrounding single-file script.
  return fs.readFileSync(source.file, 'utf8');
}

function check() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  return SOURCES.every(source => split(html, source).inlined === readSource(source));
}

function sync() {
  let html = fs.readFileSync(htmlPath, 'utf8');
  for (const source of SOURCES) {
    const parts = split(html, source);
    html = parts.head + readSource(source) + parts.tail;
  }
  fs.writeFileSync(htmlPath, html);
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('Inlined sources are in sync with sabotage-stack.html'); process.exit(0); }
    console.error('A generated copy in sabotage-stack.html differs. Run: node scripts/sync-core.js');
    process.exit(1);
  }
  sync();
  console.log('Copied shared/game-core.js, shared/view3d-core.js and scene3d.js into sabotage-stack.html');
}

module.exports = { check, sync };
