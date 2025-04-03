import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Engineer',
      company: 'Your Company',
      period: 'Sep 2024 - Present',
      location: 'Remote',
      description: 'Research Engineer focusing on advanced AI applications.'
    },
    {
      title: 'AI Engineer',
      company: 'Previous Company',
      period: 'Jan 2024 - Sep 2024',
      location: 'Remote',
      description: 'Leading Multimodal and Multilingual researches and products.'
    }
  ];

  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <div className="company-info">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
                <span className="location">{exp.location}</span>
              </div>
            </div>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 