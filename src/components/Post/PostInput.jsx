import "@styles/Post.css";
import "@styles/PostInput.css";
import ProfileCircle from "../ProfileCircle";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { createPost } from "@services/PostService";
import { UserContext } from "@routes/Root";

export default function PostInput({ onClick }) {
  const currentUser = useContext(UserContext);
  const [content, setContent] = useState("");
  const { mutateAsync: createPostAsync, isLoading } = useMutation(
    "createPost",
    createPost
  );

  const handleClick = async () => {
    let post = { content: content, title: "", contactId: 1 };
    if (content.length === 0) return;
    post = await createPostAsync(post);
    onClick(post);
    setContent("");
  };

  return (
    <div className="card">
      <div>
        <ProfileCircle
          color={currentUser.favouriteColour}
          fullname={`${currentUser.firstName} ${currentUser.lastName}`}
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          placeholder={`${isLoading ? "Loading..." : "What's on your mind?"}`}
          disabled={isLoading}
          value={content || ""}
        />
        <button onClick={handleClick}>Post</button>
      </div>
    </div>
  );
}
