/**
 * Dark isometric hex / low-poly honeycomb: faceted triangles + red “Y” edges (SVG tile).
 * Same hex period as latticePattern (2×2 staggered); seamless repeat for ParallaxBg.
 */

const SQ3 = Math.sqrt(3);
const R = 28;
const TILE_W = 2 * R * SQ3;
const TILE_H = 3 * R;

const base = "#121214";
const facetLight = "#25252b";
const facetDark = "#0c0c0e";
const red = "#ff1a1a";

/** Flat-top hex vertices from top, clockwise (SVG y down). */
function hexVertices(cx, cy) {
  const pts = [];
  for (let i = 0; i < 6; i += 1) {
    const a = (-90 + i * 60) * (Math.PI / 180);
    pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  return pts;
}

function triPoints(cx, cy, v, i, j) {
  const a = v[i % 6];
  const b = v[j % 6];
  return `${cx},${cy} ${a[0]},${a[1]} ${b[0]},${b[1]}`;
}

function fmt(n) {
  return Number(n.toFixed(4));
}

function buildRedGeometricPattern() {
  const x0 = (SQ3 * R) / 2;
  const y0 = R;
  const dx = SQ3 * R;
  const dy = 1.5 * R;

  const polys = [];
  const reds = [];

  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 2; col += 1) {
      const cx = x0 + col * dx + (row % 2) * (dx / 2);
      const cy = y0 + row * dy;
      const v = hexVertices(cx, cy);
      for (let k = 0; k < 3; k += 1) {
        const i = 2 * k;
        polys.push(
          `<polygon fill="${facetLight}" points="${triPoints(cx, cy, v, i, i + 1)}"/>`,
        );
        polys.push(
          `<polygon fill="${facetDark}" points="${triPoints(cx, cy, v, i + 1, i + 2)}"/>`,
        );
      }
      for (const idx of [0, 2, 4]) {
        const [x, y] = v[idx];
        reds.push(
          `<line x1="${fmt(cx)}" y1="${fmt(cy)}" x2="${fmt(x)}" y2="${fmt(y)}" stroke="${red}" stroke-width="1.4" stroke-linecap="round" filter="url(#rglow)"/>`,
        );
      }
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${fmt(TILE_W)}" height="${fmt(TILE_H)}" viewBox="0 0 ${fmt(TILE_W)} ${fmt(TILE_H)}"><defs><filter id="rglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="${fmt(TILE_W)}" height="${fmt(TILE_H)}" fill="${base}"/><g>${polys.join("")}</g><g opacity="0.92">${reds.join("")}</g></svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const redGeometricPattern = buildRedGeometricPattern();
