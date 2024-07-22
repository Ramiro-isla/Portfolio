import React from "react";
import "./HomeComponent.scss";
import ProfileFoto from "../../img/Profile-foto.jpeg";
import { Link } from "react-router-dom";
import LinkedInLogo from "../../img/linkedin.png";
import GitHubLogo from "../../img/github.png";

const HomeComponent = () => {
  return (
    <div className="homeComponent">
      <img src={ProfileFoto} alt="Profile" />
      <div className="homeInfo">
        <span>Hello, I'm</span>
        <h1>Ramiro Isla</h1>
        <p>Frontend Developer</p>
        <div className="buttonContainer">
          <a href="CV.pdf" download="CV.pdf" className="downloadButton">
            Download CV
          </a>
          <Link to="/Contact" className="contactButton">
            Contact Info
          </Link>
        </div>
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/ramiro-alfonso/"
            target="_blank"
          >
            <img src={LinkedInLogo} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/Ramiro-isla"
            target="_blank"
          >
            <img src={GitHubLogo} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
