import { CohortContext } from "@/App"
import { useContext } from "react"

import "./styles.css"
import Post from "./components/Post"

export default function PostList() {
    const { posts } = useContext(CohortContext)

    return (
        <div className="post-list">
        {
            posts.map(post => (
                <Post key={post.id} post={post}/>
            ))
        }
        </div>
    )
}