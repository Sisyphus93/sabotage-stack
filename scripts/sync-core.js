#!/usr/bin/env node
'use strict';
// shared/game-core.js and client/stack3d.js are the single sources of truth for, respectively, the game
// rules and the 3D presentation layer. The single-file client inlines identical copies of both between
// marker pairs so it can run with no server (solo mode) and stay one file. If a copy ever drifts, the
// server and the browser would disagree about physics (core) or a client would ship a stale renderer.
//
//   node scripts/sync-core.js           copy both sources into sabotage-stack.html
//   node scripts/sync-core.js --check   exit 1 if either copy differs (used by `npm test`)
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');

const SOURCES = Object.freeze([
  {
    file: path.join(root, 'shared', 'game-core.js'),
    start: '    /* SHARED_CORE_START */\n',
    end: '    /* SHARED_CORE_END */'
  },
  {
    file: path.join(root, 'client', 'stack3d.js'),
    start: '    /* STACK3D_START */\n',
    end: '    /* STACK3D_END */'
  }
]);

function split(html, source) {
  const start = html.indexOf(source.start);
  const end = html.indexOf(source.end);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Markers not found in sabotage-stack.html for ${path.basename(source.file)}`);
  }
  return { head: html.slice(0, start + source.start.length), inlined: html.slice(start + source.start.length, end), tail: html.slice(end) };
}

function checkSource(html, source) {
  return split(html, source).inlined === fs.readFileSync(source.file, 'utf8');
}

function check() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  return checkSource(html, SOURCES[0]);
}

function checkStack3D() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  return checkSource(html, SOURCES[1]);
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const stale = SOURCES.filter(source => !checkSource(html, source));
    if (!stale.length) {
      console.log('game-core and stack3d are in sync with sabotage-stack.html');
      process.exit(0);
    }
    console.error(`${stale.map(source => path.basename(source.file)).join(', ')} differ from the copies inlined in sabotage-stack.html. Run: node scripts/sync-core.js`);
    process.exit(1);
  }
  let html = fs.readFileSync(htmlPath, 'utf8');
  for (const source of SOURCES) {
    const parts = split(html, source);
    html = parts.head + fs.readFileSync(source.file, 'utf8') + parts.tail;
  }
  fs.writeFileSync(htmlPath, html);
  console.log('Copied shared/game-core.js and client/stack3d.js into sabotage-stack.html');
}

module.exports = { check, checkStack3D };
