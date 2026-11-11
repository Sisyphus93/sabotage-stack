'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `jsdom / @napi-rs/canvas not installed (run npm install): ${error.message}`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const INK = '42,37,32,255';

describe('Spotlight (real client page, real canvas, pixel-measured)', skipReason ? { skip: skipReason } : {}, () => {
  async function openSpotlightBench() {
    const page = await boot(HTML);
    page.document.getElementById('dev-mode-button').click(); await page.sleep(300);
    page.document.querySelector('[data-dev-effect="spotlight"]').click(); await page.sleep(300);
    return page;
  }
  test('outside the beam the field is one fully opaque colour on every frame', async () => {
    const page = await openSpotlightBench();
    try {
      const canvas = page.document.getElementById('game-canvas');
      const outside = [[10, 10], [350, 10], [10, 510], [350, 510], [40, 300], [60, 400], [300, 300], [310, 420], [180, 430], [100, 200], [250, 150], [14, 260], [346, 260]];
      const seen = new Set();
      for (let frame = 0; frame < 30; frame += 1) {
        await page.sleep(60);
        for (const [x, y] of outside) {
          // the beam sits on the tower's right edge in the DEV bench; keep to points clear of its 52px radius
          seen.add(page.pixel(canvas, x, y).join(','));
        }
      }
      assert.deepEqual([...seen], [INK], `the world leaked through the veil: ${[...seen].join(' | ')}`);
    } finally { page.close(); }
  });
  test('the beam itself still shows the world', async () => {
    const page = await openSpotlightBench();
    try {
      const canvas = page.document.getElementById('game-canvas'); await page.sleep(200);
      // The beam is a 52px-radius circle; scan the image for any non-ink pixel and require a substantial lit area.
      const ctx = canvas.getContext('2d'); const data = ctx.getImageData(0, 0, 360, 520).data; let lit = 0;
      for (let i = 0; i < data.length; i += 4) if (!(data[i] === 42 && data[i + 1] === 37 && data[i + 2] === 32)) lit += 1;
      assert.ok(lit > 6000 && lit < 12000, `lit pixels ${lit}; expected roughly the area of a 52px-radius beam (~8500)`);
    } finally { page.close(); }
  });
  test('the player-facing description no longer claims a partial darkening', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    assert.equal(/Darkens the field by \d+%/.test(html), false);
    assert.match(html, /Blacks out the whole field/);
  });
  test('the page boots with no script errors', async () => {
    const page = await boot(HTML);
    try { await page.sleep(300); assert.deepEqual(page.errors, []); } finally { page.close(); }
  });
});

// F-001: the playfield is the largest 360:520 box that fits the viewport, never a postage stamp.
// jsdom does no layout, so the sizing contract is checked at the source and the scroll reset behaviourally.
describe('Layout: the playfield keeps a minimum size (F-001)', skipReason ? { skip: skipReason } : {}, () => {
  test('every height-driven stage width keeps its 240px floor', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
    // the theme rules also target .game-stage, but only the sizing rules read the viewport height
    const rules = [...style.matchAll(/\.game-stage\s*\{([^}]*)\}/g)]
      .map(match => match[1]).filter(body => body.includes('100dvh'));
    assert.ok(rules.length >= 4, `expected the stage sizing rules in base and media queries, found ${rules.length}`);
    for (const body of rules) {
      const width = /width:\s*([^;]+);/.exec(body);
      assert.ok(width, `.game-stage rule without a width: ${body.trim()}`);
      assert.match(width[1], /max\(\s*calc\(100dvh/, `stage width must floor the viewport-height term: ${width[1]}`);
      assert.match(width[1], /,\s*240px\s*\)/, `stage width floor is not 240px: ${width[1]}`);
    }
    const layout = /\.game-layout\s*\{([^}]*)\}/.exec(style)[1];
    assert.match(layout, /align-items:\s*start/, 'the play card must not be centred against a taller side stack');
  });

  test('starting a game scrolls the new screen to the top', async () => {
    const page = await boot(HTML);
    try {
      const { document } = page;
      document.documentElement.scrollTop = 480; // the title screen was scrolled down before Play solo
      document.getElementById('start-button').click();
      await page.sleep(250);
      assert.equal(document.body.dataset.screen, 'game');
      assert.equal(document.documentElement.scrollTop, 0, 'the game screen should open at the top, not mid-board');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

// F-002: make solo's auto-drop adjustable without changing the one-click default run.
describe('Solo auto-drop assist choices (F-002)', skipReason ? { skip: skipReason } : {}, () => {
  const AUTO_DROP_STORAGE_KEY = 'sabotage-stack-solo-auto-drop-v1';

  test('the default stays at 3.5 seconds and a chosen setting persists across reloads', async () => {
    const page = await boot(HTML);
    let restored = null;
    try {
      const select = page.document.getElementById('solo-auto-drop-select');
      assert.equal(select.value, '3.5');
      assert.match(page.document.getElementById('solo-auto-drop-help').textContent, /Standard timing/);
      select.value = 'off';
      select.dispatchEvent(new page.window.Event('change', { bubbles: true }));
      const saved = page.window.localStorage.getItem(AUTO_DROP_STORAGE_KEY);
      assert.equal(saved, 'off');
      assert.match(page.document.getElementById('solo-auto-drop-help').textContent, /labelled Assisted/);

      restored = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: saved } });
      assert.equal(restored.document.getElementById('solo-auto-drop-select').value, 'off');
      assert.match(restored.document.getElementById('solo-auto-drop-help').textContent, /labelled Assisted/);
      assert.deepEqual(page.errors, []);
      assert.deepEqual(restored.errors, []);
    } finally { page.close(); if (restored) restored.close(); }
  });

  test('the unchanged default still auto-drops at 3.5 seconds without marking the run assisted', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      page.document.getElementById('start-button').click();
      page.advanceAnimation(3800);
      assert.equal(page.document.getElementById('height-display').textContent, '1', 'the default timer should place the first block');
      assert.doesNotMatch(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      assert.equal(page.document.getElementById('result-assist-label').hidden, true);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('10 seconds is assisted and the auto-drop clock pauses for the first 2 seconds of a vote', async () => {
    const page = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: '10' }, manualAnimationFrame: true });
    try {
      assert.equal(page.document.getElementById('solo-auto-drop-select').value, '10');
      page.document.getElementById('start-button').click();
      assert.match(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      page.advanceAnimation(11800);
      assert.equal(page.document.getElementById('height-display').textContent, '0', '10 seconds of active auto-drop time have not elapsed yet');
      page.advanceAnimation(600);
      assert.equal(page.document.getElementById('height-display').textContent, '1', 'the first block drops after 10 active seconds, excluding the vote pause');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('Off never auto-drops, and an assisted result is labelled', async () => {
    const page = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: 'off' }, manualAnimationFrame: true });
    try {
      page.document.getElementById('start-button').click();
      assert.match(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      page.advanceAnimation(12500);
      assert.equal(page.document.getElementById('height-display').textContent, '0', 'a waiting block is not forced to drop');
      page.document.getElementById('drop-button').click();
      page.document.getElementById('drop-button').click();
      page.document.getElementById('drop-button').click();
      page.advanceAnimation(1300);
      assert.equal(page.document.body.dataset.screen, 'results');
      assert.equal(page.document.getElementById('result-assist-label').hidden, false);
      assert.equal(page.document.getElementById('result-assist-label').textContent, 'Assisted');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

// F-003: vote shortcuts must work when the game's normal controls hold keyboard focus.
describe('Keyboard vote shortcuts work from interactive focus (F-003)', skipReason ? { skip: skipReason } : {}, () => {
  test('digits and numpad digits vote from Drop, canvas, and Menu; typing controls keep their keys', async () => {
    const page = await boot(HTML, {
      storage: { 'sabotage-stack-solo-auto-drop-v1': 'off' },
      manualAnimationFrame: true
    });
    try {
      page.document.getElementById('start-button').click();
      page.advanceAnimation(8200); // open the first vote without an auto-drop
      const buttons = [...page.document.querySelectorAll('.vote-option')];
      assert.ok(buttons.every(button => !button.disabled), 'the first vote should be open');
      const counts = () => buttons.map(button => Number(button.querySelector('.vote-count').textContent));
      const shortcuts = [
        [page.document.getElementById('drop-button'), 'Digit1', '1', 0],
        [page.document.getElementById('game-canvas'), 'Digit2', '2', 1],
        [page.document.getElementById('menu-button'), 'Digit3', '3', 2],
        [page.document.getElementById('drop-button'), 'Numpad1', '1', 0]
      ];
      let previousChoice = null;
      for (const [target, code, key, choice] of shortcuts) {
        target.focus();
        const before = counts();
        const event = new page.window.KeyboardEvent('keydown', { code, key, bubbles: true, cancelable: true });
        target.dispatchEvent(event);
        const after = counts();
        const expected = before.map((count, index) => count + (index === choice ? 4 : 0) - (index === previousChoice ? 4 : 0));
        assert.deepEqual(after, expected, `${code} with focus on #${target.id} should move the player's weighted vote to option ${choice + 1}`);
        assert.equal(event.defaultPrevented, true);
        previousChoice = choice;
      }

      const select = page.document.getElementById('theme-select');
      select.focus();
      const beforeTypingTarget = counts();
      const typingKey = new page.window.KeyboardEvent('keydown', { code: 'Digit1', key: '1', bubbles: true, cancelable: true });
      select.dispatchEvent(typingKey);
      assert.deepEqual(counts(), beforeTypingTarget, 'digits in a typing/select control must not cast a vote');
      assert.equal(typingKey.defaultPrevented, false);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

// F-004: phone players can reach the live vote and effect from the stage, and scroll everywhere else.
describe('Mobile vote and touch access (F-004)', skipReason ? { skip: skipReason } : {}, () => {
  test('the stage vote strip mirrors the live vote and returns to the normal HUD when closed', async () => {
    const page = await boot(HTML, {
      storage: { 'sabotage-stack-solo-auto-drop-v1': 'off' },
      manualAnimationFrame: true,
      seed: 2
    });
    try {
      const { document } = page;
      const strip = document.getElementById('stage-vote-strip');
      const stage = document.getElementById('game-stage');
      const motion = document.getElementById('motion-chip');
      const chips = [...document.querySelectorAll('.stage-vote-chip')];
      assert.equal(chips.length, 3);
      assert.equal(strip.hidden, true, 'the strip starts hidden before a vote opens');
      assert.equal(motion.parentElement.parentElement, stage, 'the live effect status belongs to the stage HUD');

      document.getElementById('start-button').click();
      assert.equal(strip.hidden, true, 'the strip stays hidden between votes');
      page.advanceAnimation(8200);
      assert.equal(strip.hidden, false, 'an open phone vote is shown on the stage');
      assert.ok(chips.every(button => !button.disabled), 'solo vote choices are tappable');

      const fullVoteButtons = [...document.querySelectorAll('.vote-option')];
      for (let index = 0; index < chips.length; index += 1) {
        const chip = chips[index];
        const fullOption = fullVoteButtons[index];
        const sabotageName = fullOption.querySelector('.vote-name').textContent;
        assert.ok(chip.querySelector('.stage-vote-name').textContent, 'each chip has a compact name');
        assert.equal(chip.title, sabotageName, 'the full sabotage name remains available on the chip');
        assert.equal(chip.querySelector('.stage-vote-icon-use').getAttribute('href'), fullOption.querySelector('.vote-icon-use').getAttribute('href'));
        assert.equal(chip.querySelector('.stage-vote-count').textContent, fullOption.querySelector('.vote-count').textContent);
        assert.equal(chip.getAttribute('aria-label'), fullOption.getAttribute('aria-label'));
      }

      const pickedName = chips[1].querySelector('.stage-vote-name').textContent;
      const before = chips.map(button => Number(button.querySelector('.stage-vote-count').textContent));
      chips[1].click();
      const after = chips.map(button => Number(button.querySelector('.stage-vote-count').textContent));
      assert.equal(after[1], before[1] + 4, 'a tap casts the same weighted solo vote as the full vote card');
      assert.equal(after[0], before[0]);
      assert.equal(after[2], before[2]);
      assert.deepEqual(after, fullVoteButtons.map(button => Number(button.querySelector('.vote-count').textContent)));

      page.advanceAnimation(5200);
      assert.equal(strip.hidden, true, 'the strip disappears when voting closes');
      assert.equal(document.getElementById('canvas-hint').hidden, false, 'the normal stage hint returns after the vote');
      assert.ok(motion.textContent.startsWith(pickedName), `the active effect is shown on the stage: ${motion.textContent}`);
      assert.match(motion.textContent, /\u00b7 \d+s left$/, 'the stage status includes the active effect timer');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('vertical scrolling is allowed on surrounding game UI, not on the canvas or Drop action', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
    const panYRules = [
      /button,\s*\[role="button"\]\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.play-card\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.game-stage\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.control-row\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.control-help\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.side-stack\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.side-card\s*\{[^}]*touch-action:\s*pan-y/i,
      /\.stage-vote-strip\s*\{[^}]*touch-action:\s*pan-y/i
    ];
    for (const rule of panYRules) assert.match(style, rule, `missing vertical page pan rule ${rule}`);
    assert.match(style, /#game-canvas\s*\{[^}]*touch-action:\s*none/i);
    assert.match(style, /\.drop-button\s*\{[^}]*touch-action:\s*none/i);
    assert.match(style, /\.stage-vote-name\s*\{[^}]*font-size:\s*11px/i, 'compact vote names remain readable on the phone strip');
    assert.equal([...style.matchAll(/touch-action:\s*none/gi)].length, 2, 'only canvas taps and the Drop action keep browser gestures disabled');

    const mobileStart = style.indexOf('@media (max-width: 700px)');
    const mobileEnd = style.indexOf('@media (max-width: 380px)', mobileStart);
    assert.ok(mobileStart >= 0 && mobileEnd > mobileStart, 'the phone layout media query should be present');
    assert.match(style.slice(mobileStart, mobileEnd), /\.stage-vote-strip\s*\{\s*display:\s*grid;\s*\}/, 'the compact vote strip is enabled at phone widths');
  });
});

describe('Game status announcements (F-011)', skipReason ? { skip: skipReason } : {}, () => {
  test('solo announces vote options, winner description and effect end through a polite region', async () => {
    const page = await boot(HTML, { storage: { 'sabotage-stack-solo-auto-drop-v1': 'off' }, manualAnimationFrame: true });
    try {
      const region = page.document.getElementById('game-announcement');
      assert.equal(region.getAttribute('aria-live'), 'polite');
      assert.equal(region.getAttribute('aria-atomic'), 'true');
      const messages = [];
      const observer = new page.window.MutationObserver(() => { if (region.textContent) messages.push(region.textContent); });
      observer.observe(region, { childList: true, subtree: true, characterData: true });
      const original = page.window.setTimeout.bind(page.window);
      page.window.setTimeout = (fn, ms, ...args) => original(fn, Math.min(ms, 20), ...args);
      page.document.getElementById('start-button').click();
      page.advanceAnimation(8200); await page.sleep(100);
      const names = [...page.document.querySelectorAll('.vote-option .vote-name')].map(node => node.textContent);
      const opened = messages.find(text => text.startsWith('Vote open.'));
      assert.ok(opened); for (const name of names) assert.ok(opened.includes(name), `${name} should be announced`);
      page.advanceAnimation(5100); await page.sleep(100);
      const winner = messages.find(text => text.startsWith('Vote winner:'));
      assert.ok(winner && winner.length > 30, 'winner includes an effect description');
      page.advanceAnimation(8100); await page.sleep(150);
      assert.ok(messages.some(text => text.endsWith(' ended.')), 'effect end should be announced');
      assert.equal(page.document.getElementById('canvas-toast').getAttribute('aria-hidden'), 'true');
      assert.deepEqual(page.errors, []);
      observer.disconnect();
    } finally { page.close(); }
  });
});

describe('Space key respects focused controls (F-012)', skipReason ? { skip: skipReason } : {}, () => {
  function key(page, target, type, repeat = false) {
    const event = new page.window.KeyboardEvent(type, { code: 'Space', key: ' ', bubbles: true, cancelable: true, repeat });
    target.dispatchEvent(event);
    return event;
  }
  async function openGame() {
    const page = await boot(HTML, { storage: { 'sabotage-stack-solo-auto-drop-v1': 'off' }, manualAnimationFrame: true });
    page.document.getElementById('start-button').click();
    return page;
  }
  test('Space on vote and Menu is not intercepted or used to drop', async () => {
    const page = await openGame();
    try {
      page.advanceAnimation(8200);
      const vote = page.document.querySelector('.vote-option');
      const beforeHeight = page.document.getElementById('height-display').textContent;
      const beforeCount = Number(vote.querySelector('.vote-count').textContent);
      vote.focus();
      assert.equal(key(page, vote, 'keydown').defaultPrevented, false);
      assert.equal(key(page, vote, 'keyup').defaultPrevented, false);
      assert.equal(page.document.getElementById('height-display').textContent, beforeHeight);
      // jsdom does not synthesize the browser's keyboard click; model the native activation.
      vote.click();
      assert.equal(Number(vote.querySelector('.vote-count').textContent), beforeCount + 4);
      const menu = page.document.getElementById('menu-button');
      menu.focus();
      assert.equal(key(page, menu, 'keydown').defaultPrevented, false);
      assert.equal(key(page, menu, 'keyup').defaultPrevented, false);
      assert.equal(page.document.getElementById('height-display').textContent, beforeHeight);
      menu.click();
      assert.equal(page.document.body.dataset.screen, 'title');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
  for (const targetId of ['body', 'game-canvas', 'drop-button']) {
    test(`Space drops once from ${targetId}, including held-key repeat`, async () => {
      const page = await openGame();
      try {
        page.advanceAnimation(3800);
        const target = targetId === 'body' ? page.document.body : page.document.getElementById(targetId);
        if (targetId !== 'body') target.focus();
        const down = key(page, target, 'keydown');
        const height = page.document.getElementById('height-display').textContent;
        assert.equal(down.defaultPrevented, true);
        assert.equal(height, '1');
        assert.equal(key(page, target, 'keydown', true).defaultPrevented, true);
        assert.equal(page.document.getElementById('height-display').textContent, height);
        assert.equal(key(page, target, 'keyup').defaultPrevented, true);
        assert.deepEqual(page.errors, []);
      } finally { page.close(); }
    });
  }
  test('focus changes and dialogs do not turn Space into an unintended drop', async () => {
    const page = await openGame();
    try {
      const canvas = page.document.getElementById('game-canvas');
      const menu = page.document.getElementById('menu-button');
      page.advanceAnimation(3800);
      key(page, canvas, 'keydown');
      assert.equal(key(page, menu, 'keyup').defaultPrevented, false, 'release on a different control keeps its native behavior');
      const height = page.document.getElementById('height-display').textContent;
      page.document.getElementById('how-dialog').showModal();
      assert.equal(key(page, page.document.body, 'keydown').defaultPrevented, false);
      assert.equal(page.document.getElementById('height-display').textContent, height);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});
