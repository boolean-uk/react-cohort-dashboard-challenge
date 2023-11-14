import { useState } from "react";
import theHomeLogo from "../../assets/home-icon-svg.svg";
import theProfileLogo from "../../assets/profile-icon-svg.svg";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigator = useNavigate();
  const [homeActive, setHomeActive] = useState("active");
  const [profile, setProfile] = useState("");
  return (
    <>
      <aside>
        <button
          className={`navbar__button ${homeActive}`}
          onClick={() => {
            setHomeActive("active");
            setProfile("");
            navigator("/");
          }}
        >
          <img src={theHomeLogo} alt="home__logo" width={35} />
          <span>Home</span>
        </button>
        <button
          className={`navbar__button ${profile}`}
          onClick={() => {
            setProfile("active");
            setHomeActive("");
          }}
        >
          <img src={theProfileLogo} alt="profile__logo" width={35} />
          <span>Profile</span>
        </button>
      </aside>
    </>
  );
}

export default NavBar;
