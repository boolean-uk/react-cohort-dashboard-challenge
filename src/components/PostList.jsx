import { useContext } from "react"
import { AppContext } from '../App'
import Post from "./Post"

function PostList() {
    const { posts } = useContext(AppContext)

    const sortedPosts = [].concat(posts).sort((a, b) => b.id - a.id)

    return(
        <ul>
            {sortedPosts.map((post, index) => (
                <Post post={post} key={index}/>
            ))}
        </ul>
    )
}

export default PostList