import { useContext, useEffect, useState } from "react"
import ProfileImage from "./ProfileImage"
import { PostContext } from "./PostLi"
import CommentContentForm from "./CommentContentForm"

export default function CommentLi({ comment, loggedInUser }) {
    const [commentContact, setCommentContact] = useState(null)
    const { post, postComments, setPostComments } = useContext(PostContext)
    const [commentUpdate, setCommentUpdate] = useState(false)

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

    function handleUpdate() {
        setCommentUpdate(!commentUpdate)
    }

    return (
        <>
            {commentContact && 
                <li className="comment-li">
                    <ProfileImage loggedInUser={commentContact}/>

                    <div className="comment-container">
                        <p className="poster-name">{`${commentContact.firstName} ${commentContact.lastName}`}</p>

                        {!commentUpdate && 
                            <div className="post-content">
                                <p>{comment.content}</p>
                            </div>
                        }

                            {commentUpdate && 
                                <CommentContentForm comment={comment} commentUpdate={commentUpdate} setCommentUpdate={setCommentUpdate} />
                            }
                        
                    </div>

                    {comment.contactId === loggedInUser.id && 
                        <section className="buttons-container">
                            <div className="delete-button-container">
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                            <div className="delete-button-container">
                                <button onClick={handleUpdate}>Update</button>
                            </div>
                        </section>
                    }

                </li>
            }
        </>
    )
}