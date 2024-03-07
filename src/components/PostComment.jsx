/* eslint-disable react/prop-types */

import { useContext } from "react"
import { MyContext } from "../App"
import ProfilePicture from "./ProfilePicture"

export default function PostComment(props){
    const context = useContext(MyContext)
    const {comment} = props

    const contact = context.contacts.find((x) => x.id === comment?.contactId)

    if (!contact) return <p>Loading comment user author...</p>
   
    return (
        <div key={comment.id}>
            <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
            <div className="comment-content">
                <h4>{contact.firstName} {contact.lastName}</h4>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}