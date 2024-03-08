import { Link } from "react-router-dom";
import Home from "../assets/home.svg";
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
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="initials"
            style={{
              backgroundColor: loggedInUser.favouriteColour,
              color: "black",
            }}
          >
            {loggedInUser.firstName[0]}
            {loggedInUser.lastName[0]}
          </div>
        </Link>
      )}
    </div>
  );
}

export default NavLeft;
