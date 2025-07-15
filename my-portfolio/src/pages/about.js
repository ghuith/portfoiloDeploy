import React from 'react';
import './about.css'; // Import your CSS file for styling

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src="ghaith.jpeg" alt="GHAITH" />
        </div>
        <div className="about-content">
          <h2>Who am I?</h2>
          <p>
            I'm a passionate frontend developer with a strong foundation in building modern web applications. 
            With X years of experience in the field, I've honed my skills in creating responsive, 
            user-friendly interfaces that provide exceptional user experiences.
          </p>
          <p>
            My journey in web development began when I [your story here]. Since then, 
            I've worked on numerous projects ranging from small business websites to complex web applications.
          </p>
          <h2>Education</h2>
          <ul>
            <li>Bachelor's Degree in Computer Science - University Name (Year-Year)</li>
            <li>Relevant Certification or Course (Year)</li>
          </ul>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Company Name</strong> - Frontend Developer (Year-Present)
              <p>Brief description of your role and achievements</p>
            </li>
            <li>
              <strong>Previous Company</strong> - Position (Year-Year)
              <p>Brief description of your role and achievements</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
