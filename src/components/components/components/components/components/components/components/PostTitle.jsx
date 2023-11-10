import { Link } from "react-router-dom"

export default function PostTitle({post}) {
    return(
        <>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </>
    )
}