import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    aiMl: {
      title: "Backend Development",
      skills: [
        { name: "Java & Spring Boot", level: 95 },
        { name: "RESTful API", level: 90 },
        { name: "Caching & Performance Optimization", level: 85 },
        { name: "Database Management(Sql Server, My Sql)", level: 80 }
      ]
    },
    research: {
      title: "System Design & Deployment",
      skills: [
        { name: "Scalable System Architecture", level: 95 },
        { name: "Cloud Services (AWS, GCP, Azure)", level: 90 },
        { name: "Security & Authentication (JWT, OAuth2)", level: 85 },
        { name: "Event-Driven Architecture (Kafka, RabbitMQ)", level: 80 }
      ]
    }
  };

  return (
    <div className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([key, category]) => (
          <div key={key} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 