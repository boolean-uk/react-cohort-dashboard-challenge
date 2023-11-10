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

  // console.log("inside Post.jsx, postID:", post.id)

  // const [post, setPost] = useState([])

  // const getPost = () => {
  //   const baseURL = "https://boolean-api-server.fly.dev/"
  //   const directory = "AllyDouillette"
  //   const endpoint = `/post/${postId}`

  //   fetch(baseURL + directory + endpoint)
  //     .then(res => res.json())
  //     .then(data => setPost(data))
  //     .then(() => console.log("loaded single post!", post.id, post.contactId))
  // }

  // useEffect(getPost, [])

  const users = userArr
  const [user, setUser] = useState({})
  const findUser = () => {
    const foundUser = users.find(user => user.contactId === post.contactId)
    setUser(foundUser)
  }

  useEffect(findUser, [])
  
  return (
    <div className="card" >
      <div className="post-container">
        <ProfileImg initials={user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}/>
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