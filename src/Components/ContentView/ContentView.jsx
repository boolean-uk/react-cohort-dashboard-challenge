import "./ContentView.css"
import { Routes, Route } from 'react-router-dom'
import PostView from "./PostView/PostView"
import PostDetails from "./PostDetails/PostDetails"
import ProfileView from "./ProfileView/ProfileView"
import { useState, useEffect } from 'react'
import { basePostUrl } from "@/Utils/apiUtils"
import { PostsContext } from "@/Utils/contexts"

const ContentView = () => {  
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        await fetch(basePostUrl)
            .then((res) => res.json())
            .then((res) => res.reverse()) // New posts will appear first
            .then((res) => setPosts([...res]))
    }

    useEffect(() => {
        fetchPosts()
    },[])

    return (
        <PostsContext.Provider
            value={{posts: posts, setPosts: setPosts, fetchPosts: fetchPosts}}
        >
        <div className="content-view-container scroll-container">
            <Routes>
                <Route 
                    path="/"
                    element={<PostView/>}
                    />
                <Route
                    path="/post/:id"
                    element={<PostDetails/>}
                />
                <Route 
                    path="/profile/:id"
                    element={<ProfileView />}
                />
            </Routes>
        </div>
        </PostsContext.Provider>
    )
}

export default ContentView