import UserIcon from "./UserIcon";
import { appContext } from "../App";
import { useContext } from "react";
import Logo from  "../assets/logo.svg"

export default function Header() {
    const { loggedInUser } =
      useContext(appContext);

    return (
      <header>
        <div className="cohort-logo">
          <img className="cohort-svg" src={Logo} alt="cohort-logo" />
        </div>
        <UserIcon userInfo={loggedInUser} />
      </header>
    );
}