const JOB_APP_TRACKER = {
  eyebrow: "Full-stack workflow app",
  title: "Job Application Tracker",
  description:
    "A job search organization tool built to keep companies, applications, resumes, and cover letters in one structured workflow.",
  bullets: [
    "Tracks job applications by status",
    "Organizes data by company, resumes, and cover letters",
    "Supports dashboard-based tracking and document version history",
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
      id: "demo",
      kind: "detail",
      eyebrow: "Product in action",
      title: "From dashboard to supporting documents",
      description:
        "A quick walkthrough shows how the app moves from high-level tracking into applications, companies, resumes, and cover letters.",
      bullets: [
        "Dashboard organizes the core workflow",
        "Applications connect to companies and materials",
        "Resume and cover-letter records stay linked",
      ],
      image: "/project-job-tracker-placeholder.svg",
      imageAlt: "Placeholder for a Job Application Tracker demo walkthrough",
    },
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
      imageAlt: "Placeholder for Job Application Tracker implementation details",
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
  JOB_APP_TRACKER,
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
