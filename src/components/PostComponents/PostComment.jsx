import { useQuery } from "react-query";
import ProfileCircle from "../ProfileComponents/ProfileCircle";
import "../../styles/PostComment.css";
import { getContact } from "../../services/PostService";

export default function PostComment({ content, contactId, /*onDelete*/ }) {
  /*const handleDelete = async () => {
    try {
      // Call the onDelete function with the comment ID
      await onDelete();
    } catch (error) {
      console.error("Error deleting comment:", error);
      // Optionally, you can show an error message to the user
    }
  };*/

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
        color={user ? user.favouriteColour : "var(--secondary)"}
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
