import React from "react";
import "./Research.css";

const Research = () => {
  const researchProjects = [
    {
      title: "Coffe",
      description:
        "Welcome to our Coffee Haven! Our website is dedicated to bringing the finest coffee experience right to your fingertips. Whether you're a casual coffee drinker or a true aficionado, we offer a wide variety of coffee blends, brewing tips, and everything you need to enjoy your daily cup of coffee. Join us on a journey to discover the world of coffee with the best beans, the perfect brews, and expert advice to enhance your coffee moments.",
      tags: ["Html", "Css"],
      link: "https://github.com/Sangdep/Coffee-", // Thay thế bằng link GitHub của bạn
    },
    {
      title: "Booking Hotel",
      description:
        "Welcome to our Hotel Booking Platform! Whether you’re traveling for business or leisure, our website offers a seamless experience to find and book the perfect hotel. From luxurious stays to budget-friendly options, we have something for everyone. Explore a variety of accommodations, check availability in real-time, and enjoy a hassle-free booking process, all from the comfort of your own home. Let us help you plan your next unforgettable stay!",
      tags: [
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "My Sql",
        "React js",
      ],
      link: "https://github.com/Sangdep/BOOKING-HOTEL", // Thay thế bằng link GitHub của bạn
    },
    {
      title: "Crud",
      description:
        "Welcome to our CRUD Web Application! This platform allows you to easily Create, Read, Update, and Delete data with a user-friendly interface. Whether you're managing records, inventory, or any other type of information, our system ensures a smooth and efficient experience. With intuitive features and robust functionality, you can seamlessly manage your data in just a few clicks, making it easier than ever to keep things organized and up-to-date.",
      tags: ["Spring Boot ", "Hibernate", "My Sql", "Bootrap"],
      link: "https://github.com/Sangdep/Prj-CRUD-Spring-Boot", // Thay thế bằng link GitHub của bạn
    },
    {
      title: "Social Network",
      description:
        "This project is a social network platform that allows users to connect, share posts, like, comment, and chat in real time, providing an interactive online community experience",
      tags: ["Spring Boot ", "Hibernate", "My Sql", "react js"],
      link: "https://github.com/Sangdep/Socia-Network", // Thay thế bằng link GitHub của bạn
    },
  ];

  return (
    <div className="research">
      <h2>Projects</h2>
      <div className="research-grid">
        {researchProjects.map((project, index) => (
          <div key={index} className="research-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="view-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
