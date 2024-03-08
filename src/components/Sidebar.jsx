import { Link } from "react-router-dom";
import profileIcon from "../assets/profile-icon.svg";
import homeIcon from "../assets/home-icon.svg";

export default function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        Sidebar
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <img src={homeIcon} className="sidebar-icon" />
              <label className="sidebar-text">Home</label>
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="sidebar-link">
              <img src={profileIcon} className="sidebar-icon" />
              <label className="sidebar-text">Profile</label>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
