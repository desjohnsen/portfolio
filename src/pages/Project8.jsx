import React from 'react';
import ProjectLayout from "../components/ProjectLayout";

const Project8 = () => {
  return (
    <ProjectLayout
      title="Sundbybergs stad"
      subtitle="Redesign and structural optimization for the official homepage of Sundbybergs stad."
      role="UI Designer"
      timeframe="10 weeks"
      tools="Figma"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          During my time at Sundbybergs stad, I worked as a UI Designer focusing on the official municipal homepage. The primary goal was to restructure the landing page to create a clearer information hierarchy, better visual communication, and a more accessible digital experience for residents navigating public services.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          Designing for the public sector required a strong focus on structure and clarity to serve a diverse group of users. I developed UI proposals and layout concepts in close alignment with internal strategists and an external web agency.
        </p>
        <p>
          Through iterative feedback loops, we refined the information structure to make key services easier to find, leading to several of my design proposals being selected and implemented live on the official website.
        </p>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          Seeing my work implemented on a live public website reinforced how essential clarity and visual hierarchy are when designing for the public sector. Collaborating with external agencies and internal stakeholders taught me how to articulate design decisions effectively and adapt concepts to balance both strategy and user needs.
        </p>
      </section>

      <div className="project-actions">
        <a
          href="https://www.sundbyberg.se/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          View site
        </a>
      </div>
    </ProjectLayout>
  );
};

export default Project8;