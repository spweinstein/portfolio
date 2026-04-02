import { useParallax } from "../hooks/useScrollReveal.js";

/**
 * ParallaxBg
 *
 * Renders an absolutely-positioned background layer.
 * The solid `bg` color sits on the static outer wrapper (never moves, no gaps).
 * The `pattern` overlay sits on the moving inner div — because SVG patterns
 * tile infinitely via background-repeat, no gaps appear at any strength value.
 *
 * Drop as the first child of any `position: relative; overflow: hidden` container.
 *
 * Props:
 *   bg        — solid background color (CSS color string or var())
 *   pattern   — SVG data URI overlay (use PATTERNS from parallaxPatterns.js)
 *   strength  — parallax intensity; default 0.06. ~0.04 subtle, ~0.15 strong.
 */
function ParallaxBg({ bg, pattern, strength = 0.06 }) {
  const ref = useParallax(strength);

  return (
    <div data-parallax-bg style={bg ? { backgroundColor: bg } : {}} aria-hidden="true">
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: `${-strength * 100}%`,
          left: 0,
          width: "100%",
          height: `${100 + strength * 200}%`,
          willChange: "transform",
          ...(pattern ? { backgroundImage: pattern } : {}),
        }}
      />
    </div>
  );
}

export default ParallaxBg;
