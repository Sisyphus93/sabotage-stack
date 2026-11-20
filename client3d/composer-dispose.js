// Disposing an EffectComposer does not dispose the passes added to it: EffectComposer.dispose() only frees its own
// two render targets and the copy pass. UnrealBloomPass alone owns eleven render targets and a handful of materials,
// so a composer that is dropped without its passes leaks all of that — and buildComposer() drops one on every MSAA
// tier change (medium has msaa 0, high has msaa 4) and on webglcontextrestored.
//
// One pass that throws must not stop the rest, and must not stop the composer itself, from being freed, so every
// call is isolated. `pass.dispose` is optional in the pass API (RenderPass and friends do not implement it).
export function disposeComposer(composer) {
  if (!composer) return;
  for (const pass of Array.isArray(composer.passes) ? composer.passes : []) {
    try { if (pass && typeof pass.dispose === 'function') pass.dispose(); } catch (_) { /* one bad pass must not keep the others alive */ }
  }
  try { if (typeof composer.dispose === 'function') composer.dispose(); } catch (_) { /* the caller is tearing down either way */ }
}
