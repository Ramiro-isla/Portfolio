import React from "react";
import "./HomeComponent.scss";
import ProfileFoto from "../../img/Profile-foto.jpeg";
import { Link, NavLink } from "react-router-dom";
import LinkedInLogo from "../../img/linkedin.png";
import GitHubLogo from "../../img/github.png";

const homeComponent = () => {
  return (
    <div className="homeComponent">
      <img src={ProfileFoto} alt="foto" />
      <div className="homeInfo">
        <span>Hello, I'm</span>
        <h1>Ramiro Isla</h1>
        <p>Frontend Developer</p>
        <div className="buttonContainer">
          <button className="downloadButton">
            <a href="CV.pdf" download="CV.pdf">
              Download CV
            </a>
          </button>
          <button className="contactButton">
            <Link to="/Contact">Contact Info</Link>
          </button>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/ramiro-alfonso/"
            target="_blank"
          >
            <img src={LinkedInLogo} alt="linkedIn Logo" />
          </Link>
          <Link to="https://github.com/Ramiro-isla" target="_blank">
            <img src={GitHubLogo} alt="gitHub Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default homeComponent;
