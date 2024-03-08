import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Comment from "../Comment/Comment";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function SinglePost() {
  const { id } = useParams();
  const [authorId, setAuthorId] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [favouriteColor, setFavouriteColor] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/post/${id}`);
        const postData = response.data;
        const authorResponse = await axios.get(
          `${BASE_URL}/contact/${postData.contactId}`
        );
        const authorName = `${authorResponse.data.firstName} ${authorResponse.data.lastName}`;
        setAuthorId(authorResponse.data.id);
        const updatedPost = { ...postData, author: authorName };
        setFavouriteColor(authorResponse.data.favouriteColour);
        setPost(updatedPost);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/post/${id}/comment`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${BASE_URL}/post/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  return (
    <div className="post-container">
      <div className="author-info">
        <Link to={`/profile/${authorId}`} style={{ textDecoration: "none" }}>
          <div
            className="author-initials"
            style={{ background: favouriteColor }}
          >
            {getInitials(post.author)}
          </div>
        </Link>
        <Link to={`/profile/${authorId}`} style={{ textDecoration: "none" }}>
          <strong>{post.author}</strong>
        </Link>
      </div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <Link to={`/post/${post.id}/update`} style={{ textDecoration: "none" }}>
          <button>Update Post</button>
        </Link>
        <button onClick={handleDeletePost}>Delete Post</button>
      </div>
      <div className="post-bar"></div>
      <h4>Comments:</h4>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default SinglePost;
