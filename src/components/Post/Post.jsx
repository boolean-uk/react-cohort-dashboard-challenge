import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import NewCommentForm from "../Comment/NewCommentForm";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function Post({ post }) {
  const [authorName, setAuthorName] = useState("");
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [favouriteColour, setFavouriteColour] = useState("");

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/post/${post.id}/comment`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [post.id]);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/contact/${post.contactId}`
        );
        const { firstName, lastName } = response.data;
        setAuthorName(`${firstName} ${lastName}`);
        setFavouriteColour(response.data.favouriteColour);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
    fetchComments();
  }, [post.contactId, post.id, fetchComments]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const lastThreeComments = comments.slice(-3);
  const visibleComments = showAllComments ? comments : lastThreeComments;

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  const handleDeleteComment = (deletedCommentId) => {
    setComments(comments.filter((comment) => comment.id !== deletedCommentId));
  };

  return (
    <div className="post-container">
      <div className="author-info">
        <Link
          to={`/profile/${post.contactId}`}
          style={{ textDecoration: "none" }}
        >
          <div
            className="author-initials"
            style={{ backgroundColor: favouriteColour }}
          >
            {getInitials(authorName)}
          </div>
        </Link>
        <Link
          to={`/profile/${post.contactId}`}
          style={{ textDecoration: "none" }}
        >
          <strong>{authorName}</strong>
        </Link>
      </div>
      <h3>
        <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
          {post.title}
        </Link>
      </h3>
      <p>{post.content}</p>
      <div className="post-bar"></div>
      <h4>Comments:</h4>
      {comments.length > 3 && (
        <button
          onClick={() => setShowAllComments(!showAllComments)}
          style={{ padding: 10, marginBottom: 15 }}
        >
          {showAllComments ? "Hide previous comments" : "See previous comments"}
        </button>
      )}
      {visibleComments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDeleteComment={handleDeleteComment}
          fetchComments={fetchComments}
        />
      ))}
      <NewCommentForm postId={post.id} onAddComment={handleAddComment} />
    </div>
  );
}

export default Post;
