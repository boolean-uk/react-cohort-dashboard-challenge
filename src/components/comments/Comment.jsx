import ProfileImage from "../ProfileImage";
import { useState, useEffect } from "react";
import CommentContent from "./CommentContent";
import "../../styles/comments/Comment.css"
export default function Comment({ comment }) {
    const [commentUser, setCommentUser] = useState(null)
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/contact/${comment.contactId}`)
            .then((response) => response.json())
            .then((data) => setCommentUser(data))
    }, [])
    return (
        <div className="comment">
            {
                commentUser ?
                    <>
                        <ProfileImage imageUrl={commentUser.profileImage} w={50} h={50} />
                        <CommentContent comment={comment} commentUser={commentUser} />
                    </>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    )
}