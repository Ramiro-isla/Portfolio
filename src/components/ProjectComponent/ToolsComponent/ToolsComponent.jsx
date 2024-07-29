import React from "react";
import "./ToolsComponent.scss";

const ToolsComponent = ({ tools }) => {
  return (
    <div className="toolsContainer">
      {tools.map((tool, index) => (
        <div key={index} className="toolCard">
          <img className="toolImage" src={tool.image} alt={tool.name} />
          <span className="toolName">{tool.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ToolsComponent;
