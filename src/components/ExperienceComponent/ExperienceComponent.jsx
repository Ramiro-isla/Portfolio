import React from "react";
import experience from "../../data/experience";
import "./ExperienceComponent.scss";

const ExperienceComponent = () => {
  return (
    <div className="ExperienceComponentContainer">
      <h2>Experience</h2>
      <div className="experienceList">
        <h3>Frontend Developer</h3>
        <div className="experienceCard">
          {experience.map((experience, index) => (
            <div key={index}>
              <img
                src={experience.img}
                alt={experience.tool}
                className="checkmark"
              />
              <div>
                <h4>{experience.tool}</h4>
                <p>{experience.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;