import AuthorCircle from "./AuthorCircle";
import { useState, useEffect } from "react";
import { fetchContactById } from "../API/api";

const CommentItem = ({ comment }) => {
  const [contact, setContact] = useState(null);

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
      <AuthorCircle
        style={{
          backgroundColor: contact ? contact.favouriteColour : "#ff0000",
        }}
        initials={
          contact ? getInitials(contact.firstName, contact.lastName) : ""
        }
      />
      <h4>
        {contact ? `${contact.firstName} ${contact.lastName}` : "Unknown"}
      </h4>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentItem;
