import React from 'react';

export default function Skills() {
  const skillList = [
    'C Programming', 'JavaScript (ES6+)', 'React.js', 
    'PHP & MVC', 'HTML5 & CSS3', 'MySQL & Databases', 
    'Git & GitHub', 'UI/UX Design'
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}