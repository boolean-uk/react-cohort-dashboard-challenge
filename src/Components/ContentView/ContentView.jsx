import "./ContentView.css"
import { Routes, Route } from 'react-router-dom'
import PostView from "./PostView/PostView"
import { useState, useEffect, createContext } from 'react'
import { baseUrl } from "@/Utils/apiUtils"

export const PostsContext = createContext()

const ContentView = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        await fetch(baseUrl)
            .then((res) => res.json())
            .then((res) => setPosts([...res]))
    }

    useEffect(() => {
        fetchPosts()
    },[])
    
    return (
        <PostsContext.Provider
            value={{posts: posts, setPosts: setPosts}}
        >
        <div className="content-view-container scroll-container">
            <Routes>
                <Route 
                    path="/"
                    element={<PostView/>}
                    />
            </Routes>
        </div>
        </PostsContext.Provider>
    )
}

export default ContentView