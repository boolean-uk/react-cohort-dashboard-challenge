import { useState } from "react";
import homeLogo from "../assets/home-icon-svg.svg";
import profileLogo from "../assets/profile-icon-svg.svg";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [homeClass, setHomeClass] = useState("active");
  const [profileClass, setProfileClass] = useState("");

  return (
    <aside>
      <button
        className={`home nav-btn ${homeClass}`}
        onClick={() => {
          setHomeClass("active");
          setProfileClass("");
          navigate("/");
        }}
      >
        <img src={homeLogo} alt="home-logo" width={30} />
        <span>Home</span>
      </button>

      <button
        className={`profile nav-btn ${profileClass}`}
        onClick={() => {
          setProfileClass("active");
          setHomeClass("");
          navigate("/1/profile");
        }}
      >
        <img src={profileLogo} alt="home-logo" width={30} />
        <span>Profile</span>
      </button>
    </aside>
  );
}
