import "./style.css";

// icons
import homeIcon from "../assets/img/house-icon.svg";
import profileIcon from "../assets/img/profile-icon.svg";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a
                        href="#"
                        className="navigation__link navigation__link-active"
                    >
                        <img src={homeIcon} className="navigation__item-icon" />
                        <span className="navigation__item-text">Home</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        <img
                            src={profileIcon}
                            className="navigation__item-icon"
                        />
                        <span className="navigation__item-text">Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
