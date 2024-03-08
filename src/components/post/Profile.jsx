import { useParams } from "react-router-dom";
import ProfileUser from "./ProfileUser";


const Profile = () => {
    const { id } = useParams();


    return (

        <div className="profile">
            
            <h1>My Profile</h1>
            <ProfileUser userId={id} />
          
        </div>
    );
};
export default Profile;