import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorContext } from "../App";
import PostComments from "./PostComments";

export default function PostItem(props)
{
    const { post } = props;
    const { authors } = useContext(AuthorContext)
    const [comments, setComments] = useState([])
    const [showedComments, setShowedComments] = useState([])
    const navigate = useNavigate()

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
    
    if (!authors[post.contactId - 1])
        return
    
    const authorId = post.contactId - 1
    const initials = authors[0].firstName.charAt(0) + authors[0].lastName.charAt(0)

    const addComment = (data) =>
    {
        setComments([...comments, data.comment])
    }
    
    const showMoreComments = () =>
    {
        setShowedComments(comments)
    }

    return (
        <>
        <h2 onClick={() => navigate(`/user/${authors[authorId].id}`)}>{authors[authorId].firstName.charAt(0)}{authors[authorId].lastName.charAt(0)} - {authors[authorId].firstName} {authors[authorId].lastName}</h2>
        <p onClick={() => navigate(`/post/${post.id}`)} className="postTitle">{post.title}</p>
        <p>{post.content}</p>
        <ul>
            {showedComments.map((comment, index) => (
                <li key={index}>
                    <h4 onClick={() => navigate(`/user/${authors[comment.contactId - 1].id}`)}>{authors[comment.contactId - 1].firstName.charAt(0)}{authors[comment.contactId - 1].lastName.charAt(0)} - {authors[comment.contactId - 1].firstName} {authors[comment.contactId - 1].lastName}</h4>
                    {comment.content}
                </li>
            ))}
            {comments.length > 3 && <button onClick={showMoreComments}>See previous comments</button>}
        </ul>
        <PostComments initials={initials} addComment={addComment} postId={post.id}/>
        </>
    )
}