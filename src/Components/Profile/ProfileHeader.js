import { useContext } from "react";
import { getInitials } from "../../Utils";
import DataContext from "../../DataContext";
import EditProfileButton from "./EditProfileButton";

function ProfileHeader(props) {
    const { loggedUser } = useContext(DataContext);
    const { userData, id } = props;
    return (
        <div className="user-header">
            <div class="user-circle-own">{getInitials(loggedUser.name)} </div>
            <h2>{userData.name}</h2>
            <EditProfileButton id={id}/>
        </div>
    );
}

export default ProfileHeader;
