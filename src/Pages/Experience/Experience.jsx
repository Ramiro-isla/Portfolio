import React from "react";
import experienceData from "../../data/experience";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience-section">
      <header className="experience-header">
        <h2>My Experience</h2>
        <p>
          These are the technologies I use to build modern, responsive, and
          dynamic applications.
        </p>
      </header>
      <div className="experience-card">
        {experienceData.length > 0 ? (
          experienceData.map((exp, index) => (
            <article key={index} className="experience-item">
              <img
                src={exp.img}
                alt={`${exp.tool} logo`}
                className="tool-icon"
              />
              <div className="tool-details">
                <h4>{exp.tool}</h4>
              </div>
            </article>
          ))
        ) : (
          <p>No experience data available.</p>
        )}
      </div>
    </section>
  );
};

export default Experience;
