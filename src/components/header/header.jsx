import logo from "../../assets/logo.svg";
import "./style.scss";
import UserIcon from "../profileIcon/ProfileIcon";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

export default function Header() {
  const userContext = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const user = userContext.currentUser;
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setFavouriteColour(user.favouriteColour);
    setUserId(user.contactId);
  });

  return (
    <div className="headerParent">
      <div className="logoParent">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="userDiv">
        <UserIcon
          letters={firstName.charAt(0) + lastName.charAt(0)}
          setFavouriteColour={favouriteColour}
          id={parseInt(userId)}
        />
      </div>
    </div>
  );
}
