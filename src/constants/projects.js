export const projects = [
  {
    eyebrow: "Full-Stack Workflow App",
    title: "Job Application Tracker",
    description:
      "A structured system built to bring structure to a fragmented process without the spreadsheets. Applications, companies, resumes and cover letters are organized in one workflow with a unified dashboard view instead of being scattered across folders, notes and browser tabs.",
    bullets: [
      "Job application tracking with a unified authenticated user dashboard view",
      "Version control system for resumes and cover letters with tree structure for easy navigation and organization",
      "Currently working on AI-assisted feedback workflows",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "OpenAI"],
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
        eyebrow: "Mission",
        title:
          "Bring structure to a fragmented process without the spreadsheets. ",
        description:
          "A job search rarely lives in a single spreadsheet. Companies, applications, resumes and cover letters are often scattered across folders, notes, spreadsheets, docs, email drafts, and browser tabs. This project started as a way to bring an organization layer to that mess.",
        bullets: [
          "Application process gets fragmented quickly",
          "Tailored materials are easy to lose track of",
          "A better workflow needs structure",
        ],
      },
      {
        id: "tech-stack",
        kind: "detail",
        eyebrow: "Tech Stack + Architecture",
        title: "",
        description:
          "The project is built with a modern web stack including React, Vite, Node.js, Express, MongoDB, JWT and OpenAI. Decoupled client and API servers with a MongoDB database.",
        bullets: [
          "React",
          "Vite",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "OpenAI",
        ],
      },
      {
        id: "architecture",
        kind: "detail",
        eyebrow: "Data Modeling",
        title: "Data modeling with MongoDB and Mongoose",
        description:
          "The project uses MongoDB as the database and Mongoose as an ORM to model the data. MongoDB Atlas is used for cloud hosting.",
        bullets: [
          //tree structure for resumes and cover letters
          "Tree data structure for resumes and cover letters enables version control",
          "",
        ],
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
