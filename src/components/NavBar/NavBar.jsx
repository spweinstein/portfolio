import SocialIconLink from "../SocialIconLink/SocialIconLink.jsx";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../constants/urls.js";
import "./NavBar.css";

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
          <li className="navbar__icon-group">
            <SocialIconLink variant="github" href={GITHUB_URL} size="sm" />
            <SocialIconLink variant="linkedin" href={LINKEDIN_URL} size="sm" />
            <SocialIconLink variant="resume" href={RESUME_URL} size="sm" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
