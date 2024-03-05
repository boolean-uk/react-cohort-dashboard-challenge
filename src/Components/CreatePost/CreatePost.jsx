import ProfileCircle from "../ProfileCircle/ProfileCircle";
import "./CreatePost.css";
function CreatePost() {
  return (
    <div className="feed-item flex ">
      <div className="create-post">
        <ProfileCircle />
        <input className="create-input mx-4"></input>
        <button>Create Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
