import React from "react";
import emailIcon from "../../assets/img/email.png";
import LinkedInLogo from "../../assets/img/linkedin.png";
import GitHubLogo from "../../assets/img/github.png";
import "./ContactComponent.scss";

const ContactComponent = () => {
  return (
    <div className="contactContainer">
      <h2>Contact</h2>
      <div className="contentContainer">
        <p>
          Si te ha gustado mi trabajo y deseas discutir una propuesta de
          proyecto, colaborar en una iniciativa, o simplemente obtener más
          información sobre mi experiencia y habilidades, estaré encantado de
          escucharte 🙃.
        </p>
        <div className="socialContainer">
          <div className="socialItems">
            <a href="mailto:ramiroalfonso13@gmail.com" aria-label="Email me">
              <img className="emailIcon" src={emailIcon} alt="Email icon" />
              ramiroalfonso13@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ramiro-alfonso/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={LinkedInLogo} alt="LinkedIn Logo" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ramiro-isla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <img src={GitHubLogo} alt="GitHub Logo" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
