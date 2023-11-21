import FirstContact from "./HeaderComponents/FirstContact";
import TitleLogo from "./HeaderComponents/TitleLogo";
import "./Header.css";

function Header() {
  return (
    <header>
      <TitleLogo />
      <FirstContact />
    </header>
  );
}
export default Header;
