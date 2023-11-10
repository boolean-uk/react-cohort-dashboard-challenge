import { useEffect, useState } from "react";

import CommentBody from "./components/CommentBody"
import UserIcon from "../../../../../../../UserIcon";

import api from "../../../../../../../../utilities/api";

export default function Comment({ comment }) {
  const [contact, setContact] = useState(null);
  const { contactId } = comment;

  console.log("comment", comment);

  useEffect(() => {
    async function getContact() {
      const fetch = await api.contact.get(contactId);
      setContact(await fetch);
    }
    getContact();
  }, [contactId]);

  return (
    <div className="post-comment-item">
      <UserIcon contact={contact}/>
      <CommentBody contact={contact} comment={comment}/>
    </div>
  );
}
