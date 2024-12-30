import { Link } from "react-router-dom";
import LinkedInLogo from "../../assets/img/linkedin.png";
import GitHubLogo from "../../assets/img/github.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-info">
        <h1>
          <span>Hello, I'm</span> Ramiro Isla
        </h1>
        <p>a passionate web developer.</p>
        <p>Welcome to My Portfolio</p>
        <div className="buttons">
          <a
            href="/Ramiro-Isla-CV.pdf"
            download="Ramiro-Isla-CV.pdf"
            className="btn primary"
          >
            Download CV
          </a>
          <Link
            to="/Contact"
            className="btn secondary"
            aria-label="Contact Info"
          >
            Contact Info
          </Link>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ramiro-alfonso/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ramiro's LinkedIn Profile"
          >
            <img src={LinkedInLogo} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/Ramiro-isla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ramiro's GitHub Profile"
          >
            <img src={GitHubLogo} alt="GitHub Logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
