import { useQuery } from "react-query";
import ProfileCircle from "../ProfileCircle";
import "@styles/PostComment.css";
import { getContact } from "@services/PostService";

export default function PostComment({ content, contactId }) {
  const { data: user } = useQuery(
    ["getContact", contactId],
    () => getContact(contactId),
    { retry: false }
  );

  const fullname = user
    ? `${user.firstName} ${user.lastName}`
    : "Anonymous User";

  return (
    <div className="post-comment">
      <ProfileCircle
        color={"var(--secondary"}
        fullname={fullname}
        contactId={contactId}
      />
      <div className="post-comment-content">
        <h3>{fullname}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
