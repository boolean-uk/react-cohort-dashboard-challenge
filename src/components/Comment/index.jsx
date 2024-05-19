/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "../../App.jsx";
import "./Comment.css";
import Avatar from "../Avatar";

export default function Comment({ comment }) {
  const [author, setAuthor] = useState({
    firstName: " ",
    lastName: " ",
  });
  const { API_CONTACTS } = useContext(MyContext);

  async function fetchAuthor(contactId) {
    fetch(`${API_CONTACTS}/${contactId}`, {})
      .then(async (response) => {
        let contact = await response.json();
        setAuthor(contact);
      })
      .catch((error) => {});
  }
  useEffect(() => {
    fetchAuthor(comment.contactId);
  }, [comment]);
  return (
    <>
      <div className="comment-container">
        <Link to="/profile" state={{ user: author }}>
          <div className="comment-author-avatar">
            <Avatar
              nameInitials={author.firstName[0] + "" + author.lastName[0]}
            />
          </div>
        </Link>
        <div className="comment-content">
          <p className="comment-author-name">
            {author.firstName + " " + author.lastName}
          </p>
          <p>{comment.content}</p>
        </div>
      </div>
    </>
  );
}
