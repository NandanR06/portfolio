
import React, { useState } from 'react'
import Services from './Services'

export default function ServiceData() {
const sercive_data=[
    {
        s_no:"01",
        s_name:'Full Stack Development',
        s_desc:'Full stack development refers to the development of both front end(client side) and back end(server side) portions of web application. Full stack web developers have the ability to design complete web application and websites. They work on the frontend, backend, database and debugging of web application or websites.'
    },
    {
        s_no:"02",
        s_name:'MERN Stack Development',
        s_desc : 'MERN stack is a JavaScript stack that is used for easier and faster deployment of full-stack web applications. MERN stack comprises four technologies: MongoDB, Express, React, and Node.js. It is designed to make the development process smoother and easier.'
    },
    {
        s_no:"03",
        s_name:'FRONTEND Development',
        s_desc:'Frontend development refers to the development of the user interface of a website. It involves the design of the website,Frontend development is the process of building, programming, and designing the user interface of a website. It involves the use of HTML, CSS, and JavaScript .  as it is responsible for creating the user experience of a website.'
    },
    {
        s_no:"04",
        s_name:'BACKEND Development',
        s_desc:'Backend development refers to the server side of an application and everything that communicates between the database and the browser. Backend development is the server-side of the application and everything that communicates between the database and the browser. Backend developers are responsible for the server-side application logic and integration of the work front-end developers do. '
    },
    {
        s_no:"05",
        s_name:'REST API Development',
        s_desc:'Rest api development is the process of building, programming, and designing the user interface of a website. It involves the use of HTML, CSS, and JavaScript. as it is responsible for creating the user experience of a website. Rest api development is the process of building, programming, and designing the user interface of a website. It involves the use of HTML, CSS, and JavaScript. as it is responsible for creating the user experience of a website.'
    },
    {
        s_no:"06",
        s_name:'Content Writer',
        s_desc:'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit.'
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
    