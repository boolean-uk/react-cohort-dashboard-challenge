// Comment.jsx
import '/src/styles/Feed/post/commentSection/Comment.css'

import { useEffect, useState } from "react"
import { ProfileImage } from "../../../ProfileImage"
import { getUser } from "../../../../utils/userRequests"

export const Comment = ({comment}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser(comment.contactId)
            .then(data => {setUser(data)})
    })

    if (!user) return (<p>User not found</p>)
    return (
      <div className="comment-container">
        <div className="comment-profile-image">
          <ProfileImage user={user} />
        </div>
        
        <div className="comment-content">
          <p className='comment-user-name'>{user.firstName} {user.lastname}</p>
          <p>{comment.content}</p>
        </div>
      </div>
    );
}