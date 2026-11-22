'use strict';
// Builds the three.js typefaces used for real extruded 3D lettering.
//
// The glyph outlines come from the very fonts committed in fonts/, so the 3D lettering is the same design as the
// page typography (Paper: Fraunces, Sunset Stack ’94: Press Start 2P, Prime Time: Alfa Slab One).
// Only the characters the 3D scenes actually draw are kept, which keeps each typeface around 15 KB.
//
//   node scripts/make-typeface.js            # regenerate client3d/assets/typeface-*.json
//   node scripts/make-typeface.js --check    # exit 1 if the committed files are stale
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const FONT_DIR = path.join(ROOT, 'fonts');
const OUT_DIR = path.join(ROOT, 'client3d', 'assets');
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?:;-–—+×/%#&*()·’\'"';
const RESOLUTION = 1000;

// family in the page -> committed font file, output file and variable-font location (only Fraunces is variable)
const FACES = [
  { family: 'Fraunces', source: 'fraunces.woff2', file: 'typeface-paper.json', variation: { opsz: 144, wght: 800 } },
  { family: 'Press Start 2P', source: 'press-start-2p.woff2', file: 'typeface-sunset.json' },
  { family: 'Alfa Slab One', source: 'alfa-slab-one.woff2', file: 'typeface-primetime.json' }
];

function outlineOf(glyph, scale) {
  const n = value => Math.round(value * scale);
  const out = [];
  for (const command of glyph.path.commands) {
    const a = command.args;
    // three's Font format: 'q' takes the end point first and then the control point; 'b' end, control 1, control 2.
    if (command.command === 'moveTo') out.push('m', n(a[0]), n(a[1]));
    else if (command.command === 'lineTo') out.push('l', n(a[0]), n(a[1]));
    else if (command.command === 'quadraticCurveTo') out.push('q', n(a[2]), n(a[3]), n(a[0]), n(a[1]));
    else if (command.command === 'bezierCurveTo') out.push('b', n(a[4]), n(a[5]), n(a[0]), n(a[1]), n(a[2]), n(a[3]));
  }
  return out.join(' ');
}

async function buildTypeface(buffer, family, variation) {
  const fontkit = await import('fontkit');
  // fontkit cannot instance a variable font straight from a WOFF2 container, so unwrap it to plain TrueType first.
  const sfnt = Buffer.from(await require('wawoff2').decompress(buffer));
  let font = fontkit.create(sfnt);
  if (variation && font.variationAxes && Object.keys(font.variationAxes).length) font = font.getVariation(variation);
  const scale = RESOLUTION / font.unitsPerEm;
  const glyphs = {};
  let xMin = Infinity; let yMin = Infinity; let xMax = -Infinity; let yMax = -Infinity;
  for (const character of CHARSET) {
    const glyph = font.glyphForCodePoint(character.codePointAt(0));
    if (!glyph || glyph.id === 0) continue;
    const box = glyph.bbox;
    glyphs[character] = {
      ha: Math.round(glyph.advanceWidth * scale),
      x_min: Math.round(box.minX * scale), x_max: Math.round(box.maxX * scale),
      o: outlineOf(glyph, scale)
    };
    if (Number.isFinite(box.minX) && glyph.path.commands.length) {
      xMin = Math.min(xMin, box.minX * scale); xMax = Math.max(xMax, box.maxX * scale);
      yMin = Math.min(yMin, box.minY * scale); yMax = Math.max(yMax, box.maxY * scale);
    }
  }
  const capHeight = font.capHeight ? Math.round(font.capHeight * scale) : 700;
  return {
    glyphs, familyName: family, resolution: RESOLUTION, capHeight,
    ascender: Math.round(font.ascent * scale), descender: Math.round(font.descent * scale),
    underlinePosition: Math.round((font.underlinePosition || -100) * scale), underlineThickness: Math.round((font.underlineThickness || 50) * scale),
    boundingBox: { xMin: Math.round(xMin), yMin: Math.round(yMin), xMax: Math.round(xMax), yMax: Math.round(yMax) }
  };
}

async function build() {
  const result = {};
  for (const face of FACES) {
    const target = path.join(FONT_DIR, face.source);
    if (!fs.existsSync(target)) throw new Error(`Font "${face.family}" is missing from fonts/`);
    result[face.file] = JSON.stringify(await buildTypeface(fs.readFileSync(target), face.family, face.variation));
  }
  return result;
}

async function main() {
  const check = process.argv.includes('--check');
  const files = await build();
  let stale = false;
  for (const [file, text] of Object.entries(files)) {
    const target = path.join(OUT_DIR, file);
    const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (current === text) continue;
    stale = true;
    if (!check) { fs.mkdirSync(OUT_DIR, { recursive: true }); fs.writeFileSync(target, text); console.log(`wrote ${path.relative(ROOT, target)} (${text.length} bytes)`); }
  }
  if (check) { console.log(stale ? 'typefaces are stale: run node scripts/make-typeface.js' : 'typefaces are up to date'); process.exit(stale ? 1 : 0); }
  if (!stale) console.log('typefaces already up to date');
}

if (require.main === module) main().catch(error => { console.error(error); process.exit(1); });
module.exports = { build, CHARSET };
