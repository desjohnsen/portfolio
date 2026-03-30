import React from 'react';
import ProjectLayout from "../components/ProjectLayout"
import phoneImage from "../assets/images/Chowa.png"; 

const Project2 = () => {
  return (
    <ProjectLayout
      title="Chowa"
      subtitle="A mobile app concept created to reduce stress during peak hours while reinforcing brand identity."
      role="UI/UX Designer"
      timeframe="8 weeks"
      tools="Figma"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          <strong>Challenge:</strong> Chowa is an ordering app concept designed for a fictional matcha café. The challenge was to solve a common friction point: how to make fast-paced morning orders smoother for commuters, while maintaining the calm, welcoming, and high-quality experience inspired by Japanese aesthetics that defines the brand.
        </p>

        <p>
          <strong>Role:</strong> As a UI/UX Designer for this 8-week school assignment, I led the concept development from early assumptions to final decisions. I was responsible for the conceptual framework, exploring user flows, and creating the final visual identity and interface design.
        </p>

        <p>
          <strong>Outcome:</strong> The project resulted in a mobile-first design that addresses peak-hour stress for both customers and staff. The final concept successfully balances intuitive, fast navigation with cohesive branding that reinforces everyday engagement.
        </p>
      </section>

      <section id="problem" className="project-content">
        <h2>Problem</h2>
        <p>
          Matcha enthusiasts on their way to work or school often lack the time to place an order without standing in line or feeling rushed. During peak hours, cafés face congestion at the counter, increased pressure on staff, and a higher risk of order mistakes.
        </p>

        <p>
          The core problem was designing a solution that enables fast and predictable ordering without compromising the intentional, high-quality café experience. This broke down into three main challenges:
        </p>

        <p>
          <strong>Customer friction:</strong> Commuters value speed and predictability, and avoid long queues during stressful mornings.
        </p>

        <p>
          <strong>Staff overload:</strong> Congestion at the counter creates an unsustainable work environment for the staff and increases wait times.
        </p>

        <p>
          <strong>Brand inconsistency:</strong> The rushed, chaotic environment during peak hours directly contradicts the calm and harmonious feeling the Chowa brand aims to convey.
        </p>
      </section>

      <section id="research" className="project-content">
        <h2>Research</h2>
        <p>
          <strong>Working with constraints:</strong> The scope of the assignment did not include traditional user interviews or usability testing. Instead, I took a Lean UX approach, basing the project on market assumptions and a proto-persona to simulate realistic, fast-paced usage scenarios.
        </p>

        <p>
          <strong>Meet Anders:</strong> The primary proto-persona represents a matcha enthusiast commuting to work in the morning. He values speed and predictability, needing a smooth takeaway breakfast that can be pre-ordered in advance to save time and avoid standing in line.
        </p>

        <p>
          <strong>Defining core needs:</strong> Grounding the design in real-life constraints (like time pressure and queue avoidance) made two core needs clear. Users need a fast, reliable way to order without queuing, while the café needs a smoother ordering flow to reduce peak-hour pressure on staff.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        
        <p>
          <strong>The concept of Chowa:</strong> The ideation phase began with the goal of creating a seamless ordering experience that balances speed with a calm, inviting atmosphere. The name <em>Chowa</em>, meaning balance and harmony in Japanese, was chosen to reflect the vision and feeling behind the interface, guiding the overall tone.
        </p>
        
        <p>
          <strong>Feature exploration:</strong> Ideation included exploring features such as pre-ordering, saved favorites, flexible pickup times, and optional account creation, evaluating them based on how well they reduced friction in everyday use.
        </p>

        <p>
          <strong>Visual identity:</strong> The visual language draws from Japanese minimalism. I designed and illustrated a logo featuring a playful character balancing a cup, setting an approachable tone. The minimalist forms, rounded shapes, and simple lines create a cohesive brand expression carried consistently through icons and vector elements.
        </p>

        <p>
          <strong>Typography & Colors:</strong> Alexandria serves as the primary typeface for clear hierarchy and a modern character, while Fredoka One gives the logotype a friendly, welcoming touch. The color palette consists of natural, earthy tones inspired by matcha. Green represents freshness, while beige and white provide clarity and balance.
        </p>

        <p>
          <strong>Mobile-first UX:</strong> Since the primary interaction context is users commuting, the solution was designed mobile-first. Guided by basic WCAG principles, clear iconography, readable typography, and sufficient contrast were implemented to support users with varying levels of digital confidence and quick decision-making.
        </p>

        <div className="project-image-wrapper">
          <img src={phoneImage} alt="Chowa mobile UI" className="project-image" />
        </div>
      </section>

      <section id="outcome" className="project-content">
        <h2>Outcome</h2>
        <p>
          The final concept is designed to address both user and business needs by providing a clear, calm, and efficient ordering experience that respects the Chowa brand.
        </p>

        <p>
          <strong>Smoother routines:</strong> The intuitive navigation and clear visual hierarchy aim to streamline the ordering process and save valuable time for busy commuters.
        </p>

        <p>
          <strong>Reduced stress:</strong> By allowing customers to order ahead through the app, the concept aims to significantly lower counter congestion and relieve pressure on staff during peak hours.
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
          <strong>Looking ahead:</strong> To take this concept further, the next crucial step would be testing with real users to validate my assumptions. I would also love to explore features like multilingual support or personalized rewards to further enhance the everyday café experience.
        </p>
      </section>
  </ProjectLayout>
 );
};

export default Project2;
