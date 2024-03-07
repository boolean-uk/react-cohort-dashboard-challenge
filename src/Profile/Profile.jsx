import { useParams } from "react-router-dom"
import { getAuthor, updateUser } from "../Api"
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
    }, [id])

    if (!user) {
        return <h1>Loading...</h1>
    }

    const handleChange = (event) => {
        user[event.target.name] = event.target.value
        setUser({ ...user })
    }

    const handleSubmit = (event) => {
        updateUser(id, user)
    }

    return (
        <div>
            <h1>Profile</h1>
            <div className="page">
                <ProfileHeader user={user} />
                <div className="profileInfo">
                    <AccountInfo user={user} handleChange={handleChange} />
                    <Address user={user} handleChange={handleChange} />
                    <button onClick={handleSubmit}>Save changes</button>
                </div>
            </div>
        </div>
    )
}

export default Profile