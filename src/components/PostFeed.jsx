import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const PostFeed = () => {
  const { posts, users } = useContext(PostsContext);

  return (
    <div className="post-feed">
      <h1>Post Feed</h1>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.contactId);
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {user && (
              <div className="profile-info">
                <h3>
                  Posted by: {user.firstName} {user.lastName}
                </h3>
                <p>Username: {user.username}</p>
              </div>
            )}
            <button>View Post</button>
            <button>See previous comments</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostFeed;
