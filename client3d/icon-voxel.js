// The active sabotage's icon as a coloured block sculpture, made from the page's own icon artwork: each <symbol id="sabotage-symbol-…">
// is drawn to a small raster, and every opaque pixel becomes a block in the pixel's colour (neighbours of one colour are laid as one
// longer brick). Dark strokes stand a little proud of the fills, so the drawing's lines read as raised outlines. The colours are
// mapped to the theme exactly as the game maps its block colours. rasterize() needs a browser; everything else is pure.
import * as THREE from 'three';
import { BLOCK_COLOR_MAPS, themedBlockColor, PALETTES } from './palette.js';
import { makeBrickMaterial } from './title-stack.js';

export const GRID = 32; // the artwork's own viewBox is 32 x 32: one block per unit
export const PIXEL_GRID = 20; // ...but the Sunset pixel pass (3 px blocks, scanlines) swallows anything finer than about 5 px
export function gridFor(palette) { return palette && palette.pixel ? PIXEL_GRID : GRID; }
const PAPER_BLOCKS = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F', '#7A6AA6', '#C96F8A', '#F4EDDF']);
const STROKE = { paper: '#3B322A', sunset: '#FFF3E2', primetime: '#FFFFFF' }; // what currentColor is in each theme's panels

const hexToRgb = hex => { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const luma = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// the block colour a drawn colour stands for (within reach), else null
export function nearestBlockColor(r, g, b, reach = 62) {
  let best = null; let bestD = reach * reach;
  for (const hex of PAPER_BLOCKS) { const [br, bg, bb] = hexToRgb(hex); const d = (r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2; if (d < bestD) { bestD = d; best = hex; } }
  return best;
}

// raster: { width, height, data: RGBA bytes }  ->  [{ x, y, len, color: '#rrggbb', raised }]   x, y: centre of the brick in cells from the middle
export function voxelBricks(raster, { theme = 'paper', alpha = 90, maxRun = 3, ink = null } = {}) {
  const { width: w, height: h, data } = raster; const out = []; const stroke = ink || STROKE[theme] || STROKE.paper;
  const at = (x, y) => { const i = (y * w + x) * 4; return [data[i], data[i + 1], data[i + 2], data[i + 3]]; };
  for (let y = 0; y < h; y += 1) {
    let x = 0;
    while (x < w) {
      const [r, g, b, a] = at(x, y); if (a < alpha) { x += 1; continue; }
      const key = `${r >> 4}.${g >> 4}.${b >> 4}`; let len = 1; let sr = r; let sg = g; let sb = b;
      while (x + len < w && len < maxRun) { const [r2, g2, b2, a2] = at(x + len, y); if (a2 < alpha || `${r2 >> 4}.${g2 >> 4}.${b2 >> 4}` !== key) break; sr += r2; sg += g2; sb += b2; len += 1; }
      const ar = sr / len; const ag = sg / len; const ab = sb / len; const dark = luma(ar, ag, ab) < 78;
      let color;
      if (dark) color = stroke; // the drawing's lines, in the colour lines have in this theme
      else { const near = nearestBlockColor(ar, ag, ab); color = near ? themedBlockColor(theme, near) : `#${[ar, ag, ab].map(v => Math.round(v).toString(16).padStart(2, '0')).join('')}`; }
      out.push({ x: x + len / 2 - w / 2, y: h / 2 - (y + 0.5), len, color, raised: dark });
      x += len;
    }
  }
  return out;
}

// A turn that lingers face-on: the angle crawls through the front (where the artwork can be read) and hurries through the back, and
// still comes round once per 2π / omega seconds. t in seconds; the result is the angle to turn by, in radians.
export function dwellSpin(t, omega = 1.05, dwell = 0.66) { const phase = t * omega; return phase - dwell * Math.sin(phase); }

export function symbolSvg(markup, size = GRID, stroke = STROKE.paper) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" style="color:${stroke}">${markup}</svg>`;
}

// The artwork of a symbol as the page originally drew it (the page's own sprites replace the symbol's content once they are baked,
// but keep the original in data-flat).
export function symbolMarkup(doc, id) { const s = doc.getElementById(`sabotage-symbol-${id}`); return s ? (s.dataset.flat || s.innerHTML) : ''; }

export function rasterizeSymbol(doc, id, { size = GRID, stroke = STROKE.paper } = {}) {
  const markup = symbolMarkup(doc, id); if (!markup || markup.includes('<image')) return Promise.resolve(null);
  return new Promise(resolve => {
    try {
      const img = new Image(); img.onload = () => {
        try { const c = doc.createElement('canvas'); c.width = c.height = size; const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0, size, size); const d = ctx.getImageData(0, 0, size, size); resolve({ width: size, height: size, data: d.data }); } catch (_) { resolve(null); }
      }; img.onerror = () => resolve(null);
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(symbolSvg(markup, size, stroke))}`;
    } catch (_) { resolve(null); }
  });
}

// The sculptures for one theme. Rasters are made once (asynchronously) and shared; each build() makes a fresh group.
export class VoxelIcons {
  constructor(doc, theme, palette) {
    this.doc = doc; this.theme = theme; this.palette = palette || PALETTES[theme]; this.rasters = new Map(); this.pending = new Set(); this.live = new Set();
    this.grid = gridFor(this.palette); // (a pixelated theme gets chunkier blocks: finer ones are lost in its pixel pass)
    this.geometry = new THREE.BoxGeometry(1, 1, 1); this.material = makeBrickMaterial(theme, this.palette, { line: 0.3, clip: false });
  }
  prime(ids) {
    for (const id of ids) {
      if (this.rasters.has(id) || this.pending.has(id)) continue; this.pending.add(id);
      rasterizeSymbol(this.doc, id, { size: this.grid, stroke: STROKE[this.theme] }).then(r => { this.pending.delete(id); if (r && !this.disposed) this.rasters.set(id, voxelBricks(r, { theme: this.theme })); });
    }
  }
  has(id) { return this.rasters.has(id); }
  // a group about 54 units tall, like the toy icons, or null while the artwork has not been read yet
  build(id) {
    const bricks = this.rasters.get(id); if (!bricks || !bricks.length) return null;
    const unit = 54 / this.grid; const depth = 2.5 * unit; const mesh = new THREE.InstancedMesh(this.geometry, this.material, bricks.length); const m = new THREE.Matrix4(); const c = new THREE.Color();
    bricks.forEach((b, i) => {
      const d = b.raised ? depth * 1.3 : depth; m.compose(new THREE.Vector3(b.x * unit, b.y * unit, 0), new THREE.Quaternion(), new THREE.Vector3(b.len * unit, unit, d)); mesh.setMatrixAt(i, m);
      c.set(b.color); mesh.setColorAt(i, c);
    });
    mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true; mesh.castShadow = true; mesh.frustumCulled = false;
    const holder = new THREE.Group(); holder.add(mesh); holder.userData.id = id; holder.userData.voxel = true; holder.userData.size = 54;
    holder.userData.dispose = () => { mesh.dispose(); this.live.delete(holder); }; this.live.add(holder);
    return holder;
  }
  dispose() { this.disposed = true; for (const h of [...this.live]) h.userData.dispose(); this.geometry.dispose(); this.material.dispose(); this.rasters.clear(); }
}
