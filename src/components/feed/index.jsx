// Feed.jsx
import { CreatePost } from "./CreatePost"
import '/src/styles/Feed/index.css'
import { PostsContext } from "../../App"
import { useContext } from "react"

export const Feed = () => {
    const { posts } = useContext(PostsContext);

    if (!posts) return <h2>posts not found</h2>
    return (
        <div className="feed">
            <CreatePost />
            {posts.map((post, index) => <p key={index}>{post.content}</p>)}
        </div>
    )
}