import homeIcon from "../assets/images/homeicon.svg";
import profIcon from "../assets/images/profileicon.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

function SideBar() {
  const context = useContext(AppContext);
  const location = useLocation();

  return (
    <nav className="sidebar red">
      <div
        className={
          location.pathname.includes("profile")
            ? "home-icon-div"
            : "home-icon-div-chosen"
        }
      >
        <div className="home-icon">
          <Link to={`/`} className="profile-link">
            <img src={homeIcon} />
          </Link>
        </div>
      </div>
      <div
        className={
          location.pathname.includes("profile")
            ? "home-icon-div-chosen"
            : "home-icon-div"
        }
      >
        <div className="prof-icon">
          <Link to={`/profile/${context.user.id}`} className="profile-link">
            <img src={profIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
