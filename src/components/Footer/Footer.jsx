import "./Footer.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/spencer-weinstein/";
const RESUME_URL =
  "https://docs.google.com/document/d/1Xr77V04V5YFMmAl6XuTc4rVBrPVNYYTjsGtSEo0YQxU/edit?usp=sharing";
const GITHUB_URL = "https://github.com/spweinstein";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Spencer Weinstein</p>
        <div className="footer__links">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Spencer Weinstein
        </p>
      </div>
    </footer>
  );
}

export default Footer;
