'use strict';

// Keep this check aligned with the package engines and jsdom's supported versions.
function isSupportedNode(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(version));
  if (!match) return false;
  const [, major, minor, patch] = match.map(Number);
  return major >= 26 || (major === 24 && minor >= 15) ||
    (major === 22 && (minor > 22 || (minor === 22 && patch >= 2)));
}
module.exports = { isSupportedNode };
