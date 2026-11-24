import React from 'react';
import ProjectLayout from "../components/ProjectLayout";

const Project7 = () => {
  return (
    <ProjectLayout
      title="Svenska Spel"
      subtitle="System migration and component design for Svenska Spel's Game History feature within the Nova platform."
      role="UX Designer"
      timeframe="20 weeks"
      tools="Figma"
      showSidebar={false}
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          During my internship at Svenska Spel, I worked as a UX Designer within Sport & Casino. My main focus was leading my thesis project: migrating the Game History feature from Trinidad into Svenska Spel’s modern design platform, Nova. Alongside this, I participated in product team activities and facilitated user testing for an optimized Casino prototype.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          The Game History project was a 1:1 migration designed to preserve functionality while standardizing the UI across several business areas (Sport & Casino, Momang, and Tur). Working in Figma, I utilized Nova’s structural architecture with Variables and Modes to allow components to dynamically switch visual identities depending on the context.
        </p>
        <p>
          Alongside system migration, I gained hands-on experience in modern testing methodologies by facilitating user interviews and taking notes for a redesigned Casino flow. Built as an interactive AI prototype of their current platform, the test evaluated whether UI improvements could streamline the user journey, reduce friction, and minimize unnecessary clicks and steps.
        </p>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          Migrating a live feature into an evolving design system like Nova taught me how to balance UX consistency, technical constraints, and brand identity in a large-scale organization. Furthermore, exploring AI-driven prototyping showed me how emerging tools can streamline user testing and significantly reduce the time required to validate complex interaction flows.
        </p>
      </section>
    </ProjectLayout>
  );
};

export default Project7;
