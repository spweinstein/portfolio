import { circuitBoardPattern } from "./circuitBoardPattern.js";
import {
  lowPolyFacetBackgroundSize,
  lowPolyFacetPattern,
} from "./lowPolyFacetPattern.js";
import { latticePattern } from "./latticePattern.js";
import { mountainsPattern } from "./mountains.js";
import { slantedGradientPattern } from "./slantedGradientPattern.js";
import { triangleMeshPattern } from "./triangleMeshPattern.js";
import { redGeometricPattern } from "./redGeometricPattern.js";
import {
  cyberHexWaveBg,
  cyberHexWaveBackgroundSize,
  cyberHexWavePattern,
} from "./cyberHexWavePattern.js";
import {
  nebulaBackgroundSize,
  nebulaPattern,
} from "./nebulaPattern.js";

export {
  lowPolyFacetBackgroundSize,
  nebulaBackgroundSize,
  cyberHexWaveBg,
  cyberHexWaveBackgroundSize,
};

/**
 * Background patterns for ParallaxBg (`background-image`, usually repeating).
 * SVG tiles use data URIs; rasters live under `public/` — set `patternBackgroundSize` on ParallaxBg when needed.
 */
export const PATTERNS = {
  /**
   * waves — gentle sine curves, horizontal repeating rows.
   * Good for: hero, atmospheric / cinematic sections.
   */
  waves: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 5 60 15 Q90 25 120 15' fill='none' stroke='%2394a3b8' stroke-opacity='0.28' stroke-width='0.8'/%3E%3Cpath d='M0 35 Q30 25 60 35 Q90 45 120 35' fill='none' stroke='%2394a3b8' stroke-opacity='0.2' stroke-width='0.8'/%3E%3Cpath d='M0 55 Q30 45 60 55 Q90 65 120 55' fill='none' stroke='%2394a3b8' stroke-opacity='0.14' stroke-width='0.8'/%3E%3C/svg%3E")`,

  /**
   * topoWaves — closed contour lines (asymmetric “hills”), inset so tiles repeat cleanly.
   * Good for: hero, map / terrain atmosphere.
   */
  topoWaves: `url("data:image/svg+xml,%3Csvg%20width%3D'140'%20height%3D'140'%20viewBox%3D'0%200%20140%20140'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M48%2032%20C34%2026%2024%2040%2028%2054%20C24%2070%2038%2084%2056%2086%20C74%2090%2094%2078%2098%2058%20C102%2038%2084%2022%2062%2026%20C54%2024%2050%2028%2048%2032Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.15'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M54%2042%20C44%2038%2036%2048%2040%2058%20C38%2068%2048%2076%2058%2076%20C70%2078%2084%2070%2086%2058%20C88%2046%2078%2036%2066%2038%20C60%2038%2056%2040%2054%2042Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.18'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M60%2050%20C54%2048%2048%2054%2050%2062%20C48%2070%2056%2076%2064%2074%20C74%2074%2082%2066%2080%2056%20C78%2048%2068%2046%2060%2050Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.22'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M108%2030%20C98%2024%2088%2030%2090%2042%20C88%2052%2098%2060%20108%2058%20C120%2056%20128%2044%20124%2034%20C120%2026%20112%2026%20108%2030Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.13'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M112%2040%20C106%2036%2098%2042%20100%2050%20C98%2058%20106%2064%20114%2062%20C122%2060%20128%2052%20124%2044%20C122%2038%20116%2038%20112%2040Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.16'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M96%2078%20C88%2072%2078%2078%2080%2090%20C78%20102%2090%20112%20104%20108%20C118%20104%20124%2090%20118%2080%20C114%2072%20102%2072%2096%2078Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.14'%20stroke-width%3D'0.65'%2F%3E%3Cpath%20d%3D'M102%2086%20C96%2082%2088%2088%2090%2096%20C88%20104%2096%20110%20104%20108%20C112%20106%20118%2098%20114%2090%20C112%2084%20106%2084%20102%2086Z'%20fill%3D'none'%20stroke%3D'%2394a3b8'%20stroke-opacity%3D'0.17'%20stroke-width%3D'0.65'%2F%3E%3C%2Fsvg%3E")`,

  /**
   * circuitBoard — PCB traces + pads (Hero Patterns). Use with bg #0038c6.
   */
  circuitBoard: circuitBoardPattern,

  /**
   * mountains — layered silhouette (1600×900). Tune colors in mountains.js.
   */
  mountains: mountainsPattern,

  /**
   * triangleMesh — isometric triangle tessellation + diagonal gradient wash (540×450).
   * Good for: sections that want a faceted / low-poly atmosphere. Tune colors in triangleMeshPattern.js.
   */
  triangleMesh: triangleMeshPattern,

  /**
   * slantedGradient — stacked slanted red bands on a solid base (1600×800).
   * Tune colors in slantedGradientPattern.js.
   */
  slantedGradient: slantedGradientPattern,

  /**
   * scatter — dots of varying size at irregular positions.
   * Good for: experience, professional / understated sections.
   */
  scatter: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='9' r='1.8' fill='%2394a3b8' fill-opacity='0.35'/%3E%3Ccircle cx='58' cy='4' r='0.9' fill='%2394a3b8' fill-opacity='0.22'/%3E%3Ccircle cx='34' cy='26' r='1.4' fill='%2394a3b8' fill-opacity='0.28'/%3E%3Ccircle cx='72' cy='18' r='1.1' fill='%2394a3b8' fill-opacity='0.2'/%3E%3Ccircle cx='5' cy='47' r='1.6' fill='%2394a3b8' fill-opacity='0.3'/%3E%3Ccircle cx='48' cy='55' r='0.7' fill='%2394a3b8' fill-opacity='0.18'/%3E%3Ccircle cx='21' cy='68' r='1.3' fill='%2394a3b8' fill-opacity='0.25'/%3E%3Ccircle cx='65' cy='73' r='1.0' fill='%2394a3b8' fill-opacity='0.2'/%3E%3Ccircle cx='39' cy='42' r='0.6' fill='%2394a3b8' fill-opacity='0.15'/%3E%3C/svg%3E")`,

  /**
   * grid — fine square grid, 32px repeat.
   * Good for: skills, structured / technical sections.
   */
  grid: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='none' stroke='%2394a3b8' stroke-width='0.5' stroke-opacity='0.25'/%3E%3C/svg%3E")`,

  /**
   * particles — elongated ellipses at varied angles, like light streaks.
   * Good for: mindset / thoughtful, softly kinetic sections.
   */
  particles: `url("data:image/svg+xml,%3Csvg width='96' height='96' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='14' cy='22' rx='5' ry='1.2' fill='%2394a3b8' fill-opacity='0.25' transform='rotate(25 14 22)'/%3E%3Cellipse cx='62' cy='10' rx='4' ry='1.0' fill='%2394a3b8' fill-opacity='0.18' transform='rotate(-15 62 10)'/%3E%3Cellipse cx='80' cy='50' rx='5' ry='1.2' fill='%2394a3b8' fill-opacity='0.22' transform='rotate(50 80 50)'/%3E%3Cellipse cx='32' cy='68' rx='4' ry='1.0' fill='%2394a3b8' fill-opacity='0.28' transform='rotate(-35 32 68)'/%3E%3Cellipse cx='8' cy='80' rx='5' ry='1.2' fill='%2394a3b8' fill-opacity='0.2' transform='rotate(10 8 80)'/%3E%3Cellipse cx='50' cy='82' rx='4' ry='1.0' fill='%2394a3b8' fill-opacity='0.16' transform='rotate(-60 50 82)'/%3E%3Cellipse cx='88' cy='78' rx='3' ry='0.9' fill='%2394a3b8' fill-opacity='0.14' transform='rotate(40 88 78)'/%3E%3C/svg%3E")`,

  /**
   * constellation — dots joined by faint connecting lines.
   * Good for: projects, data/network-themed sections.
   */
  constellation: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='12' y1='15' x2='40' y2='8' stroke='%2394a3b8' stroke-opacity='0.12' stroke-width='0.5'/%3E%3Cline x1='40' y1='8' x2='72' y2='22' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='0.5'/%3E%3Cline x1='12' y1='15' x2='28' y2='52' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='0.5'/%3E%3Cline x1='72' y1='22' x2='88' y2='58' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='0.5'/%3E%3Cline x1='28' y1='52' x2='60' y2='70' stroke='%2394a3b8' stroke-opacity='0.12' stroke-width='0.5'/%3E%3Cline x1='88' y1='58' x2='60' y2='70' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='0.5'/%3E%3Cline x1='60' y1='70' x2='45' y2='92' stroke='%2394a3b8' stroke-opacity='0.1' stroke-width='0.5'/%3E%3Ccircle cx='12' cy='15' r='1.5' fill='%2394a3b8' fill-opacity='0.4'/%3E%3Ccircle cx='40' cy='8' r='1.2' fill='%2394a3b8' fill-opacity='0.32'/%3E%3Ccircle cx='72' cy='22' r='1.4' fill='%2394a3b8' fill-opacity='0.36'/%3E%3Ccircle cx='28' cy='52' r='1.1' fill='%2394a3b8' fill-opacity='0.28'/%3E%3Ccircle cx='88' cy='58' r='1.3' fill='%2394a3b8' fill-opacity='0.3'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%2394a3b8' fill-opacity='0.38'/%3E%3Ccircle cx='45' cy='92' r='1.0' fill='%2394a3b8' fill-opacity='0.25'/%3E%3C/svg%3E")`,

  /**
   * lowPolyFacet — seamless grayscale faceted / origami raster (public/patterns).
   * Pass `lowPolyFacetBackgroundSize` to ParallaxBg (see lowPolyFacetPattern.js).
   */
  lowPolyFacet: lowPolyFacetPattern,

  /**
   * lattice — isometric cube faces with navy hatching (#001B3A). Tune in latticePattern.js.
   * Good for: structured / architectural / Escher-like depth.
   */
  lattice: latticePattern,

  /**
   * redGeometric — dark hex honeycomb with faceted triangles and glowing red Y-edges (SVG).
   * Good for: high-contrast tech / isometric sections. Tune colors in redGeometricPattern.js.
   */
  redGeometric: redGeometricPattern,

  /**
   * cyberHexWave — purple→navy gradient, wavy cyan honeycomb + nodes + particles (SVG).
   * Optional: `cyberHexWaveBackgroundSize` on ParallaxBg. Tune in cyberHexWavePattern.js.
   */
  cyberHexWave: cyberHexWavePattern,

  /**
   * nebula — wide cosmic gas-cloud (raster, public/patterns/nebula.jpg).
   * Pass `nebulaBackgroundSize` and a dark `bg` (see `nebulaBg` in nebulaPattern.js).
   */
  nebula: nebulaPattern,
};
