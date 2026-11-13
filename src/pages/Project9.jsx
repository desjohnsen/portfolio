import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageOverlay from '../components/ImageOverlay';
import bontiOrganizer from '../assets/images/bonti-organizer-cutout.png';
import bontiResearchInsights from '../assets/images/bonti-research-insights.svg';
import bontiTactileZones from '../assets/images/bonti-tactile-zones.svg';

const Project9 = () => (
  <ProjectLayout
    title="Bonti"
    subtitle="Humanity-centered organizer system"
    role="Product Designer"
    timeframe="5 weeks"
    tools="Figma"
  >
    <section id="overview" className="project-content">
      <h2>Overview</h2>
      <p>
        Swedish nursery retailer Bonti curates products from more than 200 external brands, meaning supplier margins leave little retail profit. To strengthen long-term loyalty and business margins, Bonti tasked our team with designing an ownable product for its sub-brand aimed at first-time parents.
      </p>
      <p>
        Early on, we established two guiding agreements: never assume personal experience reflects everyone’s reality, and never fall in love with the solution too early. Using the Double Diamond framework, my personal focus centered on synthesizing qualitative findings, advocating for sensory accessibility, and auditing the traceable chain from user research to final execution.
      </p>
    </section>

    <section id="problem" className="project-content">
      <h2>Problem</h2>
      <p>
        Entering parenthood introduces high cognitive load and unpredictable physical demands. Through our exploratory mapping, we found that traditional diaper bags act as deep, chaotic sacks where small essentials get lost, requiring two hands, full lighting, and calm conditions to locate anything.
      </p>
      <blockquote>“Too much to carry. Too little time to search.”</blockquote>
      <p>
        The challenge was not to add more consumer clutter to a saturated nursery market, but to eliminate the everyday panic and friction of searching blindly while caring for an infant under stress.
      </p>
    </section>

    <section id="research" className="project-content">
      <h2>Research</h2>
      <p>
        We conducted semi-structured interviews with new and experienced parents, paired with retail observations and assumption testing. Conversations with parents like Viktoria, a mother of three, revealed deep fatigue around endless retail choices. She emphasized needing clarity on what is actually worth buying rather than more options. Others, like Pavlo and Irina, highlighted how packing and unpacking strollers created daily mental friction.
      </p>
      <p>
        Our research also invalidated two early assumptions: parents found Bonti’s digital store calm and easy to navigate, and they firmly rejected a paid membership concept. Translating these insights into a clear direction, we formulated our core design rule: <em>“Every essential has an address.”</em>
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
        Instead of creating another bulky standalone bag, we designed <strong>Bunddle</strong>, a modular insert organizer that nests directly into strollers, totes, and existing bags. Because infant care often happens in the dark or with one arm occupied, we moved beyond visual labels and designed for touch. Distinct tactile textures guide parents by feel alone: ribbed corduroy for quick diaper and hygiene access, smooth canvas for feeding essentials, and wave-textured nylon to keep personal items like keys and phones isolated from baby gear.
      </p>
      <p>
        To support one-handed operation while holding a child, we equipped the insert with oversized magnetic pull-tabs and dual top handles. Movable internal dividers allow the organizer to adapt across developmental stages, transitioning from a diaper caddy into a toy bin or everyday home storage to extend product longevity.
      </p>
      <figure className="bonti-figure">
        <div className="project-image-wrapper bonti-visual">
          <ImageOverlay
            src={bontiOrganizer}
            alt="Bunddle stroller insert organiser with divided compartments and CHANGE, FEED and COMFORT labels."
          />
        </div>
        <figcaption>Bunddle keeps everyday essentials visible and grouped in one insert.</figcaption>
      </figure>
      <figure className="bonti-figure">
        <div className="project-image-wrapper bonti-visual">
          <ImageOverlay
            src={bontiTactileZones}
            alt="The three Bunddle zones use ribbed corduroy, smooth canvas and wave-textured nylon to help identify items by touch."
          />
        </div>
        <figcaption>Distinct textures make each zone easier to recognise by touch.</figcaption>
      </figure>
    </section>

    <section id="outcome" className="project-content">
      <h2>Outcome</h2>
      <p>
        We validated the concept through prototype feedback sessions and user surveys, where parents confirmed that designated tactile compartments reduced packing anxiety and simplified hand-offs between caregivers. Testing also uncovered a crucial ergonomic iteration: wet wipes required immediate exterior access rather than sitting inside an enclosed pocket.
      </p>
      <p>
        Following the team delivery, the project concluded with an individual 8-minute video assessment evaluating personal mastery of human-centered design frameworks (K1, K2, S2). My individual analysis was awarded <strong>Pass with Distinction</strong>, recognized for strong method traceability, depth in sensory accessibility, and an honest critical defense of our design compromises.
      </p>
    </section>

    <section id="reflection" className="project-content">
      <h2>Reflection</h2>
      <p>
        Evaluating the project individually highlighted where our process cracked and where commercial incentives challenged human-centered values. Reviewing our FigJam board revealed that all 11 initial <em>How Might We</em> statements focused on digital onboarding and community; pivoting to a physical organizer was driven by Bonti’s retail margin goals rather than a direct line from our user ideation.
      </p>
      <p>
        Additionally, while I championed physical and tactile accessibility in the product, our team rushed our final presentation slides in Lovable, resulting in low color contrast that failed WCAG AA standards. Combined with the ethical tension of promoting high-margin leather goods amid declining birth rates, this project reinforced three core practices I carry forward: validate tactile ideas with early physical prototypes in context, enforce WCAG audits from day one across all deliverables, and hold business viability strictly accountable to circular sustainability.
      </p>
    </section>
  </ProjectLayout>
);

export default Project9;
