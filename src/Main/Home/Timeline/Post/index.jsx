import { useContext, useState, useEffect } from 'react'
import './style.css'
import { PostContext, UserContext } from '../../../../App'
import PostTop from './PostTop'
import CommentSection from './CommentSection'

function Post({ post }) {
    const [postingUser, setPostingUser] = useState(null)
    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    useEffect(() => {
        setPostingUser(userContext.users.filter(user => Number(user.id) == Number(post.contactId)))
    }, [])

    if(!postingUser) return <h1>Loading user...</h1>

    const handleClick = (e) => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}`,
        {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(response => console.log(response))
        postContext.setPosts(postContext.posts.filter((p) => p.id !== post.id))
    }

    return(
        <div className="post">
           <PostTop post={post} postingUser={postingUser} />
            <p>{post.content}</p>
            <hr />
            <CommentSection post={post}/>
            <button onClick={handleClick}>Delete post</button>
        </div>
    )
}

export default Post