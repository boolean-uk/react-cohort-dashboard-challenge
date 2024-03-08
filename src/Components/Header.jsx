import React from "react";
import TitleHeader from "../assets/title-header.svg";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../Utils/helpers";
function Header() {
  const { loggedInUser } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="header" style={{display: "flex"}}>
      <img src={TitleHeader} alt="Title Header" />
      {loggedInUser && (
        <div
          onClick={() => {
            navigate(`/profile/${loggedInUser.id}`);
          }}
          className="profile-picture"
          style={{ backgroundColor: loggedInUser.favouriteColour, role: "button", marginLeft: "auto"}}
        >
          <p>{getInitials(loggedInUser.name)}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
