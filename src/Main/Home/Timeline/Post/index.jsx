import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../App'
import CommentField from './CommentField'
import Comment from './Comment'

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
                <img src={postingUser[0].profileImage} />
                <div className="top-name-title">
                    <h2>{postingUser[0].firstName} {postingUser[0].lastName}</h2>
                    <h4>{post.title}</h4>
                </div>
            </div>
            <p>{post.content}</p>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment}/>
            ))}
            <CommentField />
        </div>
    )
}

export default Post