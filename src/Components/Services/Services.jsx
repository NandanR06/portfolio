import React, { useEffect,useRef } from "react";
import EastIcon from "@mui/icons-material/East";
import "./Services.css";
import feather from "../../assets/feather.png";

export default function Services({ val }) {
    const imageRef = useRef(null)
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

  console.log(`${val[0].s_name}`);
  return (
    <div className="service">
      <div className="my-services">
        <h1>My Service</h1>
        <img src={feather} alt="feather" />
      </div>
      <div className="service-container" ref={imageRef}>
        {val.map((service, index) => (
          <div className="service-info">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="read-me">
              Read More
              <EastIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
