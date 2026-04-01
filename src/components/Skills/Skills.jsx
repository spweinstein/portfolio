import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Vite", "React Router"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Netlify", "Railway", "ESLint", "Agile"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with regularly.
        </p>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
