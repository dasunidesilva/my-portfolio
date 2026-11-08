import React from 'react';

export default function About() {
  return (
    <section id="about" className="section animate-fade">
      <h2 className="section-title">About Me</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.15rem' }}>
        I am an undergraduate software development student at UCSC with a strong drive for building 
        clean, scalable, and responsive web systems. I enjoy tackling complex logic, writing modular code, 
        and turning creative ideas into functional real-world applications.
      </p>
    </section>
  );
}