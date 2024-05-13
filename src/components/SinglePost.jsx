import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentLi from "./CommentLi"
import ProfileImage from "./ProfileImage"

export default function SinglePost({ postData, showMore, setShowMore, loggedInUser, addComment, setAddComment }) {
    const [postComments, setPostComments] = useState([])
    const [postContact, setPostContact] = useState(null)
    const params = useParams()

    const post = postData.find(p => p.id === Number(params.id))

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

    function handleChange(e) {
        const {name, value} = e.target
        setAddComment({
            ...addComment,
            [name] : value,
            postId: post.id,
            contactId: loggedInUser.id
        })
    }

    function handleClick() {
        setShowMore(!showMore)
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function addNewComment() {
            const options = {
                method: 'POST',
                body: JSON.stringify(addComment),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/post/${post.id}/comment`, options)
            const data = await response.json()

            setPostComments([
                ...postComments,
                data
            ])
        }

        addNewComment()
        
        setAddComment({
            postId: '',
            content: '',
            contactId: ''
        })
    }

    return (
        <>
            {postContact && 
                <div className="post-li single-post">
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
                                <form className="add-comment" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Add a comment..." className="comment-input" name="content" value={addComment.content} onChange={handleChange}/>
                                    <div className="send-button-container">
                                        <button className="send-button">
                                            <img src="../src/assets/send-icon.svg" alt="Send icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    </section>
                </div>
            }
            
                </>
    )
}