import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
