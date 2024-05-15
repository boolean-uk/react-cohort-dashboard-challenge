/* eslint-disable react/prop-types */

import { useContext, useState, useEffect } from "react";
import { CommentsContext, UsersContext } from "../../../../App";
import { Link, useParams } from "react-router-dom";

import Comment from "../../CommentSection/Comment";
import CommentForm from "../../CommentSection/CommentForm";
import { PostsContext } from "../../../../App";

function PostCard({ post}) {
  const { users, loggedInUser } = useContext(UsersContext);
  const {comments, setComments} = useContext(CommentsContext)
  const {posts, setPosts} = useContext(PostsContext)

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
    )
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [setComments]);
  

  const user = users.find((user) => {
    if (user.id === post.contactId) return user;
  });

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
          <Link to={`/post/${post.id}`}>
            <p id="post-title">{post.title}</p>
          </Link>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
        {comments.map((comment) => <Comment key={comment.id} comment={comment} user={user}/>)}
       <CommentForm loggedInUser={loggedInUser} post={post} />
      </div>
    </section>
  );
}
export default PostCard;
