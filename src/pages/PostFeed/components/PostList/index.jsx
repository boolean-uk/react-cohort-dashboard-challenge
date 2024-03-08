import { CohortContext } from "@/App"
import { useContext } from "react"

import "./styles.css"
import PostListItem from "./components/PostListItem"

export default function PostList() {
    const { posts } = useContext(CohortContext)

    return (
        <div className="post-list">
        {
            posts.slice().reverse().map(post => (
                <PostListItem key={post.id} post={post}/>
            ))
        }
        </div>
    )
}