export const projects = [
  {
    eyebrow: "Full-stack workflow app",
    title: "Job Application Tracker",
    description:
      "A JWT-authenticated React app backed by Express and MongoDB for the messy middle of a job search: companies, applications, and reusable resume and cover-letter documents in one place. Resumes are modeled as versioned documents (parent/child links and hierarchical version strings), and the API can render a resume to PDF from HTML using a headless browser—useful when you need a file, not just a screen.",
    bullets: [
      "Express API with protected routes for applications, companies, resumes, and cover letters; bcrypt-hashed auth and JWT middleware",
      "MongoDB / Mongoose with pagination plugins, application records tied to companies and resumes (status, priority, source, timelines)",
      "Document-style resumes and cover letters with parent/root ownership and computed version labels (e.g. branching from a prior draft)",
      "Server-side PDF export: Puppeteer turns submitted HTML into an A4 PDF for download",
    ],
    tech: [
      "React",
      "Vite",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Puppeteer",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Job Application Tracker interface preview",
    liveUrl: "https://job-app-tracker-production.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/job-app-tracker-frontend",
    backendRepo: "https://github.com/spweinstein/job-app-tracker-backend",
    slides: [
      { id: "overview", kind: "overview" },
      {
        id: "mission",
        kind: "detail",
        eyebrow: "Why it exists",
        title: "One pipeline instead of a dozen tabs",
        description:
          "Job searches splinter across spreadsheets, drives, and drafts. This project is an attempt to keep structured data—who you applied to, with which resume, and how each application evolved—behind one authenticated API and a React client built around repeatable list/detail/form flows (the frontend README sketches that shell explicitly).",
        bullets: [
          "Applications reference a company and a resume; enums capture status, priority, and source",
          "Resumes and cover letters live in the same document pattern so materials can evolve without losing history",
          "The frontend roadmap still calls out polish: landing, dashboard density, debounced search, toasts—honest scope for an evolving product",
        ],
      },
      {
        id: "tech-stack",
        kind: "detail",
        eyebrow: "Stack",
        title: "Decoupled client and API",
        description:
          "The client is React 19 + Vite + React Router with Axios. The API is Express 5 with Mongoose to MongoDB, JWT auth, and Puppeteer reserved for PDF generation—not a generic CRUD demo.",
        bullets: [
          "React, Vite, React Router, Axios",
          "Express, Mongoose, MongoDB, JWT, bcrypt",
          "Puppeteer for HTML → PDF export",
        ],
      },
      {
        id: "architecture",
        kind: "detail",
        eyebrow: "Data modeling",
        title: "Documents, forks, and versions",
        description:
          "Shared `Document` metadata stores owner, optional parent and root pointers, draft flag, and version. Resume content holds structured experience, education, projects, certifications, and skills. Creating a child document runs `computeVersion` so branches get human-readable version strings instead of opaque IDs alone.",
        bullets: [
          "Mongoose discriminators separate resume vs cover-letter payloads on a common document base",
          "Parent/root fields support lineage; pagination helpers apply to list endpoints",
          "PDF route accepts HTML from the client and returns `application/pdf` bytes",
        ],
      },
    ],
  },
  {
    eyebrow: "Health & fitness platform",
    title: "Health is Wealth",
    description:
      "A React client on Netlify talking to a Django REST API on Railway over JWT. The domain model separates workout templates, scheduled plans, and dated workouts on a calendar—so planning and execution stay distinct. Profiles track height; weight logs add a simple longitudinal signal beside the workout history described in the repos.",
    bullets: [
      "JWT auth with register/login and refresh aligned to an Axios layer and client-side session restore",
      "Exercise library seeded via Django admin: muscle groups, equipment, instructions, and optional demo video URLs",
      "Workout templates and plans (admin-seeded) generate calendar workouts users open, complete, and trace over time",
      "Profile API plus weight-log endpoints; PostgreSQL behind Django ORM and serializers",
    ],
    tech: [
      "React",
      "Vite",
      "React Router",
      "Axios",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Netlify",
      "Railway",
    ],
    image: "/project-health-placeholder.svg",
    imageAlt: "Health is Wealth interface preview",
    // README documents https://healthwealthapp.netlify.app/ — confirm vs https://hw-fitness.netlify.app/
    liveUrl: "https://healthwealthapp.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/hw-app-frontend",
    backendRepo: "https://github.com/spweinstein/hw-app-backend",
    slides: [
      { id: "overview", kind: "overview" },
      {
        id: "backend",
        kind: "detail",
        eyebrow: "Backend & security",
        title: "Django REST, PostgreSQL, SimpleJWT",
        description:
          "The API uses Django REST Framework with SimpleJWT: register and login return access/refresh and user payloads; protected routes expect `Authorization: Bearer`. Serializers and permission classes keep user-owned rows (profiles, weight logs) scoped to the authenticated user, matching what the frontend README describes.",
        bullets: [
          "PostgreSQL (per backend README) with explicit models for profile, weight logs, muscle groups, exercises, and the workout graph",
          "JWT issuance and refresh endpoints wired to the SPA’s `UserContext` and token storage",
          "Railway hosts the API; Netlify hosts the static SPA",
        ],
        image: "/project-health-placeholder.svg",
        imageAlt: "Placeholder suggesting API and authentication flow",
      },
      {
        id: "domain",
        kind: "detail",
        eyebrow: "Workout domain",
        title: "Templates, plans, calendar workouts",
        description:
          "Templates define structure; plans schedule them across time; the backend materializes dated workouts that appear on the calendar. That separation is spelled out in the frontend README. Richer exercise search/filtering appears under Post-MVP ideas—worth iterating in the UI without claiming it is already finished polish.",
        bullets: [
          "Calendar shows which workouts land on which dates; each lists exercises and instructions",
          "Exercises reference muscle groups and equipment types exposed via read APIs",
          "Django admin is the supported path for seeding exercises, templates, and plans",
        ],
        image: "/project-health-placeholder.svg",
        imageAlt: "Placeholder suggesting calendar and exercise library views",
      },
    ],
  },
];
