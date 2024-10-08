/* eslint-disable no-unused-vars */
import { Routes, Route, Link} from 'react-router-dom'
import profileIcon from '/profile-icon.svg'
import homeIcon from '/home-icon.svg'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
       <div className="nav-layout">
            <nav className="navbar">
                <ul>
                    <li className='navbar-icon'>
                        <Link to='/' > 
                            <img src={homeIcon} className='nav-logo' alt="Home icon"/>
                            <br />
                            Home
                        </Link>
                    </li>
                    
                    <li className='navbar-icon'>
                        <Link to='/profile'>
                            <img src={profileIcon} className='nav-logo' alt="Profile icon" />
                            <br />
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
       </div>
    );
}