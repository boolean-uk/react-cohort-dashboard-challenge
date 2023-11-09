import React, { useState, useEffect } from 'react'
import Post from './Post'

function Posts (props) {

    const { contact } = props

    const [posts, setPosts] = useState([])

    const userName = "TomEastwood"
    const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
    const endpointForPosts = "/post"

    useEffect(() => {
        fetch(baseUrl + endpointForPosts)
            .then(res => res.json())
            .then(data => setPosts(data))
    }
    , [])

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