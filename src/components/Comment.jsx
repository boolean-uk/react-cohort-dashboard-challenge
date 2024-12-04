import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../App";

// components
import Avatar from "./Avatar";
import EditComment from "./EditComment";

// icons
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";

export default function Comment(props) {
  const [commenter, setCommenter] = useState();
  const [showEditBox, setShowEditBox] = useState(false);

  const { comment, contacts, comments, setComments, post } = props;
  const fetchUrl = `${baseUrl}/post/${post?.id}/comment/${comment?.id}`;

  useEffect(() => {
    contacts.find((contact) => {
      if (contact.id == comment.contactId) {
        setCommenter(contact);
      }
    });
  });

  function handleDeleteClick() {
    const isConfirmed = confirm(
      `⛔ Are you sure you want to delete this comment❓`
    );

    if (isConfirmed) {
      fetch(fetchUrl, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && !data.error) {
            setComments(comments.filter((comment) => comment.id !== data.id));
          }
        })
        .catch((error) => console.error(error));
    }
  }

  function handleEditClick() {
    setShowEditBox(true);
  }

  return (
    <section className="comment">
      <Link to={`/profile/${commenter?.id}`}>
        <Avatar>{commenter}</Avatar>
      </Link>
      <div className="comment-details">
        <Link to={`/profile/${commenter?.id}`}>
          <h3 className="commenter-name">
            {commenter && `${commenter.firstName} ${commenter.lastName}`}
          </h3>
        </Link>

        <article className="comment-content">
          <p>{comment?.content}</p>
        </article>

        <div className="comment-edit-btns-div">
          {commenter?.id == 1 && (
            <button
              title="Delete Post"
              className="delete-btn"
              onClick={handleDeleteClick}
            >
              <img src={deleteIcon} alt="trash icon" id="small-trash-pen" />
            </button>
          )}
          {commenter?.id == 1 && (
            <button
              title="Edit Post"
              className="edit-btn"
              onClick={handleEditClick}
            >
              <img src={editIcon} alt="pen icon" id="small-trash-pen" />
            </button>
          )}
        </div>
        {showEditBox && (
          <EditComment
            setShowEditBox={setShowEditBox}
            post={post}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
        )}
      </div>
    </section>
  );
}
