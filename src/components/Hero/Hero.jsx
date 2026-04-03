// eslint-disable-next-line no-unused-vars -- accessed as motion.div, motion.p, etc.
import { motion } from "framer-motion";
import SocialActions from "../SocialActions/SocialActions.jsx";
import ParallaxBg from "../ParallaxBg.jsx";
import SkillsMarquee from "../SkillsMarquee/SkillsMarquee.jsx";
import SkillCardsMarquee from "../SkillCardsMarquee/SkillCardsMarquee.jsx";
import { PATTERNS } from "../../constants/parallaxPatterns.js";
import "./Hero.css";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const fade = (delay = 0) => ({
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const chips = [
  "Based in Stamford, CT",
  "Cornell Information Science",
  "Searching for Roles in Full-Stack Development",
  "Open to Project-Based Opportunities",
];

const aboutBullets = [
  "Drawn to messy, real-world problems that need structure, not just flashy interfaces",
  "Combines analytical thinking with a strong technical foundation",
  "Designs durable data models and writes scalable code patterns",
];

function Hero() {
  return (
    <section
      className="hero"
      id="top"
      data-theme="dark"
      aria-label="Profile and tech stack"
    >
      <ParallaxBg
        bg="#0a1628"
        pattern={PATTERNS.constellation}
        strength={0.5}
      />

      <div className="hero__inner">
        <div className="hero__columns">
          <motion.div
            className="hero__left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="hero__eyebrow" variants={fade(0)}>
              Full-Stack Developer · Data Analyst · UX/UI · Machine Learning
            </motion.p>

            <motion.h2 className="hero__headline" variants={fade(0.05)}>
              Spencer Weinstein
            </motion.h2>

            <motion.p className="hero__subheadline" variants={fade(0.1)}>
              Full-stack developer building end-to-end web applications with a
              strong emphasis on data modeling, scalable patterns, and polished
              user experiences. I prioritize clean code and efficient workflows.
              <br></br>
            </motion.p>

            <motion.div className="hero__actions" variants={fade(0.15)}>
              <SocialActions />
            </motion.div>

            <motion.ul className="hero__chips" variants={fade(0.23)}>
              {chips.map((c) => (
                <li key={c} className="hero__chip">
                  {c}
                </li>
              ))}
            </motion.ul>
            <motion.div className="hero__cta-wrap" variants={fade(0.28)}>
              <a href="#projects" className="hero__cta-btn">
                View My Work
              </a>
            </motion.div>
          </motion.div>

          <div className="hero__rightCol">
            <motion.div
              className="hero__right"
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.p className="hero__about-eyebrow" variants={fade(0.05)}>
                About Me
              </motion.p>
              <motion.p className="hero__about-lead" variants={fade(0.1)}>
                I turn complex real world workflows into reliable software.
              </motion.p>
              <motion.ul className="hero__bullets" variants={fade(0.18)}>
                {aboutBullets.map((b) => (
                  <li key={b} className="hero__bullet">
                    {b}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="hero__stack"
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              <div className="hero__stack-panel">
                <motion.div className="hero__stack-text" variants={fade(0)}>
                  <span className="hero__stack-eyebrow">Stack</span>
                  <h2 className="hero__stack-title">Tech Stack &amp; Skills</h2>
                </motion.div>
                <SkillsMarquee variant="section" />
                <SkillCardsMarquee />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
