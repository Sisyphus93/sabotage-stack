'use strict';

const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { WebSocketServer, WebSocket } = require('ws');
const { RoomManager } = require('./server/room-manager');

const PROJECT_ROOT = __dirname;
const HTML_PATH = path.join(PROJECT_ROOT, 'sabotage-stack.html');

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

function originIsSameHost(request) {
  const origin = request.headers.origin;
  if (!origin) return true;
  try { return new URL(origin).host === request.headers.host; }
  catch (_) { return false; }
}

function createGameServer({ root = PROJECT_ROOT, roomManager = new RoomManager(), onError = console.error } = {}) {
  const htmlPath = path.join(root, 'sabotage-stack.html');
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
    if (request.method === 'GET' && (pathname === '/' || pathname === '/sabotage-stack.html')) {
      fs.readFile(htmlPath, (error, html) => {
        if (error) {
          onError(error);
          response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
          response.end('The game page could not be loaded.');
          return;
        }
        response.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': html.length,
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'same-origin'
        });
        response.end(html);
      });
      return;
    }
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end('Not found.');
  });

  const wss = new WebSocketServer({ noServer: true, maxPayload: 16 * 1024, perMessageDeflate: false });
  server.on('upgrade', (request, socket, head) => {
    if (requestPathname(request) !== '/ws' || !originIsSameHost(request)) {
      socket.write('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');
      socket.destroy();
      return;
    }
    wss.handleUpgrade(request, socket, head, webSocket => wss.emit('connection', webSocket, request));
  });

  // A bug triggered by one client's message must not terminate the process and every other room with it.
  const guarded = action => { try { action(); } catch (error) { try { onError(error); } catch (_) { /* logging must not throw */ } } };
  wss.on('connection', socket => {
    socket.isAlive = true;
    guarded(() => roomManager.connect(socket));
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

module.exports = { createGameServer, startServer, lanAddresses, originIsSameHost };
