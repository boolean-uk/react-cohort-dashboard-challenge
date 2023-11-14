import ProfileImg from "../Profile/ProfileImg";
import { useState } from "react";
import { baseURL } from "../../App";

export default function AddComment ({postId, setReload}) {

  const contactId = 1

  const initComment = {
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
      ...comment,
      "postId": postId
    }
    const options = {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(body)
    }
    console.log(body)

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(() => setReload(true))
      .catch((error) => console.log("error during comment posting", error))
  }
  if (!postId) {
    console.log(postId)
    return
  }

  return (
    <div className="comment-container">
      <ProfileImg contactId={contactId} size={"small"}/>
      <input name="content" placeholder="Add a comment" onChange={(event) => handleInput(event)}/>
      <button onClick={() => handleSubmission()}>+</button>
    </div>
  )
}