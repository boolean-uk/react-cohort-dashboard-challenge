import ProfileImg from "../Profile/ProfileImg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Comment({comment}) {

  const [user, setUser] = useState(null)
  const loadUser = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const endpoint = `/AllyDouillette/contact/${comment.contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])
  
  let initials = "…"
  if (!!user) initials = user.firstName[0] + user.lastName[0]

  return (
    <div className="comment-container">
      <ProfileImg contactId={comment.contactId} size={"small"} initials={initials}/>
      {comment.content}
    </div>
  )
}