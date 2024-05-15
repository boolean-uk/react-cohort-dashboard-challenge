/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import { useState, useEffect, useContext } from "react";
import { loggedInUser } from "../App";

export default function Comment({ comment, post, getComments }) {
  const [user, setUser] = useState();
  const loggedUser = useContext(loggedInUser)

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
    const deleteComment = await fetch(`https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/comment/${comment.id}`, {
        method: 'DELETE'
    })
    getComments()
  }


  return (
    <article className="flex flex-row gap-3 place-items-center">
      <InitialIcon user={user} />
      <p className="bg-inputGrey p-2 rounded-md ">{comment.content}</p>
      {loggedUser.id === user?.id ? <><p className='cursor-pointer' onClick={handleDelete}>Delete</p><p>Edit</p></>: null}
    </article>
  );
}
