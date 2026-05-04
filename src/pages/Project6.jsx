import React, { useEffect, useState } from 'react';
import ProjectLayout from "../components/ProjectLayout";
import ImageOverlay from "../components/ImageOverlay";
import volontarpoolImage from "../assets/images/volontarpoolen.png"; 
import "../styles/ProjectLayout.css";

const Project6 = () => {
  const [isPrototypeLoading, setIsPrototypeLoading] = useState(true);
  const [isPrototypeReady, setIsPrototypeReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    let timeoutId;
    if (isPrototypeReady) {
      timeoutId = window.setTimeout(() => {
        setIsPrototypeLoading(false);
      }, 4200);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isPrototypeReady]);

  const isMobile = windowWidth < 768;
  const containerHeight = isMobile ? "235px" : "347px"; 
  const containerRadius = isMobile ? "0.8rem" : "1.2rem";

  return (
    <ProjectLayout
      title="Volontärpoolen"
      subtitle="A digital platform concept designed to strengthen volunteer engagement and local crisis preparedness."
      role="UX/UI Designer"
      timeframe="13 weeks"
      tools="Figma"
    >
      <div style={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          margin: isMobile ? "2.5rem 0" : "4rem 0",
          gap: "1.5rem",
          width: "100%"
        }}>
          <div style={{
            width: "100%", 
            maxWidth: "100%", 
            height: containerHeight,
            borderRadius: containerRadius, 
            border: isPrototypeLoading ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
            overflow: "hidden", 
            backgroundColor: "transparent", 
            boxShadow: isMobile 
              ? "0 15px 35px rgba(0,0,0,0.12)" 
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            position: "relative",
            transition: "all 0.3s ease"
          }}>
            {isPrototypeLoading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.15rem",
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 247, 245, 0.98) 100%), url(${volontarpoolImage}) center / cover no-repeat`,
                  zIndex: 2,
                  textAlign: "center",
                  padding: "2rem 1.5rem",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "999px",
                    border: "3px solid rgba(88, 141, 52, 0.15)",
                    borderTopColor: "#588d34",
                    animation: "spin 0.9s linear infinite"
                  }}
                />
                <p style={{ margin: 0, fontSize: "1rem", fontWeight: "700", color: "#222" }}>
                  Loading interactive prototype
                </p>
              </div>
            )}
            <iframe 
              style={{ 
                border: "none", 
                width: "100%", 
                height: "100%",
                opacity: isPrototypeLoading ? 0 : 1,
                transition: "opacity 0.4s ease",
                transform: isMobile ? "scale(1)" : "scale(1.01)", 
                transformOrigin: "center"
              }} 
              src="https://embed.figma.com/proto/gE8tBe8gfCFd2T2DXvf5qd/Volont%C3%A4rpool?node-id=520-40204&p=f&viewport=422%2C309%2C0.02&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=520%3A40204&page-id=511%3A15459&embed-host=share&hide-ui=1" 
              allowFullScreen
              onLoad={() => setIsPrototypeReady(true)}
              title="Volontärpoolen Desktop Prototype"
            ></iframe>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#888", fontStyle: "italic", textAlign: 'center' }}>
              Volontärpoolen interactive prototype <br/> 
              (It takes a few seconds to initialize)
          </p>
        </div>

      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          <strong>The Challenge:</strong> Volontärpoolen is a digital platform developed for Lokalt Ledd Utveckling Halland <strong>(LLUH)</strong> to bridge the gap between people’s desire to help and their actual engagement in both everyday volunteering and local crises.
        </p>

        <p>
          <strong>My Role:</strong> Working in a team of five UX designers, I focused on the post-onboarding experience. I was responsible for designing the personal hub "Min Profil" <strong>(My Profile)</strong> and the technical settings architecture to ensure long-term retention and trust.
        </p>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        <p>
          <strong>Digital Thresholds:</strong> Research showed that potential volunteers often drop out due to unclear expectations, time scarcity, or lack of feedback once a task is completed.
        </p>

        <p>
          <strong>Recruitment Friction:</strong> Users need a transparent and simple way to find <strong>volunteer opportunities</strong> that fit their everyday lives, without the interface feeling overwhelming or uninspiring.
        </p>

        <p>
          <strong>The Goal:</strong> To design a solution that lowers the barrier to entry while creating a sense of competence and social impact for the user.
        </p>
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          <strong>User Insights:</strong> To capture a broad range of perspectives from our diverse target audience, our team conducted individual qualitative interviews. The interview I facilitated emphasized the necessity of <strong>"clear contact information, written agreements, and the ability to find tasks based on personal interest"</strong> as key factors for building trust.
        </p>

        <p>
          <strong>Demographic Diversity:</strong> Our target group spanned ages 21 – 60, meaning the platform had to cater to varying levels of digital literacy while providing a professional and authentic feel.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          <strong>Visual Trust:</strong> To build immediate credibility, we established a visual identity that balances warmth with professionalism. We paired the serif typeface <strong>Merriweather</strong> for headings with the clean sans-serif <strong>Lexend</strong> for functional text. The palette utilizes sunset oranges and muted teals to feel authentic, while the heart-handshake logo serves as a visual metaphor for the platform's core values of community and mutual support.
        </p>

        <p>
          <strong>Crisis Mode & Low Bandwidth:</strong> During emergencies, the platform shifts focus to support rapid response through a <strong>Map First</strong> approach, helping users immediately locate where help is needed. To ensure reliability on poor rural connections, we developed a <strong>Low Bandwidth Mode</strong> stripped of heavy assets. This optimization <strong>reduces cognitive load</strong>, enabling clearer decision making in high pressure situations.
        </p>
       
       <p>
          <strong>Personal Hub:</strong> I designed <strong>"Min Profil"</strong> with a clear navigation bar consisting of three main tabs for saved favorites, volunteer opportunities, and settings, allowing users to manage their commitments and interests separately.
        </p>

        <p>
          <strong>Information Architecture:</strong> The Settings section was structured into intuitive sub-pages for Profile, Personal Data, Notifications, and Account Integrity to ensure a logical flow for managing personal data.
        </p>

        <p>
          <strong>Gamification Strategy:</strong> Although not fully implemented, I explored how triggering <strong>"dopamine loops"</strong> through trophies and levels could foster retention. By leveraging the <strong>Goal-Gradient Effect</strong>, users feel more motivated as they get closer to their next engagement milestone.
        </p>

        <div className="project-image-wrapper">
          <ImageOverlay src={volontarpoolImage} alt="Volontärpoolen Profile and Settings interface" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        <p>
          <strong>Enhanced Scannability:</strong> Based on results from <strong>usability testing</strong>, we integrated category icons and estimated time-commitments into the cards. This enables users to assess relevance at a glance, significantly reducing the need for unnecessary navigation.
        </p>

        <p>
          <strong>From Confusion to Clarity:</strong> Testing revealed that our initial use of checkbox icons was misinterpreted as interactive buttons. To resolve this, we transitioned to clear bullet points to present requirements as static information rather than actions. We also introduced a subtle background tint between sections to further improve scannability and structure.
        </p>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          <strong>Strategic MVP:</strong> Prioritizing the <strong>MVP</strong> taught me to focus on what truly matters in a crisis. Ensuring functionality in <strong>low-bandwidth areas</strong> was essential to create a reliable experience for the entire community.
        </p>

        <p>
          <strong>Adaptive Design:</strong> This project proved that UX must change with the context. While crisis response requires speed and minimal cognitive load, the <strong>"My Profile"</strong> section focuses on long-term engagement by highlighting personal accomplishments and social impact.
        </p>

        <p>
          <strong>Future Explorations:</strong> Given more time, I would have liked to further explore and validate social features through <strong>usability testing</strong>, such as progress comparison with friends or followers, to further drive long-term engagement and lower the entry barrier for new volunteers.
        </p>

        <div className="project-actions">
          <a
            href="https://www.figma.com/proto/gE8tBe8gfCFd2T2DXvf5qd/Volont%C3%A4rpool?node-id=520-40204&p=f&viewport=422%2C309%2C0.02&t=zOAqa1LIFrTLpsiD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=520%3A40204&page-id=511%3A15459"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View prototype
          </a>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default Project6;