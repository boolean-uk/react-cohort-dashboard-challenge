import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchComments } from "../../services/api"
import CommentList from "../CommentList"

export default function Post(props) {

    const [comments, setComments] = useState([])

    async function getComments() {
        const commentsResponse = await fetchComments(props.post.id)
        setComments(commentsResponse)
}
console.log("comments", comments)

useEffect(() => {getComments()}, [])

const navigate = useNavigate()
    function onPostClick() {
navigate(`/post/${props.post.id}`)
    }

    return (
        <>
                <div>Post: {props.post.title}</div>
                <div> Post ID: {props.post.id}</div>
                <div>Content: {props.post.content} </div>
                <button onClick={onPostClick}>Press Me</button>
                <CommentList comments={comments}/>
        </>
    )
}