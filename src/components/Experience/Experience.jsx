import "./Experience.css";

const experiences = [
  {
    title: "Software Engineering Fellow",
    company: "General Assembly",
    period: "Nov 2025 – Apr 2026",
    bullets: [
      "Completed an intensive 480-hour full-stack software engineering immersive program.",
      "Built full-stack applications using JavaScript (React, Node.js, Express) and Python (Django).",
      "Collaborated on team projects using Git/GitHub workflows and Agile methodologies.",
      "Deployed production applications on Netlify and Railway.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <h2 className="section-title">Experience</h2>
        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.title + exp.company} className="experience__item">
              <div className="experience__header">
                <div>
                  <h3 className="experience__title">{exp.title}</h3>
                  <p className="experience__company">{exp.company}</p>
                </div>
                <span className="experience__period">{exp.period}</span>
              </div>
              <ul className="experience__bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
