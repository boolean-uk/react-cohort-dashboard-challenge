import { Link } from "react-router-dom";
import { useContext } from "react";

import "./style.css";

// icons
import homeIcon from "../assets/img/house-icon.svg";
import profileIcon from "../assets/img/profile-icon.svg";

// context
import { MainContext } from "../App";

const Navigation = () => {
    const { page } = useContext(MainContext);

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link
                        to="/"
                        className={`navigation__link ${
                            page === "home" && "navigation__link-active"
                        } `}
                    >
                        <img src={homeIcon} className="navigation__item-icon" />
                        <span className="navigation__item-text">Home</span>
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link
                        to="/profile/1"
                        className={`navigation__link ${
                            page === "profile" && "navigation__link-active"
                        }`}
                    >
                        <img
                            src={profileIcon}
                            className="navigation__item-icon"
                        />
                        <span className="navigation__item-text">Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
