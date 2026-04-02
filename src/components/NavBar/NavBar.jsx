import { useState, useEffect, useCallback } from "react";
import SocialActions from "../SocialActions/SocialActions.jsx";
import { useActiveSection } from "../../hooks/useScrollReveal.js";
import "./NavBar.css";

const SECTION_IDS = [
  "top",
  "about",
  "projects",
  "skills",
  "experience",
  "education",
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const navClass = [
    "navbar",
    scrolled ? "navbar--scrolled" : "",
    menuOpen ? "navbar--open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linkClass = (id) =>
    `navbar__link${active === id ? " navbar__link--active" : ""}`;

  return (
    <nav className={navClass}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          Spencer Weinstein
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <div className="navbar__menu">
          <ul className="navbar__links">
            <li>
              <a
                href="#about"
                className={linkClass("about")}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={linkClass("projects")}
                onClick={closeMenu}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={linkClass("skills")}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={linkClass("education")}
                onClick={closeMenu}
              >
                Education
              </a>
            </li>
          </ul>
          <SocialActions size="sm" />
        </div>
      </div>

      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default NavBar;
