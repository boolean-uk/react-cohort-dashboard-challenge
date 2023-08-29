import { Link } from "react-router-dom";
import { getInitials } from "../../Utils";
import { useContext } from "react";
import DataContext from "../../DataContext";

function LoggedUserCircle() {
    const { loggedUser } = useContext(DataContext);
    
    return (
        <Link
            to={`/view/profile/${loggedUser.id}`}
            style={{ textDecoration: "none" }}
        >
            <div class="user-circle-own">{getInitials(loggedUser.name)}</div>
        </Link>
    );
}

export default LoggedUserCircle;
