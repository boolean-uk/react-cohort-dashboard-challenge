import { useEffect, useState } from "react"
import ProfileImage from "./ProfileImage"

export default function CommentLi({ comment, post, postComments, setPostComments}) {
    const [commentContact, setCommentContact] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/contact/${comment.contactId}`)
        .then(response => response.json())
        .then(setCommentContact)
    }, [comment.contactId])

    const commentToDelete = {
        postId: post.id,
        content: comment.content,
        contactId: comment.contactId
    }

    function handleDelete() {
        async function deleteComment() {
            const options = {
                method: 'DELETE',
                body: JSON.stringify(commentToDelete),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment/${comment.id}`, options)
            const data = await response.json()

            setPostComments([
                ...postComments.filter((c) => c.id !== data.id)
            ])
        }

        deleteComment()
    }

    return (
        <>
            {commentContact && 
                <li className="comment-li">
                    <ProfileImage loggedInUser={commentContact}/>

                    <div className="comment-container">
                        <p className="poster-name">{`${commentContact.firstName} ${commentContact.lastName}`}</p>
                        <p>{comment.content}</p>
                    </div>

                    <div className="delete-button-container">
                            <button onClick={handleDelete}>Delete</button>
                    </div>
                </li>
            }
        </>
    )
}