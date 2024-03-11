import React, { useState, useEffect, createContext, useContext } from 'react'
import './Posts.css'
import PostComponent from './Posts/Post'
import { APIURL, userContext } from '../../../App'
import { postContext } from '../../Dashboard'



export default function PostsComponent() {
    const { posts } = useContext(postContext)
    const { users } = useContext(userContext)

    useEffect(() => {
        fetch(`${APIURL}/post`)
            .then(response => response.json())
            .then((data) => posts.set(data.reverse()))
    }, [])

    useEffect(() => {
        fetch(`${APIURL}/contact`)
            .then(response => response.json())
            .then((data) => users.set(data))
    }, [])

    return (
        <div className='posts'>
            <ul className='list'>
                {posts.get.map((post, index) => (
                    <PostComponent key={index} post={post} />
                ))}
            </ul>
        </div>
    )
}
