import React, { useContext, useState } from 'react';
import '../styles/createPost.css'
import { TextField, Button } from '@mui/material';
import ProfilePicture from './ProfilePicture';
import { PostContext } from '../App';

/**
 * TODOS: 
 * - refresh data on CreatePost
 */
const CreatePost = () => {
  const {getPosts} = useContext(PostContext)
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
      getPosts()
    }

    const handleChange = (event) => {
      setPost({...post, content: event.target.value})
    }


  return (
    <div className='create-post-container'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"} profileId={post.contactId}/>
      <TextField multiline value={post.content} onChange={handleChange}/>
      <Button onClick={handleSubmit}>Post</Button>
    </div>
  );
}

export default CreatePost;
