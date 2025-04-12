import React from 'react';
import { ArrowDown } from 'lucide-react';
import './home.css'; // Import your CSS file for styling
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Hello, I'm  <span className="highlight">Ghaith bouallegui</span></h1>
        <h2>Frontend Developer</h2>
        <p>I build responsive and user-friendly web applications using modern technologies.</p>
        <div className="hero-buttons">
          <a href="/contact" className="btn primary-btn">
            Contact Me
          </a>
          <a href="/projects" className="btn secondary-btn">
            View Projects
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <ArrowDown size={20} />
      </div>
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>RESTful APIs</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Webpack</li>
              <li>npm/yarn</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;