import "./Hero.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/spencer-weinstein/";
const RESUME_URL =
  "https://docs.google.com/document/d/1Xr77V04V5YFMmAl6XuTc4rVBrPVNYYTjsGtSEo0YQxU/edit?usp=sharing";

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
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--outline"
          >
            Download Resume
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
