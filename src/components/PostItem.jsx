import CommentList from "./CommentList"
import {Link} from 'react-router-dom'
import { PostContext } from '../App'
import { useContext, useState, useEffect } from "react"

function PostItem({post}){
    const {contacts, getComments, setComments} = useContext(PostContext)
    const [contact, setContact] = useState(null)
    const [comment, setComment] = useState(null)
    const [commentContent, setCommentContent] = useState('')
    
    function handleSubmit(event){
        event.preventDefault()
        comment.postId = post.id
        comment.content = commentContent
        comment.contactId = 1                   
        createComment(comment)
    }

    function handleChange(event){
        const inputName = event.target.name
        const inputValue = event.target.value   
        switch (inputName) {
            case 'commentContent':
                setCommentContent(inputValue);
                break;
            default:
                break;
        }
        setComment({...comment, [inputName]: inputValue})
    }

    const createComment = async(comment) => {
        await fetch(
            `https://boolean-uk-api-server.fly.dev/FredrikEH/post/${post.id}/comment`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(comment)
            }
        )
        getComments(post.id)
    }

    useEffect(() => {
        async function getComments() {
            const response = await fetch(
                `https://boolean-uk-api-server.fly.dev/FredrikEH/post/${post.id}/comment`
            );
            const data = await response.json();
            setComments(data);
        }
        getComments();
    }, [post.id]);
    
    useEffect(() => {
        if (contacts) {
            const matchingContact = contacts.find((c) => c.id === post.contactId)
            setContact(matchingContact)
        }
    }, [contacts, post.contactId])
    
    if(!post || contact === null){
        return <div>Loading...</div>
    }
  
    return(
        <li className="yellow">
            <Link to={`/profile/${contact.id}`}>
                <h2>{contact.firstName.charAt(0)} {contact.lastName.charAt(0)} {contact.firstName} {contact.lastName}</h2>
            </Link>
            <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
            <p>{post.content}</p>
            <CommentList id={post.id}/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="commentContent"
                    name="commentContent"
                    value={commentContent} 
                    onChange={handleChange} 
                    placeholder="Add a comment..."
                />
                <button type="submit">Add comment</button>
            </form>
        </li>
    )
}

export default PostItem