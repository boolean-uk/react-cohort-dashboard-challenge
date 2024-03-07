import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, getContacts, createPost, createComment, deletePost, getCommentById } from "../api";

import '../styles/Feed.css'

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState("");
  const commentIdSet = new Set();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, contactsResponse] = await Promise.all([
          getAllPosts(),
          getContacts(),
        ]);
        setPostData(postsResponse.reverse());
        setContactData(contactsResponse);
  
        // Fetch comments for each post
        const commentsPromises = postsResponse.map(post => getCommentById(post.id));
        const commentsResponses = await Promise.all(commentsPromises);
        const commentsData = commentsResponses.flat(); // Flatten the array of arrays
        setCommentData(commentsData);
        
        commentIdSet.clear();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  


  const handlePostSubmit = async () => {
    try {
      const newPost = await createPost("New post", newPostContent, 1);
      const modifiedPost = { id: newPost.id, ...newPost }; 
      setPostData((prevData) => [modifiedPost, ...prevData]); 
      setNewPostContent("");
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    try {
      if (!postId) {
        console.error("postId is required for submitting a comment");
        return;
      }

      const newComment = await createComment(postId, newCommentContent, 1);
      setCommentData((prevData) => [...prevData, newComment]);
      setNewCommentContent("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete the post?")) {
      deletePost(postId).then(() => {
        const foundPost = postData.filter(
          (post) => post.id !== postId
        );
        setPostData(foundPost);
      });
    }
  };

  return (
    <ul className="feed-ul">
      <input
        type="text"
        placeholder="What's on your mind?"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      ></input>
      <button
        type="button"
        className="submit-button"
        onClick={handlePostSubmit}
      >
        Post
        <i className="fa-solid fa-paper-plane"></i>
      </button>
      {postData.map((post) => {
        const contact = contactData.find(
          (contact) => contact.id === post.contactId
        );
        if (!contact) {
          console.error(`Contact not found for post with id ${post.id}`);
          return null;
        }

        let initials = `${contact.firstName[0]}${contact.lastName[0]}`;

        const filteredComments = commentData
          .filter((comment) => comment.postId === post.id)
          .filter((comment) => !commentIdSet.has(comment.id));

        return (
          <li key={post.id} className="post">
            <div className="post-header">
              <p className="initials">{initials}</p>
              <div className="author-and-title">
                <h3 className="full-name">
                  {contact.firstName} {contact.lastName}
                </h3>
                <Link to={`/post/${post.id}`}>
                  <h5>{post.title}</h5>
                </Link>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <hr></hr>
            <ul>
              {filteredComments.map((comment, index) => {
                const commenterContact = contactData.find(
                  (contact) => contact.id === comment.contactId
                );

                let commenterInitials = `${commenterContact.firstName[0]}${commenterContact.lastName[0]}`;

                const uniqueKey = `${post.id}-${index}`;
                return (
                  <li className="comment-section" key={uniqueKey}>
                    <p className="commenter-initials">{commenterInitials}</p>
                    <div className="comment-name-and-content">
                      <p className="commenter-name">
                        {commenterContact.firstName} {commenterContact.lastName}
                      </p>
                      <p>{comment.content}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <hr></hr>
            <input
              type="text"
              placeholder="Add comment"
              value={newCommentContent}
              onChange={(e) => setNewCommentContent(e.target.value)}
            ></input>
            <button
              type="button"
              className="submit-button"
              onClick={() => handleCommentSubmit(post.id)}
            >
              Comment
              <i className="fa-solid fa-comment-dots"></i>
            </button>
            <button
              type="button"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
