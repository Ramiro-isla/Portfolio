import React from "react";
import experienceData from "../../data/experience";
import "./ExperienceComponent.scss";

const ExperienceComponent = () => {
  return (
    <div className="ExperienceComponentContainer">
      <h2>Experience</h2>
      <div className="experienceList">
        <h3>Frontend Developer</h3>
        <div className="experienceCard">
          {experienceData.map((exp, index) => (
            <div key={index} className="experienceItem">
              <img
                src={exp.img}
                alt={exp.tool}
                className="toolIcon"
              />
              <div className="toolDetails">
                <h4>{exp.tool}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;

