// Navigation component
import { Link, useLocation } from "react-router-dom";
import GetUser from "./Profile/GetUser";
import HeaderLogo from "../../assets/react.svg";

export default function SidebarNavigation() {
  const location = useLocation();

  const { user } = GetUser({ userId: 1 });

  return (
    <div className="topnav">
      <div className="top-right-element">
        <Link
          to="/profile"
          className="circle"
          style={{ backgroundColor: user.favouriteColour }}
        >
          {user.firstName && user.firstName.charAt(0)}
          {user.lastName && user.lastName.charAt(0)}
        </Link>
      </div>
      <div className="sidebar">
        <div className="logo">
          <img src={HeaderLogo} alt="Logo" />
        </div>

        <div className="navigation glow">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
