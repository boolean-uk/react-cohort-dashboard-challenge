import { useContext } from "react";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import { UserContextAPIContext } from "../contextAPI/UserContextAPI";
import '../style/profile/profile.css';

const Profile = () => {


    const {user} = useContext(UserContextAPIContext);


    return(
        <div className="profile-container">
   
            <div className="leftNavBar">
                <LeftNavBar />
            </div>

            <div className="header">
                <Header />
            </div>
            
            <div className="profile-content">
                <div className="profile-title">
                    <h1>
                        Profile
                    </h1>
                </div>
                <div className="profile-name">
                    <div className="circle header-profile" style={{backgroundColor: user.favouriteColour}}>
                        <span className="initials">{user.firstName[0]}{user.lastName[0]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;