import "./NavBar.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/spencer-weinstein/";
const RESUME_URL =
  "https://docs.google.com/document/d/1Xr77V04V5YFMmAl6XuTc4rVBrPVNYYTjsGtSEo0YQxU/edit?usp=sharing";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          Spencer Weinstein
        </a>
        <ul className="navbar__links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta navbar__cta--outline"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
