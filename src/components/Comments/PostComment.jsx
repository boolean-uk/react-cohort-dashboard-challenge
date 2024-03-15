import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { MetaContext } from '../../App'

function PostComment({ postId, setLatestComment }) {
    const { loggedIn } = useContext(MetaContext)
    const link = "https://boolean-api-server.fly.dev/Hjaldrgud/post/" + postId + "/comment"
    const [formData, setFormData] = useState({
        postId: postId,
        content: "",
        contactId: loggedIn ? loggedIn.id : null 
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const success = await newComment(formData)
            if (success) {
                setFormData({ ...formData, content: "" })
                console.log("Post id: "+postId)
            } else {
                console.error("Failed to comment")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const newComment = async (newCommentData) => {
        try {
            const response = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCommentData)
            });

            if (response.ok) {
                setLatestComment(newCommentData)
                return true;
            } else {
                console.error("Failed to comment")
                return false;
            }
        } catch (error) {
            console.error("Error:", error)
            return false;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="content" id="content" placeholder="Add a comment" value={formData.content} onChange={handleChange} required />
                <button type="submit">add</button>
            </div>
        </form>
    )
}

PostComment.propTypes = {
    postId: PropTypes.number.isRequired,
    setLatestComment: PropTypes.func.isRequired
}

export default PostComment
