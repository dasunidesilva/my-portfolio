import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
        <p>
          Have an exciting project, an opportunity, or just want to connect? 
          My inbox is always open!
        </p>
        <a href="mailto:dasuni@example.com" className="btn-primary">Say Hello</a>
      </div>
    </section>
  );
}