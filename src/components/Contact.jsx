import React, { useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = ({ contactSectionRef }) => {
  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSubmitted(true);
        form.reset();
      })
      .catch(() => alert('Something went wrong!'));
  };

  return (
    <section ref={contactSectionRef} className="contact-section">
      <h2>Get in touch</h2>
      <p className="contact-subtext">
        Feel free to reach out with any inquiries.<br />
        <span>(or just to say hello!)</span> I'm excited to connect with you.
      </p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/desireejohnsen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/desjohnsen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="tel:+46700009903" aria-label="Phone">
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="mailto:des.johnsen@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      {formSubmitted ? (
        <div className="thank-you-popup">
          <p>
            Thanks for your message! <br />
            I’ll get back to you as soon as I can.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Your message here..." required></textarea>
          </div>

          <button type="submit" className="send-button">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
