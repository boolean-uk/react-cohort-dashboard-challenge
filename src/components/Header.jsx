import React from 'react'
import title_header from '../assets/title-header.svg'
import ProfilePicture from './profile/ProfilePicture'

export default function Header() {
  
  return (
  <div className='header-container'>
    <div className="header darkBlue">
      <img className='titleImg' src={title_header} alt="home icon" />
    </div>
    
    <div className="header darkBlue">
      <ProfilePicture initials={'GR'} />
    </div>

  </div>
  )
}
