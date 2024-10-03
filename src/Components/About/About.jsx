import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'
import feather from '../../assets/feather.png'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="about-me">
                <h1>About me</h1>
                <img src={feather} alt="feather" />
            </div>
            <div className="row">
                <div className="col-1">
                    <img src={profile} alt="" className='profile1' />
                </div>
                <div className="col-2">
                    <div className="about-section">
                        <p>I am an experienced MERN stack developer with over a 5 year of professional experience in the file.Throughout my career,I have had previleged of collabaration with prestigious organization,contributing to their success and growth. </p>
                        <p>My passion for MERN stack development is not only reflected in my extensive experience but also in the entusiasm and dediacation i bring  to  each project  </p>

                        <div className="skill">
                            <div className="about-skill"><p>HTML &CSS</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>javaScript</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>Node.js , express.js</p><hr style={{ width: "40%" }} /></div>
                            <div className="about-skill"><p>mongoDB</p><hr style={{ width: "50%" }} /></div></div>
                    </div>
                </div>
            </div>
            <div className="achivments">
                <div className="achivment">
                    <h1>5+</h1>
                    <p>YEAR OF  EXPERIENCE</p>
                    {/* <hr style={{ width: "50%"}} /> */}
                    
                </div>
               
                <div className="achivment">
                    <h1>15+</h1>
                    
                    <p>PROJECT COMPLETED</p>
                    {/* <hr style={{ width: "50%"}} /> */}
                   
                </div>
                
                
                <div className="achivment">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                    
                </div>
            </div>
        </div>
    )
}
