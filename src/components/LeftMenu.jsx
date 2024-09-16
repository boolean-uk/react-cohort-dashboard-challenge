// LeftMenu.jsx
import '../styles/LeftMenu.css';

import homeIcon from '../assets/home-icon.svg';
import profileIcon from '../assets/profile-icon.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './App';

export const LeftMenu = () => {
    const authUser = useContext(AuthContext);

    return (
        <div className="left-menu">
            <NavLink to="/" className="options" >
                <img className="icon" src={homeIcon} alt="home-icon" />
                <p>Home</p>
            </NavLink>

            <NavLink to={`/profile/${authUser.id}`} className="options" >
                <img className="icon" src={profileIcon} alt="profile-icon" />
                <p>Profile</p>
            </NavLink>
        </div>
    );
}
