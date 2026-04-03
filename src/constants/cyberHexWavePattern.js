/**
 * Cyber hex “terrain” — wavy honeycomb mesh, cyan nodes + glow, purple→navy gradient,
 * scattered particles. Same hex period as lattice/redGeometric for seamless ParallaxBg tiles.
 * Optional: pass `cyberHexWaveBackgroundSize` if you want one gradient span (e.g. "400px 350px").
 */

const SQ3 = Math.sqrt(3);
const R = 26;
const TILE_W = 2 * R * SQ3;
const TILE_H = 3 * R;

const cyan = "#22d3ee";
const cyanBright = "#67e8f9";

/** Periodic on [0,TILE_W]×[0,TILE_H] so seams align when the pattern repeats. */
function waveOffset(x, y) {
  const wx = (2 * Math.PI * x) / TILE_W;
  const wy = (2 * Math.PI * y) / TILE_H;
  return (
    6.5 * Math.sin(wx * 2) * Math.sin(wy * 2) + 3 * Math.sin(wx * 3) * Math.cos(wy * 2)
  );
}

/** Flat-top hex vertices (degrees from center). */
function hexVertices(cx, cy) {
  const pts = [];
  for (let i = 0; i < 6; i += 1) {
    const a = (-90 + i * 60) * (Math.PI / 180);
    const x = cx + R * Math.cos(a);
    const y = cy + R * Math.sin(a);
    pts.push([x, y + waveOffset(x, y)]);
  }
  return pts;
}

function fmt(n) {
  return Number(n.toFixed(3));
}

/** Deterministic pseudo-random in [0,1) from index (stable particles across builds). */
function rand(i, seed = 17) {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function buildCyberHexWavePattern() {
  const x0 = (SQ3 * R) / 2;
  const y0 = R;
  const dx = SQ3 * R;
  const dy = 1.5 * R;

  const hexPolys = [];
  const nodes = [];
  const seen = new Set();

  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 2; col += 1) {
      const cx = x0 + col * dx + (row % 2) * (dx / 2);
      const cy = y0 + row * dy;
      const verts = hexVertices(cx, cy);
      const pts = verts.map(([x, y]) => `${fmt(x)},${fmt(y)}`).join(" ");
      hexPolys.push(
        `<polygon fill="none" stroke="${cyan}" stroke-width="0.55" points="${pts}" stroke-linejoin="round" filter="url(#cyberGlow)"/>`,
      );
      for (const [x, y] of verts) {
        const key = `${Math.round(x * 40)},${Math.round(y * 40)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        nodes.push(
          `<circle cx="${fmt(x)}" cy="${fmt(y)}" r="1.35" fill="${cyanBright}" fill-opacity="0.95" filter="url(#nodeGlow)"/>`,
        );
      }
    }
  }

  const particles = [];
  for (let i = 0; i < 22; i += 1) {
    const px = rand(i, 1) * TILE_W;
    const py = rand(i, 2) * TILE_H;
    const pr = 0.4 + rand(i, 3) * 1.8;
    const po = 0.12 + rand(i, 4) * 0.38;
    particles.push(
      `<circle cx="${fmt(px)}" cy="${fmt(py)}" r="${fmt(pr)}" fill="${cyan}" fill-opacity="${fmt(po)}" filter="url(#particleBlur)"/>`,
    );
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${fmt(TILE_W)}" height="${fmt(TILE_H)}" viewBox="0 0 ${fmt(TILE_W)} ${fmt(TILE_H)}"><defs><linearGradient id="cyberBg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#4c1d6e"/><stop offset="45%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#0a1628"/></linearGradient><filter id="cyberGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur in="SourceGraphic" stdDeviation="0.85" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="n"/><feMerge><feMergeNode in="n"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="particleBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="0.65"/></filter></defs><rect width="${fmt(TILE_W)}" height="${fmt(TILE_H)}" fill="url(#cyberBg)"/><g opacity="0.85">${particles.join("")}</g><g opacity="0.92">${hexPolys.join("")}</g><g>${nodes.join("")}</g></svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const cyberHexWavePattern = buildCyberHexWavePattern();

/** Solid underlay for ParallaxBg (matches gradient end / parallax gap). */
export const cyberHexWaveBg = "#0a1628";

/** Optional `background-size` for ParallaxBg — tile is small; enlarge for softer repeat rhythm. */
export const cyberHexWaveBackgroundSize = `${Math.round(TILE_W)}px ${Math.round(TILE_H)}px`;
