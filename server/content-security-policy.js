'use strict';
const { createHash } = require('node:crypto');

// Hash the browser's inline text, including whitespace (HTML normalizes line endings).
function inlineHashes(html) {
  const hashes = { scripts: [], styles: [] };
  for (const match of html.matchAll(/<(script|style)\b([^>]*)>([\s\S]*?)<\/\1\s*>/gi)) {
    if (match[1].toLowerCase() === 'script' && /\bsrc\s*=|\btype\s*=\s*["']application\/json["']/i.test(match[2])) continue;
    const hash = createHash('sha256').update(match[3].replace(/\r\n?/g, '\n')).digest('base64');
    hashes[match[1].toLowerCase() === 'script' ? 'scripts' : 'styles'].push(`'sha256-${hash}'`);
  }
  return hashes;
}

function documentHash(html) { return createHash('sha256').update(html).digest('hex'); }
function inlineMetadata(html) { return { documentHash: documentHash(html), ...inlineHashes(html) }; }

function contentSecurityPolicy(hashes, host) {
  // Explicit same-host WebSocket sources also cover browsers that do not match ws: against 'self'.
  // Permit both schemes for direct HTTP and TLS-terminating proxies, never arbitrary hosts.
  let sockets = '';
  try {
    const url = new URL(`http://${host}`);
    if (url.host === host && !url.username && !url.password) sockets = ` ws://${url.host} wss://${url.host}`;
  } catch (_) { /* Malformed Host headers must not inject policy directives. */ }
  return ["default-src 'self'", "frame-ancestors 'none'", "object-src 'none'", "base-uri 'none'",
    `script-src 'self' ${hashes.scripts.join(' ')}`, `style-src 'self' ${hashes.styles.join(' ')}`,
    "font-src 'self' data:", "img-src 'self' data:", `connect-src 'self'${sockets}`].join('; ');
}

module.exports = { inlineHashes, inlineMetadata, documentHash, contentSecurityPolicy };
