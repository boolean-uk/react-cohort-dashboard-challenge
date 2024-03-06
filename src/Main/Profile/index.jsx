import { useContext } from "react"
import { UserContext } from "../../App"
import AccountInfo from "./AccountInfo"

import './style.css'

function Profile() {
    const context = useContext(UserContext)

    return(
        <>
        <h1>Profile</h1>
        <div className="profile">
            <div>
                <img id="profile-image" src={context.currentUser.profileImage} alt="Profile image"/>
                <h2>{context.currentUser.firstName} {context.currentUser.lastName}</h2>
                <div className="profile-inputs">
                    <AccountInfo />
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile