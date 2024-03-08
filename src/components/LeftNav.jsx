import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import profile_icon from '../assets/profile-icon.svg'
import home_icon from '../assets/home-icon.svg'
import '../styles/leftNav.css'
import PostComponent from './PostComponent';
import Profile from './Profile';


const LeftNav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-element'>
        <img src={home_icon}/>
        <Link to={'/home'} >Home</Link>
      </div>
      <div className='nav-element'>
      <img src={profile_icon}/>
        <Link to={'/profile/1'}>Profile</Link>
      </div>
    </div>
  );
}

export default LeftNav;
