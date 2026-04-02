import SocialIconLink from "../SocialIconLink/SocialIconLink.jsx";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../constants/urls.js";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <p className="hero__greeting">Hi, I&apos;m</p>
        <h1 className="hero__name">Spencer Weinstein</h1>
        <p className="hero__title">Full-Stack Software Engineer</p>
        <p className="hero__bio">
          I build clean, user-focused web applications using modern JavaScript
          and Python. Passionate about creating tools that make everyday tasks
          simpler and more enjoyable.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View My Work
          </a>
          <div
            className="hero__social"
            role="group"
            aria-label="GitHub, LinkedIn, and résumé"
          >
            <SocialIconLink variant="github" href={GITHUB_URL} />
            <SocialIconLink variant="linkedin" href={LINKEDIN_URL} />
            <SocialIconLink variant="resume" href={RESUME_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
