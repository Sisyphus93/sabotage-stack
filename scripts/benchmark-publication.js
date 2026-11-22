'use strict';

// Run: node scripts/benchmark-publication.js
// Fixed clock, seeded gameplay RNG, six players, fifteen spectators and a host.
// Times include changed -> snapshot -> diff -> serialization -> 22 no-op sends.
const { performance } = require('node:perf_hooks');
const { publicationRoom } = require('../test/helpers/publication-room');
const median = values => values.sort((a, b) => a - b)[Math.floor(values.length / 2)];
const sizes = [20, 80, 320];
let failed = false;
for (const mode of ['teamwork', 'competitive']) for (const append of [false, true]) {
  const times = sizes.map(size => {
    const batches = [];
    for (let batch = 0; batch < 7; batch++) {
      const { room, actors, block } = publicationRoom(mode, size, { record: false });
      const publish = () => {
        actors[0].perfects++;
        if (append) {
          actors[0].stack.push(block(actors[0].stack.length));
          actors[0].fallen.push({ ...block(actors[0].fallen.length), direction: 1 });
        }
        room.engine.changed();
      };
      for (let i = 0; i < 50; i++) publish();
      const start = performance.now();
      for (let i = 0; i < 100; i++) publish();
      batches.push((performance.now() - start) / 100);
    }
    return median(batches);
  });
  const ratio = times[2] / times[0];
  console.log(`${mode.padEnd(11)} ${append ? 'tail append' : 'scalar only'}: ${sizes.map((size, i) => `${size}: ${times[i].toFixed(3)} ms`).join(', ')}; 320/20 = ${ratio.toFixed(2)}x`);
  if (ratio > 2) failed = true;
}
if (failed) {
  console.error('Scaling smoke target exceeded (320/20 > 2x); rerun on an idle machine before investigating.');
  process.exitCode = 1;
}
