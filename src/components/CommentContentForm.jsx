import { useContext, useState } from "react"
import { PostContext } from "./PostLi"

export default function CommentContentForm({ comment, commentUpdate, setCommentUpdate }) {
    const { post, postComments, setPostComments } = useContext(PostContext)
    const [updateComment, setUpdateComment] = useState({
        postId: post.id,
		content: comment.content,
		contactId: comment.contactId
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUpdateComment({
            ...updateComment,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function updateAPost() {
            const options = {
                method: 'PUT',
                body: JSON.stringify(updateComment),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment/${comment.id}`, options)
            const data = await response.json()

            setPostComments(postComments.map(p => {
                return p.id !== data.id ? p : data
              }))
        }

        updateAPost()

        setCommentUpdate(!commentUpdate)
    }

    return (
        <form className="post-content-form" onSubmit={handleSubmit}>
            <textarea name="content" id="post-content-textarea" value={updateComment.content} onChange={handleChange}></textarea>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}