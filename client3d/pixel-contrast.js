// Colour contrast (WCAG 2 relative luminance), pure. The pixel-grid hovers flood a whole row with an accent colour, and the text on it
// must flip to whichever of the theme's light / dark text reads better. Rows with a fixed accent get their pair in the page's CSS (the test
// recomputes it from here); rows whose colour is a player's are decided at hover time by readableOn().

// '#rgb', '#rrggbb', 'rgb(r, g, b)', 'rgba(r, g, b, a)' or 'rgb(r g b / a)' -> [r, g, b] (0..255) or null
export function parseColor(input) {
  if (Array.isArray(input)) return input.length >= 3 ? input.slice(0, 3).map(Number) : null;
  const s = String(input == null ? '' : input).trim();
  let m = /^#([\da-f]{3})$/i.exec(s);
  if (m) return m[1].split('').map(c => parseInt(c + c, 16));
  m = /^#([\da-f]{6})(?:[\da-f]{2})?$/i.exec(s);
  if (m) return [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16));
  m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(s);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return null;
}

export function luminance(color) {
  const rgb = parseColor(color); if (!rgb) return 0;
  const [r, g, b] = rgb.map(v => { const c = Math.min(255, Math.max(0, v)) / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a, b) {
  const hi = Math.max(luminance(a), luminance(b)); const lo = Math.min(luminance(a), luminance(b));
  return (hi + 0.05) / (lo + 0.05);
}

export const AA = 4.5;

// The light and dark text of each theme (the page's tokens: --paper / --ink in Paper, --ink / --night in the two dark themes, where the roles
// swap). A flooded row takes whichever reads better on its colour; test/pixel-ui.test.js keeps this table and the page's CSS in step.
export const TEXT_COLORS = Object.freeze({
  paper: Object.freeze({ light: '#F4EDDF', dark: '#2A2520' }),
  sunset: Object.freeze({ light: '#FFF3E2', dark: '#170B33' }),
  primetime: Object.freeze({ light: '#FFFFFF', dark: '#0A1A55' })
});

// The text colour to put on `bg`: the theme's light or its dark, whichever contrasts more. If neither reaches AA (a mid-tone accent),
// plain black or white does: one of them always clears 4.5.
export function readableOn(bg, light, dark) {
  const best = contrastRatio(bg, light) >= contrastRatio(bg, dark) ? light : dark;
  if (contrastRatio(bg, best) >= AA) return best;
  return contrastRatio(bg, '#000000') >= contrastRatio(bg, '#FFFFFF') ? '#000000' : '#FFFFFF';
}
