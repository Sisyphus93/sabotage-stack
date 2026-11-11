# Matrix summary
combos: 12; console entries: 0

## axe violations by rule
- page-has-heading-one [moderate] Page should contain a level-one heading (best-practice) hits=30 combos=6 screens=lobby-teamwork/lobby-competitive/game/vote/results
    targets: html×30
    themes: paper,sunset,primetime :: Fix all of the following: Page must have a level-one heading
- color-contrast [serious] Elements must meet minimum color contrast ratio thresholds (wcag2aa,wcag143) hits=4 combos=2 screens=game/vote
    targets: #effect-label×4
    themes: paper :: Fix any of the following: Element has insufficient color contrast of 4.45 (foreground color: #6b6154, background color: #e7dcc5, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of

## axe incomplete (needs manual review)
- aria-prohibited-attr: 54 nodes e.g. .brand | .mode-row | .height-chip
- color-contrast: 503 nodes e.g. #how-dialog > .dialog-inner > .dialog-header > div > .eyebrow | #how-title | #close-how | li:nth-child(1) > .step-num | li:nth-child(1) > span:nth-child(2)
axe runs: 54

## computed contrast failures (enabled text, below 4.5 or 3 for large)
### paper: 2 distinct
- 1.01:1 (need 3) div#perfect-banner "PERFECT!" 25px/700 #f4ecde on #f4eddf [aria-hidden] @effect
- 4.46:1 (need 4.5) span#effect-label "Chat's latest move" 11px/700 #6b6154 on #e7dcc5 @game/vote/effect
### sunset: 0 distinct
### primetime: 0 distinct
### disabled-control text (exempt, informational): sunset|button#room-start-button=2.48; paper|button#room-start-button=4.38; primetime|button#room-start-button=3.14

## text under 12px
- sunset|strong|11|Press Start 2P @360x640,390x844,768x1024,1280x800
- sunset|div#effect-name|11|Press Start 2P @360x640,390x844
- paper|div.status-kicker|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span.mode-pill|11|DM Sans @360x640
- paper|button#teamwork-button|11|DM Sans @360x640
- paper|span.soon|10|DM Sans @360x640,390x844,768x1024,1280x800
- paper|button#competitive-button|11|DM Sans @360x640
- paper|button#join-game-button|11|DM Sans @360x640
- paper|span|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|strong|11|DM Sans @360x640
- paper|strong#title-best-mobile|11|DM Sans @360x640
- paper|div.eyebrow|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|div#room-mode-label|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span#room-connection-status|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span.eyebrow|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|div#game-mode-kicker|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span#round-status|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|div#motion-chip|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|div#canvas-hint|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|kbd#drop-key|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|div#control-help|11|DM Sans @360x640,390x844
- paper|span.vote-name|11|DM Sans @360x640,390x844
- paper|span#vote-state-label|10|DM Sans @360x640,390x844
- paper|p.vote-help|10|DM Sans @360x640,390x844
- paper|span#best-inline|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span|9|DM Sans @360x640,390x844
- paper|span#effect-label|11|DM Sans @360x640,390x844,768x1024,1280x800
- paper|span.game-live|11|DM Sans @360x640,390x844,768x1024,1280x800
- primetime|span.soon|10|Barlow Condensed @360x640,390x844,768x1024,1280x800
- primetime|span|11|Barlow Condensed @360x640,390x844,768x1024,1280x800
min font per theme: paper=9 sunset=11 primetime=10

## targets under 44px (min w×h across combos; vps)

## touch-action by value
- auto: select#theme-select, summary, input#join-room-code, input#join-display-name
- none: button#sound-toggle, button#start-button, button#how-button, button#dev-mode-button, button#teamwork-button, button#competitive-button, button#join-game-button, button#close-how, button#close-join, button.button.button-primary, button#cancel-join, button#copy-room-link, button#room-start-button, button#room-close-button, button#dev-quick-button, button#menu-button, canvas#game-canvas, button#drop-button, button.vote-option, button#again-button, button#results-menu-button

## overflowX

## key element positions (paper)
- 360x640 game scrollH=1435: game-canvas[y147 257×372] drop-button[y528 130×48] vote-card[y594 336×390 OFFSCREEN] effect-card[y1145 336×182 OFFSCREEN] stats-card[y992 336×145 OFFSCREEN] theme-select[y-40 108×44 OFFSCREEN] sound-toggle[y-40 48×44 OFFSCREEN] menu-button[y52 63×48]
- 360x640 vote scrollH=1435: game-canvas[y147 257×372] drop-button[y528 130×48] vote-card[y594 336×390 OFFSCREEN] effect-card[y1145 336×182 OFFSCREEN] stats-card[y992 336×145 OFFSCREEN] theme-select[y-40 108×44 OFFSCREEN] sound-toggle[y-40 48×44 OFFSCREEN] menu-button[y52 63×48]
- 390x844 game scrollH=1564: game-canvas[y208 346×501] drop-button[y718 145×48] vote-card[y784 366×390 OFFSCREEN] effect-card[y1335 366×182 OFFSCREEN] stats-card[y1182 366×145 OFFSCREEN] theme-select[y21 108×44] sound-toggle[y21 48×44] menu-button[y113 63×48]
- 390x844 vote scrollH=1564: game-canvas[y208 346×501] drop-button[y718 145×48] vote-card[y784 366×390 OFFSCREEN] effect-card[y1335 366×182 OFFSCREEN] stats-card[y1182 366×145 OFFSCREEN] theme-select[y21 108×44] sound-toggle[y21 48×44] menu-button[y113 63×48]
- 768x1024 game scrollH=1100: game-canvas[y309 367×531] drop-button[y854 160×54] vote-card[y211 310×415] effect-card[y810 310×196] stats-card[y638 310×160] theme-select[y21 148×44] sound-toggle[y21 119×44] menu-button[y97 74×48]
- 768x1024 vote scrollH=1100: game-canvas[y309 367×531] drop-button[y854 160×54] vote-card[y199 310×439] effect-card[y822 310×196] stats-card[y650 310×160] theme-select[y21 148×44] sound-toggle[y21 119×44] menu-button[y97 74×48]
- 1280x800 game scrollH=1015: game-canvas[y239 405×586 OFFSCREEN] drop-button[y839 160×54 OFFSCREEN] vote-card[y168 350×415] effect-card[y767 350×196 OFFSCREEN] stats-card[y595 350×160] theme-select[y21 148×44] sound-toggle[y21 119×44] menu-button[y97 74×48]
- 1280x800 vote scrollH=1015: game-canvas[y239 405×586 OFFSCREEN] drop-button[y839 160×54 OFFSCREEN] vote-card[y168 350×415] effect-card[y767 350×196 OFFSCREEN] stats-card[y595 350×160] theme-select[y21 148×44] sound-toggle[y21 119×44] menu-button[y97 74×48]

## grain overlay
- paper: {"content":"\"\"","opacity":"0.05","blend":"multiply","image":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000","pointerEvents":"none","position":"fixed","z":"20"}
- sunset: {"content":"\"\"","opacity":"0.26","blend":"normal","image":"repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.34) 0px, rgb","pointerEvents":"none","position":"fixed","z":"20"}
- primetime: {"content":"\"\"","opacity":"0.05","blend":"multiply","image":"none","pointerEvents":"none","position":"fixed","z":"20"}

## run facts
- sunset_360x640: theme=sunset/sunset wrapped=true effect=The Accordion | chip=THE ACCORDION · 255 PX/S | time=5s left drops=24 perfect=23 pw=3 maxSpeed=255
- paper_360x640: theme=paper/paper wrapped=true effect=Portal Walls | chip=PORTAL WALLS · 245 PX/S | time=3 drops · 8s max drops=23 perfect=21 pw=3 maxSpeed=250
- primetime_360x640: theme=primetime/primetime wrapped=true effect=Turbo Mode | chip=TURBO MODE · 434 PX/S | time=5s left drops=26 perfect=23 pw=3,3.47,3.54,3.61,3.68,3.75 maxSpeed=451
- paper_390x844: theme=paper/paper wrapped=true effect=Portal Walls | chip=PORTAL WALLS · 245 PX/S | time=3 drops · 8s max drops=24 perfect=21 pw=3 maxSpeed=255
- sunset_390x844: theme=sunset/sunset wrapped=true effect=The Rollercoaster | chip=THE ROLLERCOASTER · 250 PX/S | time=5s left drops=24 perfect=22 pw=3 maxSpeed=255
- primetime_390x844: theme=primetime/primetime wrapped=true effect=Peekaboo | chip=PEEKABOO · 255 PX/S | time=5s left drops=25 perfect=22 pw=3 maxSpeed=260
- paper_768x1024: theme=paper/paper wrapped=true effect=Turbo Mode | chip=TURBO MODE · 417 PX/S | time=5s left drops=24 perfect=21 pw=3,3.4,3.47,3.54,3.61 maxSpeed=434
- sunset_768x1024: theme=sunset/sunset wrapped=true effect=The Rollercoaster | chip=THE ROLLERCOASTER · 265 PX/S | time=5s left drops=27 perfect=20 pw=3 maxSpeed=270
- primetime_768x1024: theme=primetime/primetime wrapped=true effect=The Pisa Tilt | chip=THE PISA TILT · 255 PX/S | time=5s left drops=26 perfect=21 pw=3 maxSpeed=265
- sunset_1280x800: theme=sunset/sunset wrapped=true effect=Peekaboo | chip=PEEKABOO · 265 PX/S | time=5s left drops=27 perfect=18 pw=3 maxSpeed=270
- paper_1280x800: theme=paper/paper wrapped=true effect=Earthquake | chip=EARTHQUAKE · 265 PX/S | time=5s left drops=28 perfect=20 pw=3 maxSpeed=275
- primetime_1280x800: theme=primetime/primetime wrapped=true effect=Crumble | chip=CRUMBLE · 265 PX/S | time=2 drops · 7s max drops=27 perfect=23 pw=3 maxSpeed=270

## vote text (paper 1280): {"options":"1 Spotlight 0 2 Earthquake 4 3 Crumble 3","state":"7 votes counted","countdown":"Closes in 4s","subtitle":"The block keeps moving. Pick one to cast a vote."}
effect: {"name":"Earthquake","caption":"The foundations have a few objections.","time":"5s left","chip":"EARTHQUAKE · 265 PX/S"}
results: RUN COMPLETE · SINGLE PLAYER A tower of ambition. Results FINAL HEIGHT New session best! You stacked 27 blocks before chat's interference became structural. BLOCKS STACKED 27 SESSION BEST 27 20 perfect drops 8 fallen pieces Stack fitted to 54.9% so every block stays in frame. Fallen pieces are drawn
fonts loaded per theme: paper=Fraunces/Caveat/DM Sans ; sunset=Press Start 2P/VT323 ; primetime=Alfa Slab One/Barlow Condensed/Barlow Condensed

## live regions declared: [{"id":"sound-status","live":"polite","role":"status","atomic":null},{"id":"multiplayer-status","live":"polite","role":"status","atomic":null},{"id":"room-player-list","live":"polite","role":null,"atomic":null},{"id":"room-lobby-status","live":"polite","role":"status","atomic":null},{"id":"canvas-toast","live":"polite","role":"status","atomic":null},{"id":"dev-feedback","live":"polite","role":"status","atomic":null},{"id":"multiplayer-player-list","live":"polite","role":null,"atomic":null},{"id":"join-status","live":"polite","role":"status","atomic":null}]
## live-region log, solo run (paper 1280)
- 0.6s [canvas-toast] PERFECT! +1 CLEAN DROP
- 14.4s [canvas-toast] Earthquake
- 17.1s [canvas-toast] NO OVERLAP · TOWER COLLAPSED