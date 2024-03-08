import TitleHeader from "../assets/title-header.svg";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function NavTop() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    setLoggedInUser(null);
    localStorage.removeItem("userId");
    navigate("/login");
  }

  return (
    <div className="nav-top">
      <img
        style={{ marginLeft: "20vb", padding: "10px 0px" }}
        src={TitleHeader}
        alt="SVG PIC"
      />
      <div className="spacer"></div>
      <button
        style={{ backgroundColor: "blue", margin: "10px 10px" }}
        onClick={handleLogout}
      >
        Log out
      </button>
      {loggedInUser && (
        <div
          className="initials"
          style={{
            backgroundColor: loggedInUser.favouriteColour,
            color: "black",
            marginRight: "30px",
          }}
        >
          {loggedInUser.firstName[0]}
          {loggedInUser.lastName[0]}
        </div>
      )}
    </div>
  );
}

export default NavTop;
