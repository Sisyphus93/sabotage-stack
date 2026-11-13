// Sixteen sabotage icons (+ the empty-state stack) modelled as chunky toy objects. They are used live in the hero (orbiting
// arsenal) and baked into sprites that replace the page's flat SVG <symbol>s, so every icon in the UI becomes a lit 3D render.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { PALETTES, themedBlockColor } from './palette.js';
import { TAU } from './util.js';

const rbox = (w, h, d, r = 2.2) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));
const lathe = (pts, seg = 28) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);

export const ICON_IDS = Object.freeze(['turbo', 'crumble', 'slowmo', 'magnet', 'drunk', 'spotlight', 'zoom', 'double', 'accordion', 'rollercoaster', 'peekaboo', 'earthquake', 'pisa', 'superglue', 'portal', 'calipers']);

function kitFor(theme) {
  const p = PALETTES[theme] || PALETTES.paper; const T = hex => themedBlockColor(theme, hex);
  const cache = new Map();
  const mat = (color, { rough = 0.5, metal = 0, emissive = 0, glass = false, shine = 0.3 } = {}) => {
    const key = `${color}|${rough}|${metal}|${emissive}|${glass}`; if (cache.has(key)) return cache.get(key);
    const c = new THREE.Color(color); let m;
    if (glass) m = new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.38, clearcoat: 1, envMapIntensity: 1.6 });
    else if (theme === 'sunset') m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, metalness: metal * 0.4, flatShading: true, emissive: c, emissiveIntensity: 0.32 + emissive });
    else if (theme === 'primetime') m = new THREE.MeshPhysicalMaterial({ color: c, roughness: Math.max(0.08, rough * 0.4), metalness: metal, clearcoat: 1, clearcoatRoughness: 0.06, emissive: c, emissiveIntensity: 0.05 + emissive });
    else m = new THREE.MeshPhysicalMaterial({ color: c, roughness: rough, metalness: metal, clearcoat: shine, clearcoatRoughness: 0.4, sheen: 0.4, sheenColor: new THREE.Color('#fff2d6'), emissive: c, emissiveIntensity: emissive });
    cache.set(key, m); return m;
  };
  const glowMat = (hex, o = 0.9) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(1.6), transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  return { p, T, mat, glowMat, cache };
}

const add = (g, geo, material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, material); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; g.add(m); return m; };

function speaker({ p, mat }, waves) {
  const g = new THREE.Group();
  add(g, rbox(13, 18, 17, 3), mat(p.ink, { metal: 0.3, rough: 0.4 }), -17, 0, 0);
  add(g, new THREE.CylinderGeometry(15, 7, 18, 30), mat(p.amber, { metal: 0.45, rough: 0.28 }), -4, 0, 0, 0, 0, -Math.PI / 2);
  add(g, new THREE.CylinderGeometry(11, 11, 2, 26), mat(p.cream, { rough: 0.6 }), 4.6, 0, 0, 0, 0, -Math.PI / 2);
  if (waves) {
    [[15, 2.6], [23, 2.6]].forEach(([r, t], i) => add(g, new THREE.TorusGeometry(r, t, 9, 26, 1.5), mat(i ? p.teal : p.vermilion, { emissive: 0.45 }), 5, 0, 0, 0, 0, -0.75));
  } else {
    add(g, rbox(4.4, 28, 5, 1.6), mat(p.vermilion, { emissive: 0.5 }), 22, 0, 3, 0, 0, 0.785);
    add(g, rbox(4.4, 28, 5, 1.6), mat(p.vermilion, { emissive: 0.5 }), 22, 0, 3, 0, 0, -0.785);
  }
  return g;
}

const BUILD = {
  turbo({ p, mat, glowMat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, lathe([[0, -22], [7, -22], [11, -12], [12, 4], [10, 16], [6, 26], [0, 34]]), mat(p.amber, { metal: 0.2, rough: 0.35 }));
    add(r, lathe([[0, 22], [6, 22], [8, 28], [0, 38]]), mat(p.vermilion, { rough: 0.4 }));
    add(r, new THREE.SphereGeometry(5, 18, 14), mat('#F4EDDF', { rough: 0.15 }), 0, 8, 9.5).scale.z = 0.6;
    add(r, new THREE.TorusGeometry(5, 1.4, 8, 20), mat(p.ink, { metal: 0.6 }), 0, 8, 10.5);
    for (let i = 0; i < 3; i += 1) { const a = (i / 3) * TAU; const f = add(r, rbox(3, 16, 14, 1.2), mat(p.vermilion), Math.sin(a) * 12, -14, Math.cos(a) * 12); f.rotation.y = a; }
    add(r, new THREE.ConeGeometry(7, 22, 16), glowMat(p.amber, 0.9), 0, -34, 0, Math.PI, 0, 0);
    add(r, new THREE.ConeGeometry(4, 15, 16), glowMat('#ffffff', 0.9), 0, -30, 0, Math.PI, 0, 0);
    r.rotation.z = -0.62; return g;
  },
  crumble({ p, mat }) {
    const g = new THREE.Group();
    const a = add(g, rbox(24, 30, 26, 2.5), mat(p.cream, { rough: 0.8 }), -13.5, 2, 0); a.rotation.z = 0.12;
    const b = add(g, rbox(22, 30, 26, 2.5), mat(p.cream, { rough: 0.8 }), 13, -2, 0); b.rotation.z = -0.14;
    add(g, rbox(3, 32, 22, 1), mat(p.vermilion, { emissive: 0.5 }), 0.5, 0, 2.5, 0, 0, 0.18);
    for (let i = 0; i < 5; i += 1) add(g, rbox(5 - i * 0.4, 5 - i * 0.4, 5 - i * 0.4, 1.2), mat(i % 2 ? p.amber : p.cream, { rough: 0.7 }), -8 + i * 8, -23 - (i % 2) * 6, 8 + (i % 3) * 3, i, i * 0.7, 0.4);
    return g;
  },
  slowmo({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, new THREE.TorusGeometry(21, 3.6, 14, 44), mat(p.amber, { metal: 0.5, rough: 0.28 }));
    add(r, new THREE.CylinderGeometry(19.5, 19.5, 5, 40), mat('#F4EDDF', { rough: 0.5 }), 0, 0, -1, Math.PI / 2, 0, 0);
    for (let i = 0; i < 12; i += 1) { const a = (i / 12) * TAU; add(r, rbox(1.4, i % 3 ? 3 : 5.5, 1.4, 0.4), mat(p.ink), Math.sin(a) * 15.5, Math.cos(a) * 15.5, 2, 0, 0, -a); }
    add(r, rbox(2, 14, 2, 0.6), mat(p.vermilion, { emissive: 0.3 }), 0, 6, 3, 0, 0, -0.5).geometry.translate(0, 0, 0);
    add(r, rbox(2, 10, 2, 0.6), mat(p.ink), -3.5, -1, 3, 0, 0, 1.9);
    add(r, new THREE.SphereGeometry(2.4, 12, 10), mat(p.ink, { metal: 0.6 }), 0, 0, 3.5);
    add(r, new THREE.CylinderGeometry(3.6, 3.6, 7, 16), mat(p.teal, { metal: 0.4 }), 0, 27, 0);
    add(r, new THREE.CylinderGeometry(2, 2, 6, 12), mat(p.teal, { metal: 0.4 }), 17, 21, 0, 0, 0, -0.7);
    r.rotation.x = -0.1; return g;
  },
  magnet({ p, mat }) {
    const g = new THREE.Group();
    add(g, new THREE.TorusGeometry(17, 6, 14, 30, Math.PI), mat(p.vermilion, { metal: 0.35, rough: 0.3 }), 0, 4, 0, 0, 0, 0);
    for (const s of [-1, 1]) { add(g, rbox(12, 17, 12, 1.4), mat('#e9edf2', { metal: 0.85, rough: 0.22 }), s * 17, -13, 0); add(g, rbox(12.4, 4, 12.4, 1), mat(s < 0 ? p.blue : p.amber), s * 17, -3.2, 0); }
    for (let i = 0; i < 3; i += 1) add(g, new THREE.TorusGeometry(6 + i * 6, 0.9, 6, 20, Math.PI), mat(p.teal, { emissive: 0.8 }), 0, -26, 0, 0, 0, Math.PI).scale.set(1, 0.6, 1);
    return g;
  },
  drunk({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, lathe([[0, -26], [11, -26], [13, -22], [13, 6], [9, 14], [4.4, 18], [4.4, 30], [0, 30]]), mat(p.teal, { rough: 0.12, metal: 0.1, emissive: 0.1 }));
    add(r, new THREE.CylinderGeometry(5.2, 5.2, 5, 14), mat(p.amber, { rough: 0.7 }), 0, 33, 0);
    add(r, new THREE.CylinderGeometry(13.4, 13.4, 14, 28, 1, true), mat('#F4EDDF', { rough: 0.6 }), 0, -8, 0);
    add(r, new THREE.PlaneGeometry(14, 9), mat(p.vermilion, { rough: 0.6 }), 0, -8, 13.5);
    r.rotation.z = 0.5; r.position.set(-4, -3, 0);
    for (let i = 0; i < 4; i += 1) add(g, new THREE.SphereGeometry(2.6 - i * 0.3, 12, 10), mat(p.rose, { rough: 0.15, emissive: 0.3 }), 18 + (i % 2) * 5, 8 + i * 8, 4);
    return g;
  },
  spotlight({ p, mat, glowMat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, lathe([[0, -8], [10, -8], [15, 4], [17, 14], [0, 14]], 24), mat(p.amber, { metal: 0.5, rough: 0.28 }), 0, 8, 0, 0, 0, 0);
    add(r, new THREE.CylinderGeometry(12.5, 12.5, 2, 28), glowMat('#ffffff', 0.95), 0, 22.2, 0);
    add(r, new THREE.TorusGeometry(17, 1.8, 10, 30), mat(p.ink, { metal: 0.6 }), 0, 22, 0, Math.PI / 2, 0, 0);
    add(r, new THREE.CylinderGeometry(3, 3, 22, 12), mat(p.ink, { metal: 0.5 }), 0, -10, 0);
    add(r, rbox(26, 4, 16, 1.4), mat(p.ink, { metal: 0.5 }), 0, -22, 0);
    add(r, new THREE.ConeGeometry(34, 60, 32, 1, true), glowMat(p.amber, 0.18), 0, 52, 0).scale.set(1, 1, 1);
    r.rotation.z = -0.5; r.position.set(-4, -10, 0); return g;
  },
  zoom({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, new THREE.TorusGeometry(19, 3.6, 14, 44), mat(p.amber, { metal: 0.6, rough: 0.25 }));
    add(r, new THREE.CylinderGeometry(17.2, 17.2, 2.4, 40), mat(p.blue, { glass: true }), 0, 0, 0, Math.PI / 2, 0, 0);
    add(r, new THREE.CylinderGeometry(3.4, 4.4, 24, 14), mat(p.vermilion, { rough: 0.3 }), 21, -21, 0, 0, 0, Math.PI / 4);
    add(r, new THREE.TorusGeometry(19, 0.9, 8, 30, 1.1), mat('#ffffff', { emissive: 0.6 }), 0, 0, 3.6, 0, 0, 1.9);
    add(r, rbox(14, 3, 3, 1), mat(p.teal), 0, 0, 1.4); add(r, rbox(3, 14, 3, 1), mat(p.teal), 0, 0, 1.4);
    r.position.set(-5, 5, 0); r.rotation.y = -0.25; return g;
  },
  double({ p, mat }) {
    const g = new THREE.Group();
    const cup = (color, x, lift, tilt) => { const m = add(g, lathe([[0, 0], [10, 0], [13, 4], [10, 26], [0, 27]]), mat(color, { metal: 0.3, rough: 0.3 }), x, lift, 0); m.rotation.z = tilt; m.rotation.x = Math.PI; m.position.y += 26; return m; };
    cup(p.amber, -14, -22, 0.1); cup(p.blue, 15, -22, -0.1);
    add(g, new THREE.SphereGeometry(6, 18, 14), mat(p.vermilion, { rough: 0.15, emissive: 0.25 }), 0, -18, 14);
    add(g, new THREE.TorusGeometry(4, 1.2, 6, 16, 4.2), mat(p.ink), -14, 14, 12, 0, 0, 0.5); add(g, new THREE.SphereGeometry(1.2, 8, 6), mat(p.ink), -14, 8, 12);
    return g;
  },
  accordion({ p, mat }) {
    const g = new THREE.Group();
    add(g, rbox(7, 32, 28, 2), mat(p.teal, { metal: 0.2 }), -23, 0, 0); add(g, rbox(7, 36, 28, 2), mat(p.vermilion, { metal: 0.2 }), 23, 0, 0);
    for (let i = 0; i < 9; i += 1) { const x = -16 + i * 4; add(g, rbox(1.8, 28, 24, 0.5), mat(i % 2 ? p.amber : '#F4EDDF', { rough: 0.6 }), x, 0, 0, 0, 0, (i % 2 ? 0.28 : -0.28)); }
    for (let i = 0; i < 3; i += 1) add(g, new THREE.SphereGeometry(1.6, 10, 8), mat('#F4EDDF', { rough: 0.2 }), 23, 8 - i * 8, 14.4);
    for (let i = 0; i < 4; i += 1) add(g, rbox(3, 4, 3, 0.8), mat('#F4EDDF'), -23, 10 - i * 6.5, 14.4);
    return g;
  },
  rollercoaster({ p, mat }) {
    const g = new THREE.Group();
    const curve = new THREE.CatmullRomCurve3([[-30, -12, 0], [-18, 8, 0], [-6, -12, 0], [8, 14, 0], [20, -8, 0], [32, 6, 0]].map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    add(g, new THREE.TubeGeometry(curve, 48, 2.2, 8, false), mat(p.teal, { metal: 0.3, rough: 0.3 }));
    for (let i = 0; i < 9; i += 1) { const pt = curve.getPoint(i / 8); add(g, new THREE.CylinderGeometry(1, 1, pt.y + 30, 6), mat(p.blue, { rough: 0.5 }), pt.x, (pt.y - 30) / 2 - 2, 0); }
    const t = 0.52; const pt = curve.getPoint(t); const tan = curve.getTangent(t);
    const cart = new THREE.Group(); cart.position.copy(pt).add(new THREE.Vector3(0, 7, 0)); cart.rotation.z = Math.atan2(tan.y, tan.x); g.add(cart);
    add(cart, rbox(20, 10, 14, 3), mat(p.amber, { rough: 0.3 })); add(cart, rbox(18, 3, 12, 1), mat(p.vermilion), 0, 4, 0);
    add(cart, new THREE.SphereGeometry(4, 12, 10), mat('#F4EDDF', { rough: 0.3 }), -3, 8, 0);
    for (const s of [-1, 1]) add(cart, new THREE.CylinderGeometry(3, 3, 3, 12), mat(p.ink, { metal: 0.6 }), s * 6, -6, 7.4, Math.PI / 2, 0, 0);
    g.position.y = 3; return g;
  },
  peekaboo({ p, mat }) {
    const g = new THREE.Group();
    const eye = add(g, new THREE.SphereGeometry(20, 32, 24), mat('#F7F1E4', { rough: 0.2, shine: 1 }), 0, -2, 0); eye.scale.set(1.35, 0.85, 0.7);
    add(g, new THREE.CylinderGeometry(9.6, 9.6, 4, 28), mat(p.blue, { rough: 0.15, shine: 1 }), 0, -2, 12.6, Math.PI / 2, 0, 0);
    add(g, new THREE.CylinderGeometry(4.6, 4.6, 4.6, 20), mat(p.ink, { rough: 0.2 }), 0, -2, 13.2, Math.PI / 2, 0, 0);
    add(g, new THREE.SphereGeometry(1.8, 10, 8), mat('#ffffff', { emissive: 0.7 }), 3, 1.4, 16);
    const lid = add(g, new THREE.SphereGeometry(21.5, 32, 16, 0, TAU, 0, 0.9), mat(p.amber, { rough: 0.4 }), 0, 2, 0); lid.scale.set(1.36, 0.9, 0.74); lid.rotation.x = -0.5;
    for (let i = 0; i < 5; i += 1) { const a = -0.9 + i * 0.45; add(g, new THREE.ConeGeometry(1.4, 9, 6), mat(p.ink), Math.sin(a) * 25, 20 + Math.cos(a) * 3, 6, 0, 0, -a * 0.8); }
    return g;
  },
  earthquake({ p, mat }) {
    const g = new THREE.Group();
    const a = add(g, rbox(34, 8, 34, 2), mat(p.cream, { rough: 0.9 }), -15, -17, 0); a.rotation.z = 0.2;
    const b = add(g, rbox(34, 8, 34, 2), mat(p.cream, { rough: 0.9 }), 15, -19, 0); b.rotation.z = -0.22;
    add(g, rbox(5, 7, 30, 1), mat(p.vermilion, { emissive: 1.1 }), 0, -22, 0);
    const blk = add(g, rbox(26, 14, 22, 3), mat(p.amber, { rough: 0.35 }), 0, 0, 0); blk.rotation.z = 0.28;
    add(g, rbox(20, 12, 20, 3), mat(p.blue, { rough: 0.35 }), 6, 14, 0).rotation.z = -0.34;
    for (let i = 0; i < 6; i += 1) add(g, rbox(3.6, 3.6, 3.6, 0.8), mat(p.cream, { rough: 0.9 }), -26 + i * 10, -8 - (i % 2) * 5, 14, i, i * 0.8, 0);
    for (const s of [-1, 1]) add(g, new THREE.TorusGeometry(26 + 3, 0.9, 6, 18, 1.0), mat(p.vermilion, { emissive: 0.8 }), 0, 0, -6, 0, 0, s > 0 ? -0.5 : Math.PI - 0.5).scale.set(s, 1, 1);
    return g;
  },
  pisa({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(g, new THREE.CylinderGeometry(27, 29, 4, 32), mat(p.teal, { rough: 0.8 }), 0, -30, 0);
    for (let i = 0; i < 6; i += 1) {
      const y = -24 + i * 9.2; add(r, new THREE.CylinderGeometry(12 - i * 0.5, 12.6 - i * 0.5, 8.4, 24), mat(p.cream, { rough: 0.7 }), 0, y, 0);
      add(r, new THREE.TorusGeometry(12.3 - i * 0.5, 1, 6, 24), mat(p.amber, { rough: 0.5 }), 0, y + 4.4, 0, Math.PI / 2, 0, 0);
      for (let k = 0; k < 6; k += 1) { const a = (k / 6) * TAU + 0.4; add(r, rbox(2.2, 5.4, 1.2, 0.5), mat(p.ink), Math.sin(a) * (12.2 - i * 0.5), y, Math.cos(a) * (12.2 - i * 0.5), 0, a, 0); }
    }
    add(r, new THREE.ConeGeometry(8.5, 10, 20), mat(p.vermilion, { rough: 0.4 }), 0, 36, 0); r.position.set(-3, 0, 0); r.rotation.z = -0.2; return g;
  },
  superglue({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, new THREE.CapsuleGeometry(10, 26, 8, 20), mat(p.amber, { rough: 0.25, shine: 1 }), 0, -2, 0);
    add(r, new THREE.CylinderGeometry(10.4, 10.4, 12, 24, 1, true), mat(p.teal, { rough: 0.4 }), 0, -4, 0);
    add(r, lathe([[0, 0], [6, 0], [4, 10], [1.4, 17], [0, 17]], 14), mat(p.teal, { rough: 0.3 }), 0, 24, 0);
    add(r, new THREE.CylinderGeometry(1.7, 1.7, 6, 10), mat(p.vermilion, { rough: 0.3 }), 0, 36, 0);
    r.rotation.z = 0.5; r.position.set(-6, 4, 0);
    add(g, new THREE.SphereGeometry(4, 16, 12), mat(p.blue, { rough: 0.08, shine: 1, emissive: 0.15 }), 14, -20, 2).scale.set(0.8, 1.3, 0.8);
    add(g, new THREE.SphereGeometry(2.4, 12, 10), mat(p.blue, { rough: 0.08, shine: 1 }), 18, -32, 2);
    add(g, new THREE.CylinderGeometry(15, 15, 3, 24), mat(p.blue, { rough: 0.08, shine: 1 }), 16, -36, 2).scale.set(1, 0.4, 0.5);
    return g;
  },
  portal({ p, mat, glowMat }) {
    const g = new THREE.Group();
    add(g, new THREE.TorusGeometry(19, 4.2, 14, 40), mat(p.teal, { metal: 0.4, rough: 0.3, emissive: 0.4 }), -17, 0, -2, 0, 0.55, 0);
    add(g, new THREE.TorusGeometry(19, 4.2, 14, 40), mat(p.blue, { metal: 0.4, rough: 0.3, emissive: 0.4 }), 17, 0, 2, 0, -0.55, 0);
    add(g, new THREE.CircleGeometry(16, 36), glowMat(p.teal, 0.55), -17, 0, -2, 0, 0.55, 0);
    add(g, new THREE.CircleGeometry(16, 36), glowMat(p.amber, 0.5), 17, 0, 2, 0, -0.55, 0);
    add(g, rbox(14, 10, 14, 2.4), mat(p.amber, { rough: 0.3, emissive: 0.2 }), 0, 0, 0, 0.2, 0.4, 0.1);
    for (let i = 0; i < 5; i += 1) add(g, new THREE.SphereGeometry(1.4, 8, 6), glowMat('#ffffff', 0.9), -8 + i * 4, 11 - Math.abs(i - 2) * 2.5, 6);
    return g;
  },
  calipers({ p, mat }) {
    const g = new THREE.Group(); const r = new THREE.Group(); g.add(r);
    add(r, rbox(60, 8, 4, 1), mat('#e7ecf1', { metal: 0.8, rough: 0.25 }), 0, 6, 0);
    for (let i = 0; i < 15; i += 1) add(r, rbox(0.9, i % 5 ? 3 : 5, 0.8, 0.2), mat(p.ink), -28 + i * 4, 3.5 - (i % 5 ? 0 : 0.5), 2.4);
    add(r, rbox(6, 34, 6, 1.2), mat('#e7ecf1', { metal: 0.8, rough: 0.25 }), -27, -10, 0);
    add(r, rbox(10, 5, 6, 1.2), mat('#e7ecf1', { metal: 0.8 }), -22.5, -26, 0);
    add(r, rbox(7, 30, 6, 1.2), mat(p.amber, { metal: 0.5, rough: 0.28 }), 14, -8, 0);
    add(r, rbox(11, 5, 6, 1.2), mat(p.amber, { metal: 0.5 }), 8.5, -23, 0);
    add(r, rbox(8, 7, 7, 1.4), mat(p.vermilion, { rough: 0.3 }), 14, 8, 0);
    add(r, rbox(14, 12, 10, 2), mat(p.blue, { rough: 0.35 }), -7, -17, 0);
    r.position.set(4, 3, 0); return g;
  },
  empty({ p, mat }) {
    const g = new THREE.Group();
    [[p.teal, 38, -14], [p.amber, 30, -1.5], [p.blue, 22, 11]].forEach(([c, w, y]) => add(g, rbox(w, 11, 22, 3), mat(c, { rough: 0.4 }), 0, y, 0));
    add(g, new THREE.TorusGeometry(5, 1.6, 6, 14, 4.3), mat(p.vermilion, { emissive: 0.4 }), 17, 20, 4);
    return g;
  },
  // the page's own glyphs, sculpted the same way: the brand emblem and the sound speaker (one model for on, one for muted)
  brand({ p, mat }) {
    const g = new THREE.Group();
    [[p.teal, 42, -20], [p.amber, 34, -7.5], [p.vermilion, 26, 5], [p.blue, 18, 17.5]].forEach(([c, w, y], i) => { const b = add(g, rbox(w, 11.5, 25, 3), mat(c, { rough: 0.4 }), i % 2 ? 2 : -2, y, 0); b.rotation.y = i % 2 ? 0.05 : -0.06; });
    add(g, new THREE.OctahedronGeometry(5.2, 0), mat('#FFC83D', { metal: 0.5, rough: 0.25, emissive: 0.7 }), 17, 31, 5).rotation.set(0.4, 0.6, 0.2);
    add(g, rbox(9, 2.6, 2.6, 1), mat('#FFC83D', { emissive: 0.7 }), 26, 22, 4, 0, 0, 0.7);
    add(g, rbox(8, 2.6, 2.6, 1), mat('#FFC83D', { emissive: 0.7 }), 29, 31, 4, 0, 0, -0.2);
    return g;
  },
  'speaker-on'({ p, mat }) { return speaker({ p, mat }, true); },
  'speaker-off'({ p, mat }) { return speaker({ p, mat }, false); }
};

export function buildIcon(id, theme = 'paper') {
  const kit = kitFor(theme); const make = BUILD[id] || BUILD.empty;
  const group = make(kit);
  const box = new THREE.Box3().setFromObject(group); const size = box.getSize(new THREE.Vector3()); const center = box.getCenter(new THREE.Vector3());
  const fit = 54 / Math.max(size.x, size.y * 1.05, size.z);
  const holder = new THREE.Group(); group.position.sub(center); holder.add(group); holder.scale.setScalar(fit);
  holder.userData.dispose = () => { holder.traverse(o => { if (o.geometry) o.geometry.dispose(); }); for (const m of kit.cache.values()) m.dispose(); };
  holder.userData.id = id; holder.userData.size = 54;
  return holder;
}

// Bakes every icon to a PNG data URL with a throw-away renderer (its own WebGL context, released immediately after).
// the page's own glyphs that are sculpted too (not sabotages, so not in ICON_IDS): the brand emblem and the speaker, on and muted
export const GLYPH_IDS = Object.freeze(['brand', 'speaker-on', 'speaker-off']);
export function renderIconSprites(theme = 'paper', { size = 192, ids = [...ICON_IDS, 'empty', ...GLYPH_IDS] } = {}) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true, premultipliedAlpha: false });
  renderer.setPixelRatio(1); renderer.setSize(size, size, false); renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = theme === 'paper' ? THREE.NeutralToneMapping : THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = theme === 'paper' ? 1.05 : 1.0;
  renderer.shadowMap.enabled = false;
  const pmrem = new THREE.PMREMGenerator(renderer); const env = new RoomEnvironment(); const envMap = pmrem.fromScene(env, 0.04).texture;
  const scene = new THREE.Scene(); scene.environment = envMap; scene.environmentIntensity = theme === 'paper' ? 0.75 : 0.9;
  const camera = new THREE.PerspectiveCamera(26, 1, 10, 600); camera.position.set(34, 40, 150); camera.lookAt(0, -1, 0);
  const key = new THREE.DirectionalLight('#fff2dc', theme === 'paper' ? 2.4 : 2.6); key.position.set(-60, 90, 120);
  const rim = new THREE.DirectionalLight(theme === 'sunset' ? '#2EC4B6' : theme === 'primetime' ? '#FFC83D' : '#bfe6ea', 1.6); rim.position.set(80, 30, -90);
  scene.add(new THREE.HemisphereLight('#ffffff', '#cdbfa5', 0.7), key, rim);
  const shadowTexture = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(20,12,0,.34)'); g.addColorStop(1, 'rgba(20,12,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false })); blob.rotation.x = -Math.PI / 2; blob.position.y = -30; scene.add(blob);
  const out = {};
  for (const id of ids) {
    const icon = buildIcon(id, theme); icon.rotation.y = -0.5; icon.rotation.x = 0.1; scene.add(icon);
    renderer.render(scene, camera); out[id] = canvas.toDataURL('image/png');
    scene.remove(icon); icon.userData.dispose();
  }
  shadowTexture.dispose(); blob.geometry.dispose(); blob.material.dispose(); envMap.dispose(); pmrem.dispose(); env.dispose();
  renderer.dispose(); renderer.forceContextLoss();
  return out;
}

// Replaces the content of the page's sprite <symbol>s so every <use href="#sabotage-symbol-ID"> becomes a 3D render.
export function applyIconSprites(doc, sprites) {
  let count = 0;
  for (const [id, url] of Object.entries(sprites)) {
    const symbol = doc.getElementById(`sabotage-symbol-${id}`); if (!symbol) continue;
    if (!symbol.dataset.flat) symbol.dataset.flat = symbol.innerHTML;
    symbol.innerHTML = `<image href="${url}" x="-1" y="-1" width="34" height="34" preserveAspectRatio="xMidYMid meet"/>`;
    count += 1;
  }
  return count;
}
// The brand emblem and the speaker are inline <svg>s in the page (no <symbol> to swap): their drawing is kept, and put back by restoreFlatIcons.
export function applyGlyphSprites(doc, sprites) {
  let count = 0;
  const put = (svg, markup) => { if (!svg) return; if (svg.dataset.flat === undefined) svg.dataset.flat = svg.innerHTML; svg.dataset.glyph3d = '1'; svg.innerHTML = markup; count += 1; };
  const image = (href, extra = '') => `<image ${extra} href="${href}" x="-3" y="-3" width="30" height="30" preserveAspectRatio="xMidYMid meet"/>`;
  if (sprites.brand) put(doc.querySelector('.brand-mark svg'), image(sprites.brand));
  if (sprites['speaker-on'] && sprites['speaker-off']) put(doc.querySelector('.sound-toggle svg'), image(sprites['speaker-on'], 'class="speaker-on"') + image(sprites['speaker-off'], 'class="speaker-off"'));
  return count;
}
export function restoreFlatIcons(doc) {
  for (const symbol of doc.querySelectorAll('symbol[id^="sabotage-symbol-"][data-flat]')) { symbol.innerHTML = symbol.dataset.flat; delete symbol.dataset.flat; }
  for (const svg of doc.querySelectorAll('svg[data-glyph3d]')) { svg.innerHTML = svg.dataset.flat; delete svg.dataset.flat; delete svg.dataset.glyph3d; }
}
