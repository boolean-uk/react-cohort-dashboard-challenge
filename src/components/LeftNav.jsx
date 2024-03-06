import React from 'react';
import profile_icon from '../assets/profile-icon.svg'
import home_icon from '../assets/home-icon.svg'
import '../styles/leftNav.css'


const LeftNav = () => {
  return (
    <div className='nav-container'>
      <div>
        <img src={home_icon}/>
        <p>Home</p>
      </div>
      <div>
      <img src={profile_icon}/>
      <p>Profile</p>
      </div>
    </div>
  );
}

export default LeftNav;
