import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          Sang Le
        </a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Home</a>
        {/* <a href="#experience" className="nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('experience');
        }}>Experience</a> */}
        <a href="#research" className="nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('research');
        }}>Research</a>
        <a href="#skills" className="nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('skills');
        }}>Skills</a>
      </div>
    </nav>
  );
};

export default Navbar; 