import { useContext } from "react"
import { PostContext } from '../App.jsx'

import Post from "./Post.jsx"

function PostList() {
    const { posts } = useContext(PostContext)

    return (
        <div>
            <ul >
                {posts && posts.map((post, index) =>
                    <Post 
                    key={index} 
                    post={post} />
                ).reverse()}
            </ul>
        </div>
    )
}

export default PostList