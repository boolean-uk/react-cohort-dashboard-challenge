import { Link } from "react-router-dom"

export default function PostTitle({post}) {
    return(
        <>
            <Link className="post-title" to={`/post/${post.id}`}>{post.title}</Link>
        </>
    )
}