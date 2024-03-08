import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../App'
import PostTop from './PostTop'
import CommentSection from './CommentSection'

function Post({ post }) {
    const [postingUser, setPostingUser] = useState(null)
    const userContext = useContext(UserContext)

    useEffect(() => {
        setPostingUser(userContext.users.filter(user => Number(user.id) == Number(post.contactId)))
    }, [])

    if(!postingUser) return <h1>Loading user...</h1>

    return(
        <div className="post">
           <PostTop post={post} postingUser={postingUser} />
            <p>{post.content}</p>
            <hr />
            <CommentSection post={post}/>
        </div>
    )
}

export default Post