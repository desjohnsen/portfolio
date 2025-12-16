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
        Chowa is an ordering app concept for customers on the go, designed to make
        fast-paced mornings smoother while maintaining a calm and welcoming café experience
        inspired by Japanese aesthetics. The app addresses stress during peak hours for both
        customers and staff while reinforcing brand identity and everyday engagement. 
        Developed individually as part of a school assignment, the project allowed me to explore
        the concept from early assumptions to final design decisions.
      </p>
    </section>

    <section id="problem" className="project-content">
      <h2>Problem</h2>
      <p>
        Matcha enthusiasts on their way to work or school often lack the time to
        place an order without standing in line or feeling rushed. During peak
        hours, cafés face congestion at the counter, increased pressure on staff,
        and a higher risk of order mistakes.
      </p>
      <p>
        The challenge was to design a solution that enables fast and predictable
        ordering without compromising the intentional, high-quality café
        experience that defines the Chowa brand.
      </p>
    </section>

    <section id="research" className="project-content">
      <h2>Research</h2>
      <p>
        The scope of the assignment did not include user interviews, usability
        testing, or journey mapping. Instead, the project was based on assumptions
        and a proto-persona developed to reflect realistic everyday usage
        scenarios.
      </p>

      <p>
        The proto-persona, Anders, represents a matcha enthusiast commuting to
        work in the morning. He values speed and predictability and needs a
        smooth takeaway breakfast that can be pre-ordered in advance to save
        time and avoid standing in line.
      </p>

      <p>
        This helped frame the design around real-life constraints such as time
        pressure, queue avoidance, and limited attention during peak hours.
        Rather than designing from personal preference, assumptions were
        continuously questioned and grounded in these usage contexts.
      </p>

      <p>
        Through this process, two core needs became clear. Users need a fast and
        reliable way to order matcha-based drinks and desserts without standing in
        line, while the café needs a smoother ordering flow that reduces
        congestion and pressure on staff during peak hours.
      </p>
    </section>

    <section id="ideation" className="project-content">
      <h2>Ideation</h2>
      <p>
        The concept began with the idea of creating a seamless ordering experience that balances
        speed with a calm and inviting atmosphere. Different naming ideas were explored, and 
        <em> Chowa</em>, meaning balance and harmony in Japanese, was chosen. The name reflects the 
        vision and feeling behind the interface, guiding the overall tone and user experience.
      </p>
      <p>
        The ideation phase also included exploring features such as pre-ordering, saved favorites, 
        flexible pickup times, and optional account creation, evaluating them based on how well they
        reduced friction in everyday use.
      </p>
    </section>

    <section id="design" className="project-content">
      <h2>Design</h2>
      <p>
        Building on insights from the ideation phase, the interface was designed
        with a calm and intuitive structure that supports quick decision-making.
        The visual language draws from Japanese minimalism, using soft shapes,
        clear hierarchy, and restrained color usage to create a balanced and
        approachable experience.
      </p>
      <p>
        The solution was designed mobile-first, as the primary interaction context
        involved users ordering while commuting. Key actions were kept short and
        clearly visible to support speed and clarity. A tablet version was also
        designed to demonstrate scalability, while remaining consistent with the
        mobile experience.
      </p>
      <p>
        Accessibility and inclusivity were considered throughout the design
        process. Clear iconography, readable typography, sufficient contrast, and
        simple navigation structures were used to support users with varying
        levels of digital confidence. Basic WCAG principles guided decisions
        around contrast and text sizing to improve overall usability.
      </p>
    </section>

    <section id="visual-identity" className="project-content">
      <h2>Visual Identity</h2>
      <p>
        The visual identity is built around the concept of balance, harmony, and playfulness, reflecting the meaning of the name Chowa. 
        I designed and illustrated the logo, featuring a playful character balancing a cup, which embodies these principles and sets the
        tone for the overall interface. The minimalistic forms, rounded shapes, and simple lines create a cohesive and approachable brand
        expression, carried consistently through icons and other vector elements.
      </p>
      <p>
        Typography was chosen to complement the visual language and support readability across mobile and tablet interfaces. Alexandria
        serves as the primary typeface for both headings and body text, providing a clear hierarchy and a modern, neutral character.
        Arial is used for labels and supporting UI text, prioritizing clarity and functionality. Fredoka One was selected for the logotype
        to convey a friendly and welcoming tone, while Figma Hand is used for the slogan, adding a personal and human touch.
      </p>
      <p>
        The color palette consists of natural, earthy tones inspired by matcha and Japanese aesthetics. Greens represent freshness and harmony,
        while beige and white provide contrast, clarity, and balance. These colors, combined with the forms and typography, reinforce the overall
        brand identity and create a harmonious, inviting, and cohesive experience across the app.
      </p>
    </section>

    <div className="project-image-wrapper">
      <img src={phoneImage} alt="Chowa mobile UI" className="project-image" />
    </div>

    <section id="outcome" className="project-content">
      <h2>Outcome</h2>
      <p>
        The final concept addresses user and business needs by providing a clear, calm, and efficient ordering experience. 
        By focusing on intuitive navigation, clear visual hierarchy, and consistent branding, it streamlines the ordering process, 
        makes everyday routines smoother for users, and reduces stress at peak hours for café staff.
      </p>
    </section>

    <section id="reflection" className="project-content">
      <h2>Reflection</h2>
      <p>
        Working on this project reinforced the importance of keeping user needs at the center while turning abstract ideas into a concrete interface.
        I learned how subtle design choices like visual hierarchy, spacing, and typography can greatly influence how calm and intuitive an experience feels.
      </p>
      <p>
        One key takeaway was the value of prioritizing simplicity over adding features. Focusing on calm, predictable, and easy-to-use interactions 
        strengthened my ability to create interfaces that are both functional and welcoming.
      </p>
      <p>
        Looking ahead, the concept could expand with features such as app-exclusive rewards, personalized recommendations, or multilingual support, 
        while testing with real users would validate assumptions and ensure the app continues to offer a calm, intuitive, and enjoyable experience.
      </p>
    </section>
    
  </ProjectLayout>
 );
};

export default Project2;
