import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostContext } from "./App"
import PostDelete from "./Components/PostDelete"

export default function ViewPostPage()
{
    const {id} = useParams()
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const {posts} = useContext(PostContext)
    const post = posts[posts.length - id]

    const navigate = useNavigate()

    // GET the comments
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${id}/comment`)
        .then((response) => response.json())
        .then((data) => setComments(data))
    }, [id])

    // GET the author
    useEffect(() =>
    {
        if (post)
        {
            fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${post.contactId}`)
            .then((response) => response.json())
            .then((data) => setAuthor(data))
        }
    }, [post])

    return (
        <>
        <h1 className="postTitle">{post && post.title}</h1>
        <h2>{author && author.firstName} {author && author.lastName}</h2>
        <p>{post && post.content}</p>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.content}</li>
            ))}
        </ul>
        <button onClick={() => navigate("/")}>Go Back</button>
        <button onClick={() => navigate(`/editPost/${post.id}`)}>Edit</button>
        <PostDelete post={post}/>
        </>
    )
}