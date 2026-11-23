import React, { lazy, Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const projectComponents = {
  jarfallahus: lazy(() => import('./Project1')),
  chowa: lazy(() => import('./Project2')),
  todo: lazy(() => import('./Project3')),
  "music-festival": lazy(() => import('./Project4')),
  "mission-usage-impossible": lazy(() => import('./Project5')),
  volontarpoolen: lazy(() => import('./Project6')),
  "svenska-spel": lazy(() => import('./Project7')),
  "sundbybergs-stad": lazy(() => import('./Project8')),
  bonti: lazy(() => import('./Project9')),
  tedxstockholm: lazy(() => import('./Project10')),
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

  return (
    <Suspense fallback={<div role="status" style={{ color: '#fff' }}>Loading project…</div>}>
      <SelectedProject />
    </Suspense>
  );
};

export default Project;
