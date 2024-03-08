// LeftMenu.jsx

import '../styles/LeftMenu.css';
import homeIcon from '../assets/home-icon.svg';
import profileIcon from '../assets/profile-icon.svg'
import { Link } from 'react-router-dom';

export const LeftMenu = () => {
    return (
      <div className="left-menu">
        <Link to="/" className="options">
          <img className="icon" src={homeIcon} alt="home-icon" />
          <p>Home</p>
        </Link>

        <Link to="/profile/1" className="options">
          <img className="icon" src={profileIcon} alt="profile-icon" />
          <p>Profile</p>
        </Link>
      </div>
    );
}