import { useContext, useState } from "react"
import { UserContext } from "../../../../../../App"
import './style.css'

function CommentField({post, comments, setComments}) {
    const userContext = useContext(UserContext)
    const [commentContent, setCommentContent] = useState('')

    const handleChange = (e) => {
        setCommentContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComments([...comments, {
            postId: post.id, 
            content: commentContent, 
            contactId: userContext.users[0].id
        }])

        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    postId: post.id, 
                    content: commentContent, 
                    contactId: userContext.currentUser.id
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
                    style={{backgroundColor: `${userContext.currentUser.favouriteColour}`}}
                >
                    {userContext.currentUser.firstName[0]}{userContext.currentUser.lastName[0]}
                </div>
                <input type="text" placeholder="Add a comment..." onChange={handleChange} value={commentContent}/>
                <button >SEND</button>
            </form>
        </div>
    )
}

export default CommentField