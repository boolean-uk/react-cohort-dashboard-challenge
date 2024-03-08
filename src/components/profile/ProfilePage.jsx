import "../../style/profile/ProfilePage.css";
import { useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import UserIcon from "../icons/UserIcon";
import { useContext } from "react";
import { postContext } from "../../App";

const ProfilePage = () => {
    const { id } = useParams();
    const { contacts } = useContext(postContext);
    let owner = contacts.find((c) => c.id === parseInt(id));
    if (owner === undefined)
        owner = {
            id: -1,
            firstName: "Unknown",
            lastName: "User",
        };

    return (
        <div className="page">
            <h1>Profile</h1>;
            <div className="profile">
                <div className="profile-banner">
                    <UserIcon
                        color={owner.favouriteColour}
                        firstName={owner.firstName}
                        lastName={owner.lastName}
                    />
                    <h2>{owner.firstName + " " + owner.lastName}</h2>
                </div>
                <ProfileForm profileId={parseInt(id)} />
            </div>
        </div>
    );
};

export default ProfilePage;
