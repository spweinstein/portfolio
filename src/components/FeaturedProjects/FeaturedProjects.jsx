// eslint-disable-next-line no-unused-vars -- accessed as motion.div in SpotlightCard
import { motion } from "framer-motion";
import { useParallax } from "../../hooks/useScrollReveal.js";
import {
  RevealSection,
  StaggerContainer,
  StaggerChild,
} from "../RevealSection.jsx";
import ParallaxBg from "../ParallaxBg.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import "./FeaturedProjects.css";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const projects = [
  {
    eyebrow: "Full-Stack Workflow App",
    title: "Job Application Tracker",
    description:
      "A structured system for managing the messy, fragmented reality of a job search. Companies, applications, resumes, cover letters, and supporting materials — organized in one workflow so nothing slips through the cracks.",
    bullets: [
      "Unified dashboard for tracking applications across stages",
      "Document management for resumes and cover letters per application",
      "Designed for AI-assisted feedback and document workflows",
    ],
    tech: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OpenAI",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Job Application Tracker interface preview",
    liveUrl: "https://job-app-tracker-production.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/job-app-tracker-frontend",
    backendRepo: "https://github.com/spweinstein/job-app-tracker-backend",
  },
  {
    eyebrow: "Health & Fitness Platform",
    title: "Health is Wealth",
    description:
      "A fitness tracking app built around recurring routines: calendar-based workout logging, workout planning, and structured exercise browsing. Turns day-to-day health habits into software that stays organized over time.",
    bullets: [
      "Calendar-driven scheduling and workout logging",
      "Exercise library with filtering and planning tools",
      "Progress tracking that reinforces consistency",
    ],
    tech: ["React", "Vite", "Python", "Django", "JWT", "Netlify"],
    image: "/project-health-placeholder.svg",
    imageAlt: "Health is Wealth interface preview",
    liveUrl: "https://hw-fitness.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/hw-app-frontend",
    backendRepo: "https://github.com/spweinstein/hw-app-backend",
  },
];

function MediaPanel({ src, alt }) {
  const parallaxRef = useParallax(0.15);
  return (
    <div className="spotlight__media-wrap">
      <div className="spotlight__media-inner" ref={parallaxRef}>
        <img
          className="spotlight__media-img"
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function SpotlightCard({ project, index }) {
  const isEven = index % 2 === 0;
  return (
    <StaggerContainer
      className={`spotlight ${isEven ? "" : "spotlight--reversed"}`}
    >
      <div className="spotlight__text">
        <StaggerChild>
          <span className="spotlight__eyebrow">{project.eyebrow}</span>
        </StaggerChild>
        <StaggerChild>
          <h3 className="spotlight__title">{project.title}</h3>
        </StaggerChild>
        <StaggerChild>
          <p className="spotlight__description">{project.description}</p>
        </StaggerChild>
        <StaggerChild as="ul" className="spotlight__bullets">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </StaggerChild>
        <StaggerChild>
          <ul className="spotlight__tech">
            {project.tech.map((t) => (
              <li key={t} className="spotlight__tag">
                {t}
              </li>
            ))}
          </ul>
        </StaggerChild>
        <StaggerChild>
          <div className="spotlight__links">
            <a
              href={project.liveUrl}
              className="spotlight__link spotlight__link--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href={project.frontendRepo}
              className="spotlight__link spotlight__link--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            <a
              href={project.backendRepo}
              className="spotlight__link spotlight__link--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
          </div>
        </StaggerChild>
      </div>

      <motion.div
        className="spotlight__visual"
        variants={{
          hidden: reducedMotion
            ? { opacity: 1 }
            : { opacity: 0, x: isEven ? 40 : -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
      >
        <MediaPanel src={project.image} alt={project.imageAlt} />
      </motion.div>
    </StaggerContainer>
  );
}

function FeaturedProjects() {
  return (
    <RevealSection className="featured-projects" id="projects" theme="dark">
      <ParallaxBg
        bg="#0a1628"
        pattern={PATTERNS.constellation}
        strength={0.3}
      />
      <div className="featured-projects__inner">
        <span className="featured-projects__eyebrow">Selected Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Products I&apos;ve built to bring structure and clarity to real
          workflows — where backend logic and product thinking meet.
        </p>

        <div className="featured-projects__list">
          {projects.map((project, i) => (
            <SpotlightCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default FeaturedProjects;
