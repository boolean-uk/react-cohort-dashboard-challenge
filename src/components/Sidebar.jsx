import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from './Icons/HomeIcon'
import "./styles/LeftBar.css"
import ProfileIcon from './Icons/ProfileIcon'
import { UsersContext } from '../App'

export function Sidebar() {



    const {currentUser} = useContext(UsersContext)

    if ( !currentUser ) return <h1>Loading ...</h1>

    return (
        <nav className="left-menu">
            <ul className="page-list">
                <Link to="/" className="nav-button">
                    <li className={"item" }>
                        <HomeIcon />
                        Home
                    </li>
                </Link>
                <Link to={`/profile/${currentUser.id}`} className="nav-button">
                    <li className={"item"}>
                        <ProfileIcon />
                        Profile
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
