/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditPostSection({ post, setEditMode, getPosts }) {
  const [postContent, setPostContent] = useState(post);

  const handleChange = (e) => {
    setPostContent({ ...postContent, content: e.target.value });
    console.log(postContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatePost = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postContent),
      }
    );
    setEditMode(false);
    getPosts();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5 flex-row ml-2 mb-2 justify-between"
    >
      <input
        onChange={handleChange}
        className="border p-1 grow rounded-md"
        value={postContent.content}
      />
      <button
        type="submit"
        className="bg-cohortBlue text-white px-5 rounded-md mr-2 hover:bg-buttonHover "
      >
        Update
      </button>
    </form>
  );
}
