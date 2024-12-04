import { useContext, useState } from "react";
import clsx from "clsx";
import { DataContext } from "../App";
import { baseUrl } from "../App";

// components
import Avatar from "./Avatar";

// icons
import sendIcon from "../assets/icons/send.svg";

export default function AddComment(props) {
  const [content, setContent] = useState("");

  const { user } = useContext(DataContext);
  const { postId, comments, setComments } = props;

  const className = clsx({
    "send-comment": true,
    disabled: content === "",
  });

  const fetchUrl = `${baseUrl}/post/${postId}/comment`;
  const contactId = user?.id;

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(fetchUrl, {
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
          <img src={sendIcon} alt="arrow icon" className="arrow-icon" />
        </button>
      </form>
    </div>
  );
}
