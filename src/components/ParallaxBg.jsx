import { useParallax } from "../hooks/useScrollReveal.js";

/**
 * ParallaxBg
 *
 * Renders an absolutely-positioned background layer.
 * The solid `bg` color sits on the static outer wrapper (never moves, no gaps).
 * The `pattern` overlay sits on the moving inner div — repeating backgrounds
 * tile via background-repeat, so no gaps appear at any strength value.
 *
 * Drop as the first child of any `position: relative; overflow: hidden` container.
 *
 * Props:
 *   bg        — solid background color (CSS color string or var())
 *   pattern                 — background-image value (PATTERNS.* or url(...))
 *   patternBackgroundSize   — optional; e.g. "512px 512px" for raster tiles
 *   strength  — parallax intensity; default 0.06. ~0.04 subtle, ~0.15 strong.
 */
function ParallaxBg({ bg, pattern, patternBackgroundSize, strength = 0.06 }) {
  const ref = useParallax(strength);

  return (
    <div
      data-parallax-bg
      style={bg ? { backgroundColor: bg } : {}}
      aria-hidden="true"
    >
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: `${-strength * 300}%`,
          left: 0,
          width: "100%",
          height: `${100 + strength * 600}%`,
          willChange: "transform",
          ...(pattern
            ? {
                backgroundImage: pattern,
                backgroundRepeat: "repeat",
                ...(patternBackgroundSize
                  ? { backgroundSize: patternBackgroundSize }
                  : {}),
              }
            : {}),
        }}
      />
    </div>
  );
}

export default ParallaxBg;
