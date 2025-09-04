import React from 'react';
import '../styles/About.css';
import profilePic from "../assets/images/pic.jpg";
import Jack from "../assets/images/jack.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <header>
          <h2 className="about-title">About me</h2>
        </header>

        <p className="about-text">
          I bring ideas to life through user-centered design and solid coding skills. With hands-on experience in user research, wireframing, prototyping and frontend development, I create intuitive and accessible digital solutions.
        </p>
        <p className="about-text">
          In high school, I studied aesthetics and media alongside programming and web development, a balance of creativity and logic that still shapes how I approach design and problem-solving. 
        </p>
        <p className="about-text">
          As a UX/UI and Frontend student at Chas Academy, I’m now refining this approach by combining design thinking with technical execution to create purposeful and visually engaging solutions.
        </p>
        <p className="about-text">
          Driven by curiosity and a passion for design that makes a difference, I approach every project with creativity, empathy and functional precision.
        </p>

        <header>
          <h2 className="about-title">Core skills</h2>
        </header>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="skill-card">UX Research</div>
            <div className="skill-card">UI Design</div>
            <div className="skill-card">Prototyping</div>
            <div className="skill-card">Design Thinking</div>
            <div className="skill-card">Frontend</div>
            <div className="skill-card">Collaboration</div>
          </div>
        </div>

        <header>
          <h2 className="about-title">Experience overview</h2>
        </header>

        <ul className="experience-section">
          <li className="about-text">
            <strong>Chas Challenge – Järfällahus (2025)</strong><br />
            • Team of 11 (UX, DevOps, Fullstack)<br />
            • UX research, wireframes, interactive prototypes<br />
            • Usability testing & design iteration<br />
            • Accessibility-focused design<br />
            • Agile Scrum workflow
          </li>

          <li className="about-text">
            <strong>Mobile App – Mission: Usage Impossible (2025)</strong><br />
            • Two-person project<br />
            • React Native, Expo, Firebase Authentication<br />
            • Retro-inspired UI<br />
            • Playful interaction design
          </li>

          <li className="about-text">
            <strong>Online Shop Project (2025)</strong><br />
            • Team of 6 UX students<br />
            • Wireframes & mockups in Figma<br />
            • Frontend with React, Vite, react-router-dom<br />
            • Integrated existing API<br />
            • Responsive design<br />
            • GitHub collaboration
          </li>

          <li className="about-text">
            <strong>Visual Identity & UX Design – Chowa (2024)</strong><br />
            • Identified user need and designed solution<br />
            • Created visual identity: colors, typography, logo<br />
            • Built component library<br />
            • Lo-fi → hi-fi wireframes<br />
            • Interactive prototype in Figma
          </li>
        </ul>

        <p className="about-text">
          This portfolio was built and designed by me using React.js and Vite, showcasing how I combine design thinking with frontend development.
        </p>
      </div>

      <aside className="about-image-wrapper">
        <img src={profilePic} alt="Profile" className="about-image" />
        <img src={Jack} alt="Profile" className="about-image" />
      </aside>
    </section>
  );
};

export default About;
