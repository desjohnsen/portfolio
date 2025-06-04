import React, { useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = ({ contactSectionRef }) => {
  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    fetch('https://formspree.io/f/mjkrkbgw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          setFormSubmitted(true);
          form.reset();
        } else {
          alert('Something went wrong!');
        }
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
            Thank you for your message! <br />
            I’ll get back to you as soon as I can.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form" name="contact">
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
