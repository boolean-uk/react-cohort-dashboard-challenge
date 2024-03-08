import { Link } from "react-router-dom";
import Home from "../assets/home.svg";
import Profile from "../assets/profile.svg";
import { useContext } from "react";
import { UserContext } from "../App";

function NavLeft() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="nav-left">
      <Link to={"/feed"} style={{ textAlign: "center", margin: "15px 0" }}>
        <img src={Home} alt="Home" />
      </Link>
      {loggedInUser && (
        <Link
          to={`/profile/${loggedInUser.id}`}
          style={{ textAlign: "center", margin: "15px 0" }}
        >
          <img src={Profile} alt="Home" />
        </Link>
      )}
    </div>
  );
}

export default NavLeft;
