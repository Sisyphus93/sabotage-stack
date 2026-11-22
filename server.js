'use strict';

const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const zlib = require('node:zlib');
const { WebSocketServer, WebSocket } = require('ws');
const { RoomManager } = require('./server/room-manager');
const { inlineHashes, documentHash, contentSecurityPolicy } = require('./server/content-security-policy');
const generatedCspHashes = require('./public/csp-hashes.json');

// Connection ceilings: one client cannot hold more than a few dozen sockets, and the process refuses new ones
// outright past the global ceiling so a spread of addresses cannot exhaust file descriptors.
const CLIENTS_PER_KEY = 30;
const MAX_SOCKETS = 2000;
const PROJECT_ROOT = __dirname;
const HTML_PATH = path.join(PROJECT_ROOT, 'sabotage-stack.html');
// The exact-match static allowlist: the 3D bundle plus the content-versioned font files named by the build manifest.
// Exact-match routing (no directory serving) keeps path traversal impossible.
const BUNDLE = Object.freeze({ file: ['public', 'stack3d.js'], type: 'text/javascript; charset=utf-8', cache: 'no-cache' });
const BASE_ASSETS = Object.freeze({ '/public/stack3d.js': BUNDLE, '/assets/stack3d.js': BUNDLE });
const FONT_CACHE = 'public, max-age=31536000, immutable';

// The font URLs are content-versioned by the build, so the exact names are read from the committed manifest at startup.
// Matching only the generated basename shape means a damaged or hand-edited manifest still cannot open a directory.
function assetsFor(root) {
  const assets = { ...BASE_ASSETS };
  let manifest;
  try { manifest = JSON.parse(fs.readFileSync(path.join(root, 'public', 'fonts.json'), 'utf8')); }
  catch (error) {
    // A custom root may be a fixture without fonts; the deployed tree may not silently lose its fonts.
    if (path.resolve(root) === path.resolve(PROJECT_ROOT)) throw new Error(`public/fonts.json is missing or invalid: ${error.message}`);
    return assets;
  }
  if (!Array.isArray(manifest && manifest.fonts) && path.resolve(root) === path.resolve(PROJECT_ROOT)) {
    throw new Error('public/fonts.json is missing its fonts list');
  }
  for (const font of Array.isArray(manifest && manifest.fonts) ? manifest.fonts : []) {
    if (!font || typeof font.file !== 'string' || !/^[a-z0-9][a-z0-9-]*\.woff2$/.test(font.file)) continue;
    assets[`/public/fonts/${font.file}`] = {
      file: ['public', 'fonts', font.file], type: 'font/woff2', cache: FONT_CACHE, compress: false
    };
  }
  return assets;
}

function sendJson(response, status, value) {
  const body = Buffer.from(JSON.stringify(value));
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  response.end(body);
}

// Route on the raw request target instead of `new URL(...)`: Node's HTTP parser accepts targets such as "//" that make
// `new URL` throw, and an uncaught throw inside a request handler used to terminate the whole process (every room).
// Only origin-form targets ("/path?query") are served; anything else is rejected.
function requestPathname(request) {
  const target = typeof request.url === 'string' ? request.url : '';
  if (!target.startsWith('/') || target.startsWith('//')) return null;
  const end = target.search(/[?#]/);
  return end === -1 ? target : target.slice(0, end);
}

// Serves one file with ETag revalidation and brotli/gzip. The compressed copies are cached per file version, so the
// 700 KB page and the 3D bundle are compressed once per change instead of once per visitor. Files that are already
// compressed (woff2) pass `compress: false`: no recompression, no Content-Encoding and no misleading Vary.
//
// Two things keep a cold start from stampeding: the read is coalesced, so a burst of first requests shares one
// fs.readFile, and each (version, encoding) remembers its *promise*, so the burst shares one compression instead of
// running one per request. Compression also moved off the request path (async zlib, libuv thread pool) so the event
// loop keeps serving the rest of the game while a megabyte is being compressed.
const compressionCache = new Map();
const inflightReads = new Map();
function readOnce(filePath, version) {
  const key = `${filePath}|${version}`;
  let pending = inflightReads.get(key);
  if (!pending) {
    pending = fs.promises.readFile(filePath).finally(() => inflightReads.delete(key));
    inflightReads.set(key, pending);
  }
  return pending;
}

function compressOnce(entry, encoding) {
  const pending = encoding === 'br'
    ? new Promise((resolve, reject) => zlib.brotliCompress(entry.raw, {
      params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5, [zlib.constants.BROTLI_PARAM_SIZE_HINT]: entry.raw.length }
    }, (error, out) => (error ? reject(error) : resolve(out))))
    : new Promise((resolve, reject) => zlib.gzip(entry.raw, { level: 6 }, (error, out) => (error ? reject(error) : resolve(out))));
  // The promise itself is the memo: a failed compression is dropped so the next request can retry.
  const shared = pending.catch(error => { if (entry[encoding] === shared) delete entry[encoding]; throw error; });
  entry[encoding] = shared;
  return shared;
}

function sendFile(request, response, filePath, { type, cache, compress = true }, onError) {
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      response.writeHead(statError && statError.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
      response.end(statError && statError.code === 'ENOENT' ? 'Not found.' : 'The file could not be loaded.');
      if (statError && statError.code !== 'ENOENT') onError(statError);
      return;
    }
    const version = `${stat.size}-${Math.round(stat.mtimeMs)}`;
    const etag = `W/"${version}"`;
    const headers = { 'Content-Type': type, 'Cache-Control': cache, ETag: etag, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'same-origin' };
    if (compress) headers.Vary = 'Accept-Encoding';
    if (!type.startsWith('text/html') && request.headers['if-none-match'] === etag) { response.writeHead(304, headers); response.end(); return; }
    const accepted = compress ? String(request.headers['accept-encoding'] || '') : '';
    const encoding = /\bbr\b/.test(accepted) ? 'br' : /\bgzip\b/.test(accepted) ? 'gzip' : null;
    let entry = compressionCache.get(filePath);
    const load = async () => {
      if (entry && entry.version === version) return entry;
      const raw = await readOnce(filePath, version);
      // Every request that waited on the read must join the same entry object, so the cache (not this request's
      // local view of it) decides: whoever finishes first creates it, the rest reuse it and its compression promise.
      const current = compressionCache.get(filePath);
      if (current && current.version === version) { entry = current; return current; }
      entry = { version, raw, br: null, gzip: null };
      // Use build-generated hashes for the deployed page. Supported live edits still get a matching policy,
      // derived from the very same buffer we serve, rather than silently breaking until a server restart.
      if (type.startsWith('text/html')) entry.hashes = documentHash(raw) === generatedCspHashes.documentHash
        ? generatedCspHashes : inlineHashes(raw.toString('utf8'));
      compressionCache.set(filePath, entry);
      return entry;
    };
    load().then(async loaded => {
      if (loaded.hashes) {
        headers['X-Frame-Options'] = 'DENY';
        headers['Content-Security-Policy'] = contentSecurityPolicy(loaded.hashes, request.headers.host);
      }
      if (request.headers['if-none-match'] === etag) { response.writeHead(304, headers); response.end(); return; }
      let body = loaded.raw;
      if (encoding && loaded.raw.length > 1024) {
        body = await (loaded[encoding] && typeof loaded[encoding].then === 'function'
          ? loaded[encoding]
          : compressOnce(loaded, encoding));
        headers['Content-Encoding'] = encoding;
      }
      headers['Content-Length'] = body.length;
      response.writeHead(200, headers);
      response.end(request.method === 'HEAD' ? undefined : body);
    }, readError => {
      onError(readError);
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
      response.end('The file could not be loaded.');
    }).catch(compressError => {
      // A compression failure answers plainly rather than leaving the socket open.
      onError(compressError);
      if (!response.headersSent) {
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
        response.end('The file could not be loaded.');
      } else response.end();
    });
  });
}

function originIsSameHost(request) {
  const origin = request.headers.origin;
  if (!origin) return true;
  try { return new URL(origin).host === request.headers.host; }
  catch (_) { return false; }
}

// Which client identity the per-client budgets key on. It must come from a source the proxy cannot let a client
// forge; until one is known the resolver returns null and those budgets fall back to a single shared bucket.
//   (unset or 'none')  -> null, the fail-safe default
//   'socket'           -> the TCP peer address (direct connections only, e.g. a LAN or a local run)
//   'header:<name>'    -> that header, for a proxy known to overwrite it (never the leftmost X-Forwarded-For)
function clientKeyResolver(source = process.env.CLIENT_IP_SOURCE) {
  const setting = typeof source === 'string' ? source.trim().toLowerCase() : '';
  if (setting === 'socket') return request => request.socket.remoteAddress || null;
  if (setting.startsWith('header:') && setting.length > 'header:'.length) {
    const name = setting.slice('header:'.length);
    // A forwarded list may be appended to a client-supplied value, so the leftmost entry is not identity.
    // Until the deployment's trustworthy header is established (V-1), refuse the list header outright.
    if (name === 'x-forwarded-for') return () => null;
    return request => {
      const value = request.headers[name];
      return typeof value === 'string' && value ? value.trim() || null : null;
    };
  }
  return () => null;
}

function createGameServer({ root = PROJECT_ROOT, roomManager = new RoomManager(), onError = console.error, clientKeyFor = clientKeyResolver(), clientsPerKey = CLIENTS_PER_KEY, maxSockets = MAX_SOCKETS } = {}) {
  const htmlPath = path.join(root, 'sabotage-stack.html');
  const assets = assetsFor(root);
  const server = http.createServer((request, response) => {
    const pathname = requestPathname(request);
    if (pathname == null) {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', Connection: 'close' });
      response.end('Bad request.');
      return;
    }
    if (request.method === 'GET' && pathname === '/healthz') {
      return sendJson(response, 200, { ok: true, service: 'sabotage-stack', protocol: 1, rooms: roomManager.rooms.size });
    }
    if ((request.method === 'GET' || request.method === 'HEAD') && (pathname === '/' || pathname === '/sabotage-stack.html')) {
      // no-cache keeps live edits visible while letting the ETag answer repeat visits with a bodyless 304.
      sendFile(request, response, htmlPath, { type: 'text/html; charset=utf-8', cache: 'no-cache' }, onError);
      return;
    }
    if ((request.method === 'GET' || request.method === 'HEAD') && Object.prototype.hasOwnProperty.call(assets, pathname)) {
      const asset = assets[pathname];
      sendFile(request, response, path.join(root, ...asset.file), asset, onError);
      return;
    }
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end('Not found.');
  });

  const wss = new WebSocketServer({ noServer: true, maxPayload: 16 * 1024, perMessageDeflate: false });
  // Open sockets per client key, and a global ceiling. The per-key cap is skipped when no key is known (the
  // fail-safe rule: a cap must never be keyed on a proxy address); the global cap always applies.
  const socketsByKey = new Map();
  const perKeySocketCap = Math.max(1, clientsPerKey);
  const totalSocketCap = Math.max(1, maxSockets);
  const refuseUpgrade = (socket, status) => {
    socket.write(`HTTP/1.1 ${status} Service Unavailable\r\nRetry-After: 5\r\nConnection: close\r\n\r\n`);
    socket.destroy();
  };
  server.on('upgrade', (request, socket, head) => {
    if (requestPathname(request) !== '/ws' || !originIsSameHost(request)) {
      socket.write('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');
      socket.destroy();
      return;
    }
    if (wss.clients.size >= totalSocketCap) return refuseUpgrade(socket, 503);
    const clientKey = clientKeyFor(request);
    if (clientKey != null && (socketsByKey.get(clientKey) || 0) >= perKeySocketCap) return refuseUpgrade(socket, 503);
    wss.handleUpgrade(request, socket, head, webSocket => {
      if (clientKey != null) {
        socketsByKey.set(clientKey, (socketsByKey.get(clientKey) || 0) + 1);
        webSocket.once('close', () => {
          const remaining = (socketsByKey.get(clientKey) || 1) - 1;
          if (remaining > 0) socketsByKey.set(clientKey, remaining); else socketsByKey.delete(clientKey);
        });
      }
      wss.emit('connection', webSocket, request);
    });
  });

  // A bug triggered by one client's message must not terminate the process and every other room with it.
  const guarded = action => { try { action(); } catch (error) { try { onError(error); } catch (_) { /* logging must not throw */ } } };
  wss.on('connection', (socket, request) => {
    socket.isAlive = true;
    guarded(() => roomManager.connect(socket, { clientKey: clientKeyFor(request) }));
    socket.on('pong', () => { socket.isAlive = true; });
    socket.on('message', raw => guarded(() => roomManager.receive(socket, raw)));
    socket.on('close', () => guarded(() => roomManager.disconnect(socket)));
    socket.on('error', error => { guarded(() => onError(error)); guarded(() => roomManager.disconnect(socket)); });
  });

  const gameTick = setInterval(() => {
    try { roomManager.tick(); } catch (error) { onError(error); }
  }, 100);
  gameTick.unref?.();
  const idleSweep = setInterval(() => guarded(() => roomManager.sweepIdle()), 10_000);
  idleSweep.unref?.();
  const heartbeat = setInterval(() => {
    for (const socket of wss.clients) {
      if (!socket.isAlive) { socket.terminate(); continue; }
      socket.isAlive = false;
      if (socket.readyState === WebSocket.OPEN) socket.ping();
    }
  }, 30_000);
  heartbeat.unref?.();

  async function close() {
    clearInterval(gameTick);
    clearInterval(idleSweep);
    clearInterval(heartbeat);
    for (const room of roomManager.rooms.values()) roomManager.closeRoom(room, 'Server shutting down.');
    for (const socket of wss.clients) socket.close(1001, 'Server shutting down');
    await new Promise(resolve => wss.close(() => resolve()));
    if (server.listening) await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }

  return { server, wss, roomManager, close };
}

function lanAddresses() {
  const result = [];
  for (const addresses of Object.values(os.networkInterfaces())) {
    for (const address of addresses || []) {
      if (!address.internal && (address.family === 'IPv4' || address.family === 4)) result.push(address.address);
    }
  }
  return [...new Set(result)];
}

function startServer({ port = Number(process.env.PORT) || 3000, root = PROJECT_ROOT, logger = console } = {}) {
  const app = createGameServer({ root });
  app.server.listen(port, '0.0.0.0', () => {
    const actualPort = app.server.address().port;
    logger.log(`Sabotage Stack listening on 0.0.0.0:${actualPort}`);
    for (const address of lanAddresses()) logger.log(`LAN: http://${address}:${actualPort}`);
    if (!lanAddresses().length) logger.log(`Local: http://127.0.0.1:${actualPort}`);
  });
  return app;
}

if (require.main === module) {
  const app = startServer();
  const stop = async signal => {
    console.log(`Received ${signal}; closing rooms and stopping server.`);
    try { await app.close(); process.exitCode = 0; }
    catch (error) { console.error(error); process.exitCode = 1; }
  };
  process.once('SIGINT', () => void stop('SIGINT'));
  process.once('SIGTERM', () => void stop('SIGTERM'));
}

module.exports = { createGameServer, startServer, lanAddresses, originIsSameHost, clientKeyResolver };
