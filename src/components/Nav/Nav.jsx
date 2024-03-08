import { useState } from "react"
import homeIcon from '../../assets/homeIcon.svg'
import profileIcon from '../../assets/profileIcon.svg'
export default function Nav(){
    const [navValue, setNavValue] = useState("home")

    return(
        <div className='nav-container'>
          <div
          className={navValue === "home" ? 'nav-button nav-selected' : 'nav-button'}
          onClick={() => setNavValue("home")}
          >
            <img style={{width: '23px'}} src={homeIcon} alt="home" />
            <p className='font-paragraph font-nav'>Home</p>
          </div>
          <div
          className={navValue === "profile" ? 'nav-button nav-selected' : 'nav-button'}
          onClick={() => setNavValue("profile")}
          >
            <img style={{width: '23px'}} src={profileIcon} alt="home" />
            <p className='font-paragraph font-nav'>Profile</p>
          </div>
        </div>
    )
}