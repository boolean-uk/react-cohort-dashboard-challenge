import { useContext } from "react";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import { UserContextAPIContext } from "../contextAPI/UserContextAPI";
import '../style/profile/profile.css';
import Form from "../components/profile/form/Form";
import { ProfileContextAPIProvider } from "../contextAPI/ProfileContextAPI";

const Profile = () => {


    const {user} = useContext(UserContextAPIContext);

    if(!user) {
        return <div>Loading...</div>
    }



    return(
        <div className="profile-container">
   
            <div className="leftNavBar">
                <LeftNavBar />
            </div>

            <div className="header">
                <Header />
            </div>

            <div className="profile-title">
                    <h1>
                        Profile
                    </h1>
                </div>
            
            <div className="profile-content">
        
                <div className="profile-name">
                    <div className="circle " style={{backgroundColor: user.favouriteColour}}>
                        <span className="initials">{user.firstName[0]}{user.lastName[0]}</span>
                    </div>
                    <h2 className="profile-item">{user.firstName} {user.lastName} </h2>
                </div>
                <div className="profile-form-container">
                    <ProfileContextAPIProvider>
                        <Form /> 
                    </ProfileContextAPIProvider>
                    
                </div>
               
            </div>

        
        </div>
    )
}

export default Profile;