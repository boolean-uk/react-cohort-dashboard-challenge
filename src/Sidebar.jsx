import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActiveContext } from "./App";
import profileIcon from "./assets/profile-icon.svg";
import homeIcon from "./assets/home-icon.svg";
import './style/Sidebar.css'
function Sidebar() {
  const context = useContext(ActiveContext);
  const { active } = context;
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <Link to="/">
          <img className="icon" src={homeIcon} />
        </Link>
      </div>
      <div className="sidebar-icon">
        <Link to={`/profile/${active.id}`}>
          <img src={profileIcon} />{" "}
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
