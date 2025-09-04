import React from "react";
import "./Home.css";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="title">I am Sang Le</h1>
          <p className="subtitle">
            Full-stack Developer specializing in Java Spring Boot backend and
            React frontend with scalable system architecture
          </p>
          <div className="icon-tech">
            <img src="/java.svg" alt="Java" title="Java" />
            <img src="/spring-3.svg" alt="Spring Boot" title="Spring Boot" />
            <img src="/react-2.svg" alt="React" title="React" />
            <img src="/c--4.svg" alt="Node.js" title="Node.js" />

            <img src="/javascript-1.svg" alt="JavaScript" title="JavaScript" />
            <img src="/html-1.svg" alt="HTML5" title="HTML5" />
            <img src="/css-3.svg" alt="CSS3" title="CSS3" />
            <img src="/mysql-3.svg" alt="MySQL" title="MySQL" />
            <img src="/aws-2.svg" alt="AWS" title="AWS" />
            <img src="/postman.svg" alt="postman" title="postman" />
            <img src="/docker-4.svg" alt="Docker" title="Docker" />
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src="/avata.jpg" alt="Profile" />
          </div>

          <div className="icon-border">
            <a
              href="https://www.facebook.com/topdaica125"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
