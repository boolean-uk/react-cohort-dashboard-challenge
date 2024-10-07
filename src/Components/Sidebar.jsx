import { Link } from "react-router-dom";
import profileIcon from "../assets/profile-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import "./Styling/Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      
      <ul>
        <li>
          <Link to="/" className="sidebar-link">
            <img src={homeIcon} className="sidebar-icon" alt="Home Icon" />
            <label className="sidebar-text">Home</label>
          </Link>
        </li>
        <li>
          <Link to="/Profile" className="sidebar-link">
            <img src={profileIcon} className="sidebar-icon" alt="Profile Icon" />
            <label className="sidebar-text">Profile</label>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;