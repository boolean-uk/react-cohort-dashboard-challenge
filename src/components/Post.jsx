import React, { useContext } from 'react';
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import '../styles/post.css'
import PostComment from './PostComment';

const Post = ({ post }) => {
  const { contacts } = useContext(PostContext)

  let contact = contacts[post.contactId]

  return (
    <div className='post'>
      <div className='post-content'>
        <div className='post-header'>
          <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
          <div>
            <p><b>{contact.firstName} {contact.lastName}</b></p>
            <p>{post.title}</p>
          </div>
        </div>
        <p>{post.content}</p>
      </div>
        <PostComment/>
    </div>
  );
}

export default Post;
