import React, { useState, useEffect } from 'react';

export default function PostsDisplay () {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/jdm1991/post')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://boolean-api-server.fly.dev/jdm1991/contact')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div className="main-content">
      <div className="each-post">
        <ul className="full-comment-ul">
          {posts.map((post) => {
            const contact = contacts.find((c) => c.id === post.contactId);
            return (
              <li key={post.id} className="full-comment-li">
                <div className="comment-title">{contact ? `${contact.firstName} ${contact.lastName}` : ""}</div>
                <div className="comment-link">{post.title}</div>
                <div className="main-comment">{post.content}</div>
                <hr className="hr"></hr>
                <div className="form">
                  <form>
                    <input className="input" type="text" placeholder="Add a comment..." />
                    <button className="post-button" type="submit">Post</button>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
