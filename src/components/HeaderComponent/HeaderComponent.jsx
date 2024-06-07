import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="HeaderContainer">
      <nav className="desktopNav">
        <Link className="logo" to="/">
          Ramiro Isla
        </Link>
        <ul>
          <li>
            <Link to="/About" className="navLink">
              About
            </Link>
          </li>
          <li>
            <Link to="/Experience" className="navLink">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="navLink">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="hamburguerNav">
        <Link className="logo" to="/">
          Ramiro Isla
        </Link>
        <div className="hamburguerMenu">
          <div
            className={`hamburguerIcon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`menuLinks ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/About" className="navLink" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/characters" className="navLink" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/about" className="navLink" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="navLink" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
