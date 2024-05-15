/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import { useState, useEffect } from "react";

export default function Comment({ comment }) {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${comment.contactId}`
    );
    const json = await data.json();
    setUser(json);
  };

  return (
    <article className="flex flex-row gap-3 place-items-center">
      <InitialIcon user={user} />
      <p className="bg-inputGrey p-2 rounded-md ">{comment.content}</p>
    </article>
  );
}
