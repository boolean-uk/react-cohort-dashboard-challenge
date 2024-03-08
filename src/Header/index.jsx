import "./index.css";
import { useContext } from "react";
import { UserContext } from "../App";
import titleHeader from "../assets/title-header.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  let mainUser = userContext.users.find(
    (user) => user.id === userContext.mainUserId
  );

  if (!mainUser) return <div></div>;

  const goToProfile = () => {
    navigate(`/view_profile/${mainUser.id}`);
  };

  return (
    <header className="header">
      <img className="header_image" src={titleHeader} alt="title header" />
      <div className="circle_container">
        <button
          className=" header_circle_button"
          style={{ backgroundColor: mainUser.favouriteColour }}
          onClick={goToProfile}
        >
          <p className=" header_circle_text">
            {mainUser.firstName.charAt(0)}
            {mainUser.lastName.charAt(0)}
          </p>
        </button>
      </div>
    </header>
  );
}
