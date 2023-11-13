import { useEffect, useState } from "react"
import Comment from "./Comment"
import AddComment from "../AddComment"

function Post (props) {

    const { post } = props

    const [contact, setContact] = useState({})

    const [comments, setComments] = useState([])

    const contactId = post.contactId
    const userName = "TomEastwood"
    const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
    const endpointForContacts = `/contact/${contactId}`
    const endpointForComments = `/post/${post.id}/comment`

    useEffect(() => {
        fetch(baseUrl + endpointForContacts)
            .then(res => res.json())
            .then(data => setContact(data))
    } , [])

    useEffect(() => {
        fetch(baseUrl + endpointForComments)
            .then(res => res.json())
            .then(data => setComments(data))
    } , [])

    if(!contact) {
        return <div>
                <h3>LOADING</h3>
                </div>
    } 

    const initials = contact.firstName?.charAt(0) + contact.lastName?.charAt(0)
    
    return (
        <li>
            <div className="post-header">
                <div className="poster-name">
                    <h3>{initials}</h3>
                </div>
                <h4>{contact.firstName + " " + contact.lastName}</h4>
                <h5>{post.title}</h5>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <div className="comments">
                <ul>
                    {comments.map(comment => 
                    <Comment
                        key={comment.id}
                        post={post}
                        comment={comment} 
                        contact={contact}
                    />)}
                </ul>
            </div>
            <div className="add-comment">
                <AddComment 
                    post={post}
                />
            </div>
        </li>
    )
}

export default Post