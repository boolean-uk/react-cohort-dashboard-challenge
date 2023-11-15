import logo from "../assets/img/header-logo.svg";
import "./style.css";

// components
import UserCycle from "./UserCycle";

const Header = ({ user }) => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" />

            {Object.keys(user).length && (
                <UserCycle
                    name={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }}
                    userId={user.id}
                />
            )}
        </header>
    );
};

export default Header;
