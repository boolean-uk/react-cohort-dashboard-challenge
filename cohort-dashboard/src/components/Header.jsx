import titleHeaderLogo from "../assets/title-header-svg.svg";
import UserProfileIcon from "../pages/Home/components/UserProfileIcon";

export default function Header() {
  return (
    <header>
      <img src={titleHeaderLogo} alt="title-header-logo" width={340} />
      <UserProfileIcon />
    </header>
  );
}
