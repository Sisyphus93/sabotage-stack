'use strict';
// The frame pace is pure: it decides only whether an Idle Scene draws, never what the Scene simulates.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const load = name => import(path.join(__dirname, '..', 'client3d', name));

// Feeds the pace one frame at a time at `hz`, returning how many frames it asked to draw.
function feed(pace, { hz, seconds, mode = 'hero', settled = true, start = 0 }) {
  const step = 1000 / hz; const frames = Math.round(hz * seconds); let draws = 0; let now = start;
  for (let i = 0; i < frames; i += 1) { if (pace.shouldDraw({ mode, settled, now })) draws += 1; now += step; }
  return { draws, now, frames };
}

describe('Idle Scene frame pacing', () => {
  test('a settled Idle Scene draws every frame for the quiet period, then settles near 30 fps', async () => {
    for (const [hz, min, max] of [[60, 290, 310], [120, 290, 310], [144, 290, 310]]) {
      const { FramePace } = await load('frame-pace.js'); const pace = new FramePace();
      pace.wake(0);
      const early = feed(pace, { hz, seconds: 2.4 });
      assert.equal(early.draws, early.frames, `${hz} Hz: every frame before 2.5 s of quiet`);
      assert.equal(pace.idle, false);
      feed(pace, { hz, seconds: 0.2, start: early.now }); // now past the quiet boundary
      assert.equal(pace.idle, true, `${hz} Hz: an Idle Scene`);
      const idle = feed(pace, { hz, seconds: 10, start: early.now + 200 });
      assert.ok(idle.draws >= min && idle.draws <= max, `${hz} Hz: ${idle.draws} draws in 10 s (want ~300)`);
    }
  });

  test('the cap is time-based, so 60, 120 and 144 Hz all settle at the same rate', async () => {
    const { FramePace } = await load('frame-pace.js'); const counts = [];
    for (const hz of [60, 120, 144]) {
      const pace = new FramePace(); pace.wake(0); feed(pace, { hz, seconds: 2.6 });
      counts.push(feed(pace, { hz, seconds: 6, start: 2600 }).draws);
    }
    assert.ok(counts.every(n => Math.abs(n - 180) <= 4), `60/120/144 Hz drew ${counts.join(', ')} (want ~180 in 6 s)`);
  });

  test('a round, a busy scene, or a mode that cannot idle always draws every frame', async () => {
    const { FramePace } = await load('frame-pace.js');
    for (const mode of ['play', 'arena']) {
      const pace = new FramePace(); pace.wake(0);
      const r = feed(pace, { hz: 60, seconds: 8, mode });
      assert.equal(r.draws, r.frames, `${mode} draws every frame`); assert.equal(pace.idle, false);
    }
    const busy = new FramePace(); busy.wake(0);
    const b = feed(busy, { hz: 60, seconds: 8, mode: 'hero', settled: false });
    assert.equal(b.draws, b.frames, 'a scripted sequence is never capped mid-flight'); assert.equal(busy.idle, false);
  });

  test('once a scripted sequence settles, the quiet period starts from that moment', async () => {
    const { FramePace } = await load('frame-pace.js'); const pace = new FramePace(); pace.wake(0);
    feed(pace, { hz: 60, seconds: 6, settled: false });
    const quiet = feed(pace, { hz: 60, seconds: 2.4, settled: true, start: 6000 });
    assert.equal(quiet.draws, quiet.frames, 'full rate through the first 2.5 s after settling');
    assert.equal(pace.idle, false);
    feed(pace, { hz: 60, seconds: 0.2, settled: true, start: quiet.now });
    assert.equal(pace.idle, true);
  });

  test('a wake restores full rate on the next frame and restarts the quiet period', async () => {
    const { FramePace } = await load('frame-pace.js'); const pace = new FramePace(); pace.wake(0);
    feed(pace, { hz: 120, seconds: 4 });
    assert.equal(pace.idle, true);
    const now = 4000;
    assert.equal(pace.shouldDraw({ mode: 'hero', settled: true, now }), false, 'the cap is skipping frames');
    pace.wake(now);
    assert.equal(pace.idle, false, 'input clears the idle flag at once');
    let draws = 0; for (let i = 0; i < 60; i += 1) { if (pace.shouldDraw({ mode: 'hero', settled: true, now: now + i * (1000 / 120) })) draws += 1; }
    assert.equal(draws, 60, 'the next half second draws every 120 Hz frame');
  });

  test('target fps is mutable at runtime and the idle flag is observable', async () => {
    const { FramePace } = await load('frame-pace.js'); const pace = new FramePace(); pace.wake(0);
    feed(pace, { hz: 60, seconds: 2.6 });
    assert.equal(pace.idle, true); assert.equal(pace.targetFps, 30);
    pace.targetFps = 10;
    const slow = feed(pace, { hz: 60, seconds: 5, start: 2600 });
    assert.ok(slow.draws >= 48 && slow.draws <= 52, `10 fps drew ${slow.draws} in 5 s`);
    pace.targetFps = 30;
    const fast = feed(pace, { hz: 60, seconds: 5, start: 7600 });
    assert.ok(fast.draws >= 148 && fast.draws <= 152, `30 fps drew ${fast.draws} in 5 s`);
  });

  test('the Stage reports a scene as settled only once every scripted sequence is over', async () => {
    const { Stage } = await load('stage.js');
    const stage = {
      flight: null, engine: { fade: { value: 0, target: 0 } }, mode: 'hero', reduced: false,
      title: { age: 5, introDuration: 4.4 }, resultsT: 0, modeTime: 0, lobbyArrivalAt: 0,
      podiumFinished: false, podiumFinale: false, podiumClock: 0, podiumFinaleAt: 0
    };
    const settled = () => Stage.prototype.sceneSettled.call(stage);

    assert.equal(settled(), true, 'the title, once its rain has landed');
    stage.title.age = 2; assert.equal(settled(), false, 'mid-intro');
    stage.title.age = 5; stage.flight = {}; assert.equal(settled(), false, 'a camera flight');
    stage.flight = null; stage.engine.fade.value = 0.3; assert.equal(settled(), false, 'a fade');
    stage.engine.fade.value = 0;

    stage.mode = 'results'; stage.resultsT = 0.5; assert.equal(settled(), false, 'mid-reveal');
    stage.resultsT = 1.9; assert.equal(settled(), true);
    stage.reduced = true; stage.resultsT = 0.6; assert.equal(settled(), true, 'Reduced Motion reveals at once');

    stage.mode = 'celebrate'; stage.podiumFinished = false; assert.equal(settled(), false, 'the podium is still revealing');
    stage.podiumFinished = true; stage.podiumFinale = false; assert.equal(settled(), true, 'an empty podium has no finale');
    stage.podiumFinale = true; stage.podiumFinaleAt = 10; stage.podiumClock = 12.5; assert.equal(settled(), false, 'the finale headline');
    stage.podiumClock = 13.8; assert.equal(settled(), true, 'after the finale');

    stage.mode = 'lobby'; stage.modeTime = 1; assert.equal(settled(), false, 'the first moments of a lobby arrival');
    stage.modeTime = 2; stage.lobbyArrivalAt = 1; assert.equal(settled(), false, 'a late player joining');
    stage.lobbyArrivalAt = 0.2; assert.equal(settled(), true);

    for (const mode of ['play', 'arena']) { stage.mode = mode; assert.equal(settled(), false, `${mode} is a round`); }
  });

  test('the defaults leave room for tab switches, and an invalid clock never crashes the decision', async () => {
    const { FramePace, IDLE_MODES } = await load('frame-pace.js'); const pace = new FramePace();
    assert.deepEqual({ targetFps: pace.targetFps, quietMs: pace.quietMs, gapMs: pace.gapMs }, { targetFps: 30, quietMs: 2500, gapMs: 1000 });
    assert.deepEqual([...IDLE_MODES], ['hero', 'lobby', 'results', 'celebrate']);
    pace.wake(NaN); assert.equal(pace.lastActivity, null, 'a bad wake is ignored');
    pace.wake(0); assert.equal(pace.shouldDraw({ mode: 'play', settled: true, now: 0 }), true);
  });
});
