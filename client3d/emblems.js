// One small sculpture per sabotage, built from primitives in the current theme's block colours. They orbit the title,
// hover over the tower while chat votes, sit beside it while a sabotage is live, and are photographed once per theme
// so the flat icons in the panels are pictures of the very same objects.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { disposeTree } from './themes.js';

export const EMBLEM_IDS = ['turbo', 'drunk', 'slowmo', 'magnet', 'portal', 'rollercoaster', 'earthquake', 'pisa', 'spotlight', 'peekaboo', 'zoom', 'double', 'accordion', 'crumble', 'superglue', 'calipers', 'empty'];

function palette(kit, theme) {
  const style = theme.style;
  const make = (hex, extra = {}) => new THREE.MeshStandardMaterial({ color: hex, roughness: Math.min(0.7, style.roughness + 0.1), metalness: style.metalness, envMapIntensity: style.env, ...extra });
  const glowing = style.emissive > 0.1;
  const lit = hex => make(hex, glowing ? { emissive: hex, emissiveIntensity: 0.25 } : {});
  return {
    amber: lit(kit.color('#E3A33B')), teal: lit(kit.color('#2F8478')), blue: lit(kit.color('#7FA6BD')), red: lit(kit.color('#D5472F')),
    ink: make(glowing ? '#2B1155' : theme.ink), white: make('#FFF6E6'),
    glow: make(theme.glow, { emissive: theme.glow, emissiveIntensity: glowing ? 1.4 : 0.55 }),
    glass: new THREE.MeshStandardMaterial({ color: '#CFEFFF', roughness: 0.1, metalness: 0, transparent: true, opacity: 0.45, envMapIntensity: 1 }),
    beam: new THREE.MeshBasicMaterial({ color: theme.glow, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide }),
    ghost: new THREE.MeshStandardMaterial({ color: kit.color('#7FA6BD'), roughness: 0.5, transparent: true, opacity: 0.4, depthWrite: false })
  };
}

function place(mesh, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) { mesh.position.set(x, y, z); mesh.rotation.set(rx, ry, rz); mesh.castShadow = true; return mesh; }
const box = (m, w, h, d, ...p) => place(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(w, h, d) * 0.18), m), ...p);
const cyl = (m, rt, rb, h, ...p) => place(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, 24), m), ...p);
const cone = (m, r, h, ...p) => place(new THREE.Mesh(new THREE.ConeGeometry(r, h, 24), m), ...p);
const ball = (m, r, ...p) => place(new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), m), ...p);
const ring = (m, r, tube, arc, ...p) => place(new THREE.Mesh(new THREE.TorusGeometry(r, tube, 12, 36, arc), m), ...p);
function group(...children) { const g = new THREE.Group(); for (const child of children) g.add(child); return g; }

const BUILD = {
  empty: m => group(box(m.teal, 1.5, 0.36, 0.7, 0, -0.42, 0), box(m.amber, 1.15, 0.36, 0.7, 0.06, 0, 0), box(m.blue, 0.8, 0.36, 0.7, -0.04, 0.42, 0)),
  turbo: m => {
    const g = group(cyl(m.white, 0.3, 0.3, 0.95), cone(m.red, 0.3, 0.5, 0, 0.72, 0), ball(m.blue, 0.13, 0, 0.18, 0.26), cone(m.glow, 0.2, 0.55, 0, -0.78, 0, Math.PI));
    for (let i = 0; i < 3; i += 1) { const a = i * Math.PI * 2 / 3; g.add(box(m.amber, 0.3, 0.42, 0.08, Math.sin(a) * 0.36, -0.36, Math.cos(a) * 0.36, 0, a + Math.PI / 2, 0)); }
    g.rotation.z = -0.7; return g;
  },
  drunk: m => {
    const g = group(cyl(m.amber, 0.42, 0.36, 0.95), cyl(m.white, 0.47, 0.44, 0.26, 0, 0.56, 0), ring(m.white, 0.28, 0.08, Math.PI, 0.42, 0, 0, 0, 0, -Math.PI / 2),
      ball(m.white, 0.14, -0.2, 0.86, 0.1), ball(m.white, 0.1, 0.16, 0.98, -0.05), ball(m.white, 0.07, -0.02, 1.1, 0.08));
    g.rotation.z = 0.3; g.position.y = -0.15; return group(g);
  },
  slowmo: m => group(cyl(m.ink, 0.62, 0.62, 0.1, 0, 0.78, 0), cyl(m.ink, 0.62, 0.62, 0.1, 0, -0.78, 0), cone(m.glass, 0.5, 0.72, 0, 0.37, 0, Math.PI), cone(m.glass, 0.5, 0.72, 0, -0.37, 0),
    cone(m.amber, 0.33, 0.4, 0, -0.52, 0), cyl(m.amber, 0.03, 0.03, 0.55, 0, 0.02, 0),
    cyl(m.teal, 0.045, 0.045, 1.5, 0.55, 0, 0), cyl(m.teal, 0.045, 0.045, 1.5, -0.55, 0, 0)),
  magnet: m => group(ring(m.red, 0.52, 0.2, Math.PI, 0, 0.1, 0), cyl(m.red, 0.2, 0.2, 0.42, -0.52, -0.1, 0), cyl(m.red, 0.2, 0.2, 0.42, 0.52, -0.1, 0),
    cyl(m.white, 0.205, 0.205, 0.34, -0.52, -0.48, 0), cyl(m.white, 0.205, 0.205, 0.34, 0.52, -0.48, 0),
    box(m.glow, 0.07, 0.3, 0.07, -0.9, -0.78, 0, 0, 0, 0.5), box(m.glow, 0.07, 0.3, 0.07, 0.9, -0.78, 0, 0, 0, -0.5), box(m.glow, 0.07, 0.26, 0.07, 0, -0.86, 0)),
  portal: m => group(ring(m.teal, 0.66, 0.1, Math.PI * 2, -0.72, 0, 0, 0, Math.PI / 2.4, 0), ring(m.amber, 0.66, 0.1, Math.PI * 2, 0.72, 0, 0, 0, -Math.PI / 2.4, 0),
    box(m.red, 0.62, 0.26, 0.4, -0.66, 0, 0), box(m.red, 0.5, 0.26, 0.4, 0.84, 0, 0)),
  rollercoaster: m => {
    const points = []; for (let i = 0; i <= 24; i += 1) { const t = i / 24; points.push(new THREE.Vector3(-1 + t * 2, Math.sin(t * Math.PI * 2) * 0.42, 0)); }
    const curve = new THREE.CatmullRomCurve3(points);
    const rail = z => place(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.055, 8, false), m.ink), 0, 0, z);
    const g = group(rail(0.2), rail(-0.2));
    for (let i = 0; i <= 8; i += 1) { const p = curve.getPoint(i / 8); g.add(box(m.white, 0.06, 0.06, 0.5, p.x, p.y - 0.03, 0)); }
    const at = curve.getPoint(0.2); const tangent = curve.getTangent(0.2);
    g.add(box(m.red, 0.5, 0.26, 0.42, at.x, at.y + 0.2, 0, 0, 0, Math.atan2(tangent.y, tangent.x)));
    g.add(cyl(m.teal, 0.05, 0.05, 0.9, -0.5, -0.45, 0), cyl(m.teal, 0.05, 0.05, 0.9, 0.52, -0.6, 0));
    return g;
  },
  earthquake: m => group(box(m.teal, 0.95, 0.5, 1, -0.56, -0.2, 0, 0, 0, 0.16), box(m.teal, 0.95, 0.5, 1, 0.56, -0.32, 0, 0, 0, -0.2),
    box(m.amber, 0.5, 0.26, 0.6, -0.5, 0.26, 0, 0, 0.2, 0.3), box(m.red, 0.42, 0.26, 0.6, 0.55, 0.12, 0, 0, -0.2, -0.36),
    box(m.glow, 0.08, 0.5, 0.08, 0, 0.6, 0, 0, 0, 0.5), box(m.glow, 0.08, 0.4, 0.08, 0.08, 0.98, 0, 0, 0, -0.5)),
  pisa: m => {
    const g = group();
    for (let i = 0; i < 5; i += 1) { g.add(cyl(i % 2 ? m.white : m.amber, 0.38 - i * 0.012, 0.4 - i * 0.012, 0.3, 0, -0.62 + i * 0.32, 0)); g.add(cyl(m.ink, 0.42 - i * 0.012, 0.42 - i * 0.012, 0.03, 0, -0.46 + i * 0.32, 0)); }
    g.add(cyl(m.red, 0.26, 0.3, 0.26, 0, 0.98, 0)); g.rotation.z = -0.3;
    return group(g, cyl(m.teal, 0.85, 0.85, 0.08, 0, -0.86, 0));
  },
  spotlight: m => {
    const lamp = group(cyl(m.ink, 0.32, 0.2, 0.5), cyl(m.glow, 0.3, 0.3, 0.04, 0, 0.26, 0), ring(m.ink, 0.3, 0.035, Math.PI, 0, -0.05, 0, Math.PI / 2, 0, 0));
    lamp.position.set(-0.55, 0.6, 0); lamp.rotation.z = Math.PI + 0.72;
    const shaft = place(new THREE.Mesh(new THREE.ConeGeometry(0.72, 1.5, 28, 1, true), m.beam), 0.12, -0.18, 0, 0, 0, 0.72); shaft.castShadow = false;
    return group(lamp, shaft, cyl(m.glow, 0.5, 0.5, 0.03, 0.55, -0.82, 0));
  },
  peekaboo: m => group(ball(m.white, 0.62), ball(m.teal, 0.34, 0, 0, 0.36), ball(m.ink, 0.19, 0, 0, 0.56), ball(m.white, 0.06, 0.1, 0.1, 0.7),
    place(new THREE.Mesh(new THREE.SphereGeometry(0.66, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), m.amber), 0, 0, 0, -0.5),
    box(m.ink, 0.06, 0.26, 0.06, -0.3, 0.86, 0.1, 0, 0, 0.35), box(m.ink, 0.06, 0.28, 0.06, 0, 0.94, 0.1), box(m.ink, 0.06, 0.26, 0.06, 0.3, 0.86, 0.1, 0, 0, -0.35)),
  zoom: m => group(ring(m.ink, 0.5, 0.09, Math.PI * 2, -0.18, 0.2, 0), cyl(m.glass, 0.46, 0.46, 0.05, -0.18, 0.2, 0, Math.PI / 2), cyl(m.amber, 0.09, 0.09, 0.75, 0.48, -0.5, 0, 0, 0, 0.76),
    box(m.red, 0.4, 0.14, 0.2, -0.18, 0.2, -0.16)),
  double: m => group(box(m.amber, 1.25, 0.4, 0.72, -0.2, -0.18, 0.12), box(m.ghost, 1.25, 0.4, 0.72, 0.24, 0.24, -0.16), box(m.ink, 0.07, 0.07, 0.07, -0.2, -0.18, 0.5)),
  accordion: m => {
    const g = group(box(m.red, 0.2, 1, 0.7, -0.92, 0, 0), box(m.red, 0.2, 1, 0.7, 0.92, 0, 0));
    for (let i = 0; i < 7; i += 1) g.add(box(i % 2 ? m.white : m.amber, 0.16, i % 2 ? 0.66 : 0.9, i % 2 ? 0.5 : 0.64, -0.6 + i * 0.2, 0, 0));
    g.add(box(m.ink, 0.05, 0.12, 0.05, -0.92, 0.3, 0.38), box(m.ink, 0.05, 0.12, 0.05, -0.92, 0, 0.38), box(m.ink, 0.05, 0.12, 0.05, -0.92, -0.3, 0.38));
    return g;
  },
  crumble: m => group(box(m.blue, 1.05, 0.44, 0.72, -0.28, 0.2, 0), box(m.blue, 0.3, 0.3, 0.36, 0.52, 0.16, 0.1, 0.3, 0.2, 0.5), box(m.blue, 0.24, 0.2, 0.3, 0.74, -0.28, -0.1, 0.5, 0.1, -0.4),
    box(m.blue, 0.16, 0.16, 0.2, 0.42, -0.5, 0.16, 0.2, 0.6, 0.3), box(m.blue, 0.12, 0.12, 0.14, 0.82, -0.72, 0, 0.4, 0.4, 0.4), box(m.ink, 0.04, 0.3, 0.04, 0.02, 0.2, 0.37, 0, 0, 0.5)),
  superglue: m => {
    const tube = group(cyl(m.amber, 0.34, 0.2, 1.05), box(m.amber, 0.72, 0.1, 0.1, 0, 0.55, 0), cyl(m.white, 0.14, 0.14, 0.16, 0, -0.6, 0), cone(m.red, 0.14, 0.32, 0, -0.82, 0, Math.PI), box(m.red, 0.5, 0.3, 0.02, 0, 0.05, 0.3));
    tube.rotation.z = 0.5; tube.position.set(-0.1, 0.2, 0);
    return group(tube, ball(m.glow, 0.13, 0.5, -0.74, 0), ball(m.glow, 0.08, 0.44, -0.5, 0));
  },
  calipers: m => group(box(m.ink, 1.9, 0.14, 0.14, 0, 0.66, 0), box(m.amber, 0.14, 1.25, 0.14, -0.78, 0.02, 0), box(m.amber, 0.14, 1.25, 0.14, 0.62, 0.02, 0),
    box(m.amber, 0.3, 0.1, 0.14, -0.64, -0.56, 0), box(m.amber, 0.3, 0.1, 0.14, 0.48, -0.56, 0), box(m.teal, 0.3, 0.3, 0.2, 0.62, 0.66, 0),
    box(m.red, 1.0, 0.3, 0.5, -0.08, -0.2, 0))
};

export class Emblems {
  constructor(kit, theme) {
    this.materials = palette(kit, theme);
    this.items = new Map();
    this.group = new THREE.Group();
    for (const id of EMBLEM_IDS) {
      const model = BUILD[id](this.materials);
      const holder = new THREE.Group(); holder.add(model); holder.visible = false; holder.scale.setScalar(0.001);
      this.group.add(holder);
      this.items.set(id, { id, holder, model, scale: 0, target: new THREE.Vector3(), targetScale: 0, spin: Math.random() * 6, placed: false });
    }
  }
  // Each frame the view says where an emblem should be; emblems glide there, so a change of role is a flight.
  aim(id, position, scale) { const item = this.items.get(id); if (!item) return; item.target.copy(position); item.targetScale = scale; item.wanted = true; }
  update(dt, time, reduced) {
    const k = reduced ? 1 : 1 - Math.exp(-dt * 5.5);
    for (const item of this.items.values()) {
      if (!item.wanted) item.targetScale = 0;
      item.wanted = false;
      if (!item.placed && item.targetScale > 0) { item.holder.position.copy(item.target); item.placed = true; }
      item.holder.position.lerp(item.target, k);
      item.scale += (item.targetScale - item.scale) * (reduced ? 1 : 1 - Math.exp(-dt * 8));
      const visible = item.scale > 0.05;
      item.holder.visible = visible;
      if (!visible) { if (item.targetScale === 0) item.placed = false; continue; }
      item.holder.scale.setScalar(item.scale);
      item.holder.rotation.y = reduced ? 0.4 : item.spin + time * 0.7;
      item.holder.rotation.x = reduced ? 0.15 : 0.15 + Math.sin(time * 0.9 + item.spin) * 0.08;
    }
  }
  // Photograph every emblem against transparency. Returns { id: dataURL }.
  portraits(renderer, envTexture, size = 112) {
    const out = {};
    const scale = 2; const px = size * scale;
    const target = new THREE.WebGLRenderTarget(px, px, { depthBuffer: true });
    const scene = new THREE.Scene(); scene.environment = envTexture; scene.environmentIntensity = 0.5;
    scene.add(new THREE.HemisphereLight('#ffffff', '#8a8a9a', 1.1));
    const key = new THREE.DirectionalLight('#ffffff', 1.5); key.position.set(-2, 4, 5); scene.add(key);
    const camera = new THREE.OrthographicCamera(-1.28, 1.28, 1.28, -1.28, 0.1, 20); camera.position.set(1.6, 1.3, 6); camera.lookAt(0, 0, 0);
    const pixels = new Uint8Array(px * px * 4);
    const big = document.createElement('canvas'); big.width = px; big.height = px;
    const small = document.createElement('canvas'); small.width = size; small.height = size;
    const bigCtx = big.getContext('2d'); const smallCtx = small.getContext('2d');
    const previousTarget = renderer.getRenderTarget(); const previousColor = new THREE.Color(); renderer.getClearColor(previousColor); const previousAlpha = renderer.getClearAlpha();
    const toSRGB = new Uint8Array(256); for (let i = 0; i < 256; i += 1) { const c = i / 255; toSRGB[i] = Math.round(255 * (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)); }
    renderer.setClearColor(0x000000, 0);
    for (const item of this.items.values()) {
      const parent = item.model.parent;
      scene.add(item.model);
      renderer.setRenderTarget(target); renderer.clear(); renderer.render(scene, camera);
      renderer.readRenderTargetPixels(target, 0, 0, px, px, pixels);
      const image = bigCtx.createImageData(px, px);
      for (let y = 0; y < px; y += 1) {
        const src = (px - 1 - y) * px * 4; const dst = y * px * 4;
        for (let x = 0; x < px * 4; x += 4) {
          const a = pixels[src + x + 3];
          // The buffer holds premultiplied linear colour; canvas wants straight sRGB.
          const un = a > 0 ? 255 / a : 0;
          image.data[dst + x] = toSRGB[Math.min(255, Math.round(pixels[src + x] * un))];
          image.data[dst + x + 1] = toSRGB[Math.min(255, Math.round(pixels[src + x + 1] * un))];
          image.data[dst + x + 2] = toSRGB[Math.min(255, Math.round(pixels[src + x + 2] * un))];
          image.data[dst + x + 3] = a;
        }
      }
      bigCtx.putImageData(image, 0, 0);
      smallCtx.clearRect(0, 0, size, size); smallCtx.imageSmoothingQuality = 'high'; smallCtx.drawImage(big, 0, 0, size, size);
      out[item.id] = small.toDataURL('image/png');
      parent.add(item.model);
    }
    renderer.setRenderTarget(previousTarget); renderer.setClearColor(previousColor, previousAlpha);
    target.dispose();
    return out;
  }
  dispose() { disposeTree(this.group); for (const material of Object.values(this.materials)) material.dispose(); }
}
