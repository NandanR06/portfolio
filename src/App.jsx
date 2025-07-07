import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import ServiceData from './Components/Services/ServiceData'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { light } from '@mui/material/styles/createPalette'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <ServiceData/>
      <Mywork/>
      <Contact/>
      {/* <Footer/> */}
      
    </div>
  )
}
