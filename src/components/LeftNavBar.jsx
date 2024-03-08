import React from 'react'
import '../style/leftNavBar.css'
import Home from '../assets/home-icon.svg';
import Profile from '../assets/profile-icon.svg';
import { Link } from 'react-router-dom';


function LeftNavBar() {
  return (

    
    <div className='leftNavBar-container'>

      <div className='leftNavBar-item'>
        <Link to={"/"}>
          <img src={Home} alt="Home"/>
        </Link>
      </div>

      <div className='leftNavBar-item'>
        <Link to={"/profile"}>
          <img src={Profile} alt="Profile" />
        </Link>
      </div>

      
    </div>
  )
}

export default LeftNavBar