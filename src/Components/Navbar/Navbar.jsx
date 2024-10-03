import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import feather from '../../assets/feather.png'
import { Link } from 'react-scroll'
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


export default function Navbar() {
  const [menu, setmenu] = useState('')
  const menudata = useRef();
  const openVal=()=>{
    menudata.current.style.right='0';
  }
  const clossVal=()=>{
    menudata.current.style.right='-350px' 
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      {/* <DensityMediumIcon  className='openInf' onClick={openVal} /> */}
      <div className="menu">
        <ul className="menu-item" ref={menudata} >
        {/* <CloseIcon  className='clossInf'  onClick={clossVal} />  */}
          <li  ><p onClick={() => (setmenu("Home"))}>Home</p>{menu === "Home" ? <img src={feather} alt='logo' /> : ""}</li>
          <li ><Link to="about" smooth={true} duration={500} offset={100}><p onClick={() => (setmenu("About me"))}>About me</p>{menu === "About me" ? <img src={feather} alt='logo' /> : ""}</Link></li>
          <li ><Link to="service" smooth={true} o duration={500} ffset={150}><p onClick={() => (setmenu("Services"))}>Services</p>{menu === "Services" ? <img src={feather} alt='logo' /> : ""}</Link></li>
          <li ><Link to="work" smooth={true} o duration={500} ffset={100}><p onClick={() => (setmenu("Portfolio"))}>Project</p>{menu === "Portfolio" ? <img src={feather} alt='logo' /> : ""}</Link></li>
          <li ><Link to="Contact" smooth={true} duration={500} offset={100}><p onClick={() => (setmenu("Contact"))}>Contact</p>{menu === "Contact" ? <img src={feather} alt='logo' /> : ""}</Link></li>
        </ul>
      </div>
      <div className="connect"><Link to="Contact" smooth={true} duration={500} offset={100}>Connect with me</Link></div>

    </div>
  )
}
