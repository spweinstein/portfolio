import "./FeaturedProjects.css";

const projects = [
  {
    title: "Job Application Tracker",
    description:
      "A full-stack web app for managing the entire job search process. Track companies, applications, resumes, and cover letters in one place — with an optional AI assistant for document feedback.",
    tech: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "JWT", "OpenAI"],
    liveUrl: "https://job-app-tracker-production.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/job-app-tracker-frontend",
    backendRepo: "https://github.com/spweinstein/job-app-tracker-backend",
  },
  {
    title: "Health is Wealth",
    description:
      "A fitness tracking app with a calendar-based workout log, exercise library, and workout plan management. Users can browse exercises, schedule workouts, and track their fitness progress over time.",
    tech: ["React", "Vite", "Python", "Django", "JWT", "Netlify"],
    liveUrl: "https://hw-fitness.netlify.app/",
    frontendRepo: "https://github.com/spweinstein/hw-app-frontend",
    backendRepo: "https://github.com/spweinstein/hw-app-backend",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
      </div>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__tech">
        {project.tech.map((t) => (
          <li key={t} className="project-card__tag">
            {t}
          </li>
        ))}
      </ul>
      <div className="project-card__links">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link project-card__link--primary"
        >
          Live Demo
        </a>
        <a
          href={project.frontendRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link project-card__link--outline"
        >
          Frontend
        </a>
        <a
          href={project.backendRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link project-card__link--outline"
        >
          Backend
        </a>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section className="featured-projects" id="projects">
      <div className="featured-projects__inner">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of full-stack applications I&apos;ve built from the ground up.
        </p>
        <div className="featured-projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
