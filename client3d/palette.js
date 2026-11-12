// Visual identity of the three 3D worlds. Colours that the game logic owns (block colours) are mapped exactly like the
// 2D client does at draw time (SUNSET_COLOR_MAP / PRIMETIME_COLOR_MAP in sabotage-stack.html; a unit test keeps them in sync).

export const THEMES = Object.freeze(['paper', 'sunset', 'primetime']);
export const normalizeTheme = name => (THEMES.includes(name) ? name : 'paper');

export const BLOCK_COLOR_MAPS = Object.freeze({
  paper: Object.freeze({}),
  sunset: Object.freeze({
    '#E3A33B': '#FFC53D', '#2F8478': '#2EC4B6', '#7FA6BD': '#9B5DE5',
    '#D5472F': '#FF5964', '#7A6AA6': '#B983FF', '#C96F8A': '#FF8FAB'
  }),
  primetime: Object.freeze({
    '#E3A33B': '#FFC83D', '#2F8478': '#35D0E8', '#7FA6BD': '#F2F5FF',
    '#D5472F': '#E5322D', '#7A6AA6': '#9B8CFF', '#C96F8A': '#FF7FA8'
  })
});

export function themedBlockColor(theme, color) {
  const map = BLOCK_COLOR_MAPS[theme];
  if (!map || typeof color !== 'string') return color || '#2F8478';
  return map[color.toUpperCase()] || color;
}

// The three options on a ballot are always teal / dusty blue / vermilion in the DOM; the crowd raises the same colours.
export const BALLOT_COLORS = Object.freeze({
  paper: ['#2F8478', '#7FA6BD', '#D5472F'],
  sunset: ['#2EC4B6', '#9B5DE5', '#FF5964'],
  primetime: ['#35D0E8', '#F2F5FF', '#E5322D']
});

export const PALETTES = Object.freeze({
  paper: Object.freeze({
    name: 'paper', label: 'The Paper Theatre',
    ink: '#2A2520', paper: '#F4EDDF', cream: '#F7F0E2', amber: '#E3A33B', teal: '#2F8478', blue: '#7FA6BD', vermilion: '#D5472F', violet: '#7A6AA6', rose: '#C96F8A',
    // sky: horizon -> mid -> zenith, then the altitude journey (day -> golden hour -> dusk -> night)
    skyHorizon: '#FFD8A6', skyMid: '#F6E7CC', skyZenith: '#8FC9CC',
    journey: ['#F4EDDF', '#F6D9AE', '#7FA6BD', '#243047'],
    fog: '#F4EDDF', fogDensity: 0.00032,
    floor: '#9CC4B2', floorLine: '#F4EDDF', plinth: '#F2E8D3', plinthRim: '#E3A33B',
    hills: ['#E9D8B8', '#C9D8C4', '#9FC0B3', '#7FA6BD', '#5E8EA0'],
    key: '#FFE4BC', fill: '#CFE3EA', ground: '#E7D2B0', rim: '#A5D6D8',
    exposure: 0.98, bloom: 0.1, bloomThreshold: 1.15, bloomRadius: 0.4, sat: 1.18, contrast: 1.08,
    grain: 0.03, vignette: 0.24, tilt: 0.5, aberration: 0.0009,
    toneMapping: 'neutral', fontKey: 'paper'
  }),
  sunset: Object.freeze({
    name: 'sunset', label: 'Sunset Stack ’94',
    ink: '#170B33', paper: '#2B1155', cream: '#FFF3E2', amber: '#FFC53D', teal: '#2EC4B6', blue: '#9B5DE5', vermilion: '#FF5964', violet: '#B983FF', rose: '#FF8FAB',
    skyHorizon: '#FF7A3D', skyMid: '#8E1D6B', skyZenith: '#120826',
    journey: ['#FF6B35', '#C1266B', '#4A1A8C', '#0B0620'],
    fog: '#3A1166', fogDensity: 0.00042,
    floor: '#1A0B3A', floorLine: '#FF4FD8', plinth: '#2B1155', plinthRim: '#FFC53D',
    hills: ['#3A1166', '#2B0F57', '#220C48', '#190838', '#120528'],
    key: '#FFB27A', fill: '#7A3CFF', ground: '#FF4FD8', rim: '#2EC4B6',
    exposure: 1.0, bloom: 0.5, bloomThreshold: 1.0, bloomRadius: 0.6, sat: 1.12, contrast: 1.06,
    grain: 0.02, vignette: 0.42, tilt: 0.0, aberration: 0.0016,
    toneMapping: 'aces', fontKey: 'sunset', pixel: 3, levels: 14
  }),
  primetime: Object.freeze({
    name: 'primetime', label: 'Prime Time',
    ink: '#061238', paper: '#0A1A55', cream: '#FFFFFF', amber: '#FFC83D', teal: '#35D0E8', blue: '#F2F5FF', vermilion: '#E5322D', violet: '#9B8CFF', rose: '#FF7FA8',
    skyHorizon: '#2447C9', skyMid: '#1B3CAA', skyZenith: '#06113A',
    journey: ['#1B3CAA', '#16318F', '#0A1A55', '#030818'],
    fog: '#0A1A55', fogDensity: 0.00036,
    floor: '#050C26', floorLine: '#FFC83D', plinth: '#0B1B5C', plinthRim: '#FFC83D',
    hills: ['#14297F', '#10236D', '#0B1B5C', '#08154A', '#050E36'],
    key: '#FFF1CF', fill: '#4F7BFF', ground: '#1B3CAA', rim: '#FFC83D',
    exposure: 0.96, bloom: 0.38, bloomThreshold: 1.05, bloomRadius: 0.5, sat: 1.12, contrast: 1.1,
    grain: 0.03, vignette: 0.36, tilt: 0.15, aberration: 0.0012,
    toneMapping: 'aces', fontKey: 'primetime'
  })
});

export const paletteFor = theme => PALETTES[normalizeTheme(theme)];
