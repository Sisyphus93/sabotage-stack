// The new-best crown: a gold crown with five points, a ball on each tip and a jewel in the band, that hangs above the score
// sculpture and turns slowly while it throws off gold. One model for all three worlds (flat-faceted in Sunset).
import * as THREE from 'three';

const JEWELS = ['#E5322D', '#2EC4B6', '#3B6BFF', '#B983FF', '#FF8FAB'];

export function buildCrown(theme) {
  const flat = theme === 'sunset'; const seg = flat ? 10 : 36; const group = new THREE.Group(); const disposables = [];
  const keep = thing => { disposables.push(thing); return thing; };
  const goldMaterial = keep(theme === 'sunset'
    ? new THREE.MeshStandardMaterial({ color: '#FFC53D', metalness: 0.5, roughness: 0.4, flatShading: true, emissive: '#FF9A1F', emissiveIntensity: 0.55 })
    : new THREE.MeshPhysicalMaterial({ color: '#FFC83D', metalness: 1, roughness: 0.24, clearcoat: 0.6, emissive: '#8A5A00', emissiveIntensity: 0.4, envMapIntensity: 1.6, side: THREE.DoubleSide }));
  goldMaterial.side = THREE.DoubleSide;
  const add = (geometry, material, x, y, z) => { const mesh = new THREE.Mesh(keep(geometry), material); mesh.position.set(x, y, z); mesh.castShadow = false; group.add(mesh); return mesh; };

  add(new THREE.CylinderGeometry(25, 21.5, 17, seg, 1, true), goldMaterial, 0, 0, 0);               // the band
  for (const y of [-8.5, 8.5]) { const rim = add(new THREE.TorusGeometry(y > 0 ? 25 : 21.5, 2.1, 8, seg), goldMaterial, 0, y, 0); rim.rotation.x = Math.PI / 2; }
  for (let k = 0; k < 5; k += 1) {
    const a = (k / 5) * Math.PI * 2; const x = Math.sin(a) * 24; const z = Math.cos(a) * 24;
    add(new THREE.ConeGeometry(7.4, 28, flat ? 4 : 16), goldMaterial, x, 8.5 + 14, z);                  // a point
    add(new THREE.SphereGeometry(4.4, flat ? 6 : 14, flat ? 4 : 10), goldMaterial, x, 8.5 + 29.5, z);    // the ball on its tip
    const jewelMaterial = keep(new THREE.MeshStandardMaterial({ color: JEWELS[k], roughness: 0.15, metalness: 0.2, emissive: JEWELS[k], emissiveIntensity: 0.9, flatShading: flat }));
    add(new THREE.SphereGeometry(3.6, flat ? 5 : 12, flat ? 4 : 9), jewelMaterial, Math.sin(a + 0.63) * 25.3, 0, Math.cos(a + 0.63) * 25.3); // a jewel in the band
  }
  group.userData.dispose = () => { for (const item of disposables) item.dispose(); };
  group.userData.height = 8.5 + 34; // from the middle of the band to the top of the balls, unscaled
  return group;
}

// Where the crown is and how it moves, as a pure function of time since the reveal (so it can be tested without three.js):
// it pops in with an overshoot, bobs, and turns (all of it still under Reduced Motion, except the turning and the bobbing).
export function crownPose(age, time, reduced = false) {
  const pop = age <= 0 ? 0 : age >= 0.8 ? 1 : (() => { const k = age / 0.8; return 1 + 2.7 * Math.pow(k - 1, 3) + 1.7 * Math.pow(k - 1, 2); })();
  return { scale: Math.max(0, pop), spin: reduced ? 0.5 : time * 1.35, bob: reduced ? 0 : Math.sin(time * 2.2) * 4, tilt: reduced ? 0.1 : Math.sin(time * 1.6) * 0.07 + 0.1 };
}
