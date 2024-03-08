import React, { useContext, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/postComment.css'
import { PostContext } from '../App';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const PostComment = ({post, comments, setComments}) => {
  const { posts, setPosts } = useContext(PostContext)
  const [comment, setComment] = useState({
    contactId: 1,
    content: "",
    postId: post.id,
  })

  const postURL = `https://boolean-api-server.fly.dev/oysteinbjo/post/${post.id}/comment`


  async function AddComment() {
    const response = await fetch(postURL
      , {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setComments([...comments, data])
  }

  const handleChange = (event) => {
    setComment({...comment, content: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    AddComment()
    setComment({...comment, content: ""})
  }

  return (
    <div className='post-comment'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"} profileId={1}/>
      <TextField multiline={true}
        className='comment-input'
        value={comment.content}
        onChange={handleChange}
        variant='filled'
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                edge="end"
                onClick={handleSubmit}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}

export default PostComment;
