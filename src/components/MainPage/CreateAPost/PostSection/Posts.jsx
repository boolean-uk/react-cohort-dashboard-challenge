import Post from './Post'
import { useParams } from 'react-router-dom'
import './Posts.css'
import './Post.css'
import { useState, useEffect } from 'react'

function Posts (props) {

    const { contact, posts } = props

    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        if (posts && id) {
            const postToView = posts.find((post) => Number(post.id) === Number(id))
            setPost(postToView)
        }
    }, [posts, id])

    return (
        <div className="posts">
            <ul>
                {posts.map(post => 
                <Post 
                    key={post.id}
                    post={post} 
                    contact={contact}
                />)}
            </ul>
        </div>
    )
}

export default Posts