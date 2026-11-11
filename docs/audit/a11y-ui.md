# UI and accessibility (Phase 4)

Standards applied: WCAG 2.1 AA plus WCAG 2.2 target size, the `game-accessibility` and `game-ux` checklists (console-only items skipped), impeccable `audit` (and `critique` in degraded form, see §12), and the canvas rubrics. Data: `data/matrix.json`, `data/matrix-summary.md`, `data/keyboard-a11y.json`, `data/extras.json`, `data/sandbox.json`.

## 1. What the tools could and could not see

- axe-core sees the DOM only. It cannot see anything drawn on `#game-canvas` or `#results-canvas`: the tower, the mover, effect visuals, the auto-drop ring, player labels on the host board, the perfect star.
- axe returned 503 `color-contrast` nodes as "incomplete" (gradients, images, overlays). Those were covered by the computed-style contrast pass in §3.
- No real screen reader was run. §6 reports what the DOM offers to one.
- Canvas text contrast was judged by eye only.

## 2. axe-core: 54 runs (9 screens × 3 themes × 390 and 1280 widths)

| Rule | Impact | Standard | Where | Selectors | Finding |
|---|---|---|---|---|---|
| `color-contrast` | serious | WCAG 1.4.3 | Paper: game, vote | `#effect-label` (4.45:1, 11 px bold, `#6b6154` on `#e7dcc5`) | F-028 |
| `page-has-heading-one` | moderate | best practice | all themes: lobby, game, vote, results | `html` (the only `<h1>` is on the hidden title screen) | F-028 |

Incomplete, reviewed by hand: `aria-prohibited-attr` on `.brand`, `.mode-row`, `.height-chip` (`aria-label` on elements with no role; the label "Blocks placed" may be ignored) (F-028).

No violations on the title, how-to, how-to guide or join dialog in any theme.

## 3. Contrast from computed styles

Method: every visible element with its own text; foreground composited over the nearest opaque ancestor background, ancestor opacity applied; 4.5:1, or 3:1 for large text.

| Theme | Enabled-text failures | Detail |
|---|---|---|
| Paper | 1 | `#effect-label` 4.46:1 (same as axe) |
| Sunset Stack '94 | 0 | |
| Prime Time | 0 | |

- Disabled Start round button: 2.48:1 (Sunset), 3.14:1 (Prime Time), 4.38:1 (Paper). Exempt, but in Sunset the disabled state is hard to read at all.
- Grain and scanlines (`body::after`): Paper 5% multiply, Sunset 26% opacity scanlines, Prime Time none. Pixel-measured text contrast with and without the overlay: Paper 5.21 vs 5.21, Sunset 11.79 vs 11.49, Prime Time 11.26 vs 11.26. **No measurable harm.**
- Effect and vote cards: pass in all themes apart from `#effect-label`.
- Small type is the real legibility issue, not contrast (F-022): Paper has 9, 10 and 11 px text on phones (vote names 11 px, vote help and vote state 10 px); Sunset sets `Press Start 2P` at 11 px; Prime Time has 10 px labels.

## 4. Targets and gestures

- **Target size: pass.** No interactive element under 44×44 CSS px on any screen, theme or viewport (and so none under 24). Drop button 130-160 × 48-54.
- **Viewport meta:** `width=device-width, initial-scale=1, viewport-fit=cover`. Zoom is not disabled.
- **`touch-action: none`** on `button, [role="button"]`, the play card and the canvas (`sabotage-stack.html:56-58, 182, 185`). Measured with raw touch events at 390×844: drag from the header scrolls 225 px; drag from the canvas, the Drop button or the help text beside it scrolls 0. The play card fills y=150-735, so only the top and bottom strips can start a scroll, and the vote card is below the fold (F-004).
- **Pinch zoom:** not verified by gesture (synthetic pinch did not register in headless Chromium). By CSS, a pinch that starts on a button or the stage is blocked; elsewhere it is allowed.
- **Pointer cancellation (2.5.2):** Drop fires on the down event. For a timing game that is essential; noted, not failed.

## 5. Focus and dialogs

- Focus ring: 3 px solid, 3 px offset, on buttons, `[tabindex="0"]` and `summary`. Paper vermilion `#D5472F` on cream `#F4EDDF` is 3.78:1 (hand-computed; the script's own ratio for Paper was unreliable and is not used). Sunset amber 14.2:1, Prime Time amber 8.8-12.5:1. `#theme-select` keeps the browser default ring.
- `<dialog>` + `showModal()`: focus moves in (close button for how-to, code field for join), the page behind is inert, Escape closes, focus returns to the opener. The how-to dialog also closes on backdrop click.
- Tab order is logical on every screen. During play: theme, sound, DEV lab, Menu, canvas, Drop, then vote options once enabled.
- Results: solo moves focus to Play again. Multiplayer results leave focus on `<body>` (appendix A-02).
- **Defects:** digit keys are ignored while any button or the canvas is focused, which is always the case after Play solo or a click on the stage (F-003). Space always drops, so it cannot activate a focused vote option or Menu during play (F-012).

## 6. Screen-reader live play

Regions: `#canvas-toast` (status, polite), `#multiplayer-player-list` (polite), `#room-player-list` (polite, on the hidden lobby), `#room-lobby-status`, `#multiplayer-status`, `#join-status`, `#sound-status`, `#dev-feedback`. `#perfect-banner` and `#chat-flavor-pop` are `aria-hidden`.

| Event | Offered to assistive tech | Verdict |
|---|---|---|
| vote opens | nothing | missing |
| the three options | button labels update ("Vote for Peekaboo, 1 votes"), not announced | missing |
| vote result / effect starts | toast: the effect's name only | partial: no description, no duration |
| effect ends | nothing ("Sabotage over. For now." is never rendered, `html:3015, 3815`) | missing |
| perfect drop | toast "PERFECT! +1 CLEAN DROP", **once**: identical text is not re-set, so later perfects are silent (`html:3460`) | partial |
| normal landing, height | nothing | acceptable |
| turn change (Teamwork) | the whole player list is rewritten: 56 updates in about 90 s | noisy and indirect |
| standings (Competitive) | the whole list: 108 updates in 75 s | flood |
| turn timer, auto-drop warning | nothing | missing |
| round ends | toast "NO OVERLAP · TOWER COLLAPSED"; results heading not focused in multiplayer | partial |

Judgement on `#canvas-toast`: the right pattern, used for too little, and it suppresses repeats. Judgement on the list regions: live regions on whole lists are the wrong tool for a value that changes every second (F-011).

There is no non-visual way to play: sound is off by default and no cue encodes the mover's position (appendix A-04).

## 7. Colour-only information

- Players: colour dot **and** name everywhere in the DOM; names above stacks on the host board. In the shared Teamwork tower, who placed which block is colour only (low stakes).
- Player colours 2 and 4 (teal `#2F8478`, vermilion `#D5472F`) have almost the same luminance (about 1.0:1): a likely confusion pair for red-green colour-blind players wherever the name is not adjacent.
- Effect categories: icon plus a small coloured dot; the category is never needed for a decision.
- Perfect: star glyph and text. Leading vote option: bar and number. Neither is colour only.
- Not verified with a colour-vision simulator.

## 8. Reflow, zoom and orientation (F-001)

| Viewport (emulates) | Horizontal scroll | Canvas size | Drop in view |
|---|---|---|---|
| 1280×800 (laptop, 100%) | no | 405×586, bottom 25 px past the fold | **no** (y=839) |
| 640×400 (200% zoom) | no | **84×122** | yes |
| 320×480 | no | 146×212 | yes |
| 320×256 (400% zoom, WCAG reference) | **yes** (341 px) on the game screen | **0×1** | scrolled away |
| 844×390 (phone landscape) | no | 164×238 | yes |
| 667×375 (small phone landscape) | no | **67×97** | yes; help text wraps one word per line |
| 390×844 → 844×390 mid-game | no | 164×238, now below the fold | no |

Title, how-to and results reflow without horizontal scroll at every size tested (the join dialog was checked only at the four matrix viewports), and the how-to dialog scrolls internally with its close button in view.

## 9. Photosensitivity

Method: the game canvas sampled every frame (60 fps) for 3.2 s per effect at 72×104, relative luminance per cell; a "change" is ΔL ≥ 0.1 with the darker state below 0.8 (WCAG 2.3.1 general flash). Area threshold: 21,824 CSS px², which is 12.6% of the displayed canvas. Six-frame PNG sequences for the optical and trajectory effects are saved as `screenshots/seq-*`.

| Effect | Largest changed area | Flashes/s at threshold area | Local change pairs/s (≥1% area) | Note |
|---|---|---|---|---|
| Earthquake | 7.9% | 0 | 19 | edges of every block move ±8 px at about 7-11 Hz; the whole scene moves on 99% of frames |
| Pisa Tilt | 2.6% | 0 | 12 | slow 16° sway; whole scene moves |
| Peekaboo | 1.7% | 0 | 3 | the mover blinks; an unintended 40 ms re-appearance adds a blink (F-025) |
| Spotlight | 0.1% while running | 0 | 0 | one large dark step at start and one at end |
| all others | ≤ 0.7% | 0 | 0 | |

**No effect exceeds three flashes per second over a hazardous area.** Earthquake and Pisa are vestibular concerns rather than flash concerns, and only the OS reduced-motion setting removes them (F-017).

Reduced motion re-run: Rollercoaster, Pisa, Earthquake, Peekaboo and Accordion are static. Still moving: the mover itself under Turbo, Drunk Block, Slow-to-Dart (×2.5 lunges), Gravity Slingshot, Portal Walls (edge wrap), The Shell Game (second mover), plus the Zoom and Spotlight view changes. All are small-object motion or a held state; none shakes or rotates the scene. No running CSS animations in either mode.

## 10. Sound

- Off by default; toggle has `aria-pressed`, a spoken status, and a 48-119 × 44 px target.
- Eight cues (`run.start`, `block.land`, `block.perfect`, `vote.open`, `sabotage.pick`, `block.miss`, `music.bed`, `run.result`). Each has a visual counterpart, so nothing is audio-only. The reverse gap: with sound off, "vote opens" has only a small visual cue (see lens-game-feel).
- The setting is not persisted: after a reload it is off again (F-027).
- Output was not listened to.

## 11. WCAG summary

| Criterion | Status | Evidence |
|---|---|---|
| 1.4.3 Contrast | 1 miss | §2, §3 |
| 1.4.4 Resize text / 1.4.10 Reflow | **fail on the game screen** | §8, F-001 |
| 1.4.11 Non-text contrast (focus ring) | pass | §5 |
| 2.1.1 Keyboard | operable, with defects | F-003, F-012 |
| 2.1.2 No keyboard trap | pass | §5 |
| 2.2.1 Timing adjustable | **not met** unless the timers are argued essential | F-002 |
| 2.3.1 Three flashes | pass by measurement | §9 |
| 2.4.3 / 2.4.7 Focus order / visible | pass | §5 |
| 2.5.8 Target size (2.2) | pass | §4 |
| 3.3.1 Error identification | pass | join errors are inline text |
| 4.1.2 Name, role, value | minor gaps | no selected state on vote options; labels on role-less divs |
| 4.1.3 Status messages | partial | §6, F-011 |
| 1.4.12 Text spacing, 2.4.11 Focus not obscured | not tested | |

## 12. impeccable `audit` and `critique`

> ⚠️ DEGRADED: single-context. `critique` requires its detector binary and isolated sub-agents; the audit rules forbid running the former and this session has no sub-agents. Assessment A (design review) was done inline; Assessment B used this audit's own Playwright evidence instead of `impeccable detect`.

Its anti-pattern rules target generic AI-looking interfaces. None of the three themes reads that way: each has its own type, palette and ornament and was judged against its own intent.

Audit dimensions (0-4, my scoring):

| Dimension | Score | Key finding |
|---|---|---|
| Accessibility | 2 | strong basics; reflow, timing and status-message gaps |
| Performance | 4 | steady 16.7 ms frames under 4× throttle; no layout work in the loop observed |
| Theming | 4 | three complete token-driven themes, applied before first paint, canvas included |
| Responsive design | 1 | stage sized from height with no floor; vote below the fold; scroll blocked by `touch-action` |
| Implementation integrity | 3 | does what the code says; exceptions F-003, F-005 and copy drift |
| **Total** | **14 / 20** | |

Nielsen heuristics (0-4): status visibility 2 · match to the real world 3 · user control and freedom **1** (cannot leave a live room, no pause, no vote undo for the host) · consistency 2 · error prevention 3 · recognition over recall 2 (options unexplained) · flexibility **1** (no settings at all) · minimalist design 3 · error recovery 3 · help 3 (solo only). **23 / 40.**

`game-accessibility` checklist: settings menu **none** · colour-blind mode none · remapping none · difficulty or assist options none · font size option none · high-contrast mode none · motion reduction: OS setting only · screen reader: partial labels, weak live output.
