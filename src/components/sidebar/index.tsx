import React from 'react';
import './styles/sidebar.css';
import HomeIcon from '../../assets/home-icon';
import ProfileIcon from '../../assets/profile-icon';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='sidebar-container'>
      <Link to='/' className={`item-container ${location.pathname === '/' ? 'active' : ''}`}>
        <HomeIcon />
        <p>Home</p>
      </Link>
      <div className='item-container'>
        <ProfileIcon />
        <p>Profile</p>
      </div>
    </div>
  )
}

export default Sidebar;