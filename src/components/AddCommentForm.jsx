import { useState } from "react"

export default function AddCommentForm({ loggedInUser, post, postComments, setPostComments }) {
    const [addComment, setAddComment] = useState({
        postId: '',
        content: '',
        contactId: 0
    })

    function handleChange(e) {
        const {name, value} = e.target
        setAddComment({
            ...addComment,
            [name] : value,
            postId: post.id,
            contactId: loggedInUser.id
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function addNewComment() {
            const options = {
                method: 'POST',
                body: JSON.stringify(addComment),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment`, options)
            const data = await response.json()

            setPostComments([
                ...postComments,
                data
            ])
        }

        addNewComment()
        
        setAddComment({
            postId: '',
            content: '',
            contactId: ''
        })
    }

    return (
        <form className="add-comment" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a comment..." className="comment-input" name="content" value={addComment.content} onChange={handleChange}/>
            <div className="send-button-container">
                <button className="send-button">
                    <img src="../src/assets/send-icon.svg" alt="Send icon" />
                </button>
            </div>
        </form>
    )
}