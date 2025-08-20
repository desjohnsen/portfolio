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
          I bring ideas to life through user-centered design and solid coding skills. With hands-on experience in user research, wireframing, prototyping, and frontend development, I create intuitive, accessible digital solutions.
        </p>
        <p className="about-text">
          In high school, I studied estetik & media alongside programming and web development, a balance of creativity and logic that still shapes how I approach design and problem-solving. 
        </p>
        <p className="about-text">
          As a UX/UI and Frontend student at Chas Academy, I’m now refining this approach by combining design thinking with technical execution to create purposeful, visually engaging solutions.
        </p>
        <p className="about-text">
          Driven by curiosity and a passion for design that makes a difference, I approach every project with creativity, empathy, and functional precision.
        </p>

        <header>
          <h2 className="about-title">Core skills</h2>
        </header>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="skill-card">UX Research</div>
            <div className="skill-card">UI Design</div>
            <div className="skill-card">Prototyping</div>
            <div className="skill-card">Design Thinking </div>
            <div className="skill-card">Frontend</div>
            <div className="skill-card">Teamwork</div>
          </div>
        </div>
      </div>

      <aside className="about-image-wrapper">
        <img src={profilePic} alt="Profile" className="about-image" />
        <img src={Jack} alt="Profile" className="about-image" />
      </aside>
    </section>
  );
};

export default About;
