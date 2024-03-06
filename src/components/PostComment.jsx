import React, { useContext, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/postComment.css'
import { PostContext } from '../App';

const PostComment = () => {
  const {posts, setPosts} = useContext(PostContext)
  const [comment, setComment] = useState()

  return (
    <div className='post-comment'>
      <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"} />
      <input type='text' className='comment-input' value={comment} onChange={() => setComment()}/>
    </div>
  );
}

export default PostComment;
