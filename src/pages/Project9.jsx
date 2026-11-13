import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageOverlay from '../components/ImageOverlay';
import bontiOrganizer from '../assets/images/bonti-organizer-cutout.png';
import bontiResearchInsights from '../assets/images/bonti-research-insights.svg';
import bontiTactileZones from '../assets/images/bonti-tactile-zones.svg';

const Project9 = () => (
  <ProjectLayout
    title="Bonti"
    subtitle="A tactile organizer system for early parenthood"
    role="Product Designer"
    timeframe="5 weeks"
    tools="Figma"
  >
    <section id="overview" className="project-content">
      <h2>Overview</h2>
      <p>
        Bonti is a well-established Swedish retail brand and online shop specializing in products for babies, young children, and parents. Reselling over 200 external brands leaves minimal retail margin, so they tasked us with designing an ownable product for their sub-brand to strengthen customer loyalty and profitability for first-time parents.
      </p>
      <p>
        My focus centered on qualitative synthesis, sensory accessibility, and ensuring strict traceability from user research to the final concept.
      </p>
    </section>

    <section id="problem" className="project-content">
      <h2>Problem</h2>
      <p>
        Parenthood introduces high cognitive load and unpredictable demands. Traditional diaper bags act as deep, chaotic sacks that require two hands, good lighting, and calm conditions just to find a single item.
      </p>
      <blockquote>“Too much to carry. Too little time to search.”</blockquote>
      <p>
        Our goal was to eliminate the panic of searching blindly in high-stress moments without adding unnecessary clutter to the market.
      </p>
    </section>

    <section id="research" className="project-content">
      <h2>Research</h2>
      <p>
        Through interviews with parents and retail observations, we uncovered severe <strong>choice fatigue</strong> and <strong>packing stress</strong>. Parents did not want more baby gadgets; they wanted clarity on what actually works.
      </p>
      <p>
        Our research also invalidated two early assumptions: parents found Bonti’s online store calm and easy to navigate, and they firmly rejected a paid membership. This led to our core design rule: <em>“Every essential has an address.”</em>
      </p>
      <figure className="bonti-figure">
        <div className="project-image-wrapper bonti-visual">
          <ImageOverlay
            src={bontiResearchInsights}
            alt="Three research themes: clearer product choices, less overwhelm and practical everyday use."
          />
        </div>
        <figcaption>Research themes translated into a product direction.</figcaption>
      </figure>
    </section>

    <section id="design" className="project-content">
      <h2>Design</h2>
      <p>
        We designed <strong>Bonti Bon</strong>, a modular insert organizer that nests inside existing strollers and totes. Because infant care often happens in the dark or with one arm occupied, we designed for touch rather than sight using <strong>three distinct tactile zones</strong> for hygiene, feeding, and personal essentials.
      </p>
      <p>
        Oversized pull-tabs and dual handles allow <strong>one-handed retrieval</strong> while holding a baby, while movable dividers let the organizer adapt into toy or home storage as the child grows.
      </p>
      <figure className="bonti-figure">
        <div className="project-image-wrapper bonti-visual">
          <ImageOverlay
            src={bontiOrganizer}
            alt="Bonti Bon stroller insert organiser with divided compartments and CHANGE, FEED and COMFORT labels."
          />
        </div>
        <figcaption>Bonti Bon keeps everyday essentials visible and grouped in one insert.</figcaption>
      </figure>
      <figure className="bonti-figure">
        <div className="project-image-wrapper bonti-visual">
          <ImageOverlay
            src={bontiTactileZones}
            alt="The three Bonti Bon zones use ribbed corduroy, smooth canvas and wave-textured nylon to help identify items by touch."
          />
        </div>
        <figcaption>Distinct textures make each zone easier to recognise by touch.</figcaption>
      </figure>
    </section>

    <section id="outcome" className="project-content">
      <h2>Outcome</h2>
      <p>
        Prototype testing confirmed that designated tactile compartments reduced packing anxiety and simplified hand-offs between caregivers. Testing also revealed a critical iteration: wet wipes need instant exterior access rather than sitting inside an enclosed pocket.
      </p>
      <p>
        Following the group delivery, my individual 8-minute HCD evaluation received <strong>Pass with Distinction</strong>, commended for method traceability, sensory accessibility depth, and transparent critique of our design compromises.
      </p>
    </section>

    <section id="reflection" className="project-content">
      <h2>Reflection</h2>
      <p>
        Auditing the project individually revealed where commercial incentives challenged human-centered values. All 11 of our initial <em>How Might We</em> statements focused on community and digital onboarding; pivoting to a physical bag was driven by retail margins rather than a direct line from user ideation.
      </p>
      <p>
        Furthermore, rushing our final slides in Lovable resulted in poor color contrast that failed WCAG AA standards. Moving forward, I carry three core rules into every project: validate tactile ideas with early physical prototypes, enforce WCAG audits from day one, and hold business viability accountable to circular sustainability.
      </p>
    </section>
  </ProjectLayout>
);

export default Project9;