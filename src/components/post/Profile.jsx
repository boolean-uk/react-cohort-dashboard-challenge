import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();


    return (

        <div className="profile">
            <h1>My Profile</h1>
            <p>This is the profile page for user: {id}</p>
        </div>
    );
};
export default Profile;