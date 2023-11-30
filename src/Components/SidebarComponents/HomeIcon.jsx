import React from "react";
//import Profilelogo from "../../../assets/ProfileIcon.svg";
//import HomeLogo from "../../assets/home-icon-svg.md";
import { useNavigate } from "react-router-dom";

import "./HomeIcon.css";
function HomeIcon() {
  const navigate = useNavigate();
  return (
    <>
      <figure onClick={() => navigate("/")}>
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </figure>

      <figure onClick={() => navigate("/profile")}>
        <i className="fa-regular fa-circle-user"></i>
        <p>Profile</p>
      </figure>
    </>
  );
}

export default HomeIcon;