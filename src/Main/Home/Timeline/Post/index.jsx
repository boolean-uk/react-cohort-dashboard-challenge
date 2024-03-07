import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../App'
import CommentField from './CommentField'
import Comment from './Comment'
import { Link } from 'react-router-dom'

function Post({ post }) {
    const [postingUser, setPostingUser] = useState(null)
    const userContext = useContext(UserContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    },[post.id])

    useEffect(() => {
        setPostingUser(userContext.users.filter(user => Number(user.id) == Number(post.contactId)))
    }, [])

    if(!postingUser) return <h1>Loading user...</h1>

    return(
        <div className="post">
            <div className="top">
                <div 
                style={{backgroundColor: `${postingUser[0].favouriteColour}`}}
                className="profile-pic">{postingUser[0].firstName[0]}{postingUser[0].lastName[0]}</div>
                <div className="top-name-title">
                    <h2>{postingUser[0].firstName} {postingUser[0].lastName}</h2>
                    <h4><Link to={`/${post.id}`}> {post.title}</Link></h4>
                </div>
            </div>
            <p>{post.content}</p>
            <hr />
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment}/>
            ))}
            <CommentField post={post}/>
        </div>
    )
}

export default Post