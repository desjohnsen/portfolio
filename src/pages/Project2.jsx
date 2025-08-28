import React from 'react';
import ProjectLayout from "../components/ProjectLayout"
import phoneImage from "../assets/images/Chowa.png"; 

const Project2 = () => {
  return (
    <ProjectLayout
      title="Chowa"
      subtitle=""
      role="UI/UX Designer"
      timeframe=""
      tools="Figma"
    >

      <img src={phoneImage} alt="Finnabank app" className="project-image" />

    </ProjectLayout>
  );
};

export default Project2;
