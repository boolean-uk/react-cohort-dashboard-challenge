import ProfileImg from "../Profile/ProfileImg";
import { useState } from "react";
import { baseURL } from "../../App";
import { SendArrow } from "../../assets/SVGs";

export default function AddComment ({postId, getComments}) {

  const contactId = 1
  
  const initComment = {
    postId: postId,
    contactId: contactId,
    content: ""
  }
  
  const [comment, setComment] = useState(initComment)

  const handleInput = (event) => {
    setComment({...comment, [event.target.name]: event.target.value})
  }

  const handleSubmission = () => {
    const endpoint = `/post/${postId}/comment`
    const body = {
      ...comment
    }
    const options = {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(body)
    }
    
    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(() => getComments())
      .catch((error) => console.log("error during comment posting", error))

  }
  if (!postId) {
    return
  }

  return (
    <div className="comment-container">
      <ProfileImg contactId={contactId} size={"small"}/>
      <input name="content" placeholder="Add a comment" onChange={(event) => handleInput(event)}/>
      <button onClick={() => handleSubmission()}><SendArrow color={"#000000"} height={"20px"}/></button>
    </div>
  )
}