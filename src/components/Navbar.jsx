import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import HomeIcon from "../assets/home-icon.svg"
import ProfileIcon from "../assets/profile-icon.svg"
import { UserContext } from '../App';

function Navbar() {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="home-item">
                        <img className="home-svg" src={HomeIcon} alt="home-svg" />
                        <span>Home</span>
                    </Link>
                    {user && (
                        <Link to={`/profile/${user.id}`} className="profile-item">
                            <img className="profile-svg" src={ProfileIcon} alt="profile-svg" />
                            <span>Profile</span>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;