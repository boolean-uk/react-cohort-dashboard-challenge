import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../App"

import './style.css'
import ProfileInput from "./ProfileInput"
import { useParams } from "react-router-dom"
import ProfileTop from "./ProfileTop"

function Profile() {
    const context = useContext(UserContext)
    const contactId = useParams()
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const userArr = context.users.filter(user => Number(user.id) === Number(contactId.id))
        setCurrentUser(userArr[0])
    }, [])

    if(!currentUser) return <p>Loading user...</p>

    return(
        <>
        <h1>Profile</h1>
        <div className="profile">
            <div>
                <ProfileTop currentUser={currentUser} />
                <hr />
                <ProfileInput contactId={contactId} />
            </div>
        </div>
        </>
    )
}

export default Profile