import { motion } from "framer-motion";
import { RevealSection } from "../RevealSection.jsx";

const MotionUl = motion.ul;
import ParallaxBg from "../ParallaxBg.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import { useActiveIndexNearViewportCenter } from "../../hooks/useScrollReveal.js";
import "./Experience.css";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const bulletsTransition = reducedMotion
  ? { duration: 0 }
  : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] };

const experiences = [
  {
    role: "Software Engineering Fellow",
    company: "General Assembly",
    period: "2026",
    bullets: [
      "Completed 480+ hours of project work across a full-time software engineering immersive program",
      "Built and shipped 4 full-stack applications end-to-end using React, Node.js, Express, Django, and MongoDB",
      "Designed data models and REST APIs for workflow-heavy products like a job application tracker",
      "Practiced agile development, code review, and iterative product thinking in a collaborative cohort",
    ],
  },
  {
    role: "Head of Marketing & IT",
    company: "Ideal Sound Importers",
    period: "2024 – 2025",
    bullets: [
      "Designed and executed marketing campaigns that grew email and social media engagement by an average of 250% across partnered brands",
      "Built a custom JavaScript data pipeline integrating third-party marketing APIs with Google Sheets and Looker Studio; delivered automated daily KPI email summaries, saving 5+ hours/week",
      "Engineered an end-to-end sales tracking system using JavaScript, Google Sheets/Forms, and Looker Studio with a real-time dashboard and automated daily email reports",
      "Automated financial reconciliation with shipping vendors; recovered $50K+ in billing discrepancies and reclaimed 10+ hours/week",
    ],
  },
  {
    role: "Software Developer / Team Leader",
    company: "Cheddar Inc.",
    period: "2020",
    bullets: [
      "Built a high-throughput Python data pipeline to archive millions of r/WallStreetBets posts for exploratory correlation analysis against S&P 500 price and volume metrics",
      "Deployed a MongoDB database within an AWS Kubernetes cluster to provide high-availability, scalable data access for the research team",
      "Developed NLP models to filter spam (90% accuracy) and classify sentiment (85% accuracy), producing structured datasets for financial analysis",
    ],
  },
  {
    role: "Software Developer",
    company: "Navy Federal Credit Union",
    period: "2020",
    bullets: [
      "Wrote Python scripts to clean, score, and aggregate raw social media data into structured datasets for analysis",
      "Applied NLP techniques — spam filtering, sentiment analysis, and topic modelling — to quantify consumer perception at scale",
      "Produced time-series visualizations correlating specific marketing campaigns to shifts in brand engagement, supporting stakeholder decision-making",
    ],
  },
];

function Experience() {
  const [activeIndex, itemRefs] = useActiveIndexNearViewportCenter(
    experiences.length,
  );

  return (
    <RevealSection className="experience" id="experience" theme="dark">
      <ParallaxBg
        bg="#0f172a"
        pattern={PATTERNS.constellation}
        strength={0.3}
      />
      <div className="experience__inner">
        <span className="experience__eyebrow">Background</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Where I&apos;ve built, learned, and sharpened my craft.
        </p>

        <div className="experience__timeline">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            const panelId = `experience-panel-${index}`;
            return (
              <div
                key={exp.role + exp.company}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="experience__item"
                data-active={isActive ? "true" : undefined}
              >
                <div className="experience__dot" aria-hidden="true" />
                <div className="experience__card">
                  <div className="experience__header">
                    <h3 className="experience__role-heading">
                      <span className="experience__role">{exp.role}</span>
                      <span className="experience__period">{exp.period}</span>
                    </h3>
                  </div>
                  <p className="experience__company">{exp.company}</p>
                  <MotionUl
                    id={panelId}
                    className="experience__bullets"
                    initial={false}
                    animate={
                      isActive
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={bulletsTransition}
                    style={{ overflow: "hidden" }}
                    aria-hidden={!isActive}
                  >
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </MotionUl>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

export default Experience;
