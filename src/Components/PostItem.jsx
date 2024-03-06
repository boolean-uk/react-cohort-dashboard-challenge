import { useContext, useEffect, useState } from "react";
import PostComments from "./PostComments";
import { useNavigate } from "react-router-dom";
import { AuthorContext } from "../App";

export default function PostItem(props)
{
    const { post } = props;
    const { authors } = useContext(AuthorContext)
    const [comments, setComments] = useState([])
    const [showedComments, setShowedComments] = useState([])
    const navigate = useNavigate()

    const authorId = post.contactId - 1
    const initials = authors[0].firstName.charAt(0) + authors[0].lastName.charAt(0)

    // GET the comments
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => 
        {
            //console.log("COMMENTS", data)
            setComments(data)
            setShowedComments(data.filter((comment, index) => index < 3))
        })
    }, [post.id])

    const addComment = (data) =>
    {
        setComments([...comments, data.comment])
    }

    const handleLink = () =>
    {
        navigate(`/post/${post.id}`)
    }
    
    const showMoreComments = () =>
    {
        setShowedComments(comments)
    }

    return (
        <>
        <h2>{authors[authorId].firstName.charAt(0)}{authors[authorId].lastName.charAt(0)} - {authors[authorId].firstName} {authors[authorId].lastName}</h2>
        <p onClick={handleLink} className="postTitle">{post.title}</p>
        <p>{post.content}</p>
        <ul>
            {showedComments.map((comment, index) => (
                <li key={index}>
                    {authors[comment.contactId - 1].firstName.charAt(0)}{authors[comment.contactId - 1].lastName.charAt(0)} - 
                    {authors[comment.contactId - 1].firstName} {authors[comment.contactId - 1].lastName} - 
                    {comment.content}</li>
            ))}
            {comments.length > 3 && <button onClick={showMoreComments}>See previous comments</button>}
        </ul>
        <PostComments initials={initials} addComment={addComment} postId={post.id}/>
        </>
    )
}