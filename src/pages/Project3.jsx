import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import phoneImage from "../assets/images/Chowa.png"; 

const Project3 = () => {
  return (
    <ProjectLayout
      title="MUSIC FESTIVAL"
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
