import { useContext } from "react"
import { PostsContext } from "@/Components/ContentView/ContentView.jsx"

const PostList = () => {
    const { posts} = useContext(PostsContext)
    return (
        <div>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList