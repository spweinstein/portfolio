import SocialIconLink from "../SocialIconLink/SocialIconLink.jsx";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../constants/urls.js";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Spencer Weinstein</p>
        <div className="footer__links">
          <div
            className="footer__icon-row"
            role="group"
            aria-label="GitHub, LinkedIn, and résumé"
          >
            <SocialIconLink variant="github" href={GITHUB_URL} />
            <SocialIconLink variant="linkedin" href={LINKEDIN_URL} />
            <SocialIconLink variant="resume" href={RESUME_URL} />
          </div>
        </div>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Spencer Weinstein
        </p>
      </div>
    </footer>
  );
}

export default Footer;
