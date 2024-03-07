import React from 'react'
import './Posts.css'
import PostComponent from './Posts/Post'

export default function PostsComponent() {
    return (
        <div className='posts'>
            <ul className='list'>
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
            </ul>
        </div>
    )
}
