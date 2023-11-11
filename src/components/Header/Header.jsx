import HeaderLogo from "../../assets/title-header-svg.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={HeaderLogo} width={350} />
    </header>
  );
}

export default Header;
