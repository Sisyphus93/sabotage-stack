'use strict';
// Bundles the 3D client (client3d/**) into the single script the page loads: public/stack3d.js.
//
// The bundle is committed on purpose (like the core copy inlined in sabotage-stack.html) so `npm ci && npm start`
// serves the full 3D experience with no build step on the host. A header comment records a hash of every input,
// so `--check` (run by `npm test`) fails when the sources changed but the bundle was not rebuilt.
// The same build/check also extracts the page's fonts into content-versioned files, copies the 3D typefaces to cacheable
// content-versioned JSON assets (the bundle carries only their URLs), generates their manifests and rewrites the page's
// @font-face block, then regenerates the inline HTML's CSP hashes in public/csp-hashes.json.
//
//   node scripts/build-client.js            # production bundle (minified)
//   node scripts/build-client.js --dev      # readable bundle with an inline source map for debugging
//   node scripts/build-client.js --check    # exit 1 if public/stack3d.js is stale, a --dev build or over budget
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const zlib = require('node:zlib');

const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'client3d');
const ENTRY = path.join(SOURCE_DIR, 'index.js');
const OUT_FILE = path.join(ROOT, 'public', 'stack3d.js');
const HEADER = /^\/\* stack3d-source-hash: ([0-9a-f]{64}) mode=(min|dev) \*\/\n/;

// Set from the measured post-typeface-lift size with modest headroom. The gate is shared with the tests so it can be
// checked without rebuilding. Brotli is reported because it is what the server negotiates.
const BUNDLE_BUDGET = Object.freeze({ raw: 950_000, gzip: 270_000 });

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

function bundleSizes(file = OUT_FILE) {
  const raw = fs.readFileSync(file);
  return {
    raw: raw.length,
    gzip: zlib.gzipSync(raw).length,
    brotli: zlib.brotliCompressSync(raw, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } }).length
  };
}

function withinBudget(sizes, budget = BUNDLE_BUDGET) {
  return sizes.raw <= budget.raw && sizes.gzip <= budget.gzip;
}

// 'fresh' = built from the current sources AND minified. A --dev bundle is never committable (it is several MB with an inline source map).
function status() {
  if (!require('./fonts').check()) return 'stale';
  if (!require('./typefaces').check()) return 'stale';
  if (!require('./build-csp').check()) return 'stale';
  const header = currentHeader();
  if (!header || header.hash !== sourceHash()) return 'stale';
  return header.mode === 'min' ? 'fresh' : 'dev';
}

function check() { return status() === 'fresh'; }

async function build({ dev = false } = {}) {
  const esbuild = require('esbuild');
  require('./fonts').build();
  require('./typefaces').build();
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
  require('./build-csp').build();
  return { bytes: Buffer.byteLength(code), hash };
}

async function main() {
  if (process.argv.includes('--check')) {
    const state = status();
    let sizes = null;
    try { sizes = bundleSizes(); } catch (_) { /* a missing bundle is already stale */ }
    if (sizes) {
      console.log(`public/stack3d.js: ${sizes.raw} B raw, ${sizes.gzip} B gzip, ${sizes.brotli} B brotli (budget: ${BUNDLE_BUDGET.raw} B raw, ${BUNDLE_BUDGET.gzip} B gzip)`);
      if (!withinBudget(sizes)) {
        console.error(`public/stack3d.js is over budget: ${sizes.raw} B raw / ${sizes.gzip} B gzip (budget ${BUNDLE_BUDGET.raw} B / ${BUNDLE_BUDGET.gzip} B)`);
        process.exit(1);
      }
    }
    console.log(state === 'fresh' ? 'Fonts, typefaces, client bundle and CSP hashes are up to date' : state === 'dev' ? 'public/stack3d.js is a development build: run npm run build before committing' : 'Fonts, typefaces, client bundle or CSP hashes are stale: run npm run build');
    process.exit(state === 'fresh' ? 0 : 1);
  }
  const started = Date.now();
  const { bytes } = await build({ dev: process.argv.includes('--dev') });
  const sizes = bundleSizes();
  console.log(`built public/stack3d.js (${(bytes / 1024).toFixed(0)} KB raw, ${(sizes.gzip / 1024).toFixed(0)} KB gzip, ${(sizes.brotli / 1024).toFixed(0)} KB brotli) in ${Date.now() - started} ms`);
}

if (require.main === module) main().catch(error => { console.error(error); process.exit(1); });
module.exports = { build, check, status, sourceHash, BUNDLE_BUDGET, bundleSizes, withinBudget, OUT_FILE };
