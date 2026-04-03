const JOB_APP_TRACKER = {
  eyebrow: "Full-stack workflow app",
  title: "Job Application Tracker",
  description:
    "A job search organization tool built to track applications by status and keep companies, resumes, and cover letters connected in one workflow.",
  bullets: [
    "Track job applications by status",
    "Organize companies, resumes, and cover letters together",
    "Create and navigate tailored document versions",
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
    "EJS",
  ],
  image: "/project-job-tracker-placeholder.svg",
  imageAlt: "Job Application Tracker interface preview",
  liveUrl: "https://job-app-tracker-production.netlify.app/",
  frontendRepo: "https://github.com/spweinstein/job-app-tracker-frontend",
  backendRepo: "https://github.com/spweinstein/job-app-tracker-backend",
  slides: [
    { id: "overview", kind: "overview" },
    {
      id: "problem",
      kind: "detail",
      eyebrow: "Problem statement",
      title: "The search gets fragmented fast",
      description:
        "A job search creates a growing set of applications, company records, resumes, and cover letters. Without structure, those pieces drift across tabs, folders, and drafts.",
      bullets: [
        "Applications need status and source tracking",
        "Custom-tailored supporting documents are easy to lose track of",
        "Spreadsheets for a universal task quickly become bloated",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder illustrating fragmented job-search workflows",
    },
    {
      id: "demo",
      kind: "detail",
      eyebrow: "Product in action",
      title: "Organize job applications with ease",
      description:
        "A quick walkthrough shows how the app moves from high-level tracking into applications, companies, resumes, and cover letters.",
      bullets: [
        "Dashboard organizes the core workflow",
        "Applications connect to companies and submissions",
        "Resume and cover-letter records stay linked",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder for a Job Application Tracker demo walkthrough",
    },
    {
      id: "workflow",
      kind: "detail",
      eyebrow: "Solution workflow",
      title: "Data modeling mirrors the process",
      description:
        "The data models are built around the search itself and treat supporting documents (resumes, cover letters) as an ever-evolving process instead of static uploads.",
      bullets: [
        "View applications by company, resume, or cover letter",
        "Create tailored versions of resumes and cover letters",
        "Navigate through resume and cover-letter version history",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder for Job Application Tracker data model concepts",
    },
    {
      id: "stack",
      kind: "detail",
      eyebrow: "Stack",
      title: "Decoupled frontend, focused API",
      description:
        "The current build pairs a decoupled React frontend with an Express API backed by MongoDB, with JWT handling authentication between the client and server.",
      bullets: [
        "Front end: React, Vite, React Router, Axios",
        "Back end: Node.js, Express, MongoDB, Mongoose",
        "Authentication: JWT with bcrypt-backed auth flows",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder for Job Application Tracker stack diagram",
    },
    {
      id: "implementation",
      kind: "detail",
      eyebrow: "Implementation",
      title: "Resource pages map cleanly to the workflow",
      description:
        "The React app is organized around the main record types in the job search itself, while the API exposes protected routes for the same core resources.",
      bullets: [
        "Dashboard, company, application, resume, and cover-letter pages",
        "List, detail, and edit flows for each record type",
        "Protected API routes mirror the same resource structure",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt:
        "Placeholder for Job Application Tracker implementation details",
    },
    {
      id: "iteration",
      kind: "detail",
      eyebrow: "Iteration",
      title: "From EJS app to React product",
      description:
        "The project began with a server-rendered EJS frontend and later moved to a decoupled React SPA, preserving the core backend workflow while reshaping the frontend architecture.",
      bullets: [
        "Original frontend used EJS templates",
        "Later rebuilt as a React single-page app",
        "Express and MongoDB remained the backend foundation",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder for Job Application Tracker iteration story",
    },
  ],
};

const HEALTH_IS_WEALTH = {
  eyebrow: "Health & fitness platform",
  title: "Health is Wealth",
  description:
    "A workout planning and tracking app built to schedule workouts on a calendar and keep exercises, templates, and completed sessions connected in one workflow.",
  bullets: [
    "Plan workouts on a calendar",
    "Track completed sessions over time",
    "Organize exercises, templates, and workout history",
  ],
  tech: [
    "React",
    "Vite",
    "React Router",
    "Axios",
    "JavaScript",
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
  liveUrl: "https://healthwealthapp.netlify.app/",
  frontendRepo: "https://github.com/spweinstein/hw-app-frontend",
  backendRepo: "https://github.com/spweinstein/hw-app-backend",
  slides: [
    { id: "overview", kind: "overview" },
    {
      id: "problem",
      kind: "detail",
      eyebrow: "Problem statement",
      title: "Planning and logging need different structures",
      description:
        "Most fitness apps either focus on rough planning or simple workout logging. This project separates the two so schedules can change without losing completed workout history.",
      bullets: [
        "Plans need scheduling across time",
        "Completed workouts need dated records",
        "Exercise data should support both flows",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt:
        "Placeholder illustrating workout planning versus workout logging",
    },
    {
      id: "demo",
      kind: "detail",
      eyebrow: "Product in action",
      title: "From calendar to completed workout",
      description:
        "A quick walkthrough shows how the app moves from calendar scheduling into workout details, exercises, and completed sessions.",
      bullets: [
        "Calendar displays scheduled workouts by date",
        "Workout views list exercises and instructions",
        "Completed sessions stay tied to the plan",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt: "Placeholder for a Health is Wealth demo walkthrough",
    },
    {
      id: "workflow",
      kind: "detail",
      eyebrow: "Solution workflow",
      title: "Data modeling mirrors the process",
      description:
        "The data models separate workout templates, scheduled plans, and dated workouts on the calendar so planning and execution remain distinct.",
      bullets: [
        "Templates define workout structure",
        "Plans schedule workouts across dates",
        "Dated workouts record what was completed",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt: "Placeholder for Health is Wealth workout domain model",
    },
    {
      id: "stack",
      kind: "detail",
      eyebrow: "Stack",
      title: "Decoupled frontend, focused API",
      description:
        "The current build pairs a decoupled React frontend with a Django REST API backed by PostgreSQL, with JWT handling authentication between the client and server.",
      bullets: [
        "Front end: React, Vite, React Router, Axios",
        "Back end: Python, Django, DRF, PostgreSQL",
        "Authentication: JWT across client and API",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt: "Placeholder for Health is Wealth stack diagram",
    },
    {
      id: "implementation",
      kind: "detail",
      eyebrow: "Implementation",
      title: "Resource pages map cleanly to the workflow",
      description:
        "The React app is organized around planning and tracking flows, while the API exposes endpoints for workouts, exercises, profiles, and related data.",
      bullets: [
        "Calendar, workout, and exercise views drive the UI",
        "CRUD flows support planning and tracking",
        "API endpoints serve workouts, profiles, and exercise data",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt: "Placeholder for Health is Wealth implementation details",
    },
    {
      id: "collaboration",
      kind: "detail",
      eyebrow: "Collaboration",
      title: "Built collaboratively from schema to UI",
      description:
        "Developed as part of a team of five, with work spanning schema design, API development, frontend implementation, and the core workout-planning experience.",
      bullets: [
        "Built with a team of five",
        "Used Django for schema and API work",
        "Used React for the interactive frontend",
      ],
      image: "/project-health-placeholder.svg",
      imageAlt: "Placeholder for Health is Wealth collaboration story",
    },
  ],
};

export const projects = [JOB_APP_TRACKER, HEALTH_IS_WEALTH];
