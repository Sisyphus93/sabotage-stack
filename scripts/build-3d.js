#!/usr/bin/env node
'use strict';
// The 3D view lives in client3d/ as ES modules on top of three.js. The single-file client must keep working offline,
// so this script bundles those modules (esbuild, minified IIFE) and inlines the result into sabotage-stack.html
// between the VIEW3D_BUNDLE markers. The bundle sits in an inert <script type="text/plain"> block and is only
// evaluated in browsers with WebGL2, so the 2D game never pays for it.
//
//   node scripts/build-3d.js           rebuild the bundle and inline it
//   node scripts/build-3d.js --check   exit 1 if client3d/ changed since the inlined bundle was built
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const sourceDir = path.join(root, 'client3d');
const START = /\/\* VIEW3D_BUNDLE_START sha256=([0-9a-f]{64}) \*\//;
const END = '/* VIEW3D_BUNDLE_END */';

function sourceHash() {
  const hash = crypto.createHash('sha256');
  for (const name of fs.readdirSync(sourceDir).filter(file => file.endsWith('.js')).sort()) {
    hash.update(name + '\n');
    hash.update(fs.readFileSync(path.join(sourceDir, name), 'utf8').replace(/\r\n/g, '\n'));
  }
  hash.update('three@' + require(path.join(root, 'package.json')).devDependencies.three);
  return hash.digest('hex');
}
function inlinedHash(html = fs.readFileSync(htmlPath, 'utf8')) {
  const match = START.exec(html);
  return match ? match[1] : null;
}
function check() { return inlinedHash() === sourceHash(); }

function build() {
  const esbuild = require('esbuild');
  const result = esbuild.buildSync({
    entryPoints: [path.join(sourceDir, 'index.js')], bundle: true, write: false, minify: true, format: 'iife',
    globalName: 'SabotageStack3D', target: ['es2020'], legalComments: 'inline', charset: 'ascii', logLevel: 'warning'
  });
  let code = result.outputFiles[0].text.trim();
  // The bundle is inlined inside a <script> element: no sequence in it may be read as markup by the HTML parser.
  code = code.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');
  if (/<\/script|<!--/i.test(code)) throw new Error('The 3D bundle still contains a sequence that would end its <script> block.');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const match = START.exec(html);
  const end = html.indexOf(END);
  if (!match || end === -1 || end < match.index) throw new Error('VIEW3D_BUNDLE markers not found in sabotage-stack.html');
  const head = html.slice(0, match.index);
  const tail = html.slice(end);
  fs.writeFileSync(htmlPath, `${head}/* VIEW3D_BUNDLE_START sha256=${sourceHash()} */\n${code}\n${tail}`);
  return code.length;
}

if (require.main === module) {
  if (process.argv.includes('--check')) {
    if (check()) { console.log('The inlined 3D bundle matches client3d/.'); process.exit(0); }
    console.error('client3d/ changed since the 3D bundle in sabotage-stack.html was built. Run: npm run build-3d');
    process.exit(1);
  }
  const size = build();
  console.log(`Inlined the 3D view bundle (${(size / 1024).toFixed(0)} kB) into sabotage-stack.html`);
}

module.exports = { check, sourceHash, inlinedHash };
