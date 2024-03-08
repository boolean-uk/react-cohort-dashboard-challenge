import { Link } from "react-router-dom";
import profileicon from "./ProfileSvg.svg";
import homeicon from "./HomeSvg.svg";
import { MyContext } from "../../App.jsx";
import { useContext } from "react";
export default function SideBar() {
  const context = useContext(MyContext);
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to={`/home/${context.currentUser.id}`}>
            <img src={homeicon} className="icon" />
          </Link>
        </li>
        <li>
          <Link to={`/profile/${context.currentUser.id}`}>
            <img src={profileicon} className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
