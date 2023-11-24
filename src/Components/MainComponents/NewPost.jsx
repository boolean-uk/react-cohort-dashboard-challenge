import { useContext } from "react";
import { UserContents } from "../../App";
import React from "react";

function NewPost(props) {
  const { newPost, setNewPost } = props;

  const { rerenderPost, setRerenderPost } = useContext(UserContents);
  //console.log(rerenderPost);

  const postNewComment = () => {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };

    fetch("https://boolean-api-server.fly.dev/tayokanch/post", options)
      .then((response) => response.json())
      .then(() => {
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
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="what's on your mind?"
        onChange={(e) =>
          setNewPost({ ...newPost, content: e.target.value })
        }
      />
      <button>Post</button>
    </form>
  );
}

export default NewPost;
