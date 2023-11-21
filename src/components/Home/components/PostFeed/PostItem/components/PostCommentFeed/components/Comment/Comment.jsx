import { useEffect, useState } from "react";

import CommentBody from "./components/CommentBody";

import UserIcon from "@components/UserIcon";

import api from "@utilities/api";
import { commentProps, funcProp } from "@utilities/propTypeDefs";
import {
  editCommentInitialForm,
  editCommentFormSetup,
} from "@utilities/formTemplates";

import "./Comment.css";
import EditItemForm from "@components/ItemOptions/EditItemForm";

export default function Comment({ comment, setLoadComments }) {
  const [contact, setContact] = useState(null);

  const [itemHover, setItemHover] = useState(false);
  const [showItemMenu, setShowItemMenu] = useState(false);

  const [editableItem, setEditableItem] = useState(false);

  const [formData, setFormData] = useState(editCommentInitialForm);
  const [submitted, setSubmitted] = useState(null);

  const { contactId } = comment;

  useEffect(() => {
    async function getContact() {
      const fetch = await api.contact.get(contactId);
      setContact(fetch);
    }
    getContact();
  }, [contactId]);

  useEffect(() => {
    if (!formData.id) {
      setFormData({ ...formData, ...comment });
    }
  }, [comment, formData]);

  function handleHoverEnter() {
    setItemHover(true);
  }

  function handleHoverLeave() {
    setItemHover(false);
  }

  function putRequest(payload) {
    return api.post.comment.put(payload.postId, payload.id, payload);
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
      {editableItem ? (
        <EditItemForm
          formSetup={editCommentFormSetup}
          formData={formData}
          putRequest={putRequest}
          setEditableItem={setEditableItem}
          setFormData={setFormData}
          setLoadItem={setLoadComments}
          setShowItemMenu={setShowItemMenu}
          setSubmitted={setSubmitted}
          submitted={submitted}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

Comment.propTypes = {
  setLoadComments: funcProp,
  comment: commentProps,
};
