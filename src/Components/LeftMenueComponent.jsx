import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeLogo.svg";
import ProfileIcon from "../assets/ProfileLogo.svg";

export default function LeftMenueComponent() {
  return (
    <div className="leftmenu-layout">
      <button>
        <Link to="/">
          <img src={HomeIcon} alt="Home" />
          Home
        </Link>
      </button>
      <button>
        <Link to="/profile">
          <img src={ProfileIcon} alt="Profile" />
          Profile
        </Link>
      </button>
    </div>
  );
}
