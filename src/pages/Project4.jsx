import React from 'react';
import MusicFestival from "../assets/images/music-festival.png";
import ProjectLayout from "../components/ProjectLayout";

const Project4 = () => {
  return (
    <ProjectLayout
      title="MUSIC FESTIVAL"
      subtitle="Interactive festival guide built with Vanilla JavaScript and live API integration."
      role="Developer"
      timeframe="2 weeks"
      tools="JavaScript, CSS"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          I built a responsive website for a music festival where all artist, stage and schedule data is fetched from an external API. 
          The project was developed entirely with Vanilla JavaScript, using async and await for data handling and template literals to generate the HTML structure. 
          Users can browse the artist lineup and filter content by genre, day or stage.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          The design follows a clean and structured layout with a focus on readability and easy navigation. 
          All styling was created with vanilla CSS, and JavaScript is used to manage interactivity and dynamic rendering.
        </p>
        <p>
          The site is built with a mobile-first approach and scales up using CSS Grid and Flexbox. 
          The interface includes dynamic content loading, a filtering system and secure handling of API keys stored in localStorage.
        </p>
        <div className="project-image-wrapper">
          <img src={MusicFestival} alt="Music Festival" className="project-image" />
        </div>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          This project strengthened my understanding of asynchronous JavaScript, error handling and DOM manipulation using template literals. 
          Working without a framework gave me a deeper insight into how data and UI connect, and improved my ability to structure logic and layout in a clear and efficient way.
        </p>
      </section>

      <div className="project-actions">
        <a
          href="https://desjohnsen-music-festival.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/desjohnsen/music-festival"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
        >
          GitHub Repo
        </a>
      </div>
    </ProjectLayout>
  );
};

export default Project4;
