import titleHeaderLogo from "../assets/title-header-svg.svg";
import ProfileIcon from "./ProfileIcon";

export default function Header() {
  return (
    <header>
      <img src={titleHeaderLogo} alt="title-header-logo" width={340} />
      <ProfileIcon />
    </header>
  );
}
