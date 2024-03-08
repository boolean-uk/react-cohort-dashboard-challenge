import { useContext } from "react"
import { UserContext } from "../../App"
import AccountInfo from "./AccountInfo"

import './style.css'
import Address from "./Address"
import OtherInfo from "./OtherInfo"
import SaveInfo from "./SaveInfo"

function Profile() {
    const context = useContext(UserContext)

    return(
        <>
        <h1>Profile</h1>
        <div className="profile">
            <div>
                <div className="profile-top">
                    <div className="profile-pic-big" style={{backgroundColor: context.users[0].favouriteColour}} >{context.users[0].firstName[0]}{context.users[0].lastName[0]}</div>
                    <h2>{context.currentUser.firstName} {context.currentUser.lastName}</h2>
                </div>
                <hr />
                <div className="profile-inputs">
                    <div className="profile-inputs-row">
                        <AccountInfo />
                        <Address />
                    </div>
                    <div className="profile-inputs-row">
                        <OtherInfo />
                        <SaveInfo />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile