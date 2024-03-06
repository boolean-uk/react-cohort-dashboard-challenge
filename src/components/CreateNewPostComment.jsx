/* eslint-disable react/prop-types */
import { useState } from "react"

export default function CreateNewPostComment(props){
    const {post} = props

    const newComment = {
        postId: post.id,
        content: "",
        contactId: 1
    }

    const [commentForm, setCommentForm] = useState(newComment)

    function handleInput(event) {
        const postInput = {...commentForm}
        postInput[event.target.name] = event.target.value
        setCommentForm(postInput)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(commentForm)
        postToDB()
        setCommentForm(newComment)
    }

    const postToDB = async () => {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(commentForm)
        }
        await fetch(`https://boolean-api-server.fly.dev/mkmbaran/post/${post.id}/comment`, reqOptions)
    }

    return (
        <form onSubmit={handleSubmit}>
            <li><b>Add Comment</b></li>
            <br/>
            <input
                type="textarea"
                id="content"
                name="content"
                placeholder="Your Comment..."
                value={commentForm.content}
                onChange={handleInput}
                required
            />
            <br/>
            <button type="submit">Post</button>
        </form>
    )
}