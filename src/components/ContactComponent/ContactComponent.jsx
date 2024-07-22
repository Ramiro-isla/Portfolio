import React from "react";
import emailIcon from "../../img/email.png";
import LinkedInLogo from "../../img/linkedin.png";
import GitHubLogo from "../../img/github.png";
import "./ContactComponent.scss";

const ContactComponent = () => {
  return (
    <div className="ContactContainer">
      <h2>Contact</h2>
      <div className="contentContainer">
        <p>
          Si te ha gustado lo que has visto y te interesa mi trabajo, no dudes
          en ponerte en contacto. Ya sea para una propuesta de proyecto,
          una idea para una colaboración o simplemente quieras saber más sobre
          lo que hago, estaré encantado de escucharte. 🙃
        </p>
        <div className="socialContainer">
          <div className="socialItems">
            <a href="mailto:ramiroalfonso13@gmail.com">
              <img className="emailIcon" src={emailIcon} alt="email icon" />
              ramiroalfonso13@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ramiro-alfonso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="LinkedIn Logo" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ramiro-isla"
              target="_blank"
              rel="noopener noreferrer"
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
