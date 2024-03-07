import React from 'react'
import { Link } from 'react-router-dom'

import homeIcon from "../assets/house-icon.svg";
import profileIcon from "../assets/profile-icon.svg";


import "../styles/Nav.css"

export default function Nav() {
    return (
        <>
        <div className="nav-menu">
            <ul>
                <li className="nav-button">
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                        <img src={homeIcon} className="navigation__item-icon" />
                        <span className="navigation__item-text">Home</span>
                    </Link>
                </li>
                <li className="nav-button">
                    <Link to="/profile">
                        <i className="fa-regular fa-user"></i>
                        <img src={profileIcon} className="navigation__item-icon" />
                        <span className="navigation__item-text">Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}