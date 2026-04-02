import React, { useRef, useState } from 'react';
import Hero from '../components/Hero';
import MarqueeSlider from "../components/MarqueeSlider";
import ProjectCard from '../components/ProjectCard';
import Contact from "../components/Contact";
import { projects } from '../data/projects';
import '../styles/Home.css';

const Home = ({ projectSectionRef, contactSectionRef }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", "UX/UI", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Hero />
      <MarqueeSlider />

      <div className="projects-section" ref={projectSectionRef}>
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-wrapper">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              projectSlug={project.slug}
              image={project.image}
              tags={project.tags}
              buttonLabel={project.buttonLabel}
              customClass={project.customClass}
            />
          ))}
        </div>
      </div>

      <Contact contactSectionRef={contactSectionRef} />
    </>
  );
};

export default Home;
