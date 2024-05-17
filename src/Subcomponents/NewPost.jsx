/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import { useState } from "react";

export default function NewPost({ user, getPosts }) {
  const [postContent, setPostContent] = useState({
    contactId: "",
    content: "",
    title: "",
  });

  function handleChange(e) {
    let newTitle = "";
    if (e.target.value.length > 30) {
      newTitle = e.target.value.slice(0, 15);
    } else {
      newTitle = "Lorem and his friends";
    }
    setPostContent({
      contactId: Number(user.id),
      title: newTitle,
      content: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = await fetch(
      "https://boolean-uk-api-server.fly.dev/MrStashy/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postContent),
      }
    );
    setPostContent({
      contactId: "",
      content: "",
      title: "",
    });
    getPosts();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-3 rounded-md bg-white"
    >
      <InitialIcon user={user} />
      <textarea
        rows="1"
        type="textarea"
        onChange={handleChange}
        className="bg-inputGrey p-2 flex-1 rounded-md resize-y"
        name="newPost"
        placeholder="What's on your mind?"
        value={postContent.content}
      ></textarea>
      <button
        type="submit"
        className="w-28 h-10 rounded-md text-white place-self-center bg-cohortBlue hover:bg-buttonHover"
      >
        Post
      </button>
    </form>
  );
}
