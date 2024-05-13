import { useEffect, useState } from "react"
import CommentLi from "./CommentLi"

export default function ProfileLi({ post }) {
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment`)
        .then(response => response.json())
        .then(setPostComments)
    }, [post.id])

    console.log(postComments)

    return (
        <li className="post-li">
            <section className="post-content-container">
                <div className="poster-information">
                    <div className="profile-image">
                        <p>{}</p>
                    </div>

                    <div>
                        <p>Name</p>
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