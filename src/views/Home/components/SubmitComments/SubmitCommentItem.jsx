import React, { useEffect, useState } from "react";
import ProfileIcon from "../ProfileIcon";

export default function SubmitCommentItem({ comment, API_BASE_URL }) {
  const [commentAuthor, setCommentAuthor] = useState(null);

  useEffect(() => {
    const fetchCommentAuthor = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/Hayor4real/contact/${comment.contactId}`
        );
        const data = await response.json();
        setCommentAuthor(data);
      } catch (error) {
        console.error("Error fetching comment author:", error);
      }
    };

    fetchCommentAuthor();
  }, [API_BASE_URL, comment.contactId]);

  return (
    <li className="comment__item">
      <ProfileIcon contact={commentAuthor} />
      <div className="comment__content">
        <h4>
          {`${commentAuthor?.firstName || "Loading..."} ${
            commentAuthor?.lastName || ""
          }`}
        </h4>
        <p>{comment.content}</p>
      </div>
    </li>
  );
}
