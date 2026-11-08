import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: 'Admin Management Portal',
      desc: 'An administrative web portal built with PHP MVC and MySQL featuring secure access and management controls.',
      tech: ['PHP', 'MySQL', 'MVC']
    },
    {
      title: 'Inventory Management System',
      desc: 'A robust Binary Search Tree inventory program implemented in C for high performance and optimal data handling.',
      tech: ['C Programming', 'Data Structures']
    },
    {
      title: 'Responsive Restaurant Website',
      desc: 'A multi-page responsive web platform designed with modern layout standards and interactive UI elements.',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}