import { useContext, useState } from "react"
import { UserContext } from "../../../../../App"
import './style.css'

function CommentField() {
    const userContext = useContext(UserContext)

    return(
        <div className="comment-field">
            <div className="profile-pic" style={{backgroundColor: `${userContext.users[0].favouriteColour}`}}>{userContext.users[0].firstName[0]}{userContext.users[0].lastName[0]}</div>
            <input type="text" placeholder="Add a comment..."/>
            <button>SEND</button>
        </div>
    )
}

export default CommentField