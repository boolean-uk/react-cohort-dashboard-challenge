import { useEffect, useState } from "react"
import Post from "../Post"
import PostForm from "../PostForm"

export default function Posts(props) {
    const {posts, currentUserId, getPosts, getComments} = props

    // const limitedPosts = posts.slice(0, 3)

    return (
        <div className="main">
             <PostForm getPosts={getPosts} currentUserId={currentUserId}/>
            <div className="posts-container">
                {posts.map((post, index) => (
                    <ul>
                        <Post post={post} key={index} currentUserId={currentUserId} getComments={getComments}/>
                    </ul>
                ))}
            </div>

        </div>
    )
}