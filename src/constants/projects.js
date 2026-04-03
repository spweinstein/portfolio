const JOB_APP_TRACKER_SLIDES = [
  { id: "overview", kind: "overview" },
  {
    id: "demo",
    kind: "detail",
    eyebrow: "Product in action",
    title: "From dashboard to documents",
    description:
      "A short walkthrough of the dashboard, applications, and document views shows how the app keeps job-search records connected in one place.",
    bullets: [
      "Dashboard links into core record types",
      "Applications connect companies and documents",
      "Resumes can be rendered to PDF",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder for a Job Application Tracker demo walkthrough",
  },
  {
    id: "problem",
    kind: "detail",
    eyebrow: "Why it exists",
    title: "The search gets fragmented fast",
    description:
      "A job search creates a growing set of applications, company records, resumes, and cover letters. Without structure, those pieces drift across tabs, folders, and drafts.",
    bullets: [
      "Applications need status and source tracking",
      "Documents need to stay tied to submissions",
      "Company context should live with the workflow",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder illustrating fragmented job-search workflows",
  },
  {
    id: "workflow",
    kind: "detail",
    eyebrow: "Workflow design",
    title: "The model mirrors the process",
    description:
      "The data model is shaped around the search itself: applications reference companies and materials, while resumes and cover letters are treated as evolving documents instead of static uploads.",
    bullets: [
      "Applications reference companies and resumes",
      "Statuses, priority, and source are modeled explicitly",
      "Documents preserve parent/root version history",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder for Job Application Tracker data model concepts",
  },
  {
    id: "stack",
    kind: "detail",
    eyebrow: "Stack",
    title: "Separate frontend, focused API",
    description:
      "The current build pairs a React frontend with an Express API backed by MongoDB. JWT handles authentication, and Puppeteer supports server-side PDF export.",
    bullets: [
      "React, Vite, React Router, Axios",
      "Node.js, Express, MongoDB, Mongoose",
      "JWT auth, bcrypt, and Puppeteer",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder for Job Application Tracker stack diagram",
  },
  {
    id: "implementation",
    kind: "detail",
    eyebrow: "Implementation",
    title: "Protected CRUD across core records",
    description:
      "The app is built around authenticated CRUD flows for applications, companies, resumes, and cover letters, with reusable list, detail, and form patterns across the frontend.",
    bullets: [
      "Protected routes cover the main resources",
      "Frontend routes split list, detail, and edit flows",
      "Reusable page patterns organize the SPA",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder for Job Application Tracker implementation details",
  },
  {
    id: "iteration",
    kind: "detail",
    eyebrow: "Iteration",
    title: "From EJS app to React product",
    description:
      "The project began with a server-rendered EJS frontend and later moved to a decoupled React client, shifting the app toward a more modular frontend architecture.",
    bullets: [
      "Started with an EJS frontend",
      "Migrated to a React SPA",
      "Kept the Express and MongoDB backend",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Placeholder for Job Application Tracker iteration story",
  },
];

const HEALTH_IS_WEALTH_SLIDES = [
  { id: "overview", kind: "overview" },
  {
    id: "demo",
    kind: "detail",
    eyebrow: "Product in action",
    title: "Planning and tracking on the calendar",
    description:
      "A short walkthrough of the calendar, workout views, and exercise details shows how planning and completed workouts are handled in one app.",
    bullets: [
      "Calendar displays scheduled workouts by date",
      "Workout views list exercises and instructions",
      "Weight logs and workout history are stored over time",
    ],
    image: "/project-health-placeholder.svg",
    imageAlt: "Placeholder for a Health is Wealth demo walkthrough",
  },
  {
    id: "problem",
    kind: "detail",
    eyebrow: "Why it exists",
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
    id: "domain",
    kind: "detail",
    eyebrow: "Workout design",
    title: "Templates, plans, and dated workouts",
    description:
      "The domain model separates workout templates, scheduled plans, and dated workouts on the calendar so planning and execution remain distinct.",
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
    title: "React frontend, Django REST backend",
    description:
      "The app uses a decoupled React client and a Django REST API backed by PostgreSQL, with JWT-based authentication connecting the two sides.",
    bullets: [
      "React, Vite, React Router, Axios",
      "Python, Django, DRF, PostgreSQL",
      "JWT auth across client and API",
    ],
    image: "/project-health-placeholder.svg",
    imageAlt: "Placeholder for Health is Wealth stack diagram",
  },
  {
    id: "implementation",
    kind: "detail",
    eyebrow: "Implementation",
    title: "Calendar, auth, and CRUD workflows",
    description:
      "The product combines authentication, an interactive calendar, exercise data, and full CRUD flows in a responsive frontend backed by relational models and REST endpoints.",
    bullets: [
      "JWT login and session restore",
      "Interactive calendar-driven workflow",
      "CRUD flows for workouts and related data",
    ],
    image: "/project-health-placeholder.svg",
    imageAlt: "Placeholder for Health is Wealth implementation details",
  },

  {
    id: "collaboration",
    kind: "detail",
    eyebrow: "Team build",
    title: "Built collaboratively from end to end",
    description:
      "Developed as part of a team of five, with work spanning schema design, API development, frontend implementation, and the core workout-planning experience.",
    bullets: [
      "Built with a team of five",
      "Combined backend and frontend work",
      "Focused on a complete product flow",
    ],
    image: "/project-health-placeholder.svg",
    imageAlt: "Placeholder for Health is Wealth collaboration story",
  },
];

export const projects = [
  {
    eyebrow: "Full-stack workflow app",
    title: "Job Application Tracker",
    description:
      "A job search organization tool built to keep companies, applications, resumes, and cover letters in one structured workflow.",
    bullets: [
      "Tracks companies, applications, and documents",
      "Keeps resumes tied to specific workflows",
      "Supports authenticated CRUD and PDF export",
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
      "EJS",
    ],
    image: "/project-job-tracker-placeholder.svg",
    imageAlt: "Job Application Tracker interface preview",
    liveUrl: "https://job-app-tracker-production.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/job-app-tracker-frontend",
    backendRepo: "https://github.com/spweinstein/job-app-tracker-backend",
    slides: JOB_APP_TRACKER_SLIDES,
  },

  {
    eyebrow: "Health & fitness platform",
    title: "Health is Wealth",
    description:
      "A workout planning and tracking app built around calendars, templates, and progress over time.",
    bullets: [
      "Separates planning from completed workouts",
      "Uses a React frontend and Django API",
      "Combines auth, calendar views, and CRUD"
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
    slides: HEALTH_IS_WEALTH_SLIDES,
  }
];
