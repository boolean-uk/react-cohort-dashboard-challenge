import { useState } from "react";

import homeicon from "./assets/homeicon.svg";
import Profileicon from "./assets/Profileicon.svg";
import { Link, useNavigate } from "react-router-dom";
function LeftMenu() {
  const navigator = useNavigate();
  const [homeActive, setHomeActive] = useState("active");
  const [profile, setProfile] = useState("");

  return (
    <>
      <aside>
        <button
          className={`navbarbutton ${homeActive}`}
          onClick={() => {
            setHomeActive("active");
          

            navigator("/");
          }}
        >
        
            <img
              src={homeicon}
              className="home-icon"
              alt="home-icon"
              width={35}
            />
            <span>HOME</span>
      
        </button>
        <button className={`navbarbutton ${profile}`}
          >
          <img
            src={Profileicon}
            className="profile-icon"
            alt="profile-icon"
            width={35}
          />
    
            <p>PROFILE</p>
    
        </button>
      </aside>
    </>
  );
}
export default LeftMenu;
