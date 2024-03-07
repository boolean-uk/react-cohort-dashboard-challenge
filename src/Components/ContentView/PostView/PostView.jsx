import { useState, useEffect } from 'react'
import { basePostUrl } from "@/Utils/apiUtils"
import { PostsContext } from "@/Utils/contexts"
import PostList from "./PostList/PostList"
import CreatePost from "./CreatePost/CreatePost"

const PostView = () => {
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
        <div>
            <CreatePost />
            <PostList />
        </div>
        </PostsContext.Provider>
    )
}

export default PostView