import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import { CommentContext } from "./PostListItem";
export default function PostListItemForm() {
  const { activeUser } = useContext(UserContext);
  const { comments, post, setComments } = useContext(CommentContext);
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentObject = {
      postId: post.id,
      contactId: activeUser.id,
      content: newComment,
    };

    fetch(
      "https://boolean-api-server.fly.dev/AlexanderNiklasson/post/" +
        post.id +
        "/comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentObject),
      }
    );
    setNewComment("");
    setComments([...comments, newCommentObject]);
  };
  return (
    <div className="create-comment">
      <form className="create-comment-form" onSubmit={handleSubmit}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: activeUser.favouriteColour }}>
          <h2>
            {activeUser.firstName.charAt(0)}
            {activeUser.lastName.charAt(0)}
          </h2>
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          rows={1}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <div className="create-comment-button-container">
          <button type="submit">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 8.25L15.75 12M15.75 12L12 15.75M15.75 12H8.25M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z"
                  stroke="#8185A6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
