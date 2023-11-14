// postInput.jsx
import React from "react";

function PostInput(props) {
  const {
    setContent,
    content, // Add setContent to receive the function to update content state
    anotherComment,
    setAnotherComment,
    rerenderpost,
    setRerenderPost,
  } = props;

  const postNewComment = () => {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(anotherComment),
    };

    fetch("https://boolean-api-server.fly.dev/tayokanch/post", options)
      .then((response) => response.json())
      .then((newContentData) => {
        setContent(...content, newContentData);
        setRerenderPost(true);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    postNewComment();
    console.log("this is the latest content", content);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) =>
          setAnotherComment({ ...anotherComment, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="what's on your mind?"
        onChange={(e) =>
          setAnotherComment({ ...anotherComment, content: e.target.value })
        }
      />
      <button>Post</button>
    </form>
  );
}

export default PostInput;
