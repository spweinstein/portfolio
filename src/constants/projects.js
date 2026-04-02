export const projects = [
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
    slides: [
      { id: "overview", kind: "overview" },
      {
        id: "architecture",
        kind: "detail",
        eyebrow: "Architecture",
        title: "Layered client and API",
        description:
          "The SPA talks to a stateless Express API secured with JWT access tokens. MongoDB stores users, companies, applications, and document metadata; file uploads route through the API with validation before persistence.",
        bullets: [
          "REST resources scoped per user with role checks on every write",
          "Refresh-friendly auth: short-lived JWT plus httpOnly cookie strategy",
          "OpenAI calls isolated on the server behind rate limits and env-based keys",
        ],
        image: "/project-job-tracker-placeholder.svg",
        imageAlt: "Diagram-style placeholder representing API and database layers",
      },
      {
        id: "pipeline",
        kind: "detail",
        eyebrow: "Application pipeline",
        title: "Stages and documents",
        description:
          "Each application moves through configurable stages (screening, interview, offer, etc.). Cover letters and resumes attach per company so you always send the right variant without digging through folders.",
        bullets: [
          "Board and list views stay in sync with the same underlying model",
          "Documents versioned per application, not buried in global uploads",
          "Exports and reminders are designed to plug in without reshaping core data",
        ],
        image: "/project-job-tracker-placeholder.svg",
        imageAlt: "Placeholder suggesting a kanban or pipeline view",
      },
    ],
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
    slides: [
      { id: "overview", kind: "overview" },
      {
        id: "backend",
        kind: "detail",
        eyebrow: "Backend & security",
        title: "Django REST and JWT",
        description:
          "The React client consumes a Django REST API with token-based auth. Serializers enforce shape at the boundary; permissions tie workouts and routines to the authenticated user so data never leaks across accounts.",
        bullets: [
          "ORM models for users, workouts, exercises, and scheduled sessions",
          "JWT issuance and validation aligned with the SPA login flow",
          "Deployment split: static frontend on Netlify, API on a Python host",
        ],
        image: "/project-health-placeholder.svg",
        imageAlt: "Placeholder suggesting API and authentication flow",
      },
      {
        id: "domain",
        kind: "detail",
        eyebrow: "Workout domain",
        title: "Routines on the calendar",
        description:
          "Recurring templates expand into concrete sessions on the calendar. The exercise library powers planning: filter by muscle group or equipment, then attach movements to a day without losing history when plans change.",
        bullets: [
          "Calendar is the source of truth for what you actually did vs planned",
          "Library and planner share one taxonomy so labels stay consistent",
          "Progress metrics aggregate completed sessions over rolling windows",
        ],
        image: "/project-health-placeholder.svg",
        imageAlt: "Placeholder suggesting calendar and exercise library views",
      },
    ],
  },
];
