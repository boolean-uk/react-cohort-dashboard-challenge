import React, { useContext } from 'react';
import '../style/header.css';
import titleHeader from '../assets/title-header.svg';
import { UserContextAPIContext } from '../contextAPI/UserContextAPI';
import { Link } from 'react-router-dom';

function Header() {

  const {user} = useContext(UserContextAPIContext)


  if(!user) {
    return <div>Loading</div>
  }

  return (
    <div className='header'>
      
      <img src={titleHeader} className='header-img'/>

      <Link to={"/profile"} style={{textDecoration : "none"}}>
        <div className="circle header-profile" style={{backgroundColor: user.favouriteColour}}>
          <span className="initials">{user.firstName[0]}{user.lastName[0]}</span>
        </div>
      </Link>

    </div>
  )
}

export default Header