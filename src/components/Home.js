import React from 'react';
import './Home.css';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>I am Sang Le</h1>
          <p className="subtitle">Backend Java Developer specializing in Spring Boot and scalable system architecture</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src="/avata.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 