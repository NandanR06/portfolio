import React from 'react'
import './Contact.css'
import feather from '../../assets/feather.png'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { toast } from "react-toastify";

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fad2cdad-f46d-43b0-8b92-4e8fcd720c11");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => 
        {
            res.json();
             alert("Message sent successfully");
            

        });

        
      };
    return (
        <div className='contacts-info' id='Contact'>
            <div className="get"><h1>Get in touch</h1></div>
            <img src={feather} alt="feather" />
            <div className="section-info">
                <div className="contact-left">
                    <div className="contact-info-left1">
                        <h1>Let's talk</h1>
                        <p>I'm currently available to take a new project .feel free to send me a message about anything that  you want me to work on .You can contact anytime</p>
                    </div>
                    <div className="contact-info-left2">
                        <MailIcon />
                        <p>nandanr7284@gmail.com</p>
                    </div>
                    <div className="contact-info-left2">
                        <CallIcon />
                        <p>+91 9008229495</p>
                    </div>
                    <div className="contact-info-left2">
                        <LocationOnIcon />
                        <p> Karnataka, India</p>
                    </div>
                </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="" > Your Name</label>
                <input type="text"  required placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'  required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={8} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn'>Submit Now</button>
            </form>
            </div>

        </div>
    )
}
