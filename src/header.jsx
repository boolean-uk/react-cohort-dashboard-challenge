import titleheader from "./assets/titleheader.svg";
import UserProfilePic from "./Userpicture";

function Header() {
  return (
    <header className="header-container">
      <img src={titleheader} className="boolean-header" alt="boolean header" />
      <UserProfilePic></UserProfilePic>
    </header>
  );
}
export default Header;
