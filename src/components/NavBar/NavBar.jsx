import { useState } from "react";
import theHomeLogo from "../../assets/home-icon-svg.svg";
import theProfileLogo from "../../assets/profile-icon-svg.svg";
import "./NavBar.css";

function NavBar() {
  const [homeActive, setHomeActive] = useState("active");
  const [profile, setProfile] = useState("");
  return (
    <>
      <aside>
        <button className={`navbar__btn ${homeActive}`}>
          <img src={theHomeLogo} alt="home__logo" width={30} />
          <span>Home</span>
        </button>
        <button className={`navbar__btn ${profile}`}>
          <img src={theProfileLogo} alt="profile__logo" width={30} />
          <span>Profile</span>
        </button>
      </aside>
    </>
  );
}

export default NavBar;
