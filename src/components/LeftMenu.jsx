// LeftMenu.jsx

import '../styles/LeftMenu.css';
import homeIcon from '../assets/home-icon.svg';
import profileIcon from '../assets/profile-icon.svg'

export const LeftMenu = () => {
    return (
      <div className="left-menu">
        <div className='options'>
            <img
                className="icon"
                src={homeIcon}
                alt="home-icon"
            />
            <p>Home</p>
        </div>
        <div className='options'>
            <img
                className="icon"
                src={profileIcon}
                alt="profile-icon"
            />
            <p>Profile</p>
        </div>
      </div>
    );
}