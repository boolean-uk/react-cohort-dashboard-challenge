import React, { useState } from 'react'
import CreatePostComponent from './Content/CreatePost'
import PostsComponent from './Content/Posts'
import './Content.css'

export default function ContentComponent() {

    const [getPosts, setPosts] = useState([])
    const posts = { get: getPosts, set: setPosts }

    return (
        <div className='content'>
            <div className='scroll'>
                <CreatePostComponent posts={posts}/>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    )
}
