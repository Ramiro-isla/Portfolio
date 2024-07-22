import React from "react";
import ExperienceIcon from "../../img/experience.png";
import EducationIcon from "../../img/education.png";
import "./AboutComponent.scss";

const AboutComponent = () => {
  return (
    <div className="AboutComponentContainer">
      <h2>About Me</h2>
      <div>
        <div>
          <div>
            <p className="infoProfile">
              ¡Hola! Soy Ramiro, originario de Perú y actualmente viviendo en
              Asturias. Llevo dos años adentrándome en el mundo de la
              programación y cuento con un año de experiencia profesional en
              este campo. Mi pasión por la tecnología me ha llevado a
              desarrollar habilidades sólidas en el desarrollo Frontend y estoy
              siempre en busca de nuevos desafíos que me permitan crecer y
              aprender más.
            </p>
            <p className="infoProfile">
              Además de mi amor por la programación, disfruto mucho de la música
              y los deportes. Estos hobbies no solo me brindan un equilibrio en
              mi vida, sino que también inspiran mi creatividad y me enseñan
              valiosas lecciones sobre trabajo en equipo y perseverancia.
            </p>
            <p className="infoProfile">
              En mi portafolio, encontrarás una muestra de mis proyectos más
              destacados, que reflejan mi dedicación y el esfuerzo que pongo en
              cada tarea. Estoy entusiasmado por compartir mi trabajo contigo y
              explorar posibles colaboraciones.
            </p>
            <p className="infoProfile">¡Gracias por visitar mi portafolio!</p>
          </div>
          <div className="aboutInfo">
            <div>
              <img src={ExperienceIcon} alt="experience icon" />
              <h3>Experience</h3>
              <p>1 Year</p>
              <p>Frontend Developer</p>
            </div>
            <div>
              <img src={EducationIcon} alt="education icon" />
              <h3>Education</h3>
              <p>Upgrade Hub - FrontEnd Developer</p>
              <p>Factoría F5 - FullStack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
