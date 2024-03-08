import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import profile_icon from '../assets/profile-icon.svg'
import home_icon from '../assets/home-icon.svg'
import '../styles/leftNav.css'

const LeftNav = () => {
  const nav = useNavigate()
  const [selected, setSelected] = useState("/home")

  const handleRouteClick = (route) => {
    setSelected(route)
    nav(route)
  }
  return (
    <div className='nav-container'>
      <div className='nav-element' 
          onClick={() => handleRouteClick("/home")} 
        style={{ background: selected === "/home" ? '#e6ebf5' : '#ffffff'}}>
        <img src={home_icon}/>  
        <p to={'/home'}>Home</p>
      </div>
      <div className='nav-element' 
          onClick={() => handleRouteClick("/profile/1")} 
          style={{ background: selected === "/profile/1" ? '#e6ebf5' : '#ffffff' }}>
      <img src={profile_icon}/>
        <p>Profile</p>
      </div>
    </div>
  );
}

export default LeftNav;
