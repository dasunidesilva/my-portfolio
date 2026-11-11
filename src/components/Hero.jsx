import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Mail, Code2, Sparkles, Terminal, Cpu, Layout } from 'lucide-react';
import profileImg from '../assets/hero.png';

export default function Hero() {
  const roles = ["Software Developer", "CS Undergraduate", "Full-Stack Web Dev"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-container">
      {/* Background Ambient Glows */}
      <div className="glow-bg glow-purple"></div>
      <div className="glow-bg glow-cyan"></div>

      <div className="hero-content">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-col">
          <div className="badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Welcome to my creative space</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Dasuni De Silva</span>
          </h1>

          <div className="role-switcher">
            <span className="role-prefix">I build as a </span>
            <span className="role-dynamic" key={roleIndex}>
              {roles[roleIndex]}
            </span>
          </div>

          <p className="hero-description">
            A passionate CS undergraduate crafting modern web experiences, 
            efficient backend systems, and creative digital solutions.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn-primary">
              <span>Explore Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Creative Animated Profile Photo */}
        <div className="hero-visual-col">
          <div className="profile-wrapper">
            {/* Rotating Animated Glow Gradient Ring */}
            <div className="glow-ring"></div>
            
            {/* Image Container with Floating Glass Card */}
            <div className="profile-card">
              <img 
                src={profileImg} 
                alt="Dasuni De Silva" 
                className="profile-img" 
              />
            </div>

            {/* Floating Badge 1: Top Right */}
            <div className="floating-badge badge-float-1">
              <Layout size={16} className="text-cyan-400" />
              <span>UI / Web Dev</span>
            </div>

            {/* Floating Badge 2: Bottom Left */}
            <div className="floating-badge badge-float-2">
              <Cpu size={16} className="text-purple-400" />
              <span>Systems & Logic</span>
            </div>

            {/* Floating Status Pill */}
            <div className="status-badge profile-status">
              <span className="status-pulse"></span>
              Available for Hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}