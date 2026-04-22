import React from 'react';
import ProjectLayout from "../components/ProjectLayout"
import ImageOverlay from "../components/ImageOverlay";
import phoneImage from "../assets/images/Chowa.png"; 

const Project2 = () => {
  return (
    <ProjectLayout
      title="Chowa"
      subtitle="A mobile ordering concept designed to simplify peak-hour takeaway. "
      role="UI/UX Designer"
      timeframe="8 weeks"
      tools="Figma"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          <strong>Challenge:</strong> Chowa explores how a mobile ordering app could make busy morning takeaway feel smoother and more predictable for commuters, without losing the calm, high-quality experience that defines the brand.
        </p>

        <p>
          <strong>Role:</strong> As the UI/UX Designer in this 8-week school project, I led the concept from early assumptions to final design decisions. I was responsible for shaping the concept, defining the user flow, and creating the final visual identity and interface design.
        </p>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        <p>
          For commuters on their way to work or school, ordering breakfast often means standing in line, feeling rushed, or skipping it altogether. During peak hours, that creates pressure on both customers and staff while weakening the calm experience the cafe wants to offer.
        </p>

        <p>
          <strong>Goal:</strong> Design a mobile ordering flow that feels fast and predictable for users while still reflecting the calm, intentional experience the Chowa brand aims to create.
        </p>

        <p>
          <strong>Customer friction:</strong> Morning commuters want a quick, predictable takeaway routine without long queues.
        </p>

        <p>
          <strong>Staff overload:</strong> Counter congestion increases wait times and adds pressure during the busiest part of the day.
        </p>

        <p>
          <strong>Brand inconsistency:</strong> A rushed pickup experience conflicts with the calm, welcoming feeling the brand aims to convey.
        </p>
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          <strong>Working with constraints:</strong> Since interviews and usability testing were outside the scope of the assignment, I used a Lean UX approach based on market assumptions and a proto-persona.
        </p>

        <p>
          <strong>Proto-persona:</strong> Anders represents a matcha enthusiast commuting to work in the morning. He values speed and predictability and wants a takeaway breakfast that can be pre-ordered without standing in line.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        
        <p>
          <strong>The concept of Chowa:</strong> Chowa was designed as a mobile-first concept centered on quick ordering, predictable pickup, and a calm visual tone. The name <em>Chowa</em>, meaning balance and harmony, helped guide the overall direction of the interface.
        </p>

        <p>
          <strong>Visual identity:</strong> I designed and illustrated a playful logo character balancing a cup to give the brand a softer, more approachable tone. Rounded shapes, simple illustrations, and consistent iconography helped create a cohesive expression across the interface.
        </p>

        <p>
          <strong>Typography & Colors:</strong> Alexandria supports hierarchy and clarity, while Fredoka One adds warmth to the logotype. The palette uses earthy tones inspired by matcha, with green for freshness and beige and white for a calm, balanced expression.
        </p>

        <p>
          <strong>Mobile-first UX:</strong> Since the app is designed for users on the go, the solution was built mobile-first. Guided by basic WCAG principles, it uses clear iconography, readable typography, and sufficient contrast to support quick decisions and users with different levels of digital familiarity.
        </p>

        <div className="project-image-wrapper">
          <ImageOverlay src={phoneImage} alt="Chowa mobile UI" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        <p>
          <strong>Final concept:</strong> The result is a mobile ordering concept that translates the Chowa brand into a calmer, more predictable takeaway experience.
        </p>

        <p>
          <strong>Intended impact:</strong> Features such as pre-ordering, simplified flows, and a softer visual system were designed to reduce peak-hour friction for commuters while helping staff handle busy mornings more smoothly.
        </p>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          <strong>Simplicity is key:</strong> One of my biggest takeaways was the value of prioritizing simplicity over adding features. Focusing on calm and predictable interactions strengthened my ability to create interfaces that are both functional and welcoming.
        </p>

        <p>
          <strong>The power of subtlety:</strong> I learned how subtle design choices such as visual hierarchy, spacing, and typography can dramatically influence how calm and intuitive an experience feels for the end user.
        </p>

        <p>
          <strong>Looking ahead:</strong> To take this concept further, the next crucial step would be testing with real users to validate my assumptions. I would also love to explore features like multilingual support or personalized rewards to further enhance the everyday cafe experience.
        </p>
      </section>
  </ProjectLayout>
 );
};

export default Project2;
