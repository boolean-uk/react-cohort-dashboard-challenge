/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import InitialIcon from "./InitialIcon";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { loggedInUser } from "../App";

export default function PostCard({ post, getPosts }) {
  const [poster, setPoster] = useState();
  const [comment, setComment] = useState({
    contactId: 0,
    content: "",
    postId: 0,
  });

  const user = useContext(loggedInUser);

 
  useEffect(() => {
    const getUser = async () => {
      const data = await fetch(
        `https://boolean-uk-api-server.fly.dev/MrStashy/contact/${post.contactId}`
      );
      const json = await data.json();
      setPoster(json);
    };
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitComment();

  };

  const submitComment = async () => {
    const submit = await fetch(
      `https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    setComment({
      contactId: 0,
      content: "",
      postId: 0,
    });
  };

  const handleChange = e => {
    setComment({
      contactId: user.id,
      content: e.target.value,
      postId: post.id,
    });
  };

  const handleDelete = async () => {
    const deletePost = await fetch(`https://boolean-uk-api-server.fly.dev/MrStashy/post/${post.id}/`, {
        method: 'DELETE'
    })
    getPosts()
  }

  return (
    <li className="text-cohortBlue h-auto gap-2 p-3 rounded-md bg-white">
      <header className="flex flex-row place-items-center gap-2 m-2">
        <InitialIcon user={poster} />
        <div className="heading">
          <p>
            <strong className="capitalize">
              {poster && `${poster.firstName} ${poster.lastName}`}
            </strong>
          </p>
          <Link to={`/posts/${post.id}`}>
            <p className="text-postTitle">{post.title}</p>
          </Link>
        </div>
      </header>
      <div className="flex flex-row justify-between">
      <p className="ml-2 max-w-3xl">{post.content}</p>
       {user?.id === poster?.id ? 
        <div className="icons flex flex-row place-items-end">
        <img className="h-4 mb-1" src="/assets/pencil.svg" />
        <img onClick={handleDelete} className="cursor-pointer h-6" src="/assets/delete.svg" />
        </div> : null}
      </div>
      <hr className="h-px bg-inputGrey mx-2 border-0" />
      <CommentSection post={post} comment={comment} />
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-2 rounded-md bg-white"
      >
        <InitialIcon user={user} />
        <input
          onChange={handleChange}
          value={comment.content}
          className="bg-inputGrey p-2 flex-1 rounded-md"
          name="newPost"
          placeholder="Add a comment..."
        ></input>
      </form>
    </li>
  );
}
