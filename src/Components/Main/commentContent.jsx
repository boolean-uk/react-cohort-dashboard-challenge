import { useEffect, useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import { get, postURL } from "../client"

export default function CommentContent({ users, postInfo }) {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        if (postInfo) {
            get(`${postURL}/${postInfo.id}/comment`)
                .then(data => setComments(data))
        }
    }, [postInfo])

    return (comments && (
        <>
            {
                comments.map((comment) => {
                    const name = users.find((user) => user.id === comment.contactId);
                    if (name === undefined){
                        return null
                    }
                    return (
                        < div key={comment.id} className="commentGrid">
                            <ProfileLogo id={comment.contactId} />
                            <section className="comment">
                                <h3>{name.firstName} {name.lastName}</h3>
                                <p>{comment.content}</p>
                            </section>
                        </div >)
                })
            }
            </>
        ))
    }