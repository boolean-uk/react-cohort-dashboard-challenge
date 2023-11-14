import React from "react";

function PostInput(props) {
  const {
    setContent,
    content,
    anotherComment,
    setAnotherComment,
    rerenderPost,
    setRerenderPost,
  } = props;

  const postNewComment = () => {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(anotherComment),
    };

    fetch("https://boolean-api-server.fly.dev/loza01/post", options)
      .then((response) => response.json())
      .then((newContentData) => {
        setRerenderPost(true);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    postNewComment();
    console.log("this is the content data after post has been made", content);
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