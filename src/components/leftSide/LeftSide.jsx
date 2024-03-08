import React from 'react'
import '../styles/LeftSide.css'
import HomeIcon from '../assets/leftside-home.svg'
import ProfileIcon from '../assets/leftside-profile.svg'


function LeftSide() {

    const handleHomeClick = () => {
        console.log("Home says hi")
    }
    
    const handleProfileClick = () => {
        console.log("Profile says hi")
    }

    return (
        <div className="left-side">
            <button className="icon-box" onClick={handleHomeClick}>
                <img src={HomeIcon} alt="Home" />
                <p><b>Home</b></p>
            </button>
            <button className="icon-box" onClick={handleProfileClick}>
                <img src={ProfileIcon} alt="Profile" />
                <p><b>Profile</b></p>
            </button>
        </div>
    )
}

export default LeftSide
