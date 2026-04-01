import "./Education.css";

const education = [
  {
    degree: "Software Engineering Certificate",
    school: "General Assembly",
    period: "Nov 2025 – Apr 2026",
    details:
      "Full-stack software engineering immersive. Coursework covering JavaScript, Python, React, Node.js, Express, Django, MongoDB, SQL, REST APIs, Git, and deployment.",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__inner">
        <h2 className="section-title">Education</h2>
        <div className="education__list">
          {education.map((edu) => (
            <div key={edu.degree + edu.school} className="education__item">
              <div className="education__header">
                <div>
                  <h3 className="education__degree">{edu.degree}</h3>
                  <p className="education__school">{edu.school}</p>
                </div>
                <span className="education__period">{edu.period}</span>
              </div>
              {edu.details && (
                <p className="education__details">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
