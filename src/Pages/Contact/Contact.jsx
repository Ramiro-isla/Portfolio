import React from "react";
import emailIcon from "../../assets/img/email.png";
import LinkedInLogo from "../../assets/img/linkedin.png";
import GitHubLogo from "../../assets/img/github.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I'm always excited to discuss new projects and collaborations. Let's
        connect!
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Connect With Me</h3>
          <div className="social-links">
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
            <a
              href="mailto:ramiroislaVillanueva@gmail.com"
              aria-label="Email me"
            >
              <img className="emailIcon" src={emailIcon} alt="Email icon" />
              ramiroislaVillanueva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
