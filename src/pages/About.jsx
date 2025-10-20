import React from "react";
import "../styles/About.css";
import profilePic from "../assets/images/pic.jpg";

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

        <header>
          <h2 className="about-title">Experience overview</h2>
        </header>

        <ul className="experience-section">
          <li className="about-text">
            <strong>Chas Challenge – Järfällahus (2025)</strong>
            <br />
            • Team of 11 (UX, DevOps, Fullstack)
            <br />
            • UX research, wireframes, interactive prototypes
            <br />
            • Usability testing & design iteration
            <br />
            • Accessibility-focused design
            <br />
            • Agile Scrum workflow
          </li>

          <li className="about-text">
            <strong>Mobile App – Mission: Usage Impossible (2025)</strong>
            <br />
            • Two-person project
            <br />
            • React Native, Expo, Firebase Authentication
            <br />
            • Retro-inspired UI
            <br />
            • Playful interaction design
          </li>

          <li className="about-text">
            <strong>Online Shop Project (2025)</strong>
            <br />
            • Team of 6 UX students
            <br />
            • Wireframes & mockups in Figma
            <br />
            • Frontend with React, Vite, react-router-dom
            <br />
            • Integrated existing API
            <br />
            • Responsive design
            <br />
            • GitHub collaboration
          </li>

          <li className="about-text">
            <strong>Visual Identity & UX Design – Chowa (2024)</strong>
            <br />
            • Identified user need and designed solution
            <br />
            • Created visual identity: colors, typography, logo
            <br />
            • Built component library
            <br />
            • Lo-fi → hi-fi wireframes
            <br />
            • Interactive prototype in Figma
          </li>
        </ul>

        <p className="about-text" style={{ fontStyle: "italic" }}>
          Designed and built by me with React.js and Vite, this portfolio combines
          design and frontend development
        </p>
      </div>

      <aside className="about-image-wrapper">
        <img src={profilePic} alt="Profile" className="about-image" />

        <p className="about-quote">
          Driven by a curiosity for design that makes a difference, 
          with a focus on human behavior and real user needs.
        </p>

        <header className="skills-header">
          <h2 className="about-title">Core skills</h2>
        </header>

        <div className="skills-grid">
          <SkillCard
            front="UX Design"
            back="Creating intuitive, user-centered digital experiences"
          />
          <SkillCard
            front="Wireframing"
            back="Creating clear layouts and user flows to structure interfaces" 
          />
          <SkillCard
            front="Prototyping"
            back="Building interactive prototypes to evaluate design solutions"
          />
          <SkillCard
            front="User Testing"
            back="Conducting usability tests to refine and optimize user interactions"
          />
          <SkillCard
            front="Design Thinking"
            back="Applying structured methods to design human-centered solutions" 
          />
          <SkillCard
            front="Frontend Development"
            back="Building responsive, interactive web interfaces"
          />
        </div>
      </aside>
    </section>
  );
};

export default About;
