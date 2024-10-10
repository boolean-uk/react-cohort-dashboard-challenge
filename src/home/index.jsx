import Poster from "./components/poster"
import Post_List from "./components/postList"
import { useState } from "react"
import { createContext } from 'react'
import { useContext } from "react"
import { postContext } from "../App"


export default function Home() {

    const posts=useContext(postContext).posts
    const setPosts=useContext(postContext).setPosts
    
    
    

    

    return (
        <div className='home'>
            <Poster posts={posts} setPosts={setPosts}/>
            <div> &nbsp;</div>
            <Post_List posts={posts}/>
            
        </div>
            
        
    )
}
