import ProfileImg from "../Profile/ProfileImg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";

export default function Comment({comment}) {

  const [user, setUser] = useState(null)
  const loadUser = () => {
    const endpoint = `/contact/${comment.contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])
  
  return (
    <div className="comment-container">
      <ProfileImg contactId={comment.contactId} size={"small"}/>
      {comment.content}
    </div>
  )
}