import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  const position = ["MERN stack", "Frontend", "Backend"];
  const [currentItem, setCurrenItem] = useState(0);
  const [curCharecter, setCurCarecter] = useState(0);
  const [data, setData] = useState(" ");

  useEffect(() => {
    if(curCharecter < position[currentItem].length){
       const item = setTimeout(()=>{
        setData((pre)=>(pre + position[currentItem][curCharecter]));
        setCurCarecter(curCharecter +1);
      },200);
      return ()=>{clearTimeout(item)}
    }
    else{
      setData("");
      setCurCarecter(0);
      setCurrenItem((pre)=>(pre +1) % position.length)
    }
    
  }, [curCharecter,currentItem]);

  return (
    <div className="hero" id="home">
      <img src={profile} alt="profile" className="profile" />
      <h1>
        <h1 className="name">
          <span>I'm Nandan R,</span>
          <span>{data}</span>
        </h1>

        <h1 className="position">developer based in India</h1>
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
