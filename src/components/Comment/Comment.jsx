import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

function Comment({ comment, fetchComments }) {
    const [authorInitials, setAuthorInitials] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [favouriteColour, setFavouriteColour] = useState("");
    const [content, setContent] = useState(comment.content);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
      const fetchAuthorData = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/contact/${comment.contactId}`
          );
          const { firstName, lastName, favouriteColour } = response.data;
          setAuthorName(`${firstName} ${lastName}`);
          const initials = getInitials(firstName, lastName);
          setAuthorInitials(initials);
          setFavouriteColour(favouriteColour);
        } catch (error) {
          console.error("Error fetching author data:", error);
        }
      };

      fetchAuthorData();
    }, [comment.contactId]);

    const getInitials = (firstName, lastName) => {
      const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
      const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
      return firstInitial + lastInitial;
    };

    const handleUpdate = async () => {
      try {
        await axios.put(
          `${BASE_URL}/post/${comment.postId}/comment/${comment.id}`,
          {
            postId: comment.postId,
            content: content,
            contactId: comment.contactId,
          }
        );
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    };

    const handleDelete = async () => {
      try {
        await axios.delete(`${BASE_URL}/post/${comment.postId}/comment/${comment.id}`);
        fetchComments();
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    };

    return (
      <div className="comment">
        <Link
          to={`/profile/${comment.contactId}`}
          style={{ textDecoration: "none" }}
        >
          <div
            className="author-initials"
            style={{ backgroundColor: favouriteColour }}
          >
            {authorInitials}
          </div>
        </Link>
        <div className="comment-content">
          <p>
            <Link
              to={`/profile/${comment.contactId}`}
              style={{ textDecoration: "none" }}
            >
              <strong>{authorName}</strong>
            </Link>{" "}
            <br />
            <br />
            {isEditing ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            ) : (
              <span>{content}</span>
            )}
          </p>
          <div>
            {isEditing ? (
              <>
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)}>Update</button>
            )}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
}

export default Comment;
