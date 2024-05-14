import { createContext, useEffect, useState } from "react"
import CommentLi from "./CommentLi"
import ProfileImage from "./ProfileImage"
import { Link } from "react-router-dom"
import AddCommentForm from "./AddCommentForm"

export const PostContext = createContext()

export default function PostLi({ post, loggedInUser }) {
    const [postComments, setPostComments] = useState([])
    const [postContact, setPostContact] = useState(null)
    const [showMore, setShowMore] = useState(false)

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

    const firstThreeComments = postComments.slice(-3)

    function handleClick() {
        setShowMore(!showMore)
    }

    const value = {
        postComments,
        setPostComments,
        post
    }

    return (
        <>
            {postContact && 
                <li className="post-li">
                    <section className="post-content-container">
                        <div className="poster-information">
                            <ProfileImage loggedInUser={postContact}/>
                            <div>
                                <p className="poster-name name">{`${postContact.firstName} ${postContact.lastName}`}</p>
                                <Link to={`/post/${post.id}`}><p className="post-title">{post.title}</p></Link>
                            </div>
                        </div>

                        <div className="post-content">
                            {post.content}
                        </div>
                    </section>
                    
                    <section className="comments-container">
                        <>
                            <div className="see-more-button-container">
                                {postComments.length > 3 && <button onClick={handleClick} className="see-more-button">See previous comments</button>}
                            </div>
                            <ul className="comments-ul">
                                {showMore && postComments.map((comment, index) => {
                                    return <CommentLi key={index} comment={comment}/>
                                })}

                                {!showMore && firstThreeComments.map((comment, index) => {
                                    return <CommentLi key={index} comment={comment}/>
                                })}
                            </ul>
                            <div className="add-comment-container">
                                <ProfileImage loggedInUser={loggedInUser}/>
                                <PostContext.Provider value={value}>
                                    <AddCommentForm loggedInUser={loggedInUser}/>
                                </PostContext.Provider>
                            </div>
                        </>
                    </section>
                </li>
            }
        </>
    )
}