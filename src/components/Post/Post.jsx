// {
// 	"id": 1,
// 	"contactId": 4,
// 	"title": "Tabgo atrocitas et acidus theatrum bene ducimus.",
// 	"content": "Sequi laborum anser. Aedificium vitiosus quae fugit tergiversatio. Assumenda bene viriliter vinco blandior corrupti circumvenio amissio."
// }

import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import Comments from "../Comments/Comments";

export default function Post({postId}) {

  const [post, setPost] = useState([])

  const getPost = () => {
    const baseURL = "https://boolean-api-server.fly.dev/"
    const directory = "AllyDouillette" + "/post"
    const endpoint = `/${postId}`

    fetch(baseURL + directory + endpoint)
      .then(res => res.json())
      .then(data => setPost(data))
      .then(() => console.log("loaded single post!", post.id, post.contactId))
  }

  useEffect(getPost, [])
  
  return (
    <div className="card" >
      <div className="post-container">
        <ProfileImg userId={post.contactId}/>
        <div>
          <p className="post-author">{"Load"}</p>
          <p className="post-title"><a href={"/post/"+postId}>{post.title}</a></p>
          <p className="post-body">{post.content}</p>
        </div>
      </div>
      <div className="comments-container">
        <Comments postId={postId} />
      </div>
    </div>
  )
}