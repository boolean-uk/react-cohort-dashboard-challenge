import { Link } from "react-router-dom"
import HomeIcon from './../../assets/home-icon.svg'
import ProfileIcon from './../../assets/profile-icon.svg'
import "./styles.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to = "/" className="sidebar-list-item">
        <div className="sidebar-list-content">
          <img src={HomeIcon} alt="home"/>
          <h3>Home</h3>
        </div>
      </Link>
      
      <Link to = "/profile" className="sidebar-list-item">
        <div className="sidebar-list-content">
          <img src={ProfileIcon} alt="profile-icon" />
          <h3>Profile</h3>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar


