import React, { useContext } from 'react';
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import '../styles/post.css'
import PostComment from './PostComment';

const Post = ({ post }) => {
  const { contacts } = useContext(PostContext)

  let contact = contacts.find(c => c.id === post.contactId)  
  return (
    <div className='post'>
      <div className='post-content'>
        <div className='post-header'>
          <ProfilePicture firstName={
                          contact ? contact.firstName : "Bill"} 
                          lastName={contact ? contact.lastName : "Clinton"} 
                          favouriteColour={contact ? contact.favouriteColour : "Green"} />
          <div>
            <p><b>{contact ? contact.firstName : "Bill"} {contact ? contact.lastName : "Clinton"}</b></p>
            <p>{post.title}</p>
          </div>
        </div>
        <p>{post.content}</p>
        <PostComment/>
      </div>
    </div>
  );
}

export default Post;
