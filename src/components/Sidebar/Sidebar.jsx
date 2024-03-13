import { useNavigate } from 'react-router-dom'
import home from '../../assets/home-icon.svg'
import profile from '../../assets/profile-icon.svg'

export default function Sidebar() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/Home')
  }

  const goToProfile = () => {
    navigate('/Profile')
  }

  return (
    <div className="sidebar">
      <button className="home" onClick={goToHome}>
        <img src={home} alt="Home Icon" /><br />
        Home
      </button>
      <button className="profile" onClick={goToProfile}>
        <img src={profile} alt="Profile Icon" /><br />
        Profile
      </button>
    </div>
  )
}
