import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "navLink active" : "navLink";
  };

  return (
    <div className="HeaderContainer">
      <nav className="desktopNav">
        <Link className="logo" to="/">
          Ramiro Isla
        </Link>
        <ul>
          <li>
            <Link to="/About" className={getLinkClass("/About")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Experience" className={getLinkClass("/Experience")}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/Projects" className={getLinkClass("/Projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className={getLinkClass("/Contact")}>
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
              <Link
                to="/About"
                className={getLinkClass("/About")}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Experience"
                className={getLinkClass("/Experience")}
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                className={getLinkClass("/Projects")}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={getLinkClass("/Contact")}
                onClick={toggleMenu}
              >
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
