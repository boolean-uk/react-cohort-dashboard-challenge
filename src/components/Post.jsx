import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts, getContacts, getCommentById, createComment } from "../api";

import '../styles/Post.css'

const Post = () => {
  const [post, setPost] = useState(null);
  const [contactData, setContactData] = useState([]);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [newCommentContent, setNewCommentContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postData, contacts, commentsData] = await Promise.all([
          getAllPosts(postId),
          getContacts(),
          getCommentById(postId),
        ]);
        setPost(postData);
        setContactData(contacts);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [postId]);

  const handleCommentSubmit = async (postId) => {
    try {
      if (!postId) {
        console.error("postId is required for submitting a comment");
        return;
      }

      const newComment = await createComment(postId, newCommentContent, 1);
      setComments((prevData) => [...prevData, newComment]);
      setNewCommentContent("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (!post || !post.contactId) {
    return <div>Loading...</div>;
  }

  const contact = contactData.find((contact) => contact.id === post.contactId);
  if (!contact) {
    return <div>Error: Invalid contact data</div>;
  }
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

  return (
    <ul>
      <li className="post">
        <div className="post-header">
          <p className="initials">{initials}</p>
          <div className="author-and-title">
            <h3 className="full-name">
              {contact.firstName} {contact.lastName}
            </h3>
            <h5>{post.title}</h5>
          </div>
        </div>
        <p className="post-content">{post.content}</p>
        <hr></hr>

        <ul>
          {comments.map((comment) => {
            const commentAuthor = contactData.find(
              (contact) => contact.id === comment.contactId
            );
            return (
              <li className="comment-section" key={comment.id}>
                <p className="commenter-initials">{`${commentAuthor.firstName[0]}${commentAuthor.lastName[0]}`}</p>
                <div className="comment-name-and-content">
                  <p className="commenter-name">{`${commentAuthor.firstName} ${commentAuthor.lastName}`}</p>
                  <p>{comment.content}</p>
                </div>
              </li>
            );
          })}
          <hr></hr>
          <input
            type="text"
            placeholder="Add comment"
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}
          ></input>
          <button type="button" onClick={() => handleCommentSubmit(post.id)}>
            Submit
          </button>
        </ul>
      </li>
    </ul>
  );
};
export default Post;
