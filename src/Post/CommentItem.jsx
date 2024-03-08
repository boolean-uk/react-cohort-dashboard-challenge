import AuthorCircle from "./AuthorCircle";
import { useState, useEffect } from "react";
import { fetchContactById } from "../API/api";
import { Link, useNavigate } from "react-router-dom";

const CommentItem = ({ comment }) => {
  const [contact, setContact] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const fetchedContact = await fetchContactById(comment.contactId);
        setContact(fetchedContact);
      } catch (error) {
        console.error(
          `Error fetching contact for comment ${comment.id}:`,
          error
        );
      }
    };

    fetchContact();
  }, [comment.contactId]);

const getInitials = (firstName, lastName) => {
  const firstInitial = firstName ? firstName[0].toUpperCase() : "";
  const lastInitial = lastName ? lastName[0].toUpperCase() : "";
  return `${firstInitial}${lastInitial}`;
};

  return (
    <div className="comment-item">
      <div className="comment-box">
        <div className="comment-profile">
          <Link to={`/user/${comment.contactId}`} className="profile-icon">
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
          <h4
            className="profile-name"
            onClick={() => navigate(`/user/${comment.contactId}`)}
          >
            {contact ? `${contact.firstName} ${contact.lastName}` : "Unknown"}{" "}
            <span className="comment-span">has commented:</span>
          </h4>
        </div>
        <div className="comment-content">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
