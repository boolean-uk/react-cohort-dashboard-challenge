import { useContext } from "react";
import "./AddComment.css";
import MainPropic from "./MainPropic";
import { NewCommentContext } from "./Post";

export default function AddComment({ postId }) {
  const [isNewComment, setNewComment] = useContext(NewCommentContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const commentContent = e.target.commentContent.value;

    if (commentContent == "") {
      alert("Comment field can not be empty");
    } else {
      await fetch(
        `https://boolean-uk-api-server.fly.dev/AtikoSpeed/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            postId: postId,
            content: commentContent,
            contactId: 0,
          }),
        }
      ).then(() => {
        setNewComment(!isNewComment);
        e.target.commentContent.value = "";
      });
    }
  }

  return (
    <div className="add-comment">
      <MainPropic />
      <form
        method="post"
        id="create-comment"
        className="comment-field"
        onSubmit={handleSubmit}
      >
        <input
          name="commentContent"
          type="text"
          placeholder="Add a comment..."
        />
        <button type="submit" className="comment-button-container">
          <img
            src="/src/assets/send.svg"
            alt="Send"
            className="comment-button"
          />
        </button>
      </form>
    </div>
  );
}
