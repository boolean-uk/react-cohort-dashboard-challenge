import logo from "../assets/img/header-logo.svg";
import "./style.css";

// components
import UserCycle from "./UserCycle";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" />

            <UserCycle name={{ firstName: "Nazar", lastName: "Tymiv" }} />
        </header>
    );
};

export default Header;
