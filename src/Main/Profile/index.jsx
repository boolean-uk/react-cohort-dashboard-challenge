import { useContext } from "react"
import { UserContext } from "../../App"

function Profile() {
    const context = useContext(UserContext)

    return(
        <div className="profile">
            <h1>Profile</h1>
            <div>
                <img id="profile-image" src={context.currentUser.profileImage} alt="Profile image"/>
                <h2>{context.currentUser.firstName} {context.currentUser.lastName}</h2>
            </div>
        </div>
    )
}

export default Profile