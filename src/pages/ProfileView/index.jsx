import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CohortContext } from "@/App"

import "./styles.css"
import UserIcon from "../../components/UserIcon";
import UserForm from "./components/UserForm";

export default function ProfileView() {
    const [user, setUser] = useState(null)
    const { id } = useParams();

    const { users, setUsers } = useContext(CohortContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (users && id) {
          setUser(users.find((user) => Number(user.id) === Number(id)));
        }
    }, [users, id]);

    const updateUserInfo = (userInfo) => {
        fetch(`https://boolean-api-server.fly.dev/Agatland/contact/${userInfo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify(userInfo),
        }).then(res => {
        if (res.ok) {
            setUsers(users.map(user => user.id === userInfo.id ? {id: user.id, ...userInfo} : user))
        }
        }).catch(error => console.error("Problem with updating contact: ", error))
    }

    if (!user) return <h1>User not found</h1>

    return (
        <div className="profile-view-container main">
            <h1>Profile</h1>
            <div className="profile-view-info-container">
                <div className="profile-view-info-header">
                    <UserIcon userToIcon={user} size={60}/>
                    <h1>{user.firstName} {user.lastName}</h1>
                </div>
                <UserForm user={user} updateUserInfo={updateUserInfo}/>
            </div>
        </div>
    )
}