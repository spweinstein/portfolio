import { motion } from "framer-motion";

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sectionVariants = {
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerChildVariants = {
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function RevealSection({
  children,
  className,
  id,
  as = "section",
  theme,
}) {
  const Tag = as === "footer" ? motion.footer : motion.section;
  return (
    <Tag
      className={className}
      id={id}
      data-theme={theme}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
      variants={sectionVariants}
    >
      {children}
    </Tag>
  );
}

export function StaggerContainer({ children, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className, as = "div" }) {
  const Tag = as === "ul" ? motion.ul : as === "li" ? motion.li : motion.div;
  return (
    <Tag className={className} variants={staggerChildVariants}>
      {children}
    </Tag>
  );
}
