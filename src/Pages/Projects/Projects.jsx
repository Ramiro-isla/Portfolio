import React from "react";
import ToolsComponent from "../../components/ToolsComponent/ToolsComponent";
import projectsData from "../../data/projects";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="section-header">
        <h2>My Projects</h2>
        <p>
          Explore some of the projects I've worked on, showcasing my skills in
          frontend development, design, and integration.
        </p>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={`${project.description} image`}
                loading="lazy"
              />
            </div>
            <div className="project-details">
              <ToolsComponent tools={project.tools} />
              <p className="project-description">{project.description}</p>
              <div className="link-buttons">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-button"
                >
                  <img src={project.githubIcon} alt="GitHub icon" />
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                  aria-label={`View demo of ${project.description}`}
                >
                  <img src={project.webIcon} alt="Web demo icon" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
