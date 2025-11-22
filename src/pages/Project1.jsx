import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import phoneImage from "../assets/images/jarfallahus.png";
import GroupPhoto from "../assets/images/GroupPhoto.jpg";
import ExperienceMap from "../assets/images/experiencemap.png";

import "../styles/ProjectLayout.css";

const Project1 = () => {
  return (
    <ProjectLayout
      title="Järfälla hus"
      subtitle="A digital platform with Järfälla hus to enhance community engagement and simplify access to local activities."
      role="UI/UX Designer"
      timeframe="10 weeks"
      tools="Figma"
    >
      <p style={{ fontStyle: 'italic', color: '#555', textAlign: 'center', marginBottom: '1rem' }}>
        Work in progress: This case study is not finalized yet.
      </p>

      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          The project aimed to strengthen the reputation of <strong>Sångvägen</strong>, 
          a residential area in Järfälla, by creating a welcoming and vibrant digital platform 
          dedicated to its community. Unlike Järfälla hus’s general corporate website, this platform 
          was designed specifically for residents of Sångvägen, with the goal of 
          <strong> increasing engagement, fostering inclusion, and building trust</strong>.
        </p>
        <p>
          The platform was developed in close collaboration with <strong>Järfälla hus </strong> 
          and local stakeholders, as part of a real client project during our studies at  
          <strong> Chas Academy</strong>. It was shaped by real user insights and built by 
          a cross-functional team of 11 students:
        </p>
        <div className="project-image-wrapper">
          <img src={GroupPhoto} alt="Group photo" className="project-image" />
        </div>
        <p>
          👩‍🎨 <strong>2 UX/UI designers</strong><br />
          ⚙️ <strong>2 DevOps engineers</strong><br />
          💻 <strong>7 fullstack developers (open source stack)</strong>
        </p>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        <p>
          <strong>Sångvägen</strong> faced challenges with low community engagement and a lack of 
          accessible communication channels between residents and organizers.
        </p>
        <p>
          <strong>Järfälla hus’s official website</strong> provided general housing information, 
          but it did not address local activities or neighborhood-specific needs. As a result, 
          residents often felt disconnected and uninformed about events, initiatives, and opportunities to participate. 
        </p>
        <p>
          Our challenge was to design a dedicated platform for Sångvägen that:
        </p>
        <p><strong>Provides</strong> clear, accessible information tailored to the neighborhood</p>
        <p><strong>Encourages</strong> participation and strengthens community ties</p>
        <p><strong>Builds</strong> a positive digital identity that reflects safety, inclusion, and vibrancy</p>
      </section>

      <section id="goals" className="project-content">
        <h2>Goals</h2>
        <p>
          To address these challenges, our goal was to design a platform that would 
          not only strengthen community ties, but also remain accessible, inclusive, 
          and aligned with the residents’ real needs.
        </p>
        <p><strong>Create</strong> a modern, intuitive platform aligned with Järfälla hus branding.</p>
        <p><strong>Increase</strong> engagement through local activities and simple event registration.</p>
        <p><strong>Foster</strong> trust and inclusion across families, youth, seniors, and multicultural groups.</p>
        <p><strong>Ensure</strong> accessibility and ease of use for less tech-savvy users.</p> 
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          To ensure the platform addressed real user needs, we conducted <strong>qualitative interviews </strong> 
          with residents of <strong>Sångvägen</strong> and the wider Järfälla area. The goal was to understand how residents 
          perceived safety, inclusion, and their preferred ways of engaging with the community.
        </p>
        <p>
          Our research was complemented with <strong>experience mapping, guerrilla testing, and usability testing</strong>, 
          which allowed us to observe behaviors, uncover pain points, and identify opportunities for improvement.
        </p>

        <div className="project-image-wrapper">
          <img src={ExperienceMap} alt="Experience map" className="project-image" />
        </div>

        <p>
          The experience map visually connects our three behavioral user types with the core values 
          <strong> Inspiring, Community and Safety</strong>, leading to <strong>Increased Community Engagement</strong>. 
          It served as a foundation for generating ideas and guiding the design process.
        </p>

        <p>From these combined methods, several key insights emerged:<br />
          <strong>Transparency:</strong> residents wanted clear, direct communication.<br />
          <strong>Mobile-first:</strong> most preferred accessing information on their phones.<br />
          <strong>Inclusion:</strong> some felt excluded from existing channels and needed accessible, easy-to-understand content.
        </p>


        <p>Based on these insights, we defined <strong>three user archetypes</strong> that guided the design:</p>
        <p>👀 <strong>The Unaware</strong> low drive but responsive to inspiring, simple content.</p>
        <p>🫀 <strong>The Empathetic</strong> values inclusion and seeks community participation.</p>
        <p>☀️ <strong>The Optimist</strong> digitally engaged, proactive, and active on social media.</p>

        <p>
          This research phase provided a solid foundation for ideation and design, 
          ensuring that every decision was grounded in real user needs and behaviors.
        </p>
      </section>

      <section id="ideation" className="project-content">
        <h2>Ideation</h2>
        <p>
          Our concept was inspired by Järfälla hus’s corporate identity (colors, typography) but softened with rounded UI components and modern layouts to feel approachable.
        </p>
        <p>
          Early wireframes explored simple navigation flows and accessibility for all age groups.
        </p>
        <p>
          The design process was iterative, shaped by continuous feedback from developers, DevOps, and residents.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          <strong>Clarity & simplicity:</strong> clean layout, intuitive navigation, consistent iconography.<br />
          <strong>Approachability:</strong> rounded corners, warm colors, human-centered visual tone.<br />
          <strong>Engagement:</strong> prominent CTA buttons for signing up for events or browsing activities.<br />
          <strong>Accessibility:</strong> large tap areas, responsive layouts, and optimized text readability.
        </p>

        <div className="project-image-wrapper">
          <img src={phoneImage} alt="Järfälla hus app" className="project-image" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        <p>
          We tested the platform through both guerrilla usability testing in public spaces and structured sessions with local residents.
        </p>
        <p>
          Key improvements after testing included adding scroll cues to guide less digital-native users, simplifying navigation structure for clarity, and improving button labeling for consistency and accessibility.
        </p>
        <p>
          Feedback was positive: residents appreciated the platform’s clarity, friendliness, and relevance to daily life.
        </p>
        <p>
          Impact: The project gave residents a dedicated digital space to connect with their neighborhood, strengthened trust between Järfälla hus and residents, and provided scalable tools for participation.
        </p>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          This project was not just about building a digital tool, but about shaping a sense of community identity online. 
          By focusing on Sångvägen’s unique needs, we showed how design can transform perceptions of safety, belonging, and participation at a local level.
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
