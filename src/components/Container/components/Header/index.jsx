import { useContext } from "react";
import "../../../../assets/css/Header.css"
import InitialsProfileIcon from "../../icons/InitialsProfileIcon";
import TitleIcon from "../../icons/TitleIcon"
import { LoggedInContactContext } from "../../../../App";
import { Link } from "react-router-dom";

function Header() {
    const loggedInContactContext = useContext(LoggedInContactContext)
    const { loggedInContact } = loggedInContactContext
    console.log(loggedInContact)
    return (
        <div className="Header-main">
            <TitleIcon width={300} />
            <Link to={"/profile"}>
                <InitialsProfileIcon
                    color={loggedInContact.favouriteColour}
                    initials={loggedInContact.firstName.charAt(0) + loggedInContact.lastName.charAt(0)}
                />
            </Link>
        </div>
    )
}

export default Header;