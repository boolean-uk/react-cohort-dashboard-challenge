import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ActiveContext } from "./App";
import profileIcon from "./assets/profile-icon.svg";
import homeIcon from "./assets/home-icon.svg";
import "./style/Sidebar.css";
function Sidebar() {
  const context = useContext(ActiveContext);
  const { active } = context;
  const [tab, setTab] = useState(window.location.pathname);

  return (
    <div className="sidebar" onClick={() => setTab(window.location.pathname)}>
      <Link to="/">
        <div
          className="sidebar-icon"
          style={{ background: tab === "/" ? "#e6ebf5" : "#ffffff" }}
        >
          <img className="icon" src={homeIcon} style={{ fill: 'blue' }} />
                  </div>
      </Link>
      <Link to={`/profile/${active.id}`}>
        <div
          onClick={() => setTab(window.location.pathname)}
          className="sidebar-icon"
          style={{
            background: tab.startsWith("/profile/") ? "#e6ebf5" : "#ffffff",
          }}
        >
          <img src={profileIcon} />
        </div>
      </Link>
    </div>
  );
}
export default Sidebar;
