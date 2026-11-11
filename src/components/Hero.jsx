
import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';

import profileImg from '../assets/hero.png';

export default function Hero() {
  const roles = [
    'Software Developer',
    'CS Undergraduate',
    'Full-Stack Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-container">

      {/* Background Effects */}
      <div className="hero-grid"></div>
      <div className="glow-bg glow-purple"></div>
      <div className="glow-bg glow-cyan"></div>

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-text-col">

          <div className="badge hero-intro">
            <Sparkles size={15} />
            <span>Welcome to my creative space</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm
            <br />
            <span className="gradient-text">
              Dasuni De Silva.
            </span>
          </h1>

          <div className="role-switcher">
            <span className="role-prefix">I'm a </span>

            <span className="role-dynamic" key={roleIndex}>
              {roles[roleIndex]}
            </span>
          </div>

          <p className="hero-description">
            A Computer Science undergraduate passionate about
            building beautiful websites, developing creative
            applications, and exploring new technologies.
          </p>

          <div className="cta-group">

            <a href="#projects" className="btn-primary">
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Let's Connect
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/dasunidesilva"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/dasuni-de-silva-1a57ab37b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:dshithmi@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div className="hero-visual-col">

          <div className="profile-wrapper">

            {/* Animated Circular Glow */}
            <div className="glow-ring"></div>

            {/* Outer Orbit */}
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            {/* Circular Profile Image */}
            <div className="profile-card">
              <img
                src={profileImg}
                alt="Dasuni De Silva"
                className="profile-img"
              />
            </div>

            {/* Floating Technology Badges */}
            <div className="floating-badge badge-float-1">
              <Code2 size={17} />
              <span>Web Developer</span>
            </div>

            <div className="floating-badge badge-float-2">
              <Cpu size={17} />
              <span>Creative Thinker</span>
            </div>

            <div className="floating-badge badge-float-3">
              <Layers size={17} />
              <span>Problem Solver</span>
            </div>

            {/* Availability */}
            <div className="status-badge profile-status">
              <span className="status-pulse"></span>
              Available for Opportunities
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span></span>
        Scroll to explore
      </a>

    </section>
  );
}
