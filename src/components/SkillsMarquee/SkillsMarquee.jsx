import { SKILL_ICONS, SKILLS_ORDER } from "../../constants/skillsData.jsx";
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
 * @param {{ variant?: "section" | "navbar" }} props
 */
function SkillsMarquee({ variant = "section" }) {
  return (
    <div
      className={`skills-marquee skills-marquee--${variant}`}
      aria-hidden="true"
    >
      <div className="skills-marquee__viewport">
        <div className="skills-marquee__track">
          <Sequence suffix="a" />
          <Sequence suffix="b" />
        </div>
      </div>
    </div>
  );
}

export default SkillsMarquee;
