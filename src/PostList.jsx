import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostAuthor } from "./PostAuthorContext";
import Comment from "./Comment";
import NewPost from "./NewPost";

function PostList() {
  const { posts, setPosts, contacts } = usePostAuthor();
  const [expandedPosts, setExpandedPosts] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/1")
      .then((response) => response.json())
      .then((data) => setCurrentUser(data))
      .catch((error) => console.error("Error fetching current user:", error));
  }, []);

  useEffect(() => {
    posts.forEach((post) => {
      if (!users[post.contactId]) {
        fetch(
          `https://boolean-uk-api-server.fly.dev/olaolumcpaul/contact/${post.contactId}`
        )
          .then((response) => response.json())
          .then((data) =>
            setUsers((prevUsers) => ({ ...prevUsers, [post.contactId]: data }))
          )
          .catch((error) => console.error("Error fetching user:", error));
      }
    });
  }, [posts, users]);

  const setComments = (postId, newComments) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: newComments } : post
      )
    );
  };

  const handleExpand = (postId) => {
    setExpandedPosts((prevExpanded) => ({
      ...prevExpanded,
      [postId]: !prevExpanded[postId],
    }));
  };

  const handleAddPost = (content) => {
    fetch(`https://boolean-uk-api-server.fly.dev/olaolumcpaul/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: content, contactId: 1 }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        setPosts([newPost, ...posts]);
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div className="post-list">
      <NewPost currentUser={currentUser} onAddPost={handleAddPost} />
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-author">
            <div className="author-initials">
              {users[post.contactId]?.firstName &&
              users[post.contactId]?.lastName
                ? `${users[post.contactId].firstName[0]}${
                    users[post.contactId].lastName[0]
                  }`
                : ""}
            </div>
            <Link to={`/profile/${post.contactId}`}>
              {users[post.contactId]?.firstName &&
              users[post.contactId]?.lastName
                ? `${users[post.contactId].firstName} ${
                    users[post.contactId].lastName
                  }`
                : "Loading..."}
            </Link>
          </div>
          <div>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
          <Comment
            postId={post.id}
            setComments={(comments) => setComments(post.id, comments)}
            currentUser={currentUser}
            comments={post.comments}
            expanded={expandedPosts[post.id]}
            onExpand={() => handleExpand(post.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default PostList;
