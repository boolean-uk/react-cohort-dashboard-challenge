import HeaderLogo from "../../assets/title-header-svg.svg";
import UserPicture from "../../views/Home/components/UserPicture";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={HeaderLogo} alt="title-header-logo" width={400} />

      <UserPicture />
    </header>
  );
}

export default Header;
