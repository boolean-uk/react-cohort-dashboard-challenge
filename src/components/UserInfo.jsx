import { useContext } from "react"
import UserCircle from "./UserCircle"
import { AppContext } from "../App"
import AuthorName from "./Author"
import UserInfoForm from "./UserInfoForm"

function UserInfo({user}) {
    return (
        <div className="userInfo">
            <div className="userInfoHeader">
                <UserCircle user={user}/>
                <h2>
                <AuthorName author={user}/>
                </h2>
            </div>
            <UserInfoForm user={user}/>
        </div>
    )
}

export default UserInfo