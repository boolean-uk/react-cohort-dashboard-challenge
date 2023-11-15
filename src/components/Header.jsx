import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../UserContext'
import ProfileIcon from './ProfileIcon'
import HeaderIcon from './HeaderIcon'
import HomeIcon from './HomeIcon'
import { Space } from 'antd'

function Header({ currentTab, setCurrentTab }) {

  const { defaultUser } = useUser();

  // const authorInitials = (name) => {
  //   const nameParts = name?.split(' ');
  //   const initials = nameParts?.map((part) => part.charAt(0));
  //   return initials.join('');
  // };

  return (
    <>
      <header className="header">
          <div className="header-icon">
            <HeaderIcon />    
          </div>
          <div className="author-initials">
          {/* <h3>{authorInitials(defaultUser.name)}</h3> */}
        </div>
        </header>
      <nav className="left-menu">
        <div className="nav-menu">
        <Space direction="vertical" size="large">
          <Space direction="vertical" size="medium">
          <div className="menu-icon" style={{marginLeft:'11px'}}>
            <HomeIcon />  
          </div>     
          <Link
            to="/"
            className={`menu-item ${currentTab === "home" ? "active" : ""}`}
            onClick={() => setCurrentTab("home")}
          >
            Home
          </Link>
          </Space>
          <Space direction="vertical" size="medium">
          <div className="menu-icon" style={{marginLeft:'11px'}}>
          <ProfileIcon />
          </div>
          <Link
            to={`/profile/${defaultUser.id}`}
            className={`menu-item ${currentTab === "profile" ? "active" : ""}`}
            onClick={() => setCurrentTab("profile")}
          >
            Profile
          </Link>
          </Space>
          </Space>
        </div>
      </nav>
    </>
  );
}

export default Header;