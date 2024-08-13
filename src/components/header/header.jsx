import Logo from "../logo/logo";
import InitialsButton from "../buttons/initialsButton";

const Header = ({ currentUser }) => {

  return (
    <header>
      <Logo/>
      <InitialsButton currentUser = { currentUser }/>
    </header>
  );
};

export default Header;
