import { useContext, useState } from "react";
import clsx from "clsx";
import { DataContext } from "../App";
import Avatar from "./Avatar";

export default function AddComment(props) {
  const [content, setContent] = useState("");
  const { user } = useContext(DataContext);

  const { postId, comments, setComments } = props;

  const className = clsx({
    "send-comment": true,
    disabled: content === "",
  });

  const url = `https://boolean-api-server.fly.dev/Hamada-AB/post/${postId}/comment`;
  const contactId = user?.id;

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        contactId,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
      });

    setContent("");
  }

  return (
    <div className="add-comment">
      <Avatar>{user}</Avatar>
      <form className="comment-text" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="comment-input"
          value={content}
          placeholder="Add a comment"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={className} disabled={content === ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="send-icon"
            viewBox="0 0 512 512"
          >
            <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
