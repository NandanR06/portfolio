import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import PersonIcon from '@mui/icons-material/Person';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>I am an experienced Fullstack developer 👨‍💻 using MERN Stack & a Computer Science Engineering student.</p>
        </div>

        <div className="footer-right">
          <div className="footer-input-wrapper">
            <PersonIcon />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Nandan R. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
}
