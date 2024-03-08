import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../../../App'
import { Link } from 'react-router-dom'

function Comment({comment, post, comments, setComments}) {
    const userContext = useContext(UserContext)
    const [commentingUser, setCommentingUser] = useState({})

    const handleClick = (e) => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment/${comment.id}`,
        {
            method: 'DELETE'
        })
            .then(response => response.json())
        setComments(comments.filter((c) => c.id !== comment.id))
    }

    useEffect(() => {
        setCommentingUser(userContext.users.filter((u) => u.id === comment.contactId))
    }, [])
    
    if(commentingUser[0] === undefined) return <p>Loading user</p>

    return(
        <div className="comment">
            <div className="profile-pic" style={{backgroundColor: `${commentingUser[0].favouriteColour}`}}>{commentingUser[0].firstName[0]}{commentingUser[0].lastName[0]}</div>
            <div className="comment-content">
                <Link to={`/profile/${commentingUser[0].id}`}>{commentingUser[0].firstName} {commentingUser[0].lastName}</Link>
                <p>{comment.content}</p>
                <button onClick={handleClick}>Delete comment</button>
            </div>
        </div>
    )
}

export default Comment