import { useContext, useState } from "react"
import { UserContext } from "../../../../../App"
import './style.css'

function CommentField({post}) {
    const userContext = useContext(UserContext)
    const [commentContent, setCommentContent] = useState('')
    const [commentObj, setCommentObj] = useState({})

    const handleChange = (e) => {
        setCommentContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCommentObj()
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    postId: post.id, 
                    content: commentContent, 
                    contactId: userContext.users[0].id
                })
        })
            .then(response => response.json())
            .then(response => console.log(response))
        setCommentContent("")
    }

    return(
        <div >
            <form className="comment-field" onSubmit={handleSubmit}>
                <div 
                    className="profile-pic" 
                    style={{backgroundColor: `${userContext.users[0].favouriteColour}`}}
                >
                    {userContext.users[0].firstName[0]}{userContext.users[0].lastName[0]}
                </div>
                <input type="text" placeholder="Add a comment..." onChange={handleChange} value={commentContent}/>
                <button >SEND</button>
            </form>
        </div>
    )
}

export default CommentField