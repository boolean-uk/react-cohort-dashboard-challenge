import { useEffect, useState } from "react"
import CommentLi from "./CommentLi"

export default function ProfileLi({ post }) {
    const [postComments, setPostComments] = useState([])
    const [postContact, setPostContact] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment`)
        .then(response => response.json())
        .then(setPostComments)
    }, [post.id])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/contact/${post.contactId}`)
        .then(response => response.json())
        .then(setPostContact)
    }, [post.contactId])

    console.log(postComments)
    console.log(postContact)

    return (
        <li className="post-li">
            <section className="post-content-container">
                <div className="poster-information">
                    <div className="profile-image" style={{backgroundColor:`${postContact.favouriteColour}`}}>
                        <p>{`${postContact.firstName[0]}${postContact.lastName[0]}`}</p>
                    </div>

                    <div>
                        <p>{`${postContact.firstName} ${postContact.lastName}`}</p>
                        <p>{post.title}</p>
                    </div>
                </div>

                <div>{post.content}</div>
            </section>
            
            <section className="comments-container">
                <ul className="comments-ul">
                    {postComments.map((comment, index) => {
                        return <CommentLi key={index} comment={comment} />
                    })}
                </ul>

            </section>
        </li>
    )
}