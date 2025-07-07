import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../../assets/nandan2.png";
import { Link } from "react-scroll";

export default function Hero() {
  const position = ["MERN stack", "Frontend  ", "Backend ", "Full Stack "];
  const [currentItem, setCurrenItem] = useState(0);
  const [curCharecter, setCurCarecter] = useState(0);
  const [data, setData] = useState(" ");

  useEffect(() => {
    if (curCharecter < position[currentItem].length) {
      const item = setTimeout(() => {
        setData((pre) => pre + position[currentItem][curCharecter]);
        setCurCarecter(curCharecter + 1);
      }, 200);
      return () => {
        clearTimeout(item);
      };
    } else {
      setData("");
      setCurCarecter(0);
      setCurrenItem((pre) => (pre + 1) % position.length);
    }
  }, [curCharecter, currentItem]);

  return (
    <div className="hero" id="home">
      <div>
        {" "}
        <img src={profile} alt="profile" className="profile" />
      </div>
      <div className="hero-text">
        <h1>
          <h1 className="name">
            <span>I'm Nandan R,{data}</span>
          </h1>
          <h1 className="position">developer based in India</h1>
        </h1>
        <p>
          "Aspiring Full-Stack Web Developer specializing in the MERN Stack,
          with a strong passion for building scalable and efficient web
          applications. Currently pursuing a Bachelor's degree in Computer
          Science Engineering, driven by continuous learning and innovation in
          the tech industry."
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
              window.open(
                "/portfolio/NandanR_MERN_Developer_Resume.pdf",
                "_blank"
              );
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
    </div>
  );
}
