/* eslint-disable react/prop-types */

import { useContext, useState, useEffect } from "react";
import { CommentsContext, UsersContext } from "../../../../App";
import { Link, useParams } from "react-router-dom";

import Comment from "../../CommentSection/Comment";
import CommentForm from "../../CommentSection/CommentForm";
import { PostsContext } from "../../../../App";

function PostCard({ post}) {
  const { users, loggedInUser } = useContext(UsersContext);
  

  const user = users.find((user) => {
    if (user.id === post.contactId) return user;
  });


  return (
    <section className="post-container">
      <div className="post-header">
        <div className="profile-initials" style={{backgroundColor: user.favouriteColour}}>
          <p className="initials">
            {user.firstName[0]}
            {user.lastName[0]}
          </p>
        </div>
        <div className="post-information">
          <p id="profile-name">
            {user.firstName} {user.lastName}
          </p>
          <Link to={`/post/${post.id}`}>
            <p id="post-title">{post.title}</p>
          </Link>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
        <Comment user={user} post={post}/>
       <CommentForm loggedInUser={loggedInUser} post={post}/>
      </div>
    </section>
  );
}
export default PostCard;
