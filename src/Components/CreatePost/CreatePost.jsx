import { useContext, useState } from "react";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import "./CreatePost.css";
import * as API from "../../API/API";
import { FeedContext } from "../PostFeed/PostFeed";
import { UserContext } from "../../App";
function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const { updatePosts } = useContext(FeedContext);
  const { user } = useContext(UserContext);

  const handlePostChange = (event) => {
    const { value } = event.target;
    setPostContent(value);
  };

  const createNewPost = () => {
    API.postNewPost(postContent)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostContent("");
        updatePosts();
      });
  };

  return (
    <div className="max-height feed-item p-3 flex-grow">
      <div className="create-post ml-3 align-items-center">
        <ProfileCircle user={user} />
        <div className="input-bubble mx-3 response align-items-center">
          <input
            className="input mx-2 my-1 flex-grow"
            type="text"
            name="comment"
            value={postContent}
            onChange={handlePostChange}
            placeholder="What's on your mind?"
          />
        </div>{" "}
        <button className="btn btn-primary px-5 " onClick={createNewPost}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
