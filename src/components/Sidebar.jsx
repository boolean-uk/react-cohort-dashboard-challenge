import { Link } from "react-router-dom";
import "../App.css";
import HomeIcon from "../assets/HomeIcon";
import ProfileIcon from "../assets/ProfileIcon";
export default function SideBar() {
  return (
    <>
      <div className="sideBar">
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/profile">
          <ProfileIcon />
        </Link>
      </div>
    </>
  );
}
