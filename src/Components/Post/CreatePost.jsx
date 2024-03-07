import { useState, useContext } from "react";
import { TempContext } from "./../../App";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser, setCurrentTab, AddPost } = useContext(TempContext);
  const navigate = useNavigate();

  const addTweet = (e) => {
    e.preventDefault();
    let newPost = {
      title: title,
      content: content,
      contactId: currentUser.id
    }
    AddPost(newPost)
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            className="content"
            type="text"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <div className="actions-section">
          <button
            type="submit"
            disabled={content.length < 1}
            className="post-btn"
          >
            Posts
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
