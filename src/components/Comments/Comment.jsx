import ProfileImg from "../Profile/ProfileImg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../App";
import { EditPencil, DeleteBin } from "../../assets/SVGs";

export default function Comment({comment, getComments}) {

  const [user, setUser] = useState(null)
  const loadUser = () => {
    const endpoint = `/contact/${comment.contactId}`
    
    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then(data => setUser(data))
  }

  useEffect(loadUser, [])

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
      {comment.content}
      <div className="buttons">
        <button onClick={() => handleEdit()}>
          <EditPencil color={"#0099bb"} height={"15px"}/>
        </button>
        <button onClick={() => deleteComment()}>
          <DeleteBin color={"#bb0000"} height={"15px"}/>
        </button>
      </div>
    </div>
  )
}