import { useContext, useState } from "react";
import ProfileCircle from "../ProfileCircle";
import { useMutation } from "react-query";
import { createComment } from "@services/PostService";
import { UserContext } from "@routes/Root";

export default function CommentField({ postId, onClick }) {
  const currentUser = useContext(UserContext);
  const [content, setContent] = useState("");
  const { mutateAsync: createCommentAsync } = useMutation(
    "createComment",
    createComment
  );

  const handleKeyUp = async (e) => {
    if (e.key !== "Enter" || content.length === 0) return;
    let comment = { postId: postId, content: content, contactId: 1 };
    comment = await createCommentAsync(comment);
    console.log(comment);
    onClick(comment);
    setContent("");
  };

  return (
    <div>
      <ProfileCircle
        contactId={currentUser.id}
        color={currentUser.favouriteColour}
        fullname={`${currentUser.firstName} ${currentUser.lastName}`}
      />
      <input
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
    </div>
  );
}
