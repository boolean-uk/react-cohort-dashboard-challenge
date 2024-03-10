import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postContext } from "../../../App";
import UserIcon from "../../icons/UserIcon";
import Form from "./Form";


const Profile = () => {
    const { id } = useParams();
    const { contacts } = useContext(postContext);
    let user = contacts.find((c) => c.id === parseInt(id));
    if (user === undefined)
        user = {
            id: -1,
            firstName: "Unknown",
            lastName: "User",
            city: "Unknown City",
            email: "Unknown Email",
            favouriteColour: "#6ddcb3",
            gender: "Unknown Gender",
            jobTitle: "Unknown Job Title",
            latitude: 0.0,
            longitude: 0.0,
            profileImage:
                "https://www.gravatar.com/avatar/Nella_Runolfsson@hotmail.com?s=120&d=identicon",
            street: "Unknown Street",
        };

    return (

        <div className="profile">
            
            <h1>My Profile</h1>
            
            <div className="profile">
                <div className="profile-banner">
                    <UserIcon
                        color={user.favouriteColour}
                        firstName={user.firstName}
                        lastName={user.lastName}
                    />
                    <h2>{user.firstName + " " + user.lastName}</h2>
                </div>
                <Form owner={user} />
            </div>
          
        </div>
    );
};
export default Profile;