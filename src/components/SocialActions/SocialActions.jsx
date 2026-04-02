import SocialIconLink from "../SocialIconLink/SocialIconLink.jsx";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  CONTACT_EMAIL,
} from "../../constants/urls.js";
import "./SocialActions.css";

function SocialActions({ size }) {
  return (
    <div
      className="social-actions"
      role="group"
      aria-label="GitHub, LinkedIn, résumé, and contact"
    >
      <SocialIconLink variant="github" href={GITHUB_URL} size={size} />
      <SocialIconLink variant="linkedin" href={LINKEDIN_URL} size={size} />
      <SocialIconLink variant="resume" href={RESUME_URL} size={size} />
      <SocialIconLink variant="email" href={CONTACT_EMAIL} size={size} />
    </div>
  );
}

export default SocialActions;
