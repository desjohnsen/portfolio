import React from "react";
import "../styles/About.css";
import profilePicDesktop from "../assets/images/polaroid.jpg";
import profilePicMobile from "../assets/images/ProfilepicMobile.jpg";

const SkillCard = ({ front, back }) => {
  const [flipped, setFlipped] = React.useState(false);

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((s) => !s);
    }
  };

  return (
    <div
      className={`skill-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((s) => !s)}
      onKeyDown={handleKey}
      role="button"
      aria-pressed={flipped}
      tabIndex={0}
    >
      <div className="card-inner">
        <div className="card-front">{front}</div>
        <div className="card-back">{back}</div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <header>
          <h2 className="about-title">About me</h2>
        </header>

        <p className="about-text">
        For me, great design is about understanding people. With experience in user research, wireframing and frontend development, I focus on creating intuitive and accessible digital solutions.
        </p>
        <p className="about-text">
        My early interest in media, visual communication and web development allowed me to connect creativity with logic. That foundation still guides my thinking, keeping me genuinely curious about both form and function.
        </p>
        <p className="about-text">
        As a UX/UI and Frontend graduate from Chas Academy, I focus on bridging the gap between design and code, ensuring visual layouts translate smoothly into working web applications.
        </p>
        <p className="about-text">
        Deeply committed to accessibility and inclusive design, I bring a collaborative spirit, empathy and a genuinely down-to-earth attitude to every project.
        </p>

         {/* MOBILE ONLY: Core skills placed before "Experience overview" 
         <div className="mobile-skills">
          <header className="skills-header">
            <h2 className="about-title">Core skills</h2>
          </header>
          <div className="skills-grid">
            <SkillCard
              front="UX Design"
              back={<>Creating intuitive, user-<br />centered digital experiences</>}
            />
            <SkillCard
              front="Wireframing"
              back={<>Creating clear layouts and user flows to structure interfaces</>}
            />
            <SkillCard
              front="Prototyping"
              back={<>Building interactive prototypes<br />to evaluate design solutions</>}
            />
            <SkillCard
              front="User Testing"
              back={<>Conducting usability tests to<br />refine and optimize user interactions</>}
            />
            <SkillCard
              front="Design Thinking"
              back={<>Applying structured methods to<br />design human-centered solutions</>}
            />
            <SkillCard
              front="Frontend Development"
              back={<>Building responsive,<br />interactive web interfaces</>}
            />
          </div>
        </div>*/}

        <header className="experience-header">
          <h2 className="about-title">Experience overview</h2>
        </header>

        <ul className="experience-section">
          <li className="about-text">
            <strong>UX Design Intern – Svenska Spel</strong>
            <br />
            • Worked in an agile, cross-functional environment
            <br />
            • Aligned UX with business and technical goals
            <br />
            • Built UI components for the Nova platform
            <br />
            • Facilitated and participated in usability tests
          </li>
          <li className="about-text">
            <strong>UX/UI Design Intern – Sundbybergs stad</strong>
            <br />
            • Designed UI for the landing page
            <br />
            • Improved hierarchy, structure, and clarity
            <br />
            • Collaborated with strategists & external agency
            <br />
            • Designs selected and implemented on the live site
          </li>
          <li className="about-text">
            <strong>UX Research – Domira</strong>
            <br />
            • Conducted usability testing of the mobile app
            <br />
            • Identified key pain points and unclear flows
            <br />
            • Proposed improvements to user flows
            <br />
            • Suggested UI refinements
          </li>
        </ul>

      {/* MOBILE ONLY: Profile picture under "About me" */}
        <div className="mobile-pic">
          <img src={profilePicMobile} alt="Profile mobile" className="about-image" />
        </div>

        <p className="about-text about-signoff" style={{ fontStyle: "italic", color: "#888" }}>
          Designed and built by me with React.js and Vite, this portfolio combines
          design and frontend development
        </p>
      </div>

      {/* Desktop/Tablet: Original aside layout; mobile order handled separately */}
      <aside className="about-image-wrapper">
        <img src={profilePicDesktop} alt="Profile desktop" className="about-image" />
        <header className="skills-header">
          <h2 className="about-title">Core skills</h2>
        </header>
        <div className="skills-grid">
          <SkillCard
            front="UX Design"
            back={<>Creating intuitive, user-<br />centered digital experiences</>}
          />
          <SkillCard
            front="Wireframing"
            back={<>Creating clear layouts and user flows to structure interfaces</>}
          />
          <SkillCard
            front="Prototyping"
            back={<>Building interactive prototypes<br />to evaluate design solutions</>}
          />
          <SkillCard
            front="User Testing"
            back={<>Conducting usability tests to<br />refine and optimize user interactions</>}
          />
          <SkillCard
            front="Design Thinking"
            back={<>Applying structured methods to<br />design human-centered solutions</>}
          />
          <SkillCard
            front="Frontend Development"
            back={<>Building responsive,<br />interactive web interfaces</>}
          />
        </div>
      </aside>
    </section>
  );
};

export default About;
