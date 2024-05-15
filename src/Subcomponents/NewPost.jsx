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

  function handleSubmit(e) {
    e.preventDefault();
    submitPost();
    setPostContent({
        contactId: "",
        content: "",
        title: "",
      })
     
  }

  const submitPost = async () => {
    // eslint-disable-next-line no-unused-vars
    const data = await fetch(
      "https://boolean-uk-api-server.fly.dev/MrStashy/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postContent),
      }
    );
    getPosts()
  };

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
        className="w-28 rounded-md text-white bg-cohortBlue"
      >
        Post
      </button>
    </form>
  );
}
