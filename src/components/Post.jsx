import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PostContext } from '../App';
import ProfilePicture from './ProfilePicture';
import '../styles/post.css'
import PostComment from './PostComment';
import Comment from './Comment';

/**
 * TODO: re-render on comment
 */
const Post = (props) => {
  const postId = useParams()
  const nav = useNavigate()
  let { post } = props
  const { contacts, posts } = useContext(PostContext)
  if (post == undefined) {
    post = posts.find(({ id }) => id.toString() == postId.id)
  }

  const [comments = [], setComments] = useState()
  const [expandComments, setExpandComments] = useState(postId.id ? true :false)

  let contact = contacts.find(c => c.id == post.contactId)

  async function GetComments() {
    const response = await fetch(`https://boolean-api-server.fly.dev/oysteinbjo/post/${post.id}/comment`)
    const data = await response.json()
    setComments(data)
  }

  useEffect(() => {
    GetComments()
    setComments(comments.filter(c => c.postId == post.id))
  }, [])

  const handleExpandComments = () => {
    setExpandComments(!expandComments)
  }

  return (
    <div className='post'>
      <div className='post-content'>
        <div className='post-header'>
          <ProfilePicture firstName={
            contact ? contact.firstName : "Bill"}
            lastName={contact ? contact.lastName : "Clinton"}
            favouriteColour={contact ? contact.favouriteColour : "Green"} 
            profileId={contact.id}/>
          <div>
            <p className='name'><b>{contact ? contact.firstName : "Bill"} {contact ? contact.lastName : "Clinton"}</b></p>
            <p className="title" onClick={() => nav(`/post/${post.id}`)}>{post.title}</p>
          </div>
        </div>
        <p>{post.content}</p>
      </div>
      {comments.length > 0 ?
        (
          <div>
            {
              comments.length > 3 && postId.id === undefined &&
              <button onClick={() => handleExpandComments()}>See previous comments</button>
            }
            {comments.slice(0, expandComments ? comments.length : 3).map((comment, index) => {
              return <Comment comment={comment} key={index} />
            })}
          </div>
        ) : <>
        </>
      }
      <PostComment post={post} comments={comments} setComments={setComments} />
    </div>
  );
}

export default Post;
