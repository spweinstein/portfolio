/**
 * Isometric “lattice” — three visible cube faces as hatched rhombi (navy line shading).
 * Colors: #001B3A on transparent. Tune stroke opacity for ParallaxBg overlays.
 */

export const latticeStroke = "#001B3A";
export const latticeStrokeOpacity = 0.28;
export const latticeEdgeStrokeWidth = 0.45;
export const latticeHatchStrokeWidth = 0.35;

const SQ3 = Math.sqrt(3);

/** Isometric cube edge length (2D projection). */
const A = 26;

/** Hex-packed repeat: two columns × two staggered rows of corner vertices. */
const TILE_W = 2 * A * SQ3;
const TILE_H = 3 * A;

function fmt(n) {
  return Number(n.toFixed(3));
}

/**
 * Three visible faces meeting at bottom vertex V = (cx, cy).
 * Top: V → L → T → R; right: V → R → Br → B; left: V → L → Bl → B (counterclockwise each).
 */
function cubeFaces(cx, cy) {
  const hx = (A * SQ3) / 2;
  const topY = cy - A;
  const L = [cx - hx, cy - A / 2];
  const R = [cx + hx, cy - A / 2];
  const T = [cx, topY];
  const Bl = [cx - hx, cy + A / 2];
  const Br = [cx + hx, cy + A / 2];
  const B = [cx, cy + A];
  const V = [cx, cy];
  return {
    top: [T, R, V, L],
    right: [R, Br, B, V],
    left: [L, V, B, Bl],
  };
}

function pointsAttr(verts) {
  return verts.map(([x, y]) => `${fmt(x)} ${fmt(y)}`).join(" ");
}

/** Unit direction of hatch lines (angle from +x, degrees). */
function hatchDirDeg(deg) {
  const r = (deg * Math.PI) / 180;
  return [Math.cos(r), Math.sin(r)];
}

/**
 * Hatch: lines parallel to direction `dirDeg`, spaced `spacing` (perpendicular distance).
 */
function hatchLines(verts, dirDeg, spacing, stroke, strokeWidth, opacity) {
  const [dx, dy] = hatchDirDeg(dirDeg);
  const nx = -dy;
  const ny = dx;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const [x, y] of verts) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  const pad = spacing * 50;
  let tMin = Infinity;
  let tMax = -Infinity;
  for (const x of [minX - pad, maxX + pad]) {
    for (const y of [minY - pad, maxY + pad]) {
      const t = x * nx + y * ny;
      tMin = Math.min(tMin, t);
      tMax = Math.max(tMax, t);
    }
  }
  const lines = [];
  for (let t = Math.floor(tMin / spacing) * spacing; t <= tMax + spacing; t += spacing) {
    const seg = linePolygonIntersection(verts, nx, ny, t, dx, dy);
    if (seg) {
      lines.push(
        `<line x1="${fmt(seg[0][0])}" y1="${fmt(seg[0][1])}" x2="${fmt(seg[1][0])}" y2="${fmt(
          seg[1][1],
        )}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" stroke-linecap="round"/>`,
      );
    }
  }
  return lines.join("");
}

function linePolygonIntersection(verts, nx, ny, t, dx, dy) {
  const pts = [];
  const n = verts.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = verts[i];
    const [x2, y2] = verts[(i + 1) % n];
    const d1 = x1 * nx + y1 * ny;
    const d2 = x2 * nx + y2 * ny;
    const denom = d2 - d1;
    if (Math.abs(denom) < 1e-12) continue;
    const u = (t - d1) / denom;
    if (u >= -1e-9 && u <= 1 + 1e-9) {
      pts.push([x1 + u * (x2 - x1), y1 + u * (y2 - y1)]);
    }
  }
  if (pts.length < 2) return null;
  pts.sort((a, b) => a[0] * dx + a[1] * dy - (b[0] * dx + b[1] * dy));
  const first = pts[0];
  const last = pts[pts.length - 1];
  if (Math.hypot(first[0] - last[0], first[1] - last[1]) < 1e-4) return null;
  return [first, last];
}

let clipId = 0;

function hatchClipped(verts, dirDeg, spacing, stroke, strokeWidth, opacity) {
  const id = `lc${clipId++}`;
  const pts = pointsAttr(verts);
  const inner = hatchLines(verts, dirDeg, spacing, stroke, strokeWidth, opacity);
  return `<clipPath id="${id}"><polygon points="${pts}"/></clipPath><g clip-path="url(#${id})">${inner}</g>`;
}

function cubeBlock(cx, cy) {
  const { top, right, left } = cubeFaces(cx, cy);
  const S = latticeStroke;
  const wo = latticeStrokeOpacity;
  const hw = latticeHatchStrokeWidth;
  const ew = latticeEdgeStrokeWidth;
  const parts = [];
  parts.push(hatchClipped(top, -32, 2.8, S, hw, wo * 0.55));
  parts.push(hatchClipped(right, 88, 2.0, S, hw, wo * 0.95));
  parts.push(hatchClipped(left, 32, 1.35, S, hw, wo * 1.1));
  for (const face of [top, right, left]) {
    parts.push(
      `<polygon points="${pointsAttr(face)}" fill="none" stroke="${S}" stroke-width="${ew}" stroke-opacity="${wo}" stroke-linejoin="round"/>`,
    );
  }
  return parts.join("");
}

function buildLatticePattern() {
  clipId = 0;
  const bodies = [];
  const x0 = (SQ3 * A) / 2;
  const y0 = A;
  const dx = SQ3 * A;
  const dy = 1.5 * A;

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      const cx = x0 + col * dx + (row % 2) * (dx / 2);
      const cy = y0 + row * dy;
      bodies.push(cubeBlock(cx, cy));
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fmt(TILE_W)} ${fmt(TILE_H)}" width="${fmt(TILE_W)}" height="${fmt(TILE_H)}"><g fill="none">${bodies.join("")}</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const latticePattern = buildLatticePattern();
