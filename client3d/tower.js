// One tower: the stack, the moving block, tumbling debris and collapse. It mirrors a plain "tower state" (see stage.js)
// and never decides gameplay: positions come straight from the game (board px -> world units, board x 0..360 is centred on 0).
import * as THREE from 'three';
import { BLOCK_H, BLOCK_T, BLOCK_D, BOARD_W } from './blocks.js';
import { PhysicsWorld, makeBody, stageFloor, quatFromEuler } from './physics.js';
import { EffectRig } from './effects3d.js';
import { clamp, damp, rng, sign, hexToRgb01 } from './util.js';

export const levelY = level => level * BLOCK_H + BLOCK_H / 2;
export const boardX = x => x - BOARD_W / 2;
const MAX_BODIES = 70;
// The moving block counts as gone below this opacity, exactly as the flat renderer draws nothing at or under it (Peekaboo).
export const MOVER_MIN_ALPHA = 0.01;
const EDGE_OPACITY = 0.85; // the Sunset outline of a block

export class Tower {
  constructor(kit, fx, { scale = 1, depth = BLOCK_D, name = '', color = '#2F8478', interactive = false } = {}) {
    this.kit = kit; this.fx = fx; this.depth = depth; this.name = name; this.color = color;
    this.root = new THREE.Group(); this.root.scale.setScalar(scale);
    this.body = new THREE.Group(); this.debrisGroup = new THREE.Group();
    this.root.add(this.body, this.debrisGroup);
    this.meshes = []; this.facing = 0; this.count = 0; this.stateId = null; this.lastFallen = 0; this.lastCollapsed = false; this.collapseDone = false;
    this.world = new PhysicsWorld({ floorY: stageFloor() });
    this.random = rng(77);
    this.mover = null; this.moverMaterial = null; this.decoy = null; this.portalClones = [];
    this.prevMover = null; this.shake = new THREE.Vector3();
    this.rig = new EffectRig(this);
    this.height = 0; this.topLevel = 0; this.timeScale = 1; this.lastEdge = [0, 0];
    this.listeners = { land: [], perfect: [], collapse: [], piece: [], impact: [] };
    this.collapseQueue = [];
    this.alpha = 1;
  }

  on(name, fn) { this.listeners[name].push(fn); return this; }
  emit(name, payload) { for (const fn of this.listeners[name]) fn(payload, this); }

  setKit(kit) {
    this.kit = kit; this.clear(false);
    this.rig.setKit(kit);
  }

  clear(keepState = false) {
    for (const mesh of this.meshes) this.disposeMesh(mesh);
    this.meshes.length = 0; this.count = 0;
    for (const body of this.world.bodies) if (body.data && body.data.mesh) this.disposeMesh(body.data.mesh);
    this.world.clear();
    if (this.mover) { this.body.remove(this.mover); this.mover = null; }
    if (this.decoy) { this.body.remove(this.decoy); this.decoy = null; }
    for (const c of this.portalClones) this.body.remove(c);
    this.portalClones.length = 0; this.collapseQueue.length = 0;
    if (this.moverMaterial) { this.moverMaterial.dispose(); this.moverMaterial = null; }
    if (!keepState) { this.stateId = null; this.lastFallen = 0; this.lastCollapsed = false; }
    else { this.lastFallen = 0; }
  }

  disposeMesh(mesh) {
    if (!mesh) return;
    if (mesh.parent) mesh.parent.remove(mesh);
    if (mesh.userData.plaque) { mesh.userData.plaque.material.map.dispose(); mesh.userData.plaque.material.dispose(); mesh.userData.plaque.geometry.dispose(); }
    if (mesh.userData.edges) mesh.userData.edges.material.dispose();
  }

  // -------------------------------------------------------------------------------------------------------------------
  makeBlockMesh(block, { animate = false, plaque = false } = {}) {
    const mesh = this.kit.mesh(block, { depth: this.depth });
    const width = Math.max(1, block.right - block.left);
    mesh.position.set(boardX((block.left + block.right) / 2), levelY(block.level), 0);
    mesh.userData.level = block.level; mesh.userData.baseX = mesh.position.x; mesh.userData.width = width; mesh.userData.placer = block.placer;
    if (block.perfect) this.kit.addPerfectStar(mesh, width);
    if (animate) mesh.userData.land = { t: 0, perfect: Boolean(block.perfect) };
    if (plaque && block.placer && block.placer !== 'Base') this.addPlaque(mesh, block);
    this.body.add(mesh);
    return mesh;
  }

  addPlaque(mesh, block) {
    const text = String(block.placer).slice(0, 12);
    const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 72;
    const ctx = canvas.getContext('2d'); const p = this.kit.palette;
    const font = this.kit.theme === 'sunset' ? '30px VT323, monospace' : this.kit.theme === 'primetime' ? '700 34px "Barlow Condensed", sans-serif' : '700 30px "DM Sans", sans-serif';
    ctx.fillStyle = this.kit.theme === 'paper' ? 'rgba(42,37,32,0.88)' : 'rgba(6,10,36,0.9)';
    if (this.kit.theme === 'sunset') ctx.fillRect(2, 2, 252, 68); else { ctx.beginPath(); ctx.roundRect(2, 2, 252, 68, 16); ctx.fill(); }
    ctx.strokeStyle = p.amber; ctx.lineWidth = 3; ctx.stroke();
    ctx.fillStyle = this.kit.theme === 'paper' ? '#F4EDDF' : '#ffffff'; ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 38, 232);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(52, 14.6), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
    const onLeft = block.left > BOARD_W * 0.56; const w = mesh.userData.width;
    plane.position.set(onLeft ? -w / 2 - 28 : w / 2 + 28, 0, this.depth / 2 + 2);
    plane.rotation.y = this.facing; mesh.add(plane); mesh.userData.plaque = plane;
  }

  // The Teamwork name plaques turn on the spot to face the view the visitor chose (they are flat, so from behind or the side they would vanish or be unreadable).
  setFacing(yaw) {
    if (yaw === this.facing) return; this.facing = yaw;
    for (const mesh of this.meshes) if (mesh && mesh.userData.plaque) mesh.userData.plaque.rotation.y = yaw;
  }

  // -------------------------------------------------------------------------------------------------------------------
  sync(state, dt, time) {
    const blocks = state.blocks || [];
    const last = blocks[this.count - 1];
    const reset = this.stateId !== state.id || blocks.length < this.count
      || (this.count > 0 && (!last || Math.abs(last.left - this.lastEdge[0]) > 0.6 || Math.abs(last.right - this.lastEdge[1]) > 0.6));
    if (reset) {
      this.clear(); this.stateId = state.id; this.lastFallen = (state.fallen || []).length; this.lastCollapsed = Boolean(state.collapsed); this.prevMover = null;
      this.collapseDone = Boolean(state.collapsed && state.phase !== 'collapse');
    }
    this.reduced = Boolean(state.reduced);
    // grow the stack
    const before = this.count;
    const bulk = reset || blocks.length - before > 1;
    for (let i = before; i < blocks.length; i += 1) {
      const block = blocks[i];
      const mesh = this.makeBlockMesh(block, { animate: !bulk && !this.reduced, plaque: state.teamPlacers });
      this.meshes[i] = mesh; this.count = i + 1; this.lastEdge = [block.left, block.right];
      if (!bulk && i > 0) this.onLand(block, mesh, state);
    }
    this.height = blocks.length; this.topLevel = blocks.length - 1;
    // overhang pieces the game reports (solo + server rounds alike)
    const fallen = state.fallen || [];
    if (fallen.length < this.lastFallen) this.lastFallen = 0;
    for (let i = this.lastFallen; i < fallen.length; i += 1) if (!reset && !this.collapseDone) this.spawnPiece(fallen[i]);
    this.lastFallen = fallen.length;
    // collapse trigger
    const collapsing = Boolean(state.collapsed);
    if (collapsing && !this.lastCollapsed && !reset) this.beginCollapse(state);
    if (collapsing && !this.lastCollapsed && reset) this.collapseDone = true;
    this.lastCollapsed = collapsing;
    this.updateCollapseQueue(dt);
    this.syncMover(state, dt, time);
    this.animateBlocks(dt, time, state);
    this.stepDebris(dt * this.timeScale, time);
    this.applyBodyTransform(state, time);
    this.rig.update(state, this.mover, dt, time);
    this.prevMover = state.moving ? { ...state.moving } : null;
  }

  onLand(block, mesh, state) {
    this.root.updateWorldMatrix(true, false);
    const world = new THREE.Vector3(mesh.position.x, mesh.position.y - BLOCK_T / 2, this.depth / 2 - 4);
    this.root.localToWorld(world);
    this.emit('land', { block, perfect: Boolean(block.perfect), position: world, width: block.right - block.left, level: block.level });
    if (block.perfect) this.emit('perfect', { block, position: world.clone(), width: block.right - block.left, level: block.level });
  }

  // -------------------------------------------------------------------------------------------------------------------
  syncMover(state, dt, time) {
    const m = state.moving; const effectId = state.effect ? state.effect.id : '';
    if (!m || state.phase === 'collapse' || state.ended || state.collapsed) {
      if (this.mover) this.mover.visible = false;
      if (this.decoy) this.decoy.visible = false;
      for (const c of this.portalClones) c.visible = false;
      return;
    }
    const color = m.color || '#2F8478';
    const baseWidth = Math.max(4, m.width);
    if (!this.mover || this.mover.userData.color !== color || this.mover.userData.theme !== this.kit.theme || baseWidth / this.mover.userData.baseW > 1.22 || baseWidth / this.mover.userData.baseW < 0.82) {
      if (this.mover) this.body.remove(this.mover);
      if (this.moverMaterial) this.moverMaterial.dispose();
      this.moverMaterial = this.kit.uniqueMaterial(color);
      // Born transparent, and it stays so. three compiles a material whose `transparent` is false into an OPAQUE shader (the fragment alpha is forced
      // to 1) and does not rebuild it when the flag is flipped later, so a block first drawn while it was visible could never fade out again: Peekaboo only
      // worked on the blocks that happened to spawn in the hidden half of its cycle. The fade is done with `opacity` and `visible` alone.
      this.moverMaterial.transparent = true;
      this.mover = new THREE.Mesh(this.kit.geometry(baseWidth, this.depth), this.moverMaterial);
      this.mover.castShadow = true; this.mover.receiveShadow = true;
      const quant = this.mover.geometry.parameters ? this.mover.geometry.parameters.width : baseWidth;
      this.mover.userData = { color, theme: this.kit.theme, baseW: quant, level: m.level };
      if (this.kit.theme === 'sunset') {
        const edges = new THREE.LineSegments(this.kit.edges(quant, this.depth), new THREE.LineBasicMaterial({ color: this.kit.palette.ink, transparent: true, opacity: EDGE_OPACITY }));
        this.mover.add(edges); this.mover.userData.edges = edges;
      }
      this.body.add(this.mover);
      for (const c of this.portalClones) this.body.remove(c);
      this.portalClones.length = 0;
      this.rig.attachMover(this.mover);
    }
    const mover = this.mover;
    const windup = effectId === 'slowmo' && state.helpers ? state.helpers.slowToDartWindup(state.effect.elapsed) : 0;
    const drawnWidth = m.width * (1 - 0.08 * windup);
    const drawnLeft = m.left + (m.width - drawnWidth) / 2;
    let alpha = 1;
    if (!this.reduced && effectId === 'peekaboo' && state.helpers) alpha = state.helpers.peekabooOpacity(state.effect.elapsed);
    const vertical = effectId === 'rollercoaster' && !this.reduced && state.helpers ? state.helpers.rollercoasterOffset(state.effect.elapsed, Number(m.rollerPhase) || 0) : 0;
    const targetY = levelY(m.level) - vertical;
    mover.scale.set(drawnWidth / mover.userData.baseW, 1 + 0.06 * windup, 1);
    mover.position.set(boardX(drawnLeft + drawnWidth / 2), targetY, 0);
    mover.userData.alpha = alpha; mover.userData.drawnWidth = drawnWidth; mover.userData.drawnLeft = drawnLeft;
    // Peekaboo: below 1 % the block is not drawn at all, and neither are its Sunset outline (a child of the mesh), its shadow or its reflection; in the
    // 40 ms fades the block and the outline are translucent together. Nothing else marks where it is (the flat view has no marker either).
    const mat = this.moverMaterial;
    mover.visible = alpha > MOVER_MIN_ALPHA;
    mat.opacity = alpha; mat.depthWrite = alpha >= 0.999;
    if (mover.userData.edges) mover.userData.edges.material.opacity = EDGE_OPACITY * alpha;
    mover.castShadow = alpha > 0.55 && effectId !== 'spotlight';
    // drunk: a loose, wobbling roll
    mover.rotation.z = effectId === 'drunk' && !this.reduced ? Math.sin(time * 5.2) * 0.07 + Math.sin(time * 2.3) * 0.04 : 0;
    // portal wrap: mirrored copies when the mover pokes through a gate
    const wrapped = effectId === 'portal';
    for (let k = 0; k < 2; k += 1) {
      let clone = this.portalClones[k];
      if (!clone) { clone = new THREE.Mesh(mover.geometry, mat); clone.castShadow = true; this.body.add(clone); this.portalClones[k] = clone; }
      clone.geometry = mover.geometry; clone.material = mat;
      const off = k === 0 ? BOARD_W : -BOARD_W;
      const left = m.left + (k === 0 ? 0 : 0);
      const need = wrapped && ((k === 0 && m.left < 0) || (k === 1 && m.left + m.width > BOARD_W));
      clone.visible = Boolean(need);
      clone.scale.copy(mover.scale); clone.position.set(mover.position.x + off, mover.position.y, 0);
    }
    // shell-game decoy
    if (effectId === 'double' && m.decoy) {
      if (!this.decoy || this.decoy.userData.color !== (m.decoy.color || color)) {
        if (this.decoy) this.body.remove(this.decoy);
        const dm = this.kit.material(m.decoy.color || color);
        this.decoy = new THREE.Mesh(this.kit.geometry(Math.max(4, m.decoy.width), this.depth), dm);
        this.decoy.userData = { color: m.decoy.color || color, baseW: this.decoy.geometry.parameters.width }; this.decoy.castShadow = true; this.body.add(this.decoy);
      }
      this.decoy.visible = alpha > 0.01;
      this.decoy.scale.x = m.decoy.width / this.decoy.userData.baseW;
      this.decoy.position.set(boardX(m.decoy.left + m.decoy.width / 2), targetY, 0);
    } else if (this.decoy) this.decoy.visible = false;
  }

  // -------------------------------------------------------------------------------------------------------------------
  animateBlocks(dt, time, state) {
    const n = this.meshes.length; const quake = state.effect && state.effect.id === 'earthquake' ? 1 : 0;
    for (let i = 0; i < n; i += 1) {
      const mesh = this.meshes[i]; if (!mesh) continue;
      if (!mesh.visible && mesh.userData.collapsing) continue;
      const level = mesh.userData.level;
      const sway = this.reduced ? 0 : Math.min(2.2, (level / 36) ** 2 * 1.4) * (1 + quake * 2);
      mesh.position.x = mesh.userData.baseX + Math.sin(time * 0.8 + level * 0.31) * sway;
      const land = mesh.userData.land;
      if (land) {
        land.t += dt;
        const k = Math.exp(-land.t * 8.5) * Math.cos(land.t * 30);
        mesh.scale.y = 1 - 0.2 * k; mesh.position.y = levelY(level) - (1 - mesh.scale.y) * BLOCK_T * 0.5;
        if (land.t > 0.6) { mesh.scale.y = 1; mesh.position.y = levelY(level); mesh.userData.land = null; }
      }
      const star = mesh.userData.star;
      if (star && !this.reduced) star.rotation.z = Math.sin(time * 1.6 + level) * 0.12;
    }
  }

  // -------------------------------------------------------------------------------------------------------------------
  spawnPiece(piece) {
    if (!piece || !(piece.right > piece.left)) return;
    const width = piece.right - piece.left; const level = Number.isInteger(piece.level) ? piece.level : this.topLevel + 1;
    const side = (piece.left + piece.right) / 2 < BOARD_W / 2 ? -1 : 1;
    const mesh = this.kit.mesh({ left: piece.left, right: piece.right, color: piece.color || '#2F8478' }, { depth: this.depth });
    const r = this.random;
    const body = makeBody({
      pos: [boardX((piece.left + piece.right) / 2), levelY(level), 0], half: [width / 2, BLOCK_T / 2, this.depth / 2],
      vel: [side * (70 + r() * 150), -10 + r() * 70, (r() - 0.2) * 150], angVel: [(r() - 0.5) * 5, (r() - 0.5) * 3, -side * (2 + r() * 5)], restitution: 0.3, friction: 0.5, data: { mesh, width, piece }
    });
    if (piece.kind === 'crumble') { body.vel[1] += 60; body.angVel[0] *= 2; }
    this.world.add(body);
    this.debrisGroup.add(mesh);
    this.trimBodies();
    this.emit('piece', { piece, width, position: new THREE.Vector3(mesh.position.x, levelY(level), 0), side });
  }

  trimBodies() {
    while (this.world.bodies.length > MAX_BODIES) {
      const oldest = this.world.bodies.find(b => b.asleep) || this.world.bodies[0];
      this.disposeMesh(oldest.data.mesh); this.world.remove(oldest);
    }
  }

  beginCollapse(state) {
    const start = state.collapseStartLevel != null ? state.collapseStartLevel : Math.max(0, this.count - 6);
    const picks = this.meshes.filter(m => m && m.userData.level >= start).reverse();
    picks.forEach((mesh, index) => this.collapseQueue.push({ mesh, delay: this.reduced ? 0 : index * 0.07 }));
    this.emit('collapse', { count: picks.length, top: picks.length ? picks[0].position.clone() : null });
  }

  updateCollapseQueue(dt) {
    if (!this.collapseQueue.length) return;
    for (const entry of this.collapseQueue) entry.delay -= dt * this.timeScale;
    const ready = this.collapseQueue.filter(e => e.delay <= 0);
    if (!ready.length) return;
    this.collapseQueue = this.collapseQueue.filter(e => e.delay > 0);
    for (const { mesh } of ready) {
      const width = mesh.userData.width; const level = mesh.userData.level;
      const side = mesh.position.x < 0 ? -1 : 1; const r = this.random;
      mesh.userData.collapsing = true;
      const body = makeBody({
        pos: [mesh.position.x, mesh.position.y, 0], half: [width / 2, BLOCK_T / 2, this.depth / 2],
        vel: [side * (38 + r() * 130), 10 + r() * 90, (r() - 0.1) * 160], angVel: [(r() - 0.5) * 4, (r() - 0.5) * 3, -side * (1.2 + r() * 4)], restitution: 0.28, friction: 0.5, data: { mesh, width, level }
      });
      this.meshes[level] = null;
      this.world.add(body); this.debrisGroup.add(mesh);
      mesh.userData.land = null; mesh.scale.y = 1;
    }
    this.trimBodies();
  }

  stepDebris(dt, time) {
    if (!this.world.bodies.length) return;
    this.world.step(Math.min(dt, 1 / 30));
    for (const body of this.world.bodies) {
      const mesh = body.data.mesh;
      mesh.position.set(body.pos[0], body.pos[1], body.pos[2]);
      mesh.quaternion.set(body.quat[0], body.quat[1], body.quat[2], body.quat[3]);
      // scale.x stretches the unit geometry to the exact piece width
      if (body.hit == null && body.pos[1] - body.half[1] < 1.5 && body.vel[1] < 0 && body.age > 0.05) {
        body.hit = true;
        const w = new THREE.Vector3(body.pos[0], 0, body.pos[2]); this.root.localToWorld(w);
        this.emit('impact', { position: w, width: body.data.width, speed: Math.abs(body.vel[1]) });
      }
    }
  }

  applyBodyTransform(state, time) {
    const effect = state.effect; const helpers = state.helpers;
    let tx = 0; let ty = 0; let rot = 0;
    if (effect && helpers) {
      if (effect.id === 'earthquake') { const t = helpers.earthquakeOffset(effect.elapsed, effect.remaining, this.reduced); tx = t.x * 1.25; ty = -t.y * 1.25; }
      // (The Pisa Tilt is the camera's: stage.js rolls the whole view by the game's own angle, so the tower itself stands straight.)
    }
    this.shake.set(tx, ty, rot);
    const top = this.topMesh();
    const px = top ? top.userData.baseX : 0; const py = top ? levelY(top.userData.level) : 11;
    const c = Math.cos(rot); const s = Math.sin(rot);
    this.body.rotation.z = rot;
    this.body.position.set(tx + px - (c * px - s * py), ty + py - (s * px + c * py), 0);
  }

  // world-space point on the top of the tower (for effects, labels and the camera)
  topMesh() {
    for (let i = this.meshes.length - 1; i >= 0; i -= 1) if (this.meshes[i]) return this.meshes[i];
    return null;
  }

  topPoint(out = new THREE.Vector3()) {
    const top = this.topMesh();
    out.set(top ? top.userData.baseX : 0, top ? levelY(top.userData.level) + BLOCK_T / 2 : BLOCK_T, 0);
    return this.root.localToWorld(out);
  }

  setAlpha(alpha) { this.alpha = alpha; }

  dispose() {
    this.clear(); this.rig.dispose();
  }
}
