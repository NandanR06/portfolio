import React, { useEffect, useRef } from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'
import feather from '../../assets/feather.png'

export default function About() {

     const image1Ref = useRef(null);
     const image2Ref = useRef(null);
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
        if (image1Ref.current || image2Ref.current) {
          observe.observe(image1Ref.current);
          observe.observe(image2Ref.current);
        }
        return () => observe.disconnect();
      }, []);

    return (
        <div className='about' id='about'>
            <div className="about-me">
                <h1>About me</h1>
                <img src={feather} alt="feather" />
            </div>
            <div className="row">
                <div className="col-1" >
                    <img src={profile} alt="" className='profile1'  ref={image1Ref}/>
                </div>
                <div className="col-2">
                    <div className="about-section" ref={image2Ref}>
                        <h3>I am an experienced Fullstack developer  👨‍💻 using MERN Stack Path 🚀 & also Computer Science Engineering Student </h3>
                        <p>My passion for MERN stack development is not only reflected in my extensive experience but also in the entusiasm and dediacation i bring  to  each project  </p>

                        <div className="skill">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>TypeScript</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>Tailwind CSS</p><hr style={{ width: "55%" }} /></div>
                            <div className="about-skill"><p>Version Control (Git)</p><hr style={{ width: "70%" }} /></div>

                            <div className="about-skill"><p>Node.js , Express.js</p><hr style={{ width: "40%" }} /></div>
                            <div className="about-skill"><p>mongoDB</p><hr style={{ width: "50%" }} /></div></div>
                    </div>
                </div>
            </div>
            <div className="achivments">
                <div className="achivment">
                    <h1>6+</h1>
                    <p>MOUNTH EXPERIENCE  AS  A  INTERN </p>
                    {/* <hr style={{ width: "50%"}} /> */}
                    
                </div>
               
                <div className="achivment">
                    <h1>15+</h1>
                    
                    <p>PROJECT COMPLETED</p>
                    {/* <hr style={{ width: "50%"}} /> */}
                   
                </div>
                
                
                {/* <div className="achivment">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                    
                </div> */}
            </div>
        </div>
    )
}
