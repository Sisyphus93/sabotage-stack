#!/usr/bin/env node
'use strict';
// The 3D arena lives in client/scene3d.js. sabotage-stack.html must stay a single file
// that runs from file:// with no server, so this module is inlined verbatim between the
// SCENE3D markers. Run `node scripts/sync-scene3d.js` after editing client/scene3d.js.
//   node scripts/sync-scene3d.js           copy the module into the client
//   node scripts/sync-scene3d.js --check   exit 1 if the copies differ (used by npm test)
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const sourcePath = path.join(root, 'client', 'scene3d.js');
const START = '  /* SCENE3D_START */\n';
const END = '  /* SCENE3D_END */';

function split(html) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('SCENE3D markers not found in sabotage-stack.html');
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}

function check() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const source = fs.readFileSync(sourcePath, 'utf8');
  return split(html).inlined === source;
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('scene3d is in sync with sabotage-stack.html'); process.exit(0); }
    console.error('client/scene3d.js and the inlined 3D module differ. Run: node scripts/sync-scene3d.js');
    process.exit(1);
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  const parts = split(html);
  const source = fs.readFileSync(sourcePath, 'utf8');
  if (source.includes('</script')) throw new Error('3D module contains a </script sequence and cannot be inlined');
  fs.writeFileSync(htmlPath, parts.head + source + parts.tail);
  console.log('Copied client/scene3d.js into sabotage-stack.html');
}

module.exports = { check };
