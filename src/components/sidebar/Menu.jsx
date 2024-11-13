import MenuItem from "./MenuItem";
import homeIcon from "../../assets/home-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import "./sidebar.css";

function Menu() {
  return (
    <div className="sidebar">
      <MenuItem icon={homeIcon} title={"Home"}/>
      <MenuItem icon={profileIcon} title={"Profile"} />
    </div>
  );
}

export default Menu;