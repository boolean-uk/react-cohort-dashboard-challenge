import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/home-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";

function Sidebar() {
    return (
        <nav className="sidebar red">
        <Link to="/" className="sidebar-link">
            <div className="icon-container">
            <img src={homeIcon} className="icon" alt="Home" />
            <span>Home</span>
            </div>
        </Link>
        <Link to="/profile" className="sidebar-link">
            <div className="icon-container">
            <img src={profileIcon} className="icon" alt="Profile" />
            <span>Profile</span>
            </div>
        </Link>
        </nav>
    );
}

export default Sidebar;
