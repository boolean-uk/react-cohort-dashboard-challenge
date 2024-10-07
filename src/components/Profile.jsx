import { useContext, useEffect, useState } from "react"
import UserInfo from "./UserInfo"
import { AppContext } from "../App"
import { useParams } from "react-router-dom"

function Profile() {
    const { user, authors } = useContext(AppContext)
    const { id } = useParams()
    const [stateUser, setStateUser] = useState(undefined)

    useEffect(() => {
        let initUser = user
        if (id) {
            initUser = authors.find((a) => Number(a.id) === Number(id))
        }
        setStateUser(initUser)
    }, [authors, user, id])

    return (
        <div className="profile">
            <h1>Profile</h1>
            <UserInfo user={stateUser}/>
        </div>
    )
}

export default Profile