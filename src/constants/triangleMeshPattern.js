/**
 * Isometric triangle tessellation with gradient wash (Hero Patterns style).
 * Tile 540×450; pattern viewBox 1080×900.
 * For ParallaxBg, set `bg` to match `gradientEnd` (or another edge color) if the layer overscrolls.
 *
 * Triangle fills use eight reusable tones (white → light grays → grey-blue). `polygonFillIndices`
 * picks one of those per polygon; edit the eight mesh* exports to retheme.
 */

/** Linear gradient stops (SVG `stop-color`) — muted white into soft grey-blue */
export const gradientStart = "#f9fafb";
export const gradientEnd = "#d5dee8";

/** Opacity of the triangle layer (`fill-opacity` on the inner `<g>`) */
export const meshGroupOpacity = 0.1;

// --- Eight reusable mesh tones (light → dark), used by `meshPalette` and the gradient-adjacent look

/** Soft white — brightest facets */
export const meshWhite = "#f7f8fa";
/** Very light neutral gray */
export const meshLightGray = "#e8eaee";
/** Light gray, slightly cool */
export const meshMist = "#d4d9e1";
/** Light grey-blue */
export const meshBlueGrayLight = "#bcc6d4";
/** Mid grey-blue */
export const meshBlueGray = "#95a1b2";
/** Deeper muted slate */
export const meshSlate = "#6f7c8f";
/** Dark blue-gray */
export const meshSlateDark = "#4f5c6e";
/** Darkest anchor (muted; not pure black) */
export const meshInk = "#3a4354";

/** Index order for `polygonFillIndices`: 0 = lightest … 7 = darkest */
export const meshPalette = [
  meshWhite,
  meshLightGray,
  meshMist,
  meshBlueGrayLight,
  meshBlueGray,
  meshSlate,
  meshSlateDark,
  meshInk,
];

/**
 * Which palette slot (0–7) each triangle uses, in SVG paint order (same order as POLYGON_POINTS).
 * Original pattern had eight fills: #fff, #ddd, #aaa, #999, #666, #444, #222, #000 → mapped to 0–7.
 */
export const polygonFillIndices = [
  5, 7, 2, 1, 3, 7, 1, 5, 0, 1, 5, 1, 7, 4, 2, 1, 3, 3, 0, 7, 1, 2, 5, 6, 7, 1, 7, 7, 5, 2, 4, 3,
  3, 5, 0, 7, 6, 0, 0, 4, 6, 0, 5, 6, 2, 4, 0, 3, 7, 4, 2, 5, 5, 3, 4, 6, 0, 6, 1, 5, 0, 2, 0,
  6, 6, 0, 7, 4, 1,
];

/** Resolved fill per polygon (`meshPalette[polygonFillIndices[i]]`). */
export const polygonFills = polygonFillIndices.map((i) => meshPalette[i]);

const TILE_W = 540;
const TILE_H = 450;
const PATTERN_VB_W = 1080;
const PATTERN_VB_H = 900;

/** Polygon `points` strings, same order as polygonFills */
const POLYGON_POINTS = [
  "90 150 0 300 180 300",
  "90 150 180 0 0 0",
  "270 150 360 0 180 0",
  "450 150 360 300 540 300",
  "450 150 540 0 360 0",
  "630 150 540 300 720 300",
  "630 150 720 0 540 0",
  "810 150 720 300 900 300",
  "810 150 900 0 720 0",
  "990 150 900 300 1080 300",
  "990 150 1080 0 900 0",
  "90 450 0 600 180 600",
  "90 450 180 300 0 300",
  "270 450 180 600 360 600",
  "270 450 360 300 180 300",
  "450 450 360 600 540 600",
  "450 450 540 300 360 300",
  "630 450 540 600 720 600",
  "630 450 720 300 540 300",
  "810 450 720 600 900 600",
  "810 450 900 300 720 300",
  "990 450 900 600 1080 600",
  "990 450 1080 300 900 300",
  "90 750 0 900 180 900",
  "270 750 180 900 360 900",
  "270 750 360 600 180 600",
  "450 750 540 600 360 600",
  "630 750 540 900 720 900",
  "630 750 720 600 540 600",
  "810 750 720 900 900 900",
  "810 750 900 600 720 600",
  "990 750 900 900 1080 900",
  "180 0 90 150 270 150",
  "360 0 270 150 450 150",
  "540 0 450 150 630 150",
  "900 0 810 150 990 150",
  "0 300 -90 450 90 450",
  "0 300 90 150 -90 150",
  "180 300 90 450 270 450",
  "180 300 270 150 90 150",
  "360 300 270 450 450 450",
  "360 300 450 150 270 150",
  "540 300 450 450 630 450",
  "540 300 630 150 450 150",
  "720 300 630 450 810 450",
  "720 300 810 150 630 150",
  "900 300 810 450 990 450",
  "900 300 990 150 810 150",
  "0 600 -90 750 90 750",
  "0 600 90 450 -90 450",
  "180 600 90 750 270 750",
  "180 600 270 450 90 450",
  "360 600 270 750 450 750",
  "360 600 450 450 270 450",
  "540 600 630 450 450 450",
  "720 600 630 750 810 750",
  "900 600 810 750 990 750",
  "900 600 990 450 810 450",
  "0 900 90 750 -90 750",
  "180 900 270 750 90 750",
  "360 900 450 750 270 750",
  "540 900 630 750 450 750",
  "720 900 810 750 630 750",
  "900 900 990 750 810 750",
  "1080 300 990 450 1170 450",
  "1080 300 1170 150 990 150",
  "1080 600 990 750 1170 750",
  "1080 600 1170 450 990 450",
  "1080 900 1170 750 990 750",
];

function buildTriangleMeshPattern() {
  if (polygonFills.length !== POLYGON_POINTS.length) {
    throw new Error(
      "triangleMesh: polygonFills and POLYGON_POINTS length mismatch",
    );
  }
  const polys = POLYGON_POINTS.map(
    (points, i) => `<polygon fill="${polygonFills[i]}" points="${points}"/>`,
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE_W}" height="${TILE_H}" viewBox="0 0 ${TILE_W} ${TILE_H}"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(240)"><stop offset="0" stop-color="${gradientStart}"/><stop offset="1" stop-color="${gradientEnd}"/></linearGradient><pattern patternUnits="userSpaceOnUse" id="b" width="${TILE_W}" height="${TILE_H}" x="0" y="0" viewBox="0 0 ${PATTERN_VB_W} ${PATTERN_VB_H}"><g fill-opacity="${meshGroupOpacity}">${polys}</g></pattern></defs><rect x="0" y="0" fill="url(#a)" width="${TILE_W}" height="${TILE_H}"/><rect x="0" y="0" fill="url(#b)" width="${TILE_W}" height="${TILE_H}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const triangleMeshPattern = buildTriangleMeshPattern();
