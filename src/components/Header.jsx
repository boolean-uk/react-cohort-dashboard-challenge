import React from 'react';
import title_header_svg from '../assets/title-header-svg.svg'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <img src={title_header_svg}/>
      {/* <img src={profile_icon}/> */}
      
    </header>
  );
}

export default Header;
