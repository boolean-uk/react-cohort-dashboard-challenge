import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorCircle from "./AuthorCircle";
import CommentList from "./CommentList";
import NewCommentForm from "./NewCommentForm";
import { fetchContactById } from "../API/api";

function PostItem({ post }) {
  const [showNewCommentForm, setShowNewCommentForm] = useState(false);
  const [contact, setContact] = useState(null);

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
  }, [post.contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-item">
      <AuthorCircle
        style={{
          backgroundColor: contact ? contact.favouriteColour : "#ff0000",
        }}
        initials={
          contact ? getInitials(contact.firstName, contact.lastName) : ""
        }
      />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <h3>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
      <CommentList postId={post.id} contact={contact} post={post} />
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
