// src/components/About/About.jsx
import React, { useEffect, useRef } from "react";
import "./About.css";
import feather from "../../assets/feather.png";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Postman",
  "EJS",
  "Python (Basics)",
  "Java (OOP Concepts)",
  "C Programming",
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-header">
        <h1>About Me</h1>
        <img src={feather} alt="Feather Decoration" />
      </div>

      <div className="about-content" ref={aboutRef}>
        <h3>
          I'm a passionate Full-Stack Web Developer specializing in the MERN
          Stack. Currently pursuing a degree in Computer Science Engineering. I
          love building scalable, user-focused web apps that solve real-world
          problems.{" "}
        </h3>
        <p>
          I enjoy building scalable web applications and exploring technologies
          that solve real-world problems. I'm committed to continuous learning
          and development.
        </p>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-box" key={idx}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>6+</h2>
          <p>Months Internship Experience</p>
        </div>
        <div className="stat-box">
          <h2>15+</h2>
          <p>Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default About;
