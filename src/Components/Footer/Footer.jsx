import React from 'react'
import './Footer.css'
import footer from '../../assets/logo.png'
import PersonIcon from '@mui/icons-material/Person';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer} alt="" />
                    <p>I am an experienced Fullstack developer  👨‍💻 using MERN Stack Path  & also Computer Science Engineering Student</p>
                </div>
                <div className='foot-info'><div className="footer-top-right-inputVal">
                    <PersonIcon />
                    <input type="text" placeholder='Enter your email' />
                </div>
                    <div className="footer-subscribe">Subscribe</div></div>



            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bootom-left"> © 2025 Nandan R.All right reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy policy</p>
                    <p>Contact with me</p></div>

            </div>

        </div>
    )
}
