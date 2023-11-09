import homeLogo from "../assets/home-icon-svg.svg";
import profileLogo from "../assets/profile-icon-svg.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <aside>
      <div className="home nav-btn active">
        <img src={homeLogo} alt="home-logo" width={30} />
        <Link className="page-link" to="/">
          Home
        </Link>
      </div>

      <div className="profile nav-btn">
        <img src={profileLogo} alt="profile-logo" width={30} />
        <Link className="page-link" to="/1/profile">
          Profile
        </Link>
      </div>
    </aside>
  );
}
