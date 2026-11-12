'use strict';
// Bundles the 3D client (client3d/**) into the single script the page loads: public/stack3d.js.
//
// The bundle is committed on purpose (like the core copy inlined in sabotage-stack.html) so `npm ci && npm start`
// serves the full 3D experience with no build step on the host. A header comment records a hash of every input,
// so `--check` (run by `npm test`) fails when the sources changed but the bundle was not rebuilt.
//
//   node scripts/build-client.js            # production bundle (minified)
//   node scripts/build-client.js --dev      # readable bundle with an inline source map for debugging
//   node scripts/build-client.js --check    # exit 1 if public/stack3d.js is stale or is a --dev build
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'client3d');
const ENTRY = path.join(SOURCE_DIR, 'index.js');
const OUT_FILE = path.join(ROOT, 'public', 'stack3d.js');
const HEADER = /^\/\* stack3d-source-hash: ([0-9a-f]{64}) mode=(min|dev) \*\/\n/;

function listSources(dir = SOURCE_DIR) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listSources(full));
    else if (/\.(js|json|glsl)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function sourceHash() {
  const hash = crypto.createHash('sha256');
  for (const file of listSources()) {
    hash.update(path.relative(SOURCE_DIR, file).split(path.sep).join('/'));
    hash.update('\0');
    hash.update(fs.readFileSync(file));
    hash.update('\0');
  }
  for (const name of ['three', 'esbuild']) hash.update(`${name}@${JSON.parse(fs.readFileSync(path.join(ROOT, 'node_modules', name, 'package.json'), 'utf8')).version}`);
  return hash.digest('hex');
}

function currentHeader() {
  if (!fs.existsSync(OUT_FILE)) return null;
  const match = HEADER.exec(fs.readFileSync(OUT_FILE, 'utf8').slice(0, 140));
  return match ? { hash: match[1], mode: match[2] } : null;
}

// 'fresh' = built from the current sources AND minified. A --dev bundle is never committable (it is several MB with an inline source map).
function status() {
  const header = currentHeader();
  if (!header || header.hash !== sourceHash()) return 'stale';
  return header.mode === 'min' ? 'fresh' : 'dev';
}

function check() { return status() === 'fresh'; }

async function build({ dev = false } = {}) {
  const esbuild = require('esbuild');
  const hash = sourceHash();
  const result = await esbuild.build({
    entryPoints: [ENTRY], bundle: true, format: 'iife', target: ['es2020'], platform: 'browser',
    minify: !dev, sourcemap: dev ? 'inline' : false, legalComments: 'none', charset: 'ascii',
    loader: { '.json': 'json', '.glsl': 'text' }, write: false, logLevel: 'warning',
    define: { 'process.env.NODE_ENV': dev ? '"development"' : '"production"' }
  });
  const code = result.outputFiles[0].text;
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, `/* stack3d-source-hash: ${hash} mode=${dev ? 'dev' : 'min'} */\n${code}`);
  return { bytes: Buffer.byteLength(code), hash };
}

async function main() {
  if (process.argv.includes('--check')) {
    const state = status();
    console.log(state === 'fresh' ? 'public/stack3d.js is up to date' : state === 'dev' ? 'public/stack3d.js is a development build: run npm run build before committing' : 'public/stack3d.js is stale: run npm run build');
    process.exit(state === 'fresh' ? 0 : 1);
  }
  const started = Date.now();
  const { bytes } = await build({ dev: process.argv.includes('--dev') });
  console.log(`built public/stack3d.js (${(bytes / 1024).toFixed(0)} KB) in ${Date.now() - started} ms`);
}

if (require.main === module) main().catch(error => { console.error(error); process.exit(1); });
module.exports = { build, check, status, sourceHash, OUT_FILE };
