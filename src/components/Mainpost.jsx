// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://boolean-api-server.fly.dev/SukunimiVinod1';

export default function Mainpost() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newCommentContent, setNewCommentContent] = useState({});

  useEffect(() => {
    const fetchPostsAndContacts = async () => {
      try {
        const postsResponse = await fetch(`${API_BASE_URL}/post`);
        const postsData = await postsResponse.json();
        const sortedPosts = postsData.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);

        const contactsResponse = await fetch(`${API_BASE_URL}/contact`);
        const contactsData = await contactsResponse.json();
        setContacts(contactsData);
      } catch (error) {
        console.error('Error loading posts or contacts:', error);
      }
    };

    fetchPostsAndContacts();
  }, []);

  useEffect(() => {
    const fetchCommentsForPosts = async () => {
      try {
        const fetchComments = (postId) =>
          fetch(`${API_BASE_URL}/post/${postId}/comment`).then((response) => response.json());

        const allComments = await Promise.all(posts.map((post) => fetchComments(post.id)));

        setComments(allComments.flat());
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    };

    fetchCommentsForPosts();
  }, [posts]);

  const handlePostSubmit = () => {
    const newPostData = {
      title: 'New Post',
      content: newPostContent,
      contactId: 1,
    };

    fetch(`${API_BASE_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostData),
    })
      .then((response) => response.json())
      .then((newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        setNewPostContent('');
      })
      .catch((error) => console.error('Error submitting post:', error));
  };

  const handleCommentSubmit = (postId, event) => {
    event.preventDefault();

    const commentData = {
      content: newCommentContent[postId],
      contactId: 1,
      postId: postId,
    };

    fetch(`${API_BASE_URL}/post/${postId}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server says ' + response.status);
        }
        return response.json();
      })
      .then((newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
        setNewCommentContent((prev) => ({ ...prev, [postId]: '' }));
      })
      .catch((error) => console.error('Error submitting comment:', error));
  };

  return (
    <div className="main-content">
      <div className="post-box">
        <input
          className="post-input"
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="What’s on your mind?"
        />
        <button className="main-post-button" onClick={handlePostSubmit}>
          Post
        </button>
      </div>

      {posts.map((post) => {
        const contact = contacts.find((c) => c.id === post.contactId);
        const initials = contact ? `${contact.firstName[0]}${contact.lastName[0]}` : '';
        const postComments = comments.filter((comment) => comment.postId === post.id);

        return (
          <div key={post.id} className="each-post">
            <ul className="comment-ul">
              <li className="comment-li">
                <div className="title-container">
                  <div className="initials">{initials}</div>
                  <div className="comment-title">{contact ? `${contact.firstName} ${contact.lastName}` : ''}</div>
                </div>
                <Link to={`/comments/${post.id}`}>
                  <div className="comment-link">{post.title}</div>
                </Link>
                <div className="main-comment">{post.content}</div>
                <hr className="hr"></hr>
                <div className="form">
                  <form onSubmit={(e) => handleCommentSubmit(post.id, e)}>
                    <div className="comments">
                      {postComments.map((comment, index) => {
                        const commenterContact = contacts.find((c) => c.id === comment.contactId);
                        const commenterInitials =
                          commenterContact ? `${commenterContact.firstName[0]}${commenterContact.lastName[0]}` : 'A';

                        return (
                          <div className="comment-section" key={`${comment.id}-${index}`}>
                            <div className="comment-initials">{commenterInitials}</div>
                            <div className="comment-body">
                              <div className="commenter-name">
                                {commenterContact ? `${commenterContact.firstName} ${commenterContact.lastName}` : 'Anonymous'}
                              </div>
                              <div className="comment-content">{comment.content}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="comment-input-container">
                      <input
                        className="input"
                        type="text"
                        value={newCommentContent[post.id] || ''}
                        onChange={(e) =>
                          setNewCommentContent({
                            ...newCommentContent,
                            [post.id]: e.target.value,
                          })
                        }
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
