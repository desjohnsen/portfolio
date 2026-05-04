import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ImageOverlay from "../components/ImageOverlay";
import volontarpoolenImage from "../assets/images/volontarpoolen.png";

const Project6 = () => {
  return (
    <ProjectLayout
      title="Volontärpoolen"
      subtitle="The full case study will be published shortly."
      role="UX/UI Designer"
      timeframe="13 weeks"
      tools="Figma"
    >

        <div className="project-image-wrapper">
          <ImageOverlay
            src={volontarpoolenImage}
            alt="Volontärpoolen project visual"
          />
        </div>

    </ProjectLayout>
  );
};

export default Project6;
