import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchContactById, fetchPostById } from "../API/api";
import CommentList from "./CommentList";
import AuthorCircle from "./AuthorCircle";
import NewCommentForm from "./NewCommentForm";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [contact, setContact] = useState(null);
    const [showNewCommentForm, setShowNewCommentForm] = useState(false);

    const navigate = useNavigate()


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

  if (!post || !contact) return <p>Loading post details...</p>;

  const getInitials = (firstName, lastName) => {
    return `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase();
  };

  return (
    <div className="post-item">
      <div className="post-profile">
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
        <h2
          className="profile-name"
          onClick={() => navigate(`/user/${post.contactId}`)}
        >
          {contact.firstName} {contact.lastName}
        </h2>
      </div>
      <div className="post-details">
        <h4 className="post-title" onClick={() => navigate(`/post/${post.id}`)}>
          {post.title}
        </h4>
        <p className="post-content">{post.content}</p>
      </div>
      <CommentList postId={post.id} post={post} />
      {showNewCommentForm && <NewCommentForm postId={post.id} />}
      <button onClick={() => setShowNewCommentForm(!showNewCommentForm)}>
        {showNewCommentForm ? "Cancel" : "Add Comment"}
      </button>
    </div>
  );
}

export default PostDetails;
