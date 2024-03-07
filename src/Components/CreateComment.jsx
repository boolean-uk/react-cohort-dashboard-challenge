import { useContext, useState } from "react";
import { AppContext } from "../App";
import { PostContext } from "./Post";
import { getInitials } from "../Utils/helpers";
import SendIcon from "../assets/send.svg"
function CreateComment({ postId }) {
  const { loggedInUser, newPost } = useContext(AppContext);
  const { postComments, setPostComments } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const addNewComment = (event) => {
    event.preventDefault();
    if (content.trim() !== "") {
      const payload = {
        postId: postId,
        content: content,
        contactId: loggedInUser.id
      };

      fetch(`https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => {
          setPostComments(data);
        })
        .catch(error => console.error('Error adding new comment:', error));

      setContent("");
      setIsInputFocused(false);
    }
  };

  return (
    <form onSubmit={addNewComment} className="createComment">
      <div style={{ dislpay: "flex" }}>

        <div className="input-group">
          <div className="profile-picture-comment" style={{ backgroundColor: loggedInUser.favouriteColour, marginRight: '0px' }}>
            <p>{loggedInUser.name && getInitials(loggedInUser.name)}</p>
          </div>
          <input
            type="text"
            value={content}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder={isInputFocused ? "" : "Add a comment..."}
          />
          <button className="btn" type="submit" >
          <img style={{width: "20px"}} src={SendIcon} alt="" />
          </button>
        </div>
      </div>

    </form>
  );
}

export default CreateComment;
