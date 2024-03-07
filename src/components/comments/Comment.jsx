import ProfileImage from "../ProfileImage";
import { useState, useEffect, useContext } from "react";
import CommentContent from "./CommentContent";
import "../../styles/comments/Comment.css"
import DeleteButton from "../DeleteButton";
import { CommentContext } from "../../App";
import EditButton from "../EditButton";

export default function Comment({ comment }) {
    const [commentUser, setCommentUser] = useState(null)
    const { comments, setComments } = useContext(CommentContext)
    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${comment.contactId}`)
            .then((response) => response.json())
            .then((data) => setCommentUser(data))
    }, [comments])

    const handleDeleteButton = () => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${comment.postId}/comment/${comment.id}`, {
            method: "DELETE",
        })
            .then((_) => {
                const newComments = comments[comment.postId].filter((c) => c.id !== comment.id)
                setComments({
                    ...comments,
                    [comment.postId]: newComments
                });
            })
    }
    return (
        <div className="comment">
            {
                commentUser ?
                    <>
                        <ProfileImage user={commentUser} w={50} h={50} />
                        <CommentContent comment={comment} commentUser={commentUser} isEditing={isEditing} setIsEditing={setIsEditing} comments={comments} setComments={setComments} />
                        <div className="commentButtonContainer">
                            <EditButton onClick={() => setIsEditing(!isEditing)} name="Edit" h={30} w={50} />
                            <DeleteButton onClick={() => handleDeleteButton()} name="Delete" h={30} w={50} />
                        </div>
                    </>
                    :
                    <p>Loading...</p>
            }
        </div>
    )
}