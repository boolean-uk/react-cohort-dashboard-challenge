import { Link } from "react-router-dom";
import ProfileIcon from "../Logos/ProfileIcon";
import { useContext } from "react";
import DataContext from "../../DataContext";

function ProfileComponent() {
    const { loggedUser } = useContext(DataContext);

    return (
        <Link
            to={`/view/profile/${loggedUser.id}`}
            style={{ textDecoration: "none" }}
        >
            <div class="nav-item">
                <ProfileIcon />
                <div class="nav-label">Profile</div>
            </div>
        </Link>
    );
}

export default ProfileComponent;
