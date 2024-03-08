import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../../../App'
import { Link } from 'react-router-dom'

function Comment({comment}) {
    const userContext = useContext(UserContext)

    return(
        <div className="comment">
            <div className="profile-pic" style={{backgroundColor: `${userContext.currentUser.favouriteColour}`}}>{userContext.currentUser.firstName[0]}{userContext.currentUser.lastName[0]}</div>
            <div className="comment-content">
                <Link to={`/profile/${userContext.currentUser.id}`}>{userContext.currentUser.firstName} {userContext.currentUser.lastName}</Link>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment