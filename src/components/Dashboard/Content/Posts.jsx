import React, { useState, useEffect } from 'react'
import './Posts.css'
import PostComponent from './Posts/Post'
import { APIURL } from '../../../App'

export default function PostsComponent() {

    const [getPosts, setPosts] = useState([])
    const posts = {get:getPosts, set:setPosts}

    useEffect(() => {
        fetch(`${APIURL}/post`)
            .then(response => response.json())
            .then((data) => posts.set(data))
    }, [])

    useEffect(() => {
        console.log(posts.get)
    }, [posts.get])

    return (
        <div className='posts'>
            <ul className='list'>
                {posts.get.map((post, index) => (
                    <PostComponent key={index} post={post}/>
                ))}
            </ul>
        </div>
    )
}
