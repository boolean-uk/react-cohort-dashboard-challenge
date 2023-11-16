/* eslint-disable react/prop-types */
import { useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import SendArrow from "../Reusable/sendArrow"
import { get, post, postURL } from "../client"

export default function CommentForm({ postInfo, setPosts }) {

    const userId = "1"

    const [postComment, setPostComment] = useState()
        
    const handleChange = (event) => {
        const value = event.target.value

        setPostComment(
            {
                postId: postInfo.id,
                contactId: 1,
                content: value
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()

        post(`${postURL}/${postInfo.contactId}/comment`, postComment)
            .then(res => res.json())
            .then(() => get(`${postURL}`))
            .then(setPosts)
    }

    return (
        <div className="commentForm">
            <ProfileLogo id={userId} />
            <div className="inputAndButton">
                <form
                    onSubmit={handleSubmit}
                    action="">
                    <input
                        onChange={(event) => { handleChange(event,) }}
                        type="text"
                        placeholder="    Add a comment..." />
                    <SendArrow />
                </form>
            </div>
        </div>
    )
}