import { useEffect, useState } from "react";

import CommentBody from "./components/CommentBody";
import UserIcon from "../../../../../../../UserIcon";

import api from "../../../../../../../../utilities/api";

import "./Comment.css";

export default function Comment({ comment }) {
  const [contact, setContact] = useState(null);
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
    </div>
  );
}
