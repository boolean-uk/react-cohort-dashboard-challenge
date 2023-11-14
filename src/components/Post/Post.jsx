// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import Comments from "../Comments/Comments";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";

export default function Post({post}) {
  
  const navigate = useNavigate()
  
  const [user, setUser] = useState(null)
  const loadUser = () => {
    
    const endpoint = `/contact/${post.contactId}`

    fetch(baseURL+endpoint)
    .then(response => response.json())
    .then(data => setUser(data))
    .catch((error) => console.log(error))
  }
  useEffect(loadUser, [])

  const handleClickUsername = () => {
    post.contactId === 1 ? navigate("/profile") : navigate("/user/"+post.contactId)
  }
  
  if (!user) return

  return (
    <div className="card" >
      <div className="post-container">
        <ProfileImg contactId={post.contactId} initials={user.firstName[0] + user.lastName[0]}/>
        <div>
          <p className="post-author" onClick={() => handleClickUsername()}>{user.firstName + " " + user.lastName}</p>
          <p className="post-title" onClick={() => navigate("/post/"+post.id)}>{post.title}</p>
          <p className="post-body">{post.content}</p>
        </div>
      </div>
      <div className="comments-container">
        <Comments postId={post.id} />
      </div>
    </div>
  )
}