import React from 'react'
import './Mywork.css'
import EastIcon from '@mui/icons-material/East';

import MyWork from '../../assets/MyWork.js'
import feather from '../../assets/feather.png'

export default function Mywork() {
    return (
        <div className='work' id='work'>
            <div className="my-work">
                <h1>My Latest work</h1>
                <img src={feather} alt="" />
            </div>
            <div className="work-content"> {
                MyWork.map((work1, index) => (<div key={index} className='work-item'>
                    {/* <h1>{work1.w_no}</h1> */}
                    <img src={work1.w_img} alt="work" />
                    {/* <p>{work1.w_name}</p> */}
                </div>
            ))}
              
            </div>
            <div className="show-more">
                <p>Show More</p>
                <EastIcon/>
            </div>
            

        </div>
    )
}
