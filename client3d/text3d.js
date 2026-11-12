// Real extruded lettering. Outlines come from the page's own fonts (see scripts/make-typeface.js), one typeface per theme:
// Fraunces (Paper), Press Start 2P (Sunset Stack ’94), Alfa Slab One (Prime Time).
import { ExtrudeGeometry, BufferGeometry, Float32BufferAttribute } from 'three';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import paperFace from './assets/typeface-paper.json' with { type: 'json' };
import sunsetFace from './assets/typeface-sunset.json' with { type: 'json' };
import primetimeFace from './assets/typeface-primetime.json' with { type: 'json' };

const FACES = { paper: paperFace, sunset: sunsetFace, primetime: primetimeFace };
const fonts = new Map();
const glyphCache = new Map();
const textCache = new Map();

export function fontFor(key) {
  const face = FACES[key] || FACES.paper;
  if (!fonts.has(key)) fonts.set(key, new Font(face));
  return fonts.get(key);
}

export function faceInfo(key) {
  const face = FACES[key] || FACES.paper;
  return { resolution: face.resolution, capHeight: face.capHeight, glyphs: face.glyphs };
}

export function hasGlyphs(key, text) {
  const { glyphs } = faceInfo(key);
  return [...String(text)].every(ch => ch === ' ' || glyphs[ch]);
}

// Style per typeface: the pixel font must stay razor sharp (no bevel), the serif gets a soft bevel.
const STYLE = {
  paper: { bevel: 0.06, curveSegments: 4, tracking: 0.02 },
  sunset: { bevel: 0, curveSegments: 1, tracking: 0.06 },
  primetime: { bevel: 0.05, curveSegments: 4, tracking: 0.035 }
};

function buildGlyph(key, ch, size, depth) {
  const style = STYLE[key] || STYLE.paper;
  const { resolution, glyphs } = faceInfo(key);
  const glyph = glyphs[ch];
  if (!glyph) return null;
  const scale = size / resolution;
  const advance = glyph.ha * scale;
  const shapes = glyph.o ? fontFor(key).generateShapes(ch, size) : [];
  if (!shapes.length) return { geometry: null, advance, width: advance, height: 0 };
  const bevel = style.bevel * size;
  const geometry = new ExtrudeGeometry(shapes, {
    depth, curveSegments: style.curveSegments, steps: 1,
    bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelOffset: 0, bevelSegments: 1
  });
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  return { geometry, advance, width: box.max.x - box.min.x, height: box.max.y - box.min.y, box };
}

// One glyph, centred on its own bounding box in X/Y and sitting on z = 0..depth, so letters can be mounted on block faces.
export function glyphGeometry(key, ch, size = 40, depth = 8, baseline = false) {
  const id = `${key}|${ch}|${size}|${depth}|${baseline}`;
  if (glyphCache.has(id)) return glyphCache.get(id);
  const built = buildGlyph(key, ch, size, depth);
  let result;
  if (!built || !built.geometry) result = { geometry: null, advance: built ? built.advance : size * 0.4, width: built ? built.width : 0, height: 0 };
  else {
    const geometry = built.geometry.clone();
    const cx = (built.box.min.x + built.box.max.x) / 2; const cy = (built.box.min.y + built.box.max.y) / 2;
    geometry.translate(-cx, baseline ? 0 : -cy, 0);
    built.geometry.dispose();
    result = { geometry, advance: built.advance, width: built.width, height: built.height };
  }
  glyphCache.set(id, result);
  return result;
}

// A whole word as one merged geometry, centred in X and on the cap-height line in Y.
export function textGeometry(key, text, { size = 40, depth = 8, tracking, align = 'center' } = {}) {
  const id = `${key}|${text}|${size}|${depth}|${tracking}|${align}`;
  if (textCache.has(id)) return textCache.get(id);
  const style = STYLE[key] || STYLE.paper;
  const track = (tracking == null ? style.tracking : tracking) * size;
  const { capHeight, resolution, glyphs } = faceInfo(key);
  const cap = (capHeight / resolution) * size;
  const parts = []; let cursor = 0;
  for (const ch of String(text).toUpperCase()) {
    if (ch === ' ') { cursor += (glyphs.I ? glyphs.I.ha : 400) * (size / resolution) * 0.9; continue; }
    const built = buildGlyph(key, ch, size, depth);
    if (!built) { cursor += size * 0.5; continue; }
    if (built.geometry) { const g = built.geometry; g.translate(cursor, 0, 0); parts.push(g); }
    cursor += built.advance + track;
  }
  const total = Math.max(0, cursor - track);
  const offset = align === 'left' ? 0 : align === 'right' ? -total : -total / 2;
  let geometry;
  if (!parts.length) geometry = new BufferGeometry();
  else { geometry = mergeGeometries(parts, false); for (const part of parts) part.dispose(); }
  if (parts.length) { geometry.translate(offset, -cap / 2, 0); geometry.computeBoundingBox(); }
  const result = { geometry, width: total, capHeight: cap };
  textCache.set(id, result);
  return result;
}

// Per-letter layout for effects that move letters independently (the landing logo, sabotage name drop-ins).
export function layoutWord(key, text, size = 40, tracking) {
  const style = STYLE[key] || STYLE.paper;
  const track = (tracking == null ? style.tracking : tracking) * size;
  const { resolution, glyphs } = faceInfo(key);
  const letters = []; let cursor = 0;
  for (const ch of String(text).toUpperCase()) {
    const glyph = glyphs[ch];
    const advance = ch === ' ' ? (glyphs.I ? glyphs.I.ha : 400) * (size / resolution) * 0.9 : glyph ? glyph.ha * (size / resolution) : size * 0.5;
    if (ch !== ' ' && glyph) letters.push({ ch, x: cursor + advance / 2, advance });
    cursor += advance + track;
  }
  const total = Math.max(0, cursor - track);
  for (const letter of letters) letter.x -= total / 2;
  return { letters, total };
}

export function disposeTextCaches() {
  for (const { geometry } of glyphCache.values()) if (geometry) geometry.dispose();
  for (const { geometry } of textCache.values()) if (geometry) geometry.dispose();
  glyphCache.clear(); textCache.clear();
}

export { Float32BufferAttribute };
