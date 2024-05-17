/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditCommentSection({
  comment,
  post,
  setEditMode,
  getComments,
}) {
  const [newComment, setNewComment] = useState(comment);

  const handleChange = (e) => {
    setNewComment({ ...comment, content: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatePost = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/comment/${comment.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );
    setEditMode(false);
    getComments();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5 flex-row mb-2 justify-between place-items-center w-full"
    >
      <input
        onChange={handleChange}
        className="border p-1 grow rounded-md"
        value={newComment.content}
      />
      <button
        type="submit"
        className="bg-cohortBlue text-white hover:bg-buttonHover px-5 py-1 rounded-md "
      >
        Update
      </button>
    </form>
  );
}
