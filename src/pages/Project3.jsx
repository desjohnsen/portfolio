import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import phoneImage from "../assets/images/chowa.png"; // Bild från t.ex. din assets-mapp

const Project3 = () => {
  return (
    <ProjectLayout
      title="Finnabank"
      subtitle="A digital platform for municipal housing management"
      role="UI/UX Designer"
      timeframe="3 months"
      tools="Figma"
    >
      <p>Här kan du lägga in all text om projektet, precis som på din screenshot.</p>
      <img src={phoneImage} alt="Finnabank app" className="project-image" />
      <p>Mer text och information här...</p>
    </ProjectLayout>
  );
};

export default Project3;
