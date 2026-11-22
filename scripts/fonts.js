'use strict';
// The page's web fonts, as committed woff2 files. fonts/*.woff2 are the source of truth; the build copies each one
// to a content-versioned name under public/fonts/, writes public/fonts.json (the exact route allowlist), and rewrites
// the @font-face block in sabotage-stack.html so the page and its CSP hash stay in step.
//
//   node scripts/build-client.js            # regenerates the fonts, bundle and CSP hashes
//   node scripts/build-client.js --check    # exit 1 when any of them is stale
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.join(__dirname, '..');
const PUBLIC_URL = '/public/fonts';
const FONT_BLOCK = /\/\* FONT-FACES:START \*\/[\s\S]*?\/\* FONT-FACES:END \*\//;

// The order is the order of the page's @font-face rules (and the web fonts' existing cascade).
const FACES = Object.freeze([
  { family: 'Fraunces', style: 'normal', weight: '400 700', display: 'swap', source: 'fraunces.woff2' },
  { family: 'Caveat', style: 'normal', weight: '400 700', display: 'swap', source: 'caveat.woff2' },
  { family: 'DM Sans', style: 'normal', weight: '400 700', display: 'swap', source: 'dm-sans.woff2' },
  { family: 'Press Start 2P', style: 'normal', weight: '400', display: 'swap', source: 'press-start-2p.woff2', note: 'Pixel fonts for the Sunset Stack ’94 theme (SIL OFL 1.1; latin subsets).' },
  { family: 'VT323', style: 'normal', weight: '400', display: 'swap', source: 'vt323.woff2' },
  { family: 'Alfa Slab One', style: 'normal', weight: '400', display: 'swap', source: 'alfa-slab-one.woff2', note: 'Game-show fonts for the Prime Time theme (SIL OFL 1.1; latin subsets).' },
  { family: 'Barlow Condensed', style: 'normal', weight: '500', display: 'swap', source: 'barlow-condensed-500.woff2' },
  { family: 'Barlow Condensed', style: 'normal', weight: '700', display: 'swap', source: 'barlow-condensed-700.woff2' }
]);

function paths(root) {
  return {
    html: path.join(root, 'sabotage-stack.html'),
    sources: path.join(root, 'fonts'),
    publicDir: path.join(root, 'public', 'fonts'),
    manifest: path.join(root, 'public', 'fonts.json')
  };
}

function sourcePath(root, face) { return path.join(paths(root).sources, face.source); }

function render(root = ROOT) {
  const p = paths(root);
  const current = fs.readFileSync(p.html, 'utf8');
  if (!FONT_BLOCK.test(current)) throw new Error('sabotage-stack.html is missing the FONT-FACES markers');
  const files = [];
  const buffers = new Map();
  const block = ['/* FONT-FACES:START */'];
  for (const face of FACES) {
    const buffer = fs.readFileSync(sourcePath(root, face));
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
    const file = `${face.source.slice(0, -'.woff2'.length)}-${sha256.slice(0, 16)}.woff2`;
    if (face.note) block.push(`/* ${face.note} */`);
    block.push(`@font-face { font-family: "${face.family}"; font-style: ${face.style}; font-weight: ${face.weight}; font-display: ${face.display}; src: url("${PUBLIC_URL}/${file}") format("woff2"); }`);
    files.push({
      family: face.family, style: face.style, weight: face.weight, display: face.display,
      url: `${PUBLIC_URL}/${file}`, file, bytes: buffer.length, sha256
    });
    buffers.set(file, buffer);
  }
  block.push('/* FONT-FACES:END */');
  return {
    html: current.replace(FONT_BLOCK, () => block.join('\n')),
    manifest: `${JSON.stringify({ fonts: files }, null, 2)}\n`,
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
    return new Set((Array.isArray(manifest.fonts) ? manifest.fonts : [])
      .map(font => font && typeof font.file === 'string' ? font.file : null)
      .filter(Boolean));
  } catch (_) { return new Set(); }
}

function build({ root = ROOT } = {}) {
  const p = paths(root);
  const output = render(root);
  const wanted = generatedNames(output);
  fs.mkdirSync(p.publicDir, { recursive: true });
  for (const file of output.files) writeIfChanged(path.join(p.publicDir, file.file), output.buffers.get(file.file));
  // Remove only font files this build previously generated, never unrelated files someone else put there.
  for (const name of previousNames(p.manifest)) {
    if (!wanted.has(name)) fs.rmSync(path.join(p.publicDir, name), { force: true });
  }
  writeIfChanged(p.manifest, output.manifest);
  writeIfChanged(p.html, output.html);
  return output;
}

function check({ root = ROOT } = {}) {
  try {
    const p = paths(root);
    const output = render(root);
    if (fs.readFileSync(p.manifest, 'utf8') !== output.manifest) return false;
    if (fs.readFileSync(p.html, 'utf8') !== output.html) return false;
    for (const file of output.files) {
      const target = path.join(p.publicDir, file.file);
      if (!fs.existsSync(target) || !fs.readFileSync(target).equals(output.buffers.get(file.file))) return false;
    }
    return true;
  } catch (_) { return false; }
}

module.exports = { ROOT, FACES, paths, sourcePath, render, build, check };
