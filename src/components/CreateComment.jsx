import UserCircle from "./UserCircle"
import { useContext, useState } from "react"
import { AppContext } from '../App'
import postArrow from '../assets/post-arrow.svg'

function CreateComment({post}) {
    const { user, comments, setComments } = useContext(AppContext)
    const initalComment = "Add a comment..."
    const [newComment, setNewComment] = useState(initalComment)

    const handleChange = (event) => {
        const { value } = event.target 
        setNewComment(value);
    }

    const handleSubmit = (event) => {
        const commentData = {
            postId: post.id,
            contactId: user.id,
            content: ""
        }
        
        event.preventDefault()

        const makeComment = async () => {
            commentData.content = newComment
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/post/${post.id}/comment`, {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(commentData),
            })
            const jsonData = await response.json()
            console.log(jsonData)
            
            setComments([...comments, jsonData])
            setNewComment(initalComment)
        }
        makeComment()
    }

    return (
        <div className="createComment">
            <UserCircle user={user}/>
            <form>
                <input
                type="text"
                name="postInput"
                value={newComment}
                onChange={handleChange}
                />
                <button onClick={handleSubmit}>
                    <img src={postArrow}/>
                </button>
            </form>
        </div>
    )
}

export default CreateComment