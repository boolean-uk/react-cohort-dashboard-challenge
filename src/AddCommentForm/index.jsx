import { useState, useContext } from "react";
import { CommentsContext } from "../Dashboard/components/PostItem";
import { UserContext } from "../App";
import "./index.css";

export default function AddCommentForm() {
  const commentContext = useContext(CommentsContext);
  const userContext = useContext(UserContext);

  const [newComment, setNewComment] = useState({
    contactId: userContext.mainUserId,
    content: "",
    postId: commentContext.post.id,
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "content") {
      setNewComment({ ...newComment, content: inputValue });
    }
  };

  const handlePost = (event) => {
    event.preventDefault();

    fetch(
      `https://boolean-api-server.fly.dev/svennas/post/${commentContext.post.id}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      }
    )
      .then((resp) => resp.json())
      .then((commentNew) =>
        commentContext.setComments((post) => [...post, commentNew])
      );

    setNewComment({ ...newComment, content: "" });
  };

  let mainUser = userContext.users.find(
    (user) => user.id === userContext.mainUserId
  );

  if (!mainUser) return <div></div>;

  return (
    <form>
      <div className="create_comment_layout">
        <div
          className=" add_comment_circle"
          style={{ backgroundColor: mainUser.favouriteColour }}
        >
          <p className=" add_comment_circle_text">
            {mainUser.firstName.charAt(0)}
            {mainUser.lastName.charAt(0)}
          </p>
        </div>
        <div className="input_and_button_div">
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Add a comment..."
            value={newComment.content}
            onChange={handleChange}
          />
          <button type="submit" onClick={handlePost}>
            <p className="comment_button_text">Post</p>
          </button>
        </div>
      </div>
    </form>
  );
}
