// Block geometry + materials. One shared kit per theme so a hundred-block tower costs a handful of draw states.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { themedBlockColor, paletteFor } from './palette.js';
import { rng } from './util.js';

export const BLOCK_H = 22;          // level pitch (matches the 2D board)
export const BLOCK_T = 21.2;        // visible thickness, leaving a hairline seam between levels
export const BLOCK_D = 120;         // depth of every block
export const BOARD_W = 360;

let grainTexture = null;
function makeGrain() {
  if (grainTexture) return grainTexture;
  const size = 128; const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d'); const image = ctx.createImageData(size, size); const random = rng(5);
  for (let i = 0; i < size * size; i += 1) {
    // soft fibres: a low-frequency wobble plus speckle, like painted card stock
    const x = i % size; const y = Math.floor(i / size);
    const fibre = 0.5 + 0.18 * Math.sin(x * 0.35 + Math.sin(y * 0.11) * 3) + (random() - 0.5) * 0.5;
    const v = Math.max(0, Math.min(255, fibre * 255));
    image.data[i * 4] = image.data[i * 4 + 1] = image.data[i * 4 + 2] = v; image.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  grainTexture = new THREE.CanvasTexture(canvas);
  grainTexture.wrapS = grainTexture.wrapT = THREE.RepeatWrapping;
  grainTexture.repeat.set(2, 1);
  return grainTexture;
}

function starShape(outer, inner, points = 5) {
  const shape = new THREE.Shape();
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outer : inner; const a = -Math.PI / 2 + (i * Math.PI) / points;
    const x = Math.cos(a) * r; const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

export class BlockKit {
  constructor(theme = 'paper') {
    this.geometries = new Map(); this.materials = new Map(); this.edgeGeometries = new Map();
    this.star = new THREE.ExtrudeGeometry(starShape(6.2, 2.7), { depth: 1.4, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.5, bevelSegments: 1 });
    this.starMaterial = null;
    this.setTheme(theme);
  }

  setTheme(theme) {
    this.theme = theme; this.palette = paletteFor(theme);
    for (const m of this.materials.values()) m.dispose();
    this.materials.clear();
    for (const g of this.geometries.values()) g.dispose();
    this.geometries.clear();
    for (const g of this.edgeGeometries.values()) g.dispose();
    this.edgeGeometries.clear();
    if (this.starMaterial) this.starMaterial.dispose();
    this.starMaterial = new THREE.MeshStandardMaterial({ color: this.palette.ink, emissive: this.theme === 'paper' ? '#000000' : this.palette.amber, emissiveIntensity: this.theme === 'paper' ? 0 : 1.6, roughness: 0.5, metalness: this.theme === 'primetime' ? 0.6 : 0 });
  }

  radius(width) {
    const base = this.theme === 'sunset' ? 0 : this.theme === 'primetime' ? 2.4 : 3.6;
    return Math.min(base, width / 4, BLOCK_T / 2 - 0.2);
  }

  // Widths are quantised to 2 units so a long game reuses a few dozen geometries; meshes stretch the last <=1 unit via scale.x.
  geometry(width, depth = BLOCK_D, height = BLOCK_T) {
    const w = Math.max(2, Math.round(width / 2) * 2); const key = `${w}|${depth}|${height}`;
    let g = this.geometries.get(key);
    if (!g) {
      g = this.theme === 'sunset' ? new THREE.BoxGeometry(w, height, depth) : new RoundedBoxGeometry(w, height, depth, 3, this.radius(w));
      g.userData.quantWidth = w;
      this.geometries.set(key, g);
    }
    return g;
  }

  edges(width, depth = BLOCK_D, height = BLOCK_T) {
    const w = Math.max(2, Math.round(width / 2) * 2); const key = `${w}|${depth}|${height}`;
    let g = this.edgeGeometries.get(key);
    if (!g) { g = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, height, depth)); g.userData.quantWidth = w; this.edgeGeometries.set(key, g); }
    return g;
  }

  color(hex) { return themedBlockColor(this.theme, hex); }

  material(hex, variant = 'solid') {
    const color = this.color(hex); const key = `${color}|${variant}`;
    let m = this.materials.get(key);
    if (m) return m;
    if (this.theme === 'sunset') {
      m = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.38, roughness: 0.78, metalness: 0.04, flatShading: true });
    } else if (this.theme === 'primetime') {
      m = new THREE.MeshPhysicalMaterial({ color, roughness: 0.16, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.4, emissive: color, emissiveIntensity: 0.06 });
    } else {
      m = new THREE.MeshPhysicalMaterial({ color, roughness: 0.55, metalness: 0, clearcoat: 0.3, clearcoatRoughness: 0.42, sheen: 0.6, sheenColor: new THREE.Color('#fff4dc'), sheenRoughness: 0.5, envMapIntensity: 0.9, bumpMap: makeGrain(), bumpScale: 0.45 });
    }
    if (variant === 'ghost') { m.transparent = true; m.depthWrite = false; }
    if (variant === 'clipped') m.clippingPlanes = [];
    this.materials.set(key, m);
    return m;
  }

  // Clone per mesh when a single block needs unique state (opacity, clipping, glow).
  uniqueMaterial(hex) { return this.material(hex).clone(); }

  mesh(block, { depth = BLOCK_D, shadow = true } = {}) {
    const width = Math.max(1, (block.right != null ? block.right - block.left : block.width));
    const geometry = this.geometry(width, depth);
    const mesh = new THREE.Mesh(geometry, this.material(block.color));
    mesh.scale.x = width / geometry.userData.quantWidth;
    mesh.castShadow = shadow; mesh.receiveShadow = true;
    if (this.theme === 'sunset') {
      const edges = new THREE.LineSegments(this.edges(width, depth), new THREE.LineBasicMaterial({ color: this.palette.ink, transparent: true, opacity: 0.85 }));
      mesh.add(edges); mesh.userData.edges = edges;
    }
    mesh.userData.width = width;
    return mesh;
  }

  addPerfectStar(mesh, width) {
    if (mesh.userData.star) return;
    const star = new THREE.Mesh(this.star, this.starMaterial);
    star.position.set(0, 0, BLOCK_D / 2 + 0.2); star.scale.setScalar(Math.min(1.1, width / 60));
    star.castShadow = false;
    mesh.add(star); mesh.userData.star = star;
  }

  dispose() {
    for (const m of this.materials.values()) m.dispose();
    for (const g of this.geometries.values()) g.dispose();
    for (const g of this.edgeGeometries.values()) g.dispose();
    this.star.dispose(); if (this.starMaterial) this.starMaterial.dispose();
  }
}
