import { logDOM } from "@testing-library/react";
import React from "react";
import "./ToolsComponent.scss";

const ToolsComponent = ({ tools }) => {
  return (
    <div className="tools-container">
      {tools.map((tool, index) => (
        <div key={index} className="tool-card" aria-label={tool.name}>
          <img className="tool-image" src={tool.image} alt={tool.name} />
          <span className="tool-name">{tool.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ToolsComponent;
