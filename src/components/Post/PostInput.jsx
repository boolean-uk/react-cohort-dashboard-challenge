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

  const handleClick = async (e) => {
    e.preventDefault();
    let post = { content: content, title: "", contactId: 1 };
    if (content.length === 0) return;
    post = await createPostAsync(post);
    onClick(post);
    setContent("");
  };

  return (
    <div className="card">
      <form className="post-input-form" onSubmit={(e) => handleClick(e)}>
        <ProfileCircle
          color={currentUser.favouriteColour}
          fullname={`${currentUser.firstName} ${currentUser.lastName}`}
        />
        <input
          className="cm-input"
          onChange={(e) => setContent(e.target.value)}
          placeholder={`${isLoading ? "Loading..." : "What's on your mind?"}`}
          disabled={isLoading}
          value={content || ""}
        />
        <button className="cm-button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
