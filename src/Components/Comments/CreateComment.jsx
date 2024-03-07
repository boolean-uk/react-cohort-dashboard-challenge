import { useState, useContext } from "react";
import { TempContext } from "./../../App";
import { useNavigate } from "react-router-dom";
function CreateComment({ id, AddComment }) {
  const [content, setContent] = useState("");
  const { currentUser, setCurrentTab } = useContext(TempContext);
  const navigate = useNavigate();

  function handleKeyUp(e) {
    e.preventDefault();
    // Enter
    if (e.keyCode === 13) {
      let newComment = {
        postId: Number(id),
        contactId: currentUser.id,
        content: content,
      };
      AddComment(newComment);
      console.log(id);
    }
  }
  const addTweet = (e) => {
    e.preventDefault();
    let newComment = {
      postId: Number(id),
      contactId: currentUser.id,
      content: content,
    };
    console.log(newComment);
    AddComment(newComment, id);
  };
  return (
    <div className="createComment">
      <form onSubmit={addTweet} onKeyUp={handleKeyUp} tabIndex={0}>
        <div className="avatar-section">
          <div
            className="profileIcon"
            style={{ background: currentUser.favouriteColour }}
            onClick={() => {
              setCurrentTab("profile");
              navigate("/profile/1");
            }}
          >
            {` ${
              currentUser
                ? `${currentUser.firstName[0]}${currentUser.lastName[0]}`
                : ""
            }`}
          </div>
        </div>

        <div className="textarea-section">
          <input
            className="content"
            type="text"
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
