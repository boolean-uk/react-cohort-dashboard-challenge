import React from 'react';
import title_header_svg from '../assets/title-header-svg.svg'
import profile_icon from '../assets/profile-icon.svg'
import '../styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <img className='title-header' src={title_header_svg}/>
      <img src={profile_icon}/>
      
    </header>
  );
}

export default Header;
