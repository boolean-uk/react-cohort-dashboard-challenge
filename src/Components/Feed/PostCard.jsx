/* eslint-disable react/prop-types */

import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../App";

import Comment from "./Comment";
import CommentForm from "./CommentForm";



function PostCard({ post, setPosts, posts }) {
  const { users, loggedInUser } = useContext(UsersContext);
  const [singlePost, setSinglePost] = useState({})

  const [comments, setComments] = useState([])

  const user = users.find((user) => {
    if (user.id === post.contactId) return user;
  });


  const handleChange = (e) => {
    const {value} = event.target

    setCommentForm({
      commentContent: value,
      ...loggedInUser,
      postId: post.id,
      contactId: post.contactId
    })
  }

  
  const updateAPI = (e) => {
    e.preventDefault()
    
    // fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(commentForm)
    // })
    //   .then(response => response.json())
    //   .then(json => setSinglePost({...post, json}))
    //   .then(setPosts([...posts, singlePost]))

    // setCommentForm({
    //   commentContent: ''
    // })
  }

  return (
    <section className="post-container">
      <div className="post-header">
        <div className="profile-initials">
          <p>
            {user.firstName[0]}
            {user.lastName[0]}
          </p>
        </div>
        <div className="post-information">
          <p id="profile-name">
            {user.firstName} {user.lastName}
          </p>
          <p id="post-title">{post.title}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
       <Comment post={post} comments={comments} setComments={setComments} user={user} posts={posts} users={users}/>
       <CommentForm loggedInUser={loggedInUser}/>
      </div>
    </section>
  );
}
export default PostCard;
