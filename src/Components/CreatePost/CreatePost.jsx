import { useContext, useState } from "react";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import "./CreatePost.css";
import * as API from "../../API/API";
import { FeedContext } from "../PostFeed/PostFeed";
function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const { updatePosts } = useContext(FeedContext);

  const handlePostChange = (event) => {
    const { value } = event.target;
    setPostContent(value);
  };

  const createNewPost = () => {
    API.postNewPost(postContent)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updatePosts();
      });
  };

  return (
    <div className="feed-item p-3 flex ">
      <div className="create-post ml-3">
        <ProfileCircle />
        <div className="input-bubble mx-3 response align-items-center">
          <input
            className="input mx-2"
            type="text"
            name="comment"
            value={postContent}
            onChange={handlePostChange}
            placeholder="What's on your mind?"
          />
        </div>{" "}
        <button className="btn btn-primary px-5" onClick={createNewPost}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
