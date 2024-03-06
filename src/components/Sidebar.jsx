import React from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from './Icons/HomeIcon'
import HomeIcon from './Icons/HomeIcon'
import "./styles/LeftBar.css"

export function Sidebar(props) {



    return (
        <nav className="left-menu">
            <ul className="page-list">
                <li className={"item active"}>
                    <Link to="/" className="nav-button">
                        <HomeIcon />
                        Home
                    </Link>
                </li>
                <li className={"item"}>
                    <Link to="/profile" className="nav-button">
                        <ProfileIcon/>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
