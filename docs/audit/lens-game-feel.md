# Lens · game-feel-audit (+ rubric `awesome-gamedev-agent-skills/…/game-feel`)

Skills: `GameDevelopmentAudit/skills/game-feel-audit/SKILL.md` (read in full); `awesome-gamedev-agent-skills/skills/disciplines/game-feel/SKILL.md` (workflow and pattern headings read; engine code samples skipped). Canvas judgements come from stills and frame sampling; **nobody felt this game with their hands**, so anything about "weight" is a hypothesis for experiment E9.

## Core verb and budget

Drop: about 1 press per second, 60+ per minute. All feel budget belongs here.

## Feedback stack per event

| Event | Visual | Text | Sound (off by default) | Camera | Missing |
|---|---|---|---|---|---|
| normal landing | overhang falls away | none | `block.land` | none | a landing squash or dust; nothing marks "how far off" |
| perfect | star on the block, banner "PERFECT!", toast "PERFECT! +1 CLEAN DROP" | two messages at once | `block.perfect` | none | streak escalation; the two messages duplicate each other |
| miss | collapse animation with shake (`collapseShake`) | toast | `block.miss` | yes | nothing |
| vote opens | chip text "VOTE LIVE", card enables | none on the stage | `vote.open` | none | an on-stage moment: this is the game's signature beat |
| sabotage starts | per-effect visuals, toast with the name (1.45 s) | name only | `sabotage.pick` | Pisa / Earthquake / Zoom | speed effects have no look (F-019) |
| sabotage ends | visuals stop | **none** | none | none | a relief beat |
| auto-drop approaching | ring (`drawAutoDropRing`) | none | none | none | adequate |

Events under two channels with sound off (the default): vote opens, sabotage ends, normal landing.

## Camera

Follows tower height; Zoom, Pisa and Earthquake are camera-only and deterministic (`game-core.js:135-154`), with soft start and stop envelopes and no effect on landing maths. That separation is exactly what the rubric asks for ("shake moves the visual, never the simulation").

## Calibration and accessibility flags (mandatory in this lens)

- **Earthquake:** ±8 px at about 7 and 11 Hz for 5 s, whole scene moving on 99% of frames. Removed under `prefers-reduced-motion`. There is **no in-game intensity or off switch** for players who have not set the OS preference (F-017).
- **Flashes:** none at scale. Largest frame-to-frame change is 7.9% of the canvas (Earthquake); Spotlight is one dark step in and one out. Peekaboo blinks the mover about 3 times a second over 1.7% of the canvas, with an unintended 40 ms re-appearance (F-025).
- **Fresh eyes:** no evidence either way of when a new player last saw the tuning. Experiment E6.

## Latency and pacing (measured)

- Drop fires on `pointerdown`, not `click` (`html:4376-4389`); Space on `keydown` without repeat. Nothing gates input behind animation.
- Frame pacing held 16.7 ms p50 and p95 for every effect under a 4× CPU throttle; worst frame 66.7 ms (`data/frametiming.json`). Software rendering on 2 vCPUs, so treat as a lower bound on real devices, not a guarantee.
- No input buffering is needed: the next block exists the instant the last one lands.

## Repo findings

- Feel values are scattered literals (toast 1.45 s, perfect 1.25 s, flavour 1.8 s, shake amplitudes in `game-core.js:151-152`). Small today; a `FEEL` table would make tuning cheaper.
- Audio is a declarative cue sheet (`#audio-cue-sheet`): good practice. Eight cues, none for effect end.

## Prescription, ordered by feel per line of code

1. Effect-end cue: a short toast and sound (a few lines).
2. On-canvas tint or streaks for the four speed effects.
3. Perfect streak counter that escalates the star.
4. Collapse the duplicate PERFECT messages into one.
5. A motion-intensity setting (off / reduced / full) that also governs any new juice.
