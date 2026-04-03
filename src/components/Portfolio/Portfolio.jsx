import ParallaxBg from "../ParallaxBg.jsx";
import { ProjectSpotlight } from "../ProjectSpotlight/ProjectSpotlight.jsx";
import { RevealSection } from "../RevealSection.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import { projects } from "../../constants/projects.js";
import "./Portfolio.css";

function Portfolio() {
  return (
    <RevealSection className="portfolio" id="projects" theme="dark">
      <ParallaxBg
        bg="#0a1628"
        pattern={PATTERNS.constellation}
        strength={0.4}
      />
      <div className="portfolio__inner">
        <span className="portfolio__eyebrow">Selected work</span>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          Case studies with multiple lenses each: product overview, technical
          shape, and domain-specific depth — swipe or use the controls to move
          between slides.
        </p>

        <div className="portfolio__list">
          {projects.map((project, i) => (
            <ProjectSpotlight key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Portfolio;
