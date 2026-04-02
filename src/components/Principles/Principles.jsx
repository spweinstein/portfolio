import {
  RevealSection,
  StaggerContainer,
  StaggerChild,
} from "../RevealSection.jsx";
import ParallaxBg from "../ParallaxBg.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import { skyColor } from "../../constants/mountains.js";
import "./Principles.css";

const principles = [
  {
    icon: "⚙",
    title: "Systems-First",
    body: "I think in data models, state machines, and durable backend logic before reaching for UI polish.",
  },
  {
    icon: "🔄",
    title: "Workflow-Oriented",
    body: "The products I like best involve lots of moving parts — scheduling, tracking, managing real processes.",
  },
  {
    icon: "✦",
    title: "Clarity Over Cleverness",
    body: "Good software makes complex things feel simple. I optimize for readability and maintainability.",
  },
];

function Principles() {
  return (
    <RevealSection className="principles" id="principles" theme="light">
      <ParallaxBg
        bg={skyColor}
        pattern={PATTERNS.triangleMesh}
        strength={0.3}
      />
      <div className="principles__inner">
        <p className="principles__eyebrow">How I Work</p>
        <StaggerContainer className="principles__cards">
          {principles.map((p) => (
            <StaggerChild key={p.title} className="principles__card">
              <div className="principles__icon-wrap" aria-hidden="true">
                {p.icon}
              </div>
              <div className="principles__text">
                <h3 className="principles__title">{p.title}</h3>
                <p className="principles__body">{p.body}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </RevealSection>
  );
}

export default Principles;
