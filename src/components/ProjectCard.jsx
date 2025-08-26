import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  projectId,
  image,
  tags = [],
  buttonLabel = "Case study →",
  customClass = "", 
}) => {
  return (
    <div className={`project-card ${customClass}`}>
      <div className="project-content">
        <h3>{title}</h3>
        {/*<p>{description}</p>*/}
      </div>

      <div className="project-image">
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="project-footer">
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        {buttonLabel && (
          <Link to={`/projects/${projectId}`} className="case-study-btn">
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
