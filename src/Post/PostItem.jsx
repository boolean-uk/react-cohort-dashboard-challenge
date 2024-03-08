import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthorCircle from "./AuthorCircle";
import CommentList from "./CommentList";
import NewCommentForm from "./NewCommentForm";
import { fetchContactById } from "../API/api";

function PostItem({ post }) {
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);
  const [contact, setContact] = useState(null);

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedContact = await fetchContactById(post.contactId);
        setContact(fetchedContact);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchData();
  }, [post]);

  if (!contact) {
    return <div>Loading...</div>;
  }

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
        <h2 className="profile-name" onClick={() => navigate(`/user/${post.contactId}`)}>
          {contact.firstName} {contact.lastName}
        </h2>
      </div>
      <div className="post-details">
        <h4
          className="post-title"
          onClick={() => navigate(`/post/${post.id}`)}
        >
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

const getInitials = (firstName, lastName) => {
  return `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase();
};

export default PostItem;
