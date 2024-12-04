import Post from "../Post"
import { Link, useParams } from "react-router-dom"

function PostPage({ posts }) {
    let { id } = useParams()
    const post = posts.find(p => p.id === parseInt(id))

    return (
        <>
            <Post post={post}></Post>
            <Link to={'/'}>Go back</Link>
        </>
    )
}

export default PostPage