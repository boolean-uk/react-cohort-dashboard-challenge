import { useContext } from "react";
import { UserContents } from "../../App";
import React from "react";

function PostInput(props) {
  const { anotherComment, setAnotherComment } = props;

  const { rerenderPost, setRerenderPost } = useContext(UserContents);
  //console.log(rerenderPost);

  const postNewComment = () => {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(anotherComment),
    };

    fetch("https://boolean-api-server.fly.dev/tayokanch/post", options)
      .then((response) => response.json())
      .then((newContentData) => {
        setRerenderPost(true);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    postNewComment();
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


