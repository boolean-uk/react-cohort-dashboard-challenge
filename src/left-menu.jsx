import { Link, } from "react-router-dom"
import homeicon from "./assets/homeicon.svg";
import profileicon from "./assets/profileicon.svg";
function LeftMenu() {
  return (
    <aside>
      <div className="left-menu">
        <img src={homeicon} className="home-icon" alt="home-icon" />
        <Link to="/">HOME</Link> <br />
        <img
          src={profileicon}
          className="profile-icon"
          alt="profile-icon"
        />
        <Link to="/form">PROFILE</Link>
      </div>
    </aside>
  );
}
export default LeftMenu;
