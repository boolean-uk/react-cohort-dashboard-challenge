import { useContext, useState } from "react";
import ProfileCircle from "../ProfileComponents/ProfileCircle";
import { useMutation } from "react-query";
import { createComment } from "../../services/PostService";
import { UserContext } from "../../routes/root";
import "../../styles/PostComment.css";

export default function CommentField({ postId, onClick }) {
  const currentUser = useContext(UserContext);
  const [content, setContent] = useState("");
  const { mutateAsync: createCommentAsync } = useMutation(
    "createComment",
    createComment
  );

  const handleKeyUp = async (e) => {
    if (e.key !== "Enter" || content.length === 0) return;
    let comment = {
      postId: parseInt(postId),
      content: content,
      contactId: currentUser.id,
    }
    console.log(comment);
    comment = await createCommentAsync(comment);
    onClick(comment);
    setContent("");
  }; // function for pressing enter

  const handleButtonClick = async () => {
    if (content.length === 0) return;
    let comment = {
      postId: parseInt(postId),
      content: content,
      contactId: currentUser.id,
    };
    console.log(comment);
    comment = await createCommentAsync(comment);
    onClick(comment);
    setContent("");
  }; // function for comment button

  return (
    <div>
      <ProfileCircle
        contactId={currentUser.id}
        color={currentUser.favouriteColour}
        fullname={`${currentUser.firstName} ${currentUser.lastName}`}
      />
      <input
        className="cm-input"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="40"
          fill="currentColor"
          className="bi bi-chat-text-fill"
          viewBox="0 0 16 16"
          onClick={handleButtonClick}
        >
          <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
        </svg>
    </div>
  );
}