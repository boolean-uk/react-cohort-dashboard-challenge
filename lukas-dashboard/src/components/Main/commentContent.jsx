/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import { get, postURL } from "../client"

export default function CommentContent({ users, posts, postInfo }) {

    const [Comments, setComments] = useState(null)
    console.log(Comments)

    useEffect(() => {
        if (postInfo) {
            get(`${postURL}/${postInfo.id}/comment`)
                .then(data => setComments(data))
        }
    }, [postInfo])

    return (Comments && (
        <>
            {
                Comments.map((comment) => {
                    return (
                    < div key={comment.id} className="commentGrid">
                        <ProfileLogo id={comment.contactId} />
                        <section className="comment">
                            <h3>{comment.contactId}</h3>
                            <p>{comment.content}</p>
                        </section>
                    </div >)
                })
            }
        </>
    ))
}