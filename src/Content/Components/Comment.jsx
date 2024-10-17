import { useState } from "react";
import ProfileCircle from "../../Helper/profileCircle";

export default function CommentMessage({ comment, users }) {
    const [id, setId] = useState(comment.contactId)
    const [user, setUser] = useState(users.find(user => user.id === id))

    const [initials, setInitials] = useState(user ?
        `${user.firstName.charAt(0) + user.lastName.charAt(0)}` :
        "user not loaded");

    const [color, setColor] = useState(user ?
        user.favouriteColour :
        '#FFFFFF'
    )

    return (
        <div className='comment'>
            <div className='commentcircle'>
                <ProfileCircle initials={initials} color={color} />
            </div>
            <div className='commentcontent'>
                {comment.content}
            </div>
        </div>
    )
}