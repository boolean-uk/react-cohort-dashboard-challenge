import { useContext } from "react";
import DataContext from "../DataContext";
import { getInitials } from "../Utils";
import TitleHeader from "./Logos/TitleHeader";
import { Link } from "react-router-dom";

function Header(props) {
    const { loggedUser } = useContext(DataContext);

    if (!loggedUser) {
        return null;
    }
    return (
        <header class="main-header">
            <div>
                <Link to={"/"}>
                    <TitleHeader />
                </Link>
            </div>
            <div class="user-info">
                <Link to={`/view/profile/${loggedUser.id}`} style={{ textDecoration: 'none' }} >
                    <div class="user-circle-own">
                        {getInitials(loggedUser.name)}
                    </div>
                </Link>
                <div class="user-details">
                    <div class="user-full-name">{loggedUser.name}</div>
                    <div class="user-occupation">Web Developer</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
