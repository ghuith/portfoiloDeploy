import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './footer.css'; // Import your CSS file for styling
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.email@example.com">
            <Mail size={20} />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;