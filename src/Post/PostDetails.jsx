import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchContactById, fetchPostById } from "../API/api";
import CommentList from "./CommentList";
import AuthorCircle from "./AuthorCircle";
import NewCommentForm from "./NewCommentForm";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [contact, setContact] = useState(null);
    const [showNewCommentForm, setShowNewCommentForm] = useState(false);


  useEffect(() => {
    const fetchAndSetPost = async () => {
      try {
        const fetchedPost = await fetchPostById(postId);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchAndSetPost();
  }, [postId]);

useEffect(() => {
  if (post) {
    const fetchData = async () => {
      try {
        const fetchedContact = await fetchContactById(post.contactId);
        setContact(fetchedContact);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchData();
  }
}, [post]);

  if (!post) return <p>Loading post details...</p>;

  const getInitials = (firstName, lastName) => {
    return `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase();
  };

  return (
    <div className="post-item">
      <Link to={`/user/${post.contactId}`} className="profile-icon">
        {/* User's profile icon */}
        <AuthorCircle
          style={{
            backgroundColor: contact ? contact.favouriteColour : "#ff0000",
          }}
          initials={
            contact ? getInitials(contact.firstName, contact.lastName) : ""
          }
        />
      </Link>
      <h1 style={{ color: "#64648c" }}>{post.title}</h1>
      <p>{post.content}</p>
      <CommentList postId={post.id} post={post} />
      {showNewCommentForm && <NewCommentForm postId={post.id} />}
      <button onClick={() => setShowNewCommentForm(!showNewCommentForm)}>
        {showNewCommentForm ? "Cancel" : "Add Comment"}
      </button>
    </div>
  );
}

export default PostDetails;
