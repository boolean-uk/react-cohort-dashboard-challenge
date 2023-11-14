import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import Comments from "../Comments/Comments";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";
import { EditPencil, DeleteBin } from "../../assets/SVGs";

export default function Post({post, setReload}) {
  
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
  
  const deletePost = (postId) => {
    const endpoint = `/post/${postId}`

    const options = {
      method: "DELETE"
    }

    fetch(baseURL+endpoint, options)
      .then(() => setReload(true))
      .catch((error) => console.log("error deleting:", error))
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
        <div className="buttons">
          <button onClick={() => handleEdit()}>
            <EditPencil color={"#0099bb"} height={"20px"}/>
          </button>
          <button onClick={() => deletePost(post.id)}>
            <DeleteBin color={"#bb0000"} height={"20px"}/>
          </button>
        </div>
      </div>
      <div className="comments-container">
        <Comments postId={post.id} />
      </div>
    </div>
  )
}