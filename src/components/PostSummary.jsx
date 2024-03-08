import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function PostSummary({ post }) {
  const { setPosts, contacts, getInitials } = useContext(AppContext);
  const { postId } = useParams();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const navigate = useNavigate();
  const [updatedPost, setUpdatedPost] = useState({
    title: post.title,
    content: post.content,
    contactId: post.contactId,
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentFormSubmit = async (postId, e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
            content: newComment,
            contactId: 1,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);
      // Clear the form fields
      setNewComment("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleCommentInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleDeletePost = (postId) => {
    fetch(`https://boolean-api-server.fly.dev/pialoana/post/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        // Contact successfully deleted, update the contacts state by removing the deleted contact
        setPosts((prevPosts) =>
          prevPosts.filter((p) => p.id !== parseInt(postId))
        );
      } else {
        throw new Error("Failed to delete contact");
      }
    });

    navigate("/");
  };

  const handleUpdatePost = async (postId) => {
    try {
      // Ensure postId is valid before making the PUT request
      if (!postId) {
        console.error("Invalid postId:", postId);
        return;
      }

      const response = await fetch(
        `https://boolean-api-server.fly.dev/pialoana/post/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      const data = await response.json();
      // Update the post in the state
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === data.id ? data : p))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const toggleUpdateFields = () => {
    setShowUpdateFields(!showUpdateFields);
  };

  return (
    <div key={post.id} className="post">
      <div className="author-info">
        <div className="post-header">
          <div className="author-circle">
            <Link to={`/contact/${post.contactId}`}>
              {getInitials(
                contacts[post.contactId]?.firstName,
                contacts[post.contactId]?.lastName
              )}
            </Link>
          </div>
          <div className="comment-author-circle">
            <Link to={"/contact/1"}>
              {getInitials(contacts[1]?.firstName, contacts[1]?.lastName)}
            </Link>
          </div>
        </div>
        <div>
          <h3 className="post-author">
            <Link to={`/contact/${post.contactId}`}>
              {contacts[post.contactId]?.firstName +
                " " +
                contacts[post.contactId]?.lastName}
            </Link>
          </h3>

          <Link to={`/post/${post.id}`} className="post-title">
            {post.title}
          </Link>
          <p>{post.content}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          <button onClick={toggleUpdateFields}>Update</button>
          {showUpdateFields && (
            <>
              <input
                type="text"
                name="title"
                value={updatedPost.title}
                onChange={handleInputChange}
              />
              <textarea
                name="content"
                value={updatedPost.content}
                onChange={handleInputChange}
              />
              <button onClick={() => handleUpdatePost(post.id)}>Save</button>
            </>
          )}
          <hr />
          <form
            className="post-comment"
            onSubmit={(e) => handleCommentFormSubmit(post.id, e)}
          >
            <label htmlFor="contactId"></label>
            <input
              type="text"
              id="postId"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentInputChange}
            />
            <button type="submit">comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostSummary;
