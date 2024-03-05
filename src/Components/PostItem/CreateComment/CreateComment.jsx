import { useContext, useState } from "react";
import "./CreateComment.css";
import ProfileCircle from "../../ProfileCircle/ProfileCircle";
import * as API from "../../../API/API";
import { PostContext } from "../PostItem";
function CreateComment() {
  const [comment, setComment] = useState("");
  const { post, updateComments } = useContext(PostContext);
  const handleCommentChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setComment(value);
  };

  const postComment = () => {
    //TODO, change contactID(var3)
    API.postCommentToPost(post.id, comment, 1)
      .then((response) => response.json())
      .then((data) => {
        updateComments();
        console.log(data);
      });
  };

  return (
    <div className="d-flex">
      <ProfileCircle />
      <div className="chat-bubble ml-3 response">
        <input
          className="input"
          type="text"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        />
        <button onClick={postComment}>Send</button>
      </div>
    </div>
  );
}

export default CreateComment;
