// Bakes a still 3D portrait of a finished tower into a 2D canvas (the multiplayer result cards). One shared offscreen
// renderer is created on first use; every call builds a throw-away scene, renders once and releases it.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { BlockKit, BLOCK_D, BLOCK_T, BLOCK_H } from './blocks.js';
import { PhysicsWorld, makeBody, stageFloor } from './physics.js';
import { paletteFor, normalizeTheme } from './palette.js';
import { colorOf } from './world-common.js';
import { rng } from './util.js';

let shared = null;
function sharedRenderer() {
  if (shared) return shared;
  const canvas = document.createElement('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  const pmrem = new THREE.PMREMGenerator(renderer); const env = new RoomEnvironment();
  shared = { canvas, renderer, envMap: pmrem.fromScene(env, 0.04).texture };
  pmrem.dispose(); env.dispose();
  return shared;
}
export function releaseSnapshotRenderer() { if (!shared) return; shared.envMap.dispose(); shared.renderer.dispose(); shared.renderer.forceContextLoss(); shared = null; }

function skyTexture(palette) {
  const c = document.createElement('canvas'); c.width = 4; c.height = 256; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, palette.skyZenith); g.addColorStop(0.62, palette.skyMid); g.addColorStop(1, palette.skyHorizon);
  x.fillStyle = g; x.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// data: { blocks, fallen, maxHeight, collapseLevel, teamwork, width, height }. Returns true when the canvas was painted.
export function snapshotTower(stage, target, data) {
  try {
    const theme = normalizeTheme(stage.theme); const palette = paletteFor(theme);
    const { renderer, envMap } = sharedRenderer();
    const ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    const w = data.width; const h = data.height;
    renderer.setPixelRatio(1); renderer.setSize(Math.round(w * ratio), Math.round(h * ratio), false);
    renderer.toneMapping = theme === 'paper' ? THREE.NeutralToneMapping : THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = palette.exposure;
    const scene = new THREE.Scene(); const sky = skyTexture(palette); scene.background = sky; scene.environment = envMap; scene.environmentIntensity = 0.7;
    const kit = new BlockKit(theme);
    const baseline = data.teamwork ? 422 : 252;
    const commonScale = Math.min(1, (baseline - 26) / (Math.max(1, data.maxHeight + 1) * BLOCK_H));
    const group = new THREE.Group(); scene.add(group);
    const owned = [];
    for (const block of data.blocks || []) {
      const level = Number.isInteger(block.level) ? block.level : (data.blocks || []).indexOf(block);
      const mesh = kit.mesh({ left: block.left, right: block.right, color: block.color }, { depth: BLOCK_D });
      mesh.position.set((block.left + block.right) / 2 - 180, level * BLOCK_H + BLOCK_H / 2, 0); group.add(mesh);
      if (block.perfect) kit.addPerfectStar(mesh, block.right - block.left);
    }
    if (data.collapseLevel != null) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(210, 1.4, 6, 64).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: colorOf(palette.vermilion).multiplyScalar(1.4) }));
      ring.position.y = (Math.max(0, data.collapseLevel) + 1) * BLOCK_H; group.add(ring); owned.push(ring);
    }
    // the rubble: fallen pieces dropped from the plinth edge and settled by the same physics the live game uses
    const world = new PhysicsWorld({ floorY: stageFloor() }); const random = rng(9); const fallen = (data.fallen || []).slice(0, 12);
    const reach = Math.max(40, Math.min(95, w / 2 / commonScale - 30));
    fallen.forEach((piece, i) => {
      const width = Math.max(6, (piece.right || 0) - (piece.left || 0));
      const mesh = kit.mesh({ left: 0, right: width, color: piece.color || palette.vermilion }, { depth: BLOCK_D * 0.7 }); group.add(mesh);
      world.add(makeBody({ pos: [(random() * 2 - 1) * reach, 16 + i * 9, 70 + random() * 70], half: [width / 2, BLOCK_T / 2, BLOCK_D * 0.35], vel: [0, 0, 0], angVel: [random() - 0.5, (random() - 0.5) * 2, (random() - 0.5) * 2], data: { mesh } }));
    });
    world.settle(2.6);
    for (const body of world.bodies) { const m = body.data.mesh; m.position.set(...body.pos); m.quaternion.set(...body.quat); }
    // set dressing: plinth, floor, light
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(260, 268, 40, 64), new THREE.MeshStandardMaterial({ color: theme === 'paper' ? '#EADFC8' : palette.plinth, roughness: 0.8, metalness: theme === 'primetime' ? 0.4 : 0 }));
    plinth.position.y = -20.2; plinth.receiveShadow = true; scene.add(plinth);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(4000, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: palette.floor, roughness: 0.95 })); floor.position.y = -44; scene.add(floor);
    const key = new THREE.DirectionalLight(colorOf(palette.key), theme === 'paper' ? 2.3 : 2.6); key.position.set(-300, 520, 600); key.castShadow = true;
    Object.assign(key.shadow.camera, { left: -420, right: 420, top: 420, bottom: -120, near: 10, far: 1800 }); key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0008; scene.add(key);
    scene.add(new THREE.HemisphereLight(colorOf(palette.fill), colorOf(palette.ground), 0.7));
    const rim = new THREE.DirectionalLight(colorOf(palette.rim), 1.2); rim.position.set(380, 160, -400); scene.add(rim);
    // camera: board units -> css px at `commonScale`, baseline at the same row the flat drawing used
    const camera = new THREE.PerspectiveCamera(24, w / h, 20, 12000);
    const dist = h / (2 * commonScale * Math.tan(THREE.MathUtils.degToRad(24) / 2)); const pitch = 0.12; const yaw = -0.2;
    camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, Math.sin(pitch) * dist, 30 + Math.cos(yaw) * Math.cos(pitch) * dist); camera.lookAt(0, 0, 30);
    camera.setViewOffset(w, h, 0, -(baseline - h / 2), w, h); camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    target.width = Math.round(w * ratio); target.height = Math.round(h * ratio);
    const ctx = target.getContext('2d'); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(renderer.domElement, 0, 0, target.width, target.height);
    // teamwork towers carry their builders' names, drawn as flat plaques so any name stays readable
    if (data.teamwork) {
      ctx.save(); ctx.scale(ratio, ratio);
      for (const block of data.blocks || []) {
        if (!block.placer || block.placer === 'Base') continue;
        const level = Number.isInteger(block.level) ? block.level : 0; const left = w / 2 + (block.left - 180) * commonScale; const bw = (block.right - block.left) * commonScale;
        const y = baseline - (level + 1) * BLOCK_H * commonScale; const tag = String(block.placer).slice(0, 10);
        ctx.font = theme === 'sunset' ? '14px VT323, monospace' : theme === 'primetime' ? '600 12px "Barlow Condensed", sans-serif' : '600 10px "DM Sans", sans-serif';
        const tw = Math.min(72, ctx.measureText(tag).width + 8); const tx = left > w * 0.56 ? Math.max(2, left - tw - 3) : Math.min(w - tw - 2, left + bw + 3);
        ctx.fillStyle = theme === 'paper' ? 'rgba(42,37,32,.85)' : 'rgba(6,10,36,.88)'; ctx.fillRect(tx, y + 3, tw, 13);
        ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(tag, tx + tw / 2, y + 10, tw - 4);
      }
      ctx.restore();
    }
    sky.dispose(); kit.dispose(); plinth.geometry.dispose(); plinth.material.dispose(); floor.geometry.dispose(); floor.material.dispose(); key.shadow.map && key.shadow.map.dispose();
    for (const o of owned) { o.geometry.dispose(); o.material.dispose(); }
    for (const body of world.bodies) body.data.mesh.geometry && 0;
    return true;
  } catch (error) { console.warn('3D snapshot failed; using the flat drawing', error); return false; }
}
