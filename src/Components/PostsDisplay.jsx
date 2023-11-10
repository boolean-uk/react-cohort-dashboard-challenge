import React, { useState, useEffect } from "react";

export default function PostsDisplay() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/jdm1991/post")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch("https://boolean-api-server.fly.dev/jdm1991/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  function fetchContactComments(postId) {
    fetch(`https://boolean-api-server.fly.dev/jdm1991/post/${postId}/comment`)
      .then((response) => response.json())
      .then((newComments) => {
        setComments((prevComments) => {
          const updatedComments = new Map(prevComments.map((c) => [c.id, c]));
          newComments.forEach((comment) =>
            updatedComments.set(comment.id, comment)
          );
          return Array.from(updatedComments.values());
        });
      });
  }

  useEffect(() => {
    posts.forEach((post) => {
      fetchContactComments(post.id);
    });
  }, [posts]);

  return (
    <div className="main-content">
      <div className="post-box">
        <div className="user-avatar">
          <span className="user-initials">JM</span>
        </div>
        <input
          type="text"
          className="post-input"
          placeholder="What’s on your mind?"
        />
        <button type="submit" className="post-button">
          Post
        </button>
      </div>

      {posts.map((post) => {
        const contact = contacts.find((c) => c.id === post.contactId);
        let initials = "";
        if (contact) {
          initials = `${contact.firstName[0]}${contact.lastName[0]}`;
        }
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );
        return (
          <div key={post.id} className="each-post">
            <ul className="full-comment-ul">
              <li className="full-comment-li">
                <div className="title-container">
                  <div className="initials">{initials}</div>
                  <div className="comment-title">
                    {contact ? `${contact.firstName} ${contact.lastName}` : ""}
                  </div>
                </div>
                <div className="comment-link">{post.title}</div>
                <div className="main-comment">{post.content}</div>
                <hr className="hr"></hr>
                <div className="form">
                  <form>
                    <div className="comments">
                      {postComments.map((comment) => {
                        const commenterContact = contacts.find(
                          (c) => c.id === comment.contactId
                        );
                        const commenterInitials = commenterContact
                          ? `${commenterContact.firstName[0]}${commenterContact.lastName[0]}`
                          : "A";
                        return (
                          <div className="comment-section" key={comment.id}>
                            <div className="comment-initials">
                              {commenterInitials}
                            </div>
                            <div className="comment-body">
                              <div className="commenter-name">
                                {commenterContact
                                  ? `${commenterContact.firstName} ${commenterContact.lastName}`
                                  : "Anonymous"}
                              </div>
                              <div className="comment-content">
                                {comment.content}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="comment-input-container">
                    <div className="user-avatar">
                      <span className="user-initials">JM</span>
                    </div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Add a comment..."
                    />
                    <button className="post-button" type="submit">
                      Post
                    </button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
