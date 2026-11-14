// The wordmark's pixel jitter, the pure half (no DOM; pixel-ui.js rasterises the text and draws the rects).
//
// The text is read into a coarse grid of cells (a cell is filled when the glyphs cover enough of it) and shown as one <rect> per filled cell.
// For three ticks, 60 ms apart, the rects play: ticks 1 and 2 knock every rect one cell off its place, tick 3 puts every one back exactly,
// and the real text returns. Rects remember their base grid coordinates; the offsets are never accumulated, so "back" is exact.
export const JITTER = Object.freeze({ ticks: 3, intervalMs: 60 });

// How big a cell is for this font: roughly ten rows to the em, never finer than 2 px (finer would not read as pixels at all). Coarser cells
// ate the thin strokes of Paper's serif and the counters of Prime Time's condensed slab.
export function cellFor(fontPx) { return Math.max(2, Math.round((Number(fontPx) || 16) / 10)); }

// data: RGBA bytes of the text drawn solid (only alpha is read), width x height pixels.
// -> { cols, rows, rects: [{ gx, gy }] } in reading order. A cell counts when at least `threshold` of its pixels are covered.
export function coarseRects(data, width, height, cell, { threshold = 0.35 } = {}) {
  const cols = Math.ceil(width / cell); const rows = Math.ceil(height / cell); const rects = [];
  for (let gy = 0; gy < rows; gy += 1) {
    for (let gx = 0; gx < cols; gx += 1) {
      let sum = 0; let n = 0;
      for (let y = gy * cell; y < Math.min(height, (gy + 1) * cell); y += 1) for (let x = gx * cell; x < Math.min(width, (gx + 1) * cell); x += 1) { sum += data[(y * width + x) * 4 + 3] / 255; n += 1; }
      if (n && sum / n >= threshold) rects.push({ gx, gy });
    }
  }
  return { cols, rows, rects };
}

// The offsets (in cells) for tick 1..ticks: [dx, dy] for each of `count` rects. Ticks before the last scatter every rect by one cell in one of
// the eight directions (never staying put); the last one is all zeros.
export function jitterOffsets(tick, count, rng = Math.random, ticks = JITTER.ticks) {
  const dx = new Int8Array(count); const dy = new Int8Array(count);
  if (tick >= ticks) return { dx, dy };
  for (let i = 0; i < count; i += 1) {
    let x = 0; let y = 0;
    while (x === 0 && y === 0) { x = Math.floor(rng() * 3) - 1; y = Math.floor(rng() * 3) - 1; }
    dx[i] = x; dy[i] = y;
  }
  return { dx, dy };
}

// "2px 2px 0px rgb(255, 89, 100)" or "rgb(255, 89, 100) 2px 2px 0px" -> { x, y, color } (the first shadow, blur ignored) or null
export function parseShadow(value) {
  const s = String(value || '').trim(); if (!s || s === 'none') return null;
  const first = s.split(/,(?![^(]*\))/)[0].trim();
  const color = /(rgba?\([^)]*\)|#[\da-f]{3,8})/i.exec(first); if (!color) return null;
  const nums = first.replace(color[0], ' ').match(/-?[\d.]+px|-?[\d.]+(?=\s|$)/g) || [];
  if (nums.length < 2) return null;
  return { x: parseFloat(nums[0]), y: parseFloat(nums[1]), color: color[0] };
}
