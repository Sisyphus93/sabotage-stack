'use strict';
// The page's eight web fonts are committed as separate woff2 files (issue #48): the page references them by
// content-versioned same-origin URL, the server serves them immutably, and the build keeps the page, manifest and
// public copies in step with the font sources in fonts/.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { createGameServer } = require('../server');
const fonts = require('../scripts/fonts');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'fonts.json'), 'utf8'));

const FACES = [
  ['Fraunces', 'normal', '400 700', 'swap'],
  ['Caveat', 'normal', '400 700', 'swap'],
  ['DM Sans', 'normal', '400 700', 'swap'],
  ['Press Start 2P', 'normal', '400', 'swap'],
  ['VT323', 'normal', '400', 'swap'],
  ['Alfa Slab One', 'normal', '400', 'swap'],
  ['Barlow Condensed', 'normal', '500', 'swap'],
  ['Barlow Condensed', 'normal', '700', 'swap']
];

function fontFaces(text) {
  return [...text.matchAll(/@font-face\s*\{([^}]*)\}/g)].map(match => match[1]);
}

function withServer(fn) {
  return async () => {
    const app = createGameServer({ onError: () => {} });
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const port = app.server.address().port;
    const request = (target, method = 'GET', headers = {}) => new Promise((resolve, reject) => {
      const req = http.request({ host: '127.0.0.1', port, path: target, method, headers }, response => {
        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body: Buffer.concat(chunks) }));
      });
      req.on('error', reject);
      req.end();
    });
    try { await fn(request); } finally { await app.close(); }
  };
}

describe('font build artifacts', () => {
  test('the page declares the same eight faces with same-origin woff2 URLs and no embedded font bytes', () => {
    assert.ok(Buffer.byteLength(html) < 350_000, `page is ${Buffer.byteLength(html)} bytes`);
    assert.doesNotMatch(html, /data:font\/woff2/i);
    const faces = fontFaces(html);
    assert.equal(faces.length, 8);
    const actual = faces.map(face => [
      /font-family:\s*"([^"]+)"/.exec(face)[1],
      /font-style:\s*([^;]+)/.exec(face)[1].trim(),
      /font-weight:\s*([^;]+)/.exec(face)[1].trim(),
      /font-display:\s*([^;]+)/.exec(face)[1].trim()
    ]);
    assert.deepEqual(actual, FACES);
    for (const face of faces) {
      assert.match(face, /src:\s*url\("\/public\/fonts\/[a-z0-9][a-z0-9-]*\.woff2"\)\s*format\("woff2"\)/);
    }
  });

  test('the committed manifest, font copies and page are current (npm run build)', () => {
    assert.equal(fonts.check(), true);
    const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'build-client.js'), '--check'], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stdout + result.stderr);
  });

  test('the font build is idempotent and rejects changed bytes until rebuilt', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stack-fonts-'));
    try {
      fs.cpSync(path.join(ROOT, 'fonts'), path.join(root, 'fonts'), { recursive: true });
      fs.mkdirSync(path.join(root, 'public'));
      fs.copyFileSync(HTML_PATH, path.join(root, 'sabotage-stack.html'));
      fonts.build({ root });
      assert.equal(fonts.check({ root }), true);
      const firstHtml = fs.readFileSync(path.join(root, 'sabotage-stack.html'), 'utf8');
      const firstManifest = fs.readFileSync(path.join(root, 'public', 'fonts.json'), 'utf8');
      const firstFonts = fs.readdirSync(path.join(root, 'public', 'fonts'));
      fonts.build({ root });
      assert.equal(fs.readFileSync(path.join(root, 'sabotage-stack.html'), 'utf8'), firstHtml);
      assert.equal(fs.readFileSync(path.join(root, 'public', 'fonts.json'), 'utf8'), firstManifest);

      fs.appendFileSync(path.join(root, 'fonts', 'fraunces.woff2'), Buffer.from([0]));
      assert.equal(fonts.check({ root }), false);
      fonts.build({ root });
      assert.equal(fonts.check({ root }), true);
      assert.notEqual(fs.readFileSync(path.join(root, 'sabotage-stack.html'), 'utf8'), firstHtml);
      const rebuilt = fs.readdirSync(path.join(root, 'public', 'fonts'));
      assert.ok(rebuilt.some(name => name.startsWith('fraunces-') && !firstFonts.includes(name)), 'the changed font gets a new content-versioned file');
      assert.ok(!rebuilt.includes(firstFonts.find(name => name.startsWith('fraunces-'))), 'the superseded generated font file is removed');
    } finally { fs.rmSync(root, { recursive: true, force: true }); }
  });
});

describe('serving fonts', () => {
  test('each font is served as an immutable, already-compressed woff2 that revalidates to 304', withServer(async request => {
    assert.equal(manifest.fonts.length, 8);
    for (const font of manifest.fonts) {
      const file = fs.readFileSync(path.join(ROOT, 'public', 'fonts', font.file));
      const res = await request(font.url, 'GET', { 'accept-encoding': 'br, gzip' });
      assert.equal(res.status, 200, font.url);
      assert.equal(res.headers['content-type'], 'font/woff2');
      assert.equal(res.headers['cache-control'], 'public, max-age=31536000, immutable');
      assert.equal(res.headers['content-encoding'], undefined);
      assert.equal(res.headers.vary, undefined);
      assert.equal(res.headers['x-content-type-options'], 'nosniff');
      assert.equal(res.headers['content-length'], String(file.length));
      assert.ok(res.headers.etag);
      assert.ok(res.body.equals(file));

      const head = await request(font.url, 'HEAD');
      assert.equal(head.status, 200);
      assert.equal(head.body.length, 0);
      assert.equal(head.headers['content-length'], String(file.length));

      const again = await request(font.url, 'GET', { 'if-none-match': res.headers.etag });
      assert.equal(again.status, 304);
      assert.equal(again.body.length, 0);
      assert.equal(again.headers.etag, res.headers.etag);
    }
  }));

  test('sibling files, directories and traversal next to the fonts stay unserved', withServer(async request => {
    const first = manifest.fonts[0].file;
    for (const target of ['/public/fonts/', '/public/fonts', '/public/fonts/other.woff2', `/public/fonts/${first}/`, '/public/fonts/../fonts.json', '/public/fonts/%2e%2e/fonts.json', '/public/../fonts/fraunces.woff2', '/public/fonts.json', '/public/csp-hashes.json', `/fonts/${first}`, `/public/fonts/${first}.woff2`]) {
      const res = await request(target);
      assert.ok([400, 404].includes(res.status), `${target} -> ${res.status}`);
    }
  }));

  test('the HTML uses no-cache and its conditional GET is a bodyless 304 with the same policy', withServer(async request => {
    const first = await request('/', 'GET', { 'accept-encoding': 'br' });
    assert.equal(first.status, 200);
    assert.equal(first.headers['cache-control'], 'no-cache');
    assert.ok(first.headers['content-security-policy']);
    const again = await request('/', 'GET', { 'if-none-match': first.headers.etag });
    assert.equal(again.status, 304);
    assert.equal(again.body.length, 0);
    assert.equal(again.headers.etag, first.headers.etag);
    assert.equal(again.headers['content-security-policy'], first.headers['content-security-policy']);
    assert.equal(again.headers['x-frame-options'], 'DENY');
  }));
});
