/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import home from '../../assets/home-icon.svg'
import profile from '../../assets/profile-icon.svg'

export default function Sidebar({ HomeClicked, setHomeClicked}) {
  const navigate = useNavigate()
  const location = useLocation()
  const [ProfileClicked, setProfileClicked] = useState(false)

  const goToHome = () => {
    navigate('/Home')
    setHomeClicked(true)
    setProfileClicked(false) 
  }

  const goToProfile = () => {
    navigate('/Profile')
    setHomeClicked(false) 
    setProfileClicked(true)
  }

  return (
    <div className="sidebar">
      <button className={`home ${location.pathname === '/Home' ? 'active' : ''}`} onClick={goToHome}>
        <img src={home} alt="Home Icon" /><br />
        Home
      </button>
      <button className={`profile ${location.pathname === '/Profile' ? 'active' : ''}`} onClick={goToProfile}>
        <img src={profile} alt="Profile Icon" /><br />
        Profile
      </button>
    </div>
  )
}
