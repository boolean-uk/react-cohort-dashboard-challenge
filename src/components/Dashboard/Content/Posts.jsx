import React, { useState, useEffect, createContext } from 'react'
import './Posts.css'
import PostComponent from './Posts/Post'
import { APIURL } from '../../../App'

export const userContext = createContext()

export default function PostsComponent({posts}) {

    const [getUsers, setUsers] = useState([])
    const users = { get: getUsers, set: setUsers }


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
            <userContext.Provider value={{ users }}>
                <ul className='list'>
                    {posts.get.map((post, index) => (
                        <PostComponent key={index} post={post} />
                    ))}
                </ul>
            </userContext.Provider>
        </div>
    )
}
