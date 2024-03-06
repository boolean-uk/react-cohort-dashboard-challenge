import homeIcon from "../assets/images/homeicon.svg";
import profIcon from "../assets/images/profileicon.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

function SideBar() {
  const context = useContext(AppContext);

  return (
    <nav className="sidebar red">
      <div className="home-icon">
        <Link to={`/`} className="profile-link">
          <img src={homeIcon} />
        </Link>
      </div>
      <div className="prof-icon">
        <Link to={`/profile/${context.user.id}`} className="profile-link">
          <img src={profIcon} />
        </Link>
      </div>
    </nav>
  );
}

export default SideBar;
