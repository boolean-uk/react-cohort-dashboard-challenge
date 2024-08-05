import React from "react";

const Post = ({ post, profile }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {profile && (
        <div className="profile-info">
          <p>
            <strong>Posted by:</strong> {profile.username}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
        </div>
      )}
      <button>View Post</button>
      <button>See previous comments</button>
    </div>
  );
};

export default Post;
