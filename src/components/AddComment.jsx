import { useContext, useState } from "react"
import { StateContext } from "../App"

export default function AddComment(props) {
    const [newComment, setNewComment] = useState({ content: '' })
    const { post, onCommentAdded } = props
    const { randomAuthor } = useContext(StateContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}/comment`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                content: newComment.content,
                postId: post.id,
                contactId: randomAuthor.id
            })
        }).then(() => {
            setNewComment({ content: '' })
            onCommentAdded()
        })
    }

    const handleChange = (e) => {
        const { value } = e.target

        setNewComment({
            ...newComment,
            content: value
        })
    }

    return (
        <>
            {randomAuthor &&
                <form onSubmit={handleSubmit} className="add-comment">
                    <figure style={{ backgroundColor: `${randomAuthor.favouriteColour}` }}>
                        <figcaption>
                            {randomAuthor.firstName[0]}{randomAuthor.lastName[0]}
                        </figcaption>
                    </figure>
                    
                    <input 
                        type="text" 
                        name="comment"  
                        placeholder="Add a comment..."
                        value={newComment.content}
                        onChange={handleChange}
                        required
                    />
                </form>
            }
        </>
    )
}