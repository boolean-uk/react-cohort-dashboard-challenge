import TitleHeader from "../assets/title_header_svg.svg";
import { getInitials } from "../utils/getInitials";
import "./HeaderViewModule.css";

function HeaderViewModule() {
  const userInitials = getInitials(
    `${localStorage.getItem("userFirstName")} ${localStorage.getItem(
      "userLastName"
    )}`
  );
  return (
    <>
      <section>
        <img src={TitleHeader} alt="Home Icon" />
        {userInitials ? (
          <div className="initials-circle">{userInitials}</div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </>
  );
}

export default HeaderViewModule;
