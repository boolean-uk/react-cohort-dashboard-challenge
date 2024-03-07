import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostContext } from "./App"
import PostDelete from "./Components/PostDelete"
import CommentItem from "./Components/CommentItem"

export default function ViewPostPage()
{
    const {id} = useParams()
    const {posts} = useContext(PostContext)
    const [post, setPost] = useState(undefined)
    const [author, setAuthor] = useState({})
    const [comments, setComments] = useState([])
    const [commentGET, setCommentsGET] = useState([])

    const navigate = useNavigate()

    // GET the comments
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${id}/comment`)
        .then((response) => response.json())
        .then((data) => setComments(data.reverse()))
    }, [id, commentGET])

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

    if (!post)
    {
        for (let i = 0; i < posts.length; i++)
        {
            if (posts[i].id === parseInt(id))
            {
                setPost(posts[i])
                break   
            }
        }
    }

    const deleteComment = (data) =>
    {   
        setCommentsGET(data.commentDelete)
    }

    const editComment = (data) =>
    {
        const tmpComments = comments.map((comment) =>
        {
            if (comment.id === data.comment.id) return data.comment
            return comment
        })

        setCommentsGET(tmpComments)
    }

    return (
        <>
        <h1 className="postTitle">{post && post.title}</h1>
        <h2>{author && author.firstName} {author && author.lastName}</h2>
        <p>{post && post.content}</p>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>
                    <CommentItem deleteComment={deleteComment} editComment={editComment} comment={comment}/>
                </li>
            ))}
        </ul>
        <button onClick={() => navigate("/")}>Go Back</button>
        <button onClick={() => navigate(`/editPost/${post.id}`)}>Edit</button>
        <PostDelete post={post}/>
        </>
    )
}