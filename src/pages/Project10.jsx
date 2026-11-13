import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import ImageOverlay from '../components/ImageOverlay';
import tedxEventConversation from '../assets/images/tedx-event-conversation.jpg';
import tedxMatchingConcept from '../assets/images/tedx-matching-concept.svg';
import tedxPartnerEcosystem from '../assets/images/tedx-partner-ecosystem.svg';

const Project10 = () => (
  <ProjectLayout
    title="TEDxSTOCKHOLM"
    subtitle="A year-round digital and physical ecosystem designed for TEDxStockholm to transform passive event attendees into an active, self-sustaining community."
    role="Product Strategist"
    timeframe="5 days"
    tools="Figma"
  >
    <section id="overview" className="project-content">
      <h2>Overview</h2>
      <p>
        During a five-day Innovation Week sprint at Hyper Island, our cross-functional team collaborated with TEDxStockholm. As a volunteer-run organization with a globally recognized brand, they faced a core challenge: the energy and inspiration generated at their live events quickly faded once guests went home, leaving attendees passive between main-stage moments.
      </p>
      <p>
        Working in a multidisciplinary team of eight, I contributed across user research, concept strategy, and UX/UI design. My focus was on translating community insights into a tangible digital experience by designing the platform interface and shaping how digital matching connects to real-world meetups. Together, we developed Hi TEDx, a year-round “Ideas &amp; People Network” that acts as a third space between major events and everyday life. To respect TEDxStockholm’s strict zero-budget and volunteer-only constraints, we paired the platform with a strategic pro-bono partnership model where commercial partners fund, host, and provide physical spaces in exchange for brand association.
      </p>
    </section>

    <section id="problem" className="project-content">
      <h2>Problem</h2>
      <p>
        While live events create intense bursts of inspiration, TEDxStockholm lacked a continuous ecosystem to keep members connected during the long stretches between events. Observations showed a stark contrast between offline and online engagement. At intimate Evening Experiences, audiences lingered for hours debating ideas, yet TEDxStockholm’s social media channels were nearly silent, suffering from minimal likes, comments, and interaction.
      </p>
      <p>
        Any viable solution had to work within three non-negotiable operational constraints. There was zero budget to build, host, or maintain a complex platform, and the organization relied entirely on volunteers with limited spare time and no dedicated staff to moderate feeds or run daily social media. Without active moderation, an open digital community also faced a high risk of degrading into spam, ads, or low-value noise.
      </p>
    </section>

    <section id="research" className="project-content">
      <h2>Research</h2>
      <p>
        To understand what keeps people engaged beyond the stage, we analyzed attendee behavior, reviewed past decentralized initiatives like TEDxStockholm Week, and interviewed community members. A clear pattern emerged showing that attendees do not just want to passively consume talks; they want to discuss, challenge, and explore ideas together. Because exclusive evening events run on tight guest lists, many curious minds are left outside the room still wanting to participate in the conversation.
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
        Instead of viewing the lack of budget as a dead end, we reframed TEDxStockholm’s biggest asset: its brand credibility. Our stakeholder insights showed that companies with real revenue actively want to be associated with TEDx to position themselves as innovative, forward-thinking, and idea-driven.
      </p>
    </section>

    <section id="design" className="project-content">
      <h2>Design</h2>
      <p>
        We designed Hi TEDx to bridge digital discovery with physical connection. Users can browse and revisit every TEDx talk, and instead of the experience ending when the video stops, they can match with like-minded thinkers to continue the discussion. Borrowing intuitive mechanics from modern matching apps, users match based on shared curiosity, chat, and meet up in person. To remove social friction and eliminate small talk, we introduced structured micro-challenges, such as a 30-minute screen-free walk or a 15-minute focused coffee meetup.
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
        To solve the maintenance and hosting dilemma without burdening volunteers, we designed a multi-partner ecosystem rather than relying on a single sponsor. Digital and tech partners such as Telia, Microsoft, and digital agencies host, build, and maintain the platform pro bono, utilizing AI-assisted moderation to keep volunteer workload near zero. Alongside them, physical “third space” partners like Espresso House, CONVENDUM, A House, and Norrsken provide accessible, low-barrier venues for recurring Curiosity Circles, Skill Swaps, and Idea Sprints.
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
        Rather than treating the partnership model as pure theory, our team actively reached out to potential commercial partners during the five-day sprint to pitch the concept. The response validated our hypothesis, as every company we spoke to expressed strong interest in partnering with TEDxStockholm and wanted to book follow-up meetings right away to explore pro-bono collaboration.
      </p>
      <p>
        By the end of the week, we delivered a complete growth blueprint to TEDxStockholm, combining a validated business model, a tangible digital prototype, and concrete partner leads ready for a six-week pilot.
      </p>
    </section>

    <section id="reflection" className="project-content">
      <h2>Reflection</h2>
      <p>
        Working under a five-day deadline with zero budget taught me that business feasibility and UX design are inseparable, because a great interface means nothing if the client lacks the resources to maintain it. The biggest insight from this project was realizing that online feeds often fail because they lack real-world stakes. By using digital tools simply as a catalyst to get people into a physical room, or out on a 30-minute walk, we solved the engagement problem in a way that feels authentically human.
      </p>
      <p>
        Given more time, I would run usability tests on the matching and challenge flows with actual TEDx attendees to fine-tune the onboarding experience, ensuring it feels welcoming to newcomers rather than an exclusive insider club.
      </p>
    </section>

    <div className="project-actions">
      <a
        href="https://hitedx.se/"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button primary"
      >
        Live Demo
      </a>
    </div>
  </ProjectLayout>
);

export default Project10;
