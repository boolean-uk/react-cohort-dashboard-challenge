import sendBtn from '../../assets/svg/sendBtn.svg'
import { useState } from 'react';

export default function CommentForm({loggedInUser}) {

    const [commentForm, setCommentForm] = useState({
        commentContent: ''
      });

    return (
        <form className="comment-section-form" onSubmit={(e) => updateAPI(e)}>
          <div className="profile-initials">
            <p>{loggedInUser.firstName[0]}{loggedInUser.lastName[0]}</p>
          </div>
          <div className="text-input-container">
            <input  
              type="text"
              name="commentContent"
              placeholder="Add a comment..."
              value={commentForm.commentContent}
              onChange={(e) => handleChange(e)}
            />
            <button className="submit"><img src={sendBtn} className="icon" id="send"/></button>
          </div>
        </form>
    )
}