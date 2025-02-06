import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <img src={profile} alt="profile" className="profile" />
      <h1>
        {" "}
        <span>I'm Nandan R</span> ,MERN stack developer based in India
      </h1>
      <p>
        Passionate to be a Full-Stack Web developer 👨‍💻 using MERN Stack Path 🚀
        & also Computer Science Engineering Student
      </p>
      <div className="action">
        <div className="contact">
          <img src="./linkedin.png" alt="logo" />
          <a
            
            href="https://www.linkedin.com/in/nandan-r-fullstack/"
            smooth={true}
            duration={500}
            offset={100}
          >
            Linkedin
          </a>
        </div>

        <div
          className="resume"
          onClick={() => {
            window.open("/portfolio/NandanR_resume.pdf ", "_blank");
          }}
        >
          Resume
        </div>
        <div className="contact">
          <img src="./github.png" alt="logo" />
          <a
          
            href="https://github.com/NandanR06"
            smooth={true}
            duration={500}
            offset={100}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
