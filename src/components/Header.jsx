
import { useContext } from "react";
import Logo from "../assets/title-header.svg"
import "../styles/Header.css";
import Avatar from "./Avatar";
import { UserContext } from "../App";

export default function Header() {

  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="cohort-logo">
        <img className="cohort-svg" src={Logo} alt="cohort-logo" />
      </div>
      <div className="userAvatar">
        {user && user.firstName && user.lastName && (
          <Avatar userId={user.id} firstName={user.firstName} lastName={user.lastName} favouriteColour={user.favouriteColour} />
        )}
      </div>
    </header>
  );
}