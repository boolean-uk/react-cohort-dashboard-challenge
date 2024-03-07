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

    const handleChange = (event) => {
      setPost({...post, content: event.target.value})
    }
  console.log(post.contactId)


  return (
    <div className='create-post-container'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"}/>
      <TextField multiline value={post.content} onChange={handleChange}/>
      <Button onClick={handleSubmit}>Post</Button>
    </div>
  );
}

export default CreatePost;
