# Sabotage catalogue and the shared embed step

The **Sabotage catalogue** (see `GLOSSARY.md`) is `SABOTAGE_CATALOGUE` in
`shared/game-core.js`: one frozen row per Sabotage. The server, the standalone
page and client3d all read it. `scripts/sync-shared.js` embeds the core (and
room replication) into the page.

## A row

- **Identity and rules**: `id`, `category`, `harsh` (counts as a harsh vote
  option), `dropCounted` (lasts a number of drops), `minHeight`, `reducedMotion`
  (`'normal'`, `'excluded'` from Reduced Motion ballots, or `'safe'`) and
  `teamGlobal` (in Teamwork it hits the whole team).
- **Tuning**: the numbers its behaviour reads and its guide text quotes, for
  example `turbo.multiplier`, `slowmo.creepUntil`, `superglue.window`,
  `calipers.margin` and `zoom.scale`. Behaviour reads them through
  `SABOTAGE_TUNING`. Frequencies and easing that the text never quotes stay
  inline.
- **Wording**: `name`, `short` (the stage vote card), `caption`, `hint` (the
  vote button) and `rules(tuning, durations)`.

## Interface

- `SABOTAGE_CATALOGUE`, `SABOTAGE_BY_ID`, `SABOTAGE_TUNING`.
- `sabotageRules(id, { untilDrop })`: the guide text. Its timings come from
  `EFFECT_SECONDS`, `DROP_EFFECT_SECONDS` and `EFFECT_DROP_BUDGET`. Under
  `untilDrop` (Teamwork) it leaves the timings out and ends with a sentence
  saying how long the Effect lasts.
- Derived views keep their old names and meaning: `SABOTAGE_IDS`,
  `SABOTAGE_CATEGORIES`, `SABOTAGE_CATEGORY_BY_ID`, `HARSH_SABOTAGE_IDS`,
  `SABOTAGE_MIN_HEIGHT`, `DROP_COUNTED_IDS`, `REDUCED_MOTION_EXCLUDED_IDS`,
  `REDUCED_MOTION_SAFE_IDS`, plus the new `TEAM_GLOBAL_IDS`.

## Readers

- **RoundEngine**: `TEAM_GLOBAL_EFFECTS` comes from `TEAM_GLOBAL_IDS`.
  `moverEffects` resolves every Sabotage ID, so a new Sabotage needs no list.
- **Page**: `SABOTAGES` is a view of the catalogue (`id`, `name`, `category`,
  `caption`, `effect`, `hint`, `short`), exposed as
  `window.SabotageStack.sabotages`. It is no longer a table of its own. The
  vote winner announcement calls `sabotageRules` instead of stripping timings
  out with regexes. The page reads `WIDTH`, `HEIGHT`, `BLOCK_H`, `BASELINE`,
  `MIN_WIDTH`, `PERFECT_WINDOW` and `PALETTE` from the core.
- **client3d**: the stage reads the zoom scale from `SABOTAGE_TUNING`, and
  Sabotage names from `SABOTAGE_BY_ID` (see `stage-host-view.md`).
  `ICON_IDS` and `TITLE_EFFECT_IDS` stay, because they list the artwork that
  exists, and the pure modules stay testable without the page. A test checks
  them against the catalogue.

## Adding a Sabotage

1. Add a row.
2. Add its behaviour in the core, the page logic and client3d.
3. Add a `sabotage-symbol-<id>` SVG, a 3D icon (`ICON_IDS`) and a title
   reaction (`TITLE_EFFECT_IDS`, `titlePose`).
4. If it lasts a number of drops, mention it in the How to play text.

`test/sabotage-catalogue.test.js` fails until all of these exist.

The visitor's **View** (see `GLOSSARY.md`) must never weaken an Effect. An
Effect that works through the camera either acts on the final image (the post
pass, like Earthquake's shake or Spotlight's veil) or holds the View while it
lasts (`SceneInteraction.hold` / `release`, like Macro Zoom).

## Embed step

`scripts/sync-shared.js` holds a manifest of the shared modules and their
page markers: `shared/game-core.js` goes between `SHARED_CORE` and
`shared/room-replication.js` between `SHARED_REPLICATION`. Run `npm run sync`
(`sync-core` and `sync-replication` are aliases). `--check` names every stale
copy, and `test/shared-sync.test.js` is the one freshness test.

## Changes from before

- The guide, the 3D icon ring and the solo vote pool now list The Pisa Tilt
  before Earthquake, which is the core's order. The page's own table had them
  swapped, while the dev lab already used the core's order. The vote odds are
  unchanged.
- The page's Sabotage objects also carry `hint` and `short`.

## Verification

`test/fixtures/legacy-catalogue.js` freezes the page's three tables, its
`announceVoteWinner`, the server's lists, and a full copy of the core from
before the change. Do not update it: a Sabotage reworded on purpose since then
goes in the test's `REWORDED` table instead. `test/sabotage-catalogue.test.js` checks:

- the derived lists, page text, hints, short names and every vote winner
  announcement (each Sabotage in each mode) against the oracle;
- that the tuned helpers match exactly on random inputs, and that Mover stepping
  and speed under every Sabotage and both policies match step for step;
- completeness: wording, SVG symbol, 3D icon and title pose for every row, and
  that the How to play durations agree with the lifecycle constants.
