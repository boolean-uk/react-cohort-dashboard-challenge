import React, { useState } from 'react';
import '../styles/createPost.css'
import { TextField, Button } from '@mui/material';
import ProfilePicture from './ProfilePicture';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "Title",
    content: "",
    contactId: 1
  })

  const postURL = "https://boolean-api-server.fly.dev/oysteinbjo/post"

    async function PostPost() {
      await fetch(postURL
        , {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      PostPost()
    }

  return (
    <div className='create-post-container'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"}/>
      <TextField multiline value={post.content} onChange={(event) => setPost(event.target.value) }/>
      <Button onClick={handleSubmit}>Post</Button>
    </div>
  );
}

export default CreatePost;
