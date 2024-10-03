
import React, { useState } from 'react'
import Services from './Services'

export default function ServiceData() {
const sercive_data=[
    {
        s_no:"01",
        s_name:'Web design',
        s_desc:'Web developoment is the process of building,programming...'
    },
    {
        s_no:"02",
        s_name:'Graphic design',
        s_desc:'Web developoment is the process of building,programming...'
    },
    {
        s_no:"03",
        s_name:'Social Media',
        s_desc:'Web developoment is the process of building,programming...'
    },
    {
        s_no:"04",
        s_name:'App design',
        s_desc:'Web developoment is the process of building,programming...'
    },
    {
        s_no:"05",
        s_name:'Digital Marketing',
        s_desc:'Web developoment is the process of building,programming...'
    },
    {
        s_no:"06",
        s_name:'Content Writer',
        s_desc:'Web developoment is the process of building,programming...'
    }
]

const [datas,setDatas]=useState(sercive_data);
console.log(sercive_data)


return (
    <div>
      <Services val={datas}/>
    </div>
  )
}
    