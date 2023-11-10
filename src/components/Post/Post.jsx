// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import Comments from "../Comments/Comments";

export default function Post({post}) {
  
  const [user, setUser] = useState(null)
  const loadUser = () => {
    const baseURL = "https://boolean-api-server.fly.dev"
    const endpoint = `/AllyDouillette/contact/${post.contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])

  if (!user) return <p>Loading…</p>

  return (
    <div className="card" >
      <div className="post-container">
        <ProfileImg initials={user.firstName[0] + user.lastName[0]}/>
        <div>
          <p className="post-author">{user.firstName + " " + user.lastName}</p>
          <p className="post-title"><a href={"/post/"+post.id}>{post.title}</a></p>
          <p className="post-body">{post.content}</p>
        </div>
      </div>
      <div className="comments-container">
        <Comments postId={post.id} />
      </div>
    </div>
  )
}