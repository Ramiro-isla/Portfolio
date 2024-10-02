import React from "react";
import "./ProjectComponent.scss";
import ToolsComponent from "./ToolsComponent/ToolsComponent";
import projectsData from "../../data/projects";

const ProjectComponent = () => {
  return (
    <div className="projectsContainer">
      <h2>Projects</h2>
      <div className="projectsList">
        {projectsData.map((project, index) => (
          <div key={index} className="projectsCard">
            <img
              src={project.image}
              className="cardImage"
              alt={`Screenshot of ${project.description}`}
              loading="lazy"
            />
            <div className="projectInfo">
              <ToolsComponent tools={project.tools} />
              <p>{project.description}</p>
              <div className="linkContainer">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code for ${project.description}`}
                >
                  <img src={project.githubIcon} alt="GitHub icon" /> Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View demo of ${project.description}`}
                >
                  <img src={project.webIcon} alt="Web demo icon" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
