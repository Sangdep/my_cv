import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    aiMl: {
      title: "Backend Development",
      skills: [
        { name: "Java & Spring Boot", level: 95 },
        { name: "RESTful API Development", level: 90 },
        { name: "Database Management (SQL Server, MySQL)", level: 80 },
        { name: "Spring Security & Authentication", level: 80 },
        { name: "JPA/Hibernate ORM", level: 85 },
      ],
    },
    program: {
      title: "Frontend Development",
      skills: [
        { name: "React & React Hooks", level: 90 },
        {
          name: "CSS Frameworks (Tailwind, Material-UI, Bootstrap)",
          level: 85,
        },
        { name: "RESTful API Integration & Axios", level: 90 },
        { name: "Responsive Design & Mobile-First", level: 85 },
        { name: "Testing (Jest, RTL)", level: 75 },
      ],
    },
    research: {
      title: "System Design & Deployment",
      skills: [
        { name: "Scalable System Architecture", level: 95 },
        { name: "Security & Authentication (JWT, OAuth2)", level: 85 },
        { name: "Event-Driven Architecture (Kafka, RabbitMQ)", level: 80 },
      ],
    },
    others: {
      title: "Other Skills",
      skills: [
        { name: "Git & GitHub/GitLab", level: 90 },
        { name: "Docker & Containerization", level: 85 },
        { name: "CI/CD Pipelines (Jenkins, GitHub Actions)", level: 80 },
      ],
    },
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
