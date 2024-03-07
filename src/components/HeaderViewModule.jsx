import TitleHeader from "../assets/title_header_svg.svg";
import { getInitials } from "../utils/getInitials";
import "./HeaderViewModule.css";
import UserCircle from "./UserCircle";

function HeaderViewModule() {
  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");
  const userfavouriteColour = localStorage.getItem("favouriteColour");

  const userInitials = getInitials(`${userFirstName} ${userLastName}`);

  return (
    <>
      <section>
        <img src={TitleHeader} alt="Home Icon" />
        {userInitials ? (
          <UserCircle
            userFirstName={userFirstName}
            userLastName={userLastName}
            userfavouriteColour={userfavouriteColour}
          />
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </>
  );
}

export default HeaderViewModule;
