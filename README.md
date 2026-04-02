# Portfolio Website

React + Vite personal portfolio for Spencer Weinstein.

## Homepage Redesign (Apr 2026)

A cinematic, motion-forward redesign of the single-page portfolio. The goal: make the homepage feel more premium, personal, and recruiter-friendly while staying clean and readable.

### What changed

**NavBar**
- Transparent-to-glass transition on scroll (backdrop blur + elevated state)
- Active-section indicator via IntersectionObserver
- Mobile hamburger drawer with backdrop overlay and keyboard dismiss (Escape)
- Improved hover/focus states on all nav links

**Hero — Split Layout**
- Converted from single-column to a 2-column split (≈60/40) on desktop
- Left column: personalized eyebrow, headline, subheadline, two supporting paragraphs, CTA row, and metadata chips (location, education, background, availability)
- Right column: circular headshot placeholder with layered radial glow, floating badges ("React · Node · Django", "Data-aware product builder"), and subtle float animation
- Three animated gradient orbs + faint grid overlay for cinematic depth
- All copy rewritten with specific personal context (Cornell, data/ML background, workflow-heavy product focus)

**Mindset Band**
- New compact section bridging hero → projects
- Lead sentence + 3 principle cards (Systems-First, Workflow-Oriented, Clarity Over Cleverness)
- Dark background matching the hero, with staggered scroll reveal

**Featured Projects — Spotlight Cards**
- Replaced the flat card grid with vertically stacked 2-column spotlight cards
- Alternating media left/right between projects
- Each card: eyebrow, title, storytelling description, bullet points, tech tags, CTA row, and a large media panel
- Project descriptions rewritten to emphasize workflow context and product thinking
- **Scroll-based parallax** on media panels via `requestAnimationFrame` + IntersectionObserver
- Staggered reveal of all sub-elements (eyebrow → title → description → bullets → tags → CTAs → media)

**Skills**
- Renamed heading to "What I Build With" with a "Stack" eyebrow
- Added scroll-reveal and stagger animations to grouped skill cards
- Subtle hover polish on cards and tags

**Experience (new)**
- Vertical timeline layout with dot indicators
- Card treatment for each role, showing title, company, period, and bullet points
- Scroll-reveal with staggered entry

**Education (new)**
- Compact card showing B.S. Information Science at Cornell University
- Consistent visual treatment with Experience section
- Scroll-reveal animation

**Footer**
- Added tagline below name
- Consistent social icon row and copyright
- Scroll-reveal entry

### Scroll Reveal System

Built with **framer-motion** (`motion.div` + `whileInView` + `viewport={{ once: true }}`):
- Every major section reveals with fade + slide-up on first viewport entry
- Sub-elements within sections stagger in sequentially
- Hero text eases upward; hero portrait eases from the right
- Project media slides from the opposite direction of project text

### Reduced Motion

Fully respects `prefers-reduced-motion: reduce`:
- All CSS animations (orb drift, portrait float, badge float) disabled
- Framer Motion variants resolve to `{ opacity: 1 }` with no translation
- Parallax disabled
- Button hover transforms disabled
- Global `reset.css` already zeroes animation/transition durations

### Mobile

- Hero stacks vertically (portrait above text, appropriately sized)
- Project spotlight cards stack to single column
- NavBar uses a slide-in drawer with backdrop
- All spacing scales down cleanly
- Buttons go full-width at narrow viewports

### Technical Details

- Added `framer-motion` as a dependency
- Created `src/hooks/useScrollReveal.js` (useScrollReveal, useParallax, useActiveSection)
- Created `src/components/RevealSection.jsx` (RevealSection, StaggerContainer, StaggerChild)
- New components: `MindsetBand`, `Experience`, `Education`
- Build: 334 KB JS (107 KB gzipped), 22 KB CSS (5 KB gzipped)
- ESLint: clean pass

## Placeholder assets to replace later

- `public/headshot-placeholder.svg` → replace with a real headshot photo
- `public/project-job-tracker-placeholder.svg` → replace with real Job Application Tracker screenshot(s)
- `public/project-health-placeholder.svg` → replace with real Health is Wealth screenshot(s)
