import { useState, useContext } from "react";
import { CommentsContext } from "../Dashboard/components/PostItem";

const emptyComment = {
  contactId: 2,
  content: "",
  postId: 0,
};

export default function AddCommentForm() {
  const [newComment, setNewComment] = useState(emptyComment);

  const commentContext = useContext(CommentsContext);

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "content") {
      setNewComment({ ...newComment, content: inputValue });
    }
  };

  const handlePost = (event) => {
    event.preventDefault();
    console.log("Handle POST a new Comment");
    fetch(
      `https://boolean-api-server.fly.dev/svennas/post/${commentContext.post.id}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      }
    );

    commentContext.setComments((comment) => [...comment, newComment]);
    setNewComment(emptyComment);
  };

  return (
    <form>
      <div className="create_comment_layout">
        <input
          className="comment_input"
          type="text"
          id="content"
          name="content"
          placeholder="Title it!"
          value={newComment.title}
          onChange={handleChange}
        />
        <button className="post_button" type="submit" onClick={handlePost}>
          <p className="button_text">Post</p>
        </button>
      </div>
    </form>
  );
}
