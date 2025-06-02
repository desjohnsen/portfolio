import React from 'react';
import '../styles/About.css';
import profilePic from "../assets/images/pic.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About me</h2>
        <p className="about-text">
          I'm a passionate UX/UI designer and frontend developer with a keen eye for clean, user-friendly interfaces.  
          I love creating digital experiences that combine simplicity, aesthetics, and functionality.
        </p>
        <p className="about-text">
          When I'm not designing, you'll find me exploring new tech trends, experimenting with code, or enjoying a good cup of matcha tea.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img src={profilePic} alt="Profile" className="about-image" />
      </div>
    </section>
  );
};

export default About;
