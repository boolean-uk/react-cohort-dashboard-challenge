import { useEffect, useState } from "react";
import { getInitials } from "../Utils/helpers";
function Comment({ comment, fetchUser }) {
  const [user, setUser] = useState()

  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    const user = await fetchUser(comment.contactId)
    setUser(user)
  }


  return (
    <div className="comment">
      <div className="profile-picture-comment" style={user && { backgroundColor: user.favouriteColour }}>
        <p>{user && getInitials(user.name)}</p>
      </div>
      <div className="comment-content">
        <p style={{margin: "0px", fontWeight: "bold"}}>{user && user.name}</p>
        <p style={{margin: "0px"}}>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment