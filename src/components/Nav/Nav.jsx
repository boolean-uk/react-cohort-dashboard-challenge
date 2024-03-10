import { useState } from "react"
import homeIcon from '../../assets/homeIcon.svg'
import profileIcon from '../../assets/profileIcon.svg'
import { Link } from "react-router-dom"

export default function Nav(){    
    const [navValue, setNavValue] = useState("home")

    return(
        <div className='nav-container'>
          <Link to="/">
            <div
            className={navValue === "home" ? 'nav-button nav-selected' : 'nav-button'}
            onClick={() => setNavValue("home")}
            >
              <img style={{width: '23px'}} src={homeIcon} alt="home" />
              <p className='font-paragraph font-nav'>Home</p>
            </div>
          </Link>
          <Link to="/profile">
            <div
            className={navValue === "profile" ? 'nav-button nav-selected' : 'nav-button'}
            onClick={() => setNavValue("profile")}
            >
              <img style={{width: '23px'}} src={profileIcon} alt="home" />
              <p className='font-paragraph font-nav'>Profile</p>
            </div>
          </Link>
        </div>
    )
}