import "./addComment.css";
import { useState, useEffect } from "react";
const AddComment = ({ getComments, setComments, post, loggedInUser }) => {
  const [addedComment, setAddedComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", addedComment);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId: post.id,
        content: addedComment,
        contactId: loggedInUser.id,
      }),
    };
    fetch(
      `https://boolean-api-server.fly.dev/hamza789987/post/${post.id}/comment`,
      options
    )
      .then((res) => res.json())
      .then(() => getComments());
    setAddedComment("");
  };
  return (
    <div className='addComment'>
      <div className='addCommentInitials'>
        <div>
          {loggedInUser.firstName && loggedInUser.lastName && (
            <p>
              {loggedInUser.firstName[0]}
              {loggedInUser.lastName[0]}
            </p>
          )}
        </div>
      </div>
      <div className='submitComment'>
        <input
          type='text'
          onChange={(e) => setAddedComment(e.target.value)}
          value={addedComment}
          placeholder='Add a comment...'
        />
        <img
          onClick={handleSubmit}
          className='sendCommentButton'
          src='https://www.svgrepo.com/show/533310/send-alt-1.svg'
          alt=''
        />
      </div>
    </div>
  );
};

export default AddComment;
