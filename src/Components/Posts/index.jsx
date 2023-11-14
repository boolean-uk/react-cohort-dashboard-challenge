import { useEffect, useState } from "react"
import Post from "../Post"
import PostForm from "../PostForm"
import {Link} from 'react-router-dom'

export default function Posts(props) {
    const {posts, getPosts, getComments, post, comments} = props


    // const limitedPosts = posts.slice(0, 3)

    return (
        <div className="main">
             <PostForm getPosts={getPosts} post={post}/>
            <div className="posts-container">
                {posts.map((post, index) => (
                        <ul key={index}>
                            <Post post={post} getComments={getComments} comments={comments}/>
                        </ul>
                ))}
            </div>
        </div>
    )
}