import { useRef } from "react";
import { SKILL_ICONS, SKILLS_ORDER } from "../../constants/skillsData.jsx";
import { useMarqueeAutoScroll } from "../../hooks/useMarqueeAutoScroll";
import "./SkillsMarquee.css";

function Sequence({ suffix }) {
  return (
    <div className="skills-marquee__sequence">
      {SKILLS_ORDER.map((skill) => (
        <span key={`${skill}-${suffix}`} className="skills-marquee__item">
          {SKILL_ICONS[skill] ? (
            <span className="skills-marquee__icon">{SKILL_ICONS[skill]}</span>
          ) : null}
          <span className="skills-marquee__label">{skill}</span>
          <span className="skills-marquee__sep" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * @param {{
 *   variant?: "section" | "navbar";
 *   loopDurationSeconds?: number;
 *   pixelsPerSecond?: number;
 *   resumeDelayMs?: number;
 * }} props
 */
function SkillsMarquee({
  variant = "section",
  loopDurationSeconds: loopDurationProp,
  pixelsPerSecond,
  resumeDelayMs,
}) {
  const zoneRef = useRef(null);
  const viewportRef = useRef(null);
  const defaultLoop = variant === "navbar" ? 80 : 72;
  const loopDurationSeconds = loopDurationProp ?? defaultLoop;
  useMarqueeAutoScroll(viewportRef, {
    zoneRef,
    loopDurationSeconds,
    pixelsPerSecond,
    resumeDelayMs,
  });

  return (
    <div
      ref={zoneRef}
      className={`skills-marquee skills-marquee--${variant}`}
      aria-hidden="true"
    >
      <div ref={viewportRef} className="skills-marquee__viewport">
        <div className="skills-marquee__track">
          <Sequence suffix="a" />
          <Sequence suffix="b" />
        </div>
      </div>
    </div>
  );
}

export default SkillsMarquee;
