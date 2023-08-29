import { useContext } from "react";
import DataContext from "../../DataContext";
import TitleHeader from "../Logos/TitleHeader";
import { Link } from "react-router-dom";
import LoggedUserCircle from "./LoggedUserCircle";
import UserDetails from "./UserDetails";
import Loader from "../Loader";

function Header() {
    const { loggedUser } = useContext(DataContext);

    if (!loggedUser) {
        return <Loader/>;
    }
    
    return (
        <header class="main-header">
            <div>
                <Link to={"/"}>
                    <TitleHeader />
                </Link>
            </div>
            <div class="user-info">
                <LoggedUserCircle />
                <UserDetails />
            </div>
        </header>
    );
}

export default Header;
