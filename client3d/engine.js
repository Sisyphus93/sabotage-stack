// Renderer, post-processing chain and the adaptive quality governor.
import { Governor } from './governor.js';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { passAShader, passBShader } from './shaders.js';
import { clamp, damp, hexToRgb01 } from './util.js';
import { paletteFor } from './palette.js';

export const TIERS = Object.freeze([
  Object.freeze({ name: 'low', dpr: 1, msaa: 0, shadow: 1024, shadowBias: -0.0012, bloom: false, blur: false, crowd: 0.35, particles: 0.4, reflect: false, soft: false }),
  Object.freeze({ name: 'medium', dpr: 1.25, msaa: 0, shadow: 1024, shadowBias: -0.0010, bloom: true, blur: false, crowd: 0.65, particles: 0.7, reflect: false, soft: true }),
  Object.freeze({ name: 'high', dpr: 1.75, msaa: 4, shadow: 2048, shadowBias: -0.0008, bloom: true, blur: true, crowd: 1, particles: 1, reflect: true, soft: true }),
  Object.freeze({ name: 'ultra', dpr: 2, msaa: 4, shadow: 2048, shadowBias: -0.0006, bloom: true, blur: true, crowd: 1, particles: 1, reflect: true, soft: true })
]);

// A real WebGL2 context, not merely a truthy return value: some headless/test canvases hand back a 2D context (or a stub)
// for any context type, and a lost or blocked context can come back null. Release the probe so it never counts against the
// browser's context limit.
export function webglSupported() {
  try {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2');
    if (!gl || typeof gl.createShader !== 'function' || typeof gl.getParameter !== 'function') return false;
    const ok = typeof gl.getParameter(gl.MAX_TEXTURE_SIZE) === 'number' && gl.isContextLost && !gl.isContextLost();
    const lose = gl.getExtension && gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    return Boolean(ok);
  } catch (_) { return false; }
}

const TONE_MAPPING = { neutral: THREE.NeutralToneMapping, aces: THREE.ACESFilmicToneMapping, agx: THREE.AgXToneMapping };

function pickStartTier(forced) {
  if (forced != null) { const index = TIERS.findIndex(tier => tier.name === forced); if (index >= 0) return index; }
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  if (coarse || cores <= 4 || memory <= 3) return 1;
  return 2;
}

export class Engine {
  constructor({ canvas, theme = 'paper', forcedTier = null, reducedMotion = false } = {}) {
    this.canvas = canvas;
    this.reducedMotion = reducedMotion;
    this.theme = theme;
    this.time = 0;
    this.tierIndex = pickStartTier(forcedTier);
    this.forcedTier = forcedTier != null;
    this.scale = 1;
    this.listeners = { tier: new Set(), lost: new Set(), restored: new Set() };
    this.governor = this.forcedTier ? null : new Governor({ tierCount: TIERS.length, tier: this.tierIndex });
    this.width = 1; this.height = 1; this.pixelRatio = 1;
    this.contextLost = false;
    this.fade = { value: 1, target: 0, speed: 1.2 };

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, stencil: false, depth: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.localClippingEnabled = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setClearColor(0x000000, 1);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, 1, 4, 24000);
    this.camera.position.set(0, 160, 820);

    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.contextLost = true; for (const fn of this.listeners.lost) fn(); });
    canvas.addEventListener('webglcontextrestored', () => { this.contextLost = false; this.buildComposer(); for (const fn of this.listeners.restored) fn(); });

    this.buildComposer();
    this.setTheme(theme);
  }

  get tier() { return TIERS[this.tierIndex]; }

  on(name, fn) { this.listeners[name].add(fn); return () => this.listeners[name].delete(fn); }

  buildComposer() {
    if (this.composer) { this.composer.renderTarget1.dispose(); this.composer.renderTarget2.dispose(); }
    const target = new THREE.WebGLRenderTarget(this.width, this.height, { type: THREE.HalfFloatType, samples: this.tier.msaa });
    this.composer = new EffectComposer(this.renderer, target);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width, this.height), 0.3, 0.6, 0.9);
    this.passA = new ShaderPass({ ...passAShader, uniforms: THREE.UniformsUtils.clone(passAShader.uniforms) });
    this.outputPass = new OutputPass();
    this.passB = new ShaderPass({ ...passBShader, uniforms: THREE.UniformsUtils.clone(passBShader.uniforms) });
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.passA);
    this.composer.addPass(this.outputPass);
    this.composer.addPass(this.passB);
    this.applyTierToPasses();
    this.applyThemeToPasses();
    this.resize(true);
  }

  applyTierToPasses() {
    this.bloomPass.enabled = this.tier.bloom;
  }

  setTheme(theme) {
    this.theme = theme;
    this.palette = paletteFor(theme);
    this.applyThemeToPasses();
  }

  applyThemeToPasses() {
    const p = this.palette || paletteFor(this.theme);
    this.renderer.toneMapping = TONE_MAPPING[p.toneMapping] || THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = p.exposure;
    this.bloomPass.strength = p.bloom; this.bloomPass.threshold = p.bloomThreshold; this.bloomPass.radius = p.bloomRadius;
    const a = this.passA.uniforms; const b = this.passB.uniforms;
    b.uVignette.value = p.vignette; b.uGrain.value = p.grain;
    b.uLevels.value = p.levels || 0;
    b.uSat.value = p.sat || 1; b.uContrast.value = p.contrast || 1;
    b.uVeilColor.value = hexToRgb01(p.ink);
    b.uScan.value = p.pixel ? 0.16 : 0;
  }

  resize(force = false) {
    const cssWidth = Math.max(1, Math.floor(this.canvas.clientWidth || window.innerWidth));
    const cssHeight = Math.max(1, Math.floor(this.canvas.clientHeight || window.innerHeight));
    const dpr = Math.max(0.5, Math.min(window.devicePixelRatio || 1, this.tier.dpr) * this.scale);
    if (!force && cssWidth === this.cssWidth && cssHeight === this.cssHeight && Math.abs(dpr - this.pixelRatio) < 0.001) return;
    this.cssWidth = cssWidth; this.cssHeight = cssHeight; this.pixelRatio = dpr;
    this.width = Math.max(2, Math.round(cssWidth * dpr)); this.height = Math.max(2, Math.round(cssHeight * dpr));
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(cssWidth, cssHeight, false);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(cssWidth, cssHeight);
    this.camera.aspect = cssWidth / cssHeight;
    this.camera.updateProjectionMatrix();
    for (const pass of [this.passA, this.passB]) pass.uniforms.uRes.value = [this.width, this.height];
    this.passB.uniforms.uAspect.value = this.camera.aspect;
  }

  setQuality(index) {
    const next = clamp(Math.round(index), 0, TIERS.length - 1);
    if (next === this.tierIndex) return;
    const msaaChanged = TIERS[next].msaa !== this.tier.msaa;
    this.tierIndex = next; this.scale = 1;
    this.applyTierToPasses();
    if (msaaChanged) this.buildComposer(); else this.resize(true);
    for (const fn of this.listeners.tier) fn(this.tier, next);
  }

  // Measures real frame times and trades resolution for smoothness before it trades features (see governor.js).
  govern(dtMs, now) {
    if (this.forcedTier || !this.governor) return;
    const action = this.governor.update(dtMs, now);
    if (!action) return;
    if (action.type === 'tier') this.setQuality(action.tier);
    if (action.scale != null) { this.scale = action.scale; this.resize(true); }
  }

  // dt in seconds. `post` carries the per-frame look: blur, wobble, flash, tint, etc.
  render(dt, post = {}) {
    if (this.contextLost) return;
    this.time += dt;
    const a = this.passA.uniforms; const b = this.passB.uniforms; const p = this.palette;
    a.uTime.value = this.time; b.uTime.value = this.time;
    a.uBlur.value = this.tier.blur ? (post.blur != null ? post.blur : 7) * (p.tilt > 0 ? 1 : 0) : 0;
    a.uTiltCenter.value = post.tiltCenter != null ? post.tiltCenter : 0.5;
    a.uTiltRange.value = post.tiltRange != null ? post.tiltRange : 0.2 + (1 - p.tilt) * 0.15;
    a.uCA.value = (p.aberration + (post.ca || 0)) * (this.tier.blur ? 1 : 0.6);
    a.uWobble.value = post.wobble || 0;
    a.uZoomBlur.value = post.zoomBlur || 0;
    a.uDesat.value = post.desat || 0;
    a.uPixel.value = p.pixel ? Math.max(2, Math.round(p.pixel * this.pixelRatio)) : (post.pixel || 0);
    b.uPixel.value = p.pixel ? Math.max(2, Math.round(p.pixel * this.pixelRatio)) : 1;
    const tint = post.tint || [1, 1, 1]; a.uTint.value = tint;
    a.uFlash.value = post.flash || 0; if (post.flashColor) a.uFlashColor.value = post.flashColor;
    b.uFade.value = clamp(this.fade.value + (post.fade || 0));
    b.uFadeColor.value = post.fadeColor || hexToRgb01(p.paper === '#F4EDDF' ? '#F4EDDF' : p.skyZenith);
    b.uVignette.value = p.vignette + (post.vignette || 0);
    if (post.bloom != null && this.bloomPass.enabled) this.bloomPass.strength = post.bloom;
    const spots = post.spots || [];
    for (let i = 0; i < 6; i += 1) {
      const sp = spots[i]; const target = b.uSpot.value[i]; const rect = b.uSpotRect.value[i];
      if (sp) { target.set(sp.x, sp.y, sp.r, 1); rect.set(sp.rect[0], sp.rect[1], sp.rect[2], sp.rect[3]); } else target.w = 0;
    }
    this.composer.render(dt);
  }

  dispose() {
    this.composer.renderTarget1.dispose(); this.composer.renderTarget2.dispose();
    this.renderer.dispose();
  }
}
