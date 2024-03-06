import { useParams } from "react-router-dom"
import { getAuthor } from "../Api"
import { useEffect, useState } from "react"
import '../stylesheets/Profile.css'
import ProfileHeader from "./ProfileHeader"
import AccountInfo from "./AccountInfo"
import Address from "./Address"

function Profile() {
    const { id } = useParams()
    const [user, setUser] = useState()
    useEffect(() => {
        getAuthor(id).then((response) => setUser(response))
    }, [])

    if (!user) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Profile</h1>
            <div className="page">
                <ProfileHeader user={user} />
                <div className="profileInfo">
                    <AccountInfo user={user} />
                    <Address user={user} />
                </div>
            </div>
        </div>
    )
}

export default Profile