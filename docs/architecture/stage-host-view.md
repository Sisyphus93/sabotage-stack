# What the page tells the Stage

The page hands the 3D layer a read-only view through `window.SabotageStackHost.view()`.
The Stage (`client3d/stage.js`) only renders; it must not work out game rules for
itself. This is the slim version of the "Scene presentation model" candidate: the
view keeps carrying the live `game`, `mp` and `Core`, and the rules the Stage had
copied are now computed by the page and handed over as plain data.

## Fields the page computes

- **`ballot`**: `voteTally()`, which also feeds the page's own vote buttons.
  It is `{ counts, total, pick }` during a vote (`null` otherwise). In a room it is
  the server's tally. In solo the player's pick is already weighted, through
  `Core.weightSoloPick`, the same function `resolveVote` uses to choose the
  winner. `pick` is the solo player's choice, if any.
- **`arena`**: `watchingArena()`, true when a host or spectator watches a
  Competitive round. It also picks the wide 2D host board and the
  `competitive-host` layout.

The Stage turns `ballot` into crowd fractions and candidate sizes, and `arena`
into its `arena` mode. Sabotage names come from the catalogue
(`view.Core.SABOTAGE_BY_ID`, `SABOTAGE_CATALOGUE` for the title ring), not from
`window.SabotageStack.sabotages`.

## The solo pick weight

`Core.SOLO_PICK_WEIGHT` (4) is the only place the weight lives. The tally, the
winner, the 3D ballot and the labels ("Your pick ×4", "worth four votes",
`Core.countWord`) all read it.

## Left as it was

- The Stage still works out whether your own Competitive tower has collapsed,
  and its crowd size, from the live state. Both are presentation, but they could
  move into the view the same way if they ever need to change.
- The rest of the view (live `game`, `mp`, `Core`) is unchanged, and so are the
  Stage tests that boot the real page.

## Verification

`test/fixtures/legacy-presentation.js` freezes the old weighting in
`resolveVote`, the page's vote-button tally, the Stage's `ballotFrom`, and its
arena rule. Do not update it. `test/presentation.test.js` compares the new code
against it on random solo and room votes, calling `ballotFrom` and `pickMode`
from the real `stage.js`. It also checks that the Stage has no copy of the
weighting, the arena rule or the second global, and that the labels read the
weight constant.
