import { useEffect, useState } from "react";
import ProfileImg from "../Profile/ProfileImg";
import Comments from "../Comments/Comments";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";
import { EditPencil, DeleteBin, CheckmarkOK, CheckAbort } from "../../assets/SVGs";

export default function Post({post, setReload}) {
  
  const navigate = useNavigate()
  
  const [changedPost, setChangedPost] = useState(post)
  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)

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
  
  const editPost = () => setEditMode(!editMode)

  const handleChange = (event) => {
    const {name, value} = event.target
    setChangedPost({
      ...changedPost,
      [name]: value
    })
  }

  const saveChanges = () => {
    setEditMode(false)
    const endpoint = `/post/${post.id}`
    const options = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(changedPost)
    }

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .catch(error => console.log("error updating", error))
  }

  const revertChanges = () => {
    setEditMode(false)
  }

  const deletePost = () => {
    const endpoint = `/post/${post.id}`

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
        <div className="title-and-content">
          <p className="post-author" onClick={() => handleClickUsername()}>{user.firstName + " " + user.lastName}</p>
          {editMode ?
          <>
            <input className="post-title" name="title" defaultValue={post.title} onChange={(event) => handleChange(event)}/>
            <textarea className="post-body" name="content" defaultValue={post.content} onChange={(event) => handleChange(event)}/>
          </>
          :
          <>
            <p className="post-title" onClick={() => navigate("/post/"+post.id)}>{post.title}</p>
            <p className="post-body">{post.content}</p>
          </>
          }
        </div>
        <div className="buttons">
          {editMode ? 
            <button onClick={() => saveChanges()}>
            <CheckmarkOK color={"#0099bb"} height={"20px"}/>
            </button> : 
            <button onClick={() => editPost()}>
              <EditPencil color={"#0099bb"} height={"20px"}/>
            </button>
          }
          {editMode ? 
          <button onClick={() => revertChanges(post.id)}>
            <CheckAbort color={"#bb0000"} height={"20px"}/>
          </button> :
          <button onClick={() => deletePost(post.id)}>
            <DeleteBin color={"#bb0000"} height={"20px"}/>
          </button>}
        </div>
      </div>
      <div className="comments-container">
        <Comments postId={post.id} setReload={setReload} />
      </div>
    </div>
  )
}