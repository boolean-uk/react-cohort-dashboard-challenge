import React, { useContext, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/postComment.css'
import { PostContext } from '../App';
import { IconButton, InputAdornment, TextField } from '@mui/material';

const PostComment = () => {
  const {posts, setPosts} = useContext(PostContext)
  const [comment, setComment] = useState()

  return (
    <div className='post-comment'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"} />
      <TextField multiline={true} 
                 className='comment-input' 
                 value={comment} 
                 onChange={(e) => setComment(e.target.value)}
                 InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton 
                            edge="end"
                            onClick={() => setComment()}
                            >
                      </IconButton>
                    </InputAdornment>
                  )
                 }}
                 />
    </div>
  );
}

export default PostComment;
