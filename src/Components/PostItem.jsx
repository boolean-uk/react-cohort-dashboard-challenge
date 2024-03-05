import { useEffect, useState } from "react";
import PostComments from "./PostComments";
import { Link, useNavigate } from "react-router-dom";

export default function PostItem(props)
{
    const { post } = props;
    const navigate = useNavigate()
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const [initials, setInitials] = useState("")

    // GET the comments
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => 
        {
            //console.log("COMMENTS", data)
            setComments(data)
        })
    }, [post.id])

    // GET the author
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${post.contactId}`)
        .then((response) => response.json())
        .then((data) => 
        {
            //console.log("AUTHOR", data)
            setAuthor(data)
            setInitials(data.firstName.charAt(0) + data.lastName.charAt(0)) // SET THIS TO THE USER'S INITIALS!
        })
    }, [post.contactId])

    const addComment = (data) =>
    {
        setComments([...comments, data.comment])
    }

    const handleLink = () =>
    {
        navigate(`/post/${post.id}`)
    }

    return (
        <>
        <h2>{author.firstName && author.firstName.charAt(0)}
            {author.lastName && author.lastName.charAt(0)} - {author.firstName} {author.lastName}</h2>
        <p onClick={handleLink} className="postTitle">{post.title}</p>
        <p>{post.content}</p>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.content}</li>
            ))}
        </ul>
        <PostComments initials={initials} addComment={addComment} postId={post.id}/>
        </>
    )
}