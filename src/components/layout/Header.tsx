import React from "react";
import Logo from "./Logo";
import Avatar from "../user/Avatar";
import '../../styling/header.css';

const Header = () => {

    return (
        <div className="header-container">
            <div className="header-logo-section">
                <Logo />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;