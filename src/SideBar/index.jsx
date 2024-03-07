import { Link } from "react-router-dom";
import homeIconSvg from "../_assets/home-icon.svg";
import profileIconSvg from "../_assets/profile-icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home-icon-class">
        <Link to="/">
          <img src={homeIconSvg} />
        </Link>
        <div className="home-text">Home</div>
      </div>
      <div className="profile-icon-class">
        <Link to="/profile">
          <img src={profileIconSvg} />
        </Link>
        <div className="profile-text">Profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
