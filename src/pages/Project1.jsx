import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import PhoneImage from "../assets/images/jarfallahus.png";
import GroupPhoto from "../assets/images/GroupPhoto.jpg";
import ExperienceMap from "../assets/images/experiencemap.jpg";
import UserArchetypes from "../assets/images/userarchetypes.jpg";
import Quotes from "../assets/images/quotes.png";
import "../styles/ProjectLayout.css";

const Project1 = () => {
  return (
    <ProjectLayout
      title="Järfällahus"
      subtitle="A collaborative platform with Järfällahus designed to empower Sångvägen’s community by simplifying access to local initiatives."
      role="UX/UI Designer"
      timeframe="10 weeks"
      tools="Figma"
    > 
    <section id="overview" className="project-content">
        <h2>Overview</h2>
        
        <p>
          <strong>Challenge:</strong> As part of the annual Chas Challenge, where students from UX/UI, Frontend, Fullstack, and DevOps programs work together in cross-functional teams, we collaborated with the real estate company Järfällahus to create a digital solution. The goal was to build an accessible and engaging platform to strengthen the community and simplify access to local initiatives in the Sångvägen neighborhood.
        </p>
        
        <p>
          <strong>Role:</strong> In my role as UX/UI designer, I led the user research and turned insights from local residents into design strategies and interactive prototypes. This ensured our final product helped the team address real community needs and strengthen engagement in the neighborhood rather than relying on assumptions.
        </p>
        
        <p>
          <strong>Impact:</strong> Working closely with developers taught me how to balance UX vision with technical constraints. The project resulted in a tested, user-centric platform that successfully addressed the community's needs, and gave me invaluable experience in cross-functional agile teamwork.
        </p>

        <div className="project-image-wrapper">
          <img src={GroupPhoto} alt="Group photo" className="project-image" />
        </div>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        
        <p>
          Sångvägen faces socioeconomic challenges, including low community engagement and a lack of accessible communication channels. As part of an initiative to improve neighborhood safety, Järfällahus planned to transform underutilized parking structures into local activity hubs.
        </p>
        
        <p>
          However, their existing digital presence could not support this transformation. The official website provided general housing information but failed to address specific community needs. This created several key issues:
        </p>

        <p>
          <strong>Disconnected residents:</strong> People were uninformed about local initiatives and opportunities to participate.
        </p>
        
        <p>
          <strong>Information gaps:</strong> There was a complete lack of a dedicated space for neighborhood-specific news, events, and family-friendly activities.
        </p>
        
        <p>
          <strong>Low engagement:</strong> Without clear digital channels tailored to the area, it was difficult to foster the safety, inclusion, and vibrancy the community needed.
        </p>
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          To ensure the platform addressed real user needs, we started by conducting market research to identify best practices. Next, we carried out qualitative interviews with five residents to understand how they perceived safety, inclusion, and community engagement.
        </p>

        <p>
          From the interviews, several patterns emerged. Residents expressed low engagement and a lack of appealing local activities:
        </p>

        <div className="project-image-wrapper">
          <img src={Quotes} alt="Quotes" className="project-image" />
        </div>

        <p>
          Based on the findings, three key insights were identified:
        </p>

        <p>
          <strong>Accessible information:</strong> Residents emphasized the need for accessible digital information regarding local news, events, and family-friendly initiatives. Suggestions included event notifications, calendars, and clearer categorization.
        </p>
        
        <p>
          <strong>Inclusive communication:</strong> It was important that communication felt transparent, inclusive, and easy to understand. Mobile-first access was also crucial.
        </p>
        
        <p>
          <strong>Varying engagement levels:</strong> We noticed that engagement levels varied depending on motivation, digital habits, and preferred ways of interacting with the community.
        </p>

        <p>
          Building on these insights, we created an experience map to visualize how residents’ needs connect to the core values of <strong>Safety, Inclusion, and Vibrancy</strong>. This guided early ideation and engagement strategies.
        </p>

        <div className="project-image-wrapper">
          <img src={ExperienceMap} alt="Experience map" className="project-image" />
        </div>

        <p>
          We then defined three user archetypes based on the research. These archetypes ensured that our design decisions remained user-centered and adaptable to different levels of digital confidence and motivation.
        </p>

        <div className="project-image-wrapper">
          <img src={UserArchetypes} alt="User archetypes" className="project-image" />
        </div>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>

        <p>
          <strong>Collaborative sketching:</strong> We kicked off the design phase with a cross-functional Crazy 8's workshop. Sketching together on paper helped align the team on core concepts before moving into digital wireframing.
        </p>
        
        <p>
          <strong>Visual identity:</strong> The UI was inspired by Järfällahus’s existing brand guidelines but softened with rounded elements and modern, mobile-first layouts to create a welcoming and approachable feel for the residents.
        </p>
        
        <p>
          <strong>Inclusive & Accessible:</strong> To accommodate varying levels of digital confidence, basic WCAG principles guided our choices. We prioritized clear iconography, readable typography, and a simplified navigation structure to ensure key features like event registration and activity hubs were easy to find.
        </p>

        <p>
          <strong>Iterative testing:</strong> Throughout the process, we continuously tested early prototypes with both our technical team (to ensure feasibility) and local residents. Their feedback drove iterations on content clarity and interaction patterns, ensuring the final design fostered inclusion and engagement.
        </p>

        <div className="project-image-wrapper">
          <img src={PhoneImage} alt="Järfällahus app" className="project-image" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        
        <p>
          The final platform successfully addressed the barriers identified in our research. By moving away from general housing information and focusing on neighborhood-specific needs, we created a digital space where residents felt informed and welcomed.
        </p>

        <p>
          Final user feedback confirmed that the platform felt intuitive and enjoyable to use. The key improvements can be summarized as:
        </p>

        <p>
          <strong>Centralized information:</strong> Simplified navigation, clear categorization, and a shared calendar made local news and events effortless to find and access.
        </p>
        
        <p>
          <strong>Increased participation:</strong> Interactive features like event registration and activity hubs successfully lowered the barrier for residents to engage at their own motivation level.
        </p>
        
        <p>
          <strong>Strengthened trust:</strong> An inclusive, mobile-first design with clear iconography and accessible language fostered a sense of belonging and perceived safety.
        </p>

        <div className="project-image-wrapper" style={{ overflow: "hidden", display: "flex", justifyContent: "center", padding: "1.5rem" }}>
          <iframe 
            style={{ border: "none", width: "100%", height: "500px", maxWidth: "420px", borderRadius: "1rem" }} 
            src="https://embed.figma.com/proto/RF0gKgH7IwxrMxnB9VxU5u/J%C3%A4rf%C3%A4lla-Hus-Wireframes?node-id=811-2965&starting-point-node-id=811%3A2965&embed-host=share" 
            allowFullScreen
            title="Järfällahus Interactive Prototype"
          ></iframe>
        </div>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>

        <p>
          <strong>Listening is designing:</strong> One of the biggest takeaways was understanding how meaningful real user voices are when shaping a solution. Talking to residents showed me that good design is less about adding features and more about listening, simplifying, and building trust through clarity.
        </p>

        <p>
          <strong>Cross-functional collaboration:</strong> Working closely with frontend, fullstack, and DevOps students highlighted how early discussions about technical feasibility help keep the design realistic and make the iteration process much smoother.
        </p>

        <p>
          <strong>Looking ahead:</strong> If I had more time, I would love to conduct further usability testing with residents in a real context to measure the platform's long-term impact. I would also explore features like multilingual support to further improve inclusivity for residents with different backgrounds.
        </p>

        <p>
          Overall, the project reinforced a core principle: empathy, clarity, and collaboration are essential when designing for diverse communities.
        </p>

        <div className="project-actions">
          <a 
            href="https://www.figma.com/proto/RF0gKgH7IwxrMxnB9VxU5u/J%C3%A4rf%C3%A4lla-Hus-Wireframes?node-id=811-2965&t=ytTDxxy6bfhO257L-1&starting-point-node-id=811%3A2965"
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

export default Project1;
