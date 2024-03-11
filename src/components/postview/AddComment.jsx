import { UserContext } from "../../app/App";
import { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate} from 'react-router';
import ProfileIcon from '../profile/ProfileIcon';

AddComment.propTypes = {
  post: PropTypes.object
};

function AddComment(props) {
  const navigate = useNavigate();
  const { post } = props;
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState({
    postId: post.id,
    content: '',
    contactId: user.id
  });
  // Function to handle the comment button

  
  async function handleComment(e) {
    e.preventDefault() 
    await submitComment();
    alert("Commment is added!")
    // Resetting
    setComment({
      postId: post.id,
      content: '',
      contactId: user.id
    })
    navigate('/')
  }

  // Fucntion to put the post to the API
  async function submitComment() {
    const url = `https://boolean-api-server.fly.dev/KantheeK/post/${post.id}/comment`
  
    try {
      const response = await axios.post(url, comment)
      console.log(response.data)
  } catch (error) {
      console.error("Error: ", error)
  }
  }


  return (
    <div className="post-addcomment">
      <form onSubmit={handleComment}>
        <div className="addcomment-content">
          <div className="profile-icon"> 
            <ProfileIcon user={user} />
          </div>
          <div className="textarea-container">
            <textarea 
            name="comment" 
            type="text" 
            placeholder="Add a comment.." 
            value={comment.content} 
            onChange={(e) => setComment({...comment, content: e.target.value})} // Append value from in textarea to newPost
            cols="50" 
            rows="1">
            </textarea>
          
            <button 
              type="submit" 
              className="comment-btn"
              disabled={comment.content === ""}>
              Send
            </button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default AddComment
