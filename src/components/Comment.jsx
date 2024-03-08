import React, { useContext } from 'react';
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 9px;
`

const Comment = ({ comment }) => {
  const {contacts} = useContext(PostContext)
  let contact = contacts.find(c => c.id === comment.contactId)  

  return (
    <CommentContainer>
      <ProfilePicture firstName={
        contact ? contact.firstName : "Bill"}
        lastName={contact ? contact.lastName : "Clinton"}
        favouriteColour={contact ? contact.favouriteColour : "Green"} 
        height={"28px"}
        width={"28px"}
        profileId={contact.id}/>
        <div>{comment.content}</div>

    </CommentContainer>
  );
}

export default Comment;
