import React from "react";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const About = () => {
  return (
    <div className="aboutContainer">
      <HeaderComponent />
      <AboutComponent />
    </div>
  );
};

export default About;
