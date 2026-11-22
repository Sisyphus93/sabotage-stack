# Sabotage Stack

Players place moving blocks onto a tower while sabotages change the challenge.

## Language

**Mover**:
The block traveling across the playfield before it is dropped onto a tower.

**Landing**:
Resolving a dropped Mover against the block below: where it comes down, whether it is perfect, what it places, and what falls off.
_Avoid_: drop (the player's action, not its result)

**Sabotage**:
A temporary change to the stacking challenge, such as altered movement, visibility, or block geometry.

**Sabotage catalogue**:
The one list of every Sabotage, with its rules, tuning numbers and wording; every other list of Sabotages is derived from it or checked against it.

**Effect**:
One activation of a Sabotage against a target (a player, or the whole stack in Teamwork), with its own lifetime.
_Avoid_: active sabotage, buff

**Decoy**:
The misleading second moving block shown during the Double sabotage; it is not the block placed on the tower.

**Room**:
A hosted multiplayer session in which players take part in Teamwork or Competitive rounds and spectators can watch.

**Abandoned Room**:
A Room whose host has disconnected, with no players in it and no connected spectators; nobody is left to come back to it.
_Avoid_: empty room, dead room

**Scene**:
A presentation of the title, lobby, active round, or results that a visitor can look around by turning and zooming the View.

**View**:
The visitor's own turn and zoom of a Scene, layered on top of the Scene's own camera; it never changes the game, and it never weakens an Effect.
_Avoid_: zoom (on its own, it is ambiguous with Macro Zoom)

**Macro Zoom**:
The Sabotage that frames only the landing zone at the top of the tower, so the Mover is out of sight whenever it travels away from it.
_Avoid_: zoom, the zoom sabotage
