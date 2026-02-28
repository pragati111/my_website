import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/falcon_logo.png'
import Bars from '../../assets/bars.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const mobile = window.innerWidth<=768?true:false
  const [menuOpened, setMenuOpened] =useState(false);
  
  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpened(false)
  }
  
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" style={{cursor: 'pointer'}} onClick={() => handleNavigation('/')} />
      {
        (menuOpened===false && mobile===true)?
        (<div
         style={{backgroundColor: '#ADD8E6', padding:"0.5rem", borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} alt="" style={{width: '1.5rem',height: '1.5rem'}}/>
         </div>):
         <ul className='header-menu' style={mobile && !menuOpened ? {display: 'none'} : {}}>
        <li><button onClick={() => handleNavigation('/')} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', fontFamily: 'inherit'}}>Home</button></li>     
        <li><button onClick={() => handleNavigation('/products-range')} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', fontFamily: 'inherit'}}>Complete Product Range</button></li>   
        <li><button onClick={() => handleNavigation('/why-us')} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', fontFamily: 'inherit'}}>Why us?</button></li>
        <li><button onClick={() => handleNavigation('/contact-us')} style={{border: 'none', background: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', fontFamily: 'inherit'}}>Contact Us</button></li>
      </ul>
      }
    </div>
  )
}

export default Header
