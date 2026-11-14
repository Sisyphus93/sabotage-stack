// Where the pixel-grid feel is welcome. Pure (no DOM, no three.js).
//
// The menu-type screens (the home scene and how-to-play over it, the lobby, the results and the podium) get the cursor trail, the
// wordmark jitter and the like. While a round is live (the game screen, not paused) the page is for playing: only the CSS hovers apply.
// A paused round is a menu again: nothing is moving and the pointer is free to play with the page.
export const MENU_SCREENS = Object.freeze(['title', 'lobby', 'results']); // body[data-screen] besides 'game'

// SabotageStackHost.view().game: a solo round pauses with soloPaused, a multiplayer one (as the host sees it) with paused
export function isPaused(game) { return Boolean(game && (game.soloPaused || game.paused)); }

// view: what SabotageStackHost.view() reports ({ screen, game }); anything that is not the game screen is a menu
export function isMenuContext(view) {
  const screen = view && view.screen ? String(view.screen) : 'title';
  if (screen !== 'game') return true;
  return isPaused(view.game);
}
