import { useEffect, useState } from "react";

import CommentBody from "./components/CommentBody";

import UserIcon from "@components/UserIcon";

import api from "@utilities/api";
import { commentProps } from "@utilities/propTypeDefs";

import "./Comment.css";

export default function Comment({ comment, setLoadComments }) {
  const [contact, setContact] = useState(null);

  const [itemHover, setItemHover] = useState(false);
  const [showItemMenu, setShowItemMenu] = useState(false);

  const [editableItem, setEditableItem] = useState(false);

  const { contactId } = comment;

  useEffect(() => {
    async function getContact() {
      const fetch = await api.contact.get(contactId);
      setContact(await fetch);
    }
    getContact();
  }, [contactId]);

  function handleHoverEnter() {
    setItemHover(true);
  }

  function handleHoverLeave() {
    setItemHover(false);
  }

  function handleDeleteClick() {
    api.post.comment
      .delete(comment.postId, comment.id)
      .then(() => setLoadComments(true));
  }

  return (
    <div
      className={`post-comment-item relative flex gap-4 ${
        showItemMenu && "z-10"
      }`}
    >
      <UserIcon contact={contact} />
      <CommentBody
        contact={contact}
        comment={comment}
        handleHoverEnter={handleHoverEnter}
        handleHoverLeave={handleHoverLeave}
        handleDeleteClick={handleDeleteClick}
        editableItem={editableItem}
        itemHover={itemHover}
        itemId={comment.id}
        showItemMenu={showItemMenu}
        setEditableItem={setEditableItem}
        setLoadComments={setLoadComments}
        setShowItemMenu={setShowItemMenu}
      />
    </div>
  );
}

Comment.propTypes = { comment: commentProps };
