import { skillGroups, SKILL_ICONS } from "../../constants/skillsData.jsx";
import "./SkillCardsMarquee.css";

function Card({ group }) {
  return (
    <article className="skill-cards-marquee__card">
      <h3 className="skill-cards-marquee__category">{group.category}</h3>
      <ul className="skill-cards-marquee__list">
        {group.skills.map((skill) => (
          <li key={skill} className="skill-cards-marquee__tag">
            {SKILL_ICONS[skill] ? (
              <span className="skill-cards-marquee__tag-icon" aria-hidden="true">
                {SKILL_ICONS[skill]}
              </span>
            ) : null}
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Sequence({ suffix }) {
  return (
    <div className="skill-cards-marquee__sequence">
      {skillGroups.map((group) => (
        <Card key={`${group.category}-${suffix}`} group={group} />
      ))}
    </div>
  );
}

/** Horizontal infinite marquee of compact category cards. */
function SkillCardsMarquee() {
  return (
    <div className="skill-cards-marquee" aria-hidden="true">
      <div className="skill-cards-marquee__viewport">
        <div className="skill-cards-marquee__track">
          <Sequence suffix="a" />
          <Sequence suffix="b" />
        </div>
      </div>
    </div>
  );
}

export default SkillCardsMarquee;
