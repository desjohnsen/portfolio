import React from 'react';
import ProjectLayout from "../components/ProjectLayout";
import phoneImage from "../assets/images/Chowa.png";

const Project1 = () => {
  return (
    <ProjectLayout
      title="Järfällahus"
      subtitle="A collaborative digital platform with Järfällahus to enhance community engagement and simplify access to local activities."
      role="UI/UX Designer"
      timeframe="10 weeks"
      tools="Figma"
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>Our mission was to improve Sångvägen’s reputation by creating a welcoming and vibrant digital platform that fosters a sense of safety, inclusion, and community.<br /><br /> 
           Developed in close collaboration with Järfällahus and local stakeholders as part of a real client project during our studies at Chas Academy, the platform was informed by real user insights and built by a cross-functional team of 11 students:<br /><br />
           👩‍🎨 <strong>2 UX/UI designers</strong> <br />
          ⚙️ <strong>2 DevOps engineers</strong>  <br />
          💻 <strong>7 fullstack developers (open source stack)</strong>

        </p>
      </section>

      <section id="problem">
        <h2>Problem</h2>
        <p>Sångvägen faced challenges with low engagement and a lack of clear, accessible communication channels.<br /><br /> The existing official website was too general and difficult to navigate, leaving residents disconnected from community activities.<br /><br /> 
           Our challenge was to build a simple, inviting platform that would improve the area's image by inspiring trust, encouraging participation, and making local information easily accessible.</p>
      </section>

      <section id="goals">
        <h2>Goals</h2>
        <p>
        - <strong> Create </strong> a visually appealing, intuitive platform consistent with Järfällahus branding but with a fresh, modern twist <br /><br />
         - <strong> Increase </strong> resident engagement by promoting local activities and enabling easy event registration. <br /><br />
         - <strong> Foster </strong> a stronger sense of community and inclusion across diverse user groups including families, youth, and seniors. <br /><br />
         - <strong> Ensure </strong> accessibility and ease of use, especially for less tech-savvy users.</p>
      </section>

      <section id="research">
        <h2>Research</h2>
        <p>We conducted qualitative user interviews with residents of Sångvägen and the wider Järfälla area to understand perceptions of safety, inclusion, and community involvement.<br /><br /> 
           These insights revealed that transparency, accessible language, and mobile-friendly content were essential to reach a broad demographic. <br /><br />
           From the data, we identified three primary behavioral user types that shaped our design focus: <br /><br />
           <strong> 👀 The Unaware </strong> – low drive but responsive to clear, inspiring content; prefers traditional or passive channels <br /><br />
           <strong> 🫀 The Empathetic </strong> – values inclusion and seeks participation in community-building events <br /><br />
           <strong> ☀️ The Optimist </strong> – hopeful and observant; engages more digitally, particularly via social platforms <br /><br />
           These personas helped us prioritize clarity, engagement, and visual cues throughout the user journey.</p>
      </section>

      <section id="ideation">
        <h2>Ideation</h2>
        <p>Inspired by Järfällahus’s existing website, we retained core visual elements such as fonts and colors, while introducing softer UI components to modernize and humanize the interface.<br /><br />
           Early wireframes emphasized intuitive navigation and accessibility for all age groups.<br /><br />
           The ideation process was highly collaborative, involving continuous feedback loops between UX designers, fullstack developers, and DevOps engineers to ensure technical feasibility and user-centered design.</p>
      </section>

      <section id="design">
        <h2>Design</h2>
        <p>Our final high-fidelity design included:<br /><br />
        <strong>- A clean </strong>, accessible interface with rounded corners for a softer look.<br /><br />
        <strong>- Clear </strong> CTA buttons for event registration and information browsing.<br /><br />
        <strong>- Responsive </strong> layouts optimized for both desktop and mobile.<br /><br /> 
        <strong>- Visual </strong>cues and feedback incorporated to guide users, especially seniors and digitally inexperienced residents.</p>
        <img src={phoneImage} alt="Järfällahus app" className="project-image" />
      </section>

      <section id="outcome">
        <h2>Outcome</h2>
        <p>We conducted both guerrilla usability tests in public spaces and structured user testing sessions with residents.<br /><br />
           The feedback informed several design improvements, including clearer scroll cues, better button labeling, and simplified navigation.<br /><br />
           The platform was well received and appreciated for its clarity, friendliness, and relevance to everyday life in Sångvägen.<br /><br />
           In the end, the project contributed to a more approachable digital presence and gave residents better tools to connect with each other and their community.</p>
      </section>

    </ProjectLayout>
  );
};

export default Project1;
