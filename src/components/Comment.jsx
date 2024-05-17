import { useState, useEffect, useContext } from "react";
// import { CurrentUser } from "../App";
import Avatar from "./Avatar";
import useUsers from "../hooks/useUsers";

export default function Comment({ comment, post, setComments }) {
  // const currentUser = useContext(CurrentUser);
  const [user, setUser] = useState();
  const {currentUser, users} = useUsers()

  // useEffect(() => {
  //   fetch(
  //     `https://boolean-api-server.fly.dev/PerikK/contact/${comment.contactId}`,
  //   )
  //     .then((response) => response.json())
  //     .then(setUser);
  // }, []);

    useEffect(() => {
    if (users) {
      const foundUser = users.find(user => user.id === comment.contactId);
      setUser(foundUser);
    }
  }, [users, comment.contactId]);

  if (!user || !user.firstName) return null;

  return (
    <li>
      <div className="flex items-center justify-start rounded-lg px-6 bg-[#e6ebf5] h-20 ">
        <Avatar userId={user.id} />
        <p>{comment.content}</p>
      </div>
    </li>
  );
}
