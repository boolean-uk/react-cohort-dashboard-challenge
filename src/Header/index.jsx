import "./index.css";
import { useContext } from "react";
import { UserContext } from "../App";
import titleHeader from "../assets/title-header.svg";

export default function Header() {
  
  const userContext = useContext(UserContext);

  let mainUser = userContext.users.find(
    (user) => user.id === userContext.mainUserId
  );
  if (!mainUser) return <div></div>;

  return (
    <header className="header">
      <img className="header_image" src={titleHeader} alt="title header" />
      <div className="circle_container">
        <div className=" header_circle">
          <p className=" header_circle_text">
            {mainUser.firstName.charAt(0)}
            {mainUser.lastName.charAt(0)}
          </p>
        </div>
      </div>
    </header>
  );
}
