// Guards against the one failure that blacks out a whole frame: a single NaN pixel.
//
// The picture is drawn in half-float, and the bloom blurs it into a chain of smaller and smaller pictures that are added back
// over the whole view. One NaN pixel in the scene is therefore enough to turn the entire screen black, for as long as it stays.
// Found the hard way, with the camera pulled back and a thin slice of a cut-off block lying on the mirrored floor: three's
// bump-mapping chunk normalises the screen-space derivatives of the surface, and for a sliver seen (almost) edge on those are
// exactly zero, so it normalises a zero vector. The paper blocks carry a grain bump, so this was waiting for any camera that
// looked along a thin piece. Two layers of defence, both pure string patches (testable without a GPU):
//   1. the bump chunk never normalises a vector it has no direction for (it keeps the geometric normal instead);
//   2. the bloom's high-pass drops NaN / Infinity pixels, so whatever else goes wrong costs at worst one dark dot, never the frame.
import * as THREE from 'three';

export const SAFE_NORMALIZE = 'vec3 safeNormalize( vec3 v, vec3 fallback ) { float l = dot( v, v ); return l > 1e-24 ? v * inversesqrt( l ) : fallback; }';

const SIGMA_X = /vec3 vSigmaX = normalize\( dFdx\( surf_pos\.xyz \) \);/;
const SIGMA_Y = /vec3 vSigmaY = normalize\( dFdy\( surf_pos\.xyz \) \);/;
const GRAD_NORMAL = /return normalize\( abs\( fDet \) \* surf_norm - vGrad \);/;
const PERTURB = /vec3 perturbNormalArb\(/;
const TEXEL = /vec4 texel = texture2D\( tDiffuse, vUv \);/;

// three's bump-mapping chunk, with every normalize() that can meet a zero vector made safe. Idempotent; returns the text unchanged
// when it is not the chunk this was written for (a three upgrade) - the tests then say so, and the 3D layer still runs as before.
export function hardenBumpChunk(chunk) {
  if (typeof chunk !== 'string' || chunk.includes('safeNormalize')) return chunk;
  if (![SIGMA_X, SIGMA_Y, GRAD_NORMAL, PERTURB].every(re => re.test(chunk))) return chunk;
  return chunk
    .replace(PERTURB, `${SAFE_NORMALIZE}\n\tvec3 perturbNormalArb(`)
    .replace(SIGMA_X, 'vec3 vSigmaX = safeNormalize( dFdx( surf_pos.xyz ), vec3( 1.0, 0.0, 0.0 ) );')
    .replace(SIGMA_Y, 'vec3 vSigmaY = safeNormalize( dFdy( surf_pos.xyz ), vec3( 0.0, 1.0, 0.0 ) );')
    .replace(GRAD_NORMAL, 'return safeNormalize( abs( fDet ) * surf_norm - vGrad, surf_norm );');
}

// The bloom's high-pass filter, reading NaN / Infinity as black (and nothing brighter than 64, far above anything that should glow).
export function hardenHighPass(fragmentShader) {
  if (typeof fragmentShader !== 'string' || fragmentShader.includes('isnan') || !TEXEL.test(fragmentShader)) return fragmentShader;
  return fragmentShader.replace(TEXEL, `vec4 texel = texture2D( tDiffuse, vUv );
\t\t\tif ( any( isnan( texel ) ) || any( isinf( texel ) ) ) texel = vec4( 0.0 );
\t\t\ttexel = min( texel, vec4( 64.0 ) );`);
}

let applied = false;
// Before the first material is compiled: the chunk is read when a program is built.
export function applyShaderGuards(chunks = THREE.ShaderChunk) {
  if (applied && String(chunks.bumpmap_pars_fragment).includes('safeNormalize')) return true;
  const patched = hardenBumpChunk(chunks.bumpmap_pars_fragment);
  if (patched !== chunks.bumpmap_pars_fragment) chunks.bumpmap_pars_fragment = patched;
  applied = String(chunks.bumpmap_pars_fragment).includes('safeNormalize');
  return applied;
}

// A bloom pass (three's UnrealBloomPass) made NaN-proof.
export function guardBloomPass(pass) {
  const material = pass && pass.materialHighPassFilter; if (!material) return false;
  const patched = hardenHighPass(material.fragmentShader);
  if (patched !== material.fragmentShader) { material.fragmentShader = patched; material.needsUpdate = true; }
  return material.fragmentShader.includes('isnan');
}
