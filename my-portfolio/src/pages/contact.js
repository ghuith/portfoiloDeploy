import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './contact.css'; // Import your CSS file for styling
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm currently available for freelance work or full-time positions. 
            Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <div className="info-item">
            <Mail size={20} />
            <span>boualleguighaith@gmail.com</span>
          </div>
          <div className="info-item">
            <Phone size={20} />
            <span>+1 234 567 890</span>
          </div>
          <div className="info-item">
            <MapPin size={20} />
            <span>Your Location, City, Country</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Me A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
