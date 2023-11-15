import ProfileImg from "../Profile/ProfileImg";
import { SendArrow } from "../../assets/SVGs";
import { useState } from "react";
import { baseURL } from "../../App";

function SendButton () {
  return (
    <SendArrow width={"30px"} color="#ffffff"/>
  )
}

export default function NewPost({getPosts}) {
  
  const initialPost = {
    contactId: 1,
    title: "",
    content: ""
  }
  const [newPost, setNewPost] = useState(initialPost)

  const handleInput = (event) => {
    const {name, value} = event.target
    setNewPost({...newPost, [name]: value})
  } 

  const handleSubmit = () => {
    const endpoint = "/post"
    const options = {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newPost)
    }

    fetch(baseURL+endpoint, options)
      .then(response => response.json())
      .then(() => getPosts())
      .catch((error) => console.log("error fetching posts", error))

  }

  return (
    <div className="card newPost-container">
        <ProfileImg contactId={1} size={"normal"}/>
        <div className="title-and-content">
          <input name="title" placeholder="Give your post a title…" onChange={(event) => handleInput(event)}/>
          <textarea name="content" placeholder="What's on your mind?" onChange={(event) => handleInput(event)}/>
        </div>
        <button onClick={() => handleSubmit()}>
          <SendButton />
        </button>
    </div>
  )
}