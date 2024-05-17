import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchComments } from "../../services/api"
import CommentList from "../CommentList"
import './post.css'
import NewComment from "../NewComment"
import { createComment } from "../../services/api"
import Avatar from "../Avatar"
import useContact from "../../hooks/useContact"

export default function Post(props) {

    const contact = useContact(props.post.contactId)

    const [comments, setComments] = useState([])

    async function getComments() {
        const commentsResponse = await fetchComments(props.post.id)
        setComments(commentsResponse)
}
console.log("comments", comments)

useEffect(() => {getComments()}, [])

async function sendComment(newComment) {
    await createComment({...newComment, postId: props.post.id})
    getComments()
}

const navigate = useNavigate()
    function onPostClick() {
navigate(`/post/${props.post.id}`)
    }


    return (
        <>
        <div className="post-container">
            <Avatar id={props.post.contactId}/>
            <h4>{contact.firstName} {contact.lastName}</h4>
        <div onClick={onPostClick}>{props.post.title}</div>
                <div>{props.post.content} </div>
                <CommentList comments={comments}/>
                <NewComment onComment={sendComment}/>
        </div>
        </>
    )
}