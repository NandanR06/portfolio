import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import feather from '../../assets/feather.png';
import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setmenu] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* Mobile View */}
      {isMobile ? (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <DensityMediumIcon />}
          </div>

          <div className={`menu-drawer-horizontal ${menuOpen ? 'show' : ''}`}>
            <ul className="menu-item-horizontal">
              {["Home", "About me", "Services", "Portfolio", "Contact"].map((item, idx) => (
                <li key={idx} onClick={() => { setmenu(item); closeMenu(); }}>
                  <Link to={item === "About me" ? "about" : item.toLowerCase()} smooth={true} duration={500} offset={100}>
                    <p>{item === "Portfolio" ? "Project" : item.replace(" me", "")}</p>
                    {menu === item && <img src={feather} alt="highlight" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        // Desktop View
        <>
          <ul className="menu-item">
            {["Home", "About me", "Services", "Portfolio", "Contact"].map((item, idx) => (
              <li key={idx} onClick={() => setmenu(item)}>
                <Link to={item === "About me" ? "about" : item.toLowerCase()} smooth={true} duration={500} offset={100}>
                  {item === "Portfolio" ? "Project" : item.replace(" me", "")}
                  {menu === item && <img src={feather} alt="highlight" />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="connect">
            <Link to="Contact" className="li-item" smooth={true} duration={500} offset={100}>
              Connect with me
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
