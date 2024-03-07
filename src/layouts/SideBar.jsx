import React from 'react'
import HomeIcon from '../assets/icons/HomeIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'

function SideBar() {
  return (
    <aside>
      SIDE BAR WITH LIST
    
      <div className="sidebar-item">
          <a href="#"> 
            <ProfileIcon />
            <i className="icon profile"> PROFILE</i>
          </a>
      </div>

      <div className="sidebar-item">
      <a href="#"> 
            <HomeIcon />
            <i className="icon home"> HOME</i>
          </a>
      </div>
      
    </aside>
  )
}

export default SideBar
