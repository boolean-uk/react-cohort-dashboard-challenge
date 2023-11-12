import React from "react";

function PostInput(props) {
  const { contactIdOne, setContactIdOne } = props;

  return (
    <div>
      <input type="text" placeholder="what's on your mind?" />
      <button>Post</button>
    </div>
  );
}

export default PostInput;
