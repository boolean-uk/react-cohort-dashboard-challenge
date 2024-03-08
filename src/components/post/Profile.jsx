import { useParams } from "react-router-dom";



const Profile = () => {
    const { id } = useParams();


    return (

        <div className="profile">
            
            <h1>My Profile</h1>
         
          
        </div>
    );
};
export default Profile;