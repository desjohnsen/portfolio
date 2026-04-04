import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import MarqueeSlider from "../components/MarqueeSlider";
import ProjectCard from '../components/ProjectCard';
import Contact from "../components/Contact";
import { projects } from '../data/projects';
import '../styles/Home.css';

const INITIAL_PROJECT_COUNT = 4;
const DESKTOP_BREAKPOINT = 1024;

const Home = ({ projectSectionRef, contactSectionRef }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const toggleButtonRef = useRef(null);

  const categories = ["All", "UX/UI", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const shouldCollapseProjects = isDesktop && activeCategory === "All";

  const visibleProjects = shouldCollapseProjects && !showAllProjects
    ? filteredProjects.slice(0, INITIAL_PROJECT_COUNT)
    : filteredProjects;

  const hasHiddenProjects =
    shouldCollapseProjects && filteredProjects.length > INITIAL_PROJECT_COUNT;

  useEffect(() => {
    setShowAllProjects(false);
  }, [activeCategory]);

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (!shouldCollapseProjects) {
      setShowAllProjects(false);
    }
  }, [shouldCollapseProjects]);

  const handleProjectToggle = () => {
    if (showAllProjects) {
      setShowAllProjects(false);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          toggleButtonRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        });
      });

      return;
    }

    setShowAllProjects(true);
  };

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
          {visibleProjects.map((project) => (
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

        {hasHiddenProjects && (
          <div className="projects-toggle">
            <span className="projects-toggle-status">
              {showAllProjects
                ? `Showing all ${filteredProjects.length} projects`
                : `Showing ${INITIAL_PROJECT_COUNT} of ${filteredProjects.length} projects`}
            </span>
            <span className="projects-toggle-separator" aria-hidden="true" />
            <button
              ref={toggleButtonRef}
              type="button"
              className="projects-toggle-button"
              onClick={handleProjectToggle}
              aria-expanded={showAllProjects}
            >
              {showAllProjects ? "Show less" : "Show all"}
            </button>
          </div>
        )}
      </div>

      <Contact contactSectionRef={contactSectionRef} />
    </>
  );
};

export default Home;
