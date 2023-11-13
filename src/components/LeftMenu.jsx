//contains all the leftmenu information and images
import homeImg from "../assets/home.svg";
import profileImg from "../assets/profile.svg";
import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <>
      <div className="left-menu">
          <div className="whole-logo">
            <img
              className="home-logo"
              src={homeImg}
              width={40}
              alt="home logo"/>

            <Link to="/" className="home">
              Home
            </Link>
          </div>

          <div className="whole-profile">
            <img
              className="profile-logo"
              src={profileImg}
              width={40}
              alt="profile logo"
            />
            <Link to="/Profile" className="profile">
              Profile
            </Link>
          </div>
        </div>
    </>
  )
}

export default LeftMenu;