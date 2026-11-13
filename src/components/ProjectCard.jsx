import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  projectSlug,
  image,
  coverType,
  tags = [],
  buttonLabel = "Case study →",
  customClass = "", 
}) => {
  return (
    <div className={`project-card ${customClass}`} data-project={projectSlug}>
      <div className="project-content">
        <h3>{title}</h3>
        {/*<p>{description}</p>*/}
      </div>

      <div className="project-image" data-cover={image ? undefined : coverType}>
        {image ? (
          <div className="image-wrapper">
            <img src={image} alt={title} loading="lazy" decoding="async" />
          </div>
        ) : coverType === 'tedx' ? (
          <span aria-hidden="true"><span><strong>TED</strong><em>x</em></span><small>STOCKHOLM</small></span>
        ) : (
          <span aria-hidden="true">Bonti<small>PROJECT PREVIEW</small></span>
        )}
      </div>

      <div className="project-footer">
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        {buttonLabel && (
          <Link to={`/project/${projectSlug}`} className="case-study-btn">
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
