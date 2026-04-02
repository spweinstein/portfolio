// eslint-disable-next-line no-unused-vars -- accessed as motion.div, motion.p, etc.
import { motion } from "framer-motion";
import SocialActions from "../SocialActions/SocialActions.jsx";
import ParallaxBg from "../ParallaxBg.jsx";
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
  "Data + ML Background",
  "Open to Full-Stack Roles",
];

const aboutBullets = [
  "Decomposes complex, real-world processes into durable backend logic and clean interfaces.",
  "Drawn to workflow-heavy tools, internal systems, and products where good data modeling matters.",
  "Information Science at Cornell — applies a systems-thinking lens to every feature shipped.",
  "Seeking a team that values product clarity as much as technical rigor.",
];

function Hero() {
  return (
    <section className="hero" id="top" data-theme="dark">
      <ParallaxBg bg="black" pattern={PATTERNS.circuitBoard} strength={0.3} />

      <div className="hero__inner">
        <motion.div
          className="hero__left"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="hero__eyebrow" variants={fade(0)}>
            Full-Stack Developer · Data &amp; ML Background
          </motion.p>

          <motion.h1 className="hero__headline" variants={fade(0.05)}>
            Spencer Weinstein
          </motion.h1>

          <motion.p className="hero__subheadline" variants={fade(0.1)}>
            Full-stack engineer with roots in data analysis and machine
            learning, focused on products where structure actually matters.
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
        </motion.div>

        <motion.div
          className="hero__right"
          id="about"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="hero__about-eyebrow" variants={fade(0.05)}>
            About Me
          </motion.p>
          <motion.p className="hero__about-lead" variants={fade(0.1)}>
            I&apos;m drawn to software that supports real workflows — not toy
            demos, but tools people actually rely on.
          </motion.p>
          <motion.ul className="hero__bullets" variants={fade(0.18)}>
            {aboutBullets.map((b) => (
              <li key={b} className="hero__bullet">
                {b}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fade(0.28)}>
            <a href="#projects" className="hero__cta-btn">
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
