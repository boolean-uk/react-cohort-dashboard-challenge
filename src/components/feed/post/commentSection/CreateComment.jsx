// CreateComment.jsx
import "/src/styles/Feed/post/commentSection/CreateComment.css"

import PropTypes from 'prop-types';
import { useContext, useState } from "react"
import { AuthContext } from '/src/components/App.jsx';
import { ProfileImage } from "../../../ProfileImage";
import { postComment } from "../../../../utils/commentRequests";

export const CreateComment = ({postId, setComments}) => {
  const authUser = useContext(AuthContext);
  const [input, setInput] = useState("");

  const writeComment = () => {
    const newComment =
    {
      postId: postId,
      content: input,
      contactId: authUser.id,
    }
    console.log(newComment)
    postComment(postId, newComment, setComments)
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    writeComment(input);
  };

  return (
    <div className="create-comment">
      <div>
        <ProfileImage user={authUser} />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a comment..."
          value={input}
          onChange={handleChange}
          className="create-comment-input-field"
        />
        <div 
          className="send-comment-container"
          onClick={(e) => handleSubmit(e)}
        >
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/sent-icon.png"
            alt="sent-icon"
            className="send-comment"
          />
        </div>
      </div>
    </div>
  );  
}

CreateComment.propTypes = {
  postId: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
};