import React, { useEffect, useRef } from "react";
import "./Mywork.css";
import EastIcon from "@mui/icons-material/East";
import MyWork from "../../assets/MyWork.js";
import feather from "../../assets/feather.png";

export default function Mywork() {

  const imageRef = useRef(null);
  useEffect(() => {
    const observe = new IntersectionObserver(
      (entry) => {
        entry.forEach((element) => {
          if (element.isIntersecting) {
            element.target.classList.add("visible");
            observe.unobserve(element.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (imageRef.current) {
      observe.observe(imageRef.current);
    }
    return () => observe.disconnect();
  }, []);
  return (
    <div className="work" id="work">
      <div className="my-work">
        <h1>My Latest work</h1>
        <img src={feather} alt="" />
      </div>
      <div className="work-content" ref={imageRef}>
        {MyWork.map((work1, index) => (
          <div key={index} className="work-item">
            {/* <h1>{work1.w_no}</h1> */}
            <a href={work1.link}>
              <img src={work1.w_img} alt="work" />
            </a>
            <p>{work1.w_name}</p>
          </div>
        ))}
      </div>
      <div className="show-more">
        <p>
          <a href="https://github.com/NandanR06?tab=repositories">Show More</a>
        </p>
        <EastIcon />
      </div>
    </div>
  );
}
