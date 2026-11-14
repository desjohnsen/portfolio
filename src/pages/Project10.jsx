import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageOverlay from '../components/ImageOverlay';
import tedxEventConversation from '../assets/images/tedx-event-conversation.jpg';
import tedxMatchingConcept from '../assets/images/tedx-matching-concept.svg';
import tedxPartnerEcosystem from '../assets/images/tedx-partner-ecosystem.svg';

const Project10 = () => (
  <ProjectLayout
    title="TEDxSTOCKHOLM"
    subtitle="Turning passive event attendees into an active community"
    role="UX Designer"
    timeframe="5 days"
    tools="Design Sprint"
  >
    <section id="overview" className="project-content">
      <h2>Overview</h2>
      <p>
        During a five-day Innovation Week sprint at Hyper Island, our cross-functional team of eight collaborated with <strong>TEDxStockholm</strong>. As a volunteer-run organization with zero budget, they needed a way to keep the energy alive between main-stage events.
      </p>
      <p>
        Focusing on user research, assumption testing, and concept strategy, I helped translate community insights into <strong>Hi TEDx</strong>, a year-round “third space” ecosystem backed by a self-sustaining pro-bono partnership model.
      </p>
    </section>

    <section id="problem" className="project-content">
      <h2>Problem</h2>
      <p>
        Live TEDx events spark intense inspiration, yet social channels went silent the day after, leaving attendees passive for months. Without paid staff or funding to moderate an open forum, any digital-only community risked degrading into spam and low-value noise.
      </p>
      <blockquote>“How might we keep the TEDx spirit alive every day without a budget or full-time staff?”</blockquote>
    </section>

    <section id="research" className="project-content">
      <h2>Research</h2>
      <p>
        Through assumption mapping, polls, and personal interviews with attendees, we tested whether people only attended TEDx for status and networking. The findings revealed that people did not want passive content feeds; they craved <strong>real-world debates</strong> and <strong>intimate group discussions</strong>.
      </p>
      <figure>
        <div className="project-image-wrapper">
          <ImageOverlay
            src={tedxEventConversation}
            alt="Guests talking together at a TEDxStockholm event."
          />
        </div>
        <figcaption>Conversation continues after the talks end.</figcaption>
      </figure>
      <p>
        At the same time, stakeholder research uncovered TEDxStockholm’s greatest asset: <strong>brand credibility</strong>. Commercial companies actively want to associate with TEDx to position themselves as innovative, creating a clear opportunity for value exchange rather than cash sponsorship.
      </p>
    </section>

    <section id="design" className="project-content">
      <h2>Design</h2>
      <p>
        We designed <strong>Hi TEDx</strong> to bridge digital discovery with physical connection. Instead of endless scrolling, users match with like-minded peers around shared questions using <strong>curated conversation prompts</strong> and <strong>guided micro-challenges</strong>, such as a 30-minute screen-free walk or a 15-minute focused coffee meetup.
      </p>
      <figure>
        <div className="project-image-wrapper">
          <ImageOverlay
            src={tedxMatchingConcept}
            alt="Hi TEDx matching concept with a question prompt, a curious member, and a way to connect."
          />
        </div>
        <figcaption>A question becomes an invitation to meet someone who shares your curiosity.</figcaption>
      </figure>
      <p>
        To eliminate operational costs for volunteers, we built a <strong>three-way pro-bono ecosystem</strong>. Tech partners such as Telia and Microsoft host and maintain the platform using AI-assisted moderation, while physical “third space” partners like Espresso House, CONVENDUM, A House, and Norrsken provide accessible venues for Curiosity Circles, Skill Swaps, and Idea Sprints.
      </p>
      <figure>
        <div className="project-image-wrapper">
          <ImageOverlay
            src={tedxPartnerEcosystem}
            alt="Diagram showing how TEDxStockholm, digital partners, and venue partners together support the Hi TEDx community."
          />
        </div>
        <figcaption>The partnership model shares the work across technology and physical-space partners.</figcaption>
      </figure>
    </section>

    <section id="outcome" className="project-content">
      <h2>Outcome</h2>
      <p>
        Rather than treating partnerships as theory, our team pitched the concept directly to potential commercial partners during the sprint. Every company we spoke with expressed strong interest in partnering with TEDxStockholm and requested follow-up meetings to explore pro-bono collaboration.
      </p>
      <p>
        By the end of the week, we delivered a complete <strong>Growth Blueprint</strong> combining a validated business model, warm partner leads for a six-week pilot, and an interactive concept site for Hi TEDx.
      </p>
    </section>

    <section id="reflection" className="project-content">
      <h2>Reflection</h2>
      <p>
        Designing under a five-day deadline with zero budget proved that <strong>business feasibility and UX design are inseparable</strong>; a great concept means nothing if a volunteer team lacks the resources to maintain it.
      </p>
      <p>
        The biggest insight was realizing that online feeds often fail because they lack real-world stakes. By using digital tools purely as a catalyst to get people into a physical room or out on a 30-minute walk, we solved the engagement gap in a way that feels authentically human.
      </p>
    </section>

    <div className="project-actions">
      <a
        href="https://hitedx.se/"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button primary"
      >
        Visit Hi TEDx
      </a>
    </div>
  </ProjectLayout>
);

export default Project10;