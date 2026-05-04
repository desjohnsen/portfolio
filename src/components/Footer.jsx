import React from "react";
import "../styles/Footer.css";
  
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-name">© Desirée Johnsen</div>
      <div className="footer-year">{currentYear}</div>
    </footer>
  );
};

export default Footer;