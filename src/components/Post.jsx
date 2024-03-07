import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import '../styles/post.css'
import PostComment from './PostComment';
import Comment from './Comment';

const Post = ({ post }) => {
  const { contacts } = useContext(PostContext)
  const [comments = [], setComments] = useState()
  
  let contact = contacts.find(c => c.id === post.contactId)  
  
  async function GetComments(){
    const response = await fetch(`https://boolean-api-server.fly.dev/oysteinbjo/post/${post.id}/comment`)
    const data = await response.json()
    setComments(data)
  }
  
  useEffect(()=> {
    GetComments()
    setComments(comments.filter(c => c.postId == post.id))
  },[])

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
      </div>
      {comments.length > 0 ?
      (
        <div>
          <p>See previous comments</p>
          {comments.map((comment, index) => {
            return <Comment comment={comment} key={index}/>
          })}
        </div>
      ) : <>
      </>
    }
        <PostComment post={post}/>
    </div>
  );
}

export default Post;
