/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { UsersContext } from "../../App";
import sendBtn from '../../assets/svg/sendBtn.svg'

function PostCard({ post }) {
  const { users, loggedInUser } = useContext(UsersContext);
  const [content, setContent] = useState('')
  const [comment, setComment] = useState({});

  const user = users.find((user) => {
    if (user.id === post.id) return user;
  });

  const postComment = (event) => {
    event.preventDefault()
    setComment([{
      ...loggedInUser,
      content
    }])
    setContent('')
  }
  console.log(comment)


  return (
    <section className="post-container">
      <div className="post-header">
        <div className="profile-initials">
          <p>
            {user.firstName[0]}
            {user.lastName[0]}
          </p>
        </div>
        <div className="post-information">
          <p id="profile-name">
            {user.firstName} {user.lastName}
          </p>
          <p id="post-title">{post.title}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="comment-section">
        {post.comment && (
          <section className="comment">
            <div className="profile-initials">
              <p>
                {post.comment.firstName[0]}
                {post.comment.lastName[0]}
              </p>
            </div>
            <div>
              <p>{post.comment.content}</p>
            </div>
          </section>
        )}
        <form className="comment-section-form" onSubmit={(event) => postComment(event)}>
          <div className="profile-initials">
            <p>{loggedInUser.firstName[0]}{loggedInUser.lastName[0]}</p>
          </div>
          <div className="text-input-container">
            <input  
              type="text"
              name="commentContent"
              placeholder="Add a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="submit"><img src={sendBtn} className="icon" id="send"/></button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default PostCard;
