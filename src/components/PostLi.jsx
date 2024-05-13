import { useEffect, useState } from "react"
import CommentLi from "./CommentLi"
import ProfileImage from "./ProfileImage"

export default function PostLi({ post, loggedInUser }) {
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

    return (
        <>
            {postContact && 
                <li className="post-li">
                    <section className="post-content-container">
                        <div className="poster-information">
                            <div className="profile-image" style={{backgroundColor:`${postContact.favouriteColour}`}}>
                                <p>{`${postContact.firstName[0]}${postContact.lastName[0]}`}</p>
                            </div>

                            <div>
                                <p className="poster-name name">{`${postContact.firstName} ${postContact.lastName}`}</p>
                                <p className="post-title">{post.title}</p>
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
                        <div className="add-comment-container">
                            <ProfileImage loggedInUser={loggedInUser}/>
                            <div className="add-comment">
                                <input type="text" placeholder="Add a comment..." className="comment-input" />
                                <div className="send-button-container">
                                    <button className="send-button">
                                        <img src="src\assets\send-icon.svg" alt="Send icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
            }
        </>
    )
}