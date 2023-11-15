import ProfileImg from "../Profile/ProfileImg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";
import { EditPencil, DeleteBin, CheckmarkOK, CheckAbort } from "../../assets/SVGs";

export default function Comment({comment, getComments}) {

  const [changedComment, setChangedComment] = useState(comment)
  const [editMode, setEditMode] = useState(false)
  const [user, setUser] = useState(null)
  
  const loadUser = () => {
    const endpoint = `/contact/${comment.contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])

  const enableEditMode = () => setEditMode(true)

  const handleChange = (event) => {
    const {name, value} = event.target
    setChangedComment({
      ...changedComment,
      [name]: value
    })
  }

  const saveChanges = () => {
    const endpoint = `/post/${comment.postId}/comment/${comment.id}`
    const options = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(changedComment)
    }

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(() => getComments())
      .catch(error => console.log("error updating", error))

    setEditMode(false)
  }
  
  const revertChanges = () => {
    setEditMode(false)
  }

  const deleteComment = () => {
    console.log(comment.postId, comment.contactId, comment.id)
    const endpoint = `/post/${comment.postId}/comment/${comment.id}`
    const options = {
      method: "DELETE"
    }

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(() => getComments())
      .catch(error => console.log("error deleting", error))

  }
  
  return (
    <div className="comment-container">
      <ProfileImg contactId={comment.contactId} size={"small"}/>
      {editMode ?
      <input onChange={(event) => handleChange(event)} name="content" defaultValue={comment.content}/>
      :
      comment.content}
      <div className="buttons">
        {editMode ?
        <button onClick={() => saveChanges()}>
          <CheckmarkOK color={"#0099bb"} width={"15px"}/>
        </button>
        :
        <button onClick={() => enableEditMode()}>
          <EditPencil color={"#0099bb"} width={"15px"}/>
        </button>
        }
        {editMode ?
        <button onClick={() => revertChanges()}>
          <CheckAbort color={"#bb0000"} width={"15px"}/>
        </button>
        :
        <button onClick={() => deleteComment()}>
          <DeleteBin color={"#bb0000"} width={"15px"}/>
        </button>
        }
      </div>
    </div>
  )
}