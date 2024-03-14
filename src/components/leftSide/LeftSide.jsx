import React from 'react'
import '../../styles/LeftSide.css'
import HomeIcon from '../../assets/leftside-home.svg'
import ProfileIcon from '../../assets/leftside-profile.svg'
import { UsersContext } from '../../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


function LeftSide() {
    const {currentUser} = useContext(UsersContext)
    if ( !currentUser ) return <h1>Loading ...</h1>

    return (
        <div className="left-side">
            <Link to="/" className='icon-box'>
                <img src={HomeIcon} alt="Home" />
                <p><b>Home</b></p>
            </Link>
            <Link to={`/profile/${currentUser.id}`} className='icon-box'>
                <img src={ProfileIcon} alt="Profile" />
                <p><b>Profile</b></p>
            </Link>
        </div>
    )
}

export default LeftSide
