import React, { useState } from "react";
import { Link } from "react-scroll";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerOptions = [
    { name: "About", id: "about-section" },
    { name: "Experience", id: "experience-section" },
    { name: "Projects", id: "projects-section" },
    { name: "Contact", id: "contact-section" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      <nav className="desktop-nav">
        <Link className="logo" to="home-section" smooth={true} duration={500}>
          Ramiro Isla
        </Link>
        <ul className={"menu-links"}>
          {headerOptions.map(({ name, id }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-95}
                activeClass="active-link"
                className="header-link"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="hamburger-nav">
        <Link
          className="logo"
          to="HomePage-section"
          smooth={true}
          duration={500}
        >
          Ramiro Isla
        </Link>
        <div className="hamburger-menu">
          <button
            type="button"
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            id="mobile-menu"
            className={`menu-links ${menuOpen ? "open" : ""}`}
            aria-hidden={!menuOpen}
          >
            {headerOptions.map(({ name, id }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-68}
                  className="header-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
