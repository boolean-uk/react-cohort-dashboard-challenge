import { useState } from "react";
import ProfileCircle from "../ProfileCircle";
import { useMutation } from "react-query";
import { createComment } from "@services/PostService";

export default function CommentField({ postId, onClick }) {
  const [content, setContent] = useState("");
  const { mutateAsync: createCommentAsync } = useMutation(
    "createComment",
    createComment
  );

  const handleKeyUp = async (e) => {
    if (e.key !== "Enter" || content.length === 0) return;
    let comment = { postId: postId, content: content, contactId: 42 };
    comment = await createCommentAsync(comment);
    console.log(comment);
    onClick(comment);
  };

  return (
    <div>
      <ProfileCircle color={"var(--secondary)"} fullname={"Test User"} />
      <input
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
    </div>
  );
}
