import CreatePost from "./CreatePost"
import Timeline from "./Timeline"

import { useState, useEffect, createContext } from 'react'

const PostContext = createContext()

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/nora-hansen/post")
            .then(response => response.json())
            .then(setPosts)
    }, [])

    return(
        <div className="home">
            <PostContext.Provider value={{posts, setPosts}}>
                <CreatePost />
                <Timeline />
            </PostContext.Provider>
        </div>
    )
}

export { Home, PostContext }