'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { createGameServer } = require('../server');

test('build/check CLI rejects script and stylesheet drift until hashes are regenerated', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stack-csp-'));
  try {
    for (const dir of ['scripts', 'server', 'public']) fs.mkdirSync(path.join(root, dir));
    for (const file of ['scripts/build-csp.js', 'server/content-security-policy.js']) fs.copyFileSync(path.join(__dirname, '..', file), path.join(root, file));
    const htmlPath = path.join(root, 'sabotage-stack.html');
    const original = '<style>body { color: red; }</style><script>window.ready = true;</script>';
    fs.writeFileSync(htmlPath, original);
    const run = (...args) => spawnSync(process.execPath, [path.join(root, 'scripts/build-csp.js'), ...args], { encoding: 'utf8' });
    assert.equal(run('--check').status, 1, 'missing metadata fails');
    assert.equal(run().status, 0);
    assert.equal(run('--check').status, 0);
    for (const mutated of [original.replace('true', 'false'), original.replace('red', 'blue')]) {
      fs.writeFileSync(htmlPath, mutated);
      const checked = run('--check');
      assert.equal(checked.status, 1, checked.stdout + checked.stderr);
      assert.match(checked.stderr, /stale/);
      assert.equal(run().status, 0);
      assert.equal(run('--check').status, 0);
    }
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

test('committed CSP metadata is fresh', () => {
  const result = spawnSync(process.execPath, [path.join(__dirname, '../scripts/build-csp.js'), '--check'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('live HTML edits reload with matching hashes without restarting the server', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'stack-csp-reload-'));
  const file = path.join(root, 'sabotage-stack.html');
  const original = '<style>body{color:red}</style><script>window.ready=true;</script>';
  fs.writeFileSync(file, original);
  const app = createGameServer({ root });
  try {
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const url = `http://127.0.0.1:${app.server.address().port}/`;
    const first = await fetch(url);
    assert.equal(await first.text(), original);
    const changed = original.replace('red', 'blue').replace('true', 'false');
    fs.writeFileSync(file, changed);
    const second = await fetch(url, { headers: { 'if-none-match': first.headers.get('etag') } });
    assert.equal(second.status, 200);
    assert.equal(await second.text(), changed);
    assert.notEqual(second.headers.get('etag'), first.headers.get('etag'));
    const policy = second.headers.get('content-security-policy');
    assert.notEqual(policy, first.headers.get('content-security-policy'));
    for (const text of ['body{color:blue}', 'window.ready=false;']) {
      assert.ok(policy.includes(`'sha256-${crypto.createHash('sha256').update(text).digest('base64')}'`));
    }
    const head = await fetch(url, { method: 'HEAD', headers: { 'if-none-match': second.headers.get('etag') } });
    assert.equal(head.status, 304);
    assert.equal(head.headers.get('content-security-policy'), policy);
  } finally { await app.close(); fs.rmSync(root, { recursive: true, force: true }); }
});

test('HTML GET, HEAD and revalidation responses enforce hash-based CSP and deny framing', async () => {
  const app = createGameServer();
  try {
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const origin = `http://127.0.0.1:${app.server.address().port}`;
    for (const route of ['/', '/sabotage-stack.html']) {
      const first = await fetch(origin + route);
      const html = await first.text();
      const policy = first.headers.get('content-security-policy');
      assert.ok(policy, 'HTML must carry an enforced CSP');
      for (const directive of ["default-src 'self'", "frame-ancestors 'none'", "object-src 'none'", "base-uri 'none'", "font-src 'self'", "img-src 'self' data:"]) assert.ok(policy.includes(directive), directive);
      assert.doesNotMatch(policy, /font-src[^;]*data:/);
      assert.doesNotMatch(policy, /unsafe-inline|unsafe-eval/);
      assert.equal(policy.split(';').find(part => part.trim().startsWith('connect-src')).trim(),
        `connect-src 'self' ws://${new URL(origin).host} wss://${new URL(origin).host}`);
      for (const match of html.matchAll(/<(script|style)\b([^>]*)>([\s\S]*?)<\/\1\s*>/gi)) {
        if (/\bsrc\s*=|application\/json/.test(match[2])) continue;
        const hash = crypto.createHash('sha256').update(match[3].replace(/\r\n?/g, '\n')).digest('base64');
        const directive = policy.split(';').find(part => part.trim().startsWith(`${match[1] === 'script' ? 'script' : 'style'}-src `));
        assert.ok(directive.includes(`'sha256-${hash}'`), 'actual inline bytes are authorized');
      }
      for (const method of ['GET', 'HEAD']) {
        for (const conditional of [false, true]) {
          const response = await fetch(origin + route, { method, headers: conditional ? { 'if-none-match': first.headers.get('etag') } : {} });
          await response.arrayBuffer();
          assert.equal(response.status, conditional ? 304 : 200);
          assert.equal(response.headers.get('x-frame-options'), 'DENY');
          assert.equal(response.headers.get('content-security-policy'), policy);
        }
      }
    }
  } finally { await app.close(); }
});
