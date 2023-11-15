import { useEffect, useState } from "react";

import CommentBody from "./components/CommentBody";

import UserIcon from "@components/UserIcon";

import api from "@utilities/api";
import { commentProps } from "@utilities/propTypeDefs";

import "./Comment.css";
import ItemOptions from "@components/ItemOptions/ItemOptions";

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

  return (
    <div className="post-comment-item flex gap-4">
      <UserIcon contact={contact} />
      <CommentBody contact={contact} comment={comment} />
      <ItemOptions
        editableItem={editableItem}
        itemHover={itemHover}
        itemId={comment.id}
        showItemMenu={showItemMenu}
        setEditableItem={setEditableItem}
        setLoadItems={setLoadComments}
        setShowItemMenu={setShowItemMenu}
      />
    </div>
  );
}

Comment.propTypes = { comment: commentProps };
