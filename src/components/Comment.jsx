import React, { useContext } from 'react';
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import '../styles/comment.css'

const Comment = ({ comment }) => {
  const {contacts} = useContext(PostContext)
  let contact = contacts.find(c => c.id === comment.contactId)  

  return (
    <div className='comment-container'>
      <ProfilePicture firstName={
        contact ? contact.firstName : "Bill"}
        lastName={contact ? contact.lastName : "Clinton"}
        favouriteColour={contact ? contact.favouriteColour : "Green"} 
        height={"28px"}
        width={"28px"}
        profileId={contact.id}/>
        <p>{comment.content}</p>

    </div>
  );
}

export default Comment;
