import React from 'react';
import MissionUsageImpossible from "../assets/images/mission-usage-impossible.png";
import ProjectLayout from "../components/ProjectLayout";

const Project5 = () => {
  return (
    <ProjectLayout
      title="MISSION USAGE IMPOSSIBLE"
      subtitle="A deliberately frustrating app built with React Native, Expo, and Firebase Authentication."
      role="Developer"
      timeframe="2 weeks"
      tools="React Native, Expo, Firebase"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          Mission: Usage Impossible is a deliberately frustrating app created as a school project to explore bad UX intentionally. 
          Together with my classmate Max, who handled the backend and Firebase Authentication, I focused on designing the UI and implementing mini-games inspired from retro classics like Snake, Flappy Bird, and nostalgic Windows 95 elements.
        </p>
        <p>
          The app includes an intentionally confusing onboarding, a landing page, a profile page, and an additional page with irritating interactive elements.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          The UI was designed to be annoying and confusing on purpose: inconsistent color contrasts, moving buttons, and unpredictable interactions. 
          I also added mini-games to make the experience playful and frustrating, drawing inspiration from my favorite childhood games and retro aesthetics.
        </p>
        <p>
          The app embraces chaotic fun while remaining fully functional. Despite the intentionally poor UX, the code is organized and modular, ensuring all features work as intended.
        </p>
        <div className="project-image-wrapper">
          <img src={MissionUsageImpossible} alt="Mission Usage Impossible" className="project-image" />
        </div>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          This project challenged me to think creatively about user experience by designing intentionally bad UX and allowed me to combine UI design with interactive game functionality. 
          Collaborating with Max taught me the value of complementary skills in a team, where he focused on backend logic and I handled front-end interactions and playful elements.
        </p>
      </section>

      <div className="test-credentials">
        <span className="credential-title">Try the Live Demo</span>
      <p className="credential-subtitle">Use these credentials to log in:</p>
        
        <div className="credential-group">
          <div className="credential-item">
            <span className="label">Email:</span>
            <span className="value">test@live.se</span>
          </div>
          
          <div className="separator"></div>
          
          <div className="credential-item">
            <span className="label">Password:</span>
            <span className="value">test123</span>
          </div>
        </div>
      </div>

      <div className="project-actions">
        <a
          href="https://mission-usage-impossible.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/desjohnsen/mission-usage-impossible"
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

export default Project5;
