/* eslint-disable react/prop-types */

import { useContext } from "react"
import { MyContext } from "../App"
import ProfilePicture from "./ProfilePicture"
import { Link } from "react-router-dom"

export default function PostComment(props){
    const context = useContext(MyContext)
    const {comment} = props

    const contact = context.contacts.find((x) => x.id === comment?.contactId)

    if (!contact) return <p>Loading comment user author...</p>
   
    return (
        <div key={comment.id}>
            <div className="comment-profile">
            <Link to={`/profile/${contact.id}`}>
            <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
            </Link>
            </div>
            <div className="comment-content">
                <Link to={`/profile/${contact.id}`}>
                <h4>{contact.firstName} {contact.lastName}</h4>
                </Link>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}