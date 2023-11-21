import FirstContact from "./HeaderComponents/FirstContact";
import TitleLogo from "./HeaderComponents/TitleLogo";
import "./Header.css";

function Header(props) {
  const { contactIdOne, setContactIdOne } = props;
  return (
    <header>
      <TitleLogo />
      <FirstContact
        contactIdOne={contactIdOne}
        setContactIdOne={setContactIdOne}
      />
    </header>
  );
}
export default Header;
