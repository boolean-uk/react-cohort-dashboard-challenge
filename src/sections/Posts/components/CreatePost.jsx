import React from "react";
import { useEffect, useState, useContext } from "react";
import { LoginContext, PostContext } from "../../../App";

export const CreatePost = () => {
  const { currentUser } = useContext(LoginContext);
  const { posts, setPosts } = useContext(PostContext);
  const PostBody = {
    "title": "",
    "content": "",
    "contactId": currentUser.id,
  };
  const [newPost, setNewPost] = useState(PostBody);

  const HandleSubmit = async (e) => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/post",
      request
    );
    if (!response.ok) {
      throw new Error(`Error`);
    }
    const result = await response.json();
    console.log("Comment submitted successfully:", result);
    setPosts((posts) => [...posts, newPost]);
    setNewPost({
      content: "",
    });
  };
  const HandleChange = async (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          onChange={HandleChange}
          value={newPost.title}
        ></input>
        <input
          type="tSext"
          id="post"
          name="post"
          onChange={HandleChange}
          value={newPost.content}
        ></input>
        <button type="submit">Create new Post</button>
      </form>
    </>
  );
};

export default CreatePost;
