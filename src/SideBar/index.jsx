import { Link } from "react-router-dom";
import homeIconSvg from '../_assets/home-icon.svg'
import profileIconSvg from '../_assets/profile-icon.svg'

const Sidebar = () => {

  return (
    <div className="sidebar">
      <Link to="/">
        <div>Home</div>
        <img className="home-icon-class" src={homeIconSvg} />
      </Link>
      <br />
      <Link to="/profile">
        <div>Profile</div>
        <img className="profile-icon-class" src={profileIconSvg} />
      </Link>
    </div>
  );
};

export default Sidebar;
