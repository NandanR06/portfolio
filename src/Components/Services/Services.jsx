import React from 'react'
import EastIcon from '@mui/icons-material/East';
import './Services.css'
import feather from '../../assets/feather.png'

export default function Services({ val }) {
    console.log(`${val[0].s_name}`);
    return (
        <div className="service">

            <div className="my-services">
                <h1>My Service</h1>
                <img src={feather} alt="feather" />
            </div>
            <div className="service-container">

                {val.map((service, index) => (<div className='service-info'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="read-me">Read More
                    <EastIcon />
                    </div>
                   
                </div>))}
            </div>


        </div>
    )
}
