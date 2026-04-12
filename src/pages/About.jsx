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
          I bring ideas to life through user-centered design and solid coding
          skills. With hands-on experience in user research, wireframing,
          prototyping and frontend development, I create intuitive and
          accessible digital solutions.
        </p>
        <p className="about-text">
          In high school, I studied aesthetics and media alongside programming
          and web development, a balance of creativity and logic that still
          shapes how I approach design and problem-solving.
        </p>
        <p className="about-text">
          As a UX/UI and Frontend student at Chas Academy, I’m now refining this
          approach by combining design thinking with technical execution to
          create purposeful and visually engaging solutions.
        </p>
        <p className="about-text">
          Driven by curiosity and a passion for design that makes a difference,
          I approach every project with creativity, empathy and functional
          precision.
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
            <strong>UX Design Intern – Svenska Spel (Ongoing)</strong>
            <br />
            • Working in an agile, cross-functional environment
            <br />
            • Aligning UX with business and technical goals
            <br />
            • Journey mapping and friction point analysis
            <br />
            • Building component for the 'Nova' design system
          </li>
          <li className="about-text">
            <strong>UI Design Intern – Sundbybergs stad</strong>
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
