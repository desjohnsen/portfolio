import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import { projects } from '../data/projects';

const projectComponents = {
  jarfallahus: Project1,
  chowa: Project2,
  todo: Project3,
  "music-festival": Project4,
  "mission-usage-impossible": Project5,
  volontarpoolen: Project6,
};

const Project = () => {
  const { projectSlug } = useParams();
  const matchedProject = projects.find(
    (project) => project.slug === projectSlug || project.legacyId === projectSlug
  );

  if (!matchedProject) {
    return <div>Project not found.</div>;
  }

  if (matchedProject.slug !== projectSlug) {
    return <Navigate to={`/project/${matchedProject.slug}`} replace />;
  }

  const SelectedProject = projectComponents[matchedProject.slug];

  return <SelectedProject />;
};

export default Project;
