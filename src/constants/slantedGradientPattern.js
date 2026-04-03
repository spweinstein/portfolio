/**
 * Slanted stacked bands (full-artboard gradient). Native viewBox 1600×800.
 * For ParallaxBg, set `bg` to match `slantedGradientBase` (or a band edge) if the layer overscrolls.
 */

/** Base rect behind the bands */
export const slantedGradientBase = "#000000";

/** Band fills, top → bottom (same order as POLYGON_POINTS) */
export const slantedGradientBand1 = "#220000";
export const slantedGradientBand2 = "#440000";
export const slantedGradientBand3 = "#660000";
export const slantedGradientBand4 = "#880000";
export const slantedGradientBand5 = "#aa0000";

/** `fill-opacity` on the polygon group */
export const slantedGradientGroupOpacity = 1;

const slantedGradientBands = [
  slantedGradientBand1,
  slantedGradientBand2,
  slantedGradientBand3,
  slantedGradientBand4,
  slantedGradientBand5,
];

const VIEW_W = 1600;
const VIEW_H = 800;

/** Polygon `points` strings, same order as slantedGradientBands */
const POLYGON_POINTS = [
  "1600 160 0 460 0 350 1600 50",
  "1600 260 0 560 0 450 1600 150",
  "1600 360 0 660 0 550 1600 250",
  "1600 460 0 760 0 650 1600 350",
  "1600 800 0 800 0 750 1600 450",
];

function buildSlantedGradientPattern() {
  if (slantedGradientBands.length !== POLYGON_POINTS.length) {
    throw new Error(
      "slantedGradient: bands and POLYGON_POINTS length mismatch",
    );
  }
  const polys = POLYGON_POINTS.map(
    (points, i) =>
      `<polygon fill="${slantedGradientBands[i]}" points="${points}"/>`,
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}"><rect fill="${slantedGradientBase}" width="${VIEW_W}" height="${VIEW_H}"/><g fill-opacity="${slantedGradientGroupOpacity}">${polys}</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const slantedGradientPattern = buildSlantedGradientPattern();
