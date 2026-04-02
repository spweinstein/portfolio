import { RevealSection } from "../RevealSection.jsx";
import SocialIconLink from "../SocialIconLink/SocialIconLink.jsx";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../constants/urls.js";
import "./Footer.css";

function Footer() {
  return (
    <RevealSection as="footer" className="footer">
      <div className="footer__inner">
        <p className="footer__name">Spencer Weinstein</p>
        <p className="footer__tagline">
          Full-stack developer · Building structured software for real workflows
        </p>
        <div
          className="footer__icon-row"
          role="group"
          aria-label="GitHub, LinkedIn, and résumé"
        >
          <SocialIconLink variant="github" href={GITHUB_URL} />
          <SocialIconLink variant="linkedin" href={LINKEDIN_URL} />
          <SocialIconLink variant="resume" href={RESUME_URL} />
        </div>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Spencer Weinstein
        </p>
      </div>
    </RevealSection>
  );
}

export default Footer;
