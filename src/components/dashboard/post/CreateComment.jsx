import { useState } from 'react'
import { useContactsPosts } from '../../context/ContactPostContext'

export default function CreateComment({ post, comments, setComments }) {
    const [content, setContent] = useState('')
    const { user } = useContactsPosts()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newComment = {
            content: content,
            postId: post.id,
            contactId: user.id
        }
        
        fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/post/${postId}/comment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment)
        })
            .then((response) => response.json())
            .then((createdComment) => {
                setComments([...comments, createdComment])
            })
            .catch((err) => console.error(err))
        
        setContent('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            className='comment-input'
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment..."
        />
        <button className='create-comment-button' type="submit">Add Comment</button>
        </form>
    )
}
