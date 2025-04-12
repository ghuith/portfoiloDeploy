import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './projects.css'; // Import your CSS file for styling
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A web application built with React and Node.js that [describe functionality].',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project-one',
      liveLink: 'https://project-one.example.com',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A responsive website for [describe purpose] with modern UI/UX design principles.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      githubLink: 'https://github.com/yourusername/project-two',
      liveLink: 'https://project-two.example.com',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'An e-commerce platform built with React and Stripe integration for payments.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Redux', 'Stripe API', 'Firebase'],
      githubLink: 'https://github.com/yourusername/project-three',
      liveLink: 'https://project-three.example.com',
    },
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={16} />
                  Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;