import React from 'react';
import '../style/header.css';
import profileIcon from '../assets/profile-icon.svg';
import titleHeader from '../assets/title-header.svg';

function Header() {
  return (
    <div className='header'>
      <img src={titleHeader} className='header-img'/>

      <div className="circle header-profile">
        <span className="initials">AB</span>
      </div>
    </div>
  )
}

export default Header