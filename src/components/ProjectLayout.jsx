import React, { useState, useEffect } from "react";
import {
  BookOpenText,
  AlertCircle,
  Search,
  Palette,
  Trophy,
  MessageSquare,
} from "lucide-react";

import "../styles/ProjectLayout.css";
import "../styles/ImageOverlay.css";

const sidebarItems = [
  { id: "overview", label: "Overview", Icon: BookOpenText },
  { id: "problem", label: "Problem", Icon: AlertCircle },
  { id: "research", label: "Research", Icon: Search },
  { id: "design", label: "Design", Icon: Palette },
  { id: "outcome", label: "Outcome", Icon: Trophy },
  { id: "reflection", label: "Reflection", Icon: MessageSquare },
];

const ProjectLayout = ({
  title,
  subtitle,
  role,
  timeframe,
  tools,
  children,
  showSidebar = true,
  sidebarSections,
}) => {
  const [activeSection, setActiveSection] = useState("");
  const visibleSidebarItems = sidebarSections
    ? sidebarItems.filter(({ id }) => sidebarSections.includes(id))
    : sidebarItems;

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
    <div
      className={`case-study-layout${showSidebar ? "" : " no-sidebar"}${sidebarSections ? " compact-sidebar" : ""}`}
    >
      {showSidebar && (
        <aside className="sidebar-nav">
          <nav>
            <ul>
              {visibleSidebarItems.map(({ id, label, Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(id, e)}
                    className={activeSection === id ? "active" : ""}
                  >
                    <Icon size={16} /> <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

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
