import React, { useContext } from 'react';
import '../style/header.css';
import profileIcon from '../assets/profile-icon.svg';
import titleHeader from '../assets/title-header.svg';
import { UserContextAPIContext } from '../contextAPI/UserContextAPI';

function Header() {

  const {user} = useContext(UserContextAPIContext)


  if(!user) {
    return <div>Loading</div>
  }

  return (
    <div className='header'>
      <img src={titleHeader} className='header-img'/>

      <div className="circle header-profile" style={{backgroundColor: user.favouriteColour}}>
        <span className="initials">{user.firstName[0]}{user.lastName[0]}</span>
      </div>
    </div>
  )
}

export default Header