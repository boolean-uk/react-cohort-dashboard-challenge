/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import EditCommentSection from "./EditCommentSection";
import { useState, useEffect, useContext } from "react";
import { loggedInUser } from "../App";

export default function Comment({ comment, post, getComments }) {
  const [user, setUser] = useState();
  const [editMode, setEditMode] = useState(false);
  const loggedUser = useContext(loggedInUser);

  useEffect(() => {
    getUser();
  }, [comment]);

  const getUser = async () => {
    const data = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${comment.contactId}`
    );
    const json = await data.json();
    setUser(json);
  };

  const handleDelete = async () => {
    const deleteComment = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/comment/${comment.id}`,
      {
        method: "DELETE",
      }
    );
    getComments();
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <article className="flex flex-row gap-3 place-items-center">
      <InitialIcon user={user} />
      {editMode ? (
        <EditCommentSection
          comment={comment}
          post={post}
          setEditMode={setEditMode}
          getComments={getComments}
        />
      ) : (
        <p className="bg-inputGrey p-2 rounded-md max-w-3xl">
          {comment.content}
        </p>
      )}

      {loggedUser.id === user?.id && !editMode ? (
        <div className="icons ml-2 flex flex-row place-items-end ">
          <img
            onClick={handleEdit}
            className="cursor-pointer h-4 mb-1"
            src="/assets/pencil.svg"
          />
          <img
            onClick={handleDelete}
            className="cursor-pointer h-6"
            src="/assets/delete.svg"
          />
        </div>
      ) : null}
    </article>
  );
}
