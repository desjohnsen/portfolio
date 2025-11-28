import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import phoneImage from "../assets/images/jarfallahus.png";
import GroupPhoto from "../assets/images/GroupPhoto.jpg";
import ExperienceMap from "../assets/images/experiencemap.jpg";
import UserArchetypes from "../assets/images/userarchetypes.jpg";
import keyConcepts from "../assets/images/keyconcepts.jpg";
import KeyOutcomes from "../assets/images/Keyoutcomes.png";
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
          As part of Chas Challenge, an annual initiative at Chas Academy where students from UX/UI, Frontend, Fullstack, and DevOps programs work together in cross-functional teams to develop
          digital solutions for real clients, we collaborated with Järfällahus and local stakeholders to create an accessible and engaging platform for Sångvägen, a residential area in Järfälla.
        </p>
        <p>
          In my role as UX/UI designer, I led the user research and turned insights from local residents into design strategies and interactive prototypes, helping the team address real community needs and strengthen engagement in the neighborhood.
        </p>
        <div className="project-image-wrapper">
          <img src={GroupPhoto} alt="Group photo" className="project-image" />
        </div>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        <p>
          Sångvägen faces socioeconomic challenges, including low community engagement and a lack of accessible communication channels. 
          As part of a broader initiative to improve safety, Järfällahus planned to transform underutilized parking structures into community activity hubs.
        </p>
        <p>
          However, the existing digital presence was insufficient to support this transformation. Järfällahus’ official website provided general housing information
          but failed to address neighborhood-specific needs. This left residents disconnected and uninformed about these new local initiatives and opportunities to participate. 
        </p>
        <p>
          Our challenge was to design a dedicated platform tailored to Sångvägen’s specific needs. We aimed to create a digital space that not only simplified access to information
          but also actively strengthened community ties, ultimately fostering safety, inclusion, and vibrancy.
        </p>
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          To ensure the platform addressed real user needs, we started by conducting market research to understand how other municipalities engage residents digitally and build trust. 
          This helped us identify best practices and informed our approach for Sångvägen.
        </p>
        <p>
          Next, we carried out qualitative interviews with five residents, including two with experience living specifically in Sångvägen. 
          The goal was to understand how residents perceive safety, inclusion, and community engagement, and to gather insights on how a dedicated platform could support a stronger, more connected neighborhood.
        </p>
        <p>
          From the interviews, several patterns emerged. Residents expressed low engagement and a lack of appealing local activities:
        </p>
        <div className="project-image-wrapper">
          <img src={Quotes} alt="Quotes" className="project-image" />
        </div>
        <p>
          Participants also emphasized the need for accessible digital information, especially regarding local news, events and family-friendly initiatives. Suggestions included event notifications, calendars,
          clearer categorization, and community-driven content.
        </p>
        <p>
          Based on the findings, several key insights were identified. Residents emphasized the importance of transparent communication, mobile-first access, and content that feels inclusive and easy to understand.
          We also noticed that engagement levels varied depending on motivation, digital habits, and preferred ways of interacting with the community.
        </p>
        <p>
          Building on these insights, we created an experience map to visualize how residents’ needs connect to the core values of Safety,
          Inclusion, and Vibrancy. This guided early ideation and helped us structure engagement strategies for different types of users.
        </p>
        <div className="project-image-wrapper">
          <img src={ExperienceMap} alt="Experience map" className="project-image" />
        </div>
        <p>
          We then defined three user archetypes based on the research insights. These archetypes ensured that our design decisions remained user-centered and adaptable to different levels of digital confidence
          and motivation to engage. They also influenced interaction flows, content hierarchy and tone of voice throughout the project.
        </p>
        <div className="project-image-wrapper">
          <img src={UserArchetypes} alt="User archetypes" className="project-image" />
        </div>
        <p>
          This research phase provided a solid foundation for ideation and design, ensuring that every decision was grounded in real user needs and behaviors.
        </p>
      </section>

      <section id="ideation" className="project-content">
        <h2>Ideation</h2>
        <p>
          Based on the insights from research, we explored various ways to address the challenges faced by Sångvägen residents. Our goal was to create a platform
          that felt welcoming, accessible, and engaging for different user archetypes.
        </p>
        <p>
          We brainstormed ideas as a cross-functional team, considering both the content and interaction patterns that would best support safety, inclusion, and vibrancy  
          in the community. The experience map and user archetypes guided our discussions, helping us prioritize features and functionalities that mattered most to residents.
        </p>
        <p>
          <strong>Key concepts that emerged included:</strong>
        </p>
        <div className="project-image-wrapper">
          <img src={keyConcepts} alt="Key concepts visual summary" className="project-image" />
        </div>
        <p>
          These ideas served as the foundation for creating wireframes and prototypes, allowing us to quickly test assumptions and iterate based on user feedback.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          Building on the concepts from our ideation phase, we moved into designing the platform’s interface. The visual identity was inspired by Järfällahus’s branding colors,
          typography, and overall tone but softened with rounded UI elements and modern layouts to create a welcoming and approachable feel.
        </p>
        <p>
          Wireframes and prototypes focused on intuitive navigation, ensuring accessibility for all user archetypes. Mobile-first design guided our layouts, as most residents preferred
          interacting via smartphones. Key features like event registration, activity hubs, and neighborhood updates were carefully positioned to encourage participation and community engagement.
        </p>
        <p>
          Throughout the design phase, the process remained iterative. We continuously tested wireframes and early prototypes with developers, DevOps, and residents, incorporating feedback to refine
          interaction patterns, accessibility, and content clarity. Every adjustment aimed to strengthen the platform’s safety, inclusivity, and vibrancy while maintaining a user-friendly experience for residents with varying digital habits.
        </p>

        <div className="project-image-wrapper">
          <img src={phoneImage} alt="Järfällahus app" className="project-image" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        <p>
          The platform successfully addressed the challenges identified in the research phase by providing residents with a clear, accessible and engaging way to connect with their neighborhood.
        </p>
        <p>
          Throughout the project, we continuously tested our interactive prototypes with residents to observe real behaviors and reactions. These usability sessions helped us refine navigation, 
          improve content clarity and enhance the feeling of trust and belonging. Iterations were guided by what users struggled with and what they naturally gravitated toward, ensuring that changes contributed to a smoother and more intuitive experience.
        </p>
        <p>
          The final platform helped overcome several key barriers to engagement. Information became easier to find as neighborhood updates, event registration and activity hubs were clearly structured and centralized. Engagement increased through interactive
          features that encouraged participation across different levels of motivation. The visual tone and wording supported feelings of safety and inclusion, while a mobile-first approach ensured that the platform could be accessed easily by residents with varying levels of digital confidence.
        </p>
        <p>
          To highlight the impact visually, a key outcomes summary was created to show how insights from the research were turned into practical improvements across usability, engagement and trust.
        </p>
        <div className="project-image-wrapper">
          <img src={KeyOutcomes} alt="Key outcomes visual summary" className="project-image" />
        </div>
        <p>
          User feedback confirmed that the final platform felt intuitive and enjoyable to use, while remaining closely aligned with the needs of the local community.
        </p>
       
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          This project strengthened my ability to move from research insights to concrete design decisions. Throughout the process, I was reminded
          of the value of real user feedback, not just to validate ideas, but to challenge assumptions and simplify what felt complex in the beginning.
        </p>
        <p>
          Working closely with developers and DevOps also highlighted how collaboration shapes better outcomes. Early discussions around feasibility helped keep the design realistic and made iteration smoother.
        </p>
        <p>
          Overall, the project reinforced a core principle: empathy, clarity, and collaboration are essential when designing for diverse communities.
        </p>
        <a 
          href="https://www.figma.com/proto/RF0gKgH7IwxrMxnB9VxU5u/J%C3%A4rf%C3%A4lla-Hus-Wireframes?node-id=811-2965&t=ytTDxxy6bfhO257L-1&starting-point-node-id=811%3A2965"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          View prototype
        </a>
      </section>
    </ProjectLayout>
  );
};

export default Project1;
