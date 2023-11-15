import NavButton from "./subcomponents/navButton";

import homeIcon from "./assets/home.svg"
import profileIcon from "./assets/profile-icon.svg"

function Menu() {
    return (
        <>
        <nav className="menu">
            <ul>
                <NavButton
                name="Home"
                link="/"
                icon={homeIcon}
                />
                <NavButton
                name="Profile"
                link="/profile"
                icon={profileIcon}
                />
            </ul>
        </nav>
        </>
    )
}

export default Menu;