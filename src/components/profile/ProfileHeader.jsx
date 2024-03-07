import { useContext } from "react";
import { ProfileContext } from "../../pages/Profile";
import ProfileImage from "../ProfileImage";
import "../../styles/profile/ProfileHeader.css";
export default function ProfileHeader() {
    const { user } = useContext(ProfileContext);
    return (
        <div className="profileHeader">
            <ProfileImage user={user} w={70} h={70} fontSize={40} marginL={-20} />
            <h1 className="profileName">{user.firstName} {user.lastName}</h1>
        </div>
    )
}