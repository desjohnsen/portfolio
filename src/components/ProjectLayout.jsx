import React, { useState, useEffect } from "react";
import {
  BookOpenText,
  AlertCircle,
  Target,
  Search,
  Pencil,
  Palette,
  Trophy,
} from "lucide-react";

import "../styles/ProjectLayout.css";

const ProjectLayout = ({ title, subtitle, role, timeframe, tools, children }) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="case-study-layout">
      <aside className="sidebar-nav">
        <nav>
          <ul>
            <li>
              <a
                href="#overview"
                onClick={(e) => scrollToSection("overview", e)}
                className={activeSection === "overview" ? "active" : ""}
              >
                <BookOpenText size={16} /> <span>Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#problem"
                onClick={(e) => scrollToSection("problem", e)}
                className={activeSection === "problem" ? "active" : ""}
              >
                <AlertCircle size={16} /> <span>Problem</span>
              </a>
            </li>
            <li>
              <a
                href="#goals"
                onClick={(e) => scrollToSection("goals", e)}
                className={activeSection === "goals" ? "active" : ""}
              >
                <Target size={16} /> <span>Goals</span>
              </a>
            </li>
            <li>
              <a
                href="#research"
                onClick={(e) => scrollToSection("research", e)}
                className={activeSection === "research" ? "active" : ""}
              >
                <Search size={16} /> <span>Research</span>
              </a>
            </li>
            <li>
              <a
                href="#ideation"
                onClick={(e) => scrollToSection("ideation", e)}
                className={activeSection === "ideation" ? "active" : ""}
              >
                <Pencil size={16} /> <span>Ideation</span>
              </a>
            </li>
            <li>
              <a
                href="#design"
                onClick={(e) => scrollToSection("design", e)}
                className={activeSection === "design" ? "active" : ""}
              >
                <Palette size={16} /> <span>Design</span>
              </a>
            </li>
            <li>
              <a
                href="#outcome"
                onClick={(e) => scrollToSection("outcome", e)}
                className={activeSection === "outcome" ? "active" : ""}
              >
                <Trophy size={16} /> <span>Outcome</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="project-main-content">
        <div className="project-container">
          <h1 className="project-title">{title}</h1>
          <p className="project-subtitle">{subtitle || "Description is missing"}</p>

          <div className="project-info-boxes">
            <div><strong>Role</strong><p>{role}</p></div>
            <div><strong>Duration</strong><p>{timeframe}</p></div>
            <div><strong>Tools</strong><p>{tools}</p></div>
          </div>

          <div className="project-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
