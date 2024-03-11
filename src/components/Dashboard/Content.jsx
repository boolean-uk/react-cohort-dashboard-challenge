import React, { useState } from 'react'
import CreatePostComponent from './Content/CreatePost'
import PostsComponent from './Content/Posts'
import './Content.css'

export default function ContentComponent() {
    return (
        <div className='content'>
            <div className='scroll'>
                <CreatePostComponent />
                <PostsComponent />
            </div>
        </div>
    )
}
