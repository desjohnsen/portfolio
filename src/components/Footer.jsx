import React from "react";
import "../styles/Footer.css";
  
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>© {currentYear} Desirée Johnsen</div>
      <div className="footer-links">
        <a href="mailto:des.johnsen@gmail.com">Email</a>
        <a href="tel:+46700009903">Phone</a>
        <a href="https://www.linkedin.com/in/desireejohnsen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;


