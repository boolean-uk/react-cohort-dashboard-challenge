import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
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
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8
    </div>
  );
};

export default Sidebar;
