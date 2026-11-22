'use strict';
// The 3D lettering typefaces, as committed glyph JSON. client3d/assets/typeface-*.json are the source of truth (built from
// the fonts in fonts/ by scripts/make-typeface.js); the build copies each one to a content-versioned name under
// public/typefaces/, writes public/typefaces.json (the server's exact-route allowlist) and client3d/assets/typeface-urls.json
// (the URL map the client bundle imports). Neither the manifest nor the URL map is fetched at runtime.
//
// The bundle therefore carries no glyph outlines: each theme's face is fetched from a cacheable same-origin asset the first
// time that theme is shown.
//
//   node scripts/build-client.js            # regenerates the typefaces, fonts, bundle and CSP hashes
//   node scripts/build-client.js --check    # exit 1 when any of them is stale
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.join(__dirname, '..');
const PUBLIC_URL = '/public/typefaces';

// The order is the order of the manifest (and the themes on the page).
const FACES = Object.freeze([
  { key: 'paper', family: 'Fraunces', source: 'typeface-paper.json' },
  { key: 'sunset', family: 'Press Start 2P', source: 'typeface-sunset.json' },
  { key: 'primetime', family: 'Alfa Slab One', source: 'typeface-primetime.json' }
]);

function paths(root) {
  return {
    sources: path.join(root, 'client3d', 'assets'),
    publicDir: path.join(root, 'public', 'typefaces'),
    manifest: path.join(root, 'public', 'typefaces.json'),
    urls: path.join(root, 'client3d', 'assets', 'typeface-urls.json')
  };
}

function sourcePath(root, face) { return path.join(paths(root).sources, face.source); }

function render(root = ROOT) {
  const files = [];
  const buffers = new Map();
  const urls = {};
  for (const face of FACES) {
    const buffer = fs.readFileSync(sourcePath(root, face));
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
    const file = `${face.source.slice(0, -'.json'.length)}-${sha256.slice(0, 16)}.json`;
    const url = `${PUBLIC_URL}/${file}`;
    urls[face.key] = url;
    files.push({ key: face.key, family: face.family, url, file, bytes: buffer.length, sha256 });
    buffers.set(file, buffer);
  }
  return {
    manifest: `${JSON.stringify({ typefaces: files }, null, 2)}\n`,
    urls: `${JSON.stringify(urls, null, 2)}\n`,
    files,
    buffers
  };
}

function writeIfChanged(file, contents) {
  if (fs.existsSync(file) && fs.readFileSync(file).equals(Buffer.isBuffer(contents) ? contents : Buffer.from(contents))) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
  return true;
}

function generatedNames(output) { return new Set(output.files.map(file => file.file)); }
function previousNames(manifestPath) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    return new Set((Array.isArray(manifest.typefaces) ? manifest.typefaces : [])
      .map(face => face && typeof face.file === 'string' ? face.file : null)
      .filter(Boolean));
  } catch (_) { return new Set(); }
}

function build({ root = ROOT } = {}) {
  const p = paths(root);
  const output = render(root);
  const wanted = generatedNames(output);
  fs.mkdirSync(p.publicDir, { recursive: true });
  for (const file of output.files) writeIfChanged(path.join(p.publicDir, file.file), output.buffers.get(file.file));
  // Remove only typeface files this build previously generated, never unrelated files someone else put there.
  for (const name of previousNames(p.manifest)) {
    if (!wanted.has(name)) fs.rmSync(path.join(p.publicDir, name), { force: true });
  }
  writeIfChanged(p.manifest, output.manifest);
  writeIfChanged(p.urls, output.urls);
  return output;
}

function check({ root = ROOT } = {}) {
  try {
    const p = paths(root);
    const output = render(root);
    if (fs.readFileSync(p.manifest, 'utf8') !== output.manifest) return false;
    if (fs.readFileSync(p.urls, 'utf8') !== output.urls) return false;
    for (const file of output.files) {
      const target = path.join(p.publicDir, file.file);
      if (!fs.existsSync(target) || !fs.readFileSync(target).equals(output.buffers.get(file.file))) return false;
    }
    return true;
  } catch (_) { return false; }
}

module.exports = { ROOT, FACES, paths, sourcePath, render, build, check };
