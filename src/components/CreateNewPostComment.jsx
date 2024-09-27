/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { MyContext } from "../App"
import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router-dom"

export default function CreateNewPostComment(props){
    const context = useContext(MyContext)
    const {post} = props

    const newComment = {
        postId: post.id,
        content: "",
        contactId: 1
    }

    const [commentForm, setCommentForm] = useState(newComment)

    const contact = context.contacts.find((x) => x.id === newComment?.contactId)

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

    if (!contact) return <p>Loading post author...</p>

    return (
        <form onSubmit={handleSubmit}>
        <div className="submit-profile">
            <Link to={`/profile/${contact.id}`}>
            <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
            </Link>
        </div>
        <li>
        <input
                type="textarea"
                id="content"
                name="content"
                placeholder="Add a comment..."
                value={commentForm.content}
                onChange={handleInput}
                required
            />
            <button type="submit">Post</button>
        </li>
        </form>
    )
}