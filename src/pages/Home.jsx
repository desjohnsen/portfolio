import React, { useRef, useState } from 'react';
import Hero from '../components/Hero';
import MarqueeSlider from "../components/MarqueeSlider";
import ProjectCard from '../components/ProjectCard';
import Contact from "../components/Contact";
import Chowa from '../assets/images/Chowa.png';
import '../styles/Home.css';

const Home = ({ projectSectionRef, contactSectionRef }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: "JÄRFÄLLAHUS",
      description: "",
      projectId: "1",
      image: Chowa,
      tags: ["Agile Team"],
      customClass: "green-background",
      category: "UX/UI",
    },
    {
      title: "CHOWA",
      description: "",
      projectId: "2",
      image: Chowa,
      tags: ["UX/UI", "Figma"],
      customClass: "blue-background",
      category: "UX/UI",
    },
    {
      title: "MUSIC FESTIVAL",
      description: "",
      projectId: "3",
      image: Chowa,
      tags: ["Frontend"],
      buttonLabel: "Read more →",
      customClass: "beige-background",
      category: "Frontend",
    },
    {
      title: "TODO", 
      description: "",
      projectId: "4", 
      image: Chowa, 
      tags: ["Frontend"],
      buttonLabel: "Read more →",
      customClass: "pink-background", 
      category: "Frontend",
    },
  ];

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
              key={project.projectId}
              title={project.title}
              description={project.description}
              projectId={project.projectId}
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
