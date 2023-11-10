// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import userArr from "../Profile/userArr";
import Comments from "../Comments/Comments";

export default function Post({post}) {
  const initUser = {
    firstName: "Fuck",
    lastName: "React",
  }
  const users = userArr
  const [user, setUser] = useState(initUser)
  const findUser = () => {
    const foundUser = users.find(user => user.contactId === post.contactId)
    setUser(foundUser)
    console.log(user)
  }

  setUser(initUser)
  useEffect(findUser, [])

  console.log(user.firstName)
  return (
    <div className="card" >
      <div className="post-container">
        <ProfileImg initials={"NN"}/>
        <div>
          <p className="post-author">{"NoName"}</p>
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