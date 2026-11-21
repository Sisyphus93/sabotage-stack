'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { MANIFEST, stale } = require('../scripts/sync-shared');

test('every shared module and its copy inlined in sabotage-stack.html are identical', () => {
  assert.deepEqual(stale().map(item => item.source), [], 'Run `npm run sync` to copy the shared modules into the client.');
  assert.deepEqual(MANIFEST.map(item => item.source), ['shared/game-core.js', 'shared/room-replication.js']);
});

test('the sync command rewrites every stale copy, and --check rejects stale or missing copies', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'shared-sync-'));
  try {
    fs.mkdirSync(path.join(root, 'scripts')); fs.mkdirSync(path.join(root, 'shared'));
    const script = path.join(root, 'scripts', 'sync-shared.js');
    fs.copyFileSync(path.join(__dirname, '..', 'scripts', 'sync-shared.js'), script);
    fs.writeFileSync(path.join(root, 'shared', 'game-core.js'), 'core source\n');
    fs.writeFileSync(path.join(root, 'shared', 'room-replication.js'), 'replication source\n');
    const htmlPath = path.join(root, 'sabotage-stack.html');
    const run = (...args) => spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' });
    const page = (core, replication) => `head\n    /* SHARED_CORE_START */\n${core}    /* SHARED_CORE_END */\nmiddle\n    /* SHARED_REPLICATION_START */\n${replication}    /* SHARED_REPLICATION_END */\ntail`;
    fs.writeFileSync(htmlPath, page('core source\n', 'stale\n'));
    const checked = run('--check');
    assert.equal(checked.status, 1);
    assert.match(checked.stderr, /shared\/room-replication\.js and the copy/);
    assert.doesNotMatch(checked.stderr, /game-core/);
    assert.equal(run().status, 0);
    assert.equal(run('--check').status, 0);
    assert.equal(fs.readFileSync(htmlPath, 'utf8'), page('core source\n', 'replication source\n'));
    fs.writeFileSync(path.join(root, 'shared', 'game-core.js'), 'new core\n');
    assert.equal(run('--check').status, 1);
    assert.equal(run().status, 0);
    assert.equal(fs.readFileSync(htmlPath, 'utf8'), page('new core\n', 'replication source\n'));
    fs.writeFileSync(htmlPath, 'missing markers');
    assert.notEqual(run('--check').status, 0);
    assert.notEqual(run().status, 0);
    assert.equal(fs.readFileSync(htmlPath, 'utf8'), 'missing markers', 'a failed sync writes nothing');
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
