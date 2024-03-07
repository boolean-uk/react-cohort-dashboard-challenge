// Feed.jsx
import { CreatePost } from "./CreatePost"
import '/src/styles/Feed/Feed.css'
import { PostsContext } from "../App.jsx"
import { useContext } from "react"
import { Post } from "./post/Post.jsx"

export const Feed = () => {
    const { posts } = useContext(PostsContext);
    
    if (!posts) return <h2>posts not found</h2>
    return (
        <div className="feed">
            <CreatePost />
            {posts.slice(0).reverse().map((post, index) => <Post key={index} post={post} />)}
        </div>
    )
}