import React, { useContext } from 'react'
import CreatePost from './CreatePost'
import PostList from './Posts/PostList'
import { createContext } from 'react'
import { useState } from 'react'

export const PostContext = createContext()



function Dashboard() {

    const [allPostData, setAllPostData] = useState()

    async function fetchPosts(){

        await fetch("https://boolean-api-server.fly.dev/Eddy1108/post")
            .then(response => response.json())
            .then((data)=>setAllPostData(data.reverse()))

            
    }

  return (
    <div className='dashboard'>
        <PostContext.Provider value={{fetchPosts, allPostData, setAllPostData}}>
            <CreatePost />
            <PostList />
        </PostContext.Provider>
        
    </div>
  )
}

export default Dashboard