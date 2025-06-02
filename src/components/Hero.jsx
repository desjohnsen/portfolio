import React, { useState } from "react";
import { Link } from "react-router-dom";
import Illustration from "../assets/images/Illustration2.png";
import "../styles/Hero.css";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div
          className={`hero-image${hover ? " hide-cursor" : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={handleMouseMove}
        >
          <Link to="/about" tabIndex={-1}>
            <img src={Illustration} alt="Illustration of Desirée" />
          </Link>
          {hover && (
            <div
              className="chat-bubble"
              style={{
                left: mousePos.x + 8 + "px",
                top: mousePos.y + 8 + "px",
              }}
            >
              Hi, nice to meet you!
            </div>
          )}
        </div>

        <div className="hero-text">
          <h1>Hi, I’m Desirée Johnsen</h1>
          <p>
            I’m a UX/UI Designer and Frontend Developer focused on genuine user needs, turning them into user-centered and accessible interfaces, always with empathy throughout the process.
          </p>
          <Link to="/about" className="btn">
            Get to know me 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
