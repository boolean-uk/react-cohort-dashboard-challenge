/* eslint-disable react/prop-types */

import { useContext } from "react"
import { MyContext } from "../App"

export default function PostComment(props){
    const context = useContext(MyContext)
    const {comment} = props

    const contact = context.contacts.find((x) => x.id === comment?.contactId)

    if (!contact) return <p>Loading comment user author...</p>
   
    return (
        <div key={comment.id}>
            <img src={contact.profileImage}/>
            <h4>{contact.firstName} {contact.lastName}</h4>
            <p>{comment.content}</p>
        </div>
    )
}