import homeIcon from "../assets/home-icon.svg"
import profileIcon from "../assets/profile-icon.svg"
import { Link } from "react-router-dom";
import "../styling/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
      <div className="sidebar_option">
        <img src={homeIcon}/>
        <span>Home</span>
      </div>
      </Link>
      <Link to="/profile">
      <div className="sidebar_option">
        <img src={profileIcon}/>
        <span>Profile</span>
      </div>
      </Link>
    </div>
  );
}
export default Sidebar;