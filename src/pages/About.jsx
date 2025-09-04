import React from 'react';
import '../styles/About.css';
import profilePic from "../assets/images/pic.jpg";
import Jack from "../assets/images/jack.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <header>
          <h2 className="about-title">About</h2>
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
          <h2 className="about-title">Core Skills</h2>
        </header>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="skill-card">UX Research</div>
            <div className="skill-card">UI Design</div>
            <div className="skill-card">Prototyping</div>
            <div className="skill-card">Design Thinking </div>
            <div className="skill-card">Frontend</div>
            <div className="skill-card">Collaboration</div>
          </div>
        </div>

        <header>
          <h2 className="about-title">Experience Overview</h2>
        </header>

        <ul className="experience-section">
          <li className="about-text">
            <strong>Chas Challenge – Järfällahus (2025)</strong><br />
            Collaborated in a cross-functional team of 11 (UX, DevOps, Fullstack open source stack) to design and develop a responsive platform for Järfällahus.<br /> My role focused on UX research, wireframes and interactive prototypes in Figma, usability testing and design iteration. We worked in Scrum, emphasizing accessibility and a clear information structure.
          </li>      

          <li className="about-text">
            <strong>Mobile App – Mission Usage Impossible (2025)</strong><br />
            Designed and developed in a two-person project: a deliberately frustrating app built with React Native, Expo and Firebase Authentication. Focused on retro-inspired UI and playful interaction design.
          </li>

          <li className="about-text">
            <strong>Online Shop Application (2025)</strong><br />
            Worked in a team of 6 UX students to design and develop a small e-commerce application using an existing API. Our work included: designing wireframes and mockups in Figma, implementing frontend functionality using React (Vite) and react-router-dom, ensuring responsive design for mobile and desktop, and managing code through GitHub.
          </li>


          <li className="about-text">
            <strong>Visual Identity & UX Design – Chowa (2024)</strong><br />
            Created a visual identity with colors, typography, and design components. Conducted user research to identify needs, designed lo-fi wireframes, refined them into hi-fi mockups, and built an interactive prototype in Figma to present the solution.
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
