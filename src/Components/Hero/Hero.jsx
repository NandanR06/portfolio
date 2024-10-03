import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <div className='hero' id='home'>
        <img src={profile} alt="profile"  className='profile'/>
        <h1> <span>I'm Nandan R</span> ,MERN stack developer based in India</h1>
        <p>I'm MERN stack developer from Bangaluru,India with 5 year of experience in multiple companies like apple,Amazon,meta</p>
        <div className="action">
            <div className="contact"><Link to="Contact" smooth={true} duration={500} offset={100}>Contact with me</Link></div>
            <div className="resume">Resume</div>
        </div>
    </div>
  )
}
