import { useState, useContext } from "react";
import { TempContext } from "./../../App";
import { useNavigate } from "react-router-dom";
function CreateComment() {
  const [content, setContent] = useState("");
  const { currentUser, setCurrentTab } = useContext(TempContext);
  const navigate = useNavigate();

  const addTweet = (e) => {
    e.preventDefault();
    // setTweets([
    //     {
    //         ...user,
    //         date: '1m',
    //         content,
    //         commentCount: 0,
    //         retweetCount: 0,
    //         heartCount: 0,
    //         analyticsCount: 0
    //     },
    //     ...tweets
    // ])
  };
  return (
    <div className="createPost">
      <form onSubmit={addTweet}>
        <div className="avatar-section">
        <div
        className="profileIcon"
        style={{ background: currentUser.favouriteColour }}  
        onClick={() => {
          setCurrentTab("profile");
          navigate("/profile");
        }}
      >
         {` ${currentUser ? `${currentUser.firstName[0]}${currentUser.lastName[0]}` : ""}`}
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
        <div className="actions-section">
        </div>
      </form>
    </div>
  );
}

export default CreateComment