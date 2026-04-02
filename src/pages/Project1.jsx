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
    <div style={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          margin: "4rem 0",
          gap: "1.5rem"
        }}>
          <div style={{
            width: "320px",
            height: "650px",
            borderRadius: "2.5rem",
            border: "none",
            overflow: "hidden",
            backgroundColor: "#fff",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            position: "relative"
          }}>
            <iframe 
              style={{ 
                border: "none", 
                width: "100%", 
                height: "100%",
                transform: "scale(1.02)",
                transformOrigin: "center"
              }} 
              src="https://embed.figma.com/proto/sVvwWCQcIqikcSiv57Vuud/J%C3%A4rf%C3%A4llahus?node-id=811-4643&starting-point-node-id=811%3A4643&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&bg=ffffff&embed-host=share" 
              allowFullScreen
              title="Järfällahus Interactive Prototype"
            ></iframe>
          </div>
          <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic", textAlign: 'center' }}>
              Järfällahus Interactive Prototype <br/> 
              (It takes a few seconds to initialize)
          </p>
        </div>

        <section id="overview" className="project-content">
        <h2>Overview</h2>
        
        <p>
          <strong>Challenge:</strong> As part of the annual Chas Challenge, where students from UX/UI, Frontend, Fullstack, and DevOps programs work together in cross-functional teams, we collaborated with the real estate company Järfällahus to create a digital solution. The goal was to build an accessible and engaging platform to strengthen the community and simplify access to local initiatives in the Sångvägen neighborhood.
        </p>
        
        <p>
          <strong>Role:</strong> In my role as UX/UI designer, I led the user research and turned insights from local residents into design strategies and interactive prototypes. This ensured our final product helped the team address real community needs and strengthen engagement in the neighborhood rather than relying on assumptions.
        </p>

        <p>
          <strong>Result:</strong> We delivered a mobile-first prototype focused on making local initiatives easier to find and engage with. By simplifying the structure and prioritizing relevant content, the platform reduces friction and supports stronger community participation.
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
          To ensure the platform addressed real user needs, we started by conducting <strong>market research</strong> to identify best practices. Next, we carried out <strong>qualitative interviews</strong> with five residents to understand how they perceived <strong>safety, inclusion, and community engagement.</strong>
        </p>

        <p>
          From the interviews, several patterns emerged. Residents expressed low engagement and a lack of appealing local activities:
        </p>

        <div className="project-image-wrapper">
          <img src={Quotes} alt="Quotes" className="project-image" />
        </div>

        <p>
          Based on the findings, <strong>three key insights were identified:</strong>
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
          Building on these insights, we created an <strong>experience map</strong> to visualize how residents’ needs connect to the core values of <strong>Safety, Inclusion, and Vibrancy</strong>. This guided early ideation and engagement strategies.
        </p>

        <div className="project-image-wrapper">
          <img src={ExperienceMap} alt="Experience map" className="project-image" />
        </div>

        <p>
          We then defined <strong>three user archetypes</strong> based on the research. These archetypes ensured that our design decisions remained user-centered and adaptable to different levels of digital confidence and motivation.
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
          <strong>Visual identity:</strong>  The UI was inspired by Järfällahus’s existing brand guidelines but softened with rounded elements and modern layouts to create a welcoming and approachable feel for the residents.
        </p>

        <p>
          <strong>Design decisions:</strong> Based on our research, we simplified the navigation to four primary categories to reduce cognitive load and help residents quickly find relevant content. We also prioritized local events and neighborhood activities on the homepage to increase visibility and make participation feel more accessible.
        </p>

        <p>
          <strong>Inclusive & Accessible:</strong> To accommodate varying levels of digital confidence, basic WCAG principles guided our choices. We structured the content with clear hierarchy and labeling to improve scannability and reduce confusion during navigation.
        </p>

        <p>
          <strong>Iterative testing:</strong> Throughout the process, we tested early prototypes with both our technical team to ensure feasibility and with local residents. Their feedback drove iterations on content clarity and interaction patterns, resulting in a more intuitive and engaging experience.
        </p>

        <div className="project-image-wrapper">
          <img src={PhoneImage} alt="Järfällahus app" className="project-image" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        
        <p>
          The final platform addressed the main barriers identified in the research by making local information easier to access and more relevant to residents. By shifting the focus from general housing content to neighborhood-specific needs, the platform created a clearer and more engaging user experience.
        </p>

        <p>
          <strong>User testing showed</strong> that residents could more easily find local events and complete tasks with less confusion. A simplified structure and clearer content hierarchy helped reduce friction and made key features feel more accessible.
        </p>

        <p>
          The introduction of event-focused content and interactive features lowered the barrier to participation, allowing residents to engage with their community at their own level. This contributed to a stronger sense of awareness and connection within the neighborhood.
        </p>

        <p>
          Overall, the project demonstrated how small structural and content decisions can significantly improve <strong>usability, engagement, and perceived trust</strong>.
        </p>
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
          Overall, the project reinforced a core principle:<strong> empathy, clarity, and collaboration</strong> are essential when designing for diverse communities.
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