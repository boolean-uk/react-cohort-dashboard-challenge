import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../../../App'
import { Link } from 'react-router-dom'

function Comment({comment, post, comments, setComments}) {
    const userContext = useContext(UserContext)

    const handleClick = (e) => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment/${comment.id}`,
        {
            method: 'DELETE'
        })
            .then(response => response.json())
        setComments(comments.filter((c) => c.id !== comment.id))
    }

    return(
        <div className="comment">
            <div className="profile-pic" style={{backgroundColor: `${userContext.currentUser.favouriteColour}`}}>{userContext.currentUser.firstName[0]}{userContext.currentUser.lastName[0]}</div>
            <div className="comment-content">
                <Link to={`/profile/${userContext.currentUser.id}`}>{userContext.currentUser.firstName} {userContext.currentUser.lastName}</Link>
                <p>{comment.content}</p>
                <button onClick={handleClick}>Delete comment</button>
            </div>
        </div>
    )
}

export default Comment