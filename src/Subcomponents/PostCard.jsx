/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { loggedInUser } from "../App";

export default function PostCard({ post }) {
  const [currentUser, setCurrentUser] = useState();
  const user = useContext(loggedInUser);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await fetch(
      `https://boolean-api-server.fly.dev/MrStashy/contact/${post.contactId}`
    );
    const json = await data.json();
    setCurrentUser(json);
  };

  return (
    <li className="text-cohortBlue h-auto gap-2 p-3 rounded-md bg-white">
      <header className="flex place-items-center gap-2 m-2">
        <InitialIcon user={currentUser} />
        <div className="heading">
          <p>
            <strong>
              {currentUser &&
                `${currentUser.firstName} ${currentUser.lastName}`}
            </strong>
          </p>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        </div>
      </header>
      <p className="ml-2">{post.content}</p>
      <hr className="h-px bg-inputGrey mx-2 border-0" />
      <CommentSection post={post} />
      <section className="flex gap-2 p-2 rounded-md bg-white">
        <InitialIcon user={user} />
        <input
          className="bg-inputGrey p-2 flex-1 rounded-md"
          name="newPost"
          placeholder="Add a comment..."
        ></input>
      </section>
    </li>
  );
}
