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
            city: "Unknown City",
            email: "Unknown Email",
            favouriteColour: "#3da4d0",
            gender: "Unknown Gender",
            jobTitle: "Unknown Job Title",
            latitude: 0.0,
            longitude: 0.0,
            profileImage:
                "https://www.gravatar.com/avatar/Giles6@yahoo.com?s=120&d=identicon",
            street: "Unknown Street",
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
                <ProfileForm owner={owner} />
            </div>
        </div>
    );
};

export default ProfilePage;
