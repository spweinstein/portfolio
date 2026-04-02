/**
 * Layered mountain silhouette SVG (data URI). Native viewBox 1600×900.
 * Adjust sky and polygon fills below. For ParallaxBg, set `bg` to match `skyColor`
 * or another color if you want a different edge color when the layer overscrolls.
 */

/** Sky / base rect — dusty blue-gray twilight (lifted for readability) */
export const skyColor = "#5a6e8a";

/**
 * Fill for each mountain polygon, in SVG paint order (back → front).
 * Muted slate with a slight purple cast; distant layers lighter, nearer darker.
 * Must stay aligned with POLYGON_POINTS (same length).
 */
export const polygonFills = [
  "#5c6d86",
  "#5f6d82",
  "#5d5a6a",
  "#635c72",
  "#61586c",
  "#685c76",
  "#655a6e",
  "#6b6574",
  "#686072",
  "#6d6a80",
  "#696274",
  "#6f6a80",
];

const VIEW_W = 1600;
const VIEW_H = 900;

/** Polygon `points` strings, same order as polygonFills */
const POLYGON_POINTS = [
  "957 450 539 900 1396 900",
  "957 450 872.9 900 1396 900",
  "-60 900 398 662 816 900",
  "337 900 398 662 816 900",
  "1203 546 1552 900 876 900",
  "1203 546 1552 900 1162 900",
  "641 695 886 900 367 900",
  "587 900 641 695 886 900",
  "1710 900 1401 632 1096 900",
  "1710 900 1401 632 1365 900",
  "1210 900 971 687 725 900",
  "943 900 1210 900 971 687",
];

function buildMountainsPattern() {
  if (polygonFills.length !== POLYGON_POINTS.length) {
    throw new Error(
      "mountains: polygonFills and POLYGON_POINTS length mismatch",
    );
  }
  const polys = POLYGON_POINTS.map(
    (points, i) => `<polygon fill="${polygonFills[i]}" points="${points}"/>`,
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}"><rect fill="${skyColor}" width="${VIEW_W}" height="${VIEW_H}"/>${polys}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const mountainsPattern = buildMountainsPattern();
