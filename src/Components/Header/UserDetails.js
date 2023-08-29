import { useContext } from "react";
import DataContext from "../../DataContext";

function UserDetails() {
    const { loggedUser } = useContext(DataContext);

    return (
        <div class="user-details">
            <div class="user-full-name">{loggedUser.name}</div>
            <div class="user-occupation">Web Developer</div>
        </div>
    );
}

export default UserDetails;
