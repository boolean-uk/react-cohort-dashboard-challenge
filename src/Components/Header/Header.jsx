import logo from "../../assets/title-header-svg.svg";
import ProfileIcon from "./ProfileIcon";
import './Header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <ProfileIcon />
    </header>
  );
}