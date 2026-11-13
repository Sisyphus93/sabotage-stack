// Brick-built lettering, the pure half (no three.js, no DOM, so it can be unit-tested in Node).
//
// A word is cut into horizontal rows (the "layers" the title is built from, bottom to top). Every row is scanned across each
// glyph of the theme's own typeface; the stretches of ink are split into bricks laid in a running bond (every other row is
// shifted half a brick), exactly like a brick wall. The result is a flat list of bricks with their sizes, which the renderer
// (bricks.js) turns into instances. Letters keep their identity so a whole letter can hop, sway or wave.
import { faceInfo } from './text3d.js';

// Tracking per typeface (the same breathing room text3d.js gives the solid lettering), plus a little extra so neighbouring brick
// letters never fuse into one lump.
const TRACKING = { paper: 0.045, sunset: 0.0, primetime: 0.05 };

// ---- outlines ------------------------------------------------------------------------------------------------------
// A glyph's `o` string is three.js's typeface format: `m x y` moves, `l x y` lines, `q x y cx cy` quadratics (end point first, then
// the control point) and `b x y c1x c1y c2x c2y` cubics. Every `m` starts a new contour. Curves are flattened here.
export function outlineContours(outline, scale = 1, steps = 6, scaleY = scale) {
  const t = String(outline || '').trim().split(/\s+/); const contours = []; let cur = null; let px = 0; let py = 0; let i = 0;
  const X = () => Number(t[i++]) * scale; const Y = () => Number(t[i++]) * scaleY;
  while (i < t.length) {
    const cmd = t[i++];
    if (cmd === 'm') { px = X(); py = Y(); cur = [[px, py]]; contours.push(cur); }
    else if (cmd === 'l' && cur) { px = X(); py = Y(); cur.push([px, py]); }
    else if (cmd === 'q' && cur) {
      const x = X(); const y = Y(); const cx = X(); const cy = Y();
      for (let s = 1; s <= steps; s += 1) { const k = s / steps; const a = (1 - k) * (1 - k); const b = 2 * (1 - k) * k; const c = k * k; cur.push([a * px + b * cx + c * x, a * py + b * cy + c * y]); }
      px = x; py = y;
    } else if (cmd === 'b' && cur) {
      const x = X(); const y = Y(); const c1x = X(); const c1y = Y(); const c2x = X(); const c2y = Y();
      for (let s = 1; s <= steps; s += 1) {
        const k = s / steps; const u = 1 - k; const a = u * u * u; const b = 3 * u * u * k; const c = 3 * u * k * k; const d = k * k * k;
        cur.push([a * px + b * c1x + c * c2x + d * x, a * py + b * c1y + c * c2y + d * y]);
      }
      px = x; py = y;
    }
  }
  return contours;
}

// The stretches of ink along the horizontal line at height y (non-zero winding, so counters and holes come out right).
export function inkSpans(contours, y) {
  const hits = [];
  for (const c of contours) {
    for (let i = 0, n = c.length; i < n; i += 1) {
      const a = c[i]; const b = c[(i + 1) % n];
      if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) hits.push([a[0] + (y - a[1]) / (b[1] - a[1]) * (b[0] - a[0]), b[1] > a[1] ? 1 : -1]);
    }
  }
  hits.sort((p, q) => p[0] - q[0]);
  const spans = []; let wind = 0; let start = 0;
  for (const [x, w] of hits) {
    const before = wind; wind += w;
    if (before === 0 && wind !== 0) start = x; else if (before !== 0 && wind === 0) spans.push([start, x]);
  }
  return spans;
}

// A row's ink: the union of three samples through the row, so a stroke thinner than a row is not lost between samples.
function rowSpans(contours, y0, y1) {
  const all = [];
  for (const f of [0.2, 0.5, 0.8]) for (const s of inkSpans(contours, y0 + (y1 - y0) * f)) all.push(s);
  all.sort((p, q) => p[0] - q[0]);
  const merged = [];
  for (const s of all) { const last = merged[merged.length - 1]; if (last && s[0] <= last[1] + 1e-6) last[1] = Math.max(last[1], s[1]); else merged.push([s[0], s[1]]); }
  return merged;
}

// Splits one stretch of ink into bricks. Seams sit on a grid of `len` shifted by `shift`, so neighbouring rows interlock; an end
// piece shorter than 45 % of a brick is merged into its neighbour, and a stretch shorter than 1.35 bricks is one brick.
export function splitSpan(x0, x1, len, shift) {
  const width = x1 - x0; if (width <= 0.001) return [];
  if (width < len * 1.35) return [[x0, x1]];
  const cuts = [x0];
  const first = Math.ceil((x0 - shift) / len + 1e-9);
  for (let k = first; ; k += 1) { const x = shift + k * len; if (x >= x1 - 1e-6) break; if (x > x0 + 1e-6) cuts.push(x); }
  cuts.push(x1);
  for (let i = cuts.length - 2; i >= 1; i -= 1) { if (cuts[i + 1] - cuts[i] < len * 0.45 && i + 1 === cuts.length - 1) cuts.splice(i, 1); }
  if (cuts.length > 2 && cuts[1] - cuts[0] < len * 0.45) cuts.splice(1, 1);
  const out = []; for (let i = 0; i < cuts.length - 1; i += 1) out.push([cuts[i], cuts[i + 1]]);
  return out;
}

// ---- words ---------------------------------------------------------------------------------------------------------
// brickWord('paper', 'STACK', { capHeight: 112, xScale: 0.86 })   (xScale < 1 condenses the lettering: taller letters in the same width)
//   -> { bricks: [{ x, y, w, h, letter, row, col }], letters: [{ ch, x0, x1, cx, rows }], width, capHeight, rowHeight, brickLength }
// x is the centre of the brick measured from the middle of the word, y the centre of the brick above the baseline.
export function brickWord(key, text, { capHeight = 112, rows = 0, rowHeight = 0, brickLength = 0, tracking, gap = 0, xScale = 1 } = {}) {
  const face = faceInfo(key); const unit = capHeight / (face.capHeight / face.resolution) / face.resolution; // font units -> world units
  const size = unit * face.resolution;
  const pixelFont = key === 'sunset'; // Press Start 2P: every pixel is 125 font units; rows and bricks are cut on that grid
  const pixel = 125 * unit;
  const rowH = rowHeight || (pixelFont ? pixel : capHeight / (rows || 21));
  const brickLen = brickLength || (pixelFont ? pixel * 2 : rowH * 3.1);
  const track = ((tracking == null ? (TRACKING[key] ?? 0.04) : tracking) * size + gap) * xScale;
  const bricks = []; const letters = []; let cursor = 0; let letterIndex = 0;
  // some typefaces start a little above the baseline (the pixel font's glyphs begin one pixel up): the wall starts at the lowest ink
  let lowest = Infinity;
  for (const ch of String(text).toUpperCase()) { const g = face.glyphs[ch]; if (g && g.o) for (const c of outlineContours(g.o, unit * xScale, 1, unit)) for (const [, y] of c) lowest = Math.min(lowest, y); }
  const rowStart = Number.isFinite(lowest) ? Math.max(0, Math.floor(lowest / rowH + 1e-6)) : 0;
  for (const ch of String(text).toUpperCase()) {
    const glyph = face.glyphs[ch];
    if (ch === ' ' || !glyph) { cursor += (face.glyphs.I ? face.glyphs.I.ha : 400) * unit * xScale * 0.9; continue; }
    const advance = glyph.ha * unit * xScale;
    if (glyph.o) {
      const contours = outlineContours(glyph.o, unit * xScale, 6, unit);
      let yMax = -Infinity; let xMin = Infinity; let xMax = -Infinity;
      for (const c of contours) for (const [x, y] of c) { yMax = Math.max(yMax, y); xMin = Math.min(xMin, x); xMax = Math.max(xMax, x); }
      const rowCount = Math.max(1, Math.ceil(yMax / rowH - 1e-6) - rowStart);
      const letter = { ch, x0: cursor + xMin, x1: cursor + xMax, cx: cursor + (xMin + xMax) / 2, rows: rowCount, base: cursor };
      for (let r = 0; r < rowCount; r += 1) {
        const spans = rowSpans(contours, (r + rowStart) * rowH, (r + rowStart + 1) * rowH);
        const shift = (r % 2) * brickLen * 0.5;
        let col = 0;
        for (const [a, b] of spans) {
          for (const [bx0, bx1] of splitSpan(a, b, brickLen, shift)) {
            bricks.push({ x: cursor + (bx0 + bx1) / 2, y: (r + 0.5) * rowH, w: bx1 - bx0, h: rowH, letter: letterIndex, row: r, col });
            col += 1;
          }
        }
      }
      letters.push(letter); letterIndex += 1;
    }
    cursor += advance + track;
  }
  const total = Math.max(0, cursor - track);
  for (const b of bricks) b.x -= total / 2;
  for (const l of letters) { l.x0 -= total / 2; l.x1 -= total / 2; l.cx -= total / 2; l.base -= total / 2; }
  return { bricks, letters, width: total, capHeight, rowHeight: rowH, brickLength: brickLen };
}

// A debugging / testing helper: the word drawn as text, one character per cell, the way the bricks would stand.
export function asciiBricks(layout, cell = 4) {
  const w = Math.ceil(layout.width / cell) + 2; const h = Math.ceil((layout.rowHeight * Math.max(...layout.letters.map(l => l.rows))) / layout.rowHeight);
  const grid = Array.from({ length: h }, () => Array(w).fill(' '));
  for (const b of layout.bricks) {
    const x0 = Math.floor((b.x - b.w / 2 + layout.width / 2) / cell); const x1 = Math.ceil((b.x + b.w / 2 + layout.width / 2) / cell);
    for (let x = x0; x < x1; x += 1) if (grid[b.row] && x >= 0 && x < w) grid[b.row][x] = x === x0 ? '[' : '#';
  }
  return grid.reverse().map(r => r.join('')).join('\n');
}
