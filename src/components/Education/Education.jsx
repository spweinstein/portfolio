import {
  RevealSection,
  StaggerContainer,
  StaggerChild,
} from "../RevealSection.jsx";
import ParallaxBg from "../ParallaxBg.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import "./Education.css";

const education = [
  {
    degree: "Software Engineering Immersive",
    school: "General Assembly",
    period: "2026",
    note: "480+ hours of project work covering full-stack development, professional training, and mentorship.",
  },
  {
    degree: "Master of Professional Studies in Information Sciences",
    school: "Cornell University",
    period: "Class of 2021",
    note: "Graduate studies in information science, bridging applied data systems and research methodology.",
  },
  {
    degree: "Bachelor of Arts in Information Sciences",
    school: "Cornell University",
    period: "Class of 2019",
    note: "Coursework in data analysis, machine learning, UX research, and information systems design.",
  },
];

function Education() {
  return (
    <RevealSection className="education" id="education" theme="light">
      <ParallaxBg
        bg="var(--bg-surface)"
        pattern={PATTERNS.circuitBoard}
        strength={0.15}
      />
      <div className="education__inner">
        <span className="education__eyebrow">Education</span>
        <h2 className="section-title">Where I Studied</h2>

        <StaggerContainer className="education__list">
          {education.map((e) => (
            <StaggerChild key={e.degree + e.school} className="education__card">
              <div className="education__header">
                <h3 className="education__degree">{e.degree}</h3>
                <span className="education__period">{e.period}</span>
              </div>
              <p className="education__school">{e.school}</p>
              {e.note && <p className="education__note">{e.note}</p>}
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </RevealSection>
  );
}

export default Education;
