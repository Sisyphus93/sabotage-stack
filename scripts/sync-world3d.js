#!/usr/bin/env node
'use strict';
// client/world3d.js is the source of truth for the full-page WebGL world. It is
// inlined into sabotage-stack.html between the WORLD3D markers so the client
// remains a single file. Run `node scripts/sync-world3d.js` after editing it.
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const sourcePath = path.join(root, 'client', 'world3d.js');
const START = '  /* WORLD3D_START */\n';
const END = '  /* WORLD3D_END */';

function split(html) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('WORLD3D markers not found in sabotage-stack.html');
  return { head: html.slice(0, start + START.length), inlined: html.slice(start + START.length, end), tail: html.slice(end) };
}
function check() {
  const source = fs.readFileSync(sourcePath, 'utf8');
  if (source.includes('</script')) return false;
  return split(fs.readFileSync(htmlPath, 'utf8')).inlined === source;
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('world3d is in sync with sabotage-stack.html'); process.exit(0); }
    console.error('client/world3d.js and the inlined world module differ. Run: node scripts/sync-world3d.js');
    process.exit(1);
  }
  const parts = split(fs.readFileSync(htmlPath, 'utf8'));
  const source = fs.readFileSync(sourcePath, 'utf8');
  if (source.includes('</script')) throw new Error('world module contains a </script sequence and cannot be inlined');
  fs.writeFileSync(htmlPath, parts.head + source + parts.tail);
  console.log('Copied client/world3d.js into sabotage-stack.html');
}
module.exports = { check };
