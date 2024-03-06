import React from 'react';
import title_header_svg from '../assets/title-header-svg.svg'
import '../styles/header.css'
import ProfilePicture from './ProfilePicture';

const Header = () => {

  return (
    <header className='header'>
      <img className='title-header' src={title_header_svg}/>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"}/>
    </header>
  );
}

export default Header;
