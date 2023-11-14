import React from 'react'
import { Link } from 'react-router-dom'


import "./nav.css"

export default function Nav() {
    return (
        <>
        <div className="nav-menu">
            <ul>
                <li className="nav-button"><Link to="/">
                <i className="fa-solid fa-house"></i>
                    <p>Feed</p></Link>
                </li>
                <li className="nav-button"><Link to="/profile">
                <i className="fa-regular fa-user"></i>
                    <p>Profile</p></Link>
                </li>
            </ul>
        </div>
        </>
    )
}